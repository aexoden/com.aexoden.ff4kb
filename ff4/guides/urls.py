from django.urls import path
from django.views.generic import TemplateView

app_name = 'guides'

urlpatterns = [
	path('', TemplateView.as_view(template_name='guides/index.html'), name='index'),
	path('nocw/', TemplateView.as_view(template_name='guides/nocw.html'), name='nocw'),
]
