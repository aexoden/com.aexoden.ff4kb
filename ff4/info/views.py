# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

import json

from collections.abc import Callable
from enum import Enum
from pathlib import Path
from typing import Any, TypeVar, cast

from django.conf import settings
from django.http import Http404, HttpRequest, HttpResponse
from django.shortcuts import render

T = TypeVar("T", str, int, bool)


#
# Enums
#


class Version(Enum):
    US = 0
    JP = 1
    EASYTYPE = 2


class ConditionOpcode(Enum):
    CHECK_STATUS = 0
    CHECK_HP = 1
    CHECK_FLAG = 2
    CHECK_LIVING = 3
    CHECK_MONSTER_COUNT = 4
    CHECK_FORMATION = 5
    CHECK_ACTING_TYPE_ALONE = 6
    CHECK_RECENT_ATTACK = 7
    CHECK_RECENT_ATTACKS_ALL = 8
    CHECK_RUNNING_WITH_SPELL = 9
    CHECK_DAMAGE = 10
    CHECK_ALONE = 11
    ALWAYS = 255


#
# Functions
#


def filter_arrangement(value: str, _version: Version) -> str:
    arrangements = {
        14: "14: Zombie x4",
        18: "18: Machine x2, Beamer x3",
        20: "20: Guard x3",
        29: "29: Gargoyle x1, Cocktric x3",
        33: "33: Spirit x2, Soul x2, Red Bone x2",
        43: "43: Mad Ogre x4 (A)",
        45: "45: Mad Ogre x4 (B)",
        48: "48: Octomamm",
        49: "49: Antlion",
        50: "50: Girl (summons Titan)",
        51: "51: D.Mist",
        52: "52: MomBomb",
        53: "53: Milon",
    }

    if int(value) in arrangements:
        return arrangements[int(value)]

    return f"{value}"


def filter_audio_track(value: str, _version: Version) -> str:
    audio_tracks = {
        "0": "Battle 1",
        "1": "Battle 2",
        "2": "Battle with the Four Fiends",
    }

    return audio_tracks.get(value, "[does not change music]")


def filter_song(value: int, _version: Version) -> str:
    songs: dict[int, str] = {
        0x00: "none",
        0x04: "Chocobo Chocobo",
        0x05: "Samba de Chocobo!",
        0x07: "The Final Battle",
        0x0B: "Battle With the Four Fiends",
        0x0F: "Sorrow and Loss",
        0x1A: "Battle 2",
        0x2E: "Fabul",
        0x30: "Enter Fat Chocobo",
        0x33: "Mystic Mysidia",
    }

    return songs.get(value, f"song #{value:02X}")


def filter_drop_rate(value: str, _version: Version) -> str:
    return f"{int(value) / 99 * 100:0.3f}% ({value}/99)"


def filter_element_weakness(value: str, _version: Version) -> str:
    element = int(value)
    elements: list[str] = []
    suffix = ""

    if element & 0x01 > 0:
        elements.append("Fire")
    if element & 0x02 > 0:
        elements.append("Ice")
    if element & 0x04 > 0:
        elements.append("Lightning")
    if element & 0x08 > 0:
        elements.append("Darkness")
    if element & 0x10 > 0:
        elements.append("Holy")
    if element & 0x20 > 0:
        elements.append("Air")
    if element & 0x40 > 0:
        elements.append("Drain")
    if element & 0x80 > 0:
        suffix = " (strong)"

    if len(elements) > 0:
        return ", ".join(elements) + suffix

    return "None"


def filter_item(value: str, version: Version) -> str:
    return ff4.get_item_names(int(value))[version]


def filter_negative_one(value: str, _version: Version) -> str:
    return "None" if value == "-1" else value


def filter_race(value: str, _version: Version) -> str:
    race = int(value)
    races: list[str] = []

    if race & 0x01 > 0:
        races.append("Dragon")
    if race & 0x02 > 0:
        races.append("Machine")
    if race & 0x04 > 0:
        races.append("Reptile")
    if race & 0x08 > 0:
        races.append("Spirit")
    if race & 0x10 > 0:
        races.append("Giant")
    if race & 0x20 > 0:
        races.append("Flan")
    if race & 0x40 > 0:
        races.append("Mage")
    if race & 0x80 > 0:
        races.append("Undead")

    if len(races) == 0:
        races.append("None")

    return ", ".join(races)


