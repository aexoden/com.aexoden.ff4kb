#!/usr/bin/env python3
# SPDX-License-Identifier: MIT
# SPDX-FileCopyrightText: 2024 Jason Lynch <jason@aexoden.com>
"""Container health check for the FF4KB web app."""

import os
import socket
import sys
import urllib.error
import urllib.request

PORT = os.getenv("PORT", "8000")
TIMEOUT = 5
HTTP_OK = 200
PATHS = ("/guides/", "/static/css/style.css")


def check(path: str, host: str) -> str | None:
    """Return an error message if the path is unhealthy, otherwise None."""
    request = urllib.request.Request(
        f"http://127.0.0.1:{PORT}{path}",
        headers={"Host": host, "X-Forwarded-Proto": "https"},
        method="GET",
    )
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT) as response:  # noqa: S310 - fixed http://127.0.0.1 target
            if response.status != HTTP_OK:
                return f"{path}: HTTP {response.status}"
    except urllib.error.HTTPError as error:
        return f"{path}: HTTP {error.code}"
    except (urllib.error.URLError, TimeoutError, OSError) as error:
        return f"{path}: {error}"
    return None


def main() -> int:
    """Return the process exit code: 0 if every check is healthy, otherwise 1."""
    host = socket.gethostname()
    failures = [message for path in PATHS if (message := check(path, host)) is not None]
    if failures:
        print("unhealthy: " + "; ".join(failures), file=sys.stderr)  # noqa: T201 - surfaced in docker health logs
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
