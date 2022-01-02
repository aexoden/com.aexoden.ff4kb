import json
import os

from typing import Any

from django.conf import settings
from django.http import Http404
from django.shortcuts import render


def monsters(request):
    with open(os.path.join(settings.BASE_DIR, 'ff4', 'data', 'monsters.json')) as f:
        monster_data = json.load(f)

    monsters: list[dict[str, Any]] = []

    for id, data in enumerate(monster_data):
        name_us = ''
        name_jp = ''
        name_easytype = ''

        for name, versions in data['name'].items():
            if 'us' in versions:
                name_us = name

            if 'jp' in versions:
                name_jp = name

            if 'jp-easytype' in versions:
                name_easytype = name

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