def filter_status(value: str, _version: Version) -> str:
    status = int(value)
    statuses: list[str] = []

    status_data: dict[int, str] = {
        0x00000001: "Poison",
        0x00000002: "Darkness",
        0x00000004: "Mute",
        0x00000008: "Pig",
        0x00000010: "Small",
        0x00000020: "Toad",
        0x00000040: "Stone",
        0x00000080: "Swoon",
        0x00000100: "Gradual Petrification (1/3)",
        0x00000200: "Gradual Petrification (2/3)",
        0x00000400: "Berserk",
        0x00000800: "Charm",
        0x00001000: "Sleep",
        0x00002000: "Paralyze",
        0x00004000: "Float",
        0x00008000: "Curse",
        0x00010000: "Count",
        0x00020000: "Jumping",
        0x00040000: "Twin Casting",
        0x00080000: "Charging",
        0x00100000: "Defending",
        0x00200000: "Egg",
        0x00400000: "Stop",
        0x00800000: "Magnetized",
        0x01000000: "HP Critical",
        0x02000000: "Covered",
        0x04000000: "Image (one hit)",
        0x08000000: "Image (two hits)",
        0x10000000: "Barrier",
        0x20000000: "Wall",
        0x40000000: "HP Sap",
        0x80000000: "Hiding",
    }

    for mask, name in status_data.items():
        if status & mask > 0:
            statuses.append(name)

    if len(statuses) == 0:
        statuses.append("None")

    return ", ".join(statuses)


def extract_values(values: str | int | bool | dict[str, list[str]], return_type: type[T]) -> dict[Version, T]:  # noqa: FBT001
    if isinstance(values, dict):
        value_us = ""
        value_jp = ""
        value_easytype = ""

        for value, versions in values.items():
            if "us" in versions:
                value_us = value

            if "jp" in versions:
                value_jp = value

            if "jp-easytype" in versions:
                value_easytype = value

            if "us" in versions and "us-rev-1" not in versions:
                msg = "USA and USA (Rev 1) have different values"
                raise ValueError(msg)

            if "jp" in versions and "jp-rev-1" not in versions:
                msg = "Japan and Japan (Rev 1) have different values"
                raise ValueError(msg)

        return {
            Version.US: return_type(value_us),
            Version.JP: return_type(value_jp),
            Version.EASYTYPE: return_type(value_easytype),
        }

    return {
        Version.US: return_type(values),
        Version.JP: return_type(values),
        Version.EASYTYPE: return_type(values),
    }


def group_values(
    values: str | int | bool | dict[str, list[str]],  # noqa: FBT001
    return_type: type[T],
    filter_func: Callable[[str, Version], str] | None = None,
) -> dict[str, T]:
    if not isinstance(values, dict):
        return {"All": return_type(filter_func(str(values), Version.US) if filter_func else values)}

    output: list[tuple[int, tuple[str, str]]] = []
    output_string: list[tuple[int, str]] = []

    for value, versions in values.items():
        version_set = set(versions)

        if "us" in versions and "us-rev-1" not in versions:
            msg = "USA and USA (Rev 1) have different values"
            raise ValueError(msg)

        if "jp" in versions and "jp-rev-1" not in versions:
            msg = "Japan and Japan (Rev 1) have different values"
            raise ValueError(msg)

        if version_set == {"us", "us-rev-1"}:
            version = "USA"
            filter_version = Version.US
            priority = 10
        elif version_set == {"jp-easytype", "us", "us-rev-1"}:
            version = "USA and Easytype"
            filter_version = Version.US
            priority = 10
        elif version_set == {"jp", "jp-rev-1"}:
            version = "Japan"
            filter_version = Version.JP
            priority = 5
        elif version_set == {"jp-easytype"}:
            version = "Easytype"
            filter_version = Version.EASYTYPE
            priority = 3
        elif version_set == {"jp", "jp-rev-1", "us", "us-rev-1"}:
            version = "USA and Japan"
            filter_version = Version.JP
            priority = 10
        elif version_set == {"jp", "jp-easytype", "jp-rev-1"}:
            version = "Japan and Easytype"
            filter_version = Version.JP
            priority = 5
        else:
            version = ", ".join(versions)
            filter_version = Version.US
            priority = -1

        output_value = filter_func(str(value), filter_version) if filter_func else value

        output_string.append((priority, f"{output_value} ({version})"))
        output.append((priority, (output_value, version)))

    return {x[1][1]: return_type(x[1][0]) for x in sorted(output, reverse=True)}


def group_values_string(
    values: str | int | bool | dict[Any, list[str]],  # noqa: FBT001
    filter_func: Callable[[str, Version], str] | None = None,
) -> str:
    grouped = group_values(values, str, filter_func)

    return " / ".join(
        [str(value) if version == "All" else f"{value} ({version})" for version, value in grouped.items()]
    )


def format_action_target(target: int) -> str:
    targets = {
        0x16: "self",
        0x17: "all monsters",
        0x18: "all monsters except self",
        0x19: "all type 1 monsters",
        0x1A: "all type 2 monsters",
        0x1B: "all type 3 monsters",
        0x1C: "party front row",
        0x1D: "party back row",
        0x1E: "first paralyzed monster",
        0x1F: "first sleeping monster",
        0x20: "first charmed monster",
        0x21: "first HP critical monster",
        0x22: "random character or monster",
        0x23: "random character or monster except self",
        0x24: "random monster",
        0x25: "random monster except self",
        0x26: "random front row character",
        0x27: "random back row character",
        0x28: "all characters",
        0x29: "all swooned monsters",
    }

    if target < 0x16:  # noqa: PLR2004
        return format_character_target(target)[0]

    return targets.get(target, f"Unexpected target value: {target:02X}")


