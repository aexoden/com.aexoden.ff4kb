#
# Build the rosa binary
#

FROM debian:trixie-slim@sha256:1d3c811171a08a5adaa4a163fbafd96b61b87aa871bbc7aa15431ac275d3d430 AS rosa-builder

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

FROM ghcr.io/astral-sh/uv:python3.14-trixie-slim@sha256:c59e2349e120548247cf7fcd9da3afaaf7634289379330c112a087d26ca43ffb

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
