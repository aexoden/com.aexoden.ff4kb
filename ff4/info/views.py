import json
import os

from collections.abc import Callable
from enum import Enum
from typing import Any, Optional, Type, TypeVar

from django.conf import settings
from django.http import Http404, HttpRequest
from django.shortcuts import render

T = TypeVar("T", str, int, bool)


#
# Enums
#

class Version(Enum):
    US = 0
    JP = 1
    EASYTYPE = 2


#
# Functions
#

def filter_arrangement(value: str, _version: Version):
    arrangements = {
        14: '14: Zombie x4',
        18: '18: Machine x2, Beamer x3',
        20: '20: Guard x3',
        29: '29: Gargoyle x1, Cocktric x3',
        33: '33: Spirit x2, Soul x2, Red Bone x2',
        43: '43: Mad Ogre x4 (A)',
        45: '45: Mad Ogre x4 (B)',
        48: '48: Octomamm',
        49: '49: Antlion',
        50: '50: Girl (summons Titan)',
        51: '51: D.Mist',
        52: '52: MomBomb',
        53: '53: Milon',
    }

    if int(value) in arrangements:
        return arrangements[int(value)]
    else:
        return f'{value}'


def filter_audio_track(value: str, _version: Version) -> str:
    if value == '0':
        return 'Battle 1'
    elif value == '1':
        return 'Battle 2'
    elif value == '2':
        return 'Battle with the Four Fiends'
    else:
        return '[does not change music]'


def filter_drop_rate(value: str, _version: Version) -> str:
    return f'{int(value) / 99 * 100:0.3f}% ({value}/99)'


def filter_element_weakness(value: str, _version: Version) -> str:
    element = int(value)
    elements: list[str] = []
    suffix = ''

    if element & 0x01 > 0:
        elements.append('Fire')
    if element & 0x02 > 0:
        elements.append('Ice')
    if element & 0x04 > 0:
        elements.append('Lightning')
    if element & 0x08 > 0:
        elements.append('Darkness')
    if element & 0x10 > 0:
        elements.append('Holy')
    if element & 0x20 > 0:
        elements.append('Air')
    if element & 0x40 > 0:
        elements.append('Drain')
    if element & 0x80 > 0:
        suffix = ' (strong)'

    if len(elements) > 0:
        return ', '.join(elements) + suffix
    else:
        return 'None'


def filter_item(value: str, version: Version) -> str:
    return ff4.get_item_names(int(value))[version]


def filter_negative_one(value: str, _version: Version):
    return 'None' if value == '-1' else value


def filter_race(value: str, _version: Version):
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


def extract_values(values: str | int | bool | dict[str, list[str]], return_type: Type[T]) -> dict[Version, T]:
    if type(values) is dict:
        value_us = ''
        value_jp = ''
        value_easytype = ''

        for value, versions in values.items():
            if 'us' in versions:
                value_us = value

            if 'jp' in versions:
                value_jp = value

            if 'jp-easytype' in versions:
                value_easytype = value

            if 'us' in versions and 'us-rev-1' not in versions:
                raise ValueError("USA and USA (Rev 1) have different values")

            if 'jp' in versions and 'jp-rev-1' not in versions:
                raise ValueError("Japan and Japan (Rev 1) have different values")

        return {
            Version.US: return_type(value_us),
            Version.JP: return_type(value_jp),
            Version.EASYTYPE: return_type(value_easytype)
        }
    elif type(values) is str or type(values) is int or type(values) is bool:
        return {
            Version.US: return_type(values),
            Version.JP: return_type(values),
            Version.EASYTYPE: return_type(values)
        }
    else:
        raise ValueError(f'Unexpected value type: {type(values)}')


def group_values(values: dict[Any, list[str]] | list[Any], filter: Optional[Callable[[str, Version], str]] = None) -> str:
    if type(values) is not dict:
        return filter(str(values), Version.US) if filter else str(values)

    output: list[tuple[int, str]] = []

    for value, versions in values.items():
        versions = sorted(versions)

        if 'us' in versions and 'us-rev-1' not in versions:
            raise ValueError("USA and USA (Rev 1) have different values")

        if 'jp' in versions and 'jp-rev-1' not in versions:
            raise ValueError("Japan and Japan (Rev 1) have different values")

        if versions == ['us', 'us-rev-1']:
            version = 'USA'
            filter_version = Version.US
            priority = 10
        elif versions == ['jp-easytype', 'us', 'us-rev-1']:
            version = 'USA and Easytype'
            filter_version = Version.US
            priority = 10
        elif versions == ['jp', 'jp-rev-1']:
            version = 'Japan'
            filter_version = Version.JP
            priority = 5
        elif versions == ['jp-easytype']:
            version = 'Easytype'
            filter_version = Version.EASYTYPE
            priority = 3
        elif versions == ['jp', 'jp-rev-1', 'us', 'us-rev-1']:
            version = 'USA and Japan'
            filter_version = Version.JP
            priority = 10
        else:
            version = ', '.join(versions)
            filter_version = Version.US
            priority = -1

        if filter:
            value = filter(str(value), filter_version)

        output.append((priority, f'{value} ({version})'))

    return ' / '.join([x[1] for x in sorted(output, reverse=True)])


