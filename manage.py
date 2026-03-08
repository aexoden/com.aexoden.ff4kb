#!/usr/bin/env python
# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>
"""Management script for the FF4KB Django project."""

import os
import sys

if __name__ == "__main__":
    configuration = os.getenv("ENVIRONMENT", "development").title()

    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ff4kb.settings")
    os.environ.setdefault("DJANGO_CONFIGURATION", configuration)

    from configurations.management import execute_from_command_line  # pyright: ignore[reportMissingTypeStubs]

    execute_from_command_line(sys.argv)
