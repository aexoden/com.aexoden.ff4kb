#!/usr/bin/env python3

import argparse
import hashlib
import json
import sys

from collections.abc import Iterable
from typing import Any

#
# Data
#

CHARACTERS: dict[str, dict[int, str]] = {
    'general': {
        0x42: 'A',
        0x43: 'B',
        0x44: 'C',
        0x45: 'D',
        0x46: 'E',
        0x47: 'F',
        0x48: 'G',
        0x49: 'H',
        0x4A: 'I',
        0x4B: 'J',
        0x4C: 'K',
        0x4D: 'L',
        0x4E: 'M',
        0x4F: 'N',
        0x50: 'O',
        0x51: 'P',
        0x52: 'Q',
        0x53: 'R',
        0x54: 'S',
        0x55: 'T',
        0x56: 'U',
        0x57: 'V',
        0x58: 'W',
        0x59: 'X',
        0x5A: 'Y',
        0x5B: 'Z',
        0x5C: 'a',
        0x5D: 'b',
        0x5E: 'c',
        0x5F: 'd',
        0x60: 'e',
        0x61: 'f',
        0x62: 'g',
        0x63: 'h',
        0x64: 'i',
        0x65: 'j',
        0x66: 'k',
        0x67: 'l',
        0x68: 'm',
        0x69: 'n',
        0x6A: 'o',
        0x6B: 'p',
        0x6C: 'q',
        0x6D: 'r',
        0x6E: 's',
        0x6F: 't',
        0x70: 'u',
        0x71: 'v',
        0x72: 'w',
        0x73: 'x',
        0x74: 'y',
        0x75: 'z',
        0x80: '0',
        0x81: '1',
        0x82: '2',
        0x83: '3',
        0x84: '4',
        0x85: '5',
        0x86: '6',
        0x87: '7',
        0x88: '8',
        0x89: '9',
        0xFF: ' ',
    },
    'jp': {
        0x0F: 'ヴ',
        0x10: 'が',
        0x11: 'ぎ',
        0x12: 'ぐ',
        0x13: 'げ',
        0x14: 'ご',
        0x15: 'ざ',
        0x16: 'じ',
        0x17: 'ず',
        0x18: 'ぜ',
        0x19: 'ぞ',
        0x1A: 'だ',
        0x1B: 'ぢ',
        0x1C: 'づ',
        0x1D: 'で',
        0x1E: 'ど',
        0x1F: 'ば',
        0x20: 'び',
        0x21: 'ぶ',
        0x22: 'べ',
        0x23: 'ぼ',
        0x24: 'ぱ',
        0x25: 'ぴ',
        0x26: 'ぷ',
        0x27: 'ぺ',
        0x28: 'ぽ',
        0x29: 'ガ',
        0x2A: 'ギ',
        0x2B: 'グ',
        0x2C: 'ゲ',
        0x2D: 'ゴ',
        0x2E: 'ザ',
        0x2F: 'ジ',
        0x30: 'ズ',
        0x31: 'ゼ',
        0x32: 'ゾ',
        0x33: 'ダ',
        0x34: 'ヂ',
        0x35: 'ヅ',
        0x36: 'デ',
        0x37: 'ド',
        0x38: 'バ',
        0x39: 'ビ',
        0x3A: 'ブ',
        0x3B: 'ベ',
        0x3C: 'ボ',
        0x3D: 'パ',
        0x3E: 'ピ',
        0x3F: 'プ',
        0x40: 'ペ',
        0x41: 'ポ',
        0x79: '『',
        0x7A: '』',
        0x7B: 'を',
        0x7C: 'っ',
        0x7D: 'ゃ',
        0x7E: 'ゅ',
        0x7F: 'ょ',
        0x8A: 'あ',
        0x8B: 'い',
        0x8C: 'う',
        0x8D: 'え',
        0x8E: 'お',
        0x8F: 'か',
        0x90: 'き',
        0x91: 'く',
        0x92: 'け',
        0x93: 'こ',
        0x94: 'さ',
        0x95: 'し',
        0x96: 'す',
        0x97: 'せ',
        0x98: 'そ',
        0x99: 'た',
        0x9A: 'ち',
        0x9B: 'つ',
        0x9C: 'て',
        0x9D: 'と',
        0x9E: 'な',
        0x9F: 'に',
        0xA0: 'ぬ',
        0xA1: 'ね',
        0xA2: 'の',
        0xA3: 'は',
        0xA4: 'ひ',
        0xA5: 'ふ',
        0xA6: 'へ',
        0xA7: 'ほ',
        0xA8: 'ま',
        0xA9: 'み',
        0xAA: 'む',
        0xAB: 'め',
        0xAC: 'も',
        0xAD: 'や',
        0xAE: 'ゆ',
        0xAF: 'よ',
        0xB0: 'ら',
        0xB1: 'り',
        0xB2: 'る',
        0xB3: 'れ',
        0xB4: 'ろ',
        0xB5: 'わ',
        0xB6: 'ん',
        0xB7: 'ァ',
        0xB8: 'ィ',
        0xB9: '「',
        0xBA: 'ェ',
        0xBB: 'ォ',
        0xBC: 'ッ',
        0xBD: 'ャ',
        0xBE: 'ュ',
        0xBF: 'ョ',
        0xC2: 'ー',
        0xC4: '！',
        0xC5: '？',
        0xC6: '％',
        0xC7: '/',
        0xC8: '：',
        0xC9: '」',
        0xCA: 'ア',
        0xCB: 'イ',
        0xCC: 'ウ',
        0xCD: 'エ',
        0xCE: 'オ',
        0xCF: 'カ',
        0xD0: 'キ',
        0xD1: 'ク',
        0xD2: 'ケ',
        0xD3: 'コ',
        0xD4: 'サ',
        0xD5: 'シ',
        0xD6: 'ス',
        0xD7: 'セ',
        0xD8: 'ソ',
        0xD9: 'タ',
        0xDA: 'チ',
        0xDB: 'ツ',
        0xDC: 'テ',
        0xDD: 'ト',
        0xDE: 'ナ',
        0xDF: 'ニ',
        0xE0: 'ヌ',
        0xE1: 'ネ',
        0xE2: 'ノ',
        0xE3: 'ハ',
        0xE4: 'ヒ',
        0xE5: 'フ',
        0xE6: 'ヘ',
        0xE7: 'ホ',
        0xE8: 'マ',
        0xE9: 'ミ',
        0xEA: 'ム',
        0xEB: 'メ',
        0xEC: 'モ',
        0xED: 'ヤ',
        0xEE: 'ユ',
        0xEF: 'ヨ',
        0xF0: 'ラ',
        0xF1: 'リ',
        0xF2: 'ル',
        0xF3: 'レ',
        0xF4: 'ロ',
        0xF5: 'ワ',
        0xF6: 'ン',
    },
    'us': {
        0x15: ' ',
        0x29: '[claw] ',
        0x2A: '[rod] ',
        0x2B: '[staff] ',
        0x2C: '[dark sword] ',
        0x2D: '[sword] ',
        0x2E: '[holy sword] ',
        0x2F: '[spear] ',
        0x30: '[dagger] ',
        0x31: '[katana] ',
        0x32: '[star] ',
        0x33: '[boomerang] ',
        0x34: '[axe] ',
        0x35: '[wrench] ',
        0x36: '[harp] ',
        0x37: '[bow] ',
        0x38: '[arrow] ',
        0x3A: '[whip] ',
        0x3B: '[shield] ',
        0x3C: '[helm] ',
        0x3D: '[armor] ',
        0x3E: '[gauntlet] ',
        0x41: '[call magic] ',
        0x79: '[tent] ',
        0x7A: '[potion] ',
        0x7B: '[robe] ',
        0x7C: '[ring] ',
        0x7D: '[crystal] ',
        0x7E: '[key] ',
        0x7F: '[tail] ',
        0xC1: '.',
        0xC2: '-',
    }
}


