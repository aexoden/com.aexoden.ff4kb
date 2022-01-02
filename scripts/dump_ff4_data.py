#!/usr/bin/env python3

import argparse
import hashlib
import json

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

    def get_monster_info(self, id: int) -> dict[str, Any]:
        base_address = 0x0E0000 + self._read_u16(0x0EA6A0 + id * 2)

        physical_attack_index = self._read_u8(base_address + 3)
        physical_defense_index = self._read_u8(base_address + 4)
        magic_defense_index = self._read_u8(base_address + 5)
        agility_index = self._read_u8(base_address + 6) & 0x3F
        item_drop_index = self._read_u8(base_address + 7) & 0x3F

        flags = self._read_u8(base_address + 9)
        offset = 10

        magic_power = -1
        race = 0

        if flags & 0x80 > 0:
            # element/status attack
            offset += 3

        if flags & 0x40 > 0:
            #element/status defense
            offset += 3

        if flags & 0x20 > 0:
            # element weakness
            offset += 1

        if flags & 0x10 > 0:
            magic_power = self._read_u8(base_address + offset)
            offset += 1

        if flags & 0x08 > 0:
            race = self._read_u8(base_address + offset)
            offset += 1

        if flags & 0x04 > 0:
            # counterattack
            offset += 1

        return {
            'boss': self._read_u8(base_address) & 0x80 > 0,
            'hp': self._read_u16(base_address + 1),
            'level': self._read_u8(base_address) & 0x7F,
            'magic_power': magic_power,
            'name': self._read_string(0x0E9800 + id * 8, 8).strip(),
            'race': race,

            'physical_attack_index': physical_attack_index,
            'physical_attack_multiplier': self._read_u8(0x0EA380 + physical_attack_index * 3 + 0),
            'physical_attack_accuracy': self._read_u8(0x0EA380 + physical_attack_index * 3 + 1),
            'physical_attack_base': self._read_u8(0x0EA380 + physical_attack_index * 3 + 2),

            'physical_defense_index': physical_defense_index,
            'physical_defense_multiplier': self._read_u8(0x0EA380 + physical_defense_index * 3 + 0),
            'physical_defense_evade': self._read_u8(0x0EA380 + physical_defense_index * 3 + 1),
            'physical_defense_base': self._read_u8(0x0EA380 + physical_defense_index * 3 + 2),

            'magic_defense_index': self._read_u8(base_address + 5),
            'magic_defense_multiplier': self._read_u8(0x0EA380 + magic_defense_index * 3 + 0),
            'magic_defense_evade': self._read_u8(0x0EA380 + magic_defense_index * 3 + 1),
            'magic_defense_base': self._read_u8(0x0EA380 + magic_defense_index * 3 + 2),

            'agility_index': agility_index,
            'agility_minimum': self._read_u8(0x0EA620 + agility_index * 2 + 0),
            'agility_maximum': self._read_u8(0x0EA620 + agility_index * 2 + 1),

            'item_drop_index': item_drop_index,
            'item_drop_1': self._read_u8(0x0E9F00 + item_drop_index * 4 + 0),
            'item_drop_2': self._read_u8(0x0E9F00 + item_drop_index * 4 + 1),
            'item_drop_3': self._read_u8(0x0E9F00 + item_drop_index * 4 + 2),
            'item_drop_4': self._read_u8(0x0E9F00 + item_drop_index * 4 + 3),

            'script_index': self._read_u8(base_address + 8),
        }


#
# Commands
#

def command_monsters(roms: list[FF4]):
    monsters: list[dict[str, Any]] = []

    for id in range(0xE0):
        monster_info: dict[str, dict[str, Any]] = {}
        monster: dict[str, Any] = {}

        for rom in roms:
            monster_info[rom.version] = rom.get_monster_info(id)

        for key in monster_info['us']:
            values: dict[str, list[str]] = {}

            for rom in roms:
                value = monster_info[rom.version][key]

                if value not in values:
                    values[value] = []

                values[value].append(rom.version)

            if len(values) == 1:
                monster[key] = list(values.keys())[0]
            else:
                monster[key] = values

        monsters.append(monster)

    print(json.dumps(monsters, sort_keys=True, indent=4))


#
# Main Execution
#

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--roms', required=True, help='Text file containing the list of ROMs to dump from')

    subparsers = parser.add_subparsers(required=True)
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
