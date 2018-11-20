from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = 'tools'

urlpatterns = [
	path('', TemplateView.as_view(template_name='tools/index.html'), name='index'),
	path('nocw-gp-calculator/', TemplateView.as_view(template_name='tools/nocw-gp-calculator.html'), name='nocw-gp-calculator'),
	path('seed-finder/', views.seed_finder, name='seed-finder'),
]