#
# Classes
#

class FF4(object):
    def __init__(self, filename: str):
        with open(filename, 'rb') as f:
            self._data = f.read()

        sha256 = hashlib.sha256(self._data).hexdigest()

        if sha256 == '74aa3a26b66f34819fbbdcdb2475cf9161cc2590fb1ec89fb24940ef10e44332':
            self._version = 'jp'
        elif sha256 == '9ab77350f2090ab310e1ad4398f9aa15c63b1aa5af0f59131094715aec3ff207':
            self._version = 'jp-rev-1'
        elif sha256 == '680535dc1c4196c53b40dc9c2c9bc159a77802ab8d4b474bef5dc0281c15ad06':
            self._version = 'us'
        elif sha256 == '414bacc05a18a6137c0de060b4094ab6d1b75105342b0bb36a42e45d945a0e4d':
            self._version = 'us-rev-1'
        elif sha256 == '0e7ef033b982f961ee087ab1c347dd0b359767cd38a59cd4722c72b11138006e':
            self._version = 'jp-easytype'
        else:
            print(f'WARNING: {filename} is not a recognized version')

        self._scan_encounters()
        self._scan_triggers()
        self._scan_npcs()

        # Opening Event
        self._scan_event(0x10, 0x0000)

    def _read_u8(self, address: int):
        return self._data[address // 0x10000 * 0x8000 + address % 0x8000]

    def _read_u16(self, address: int):
        return self._read_u8(address) + (self._read_u8(address + 1) << 8)

    def _read_char(self, address: int):
        character = self._read_u8(address)

        if character in CHARACTERS['general']:
            return CHARACTERS['general'][character]
        elif character in CHARACTERS[self._version[:2]]:
            return CHARACTERS[self._version[:2]][character]
        else:
            print(f'WARNING: Unknown character for {self._version}: {character:02X}')
            return f'(0x{character:02X})'

    def _read_string(self, address: int, length: int):
        return ''.join([self._read_char(address + i) for i in range(length)])

    @property
    def version(self):
        return self._version

    def _scan_encounters(self):
        self._encounters_maps = {
            0x0000: self._scan_encounters_map(0x0000),
            0x1000: self._scan_encounters_map(0x1000),
            0x2000: self._scan_encounters_map(0x2000),
        }

        for map in range(0x3000, 0x3180):
            self._encounters_maps[map] = self._scan_encounters_map(map)

    def _scan_encounters_map(self, map: int):
        if map == 0x0000:
            map_address = 0x0EC542
            map_count = 64
            group_address = 0x0EC796
        elif map == 0x1000:
            map_address = 0x0EC582
            map_count = 16
            group_address = 0x0EC796
        elif map == 0x2000:
            map_address = 0x0EC592
            map_count = 4
            group_address = 0x0EC796
        else:
            map_address = 0x0EC596 + map - 0x3000
            map_count = 1
            group_address = 0x0EC816

        groups: set[int] = set()

        for i in range(map_count):
            group = self._read_u8(map_address + i)
            groups.add(group)

        formations: set[int] = set()

        if map >= 0x3000:
            encounter_rate = self._read_u8(0x0EC342 + map - 0x3000)
            if encounter_rate == 0:
                return formations

        for group in groups:
            address = group_address + group * 8
            for i in range(8):
                formation = self._read_u8(address + i)
                if map == 0x1000 or map == 0x2000 or map >= 0x3100:
                    formation += 0x100
                formations.add(formation)

        return formations

    def _scan_event(self, id: int, map: int):
        address = 0x128200 + self._read_u16(0x128000 + id * 2)
        end_address = 0x128200 + self._read_u16(0x128000 + (id + 1) * 2)

        current_map = [map]
        warning = False

        while address < end_address:
            opcode = self._read_u8(address)

            if opcode < 0xDB:
                bytes = 1
            elif opcode == 0xE2:
                bytes = 3
            elif opcode == 0xFE:
                bytes = 5
            else:
                bytes = 2

            if opcode == 0xFE:
                next_byte = self._read_u8(address + 1)
                if next_byte == 0xFB:
                    current_map.append(0x0000)
                elif next_byte == 0xFC:
                    current_map.append(0x1000)
                elif next_byte == 0xFD:
                    current_map.append(0x2000)
                else:
                    current_map.append(0x3000 + next_byte + (0x100 if current_map[-1] > 0x3100 else 0))
            elif opcode == 0xFD:
                next_byte = self._read_u8(address + 1)
                if next_byte == 0x1D:
                    if len(current_map) == 1:
                        warning = True
                    else:
                        current_map.pop()
                elif next_byte == 0x04:
                    # Girl and Titan
                    self._encounters_maps[current_map[-1]].add(0x0EC)
            elif opcode == 0xEC:
                formation = self._read_u8(address + 1)

                if current_map[-1] >= 0x3100:
                    formation += 0x100

                self._encounters_maps[current_map[-1]].add(formation)

                if warning:
                    print(f'Added {formation} to {map:04X} but the map history stack was incorrect')

            address += bytes

    def _scan_npcs(self):
        for map in range(0x3000, 0x3180):
            self._scan_npcs_map(map)

    def _scan_npcs_map(self, map: int):
        map_address = 0x159C84 + (map - 0x3000) * 13
        npc_placement_offset = (self._read_u8(map_address + 3) * 2)
        high_npcs = False

        if self._read_u8(map_address + 10) & 0x80 > 0 or map == 0x1000 or map == 0x2000 or map >= 0x3100:
            high_npcs = True
            npc_placement_offset += 0x200

        address = self._read_u16(0x138000 + npc_placement_offset) + 0x138300

        while self._read_u8(address) > 0:
            npc = self._read_u8(address)

            if high_npcs:
                npc += 256

            n_address = self._read_u16(0x139800 + npc * 2) + 0x139C00
            n_limit = self._read_u16(0x139800 + (npc + 1) * 2) + 0x139C00

            while n_address < n_limit:
                if self._read_u8(n_address) == 0xFF:
                    event = self._read_u8(n_address + 1)
                    self._scan_event(event, map)

                    n_address += 1

                n_address += 1

            address += 4

    def _scan_triggers(self):
        self._scan_triggers_map(0x0000)
        self._scan_triggers_map(0x1000)
        self._scan_triggers_map(0x2000)

        for map in range(0x3000, 0x3180):
            self._scan_triggers_map(map)

    def _scan_triggers_map(self, map: int):
        if map < 0x3000:
            if self.version in ['jp', 'jp-rev-1']:
                address = self._read_u16(int(0x158000 + map / 0x1000 * 2)) + 0x158006
                limit = self._read_u16(int(0x158000 + ((map / 0x1000) + 1) * 2)) + 0x158006 if map < 0x2000 else 0x1581A0
            else:
                address = self._read_u16(int(0x19FE60 + map / 0x1000 * 2)) + 0x19FE66
                limit = self._read_u16(int(0x19Fe60 + ((map / 0x1000) + 1) * 2)) + 0x19FE66 if map < 0x2000 else 0x1A0000
        else:
            if self.version in ['jp', 'jp-rev-1']:
                address = self._read_u16(0x158200 + (map - 0x3000) * 2) + 0x158500
                limit = self._read_u16(0x158200 + ((map - 0x3000) + 1) * 2) + 0x158500
            else:
                address = self._read_u16(0x158000 + (map - 0x3000) * 2) + 0x158300
                limit = self._read_u16(0x158000 + ((map - 0x3000) + 1) * 2) + 0x158300

        while address < limit:
            if self._read_u8(address + 2) == 0xFF:
                conditional_event = self._read_u8(address + 3)
                ce_address = self._read_u16(0x12F260 + conditional_event * 2) + 0x12F460
                ce_limit = self._read_u16(0x12F260 + (conditional_event + 1) * 2) + 0x12F460

                while ce_address < ce_limit:
                    if self._read_u8(ce_address) == 0xFF:
                        event = self._read_u8(ce_address + 1)
                        # In theory, we should verify that this tile is actually a trigger tile, but that's even more
                        # complexity.
                        self._scan_event(event, map)

                        ce_address += 1

                    ce_address += 1
            elif self._read_u8(address + 2) == 0xFE:
                byte_2 = self._read_u8(address + 3)

                if byte_2 & 0x40 > 0:
                    formation = (byte_2 & 0x1F) + 0x1C0 + (1 if map in [0x1000, 0x2000] or map >= 0x3100 else 0) * 32
                    self._encounters_maps[map].add(formation)

            address += 5

    def _find_monster(self, id: int):
        results: dict[str, set[int]] = {
            'maps': set(),
            'treasures': set(),
            'events': set(),
        }

        for map, formations in self._encounters_maps.items():
            for formation in formations:
                formation_data = self.get_formation_info(formation)

                for i in range(1, 4):
                    if formation_data[f'monster_{i}_id'] == id:
                        results['maps'].add(map)

                    # Egg
                    if id == 0xDF and formation_data[f'monster_{i}_egg']:
                        results['maps'].add(map)

        return results

    def get_formation_info(self, id: int) -> dict[str, Any]:
        base_address = 0x0E8000 + id * 8

        flags_1 = self._read_u8(base_address + 0)
        flags_2 = self._read_u8(base_address + 6)

        monster_counts = self._read_u8(base_address + 4)
        swoon_mode = monster_counts & 0x03

        monsters: list[dict[str, Any]] = []

        for i in range(3):
            monster = {
                'id': self._read_u8(base_address + 1 + i),
                'count': (monster_counts >> ((3 - i) * 2)) & 0x03,
                'swooned': (i == 1 and swoon_mode in [1, 2]) or (i == 2 and swoon_mode in [2, 3]),
                'egg': (flags_1 >> (7 - i)) & 0x01 > 0,
            }

            monsters.append(monster)

        arrangement = self._read_u8(base_address + 5)
        target_map = self._read_u8(base_address + 7)

        return {
            'monster_1_id': monsters[0]['id'],
            'monster_1_count': monsters[0]['count'],
            'monster_1_swooned': monsters[0]['swooned'],
            'monster_1_egg': monsters[0]['egg'],
            'monster_2_id': monsters[1]['id'],
            'monster_2_count': monsters[1]['count'],
            'monster_2_swooned': monsters[1]['swooned'],
            'monster_2_egg': monsters[1]['egg'],
            'monster_3_id': monsters[2]['id'],
            'monster_3_count': monsters[2]['count'],
            'monster_3_swooned': monsters[2]['swooned'],
            'monster_3_egg': monsters[2]['egg'],
            'arrangement': arrangement,
            'target_map': target_map,
            'vram_layout': flags_1 & 0x07,
            'back_attack': flags_1 & 0x08 > 0,
            'slow_death': flags_1 & 0x10 > 0,
            'disable_running': flags_2 & 0x01 > 0,
            'scripted': flags_2 & 0x02 > 0,
            'audio_track': (flags_2 >> 2) & 0x03,
            'character_sprite': flags_2 & 0x10 > 0,
            'auto_battle': flags_2 & 0x20 > 0,
            'floating': flags_2 & 0x40 > 0,
            'transparent': flags_2 & 0x80 > 0,
        }

    def get_item_info(self, id: int) -> dict[str, Any]:
        base_address = 0x0F8000 + id * 9
        name = self._read_string(base_address, 9).strip()

        return {
            'name': name,
        }

    def get_monster_info(self, id: int) -> dict[str, Any]:
        base_address = 0x0E0000 + self._read_u16(0x0EA6A0 + id * 2)

        physical_attack_index = self._read_u8(base_address + 3)
        physical_attack_multiplier = self._read_u8(0x0EA380 + physical_attack_index * 3 + 0)
        physical_attack_accuracy = self._read_u8(0x0EA380 + physical_attack_index * 3 + 1)
        physical_attack_base = self._read_u8(0x0EA380 + physical_attack_index * 3 + 2)

        physical_defense_index = self._read_u8(base_address + 4)
        physical_defense_multiplier = self._read_u8(0x0EA380 + physical_defense_index * 3 + 0)
        physical_defense_evade = self._read_u8(0x0EA380 + physical_defense_index * 3 + 1)
        physical_defense_base = self._read_u8(0x0EA380 + physical_defense_index * 3 + 2)

        magic_defense_index = self._read_u8(base_address + 5)
        magic_defense_multiplier = self._read_u8(0x0EA380 + magic_defense_index * 3 + 0)
        magic_defense_evade = self._read_u8(0x0EA380 + magic_defense_index * 3 + 1)
        magic_defense_base = self._read_u8(0x0EA380 + magic_defense_index * 3 + 2)

        agility_index = self._read_u8(base_address + 6) & 0x3F
        agility_minimum = self._read_u8(0x0EA620 + agility_index * 2 + 0)
        agility_maximum = self._read_u8(0x0EA620 + agility_index * 2 + 1)
        agility_range = f'{agility_minimum} - {agility_maximum}' if agility_maximum > agility_minimum else f'{agility_minimum}'

        element_weakness = 0
        element_defense = 0
        status_defense = 0
        element_attack = 0
        status_attack = 0

        item_drop_index = self._read_u8(base_address + 7) & 0x3F
        item_drop_rate = self._read_u8(base_address + 7) >> 6

        if item_drop_rate == 0:
            item_drop_rate = 0
        elif item_drop_rate == 1:
            item_drop_rate = 5
        elif item_drop_rate == 2:
            item_drop_rate = 25
        elif item_drop_rate == 3:
            item_drop_rate = 99
        else:
            item_drop_rate = 25

        flags = self._read_u8(base_address + 9)
        offset = 10

        magic_power = -1
        race = 0
        counter_script_index = -1

        alternate_scripts_set: set[bool] = set()
        locations = self._find_monster(id)

        for map in locations['maps']:
            if 0x315A <= map <= 0x315C or 0x3167 <= map <= 0x317E:
                alternate_scripts_set.add(True)
            else:
                alternate_scripts_set.add(False)

        alternate_scripts: bool = False

        if len(alternate_scripts_set) == 0:
            print(f'WARNING: Not sure if monster {id} uses alternate scripts', file=sys.stderr)
            alternate_scripts = False
        if len(alternate_scripts_set) == 1:
            alternate_scripts = list(alternate_scripts_set)[0]
        elif len(alternate_scripts_set) > 1:
            print(f'WARNING: Monster {id} potentially both does and does not use alternate scripts', file=sys.stderr)
            alternate_scripts = True

        if flags & 0x80 > 0:
            element_attack = self._read_u8(base_address + offset)
            status_attack = self._read_u16(base_address + offset + 1)
            offset += 3

        if flags & 0x40 > 0:
            element_defense = self._read_u8(base_address + offset)
            status_defense = self._read_u16(base_address + offset + 1)
            offset += 3

        if flags & 0x20 > 0:
            element_weakness = self._read_u8(base_address + offset)
            offset += 1

        if flags & 0x10 > 0:
            magic_power = self._read_u8(base_address + offset)
            offset += 1

        if flags & 0x08 > 0:
            race = self._read_u8(base_address + offset)
            offset += 1

        if flags & 0x04 > 0:
            counter_script_index = self._read_u8(base_address + offset)
            offset += 1

        return {
            'boss': self._read_u8(base_address) & 0x80 > 0,
            'exp': self._read_u16(0x0EA1C0 + id * 2),
            'gp': self._read_u16(0x0EA000 + id * 2),
            'hp': self._read_u16(base_address + 1),
            'level': self._read_u8(base_address) & 0x7F,
            'magic_power': magic_power,
            'name': self._read_string(0x0E9800 + id * 8, 8).strip(),
            'race': race,

            'physical_attack_index': physical_attack_index,
            'physical_attack_multiplier': physical_attack_multiplier,
            'physical_attack_accuracy': physical_attack_accuracy,
            'physical_attack_base': physical_attack_base,
            'physical_attack': f'{physical_attack_multiplier} x {physical_attack_base} [{physical_attack_accuracy}%]',

            'physical_defense_index': physical_defense_index,
            'physical_defense_multiplier': physical_defense_multiplier,
            'physical_defense_evade': physical_defense_evade,
            'physical_defense_base': physical_defense_base,
            'physical_defense': f'{physical_defense_multiplier} x {physical_defense_base} [{physical_defense_evade}%]',

            'magic_defense_index': magic_defense_index,
            'magic_defense_multiplier': magic_defense_multiplier,
            'magic_defense_evade': magic_defense_evade,
            'magic_defense_base': magic_defense_base,
            'magic_defense': f'{magic_defense_multiplier} x {magic_defense_base} [{magic_defense_evade}%]',

            'agility_index': agility_index,
            'agility_minimum': agility_minimum,
            'agility_maximum': agility_maximum,
            'agility_range': agility_range,

            'element_weakness': element_weakness,
            'element_defense': element_defense,
            'status_defense': status_defense,
            'element_attack': element_attack,
            'status_attack': status_attack,

            'item_drop_index': item_drop_index,
            'item_drop_rate': item_drop_rate,
            'item_drop_1': self._read_u8(0x0E9F00 + item_drop_index * 4 + 0),
            'item_drop_2': self._read_u8(0x0E9F00 + item_drop_index * 4 + 1),
            'item_drop_3': self._read_u8(0x0E9F00 + item_drop_index * 4 + 2),
            'item_drop_4': self._read_u8(0x0E9F00 + item_drop_index * 4 + 3),

            'script_index': self._read_u8(base_address + 8),
            'counter_script_index': counter_script_index,
            'alternate_scripts': alternate_scripts,
        }


#
# Functions
#

def collate_data(roms: list[FF4], ids: Iterable[int], method_name: str):
    entries: list[dict[str, Any]] = []

    for id in ids:
        entry_info: dict[str, dict[str, Any]] = {}
        entry: dict[str, Any] = {}

        for rom in roms:
            entry_info[rom.version] = getattr(rom, method_name)(id)

        for key in entry_info['us']:
            values: dict[str, list[str]] = {}

            for rom in roms:
                value = entry_info[rom.version][key]

                if value not in values:
                    values[value] = []

                values[value].append(rom.version)

            if len(values) == 1:
                entry[key] = list(values.keys())[0]
            else:
                entry[key] = values

        entries.append(entry)

    return entries


#
# Commands
#

def command_formations(roms: list[FF4]):
    formations = collate_data(roms, range(0x200), "get_formation_info")
    print(json.dumps(formations, sort_keys=True, indent=4))


def command_items(roms: list[FF4]):
    items = collate_data(roms, range(0x100), "get_item_info")
    print(json.dumps(items, sort_keys=True, indent=4))


def command_monsters(roms: list[FF4]):
    monsters = collate_data(roms, range(0xE0), "get_monster_info")
    print(json.dumps(monsters, sort_keys=True, indent=4))


#
# Main Execution
#

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--roms', required=True, help='Text file containing the list of ROMs to dump from')

    subparsers = parser.add_subparsers(required=True)
    parser_formations = subparsers.add_parser('formations', help='Dump information about monster formations')
    parser_formations.set_defaults(func=command_formations)
    parser_items = subparsers.add_parser('items', help='Dump information about items')
    parser_items.set_defaults(func=command_items)
    parser_monsters = subparsers.add_parser('monsters', help='Dump information about monsters')
    parser_monsters.set_defaults(func=command_monsters)

    args = parser.parse_args()
    roms: list[FF4] = []

    with open(args.roms) as f:
        for line in f:
            roms.append(FF4(line.strip()))

    args.func(roms)


if __name__ == '__main__':
    main()
