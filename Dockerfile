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

FROM python:3.14.4-slim-trixie@sha256:2ca02f32b4d9d893863367ce07ec1972819f476dd38d8612f2a9cb6a41cbb727
COPY --from=ghcr.io/astral-sh/uv:0.11.10@sha256:bca7f6959666f3524e0c42129f9d8bbcfb0c180d847f5187846b98ff06125ead /uv /uvx /bin/

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
ENTRYPOINT ["uv", "run", "gunicorn", "ff4kb.wsgi", "--log-file", "-"]
