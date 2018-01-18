from django.urls import path

from . import views

app_name = 'routes'

urlpatterns = [
	path('', views.index, name='index'),
	path('<slug:route>/<int:seed>/', views.detail, name='detail'),
]