def format_character_target(target: int) -> tuple[str, bool]:
    characters = {
        0x01: "Cecil (dark knight)",
        0x02: "Kain (before Mist)",
        0x03: "Rydia (child)",
        0x04: "Tellah (before Damcyan)",
        0x05: "Edward",
        0x06: "Rosa (before Fabul)",
        0x07: "Yang (before Leviathan)",
        0x08: "Palom",
        0x09: "Porom",
        0x0A: "Tellah (before Meteo)",
        0x0B: "Cecil (paladin)",
        0x0C: "Tellah (final)",
        0x0D: "Yang (final)",
        0x0E: "Cid",
        0x0F: "Kain (before Sealed Cave)",
        0x10: "Rosa (final)",
        0x11: "Rydia (final)",
        0x12: "Edge",
        0x13: "FuSoYa",
        0x14: "Kain (final)",
        0x15: "Golbez",
    }

    if target in characters:
        return characters[target], False

    msg = f"Invalid character ID: {target:02X}"
    raise ValueError(msg)


def format_condition_target(target: int) -> tuple[str, bool]:  # noqa: PLR0911
    if target < 0x16:  # noqa: PLR2004
        return format_character_target(target)

    if target == 0x17:  # noqa: PLR2004
        return "self", False

    if target in {0x18, 0x19}:
        return "all characters", True

    if target in {0x1A, 0x25}:
        return "all monsters of type 1", True

    if target in {0x1B, 0x26}:
        return "all monsters of type 2", True

    if target in {0x1C, 0x27}:
        return "all monsters of type 3", True

    if target == 0x1D:  # noqa: PLR2004
        return "all", True

    if target == 0x1E:  # noqa: PLR2004
        return "all except self", True

    if target in {0x1F, 0x24}:
        return "all monsters", True

    if target in {0x20, 0x23}:
        return "all monsters except self", True

    if target in {0x21, 0x28}:
        return "front row characters", True

    if target in {0x22, 0x29}:
        return "back row characters", True

    return f"unknown target: {target:02X}", False


#
# Classes
#


