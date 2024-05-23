import os
import re
import subprocess

from typing import Optional

from django.conf import settings


def decode_vars(variables: list[str]):
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
    result: list[str] = []
    variables = variables[1:]

    while len(variables) > 0:
        current = variables[0:6]
        variables = variables[6:]

        value = 0

        for char in current:
            value = (value << 6) + chars.index(char)

        var = value >> 8
        value = value & 0xFF

        result.append('{:07X}:{:d}'.format(var, value))

    return ' '.join(result)


def get_route_update_time(route: str, seed: int):
    filename = os.path.join(settings.BASE_DIR, 'ff4', 'data', 'routes', route, '{:03d}.txt'.format(seed))
    return os.path.getmtime(filename)


class RouteDetail(object):
    def __init__(self, route: str, seed: int, variables: Optional[list[str]] = None):
        self._route = route
        self._seed = seed
        self._filename = os.path.join(settings.BASE_DIR, 'ff4', 'data', 'routes', route, '{:03d}.txt'.format(seed))

        self._data: list[str] = []
        self._html_data: list[str] = []
        self._battles: dict[str, list[tuple[int, str, str]]] = {}
        self._vars: dict[str, int] = {}
        self._custom = variables is not None
        self._load_data(variables)

    @property
    def data(self):
        return self._data

    @property
    def html_data(self):
        return self._html_data

    @property
    def route_description(self):
        return '{} (version {})'.format(self._route_description, self._route_version)

    @property
    def encounters(self):
        return self._encounters

    @property
    def steps(self):
        return self._optional_steps + self._extra_steps

    @property
    def optional_steps(self):
        return self._optional_steps

    @property
    def extra_steps(self):
        return self._extra_steps

    @property
    def frames(self):
        return self._frames

    @property
    def custom(self):
        return self._custom

    @property
    def update_time(self):
        return os.path.getmtime(self._filename)

    @property
    def saved_time(self):
        return self._saved_time

    @property
    def saved_encounters(self):
        return self._saved_encounters

    @property
    def battles(self):
        return self._battles

    @property
    def vars(self):
        return self._vars

    def get_value(self, index: str):
        return self._vars[index] if index in self._vars else 0

    def _parse_variables(self, data: str):
        if data.strip() != '':
            for index, value in [x.split(':') for x in data.split(' ')]:
                self._vars[index] = int(value)

    def _test_line(self, patterns: list[str], line: str):
        for pattern in patterns:
            if re.search(pattern, line):
                return True

        return False

    def _test_options(self, line: str):
        patterns = [
            '(In|Out)ward.*(Steps|Secret)',
            '(Walk|Warp)',
            '(Remove|Equip|Skip) Dwarf Axe',
            'Zeromus Menu',
            'Visit Hummingway',
            'Recruit FuSoYa First',
            'Get Ninja Star',
            'to the Big Whale',
            'Save: ',
        ]

        return self._test_line(patterns, line)

    def _test_battles(self, line: str):
        patterns = [
            'Blue D. x1',
            'Searcher.*D.Machin',
            'MacGiant.*12.226',
            'MacGiant.*14.593',
            'Mind',
            'Red D.',
            'Red Worm x2.*(9.065|9.010)',
            'Roc x1.*(8.592|8.643)',
        ]

        return self._test_line(patterns, line)

    def _load_data(self, variables: Optional[list[str]]):
        phase = 1

        if variables:
            with open(os.path.join(settings.BASE_DIR, 'rosa/data/routes/{}.txt'.format(self._route))):
                pass

            var_string = decode_vars(variables)
            rosa_args = ['./rosa', '-r', self._route, '-s', str(self._seed), '-m', '0', '-v', var_string]
            data = subprocess.run(rosa_args, capture_output=True, cwd=os.path.join(settings.BASE_DIR, 'rosa'), encoding='utf-8').stdout.split('\n')
        else:
            with open(self._filename) as f:
                data = f.read().split('\n')

        current_area = None
        current_battles: list[tuple[int, str, str]] = []
        keep_battles = False

        for line in data:
            if line.strip() == '':
                phase += 1

            if phase == 1:
                tokens = line.split('\t')

                if tokens[0] == 'ROUTE':
                    self._route_description = tokens[1].strip()
                elif tokens[0] == 'VERSION':
                    self._route_version = int(tokens[1])
                elif tokens[0] == 'FRAMES':
                    if '.' in tokens[1]:
                        self._frames = float(tokens[1]) * 1000
                    else:
                        self._frames = float(tokens[1])
                elif tokens[0] == 'VARS':
                    self._parse_variables(tokens[1])
            elif phase == 2 and len(line) > 1:
                if re.search('Steps: [1-9]', line):
                    self._html_data.append('<b class="text-primary">{}</b>'.format(line.rstrip()))
                elif self._test_options(line):
                    self._html_data.append('<b class="text-info">{}</b>'.format(line.rstrip()))
                elif self._test_battles(line):
                    keep_battles = True
                    self._html_data.append('<b class="text-danger">{}</b>'.format(line.rstrip()))
                else:
                    self._html_data.append(line.rstrip())

                if line.strip().startswith('Step') or line.strip().startswith('(Step'):
                    matches = re.search(r'Step *(?P<step>[0-9]*): *(?P<index>[0-9]*) / (?P<formation>.*)\)?', line)

                    assert(matches)

                    step = int(matches.group('step'))
                    formation = matches.group('formation')

                    if re.search('Searcher.*Machin', line):
                        style = "text-primary"

                        if line.strip().startswith('('):
                            style += ' font-italic'
                            formation = formation[:-1]
                        else:
                            style += ' font-weight-bold'
                    elif self._test_battles(line):
                        style = "text-danger"
                    elif line.strip().startswith('('):
                        style = "text-muted font-italic"
                        formation = formation[:-1]
                    else:
                        style = ""

                    current_battles.append((step, style, formation))
                elif not line.strip().startswith('Battle') and not self._test_options(line) and not re.search('Steps: [1-9]', line):
                    if keep_battles:
                        assert(current_area)
                        self._battles[current_area] = current_battles

                    current_area = line[:30].strip()
                    current_battles = []
                    keep_battles = False

                self._data.append(line.rstrip())
            elif phase >= 3 and len(line) > 1:
                if keep_battles:
                    assert(current_area)
                    self._battles[current_area] = current_battles
                    keep_battles = False

                tokens = line.split()

                if tokens[0] == 'Optional':
                    self._optional_steps = int(tokens[2])
                elif tokens[0] == 'Extra':
                    self._extra_steps = int(tokens[2])
                elif tokens[0] == 'Encounters:':
                    self._encounters = int(tokens[1])
                elif tokens[0] == 'Encounters':
                    self._saved_encounters = int(tokens[2])
                elif tokens[0] == 'Time':
                    self._saved_time = float(tokens[2][:-1])
