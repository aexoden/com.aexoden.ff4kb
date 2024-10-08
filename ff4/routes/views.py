# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

import json
import statistics

from pathlib import Path
from typing import Any

from django.conf import settings
from django.http import Http404, HttpRequest, HttpResponse
from django.shortcuts import render
from django.urls import reverse  # type: ignore

from .models import RouteDetail, get_route_update_time

GROUPS: dict[str, dict[str, str | bool]] = {
    "standard": {
        "name": "Standard Routes",
        "description": "These are the standard routes people are most likely to use.",
        "twin_safe": True,
    },
    "recovery": {
        "name": "Recovery Routes",
        "description": "These routes are intended to be used to recover a step route in case the original one was permanently lost.",  # noqa: E501
        "twin_safe": True,
    },
    "testing": {
        "name": "Testing Routes",
        "description": "These are routes currently in development. They may or may not be accurate, and are almost certainly still suboptimal.",  # noqa: E501
        "twin_safe": True,
    },
    "alternate": {
        "name": "Alternate Routes",
        "description": "These routes are uncommon alternate routes that are less likely to be used during a run. They currently have no summary or tutorial data. They may or may not be twin seed safe.",  # noqa: E501
        "twin_safe": True,
    },
    "hidden": {
        "name": "Hidden Routes",
        "description": "These routes are active, but are hidden from public view.",
        "twin_safe": False,
    },
    "archive": {
        "name": "Archived Routes",
        "description": "These routes are archived from the old version of the site. They have not been updated to the new data structure, and their optimization status is unknown (though they should be near optimal relative to their input data). There is no associated tutorial or summary data. Eventually, I would like to convert them to the new structure, but this is not a high priority. These routes are not guaranteed to be twin seed safe (though some of them may be).",  # noqa: E501
        "twin_safe": False,
    },
}