#
# Classes
#

class FF4(object):
    def __init__(self):
        with open(os.path.join(settings.BASE_DIR, 'ff4', 'data', 'formations.json')) as f:
            self._formations = json.load(f)

        with open(os.path.join(settings.BASE_DIR, 'ff4', 'data', 'items.json')) as f:
            self._items = json.load(f)

        with open(os.path.join(settings.BASE_DIR, 'ff4', 'data', 'monsters.json')) as f:
            self._monsters = json.load(f)

    #
    # Public Methods
    #

    def get_formation(self, id: int):
        formation_data = self._formations[id]

        monsters: list[dict[str, Any]] = []

        for i in range(1, 4):
            if type(formation_data[f'monster_{i}_count']) is dict or formation_data[f'monster_{i}_count'] > 0:
                monsters.append({
                    'id': formation_data[f'monster_{i}_id'],
                    'count': group_values(formation_data[f'monster_{i}_count']),
                    'swooned': group_values(formation_data[f'monster_{i}_swooned']),
                    'egg': group_values(formation_data[f'monster_{i}_egg']),
                })

        formation_data['monsters'] = monsters

        formation_data['description_us'] = self._get_formation_description(id, Version.US)
        formation_data['description_jp'] = self._get_formation_description(id, Version.JP)
        formation_data['description_easytype'] = self._get_formation_description(id, Version.EASYTYPE)

        return formation_data

    def get_formations(self):
        return [self.get_formation(i) for i in range(len(self._formations))]

    def get_item_names(self, id: int):
        return extract_values(self._items[id]['name'], str)

    def get_monster(self, id: int):
        return self._monsters[id]

    def get_monsters(self):
        return self._monsters

    def get_monster_names(self, id: int):
        return extract_values(self._monsters[id]['name'], str)

    #
    # Private Methods
    #

    def _get_formation_description(self, id: int, version: Version):
        formation_data = self._formations[id]

        monsters: list[dict[str, Any]] = []

        for i in range(1, 4):
            if type(formation_data[f'monster_{i}_count']) is dict or formation_data[f'monster_{i}_count'] > 0:
                monsters.append({
                    'id': group_values(formation_data[f'monster_{i}_id']),
                    'count': group_values(formation_data[f'monster_{i}_count']),
                    'swooned': group_values(formation_data[f'monster_{i}_swooned']),
                    'egg': group_values(formation_data[f'monster_{i}_egg']),
                })

        monster_1_id = extract_values(formation_data['monster_1_id'], int)[version]
        monster_1_count = extract_values(formation_data['monster_1_count'], int)[version]
        monster_1_name = self.get_monster_names(monster_1_id)[version]
        monster_1_egg = extract_values(formation_data['monster_1_egg'], bool)[version]
        monster_1_summon = monster_1_id in [0x46, 0x62, 0x79, 0x7B, 0x87, 0x96, 0xCE]

        monster_2_id = extract_values(formation_data['monster_2_id'], int)[version]
        monster_2_count = extract_values(formation_data['monster_2_count'], int)[version]
        monster_2_egg = extract_values(formation_data['monster_2_egg'], bool)[version]
        monster_2_swooned = extract_values(formation_data['monster_2_swooned'], bool)[version]

        if monster_2_id == monster_1_id:
            monster_1_count += monster_2_count
            monster_2_count = 0

        monster_3_id = extract_values(formation_data['monster_3_id'], int)[version]
        monster_3_count = extract_values(formation_data['monster_3_count'], int)[version]
        monster_3_egg = extract_values(formation_data['monster_3_egg'], bool)[version]
        monster_3_swooned = extract_values(formation_data['monster_3_swooned'], bool)[version]

        if monster_3_id == monster_1_id:
            monster_1_count += monster_3_count
            monster_3_count = 0

        if monster_3_id == monster_2_id and not monster_1_summon:
            monster_2_count += monster_3_count
            monster_3_count = 0

        summon_description = ''

        if monster_1_summon:
            monster_2_name = self.get_monster_names(monster_2_id)[version]
            summon_description = f' (summons {monster_2_name})'

        egg_name = self.get_monster_names(0xDF)[version]

        if monster_1_egg:
            description = f'{egg_name} ({monster_1_name}){summon_description} x{monster_1_count}'
        else:
            description = f'{monster_1_name}{summon_description} x{monster_1_count}'

        if monster_2_count > 0 and not monster_1_summon and not monster_2_swooned:
            monster_2_name = self.get_monster_names(monster_2_id)[version]

            if monster_2_egg:
                description = f'{description}, {egg_name} ({monster_2_name}) x{monster_2_count}'
            else:
                description = f'{description}, {monster_2_name} x{monster_2_count}'

        if monster_3_count > 0 and not monster_3_swooned:
            monster_3_name = self.get_monster_names(monster_3_id)[version]

            if monster_3_egg:
                description = f'{description}, {egg_name} ({monster_3_name}) x{monster_3_count}'
            else:
                description = f'{description}, {monster_3_name} x{monster_3_count}'

        return description


