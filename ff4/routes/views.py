import json

from django.http import Http404, HttpResponse
from django.shortcuts import render

from .models import RouteDetail

ROUTES = {
	'paladin': {
		'name': 'Paladin%'
	}
}


def get_color(value, best_value, worst_value):
	colors = [
		(0.00, (128, 64, 0)),
		(0.50, (255, 255, 255)),
		(1.00, (0, 224, 0)),
	]

	value = (worst_value - value) / (worst_value - best_value)
	value = max(0, min(1, value))

	index = 1
	while colors[index][0] < value:
		index += 1
	best_color = colors[index]
	worst_color = colors[index-1]

	subvalue = (value - worst_color[0]) / (best_color[0] - worst_color[0])
	delta = tuple(best_color[1][x] - worst_color[1][x] for x in range(3))
	color = tuple(int(subvalue * delta[x] + worst_color[1][x]) for x in range(3))

	return '#{:02X}{:02X}{:02X}'.format(*color)


def index(request):
	return HttpResponse('Hello, world. You are at the index.')


def route(request, route):
	seed_frames = []

	try:
		for seed in range(256):
			r = RouteDetail(route, seed)
			seed_frames.append(r.frames)
	except FileNotFoundError:
		raise Http404("Route does not exist.")

	seeds = []

	for group_index in range(16):
		group = []

		for index in range(16):
			seed = group_index * 16 + index

			group.append({
				'seed': seed,
				'background': get_color(seed_frames[seed], min(seed_frames), max(seed_frames))
			})

		seeds.append(group)

	fastest_seed = seed_frames.index(min(seed_frames))
	fastest_time = '{:0.3f}s'.format(seed_frames[fastest_seed] / 60.0988)

	context = {
		'route': route,
		'route_data': ROUTES[route],
		'fastest_seed': fastest_seed,
		'fastest_time': fastest_time,
		'title': route,
		'seeds': seeds,
		'seed_frames': seed_frames,
	}

	return render(request, 'routes/route.html', context)

def detail(request, route, seed):
	try:
		r = RouteDetail(route, seed)
	except FileNotFoundError:
		raise Http404("Route and seed combination does not exist.")

	context = {
		'detail': r.data,
		'route': route,
		'title': '{} Seed {}'.format(route, seed),
		'vars': json.dumps(r.vars),
	}

	return render(request, 'routes/detail.html', context)
