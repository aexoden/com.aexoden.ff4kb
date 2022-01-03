from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = 'info'

urlpatterns = [
    path('', TemplateView.as_view(template_name='info/index.html'), name='index'),
    path('monsters/', views.monsters, name='monsters'),
    path('monsters/<int:id>/', views.monster_detail, name='monster_detail'),
]
