# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

import sys

from django.core.management.base import BaseCommand

from ff4.routes.views import ROUTES, get_metrics


class Command(BaseCommand):
    help = "Generates the route metrics cache"

    def handle(self, *_args, **_options) -> None:  # type: ignore  # noqa: ANN002, ANN003, PLR6301
        for route in ROUTES:
            sys.stdout.write(f"Generating metrics cache for {route}\n")
            sys.stdout.flush()
            get_metrics(route)

        sys.stdout.write("Metrics cache complate!\n")
