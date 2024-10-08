# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

import json

from pathlib import Path
from typing import Any

from django.conf import settings
from django.http import Http404, HttpRequest, HttpResponse
from django.shortcuts import redirect, render

from ff4.routes.views import ROUTES, get_colors


def map_viewer(request: HttpRequest, map_id: str = "0000") -> HttpResponse:
    try:
        map_int = int(map_id, 16)
        map_str = f"{map_int:04X}"

        if map_id != map_str:
            return redirect("tools:map-viewer-map", map=map_str, permanent=True)
    except ValueError as e:
        raise Http404 from e

    if map_int == 0 and request.resolver_match is not None and request.resolver_match.view_name == "map-viewer-map":
        return redirect("tools:map-viewer", permanent=True)

    base_path = Path(settings.BASE_DIR) / "ff4" / "static" / "img" / "maps" / "composite"

    if not (base_path / f"{map_str}-0.png").exists() and not (base_path / f"{map_str}-1.png").exists():
        raise Http404

    context = {
        "map": int(map_id, 16),
    }

    return render(request, "tools/map-viewer.html", context)


def seed_finder(request: HttpRequest) -> HttpResponse:
    colors = {}

    for route in ROUTES:
        if ROUTES[route]["seed_finder"]:
            colors[route] = get_colors(route)

    context: dict[str, Any] = {
        "routes": ROUTES,
        "colors": json.dumps(colors),
    }

    return render(request, "tools/seed-finder.html", context)
