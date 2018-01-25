import os

from django.conf import settings


class RouteDetail(object):
	def __init__(self, route, seed):
		self._route = route
		self._seed = seed
		self._filename = os.path.join(settings.BASE_DIR, 'ff4', 'data', 'routes', route, '{:03d}.txt'.format(seed))

		self._data = []
		self._vars = {}
		self._load_data()

	@property
	def data(self):
		return self._data

	@property
	def vars(self):
		return self._vars

	def get_value(self, index):
		return self._vars[index] if index in self._vars else 0

	def _parse_variables(self, data):
		for index, value in [x.split(':') for x in data.split(' ')]:
			self._vars[int(index)] = int(value)

	def _load_data(self):
		phase = 1

		with open(self._filename) as f:
			for line in f:
				if line.strip() == '':
					phase += 1

				if phase == 1:
					tokens = line.split('\t')

					if tokens[0] == 'ROUTE':
						self._route_description = tokens[1]
					elif tokens[0] == 'VERSION':
						self._route_version = int(tokens[1])
					elif tokens[0] == 'FRAMES':
						self._frames = float(tokens[1])
					elif tokens[0] == 'VARS':
						self._parse_variables(tokens[1])
				elif phase == 2 and len(line) > 1:
					self._data.append(line.rstrip())
