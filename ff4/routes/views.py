import json

from django.http import Http404, HttpResponse
from django.shortcuts import render

from .models import RouteDetail


def get_color(value, best_value, worst_value):
	range = worst_value - best_value
	value = (value - best_value) / range

	if value < 0:
		value = 0

	if value > 1:
		value = 1

	max_color = 255
	min_color = 128

	color_range = max_color - min_color

	red = (1 - value) * color_range + min_color
	green = min_color
	blue = value * color_range + min_color

	return '#{:02X}{:02X}{:02X}'.format(int(red), int(green), int(blue))


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

	context = {
		'route': route,
		'title': route,
		'seeds': seeds,
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
