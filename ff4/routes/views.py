from django.http import Http404, HttpResponse
from django.template import loader

from .models import RouteDetail


def index(request):
	return HttpResponse('Hello, world. You are at the index.')


def detail(request, route, seed):
	try:
		r = RouteDetail(route, seed)
	except FileNotFoundError:
		raise Http404("Route and seed combination does not exist.")

	template = loader.get_template('routes/detail.html')

	context = {
		'detail': r.data
	}

	return HttpResponse(template.render(context, request))
