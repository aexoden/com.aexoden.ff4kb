# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = "info"

urlpatterns = [
    path("", TemplateView.as_view(template_name="info/index.html"), name="index"),
    path("formations/", views.formations, name="formations"),
    path("formations/<int:formation_id>/", views.formation_detail, name="formation_detail"),
    path("maps/", TemplateView.as_view(template_name="info/maps.html"), name="maps"),
    path("monsters/", views.monsters, name="monsters"),
    path("monsters/<int:monster_id>/", views.monster_detail, name="monster_detail"),
]