ROUTES: dict[str, dict[str, str | bool]] = {
    "paladin": {
        "name": "Paladin%",
        "description": "Paladin% covers the game from the beginning of the game until Cecil becomes a Paladin. The step route begins after the Mist Clip. Almost identical to the beginning hour of the two primary full-game routes, this route makes for a great place to begin for a new runner.",  # noqa: E501
        "group": "standard",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "nocw": {
        "name": "Any% NoCW",
        "description": "Any% NoCW is from the beginning of the game until Zeromus is defeated by any means. The step route begins after the Mist Clip. Typically, this means using the 64-door glitch to defeat Zeromus using the upt Co spell. However, it is technically a superset of Any% No64, as any valid No64 run is also a valid NoCW run (albeit slower).",  # noqa: E501
        "group": "standard",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "no64-rosa": {
        "name": "Any% No64 (Rosa)",
        "description": "This route runs from the beginning of the game until Zeromus is defeated. Use of the 64-door glitch is banned. The step route begins after the Mist Clip. This particular version of the route relies on Rosa as the primary damage dealer at the end of the game.",  # noqa: E501
        "group": "standard",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "no64-rosa-safe": {
        "name": "Any% No64 (Rosa) (Safe)",
        "description": "This route runs from the beginning of the game until Zeromus is defeated. Use of the 64-door glitch is banned. The step route begins after the Mist Clip. This particular version of the route relies on Rosa as the primary damage dealer at the end of the game. This variant adds the healing pot in the Castle of Dwarves and two extra elixirs in the Pass to Bab-il.",  # noqa: E501
        "group": "standard",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "no64-rosa-marathon": {
        "name": "Any% No64 (Rosa) (Marathon)",
        "description": "This route runs from the beginning of the game until Zeromus is defeated. Use of the 64-door glitch is banned. The step route begins after the Mist Clip. This particular version of the route relies on Rosa as the primary damage dealer at the end of the game. This variant adds extra save points and a visit to the Elixir shop in the Hummingway cave for use during marathons. In addition, the minimum number of steps in the Hummingway has been increased from 16 to 32 to allow for catching the Namingway in the cave.",  # noqa: E501
        "group": "standard",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "no64-excalbur": {
        "name": "Any% No64 (Edge+Excalbur)",
        "description": "This route runs from the beginning of the game until Zeromus is defeated. Use of the 64-door glitch is banned. The step route begins after the Mist Clip. This particular version of the route relies on Edge as the primary damage dealer at the end of the game.",  # noqa: E501
        "group": "standard",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "no64-excalbur-marathon": {
        "name": "Any% No64 (Edge+Excalbur) (Marathon)",
        "description": "This route runs from the beginning of the game until Zeromus is defeated. Use of the 64-door glitch is banned. The step route begins after the Mist Clip. This particular version of the route relies on Edge as the primary damage dealer at the end of the game. This variant adds extra save points for use during marathons. In addition, the minimum number of steps in the Hummingway has been increased from 16 to 32 to allow for catching the Namingway in the cave. Finally, this route matches the no64-rosa-marathon route until Castle Baron after escaping the underground. This allows you to defer which route to use (for bid war purposes, perhaps) until that point in the game.",  # noqa: E501
        "group": "standard",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "no64-rosa-marathon-recovery-fusoya": {
        "name": "Any% No64 (Rosa) (Marathon) (Recovery: FuSoYa)",
        "description": "This variant of no64-rosa-marathon runs from immediately upon landing on the moon until Zeromus is defeated, and is primarily intended as a step route (and grind) recovery method.",  # noqa: E501
        "group": "recovery",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "no64-rosa-marathon-recovery-paladin": {
        "name": "Any% No64 (Rosa) (Marathon) (Recovery: Paladin)",
        "description": "This variant of no64-rosa-marathon runs from the save point on Mt.Ordeals after Cecil becomes a Paladin until Zeromus is defeated, and is primarily intended as a step route (and grind) recovery method.",  # noqa: E501
        "group": "recovery",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "no64-excalbur-marathon-recovery-fusoya": {
        "name": "Any% No64 (Edge+Excalbur) (Marathon) (Recovery: FuSoYa)",
        "description": "This variant of no64-excalbur-marathon runs from immediately upon landing on the moon until Zeromus is defeated, and is primarily intended as a step route (and grind) recovery method.",  # noqa: E501
        "group": "recovery",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "no64-excalbur-marathon-recovery-paladin": {
        "name": "Any% No64 (Edge+Excalbur) (Marathon) (Recovery: Paladin)",
        "description": "This variant of no64-excalbur-marathon runs from the save point on Mt.Ordeals after Cecil becomes a Paladin until Zeromus is defeated, and is primarily intended as a step route (and grind) recovery method. As with the base no64-excalbur-marathon route, this route matches the no64-rosa-marathon-recovery-paladin route until Castle Baron after escaping the underground. This allows you to defer which route to use (for bid war purposes, perhaps) until that point in the game.",  # noqa: E501
        "group": "recovery",
        "enabled": True,
        "twin_safe": True,
        "complete": True,
        "seed_finder": True,
        "status": "Optimal",
    },
    "glitchless": {
        "name": "Any% Glitchless",
        "description": "This route runs from the beginning of the game until Zeromus is defeated, without using any of various glitches. These routes assume you know which seed you are using before you start the run.",  # noqa: E501
        "group": "standard",
        "enabled": True,
        "twin_safe": True,
        "complete": False,
        "seed_finder": False,
        "status": "Near Optimal (Optimal Estimate: Late 2024)",
    },
    "glitchless-no-manip": {
        "name": "Any% Glitchless (No Seed Manipulation)",
        "description": "This route runs from the beginning of the game until Zeromus is defeated, without using any of various glitches. These routes are safe to use if you aren not manipulating your starting seed, but some seeds may be suboptimal as a result.",  # noqa: E501
        "group": "standard",
        "enabled": True,
        "twin_safe": True,
        "complete": False,
        "seed_finder": True,
        "status": "Suboptimal (Optimal Estimate: Mid to Late 2025)",
    },
    "no64-rosa-all-bosses-riversmccown": {
        "name": "Any% No64 (Rosa) All Bosses [riversmccown]",
        "description": "This route branches from the existing no64-rosa routes after defeating CPU, and may be suboptimal. It was put together for RPGLB 2024 and is primarily intended for use in a marathon setting, but does not include any additional marathon safety, except for using the save point after defeating Plague and the D.Lunars. They are twin seed safe as long as you start on the regular no64-rosa routes.",  # noqa: E501
        "group": "alternate",
        "enabled": True,
        "twin_safe": True,
        "complete": False,
        "seed_finder": False,
        "status": "Suboptimal",
    },
    "no64-excalbur-all-bosses-riversmccown": {
        "name": "Any% No64 (Edge+Excalbur) All Bosses [riversmccown]",
        "description": "This route branches from the existing no64-rosa routes after defeating Rubicant, and may be suboptimal. It was put together for RPGLB 2024 and is primarily intended for use in a marathon setting, but does not include any additional marathon safety, except for using the save point after defeating Plague and the D.Lunars. They are twin seed safe as long as you start on the regular no64-rosa routes.",  # noqa: E501
        "group": "alternate",
        "enabled": True,
        "twin_safe": True,
        "complete": False,
        "seed_finder": False,
        "status": "Suboptimal",
    },
    "premist": {
        "name": "Pre-Mist Clip",
        "description": "From the beginning of the game until the Mist Clip. Primarily useful for demonstrating that seed 92 is optimal.",  # noqa: E501
        "group": "alternate",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
        "status": "Optimal",
    },
    "sfc-nocw": {
        "name": "SFC Any% NoCW",
        "description": "This is the Any% NoCW route for the SFC version of the game. The actual speedrun is not completely optimized yet, so the step routes are in flux. This route follows my guide.",  # noqa: E501
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "sfc-nocw-toru": {
        "name": "SFC Any% NoCW (Toru_1988)",
        "description": "This is the Any% NoCW route for the SFC version of the game. The actual speedrun is not completely optimized yet, so the step routes are in flux. This route is used by Toru_1988.",  # noqa: E501
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "no64-drain": {
        "name": "Any% No64 (Edge+Drain)",
        "description": "This route runs from the beginning of the game until Zeromus is defeated. Use of the 64-door glitch is banned. The step route begins after the Mist Clip. This particular version of the route relies on Edge as the primary damage dealer at the end of the game. This has largely been deprecated in favor of either Edge+Excalbur or Rosa.",  # noqa: E501
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "octomamm-cecil-kain-darkness": {
        "name": "Octomamm% (Cecil+Kain+Darkness)",
        "description": "From the beginning of the game until Octomamm is defeated, using only Kain and Cecil, while picking up the Darkness sword.",  # noqa: E501
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "ss-paladin": {
        "name": "Paladin% Single Segment",
        "description": "From the beginning of the game until Cecil becomes a paladin. The game must be completed in a single run without reloading a save.",  # noqa: E501
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "ss-no64-excalbur": {
        "name": "Any% No64 Single Segment (Edge+Excalbur)",
        "description": "From the beginning of the game until Zeromus is defeated, without using the 64-door glitch. The game must be completed in a single run without reloading a save. Edge is the primary endgame damage dealer.",  # noqa: E501
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "marathon-no64-drain": {
        "name": "Any% No64 (Edge+Drain) Marathon Safe (AGDQ 2016)",
        "description": "From the beginning of the game until Zeromus is defeated, without using the 64-door glitch. The game must be completed in a single run without reloading a save. Edge is the primary endgame damage dealer. This route has additional save points routed in and was designed specifically for AGDQ 2016.",  # noqa: E501
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "marathon-no64-excalbur": {
        "name": "Any% No64 (Edge+Excalbur) Marathon Safe (AGDQ 2016)",
        "description": "From the beginning of the game until Zeromus is defeated, without using the 64-door glitch. The game must be completed in a single run without reloading a save. Edge is the primary endgame damage dealer. This route has additional save points routed in and was designed specifically for AGDQ 2016.",  # noqa: E501
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "marathon-no64-excalbur-bosses": {
        "name": "Any% No64 (Edge+Excalbur) Extra Bosses Marathon Safe (AGDQ 2016)",
        "description": "From the beginning of the game until Zeromus is defeated, without using the 64-door glitch. The game must be completed in a single run without reloading a save. Edge is the primary endgame damage dealer. This route has additional save points routed in and was designed specifically for AGDQ 2016. This route has extra bosses as well.",  # noqa: E501
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "uc": {
        "name": "Unprecedented Crisis v2.1 Any% No Major Skips",
        "description": "This is a run of the Unprecedented Crisis romhack.",
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "uc-riversmccown": {
        "name": "Unprecedented Crisis v3.1 Any% No Major Skips (riversmccown)",
        "description": "This is a run of the Unprecedented Crisis romhack.",
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "uc-mist": {
        "name": "Unprecedented Crisis v3.1 Any% (Mist Clip%)",
        "description": "This is a run of the Unprecedented Crisis romhack.",
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
    "tdw": {
        "name": "The Darkness Within v1.07b Any%",
        "description": "This is a run of the The Darkness Within romhack.",
        "group": "archive",
        "enabled": True,
        "complete": False,
        "seed_finder": False,
    },
}


def get_color(value: float, mean: float, stdev: float) -> str:
    colors = [
        (0.00, (128, 64, 0)),
        (0.50, (255, 255, 255)),
        (1.00, (0, 224, 0)),
        (1.10, (224, 224, 0)),
        (1.50, (224, 224, 0)),
    ]

    z = (value - mean) / stdev
    value = (z / -5) + 0.5
    value = max(0, min(1.5, value))

    index = 1
    while colors[index][0] < value:
        index += 1
    best_color = colors[index]
    worst_color = colors[index - 1]

    subvalue = (value - worst_color[0]) / (best_color[0] - worst_color[0])
    delta = tuple(best_color[1][x] - worst_color[1][x] for x in range(3))
    color = tuple(int(subvalue * delta[x] + worst_color[1][x]) for x in range(3))

    return "#{:02X}{:02X}{:02X}".format(*color)


def mad(data: list[float]) -> float:
    median = statistics.median(data)
    return statistics.median([abs(x - median) for x in data]) * 1.4826


def index(request: HttpRequest) -> HttpResponse:
    routes: dict[str, dict[str, Any]] = dict(GROUPS)

    for route, data in ROUTES.items():
        if isinstance(data["group"], str):
            if data["group"] == "hidden":
                continue

            if "routes" not in routes[data["group"]]:
                routes[data["group"]]["routes"] = {}

            routes[data["group"]]["routes"][route] = data

    for group in list(routes.keys()):
        if "routes" not in routes[group]:
            del routes[group]

    context = {
        "routes": routes,
    }

    return render(request, "routes/index.html", context)


def get_metrics(route: str) -> dict[str, list[float]]:
    metrics_cache_path = Path(settings.BASE_DIR) / "ff4" / "cache" / f"metrics-{route}.json"
    metrics_cache_updated = False

    if metrics_cache_path.exists():
        with metrics_cache_path.open("r", encoding="utf-8") as f:
            seed_metrics = json.load(f)
    else:
        seed_metrics: dict[str, list[float]] = {
            "update_time": [-1 for _ in range(256)],
            "frames": [0 for _ in range(256)],
            "encounters": [0 for _ in range(256)],
            "steps": [0 for _ in range(256)],
        }

    try:
        for seed in range(256):
            if (
                seed_metrics["update_time"][seed] == -1
                or get_route_update_time(route, seed) > seed_metrics["update_time"][seed]
            ):
                r = RouteDetail(route, seed)
                seed_metrics["update_time"][seed] = r.update_time
                seed_metrics["frames"][seed] = r.frames
                seed_metrics["encounters"][seed] = r.encounters
                seed_metrics["steps"][seed] = r.steps
                metrics_cache_updated = True
    except FileNotFoundError as e:
        msg = "Route does not exist."
        raise Http404(msg) from e

    if metrics_cache_updated:
        with metrics_cache_path.open("w", encoding="utf-8") as f:
            json.dump(seed_metrics, f)

    return seed_metrics


def get_colors(route: str) -> list[str]:
    metrics = get_metrics(route)

    return [
        get_color(metrics["frames"][seed], statistics.median(metrics["frames"]), mad(metrics["frames"]))
        for seed in range(256)
    ]


def route(request: HttpRequest, route: str) -> HttpResponse:
    seed_metrics = get_metrics(route)
    seeds: list[list[dict[str, Any]]] = []

    for group_index in range(16):
        group: list[dict[str, Any]] = []

        for index in range(16):
            seed = group_index * 16 + index

            group.append(
                {
                    "seed": seed,
                    "background": get_color(
                        seed_metrics["frames"][seed],
                        statistics.median(seed_metrics["frames"]),
                        mad(seed_metrics["frames"]),
                    ),
                }
            )

        seeds.append(group)

    metrics: list[dict[str, Any]] = []

    metric_data = {
        "Time": "frames",
        "Encounters": "encounters",
        "Extra Steps": "steps",
    }

    for metric, key in metric_data.items():
        values = {
            "best": min(seed_metrics[key]),
            "median": sorted(seed_metrics[key])[len(seed_metrics[key]) // 2],
            "worst": max(seed_metrics[key]),
        }

        result = {
            "name": metric,
        }

        for value_type, value in values.items():
            selected: list[int] = []

            for seed, seed_value in enumerate(seed_metrics[key]):
                if seed_value == value:
                    selected.append(seed)

            formatted_value = f"{value * 655171 / 39375000000:0.3f}s" if metric == "Time" else f"{value}"

            url = reverse("routes:detail", args=(route, selected[0]))

            extra_str = f" and {len(selected) - 1} other{'s' if len(selected) > 2 else ''}" if len(selected) > 1 else ""  # noqa: PLR2004
            result[value_type] = f'{formatted_value} (<a href="{url}">Seed {selected[0]}</a>{extra_str})'

        metrics.append(result)

    context: dict[str, Any] = {
        "route": route,
        "route_data": ROUTES[route],
        "metrics": metrics,
        "seeds": seeds,
    }

    return render(request, "routes/route.html", context)


def detail(request: HttpRequest, route: str, seed: int, variables: list[str] | None = None) -> HttpResponse:
    try:
        r = RouteDetail(route, seed, variables)
    except FileNotFoundError as e:
        msg = "Route and seed combination does not exist."
        raise Http404(msg) from e

    statistics: list[dict[str, Any]] = [
        {"name": "Route", "data": r.route_description},
        {"name": "Route Time", "data": f"{r.frames * 655171 / 39375000000:0.3f}s (saves {r.saved_time:0.3f}s)"},
        {"name": "Route Encounters", "data": f"{r.encounters} (saves {r.saved_encounters} encounters)"},
        {"name": "Optional Steps", "data": r.optional_steps},
        {"name": "Extra Steps", "data": r.extra_steps},
    ]

    context: dict[str, Any] = {
        "custom": r.custom,
        "detail": r.html_data,
        "battles": json.dumps(r.battles),
        "route": route,
        "route_data": ROUTES[route],
        "statistics": statistics,
        "seed": seed,
        "vars": json.dumps(r.vars),
    }

    return render(request, "routes/detail.html", context)
