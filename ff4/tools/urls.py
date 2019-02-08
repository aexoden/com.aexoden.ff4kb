from django.urls import path
from django.views.generic import RedirectView, TemplateView

from . import views

app_name = 'tools'

urlpatterns = [
	path('', TemplateView.as_view(template_name='tools/index.html'), name='index'),
	path('map-viewer/', TemplateView.as_view(template_name='tools/map-viewer.html'), name='map-viewer'),
	path('nocw-gp-calculator/', TemplateView.as_view(template_name='tools/nocw-gp-calculator.html'), name='nocw-gp-calculator'),
	path('nocw-igt-calculator/', TemplateView.as_view(template_name='tools/nocw-igt-calculator.html'), name='nocw-igt-calculator'),
	path('seed-finder/', views.seed_finder, name='seed-finder'),
	path('treasure-checker/', TemplateView.as_view(template_name='tools/treasure-checker.html'), name='treasure-checker'),

	path('nocw-gp/', RedirectView.as_view(pattern_name='tools:nocw-gp-calculator', permanent=True)),
	path('nocw-igt/', RedirectView.as_view(pattern_name='tools:nocw-igt-calculator', permanent=True)),
]
