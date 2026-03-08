# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>
"""Django management command to generate the route metrics cache."""

import sys

from typing import Any

from django.core.management.base import BaseCommand

from ff4kb.routes.views import ROUTES, get_metrics


class Command(BaseCommand):
    """Django management command to generate the route metrics cache."""

    help = "Generates the route metrics cache"

    def handle(self, *_args: Any, **_options: Any) -> None:  # noqa: ANN401, PLR6301
        """Generate the route metrics cache."""
        for route in ROUTES:
            sys.stdout.write(f"Generating metrics cache for {route}\n")
            sys.stdout.flush()
            get_metrics(route)

        sys.stdout.write("Metrics cache complete!\n")
