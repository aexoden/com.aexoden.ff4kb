from django.urls import path
from django.views.generic import TemplateView

app_name = 'guides'

urlpatterns = [
	path('', TemplateView.as_view(template_name='guides/index.html'), name='index'),
	path('no64-excalbur/', TemplateView.as_view(template_name='guides/no64-excalbur.html'), name='no64-excalbur'),
	path('nocw/', TemplateView.as_view(template_name='guides/nocw.html'), name='nocw'),
]
