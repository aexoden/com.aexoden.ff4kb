import json

from django.http import Http404, HttpResponse
from django.shortcuts import render
from django.urls import reverse

def index(request):
	context = {
	}

	return render(request, 'tools/index.html', context)


def seed_finder(request):
	context = {
	}

	return render(request, 'tools/seed-finder.html', context)
