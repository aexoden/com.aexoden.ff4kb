import os

from django.conf import settings


class RouteDetail(object):
	def __init__(self, route, seed):
		self._route = route
		self._seed = seed
		self._filename = os.path.join(settings.BASE_DIR, 'data', 'routes', route, '{:03d}.txt'.format(seed))

		self._data = []
		self._load_data()

	@property
	def data(self):
		return self._data

	def _load_data(self):
		with open(self._filename) as f:
			for line in f:
				self._data.append(line.strip())
