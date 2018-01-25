import json

from django.http import Http404, HttpResponse
from django.shortcuts import render

from .models import RouteDetail


def index(request):
	return HttpResponse('Hello, world. You are at the index.')


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
