import re
import os

from django.conf import settings


class RouteDetail(object):
	def __init__(self, route, seed):
		self._route = route
		self._seed = seed
		self._filename = os.path.join(settings.BASE_DIR, 'ff4', 'data', 'routes', route, '{:03d}.txt'.format(seed))

		self._data = []
		self._html_data = []
		self._battles = {}
		self._vars = {}
		self._load_data()

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

	def get_value(self, index):
		return self._vars[index] if index in self._vars else 0

	def _parse_variables(self, data):
		if data.strip() != '':
			for index, value in [x.split(':') for x in data.split(' ')]:
				self._vars[int(index)] = int(value)

	def _test_line(self, patterns, line):
		for pattern in patterns:
			if re.search(pattern, line):
				return True

		return False

	def _test_options(self, line):
		patterns = [
			'(In|Out)ward.*(Steps|Secret)',
			'Castle of Dwarves (Walk|Warp)',
			'(Remove|Equip|Skip) Dwarf Axe',
			'Zeromus Menu',
			'Visit Hummingway',
			'Recruit FuSoYa First',
		]

		return self._test_line(patterns, line)

	def _test_battles(self, line):
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

	def _load_data(self):
		phase = 1

		with open(self._filename) as f:
			current_area = None
			current_battles = []
			keep_battles = False

			for line in f:
				if line.strip() == '':
					phase += 1

				if phase == 1:
					tokens = line.split('\t')

					if tokens[0] == 'ROUTE':
						self._route_description = tokens[1].strip()
					elif tokens[0] == 'VERSION':
						self._route_version = int(tokens[1])
					elif tokens[0] == 'FRAMES':
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
						matches = re.search('Step *(?P<step>[0-9]*): (?P<index>[0-9]*) / (?P<formation>.*)\\)?', line)

						if re.search('Searcher.*Machin', line):
							style = "text-primary"
						elif self._test_battles(line):
							style = "text-danger"
						elif line.strip().startswith('('):
							style = "text-muted"
						else:
							style = ""

						current_battles.append((int(matches.group('step')), style, matches.group('formation')))
					elif not line.strip().startswith('Battle') and not self._test_options(line) and not re.search('Steps: [1-9]', line):
						if keep_battles:
							self._battles[current_area] = current_battles

						current_area = line[:30].strip()
						current_battles = []
						keep_battles = False

					self._data.append(line.rstrip())
				elif phase >= 3 and len(line) > 1:
					if keep_battles:
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
