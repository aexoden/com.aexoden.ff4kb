from django.urls import path

from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('<slug:route>/<int:seed>/', views.detail, name='detail'),
]
