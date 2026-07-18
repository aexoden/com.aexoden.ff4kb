#
# Build the rosa binary
#

FROM debian:trixie-slim@sha256:b6e2a152f22a40ff69d92cb397223c906017e1391a73c952b588e51af8883bf8 AS rosa-builder

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    clang \
    git \
    libboost-dev \
    liblmdb-dev \
    meson \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/aexoden/rosa /rosa-build
WORKDIR /rosa-build
RUN git submodule init && git submodule update
RUN CXX=clang++ meson setup build && ninja -C build -v

#
# Build the final image
#

FROM python:3.14.5-slim-trixie@sha256:c845af9399020c7e562969a13689e929074a10fd057acd1b1fad06a2fb068e97
COPY --from=ghcr.io/astral-sh/uv:0.11.25@sha256:1e3808aa9023d0980e7c15b1fa7c1ac16ff35925780cf5c459858b2d693f01a9 /uv /uvx /bin/

# Install rosa runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    liblmdb0 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy dependency metadata first to leverage Docker caching
COPY pyproject.toml uv.lock ./

# Install Python dependencies
ENV UV_NO_DEV=1
RUN uv sync --frozen --no-install-project

# Copy application code
COPY . .

# Copy rosa binary from builder stage
COPY --from=rosa-builder /rosa-build/build/rosa ./rosa/rosa

# Install the project itself
RUN uv sync --frozen

# Django build steps
RUN ENVIRONMENT=Build uv run python manage.py collectstatic --noinput && \
    ENVIRONMENT=Build uv run python manage.py migrate && \
    ENVIRONMENT=Build uv run python manage.py generate_metrics_cache

ENV FORWARDED_ALLOW_IPS='*'
EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD ["python", "/app/scripts/healthcheck.py"]

ENTRYPOINT ["uv", "run", "gunicorn", "ff4kb.wsgi", "--log-file", "-"]