class FF4:
    def __init__(self) -> None:
        path = Path(settings.BASE_DIR) / "ff4" / "data"

        with (path / "formations.json").open("r", encoding="utf-8") as f:
            self._formations = json.load(f)

        with (path / "items.json").open("r", encoding="utf-8") as f:
            self._items = json.load(f)

        with (path / "monsters.json").open("r", encoding="utf-8") as f:
            monsters = json.load(f)
            self._monsters = monsters["monsters"]
            self._derived_stats = monsters["derived_stats"]

        with (path / "scripts.json").open("r", encoding="utf-8") as f:
            self._scripts = json.load(f)

        with (path / "spells.json").open("r", encoding="utf-8") as f:
            self._spells = json.load(f)

    #
    # Public Methods
    #

    def get_formation(self, formation_id: int) -> dict[str, Any]:
        formation_data: dict[str, Any] = dict(self._formations[formation_id])

        monsters: list[dict[str, Any]] = [
            {
                "id": formation_data[f"monster_{i}_id"],
                "count": group_values_string(formation_data[f"monster_{i}_count"]),
                "swooned": group_values_string(formation_data[f"monster_{i}_swooned"]),
                "egg": group_values_string(formation_data[f"monster_{i}_egg"]),
            }
            for i in range(1, 4)
            if isinstance(formation_data[f"monster_{i}_count"], dict) or formation_data[f"monster_{i}_count"] > 0
        ]

        formation_data["monsters"] = monsters

        formation_data["description_us"] = self._get_formation_description(formation_id, Version.US)
        formation_data["description_jp"] = self._get_formation_description(formation_id, Version.JP)
        formation_data["description_easytype"] = self._get_formation_description(formation_id, Version.EASYTYPE)

        return formation_data

    def get_formations(self) -> list[dict[str, Any]]:
        return [self.get_formation(i) for i in range(len(self._formations))]

    def get_item_names(self, item_id: int) -> dict[Version, str]:
        return extract_values(self._items[item_id]["name"], str)

    def get_spell_names(self, spell_id: int) -> dict[Version, str]:
        return extract_values(self._spells[spell_id]["name"], str)

    def get_monster(self, monster_id: int) -> dict[str, Any]:
        return self._monsters[monster_id]

    def get_monsters(self) -> list[dict[int, Any]]:
        return self._monsters

    def get_monster_names(self, monster_id: int) -> dict[Version, str]:
        return extract_values(self._monsters[monster_id]["name"], str)

    def get_script(self, monster_id: int, *, alternate: bool) -> dict[str, Any]:
        result: dict[Version, list[tuple[str, Any]]] = {}

        for version in [Version.US, Version.JP, Version.EASYTYPE]:
            result[version] = []
            script = self._get_script(monster_id, version)

            for condition_set, action_set in script:
                formatted_condition_set = self._format_condition_set(condition_set, version)
                formatted_action_set = self._format_action_set(action_set, version, alternate=alternate)

                if len(formatted_condition_set) == 1 and len(script) > 1 and formatted_condition_set[0] == "Always":
                    formatted_condition_set = ["Otherwise"]

                result[version].append((" and ".join(formatted_condition_set), formatted_action_set))

        us = json.dumps(result[Version.US], sort_keys=True)
        jp = json.dumps(result[Version.JP], sort_keys=True)
        easytype = json.dumps(result[Version.EASYTYPE], sort_keys=True)

        if us == jp and us == easytype:
            return {"USA, Japan and Easytype": result[Version.US]}

        if us == jp:
            return {
                "USA and Japan": result[Version.US],
                "Easytype": result[Version.EASYTYPE],
            }

        if us == easytype:
            return {
                "USA and Easytype": result[Version.US],
                "Japan": result[Version.JP],
            }

        if jp == easytype:
            return {
                "USA": result[Version.US],
                "Japan and Easytype": [Version.JP],
            }

        return {
            "USA": result[Version.US],
            "Japan": result[Version.JP],
            "Easytype": result[Version.EASYTYPE],
        }

    #
    # Private Methods
    #

    def _get_formation_description(self, formation_id: int, version: Version) -> str:  # noqa: PLR0914
        formation_data = self._formations[formation_id]

        monster_1_id = extract_values(formation_data["monster_1_id"], int)[version]
        monster_1_count = extract_values(formation_data["monster_1_count"], int)[version]
        monster_1_name = self.get_monster_names(monster_1_id)[version]
        monster_1_egg = extract_values(formation_data["monster_1_egg"], bool)[version]
        monster_1_summon = monster_1_id in {0x46, 0x62, 0x79, 0x7B, 0x87, 0x96, 0xCE}

        monster_2_id = extract_values(formation_data["monster_2_id"], int)[version]
        monster_2_count = extract_values(formation_data["monster_2_count"], int)[version]
        monster_2_egg = extract_values(formation_data["monster_2_egg"], bool)[version]
        monster_2_swooned = extract_values(formation_data["monster_2_swooned"], bool)[version]

        if monster_2_id == monster_1_id:
            monster_1_count += monster_2_count
            monster_2_count = 0

        monster_3_id = extract_values(formation_data["monster_3_id"], int)[version]
        monster_3_count = extract_values(formation_data["monster_3_count"], int)[version]
        monster_3_egg = extract_values(formation_data["monster_3_egg"], bool)[version]
        monster_3_swooned = extract_values(formation_data["monster_3_swooned"], bool)[version]

        if monster_3_id == monster_1_id:
            monster_1_count += monster_3_count
            monster_3_count = 0

        if monster_3_id == monster_2_id and not monster_1_summon:
            monster_2_count += monster_3_count
            monster_3_count = 0

        summon_description = ""

        if monster_1_summon:
            monster_2_name = self.get_monster_names(monster_2_id)[version]
            summon_description = f" (summons {monster_2_name})"

        egg_name = self.get_monster_names(0xDF)[version]

        if monster_1_egg:
            description = f"{egg_name} ({monster_1_name}){summon_description} x{monster_1_count}"
        else:
            description = f"{monster_1_name}{summon_description} x{monster_1_count}"

        if monster_2_count > 0 and not monster_1_summon and not monster_2_swooned:
            monster_2_name = self.get_monster_names(monster_2_id)[version]

            if monster_2_egg:
                description = f"{description}, {egg_name} ({monster_2_name}) x{monster_2_count}"
            else:
                description = f"{description}, {monster_2_name} x{monster_2_count}"

        if monster_3_count > 0 and not monster_3_swooned:
            monster_3_name = self.get_monster_names(monster_3_id)[version]

            if monster_3_egg:
                description = f"{description}, {egg_name} ({monster_3_name}) x{monster_3_count}"
            else:
                description = f"{description}, {monster_3_name} x{monster_3_count}"

        return description

    def _get_script(self, script_id: int, version: Version) -> list[Any]:
        if isinstance(script_id, dict):
            script_id = extract_values(script_id, int)[version]

        script: list[Any] = []

        if script_id >= 0:
            script_data = self._scripts["scripts"][script_id]

            for i in range(8):
                condition_set = extract_values(script_data[f"condition_set_{i}"], int)[version]
                action_set = extract_values(script_data[f"action_set_{i}"], int)[version]

                if condition_set >= 0:
                    script.append((condition_set, action_set))

        return script

    def _get_derived_stats(self, derived_stats_id: int) -> str:
        stats = self._derived_stats[derived_stats_id]
        return f"{stats['multiplier']} x {stats['power']} ({stats['accuracy']}%)"

    def _format_command(self, command_id: int, parameters: list[int]) -> str:  # noqa: PLR0911, PLR0912, PLR0915
        if command_id < 0xC0:  # noqa: PLR2004
            spell_name = ff4.get_spell_names(command_id)[Version.US] if command_id < 0xB0 else ""  # noqa: PLR2004

            if command_id < 0x31:  # noqa: PLR2004
                pass
            elif command_id < 0x5E:  # noqa: PLR2004
                spell_name = ff4.get_spell_names(command_id - 0x30)[Version.US]
                spell_name = f"{spell_name} (target all by default)"
            elif command_id == 0x8E:  # noqa: PLR2004
                spell_name = f"special spell to order other monsters (index 0x{command_id:02X})"
            elif command_id == 0xA9:  # noqa: PLR2004
                spell_name = f"special spell to increment monster invincibility flag (index 0x{command_id:02X})"
            elif command_id == 0xAA:  # noqa: PLR2004
                spell_name = f"special spell to decrement monster invincibility flag (index 0x{command_id:02X})"
            elif command_id == 0xAD:  # noqa: PLR2004
                spell_name = f"special spell to replace self with next monster (index 0x{command_id:02X})"
            elif command_id == 0xAE:  # noqa: PLR2004
                spell_name = f"special spell to end battle (index 0x{command_id:02X})"
            elif command_id == 0xAF:  # noqa: PLR2004
                spell_name = f"special spell to advance EvilWall (index 0x{command_id:02X})"
            elif command_id == 0xB0:  # noqa: PLR2004
                spell_name = (
                    f"special spell to clear Caller status and animate D.Mist attack (index 0x{command_id:02X})"
                )
            elif command_id == 0xB1:  # noqa: PLR2004
                spell_name = f"special spell to activate Caller (index 0x{command_id:02X})"
            elif command_id == 0xB3:  # noqa: PLR2004
                spell_name = f"special spell to show Anna apparition (index 0x{command_id:02X})"
            elif command_id == 0xB4:  # noqa: PLR2004
                spell_name = f"special spell to show Edward and Tellah apparition (index 0x{command_id:02X})"
            elif command_id == 0xB5:  # noqa: PLR2004
                spell_name = f"special spell to show Palom and Porom apparition (index 0x{command_id:02X})"
            elif command_id == 0xB6:  # noqa: PLR2004
                spell_name = f"special spell to show Yang and Cid apparitions (index 0x{command_id:02X})"
            elif command_id == 0xB7:  # noqa: PLR2004
                spell_name = f"special spell to show FuSoYa and Golbez apparitions (index 0x{command_id:02X})"
            elif command_id == 0xB8:  # noqa: PLR2004
                spell_name = f"special spell to hide apparitions (index 0x{command_id:02X})"
            elif command_id == 0xBA:  # noqa: PLR2004
                spell_name = f"special spell to revive (index 0x{command_id:02X})"
            elif command_id == 0xBB:  # noqa: PLR2004
                spell_name = f"special spell to make monsters shake and rumble (index 0x{command_id:02X})"
            elif command_id == 0xBC:  # noqa: PLR2004
                spell_name = f"special spell to cause small damage to all monsters (index 0x{command_id:02X})"
            elif command_id == 0xBE:  # noqa: PLR2004
                spell_name = f"special spell to fully restore HP and MP (index 0x{command_id:02X})"
            elif command_id == 0xBF:  # noqa: PLR2004
                spell_name = f"special spell to play a chime sound and flash (index 0x{command_id:02X})"
            elif spell_name == "Dummy" or command_id >= 0xAE:  # noqa: PLR2004
                spell_name = f"spell #{command_id:02X}"
            else:
                spell_name = f"monster spell {spell_name} (index 0x{command_id:02X})"

            return f"Cast {spell_name}"

        if command_id == 0xC0:  # noqa: PLR2004
            return "Fight"

        if command_id == 0xC2:  # noqa: PLR2004
            return "Magic"

        if command_id == 0xC4:  # noqa: PLR2004
            return "Call"

        if command_id == 0xC5:  # noqa: PLR2004
            return "Dark Wave"

        if command_id == 0xC6:  # noqa: PLR2004
            return "Jump"

        if command_id == 0xCE:  # noqa: PLR2004
            return "Kick"

        if command_id == 0xDE:  # noqa: PLR2004
            return "Land"

        if command_id == 0xE0:  # noqa: PLR2004
            return "Twin Cast"

        if command_id == 0xE1:  # noqa: PLR2004
            return "Take no action on this turn"

        if command_id == 0xE8:  # noqa: PLR2004
            return f"Change race to {filter_race(str(parameters[0]), Version.US)}"

        if command_id == 0xEA:  # noqa: PLR2004
            return f"Set physical defense to {self._get_derived_stats(parameters[0])}"

        if command_id == 0xEB:  # noqa: PLR2004
            return f"Set magic defense to {self._get_derived_stats(parameters[0])}"

        if command_id == 0xEC:  # noqa: PLR2004
            if parameters[0] & 0x80 == 0:
                return f"Increase relative speed value by {parameters[0] * 10}% (slows monster down)"

            return f"Decrease relative speed value by {parameters[0] * 10}% (in theory, but it's bugged and the real amount will differ) (speeds monster up)"  # noqa: E501

        if command_id == 0xED:  # noqa: PLR2004
            immune = parameters[0] & 0x80 > 0
            element = filter_element_weakness(str(parameters[0] & 0x7F), Version.US)

            if immune:
                return f"Set elemental immunity to {element}"

            return f"Set elemental resistance to {element}"

        if command_id == 0xEE:  # noqa: PLR2004
            return f"Set magic power to {parameters[0]}"

        if command_id == 0xEF:  # noqa: PLR2004
            element = parameters[0]
            element_str = filter_element_weakness(str(element & 0x7F), Version.US)

            if element & 0x80 > 0:
                return f"Set strong and normal elemental weaknesses to {element_str}"

            return f"Set normal elemental weakness to {element_str}"

        if command_id == 0xF0:  # noqa: PLR2004
            slot = parameters[0] >> 6
            sprite_id = parameters[0] & 0x3F

            sprites: dict[int, str] = {
                0x00: "D.Mist",
                0x01: "D.Mist (mist)",
                0x02: "Titan",
                0x03: "Titan (quaking)",
                0x04: "Octomamm (8 tentacles)",
                0x05: "Octomamm (7 tentacles)",
                0x06: "Octomamm (6 tentacles)",
                0x07: "Octomamm (5 tentacles)",
                0x08: "Octomamm (4 tentacles)",
                0x09: "Octomamm (3 tentacles)",
                0x0A: "Octomamm (2 tentacles)",
                0x0B: "Octomamm (1 tentacle)",
                0x0D: "MomBomb (exploding)",
                0x10: "Rubicant (cloak closed)",
                0x11: "Rubicant (cloak open)",
                0x12: "Kainazzo",
                0x13: "Kainazzo (water wall)",
                0x14: "Kainazzo (shell)",
                0x15: "Valvalis",
                0x16: "Valvalis (tornado)",
                0x17: "Dark Elf (elf form)",
                0x1F: "K.Eblan (conscious)",
                0x20: "Q.Eblan (conscious)",
                0x28: "Dr.Lugae (transformed)",
                0x2B: "Odin (raised sword)",
                0x2C: "Odin (attacking)",
                0x2D: "Leviatan (attacking)",
                0x2E: "Leviatan (normal)",
                0x2F: "Bahamut (normal)",
                0x30: "Bahamut (attacking)",
                0x34: "Elements (Valvalis)",
                0x35: "Asura (woman)",
                0x36: "Asura (demon)",
                0x37: "Asura (stone)",
            }

            sprite = sprites.get(sprite_id, f"Unknown sprite {sprite_id:02X}")

            return f"Change sprite for monster in slot {slot} to {sprite}"

        if command_id == 0xF1:  # noqa: PLR2004
            return f"Display battle message {parameters[0]} (force battle speed 6)"

        if command_id == 0xF2:  # noqa: PLR2004
            return f"Display battle message {parameters[0]} (no speed change)"

        if command_id == 0xF3:  # noqa: PLR2004
            return f"Change music to {filter_song(parameters[0], Version.US)}"

        if command_id in {0xF4, 0xF5, 0xF6}:
            index = command_id - 0xF4 + 1
            value = parameters[0] & 0x3F

            if parameters[0] - value == 0:
                return f"Add {value} to flag {index}"

            if parameters[0] & 0x80 > 0:
                return f"Set flag {index} to {value}"

            return f"Subtract {value} from flag {index}"

        if command_id == 0xF7:  # noqa: PLR2004
            mode = "Disable" if parameters[0] & 0x80 > 0 else "Enable"
            return f"{mode} battle background darkening effect"

        if command_id == 0xF9:  # noqa: PLR2004
            return f"Set target to {format_action_target(parameters[0])}"

        if command_id == 0xFB:  # noqa: PLR2004
            return "Execute pending commands and continue chain"

        if command_id == 0xFC:  # noqa: PLR2004
            return "End chain"

        if command_id == 0xFD:  # noqa: PLR2004
            return "Start a chain"

        if command_id == 0xFE:  # noqa: PLR2004
            return "Execute pending commands and wait for next turn"

        return f"Unknown action: #{id:02X}"

    def _format_action_set(self, action_set_id: int, version: Version, *, alternate: bool) -> list[str]:
        if alternate:
            action_set_data = self._scripts["alternate_action_sets"][action_set_id]
        else:
            action_set_data = self._scripts["standard_action_sets"][action_set_id]

        if not action_set_data["actions"]:
            return ["Do Nothing"]

        action_set_data = list(map(int, extract_values(action_set_data["actions"], str)[version].split(", ")))

        actions: list[str] = []
        index = 0

        while index < len(action_set_data):
            action = action_set_data[index]

            if action in {
                0xE8,
                0xEA,
                0xEB,
                0xEC,
                0xED,
                0xEE,
                0xEF,
                0xF0,
                0xF1,
                0xF2,
                0xF3,
                0xF4,
                0xF5,
                0xF6,
                0xF7,
                0xF9,
            }:
                parameters = [action_set_data[index + 1]]
                index += 2
            else:
                parameters = []
                index += 1

            actions.append(self._format_command(action, parameters))

        return actions

    def _format_condition_set(self, condition_set_id: int, version: Version) -> list[str]:  # noqa: PLR0912, PLR0914, PLR0915
        condition_set_data = self._scripts["condition_sets"][condition_set_id]
        conditions: list[str] = []

        for i in range(3):
            condition = extract_values(condition_set_data[f"condition_{i}"], int)[version]

            if condition >= 0:
                condition_data = self._scripts["conditions"][condition]
                opcode = ConditionOpcode(condition_data["opcode"])
                parameters = (
                    condition_data["parameter_1"],
                    condition_data["parameter_2"],
                    condition_data["parameter_3"],
                )

                try:
                    target, plural = format_condition_target(parameters[0])

                    if parameters[0] & 0x80 > 0:
                        target, plural = format_condition_target(parameters[0] & 0x7F)
                    else:
                        target = target.replace("all", "any")
                        plural = False
                except ValueError:
                    target, plural = "nobody", False

                verb = "have" if plural else "has"

                if opcode == ConditionOpcode.CHECK_STATUS:
                    mask = parameters[2] << (8 * parameters[1])
                    status = filter_status(mask, Version.US)
                    conjunction = f"{verb} any status of" if "," in status else f"{verb} status"
                    conditions.append(f"{target.capitalize()} {conjunction} {status}")
                elif opcode == ConditionOpcode.CHECK_HP:
                    value = extract_values(self._scripts["hp_check_data"][parameters[2]]["hp_value"], int)[version]

                    predicate = "maximum HP" if value == 0xFFFF else f"{value} HP"  # noqa: PLR2004

                    conditions.append(f"{target.capitalize()} {verb} less than {predicate}")
                elif opcode == ConditionOpcode.CHECK_FLAG:
                    flag_index = parameters[1] + 1
                    value = parameters[2]
                    conditions.append(f"Flag {flag_index} has a value of {value}")
                elif opcode == ConditionOpcode.CHECK_LIVING:
                    if parameters[1] == 0:
                        conditions.append(f"{target} is alive and able to act")
                    elif parameters[1] == 1:
                        conditions.append(f"{target} is not alive or otherwise unable to act")
                    else:
                        conditions.append("Weird matching behavior, hopefully nothing actually does this")
                elif opcode == ConditionOpcode.CHECK_MONSTER_COUNT:
                    monster = self.get_monster_names(parameters[2])[Version.US]

                    if parameters[1] == 0x00:
                        conditions.append(f"Monsters of type {monster} and at least one other type are alive")
                    elif parameters[1] == 0x01:
                        conditions.append(f"No monsters of type {monster} are alive")
                    else:
                        conditions.append(f"Monsters of type {monster} are the only alive monsters")
                elif opcode == ConditionOpcode.CHECK_FORMATION:
                    formation_id = (parameters[1] << 8) + parameters[2]
                    formation_description = self._get_formation_description(formation_id, Version.US)
                    conditions.append(f"Battle is formation {formation_id} ({formation_description})")
                elif opcode == ConditionOpcode.CHECK_ACTING_TYPE_ALONE:
                    conditions.append("Self is monster of only remaining type")
                elif opcode in {ConditionOpcode.CHECK_RECENT_ATTACK, ConditionOpcode.CHECK_RECENT_ATTACKS_ALL}:
                    actor = (
                        target.replace("all", "any").replace("characters", "character").replace("monsters", "monster")
                    )
                    action = self._format_command(parameters[1], [])
                    if parameters[2] > 0:
                        element = " with an element of " + filter_element_weakness(
                            parameters[2], Version.US
                        ).lower().replace(", ", " and ")
                    else:
                        element = ""

                    if opcode == ConditionOpcode.CHECK_RECENT_ATTACK:
                        prefix = "Most recent action against self was"
                    else:
                        prefix = "Any of the last four actions against self was"
                    conditions.append(f"{prefix} {action}{element} by {actor}")
                elif opcode == ConditionOpcode.CHECK_DAMAGE:
                    conditions.append("Self has taken damage")
                elif opcode == ConditionOpcode.CHECK_ALONE:
                    conditions.append("Self is only remaining monster")
                elif opcode == ConditionOpcode.ALWAYS:
                    conditions.append("Always")
                else:
                    conditions.append(str(opcode) + " " + target)

        return conditions


