# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

from django.urls import path
from django.views.generic import RedirectView, TemplateView

app_name = "guides"

urlpatterns = [
    path("", TemplateView.as_view(template_name="guides/index.html"), name="index"),
    path("cw-music/", TemplateView.as_view(template_name="guides/cw-music.html"), name="cw-music"),
    path("ff5/", TemplateView.as_view(template_name="guides/ff5.html"), name="ff5"),
    path("ff5-glitchless/", TemplateView.as_view(template_name="guides/ff5-glitchless.html"), name="ff5-glitchless"),
    path("glitchless/", TemplateView.as_view(template_name="guides/glitchless.html"), name="glitchless"),
    path(
        "mini-glitch-room-setup/",
        TemplateView.as_view(template_name="guides/mini-glitch-room-setup.html"),
        name="mini-glitch-room-setup",
    ),
    path(
        "mini-inventory-warping/",
        TemplateView.as_view(template_name="guides/mini-inventory-warping.html"),
        name="mini-inventory-warping",
    ),
    path(
        "mini-seed-92-manipulation/",
        TemplateView.as_view(template_name="guides/mini-seed-92-manipulation.html"),
        name="mini-seed-92-manipulation",
    ),
    path(
        "mini-step-routing/",
        TemplateView.as_view(template_name="guides/mini-step-routing.html"),
        name="mini-step-routing",
    ),
    path("no64-excalbur/", TemplateView.as_view(template_name="guides/no64-excalbur.html"), name="no64-excalbur"),
    path("no64-rosa/", TemplateView.as_view(template_name="guides/no64-rosa.html"), name="no64-rosa"),
    path(
        "no64-rosa-marathon/",
        TemplateView.as_view(template_name="guides/no64-rosa-marathon.html"),
        name="no64-rosa-marathon",
    ),
    path("nocw/", TemplateView.as_view(template_name="guides/nocw.html"), name="nocw"),
    path("sfc-nocw/", TemplateView.as_view(template_name="guides/sfc-nocw.html"), name="sfc-nocw"),
    path("yes64/", RedirectView.as_view(pattern_name="guides:nocw", permanent=True)),
    path("yes64cw/", RedirectView.as_view(pattern_name="guides:cw-music", permanent=True)),
    path("mini-glitch-room/", RedirectView.as_view(pattern_name="guides:mini-glitch-room-setup", permanent=-True)),
    path("mini-item-warps/", RedirectView.as_view(pattern_name="guides:mini-inventory-warping", permanent=-True)),
]
