import json
import os

from collections.abc import Callable
from typing import Any, Optional

from django.conf import settings
from django.http import Http404, HttpRequest
from django.shortcuts import render


def get_monster_names(names: dict[str, list[str]]):
    name_us = ''
    name_jp = ''
    name_easytype = ''

    for name, versions in names:
        if 'us' in versions:
            name_us = name

        if 'jp' in versions:
            name_jp = name

        if 'jp-easytype' in versions:
            name_easytype = name

    return name_us, name_jp, name_easytype


def filter_magic_power(value: str):
    return 'None' if value == '-1' else value


def filter_race(value: str):
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

    return ', '.join(races)


def group_values(values: dict[Any, list[str]] | list[Any], filter: Optional[Callable[[str], str]] = None):
    if type(values) is not dict:
        return filter(str(values)) if filter else values

    output: list[tuple[int, str]] = []

    for value, versions in values.items():
        versions = sorted(versions)

        if versions == ['us', 'us-rev-1']:
            version = 'USA'
            priority = 10
        elif versions == ['jp-easytype', 'us', 'us-rev-1']:
            version = 'USA and Easytype'
            priority = 10
        elif versions == ['jp', 'jp-rev-1']:
            version = 'Japan'
            priority = 5
        elif versions == ['jp-easytype']:
            version = 'Easytype'
            priority = 3
        elif versions == ['jp', 'jp-rev-1', 'us', 'us-rev-1']:
            version = 'USA and Japan'
            priority = 10
        else:
            version = ', '.join(versions)
            priority = -1

        if filter:
            value = filter(str(value))

        output.append((priority, f'{value} ({version})'))

    return ' / '.join([x[1] for x in sorted(output, reverse=True)])


def monsters(request: HttpRequest):
    with open(os.path.join(settings.BASE_DIR, 'ff4', 'data', 'monsters.json')) as f:
        monster_data = json.load(f)

    monsters: list[dict[str, Any]] = []

    for id, data in enumerate(monster_data):
        name_us, name_jp, name_easytype = get_monster_names(data['name'].items())

        monsters.append({
            'id': id,
            'id_hex': f'{id:02X}',
            'name_us': name_us,
            'name_jp': name_jp,
            'name_easytype': name_easytype,
        })

    context = {
        'monsters': monsters,
    }

    return render(request, 'info/monsters.html', context)


def monster_detail(request: HttpRequest, id: int):
    if id < 0 or id >= 0xE0:
        raise Http404("Nonexistent monster.")

    with open(os.path.join(settings.BASE_DIR, 'ff4', 'data', 'monsters.json')) as f:
        monster_data = json.load(f)[id]

    name_us, name_jp, name_easytype = get_monster_names(monster_data['name'].items())

    context = {
        'agility': group_values(monster_data['agility_range']),
        'boss': monster_data['boss'],
        'exp': group_values(monster_data['exp']),
        'gp': group_values(monster_data['gp']),
        'hp': group_values(monster_data['hp']),
        'id': id,
        'level': group_values(monster_data['level']),
        'name_us': name_us,
        'name_jp': name_jp,
        'name_easytype': name_easytype,
        'physical_attack': group_values(monster_data['physical_attack']),
        'physical_defense': group_values(monster_data['physical_defense']),
        'magic_defense': group_values(monster_data['magic_defense']),
        'magic_power': group_values(monster_data['magic_power'], filter_magic_power),
        'race': group_values(monster_data['race'], filter_race),
    }

    return render(request, 'info/monster_detail.html', context)
