# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

from django.urls import path
from django.views.generic import RedirectView, TemplateView

from . import views

app_name = "tools"

urlpatterns = [
    path("", TemplateView.as_view(template_name="tools/index.html"), name="index"),
    path(
        "experience-route-calculator/",
        TemplateView.as_view(template_name="tools/experience-route-calculator.html"),
        name="experience-route-calculator",
    ),
    path("map-viewer/", views.map_viewer, name="map-viewer"),
    path("map-viewer/<slug:map_id>", views.map_viewer, name="map-viewer-map"),
    path(
        "nocw-gp-calculator/",
        TemplateView.as_view(template_name="tools/nocw-gp-calculator.html"),
        name="nocw-gp-calculator",
    ),
    path(
        "nocw-igt-calculator/",
        TemplateView.as_view(template_name="tools/nocw-igt-calculator.html"),
        name="nocw-igt-calculator",
    ),
    path("grind-finder/", TemplateView.as_view(template_name="tools/grind-finder.html"), name="grind-finder"),
    path("seed-finder/", views.seed_finder, name="seed-finder"),
    path(
        "treasure-checker/",
        TemplateView.as_view(template_name="tools/treasure-checker.html"),
        name="treasure-checker",
    ),
    path("nocw-gp/", RedirectView.as_view(pattern_name="tools:nocw-gp-calculator", permanent=True)),
    path("nocw-igt/", RedirectView.as_view(pattern_name="tools:nocw-igt-calculator", permanent=True)),
]
