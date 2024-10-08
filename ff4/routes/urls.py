# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

from django.urls import path
from django.views.generic import RedirectView

from . import views

app_name = "routes"

urlpatterns = [
    path("", views.index, name="index"),
    path("tutorial/", RedirectView.as_view(pattern_name="guides:mini-step-routing", permanent=True)),
    path("<slug:route>/", views.route, name="route"),
    path("<slug:route>/<int:seed>/", views.detail, name="detail"),
    path("<slug:route>/<int:seed>/custom/<slug:vars>/", views.detail, name="detail"),
]
