import json

from django.shortcuts import render

def seed_finder(request):
	from ff4.routes.views import ROUTES, get_colors

	colors = {}

	for route in ROUTES:
		if ROUTES[route]['seed_finder']:
			colors[route] = get_colors(route)

	context = {
		'routes': ROUTES,
		'colors': json.dumps(colors)
	}

	return render(request, 'tools/seed-finder.html', context)
