import json
import os

from django.conf import settings
from django.http import Http404
from django.shortcuts import render
from django.urls import reverse

from .models import RouteDetail, get_route_update_time

GROUPS = {
	'standard': {
		'name': 'Standard Routes',
		'description': 'These are the standard routes people are most likely to use.',
	},
	'alternate': {
		'name': 'Alternate Routes',
		'description': 'These routes are uncommon alternate routes that are unlikely to be used during a run. They currently have no summary or tutorial data. None of these routes is twin seed safe.'
	},
	'archive': {
		'name': 'Archived Routes',
		'description': 'These routes are archived from the old version of the site. They have not been updated to the new data structure, and their optimization status is unknown (though they should be near optimal relative to their input data). There is no associated tutorial or summary data. Eventually, I would like to convert them to the new structure, but this is not a high priority. These routes are not guaranteed to be twin seed safe (though some of them may be).',
	}
}

ROUTES = {
	'paladin': {
		'name': 'Paladin%',
		'description': 'Paladin% covers the game from the beginning of the game until Cecil becomes a Paladin. The step route begins after the Mist Clip. Almost identical to the beginning hour of the two primary full-game routes, this route makes for a great place to begin for a new runner.',
		'group': 'standard',
		'enabled': True,
		'twin_safe': True,
		'status': 'Optimal',
	},
	'nocw': {
		'name': 'Any% NoCW',
		'description': 'Any% NoCW is from the beginning of the game until Zeromus is defeated by any means. The step route begins after the Mist Clip. Typically, this means using the 64-door glitch to defeat Zeromus using the upt Co spell. However, it is technically a superset of Any% No64, as any valid No64 run is also a valid NoCW run (albeit slower).',
		'group': 'standard',
		'enabled': True,
		'twin_safe': True,
		'status': '~98.52% Optimal'
	},
	'no64-rosa': {
		'name': 'Any% No64 (Rosa)',
		'description': 'This route runs from the beginning of the game until Zeromus is defeated. Use of the 64-door glitch is banned. The step route begins after the Mist Clip. This particular version of the route relies on Rosa as the primary damage dealer at the end of the game.',
		'group': 'standard',
		'enabled': True,
		'twin_safe': True,
		'status': '~99.02% Optimal'
	},
	'no64-excalbur': {
		'name': 'Any% No64 (Edge+Excalbur)',
		'description': 'This route runs from the beginning of the game until Zeromus is defeated. Use of the 64-door glitch is banned. The step route begins after the Mist Clip. This particular version of the route relies on Edge as the primary damage dealer at the end of the game.',
		'group': 'standard',
		'enabled': True,
		'twin_safe': True,
		'status': '~96.97% Optimal'
	},

	'premist': {
		'name': 'Pre-Mist Clip',
		'description': 'From the beginning of the game until the Mist Clip. Primarily useful for demonstrating that seed 92 is optimal.',
		'group': 'alternate',
		'enabled': True,
		'status': 'Optimal'
	},

	'sfc-nocw': {
		'name': 'SFC Any% NoCW',
		'description': 'This is the Any% NoCW route for the SFC version of the game. The actual speedrun is not completely optimized yet, so the step routes are in flux. This route follows my guide.',
		'group': 'archive',
		'enabled': True,
	},
	'sfc-nocw-toru': {
		'name': 'SFC Any% NoCW (Toru_1988)',
		'description': 'This is the Any% NoCW route for the SFC version of the game. The actual speedrun is not completely optimized yet, so the step routes are in flux. This route is used by Toru_1988.',
		'group': 'archive',
		'enabled': True,
	},
	'no64-drain': {
		'name': 'Any% No64 (Edge+Drain)',
		'description': 'This route runs from the beginning of the game until Zeromus is defeated. Use of the 64-door glitch is banned. The step route begins after the Mist Clip. This particular version of the route relies on Edge as the primary damage dealer at the end of the game. This has largely been deprecated in favor of either Edge+Excalbur or Rosa.',
		'group': 'archive',
		'enabled': True,
	},
	'octomamm-cecil-kain-darkness': {
		'name': 'Octomamm% (Cecil+Kain+Darkness)',
		'description': 'From the beginning of the game until Octomamm is defeated, using only Kain and Cecil, while picking up the Darkness sword.',
		'group': 'archive',
		'enabled': True,
	},
	'ss-paladin': {
		'name': 'Paladin% Single Segment',
		'description': 'From the beginning of the game until Cecil becomes a paladin. The game must be completed in a single run without reloading a save.',
		'group': 'archive',
		'enabled': True,
	},
	'ss-no64-excalbur': {
		'name': 'Any% No64 Single Segment (Edge+Excalbur)',
		'description': 'From the beginning of the game until Zeromus is defeated, without using the 64-door glitch. The game must be completed in a single run without reloading a save. Edge is the primary endgame damage dealer.',
		'group': 'archive',
		'enabled': True,
	},
	'marathon-no64-drain': {
		'name': 'Any% No64 (Edge+Drain) Marathon Safe (AGDQ 2016)',
		'description': 'From the beginning of the game until Zeromus is defeated, without using the 64-door glitch. The game must be completed in a single run without reloading a save. Edge is the primary endgame damage dealer. This route has additional save points routed in and was designed specifically for AGDQ 2016.',
		'group': 'archive',
		'enabled': True,
	},
	'marathon-no64-excalbur': {
		'name': 'Any% No64 (Edge+Excalbur) Marathon Safe (AGDQ 2016)',
		'description': 'From the beginning of the game until Zeromus is defeated, without using the 64-door glitch. The game must be completed in a single run without reloading a save. Edge is the primary endgame damage dealer. This route has additional save points routed in and was designed specifically for AGDQ 2016.',
		'group': 'archive',
		'enabled': True,
	},
	'marathon-no64-excalbur-bosses': {
		'name': 'Any% No64 (Edge+Excalbur) Extra Bosses Marathon Safe (AGDQ 2016)',
		'description': 'From the beginning of the game until Zeromus is defeated, without using the 64-door glitch. The game must be completed in a single run without reloading a save. Edge is the primary endgame damage dealer. This route has additional save points routed in and was designed specifically for AGDQ 2016. This route has extra bosses as well.',
		'group': 'archive',
		'enabled': True,
	},
	'uc': {
		'name': 'Unprecedented Crisis v2.1 Any% No Major Skips',
		'description': 'This is a run of the Unprecedented Crisis romhack.',
		'group': 'archive',
		'enabled': True,
	},
	'uc-riversmccown': {
		'name': 'Unprecedented Crisis v3.1 Any% No Major Skips (riversmccown)',
		'description': 'This is a run of the Unprecedented Crisis romhack.',
		'group': 'archive',
		'enabled': True,
	},
	'uc-mist': {
		'name': 'Unprecedented Crisis v3.1 Any% (Mist Clip%)',
		'description': 'This is a run of the Unprecedented Crisis romhack.',
		'group': 'archive',
		'enabled': True,
	},
	'tdw': {
		'name': 'The Darkness Within v1.07b Any%',
		'description': 'This is a run of the The Darkness Within romhack.',
		'group': 'archive',
		'enabled': True,
	},
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
	worst_color = colors[index - 1]

	subvalue = (value - worst_color[0]) / (best_color[0] - worst_color[0])
	delta = tuple(best_color[1][x] - worst_color[1][x] for x in range(3))
	color = tuple(int(subvalue * delta[x] + worst_color[1][x]) for x in range(3))

	return '#{:02X}{:02X}{:02X}'.format(*color)


def index(request):
	routes = dict(GROUPS)

	for route, data in ROUTES.items():
		if 'routes' not in routes[data['group']]:
			routes[data['group']]['routes'] = {}

		routes[data['group']]['routes'][route] = data

	context = {
		'routes': routes,
	}

	return render(request, 'routes/index.html', context)


def route(request, route):
	metrics_cache_filename = os.path.join(settings.BASE_DIR, 'ff4', 'cache', 'metrics-{}.json'.format(route))
	metrics_cache_updated = False

	if os.path.exists(metrics_cache_filename):
		with open(metrics_cache_filename, 'r') as f:
			seed_metrics = json.load(f)
	else:
		seed_metrics = {
			'update_time': [-1 for seed in range(256)],
			'frames': [0 for seed in range(256)],
			'encounters': [0 for seed in range(256)],
			'steps': [0 for seed in range(256)],
		}

	try:
		for seed in range(256):
			if seed_metrics['update_time'][seed] == -1 or get_route_update_time(route, seed) > seed_metrics['update_time'][seed]:
				r = RouteDetail(route, seed)
				seed_metrics['update_time'][seed] = r.update_time
				seed_metrics['frames'][seed] = r.frames
				seed_metrics['encounters'][seed] = r.encounters
				seed_metrics['steps'][seed] = r.steps
				metrics_cache_updated = True
	except FileNotFoundError:
		raise Http404("Route does not exist.")

	if metrics_cache_updated:
		with open(metrics_cache_filename, 'w') as f:
			json.dump(seed_metrics, f)

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
				value = '{:0.3f}s'.format(values[type] * 655171 / 39375000000)
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
		{'name': 'Route Time', 'data': '{:0.3f}s (saves {:0.3f}s)'.format(r.frames * 655171 / 39375000000, r.saved_time)},
		{'name': 'Route Encounters', 'data': '{} (saves {} encounters)'.format(r.encounters, r.saved_encounters)},
		{'name': 'Optional Steps', 'data': r.optional_steps},
		{'name': 'Extra Steps', 'data': r.extra_steps},
	]

	context = {
		'detail': r.html_data,
		'battles': json.dumps(r.battles),
		'route': route,
		'route_data': ROUTES[route],
		'statistics': statistics,
		'seed': seed,
		'vars': json.dumps(r.vars),
	}

	return render(request, 'routes/detail.html', context)
