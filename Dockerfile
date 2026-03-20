#
# Build the rosa binary
#

FROM debian:trixie-slim@sha256:26f98ccd92fd0a44d6928ce8ff8f4921b4d2f535bfa07555ee5d18f61429cf0c AS rosa-builder

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

FROM ghcr.io/astral-sh/uv:python3.14-trixie-slim@sha256:9209abd060be1f34ea43339056c18f1b5c402d1b8cb61cf15fd7e877dbaf1552

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