#
# Handlers
#

ff4 = FF4()


def formations(request: HttpRequest) -> HttpResponse:
    formations: list[dict[str, Any]] = []

    for formation_id, formation in enumerate(ff4.get_formations()):
        formations.append(
            {
                "id": formation_id,
                "id_hex": f"{formation_id:03X}",
                "description_us": formation["description_us"],
                "description_jp": formation["description_jp"],
                "description_easytype": formation["description_easytype"],
            }
        )

    context = {
        "formations": formations,
    }

    return render(request, "info/formations.html", context)


def formation_detail(request: HttpRequest, formation_id: int) -> HttpResponse:
    if formation_id < 0 or formation_id >= 0x200:  # noqa: PLR2004
        msg = "Nonexistent monster formation"
        raise Http404(msg)

    formation = ff4.get_formation(formation_id)

    assert isinstance(formation["monsters"], list)  # noqa: S101

    monsters: list[dict[str, str]] = []

    for monster_data in cast(list[dict[str, str | bool | int]], formation["monsters"]):
        ids = extract_values(monster_data["id"], str)
        names = ff4.get_monster_names(cast(int, monster_data["id"]))

        monsters.append(
            {
                "id": group_values_string(monster_data["id"]),
                "id_us": ids[Version.US],
                "id_jp": ids[Version.JP],
                "id_easytype": ids[Version.EASYTYPE],
                "name_us": names[Version.US],
                "name_jp": names[Version.JP],
                "name_easytype": names[Version.EASYTYPE],
                "count": group_values_string(monster_data["count"]),
                "swooned": group_values_string(monster_data["swooned"]),
                "egg": group_values_string(monster_data["egg"]),
            }
        )

    context: dict[str, str | int | bool | list[dict[str, str]]] = {
        "description_us": formation["description_us"],
        "monsters": monsters,
        "arrangement": group_values_string(formation["arrangement"], filter_arrangement),
        "audio_track": group_values_string(formation["audio_track"], filter_audio_track),
        "auto_battle": group_values_string(formation["auto_battle"]),
        "back_attack": group_values_string(formation["back_attack"]),
        "character_sprite": group_values_string(formation["character_sprite"]),
        "disable_running": group_values_string(formation["disable_running"]),
        "floating": group_values_string(formation["floating"]),
        "scripted": group_values_string(formation["scripted"]),
        "slow_death": group_values_string(formation["slow_death"]),
        "target_map": group_values_string(formation["target_map"]),
        "transparent": group_values_string(formation["transparent"]),
        "vram_layout": group_values_string(formation["vram_layout"]),
    }

    return render(request, "info/formation_detail.html", context)