#
# Handlers
#

ff4 = FF4()


def formations(request: HttpRequest):
    formations: list[dict[str, Any]] = []

    for id, formation in enumerate(ff4.get_formations()):
        formations.append({
            'id': id,
            'id_hex': f'{id:03X}',
            'description_us': formation['description_us'],
            'description_jp': formation['description_jp'],
            'description_easytype': formation['description_easytype'],
        })

    context = {
        'formations': formations,
    }

    return render(request, 'info/formations.html', context)


def formation_detail(request: HttpRequest, id: int):
    if id < 0 or id >= 0x200:
        raise Http404("Nonexistent monster formation.")

    formation = ff4.get_formation(id)

    assert(type(formation['monsters']) is list)

    monsters: list[dict[str, str]] = []

    for monster_data in formation['monsters']:
        ids = extract_values(monster_data['id'], str)
        names = ff4.get_monster_names(monster_data['id'])

        monsters.append({
            'id': group_values(monster_data['id']),
            'id_us': ids[Version.US],
            'id_jp': ids[Version.JP],
            'id_easytype': ids[Version.EASYTYPE],
            'name_us': names[Version.US],
            'name_jp': names[Version.JP],
            'name_easytype': names[Version.EASYTYPE],
            'count': group_values(monster_data['count']),
            'swooned': group_values(monster_data['swooned']),
            'egg': group_values(monster_data['egg']),
        })

    context = {
        'description_us': formation['description_us'],
        'monsters': monsters,
        'arrangement': group_values(formation['arrangement'], filter_arrangement),
        'audio_track': group_values(formation['audio_track'], filter_audio_track),
        'auto_battle': group_values(formation['auto_battle']),
        'back_attack': group_values(formation['back_attack']),
        'character_sprite': group_values(formation['character_sprite']),
        'disable_running': group_values(formation['disable_running']),
        'floating': group_values(formation['floating']),
        'scripted': group_values(formation['scripted']),
        'slow_death': group_values(formation['slow_death']),
        'target_map': group_values(formation['target_map']),
        'transparent': group_values(formation['transparent']),
        'vram_layout': group_values(formation['vram_layout']),
    }

    return render(request, 'info/formation_detail.html', context)


def monsters(request: HttpRequest):
    monsters: list[dict[str, Any]] = []

    for id, _ in enumerate(ff4.get_monsters()):
        names = ff4.get_monster_names(id)

        monsters.append({
            'id': id,
            'id_hex': f'{id:02X}',
            'name_us': names[Version.US],
            'name_jp': names[Version.JP],
            'name_easytype': names[Version.EASYTYPE],
        })

    context = {
        'monsters': monsters,
    }

    return render(request, 'info/monsters.html', context)


def monster_detail(request: HttpRequest, id: int):
    if id < 0 or id >= 0xE0:
        raise Http404("Nonexistent monster.")

    names = ff4.get_monster_names(id)
    monster_data = ff4.get_monster(id)

    context = {
        'agility': group_values(monster_data['agility_range']),
        'boss': monster_data['boss'],
        'exp': group_values(monster_data['exp']),
        'gp': group_values(monster_data['gp']),
        'hp': group_values(monster_data['hp']),
        'id': id,
        'level': group_values(monster_data['level']),
        'name_us': names[Version.US],
        'name_jp': names[Version.JP],
        'name_easytype': names[Version.EASYTYPE],
        'physical_attack': group_values(monster_data['physical_attack']),
        'physical_defense': group_values(monster_data['physical_defense']),
        'magic_defense': group_values(monster_data['magic_defense']),
        'magic_power': group_values(monster_data['magic_power'], filter_negative_one),
        'race': group_values(monster_data['race'], filter_race),
        'element_weakness': group_values(monster_data['element_weakness'], filter_element_weakness),
        'script_index': group_values(monster_data['script_index']),
        'counter_script_index': group_values(monster_data['counter_script_index'], filter_negative_one),
        'item_drop_rate_base': group_values(monster_data['item_drop_rate'], filter_drop_rate),
        'item_drop_1': group_values(monster_data['item_drop_1'], filter_item),
        'item_drop_2': group_values(monster_data['item_drop_2'], filter_item),
        'item_drop_3': group_values(monster_data['item_drop_3'], filter_item),
        'item_drop_4': group_values(monster_data['item_drop_4'], filter_item),
    }

    return render(request, 'info/monster_detail.html', context)
