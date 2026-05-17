#
# Build the rosa binary
#

FROM debian:trixie-slim@sha256:109e2c65005bf160609e4ba6acf7783752f8502ad218e298253428690b9eaa4b AS rosa-builder

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

FROM python:3.14.3-slim-trixie@sha256:5e59aae31ff0e87511226be8e2b94d78c58f05216efda3b07dbbed938ec8583b
COPY --from=ghcr.io/astral-sh/uv:0.10.12@sha256:72ab0aeb448090480ccabb99fb5f52b0dc3c71923bffb5e2e26517a1c27b7fec /uv /uvx /bin/

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
