from django.shortcuts import render

def seed_finder(request):
	from ff4.routes.views import ROUTES

	context = {
		'routes': ROUTES
	}

	return render(request, 'tools/seed-finder.html', context)
