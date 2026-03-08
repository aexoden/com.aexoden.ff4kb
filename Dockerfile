# Use a Python+Poetry image as the base
FROM ghcr.io/astral-sh/uv:python3.12-trixie-slim@sha256:cab406ea74885312aa1f55a97bc7ed0fd46366643c0e17ffd002a03d7eb9e45f

# Copy files
COPY . /app

# Install rosa dependencies
RUN apt-get update
RUN apt-get install -y \
    clang \
    git \
    libboost-dev \
    liblmdb-dev \
    meson \
    pkg-config

# Build and install rosa
RUN git clone https://github.com/aexoden/rosa /rosa-build
WORKDIR /rosa-build
RUN git submodule init
RUN git submodule update
RUN mkdir build
RUN CXX=clang++ CXXFLAGS=-march=native meson setup build
RUN ninja -C build -v
RUN cp build/rosa /app/rosa/rosa

# Install Python dependencies
ENV UV_NO_DEV=1
WORKDIR /app
RUN uv sync --locked

# Django setup
RUN ENVIRONMENT=Build uv run python manage.py collectstatic --noinput
RUN ENVIRONMENT=Build uv run python manage.py migrate
RUN ENVIRONMENT=Build uv run python manage.py generate_metrics_cache

# Set up execution
ENV FORWARDED_ALLOW_IPS='*'
ENTRYPOINT ["uv", "run", "gunicorn", "ff4kb.wsgi", "--log-file", "-"]
