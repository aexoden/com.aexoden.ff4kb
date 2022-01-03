import json
import os

from typing import Any

from django.conf import settings
from django.http import Http404
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


def group_values(values: Any):
    if type(values) is not dict:
        return values

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

        output.append((priority, f'{value} ({version})'))

    return ' / '.join([x[1] for x in sorted(output, reverse=True)])


def monsters(request):
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


def monster_detail(request, id):
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
    }

    return render(request, 'info/monster_detail.html', context)