def monsters(request: HttpRequest) -> HttpResponse:
    monsters: list[dict[str, Any]] = []

    for monster_id, _ in enumerate(ff4.get_monsters()):
        names = ff4.get_monster_names(monster_id)

        monsters.append(
            {
                "id": monster_id,
                "id_hex": f"{monster_id:02X}",
                "name_us": names[Version.US],
                "name_jp": names[Version.JP],
                "name_easytype": names[Version.EASYTYPE],
            }
        )

    context = {
        "monsters": monsters,
    }

    return render(request, "info/monsters.html", context)


def monster_detail(request: HttpRequest, monster_id: int) -> HttpResponse:
    if monster_id < 0 or monster_id >= 0xE0:  # noqa: PLR2004
        msg = "Nonexistent monster."
        raise Http404(msg)

    names = ff4.get_monster_names(monster_id)
    monster_data = ff4.get_monster(monster_id)
    script_data = ff4.get_script(monster_data["script_index"], alternate=monster_data["alternate_scripts"])
    counter_script_data = ff4.get_script(
        monster_data["counter_script_index"],
        alternate=monster_data["alternate_scripts"],
    )

    context: dict[str, str | int | bool | dict[str, Any]] = {
        "agility": group_values_string(monster_data["agility_range"]),
        "boss": monster_data["boss"],
        "exp": group_values_string(monster_data["exp"]),
        "gp": group_values_string(monster_data["gp"]),
        "hp": group_values_string(monster_data["hp"]),
        "id": monster_id,
        "level": group_values_string(monster_data["level"]),
        "name_us": names[Version.US],
        "name_jp": names[Version.JP],
        "name_easytype": names[Version.EASYTYPE],
        "physical_attack": group_values_string(monster_data["physical_attack"]),
        "physical_defense": group_values_string(monster_data["physical_defense"]),
        "magic_defense": group_values_string(monster_data["magic_defense"]),
        "magic_power": group_values_string(monster_data["magic_power"], filter_negative_one),
        "race": group_values_string(monster_data["race"], filter_race),
        "element_weakness": group_values_string(monster_data["element_weakness"], filter_element_weakness),
        "element_defense": group_values_string(monster_data["element_defense"], filter_element_weakness),
        "status_defense": group_values_string(monster_data["status_defense"], filter_status),
        "element_attack": group_values_string(monster_data["element_attack"], filter_element_weakness),
        "status_attack": group_values_string(monster_data["status_attack"], filter_status),
        "script_index": group_values_string(monster_data["script_index"]),
        "counter_script_index": group_values_string(monster_data["counter_script_index"], filter_negative_one),
        "alternate_scripts": group_values_string(monster_data["alternate_scripts"]),
        "item_drop_rate_base": group_values_string(monster_data["item_drop_rate"], filter_drop_rate),
        "item_drop_1": group_values_string(monster_data["item_drop_1"], filter_item),
        "item_drop_2": group_values_string(monster_data["item_drop_2"], filter_item),
        "item_drop_3": group_values_string(monster_data["item_drop_3"], filter_item),
        "item_drop_4": group_values_string(monster_data["item_drop_4"], filter_item),
        "script": script_data,
        "counter_script": counter_script_data,
        "script_dbg": str(script_data),
        "counter_script_dbg": str(counter_script_data),
    }

    return render(request, "info/monster_detail.html", context)
