# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>

import os

configuration = os.getenv("ENVIRONMENT", "development").title()

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ff4.settings")
os.environ.setdefault("DJANGO_CONFIGURATION", configuration)

from configurations.wsgi import get_wsgi_application  # type: ignore  # noqa: E402

application = get_wsgi_application()
