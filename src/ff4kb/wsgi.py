# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>
"""WSGI entry point for FF4KB."""

import os

configuration = os.getenv("ENVIRONMENT", "development").title()

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ff4kb.settings")
os.environ.setdefault("DJANGO_CONFIGURATION", configuration)

from configurations.wsgi import get_wsgi_application  # pyright: ignore[reportMissingTypeStubs] # noqa: E402

application = get_wsgi_application()
