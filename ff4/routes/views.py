import json

from django.http import Http404, HttpResponse
from django.shortcuts import render
from django.urls import reverse

from .models import RouteDetail

ROUTES = {
	'paladin': {
		'name': 'Paladin%',
		'enabled': True,
		'description': 'From the beginning of the game until Cecil becomes a paladin.',
	},
	'nocw': {
		'name': 'Any% NoCW',
		'description': 'From the beginning of the game until Zeromus is defeated.',
	},
	'no64-rosa': {
		'name': 'Any% No64 (Rosa)',
		'description': 'From the beginning of the game until Zeromus is defeated. 64-floor glitch is disallowed. Rosa is primary damage dealer at the end.',
	},
	'no64-excalbur': {
		'name': 'Any% No64 (Edge+Excalbur)',
		'description': 'From the beginning of the game until Zeromus is defeated. 64-floor glitch is disallowed. Edge is primary damage dealer at the end.'
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
	context = {
		'routes': ROUTES,
	}

	return render(request, 'routes/index.html', context)


def route(request, route):
	seed_metrics = {
		'frames': [],
		'encounters': [],
		'steps': [],
	}

	try:
		for seed in range(256):
			r = RouteDetail(route, seed)
			seed_metrics['frames'].append(r.frames)
			seed_metrics['encounters'].append(r.encounters)
			seed_metrics['steps'].append(r.steps)
	except FileNotFoundError:
		raise Http404("Route does not exist.")

	seeds = []

	for group_index in range(16):
		group = []

		for index in range(16):
			seed = group_index * 16 + index

			group.append({
				'seed': seed,
				'background': get_color(seed_metrics['frames'][seed], min(seed_metrics['frames']), max(seed_metrics['frames']))
			})

		seeds.append(group)

	metrics = []

	metric_data = {
		'Time': 'frames',
		'Encounters': 'encounters',
		'Extra Steps': 'steps',
	}

	for metric, key in metric_data.items():
		values = {
			'best': min(seed_metrics[key]),
			'median': sorted(seed_metrics[key])[len(seed_metrics[key]) // 2],
			'worst': max(seed_metrics[key]),
		}

		result = {
			'name': metric,
		}

		for type in values:
			selected = []

			for seed, value in enumerate(seed_metrics[key]):
				if value == values[type]:
					selected.append(seed)

			if metric == 'Time':
				value = '{:0.3f}s'.format(values[type] / 60.0988)
			else:
				value = '{}'.format(values[type])

			url = reverse('routes:detail', args=(route, selected[0]))

			result[type] = '{} (<a href="{}">Seed {}</a>{})'.format(value, url, selected[0], ' and {} others'.format(len(selected) - 1) if len(selected) > 1 else '')

		metrics.append(result)

	context = {
		'route': route,
		'route_data': ROUTES[route],
		'metrics': metrics,
		'seeds': seeds,
	}

	return render(request, 'routes/route.html', context)

def detail(request, route, seed):
	try:
		r = RouteDetail(route, seed)
	except FileNotFoundError:
		raise Http404("Route and seed combination does not exist.")

	statistics = [
		{'name': 'Route', 'data': r.route_description},
		{'name': 'Route Time', 'data': '{:0.3f}s (saves {:0.3f}s)'.format(r.frames / 60.0988, r.saved_time)},
		{'name': 'Route Encounters', 'data': '{} (saves {} encounters)'.format(r.encounters, r.saved_encounters)},
		{'name': 'Optional Steps', 'data': r.optional_steps},
		{'name': 'Extra Steps', 'data': r.extra_steps},
	]

	context = {
		'detail': r.data,
		'route': route,
		'route_data': ROUTES[route],
		'statistics': statistics,
		'seed': seed,
		'vars': json.dumps(r.vars),
	}

	return render(request, 'routes/detail.html', context)
