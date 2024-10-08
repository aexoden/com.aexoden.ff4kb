# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

import re
import subprocess

from pathlib import Path

from django.conf import settings


def decode_vars(variables: list[str]) -> str:
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    result: list[str] = []
    variables = variables[1:]

    while len(variables) > 0:
        current = variables[0:6]
        variables = variables[6:]

        value = 0

        for char in current:
            value = (value << 6) + chars.index(char)

        var = value >> 8
        value &= 0xFF

        result.append(f"{var:07X}:{value:d}")

    return " ".join(result)


def get_route_update_time(route: str, seed: int) -> float:
    path = Path(settings.BASE_DIR) / "ff4" / "data" / "routes" / route / f"{seed:03d}.txt"
    return path.stat().st_mtime


def test_line(patterns: list[str], line: str) -> bool:
    return any(re.search(pattern, line) for pattern in patterns)


def test_options(line: str) -> bool:
    patterns = [
        "(In|Out)ward.*(Steps|Secret)",
        "(Walk|Warp)",
        "(Remove|Equip|Skip) Dwarf Axe",
        "Zeromus Menu",
        "Visit Hummingway",
        "Recruit FuSoYa First",
        "Get Ninja Star",
        "to the Big Whale",
        "Save: ",
    ]

    return test_line(patterns, line)


def test_battles(line: str) -> bool:
    patterns = [
        "Blue D. x1",
        "Searcher.*D.Machin",
        "MacGiant.*12.226",
        "MacGiant.*14.593",
        "Mind",
        "Red D.",
        "Red Worm x2.*(9.065|9.010)",
        "Roc x1.*(8.592|8.643)",
    ]

    return test_line(patterns, line)


class RouteDetail:
    def __init__(self, route: str, seed: int, variables: list[str] | None = None) -> None:
        self._route = route
        self._seed = seed
        self._path = Path(settings.BASE_DIR) / "ff4" / "data" / "routes" / route / f"{seed:03d}.txt"

        self._data: list[str] = []
        self._html_data: list[str] = []
        self._battles: dict[str, list[tuple[int, str, str]]] = {}
        self._vars: dict[str, int] = {}
        self._custom = variables is not None
        self._load_data(variables)

    @property
    def data(self) -> list[str]:
        return self._data

    @property
    def html_data(self) -> list[str]:
        return self._html_data

    @property
    def route_description(self) -> str:
        return f"{self._route_description} (version {self._route_version})"

    @property
    def encounters(self) -> int:
        return self._encounters

    @property
    def steps(self) -> int:
        return self._optional_steps + self._extra_steps

    @property
    def optional_steps(self) -> int:
        return self._optional_steps

    @property
    def extra_steps(self) -> int:
        return self._extra_steps

    @property
    def frames(self) -> float:
        return self._frames

    @property
    def custom(self) -> bool:
        return self._custom

    @property
    def update_time(self) -> float:
        return self._path.stat().st_mtime

    @property
    def saved_time(self) -> float:
        return self._saved_time

    @property
    def saved_encounters(self) -> int:
        return self._saved_encounters

    @property
    def battles(self) -> dict[str, list[tuple[int, str, str]]]:
        return self._battles

    @property
    def vars(self) -> dict[str, int]:
        return self._vars

    def get_value(self, index: str) -> int:
        return self._vars.get(index, 0)

    def _parse_variables(self, data: str) -> None:
        if data.strip():
            for index, value in [x.split(":") for x in data.split(" ")]:
                self._vars[index] = int(value)

    def _load_data(self, variables: list[str] | None) -> None:  # noqa: PLR0912, PLR0915
        phase = 1

        if variables:
            var_string = decode_vars(variables)
            rosa_args = ["./rosa", "-r", self._route, "-s", str(self._seed), "-m", "0", "-v", var_string]

            result = subprocess.run(
                rosa_args, capture_output=True, cwd=Path(settings.BASE_DIR) / "rosa", encoding="utf-8", check=True
            )

            data = result.stdout.split("\n")
        else:
            with self._path.open("r", encoding="utf-8") as f:
                data = f.read().split("\n")

        current_area = ""
        current_battles: list[tuple[int, str, str]] = []
        keep_battles = False

        for line in data:
            if not line.strip():
                phase += 1

            if phase == 1:
                tokens = line.split("\t")

                if tokens[0] == "ROUTE":
                    self._route_description = tokens[1].strip()
                elif tokens[0] == "VERSION":
                    self._route_version = int(tokens[1])
                elif tokens[0] == "FRAMES":
                    if "." in tokens[1]:
                        self._frames = float(tokens[1]) * 1000
                    else:
                        self._frames = float(tokens[1])
                elif tokens[0] == "VARS":
                    self._parse_variables(tokens[1])
            elif phase == 2 and len(line) > 1:  # noqa: PLR2004
                if re.search("Steps: [1-9]", line):
                    self._html_data.append(f'<b class="text-primary">{line.rstrip()}</b>')
                elif test_options(line):
                    self._html_data.append(f'<b class="text-info">{line.rstrip()}</b>')
                elif test_battles(line):
                    keep_battles = True
                    self._html_data.append(f'<b class="text-danger">{line.rstrip()}</b>')
                else:
                    self._html_data.append(line.rstrip())

                if line.strip().startswith("Step") or line.strip().startswith("(Step"):
                    matches = re.search(r"Step *(?P<step>[0-9]*): *(?P<index>[0-9]*) / (?P<formation>.*)\)?", line)

                    assert matches  # noqa: S101

                    step = int(matches.group("step"))
                    formation = matches.group("formation")

                    if re.search("Searcher.*Machin", line):
                        style = "text-primary"

                        if line.strip().startswith("("):
                            style += " font-italic"
                            formation = formation[:-1]
                        else:
                            style += " font-weight-bold"
                    elif test_battles(line):
                        style = "text-danger"
                    elif line.strip().startswith("("):
                        style = "text-muted font-italic"
                        formation = formation[:-1]
                    else:
                        style = ""

                    current_battles.append((step, style, formation))
                elif (
                    not line.strip().startswith("Battle")
                    and not test_options(line)
                    and not re.search("Steps: [1-9]", line)
                ):
                    if keep_battles:
                        self._battles[current_area] = current_battles

                    current_area = line[:30].strip()
                    current_battles = []
                    keep_battles = False

                self._data.append(line.rstrip())
            elif phase >= 3 and len(line) > 1:  # noqa: PLR2004
                if keep_battles:
                    self._battles[current_area] = current_battles
                    keep_battles = False

                tokens = line.split()

                if tokens[0] == "Optional":
                    self._optional_steps = int(tokens[2])
                elif tokens[0] == "Extra":
                    self._extra_steps = int(tokens[2])
                elif tokens[0] == "Encounters:":
                    self._encounters = int(tokens[1])
                elif tokens[0] == "Encounters":
                    self._saved_encounters = int(tokens[2])
                elif tokens[0] == "Time":
                    self._saved_time = float(tokens[2][:-1])
