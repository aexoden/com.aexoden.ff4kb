# Use a Python+Poetry image as the base
FROM thehale/python-poetry:1.7.1-py3.11-slim

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
WORKDIR /app
RUN poetry install

# Django setup
RUN ENVIRONMENT=Build poetry run python manage.py collectstatic --noinput
RUN ENVIRONMENT=Build poetry run python manage.py migrate
RUN ENVIRONMENT=Build poetry run python manage.py generate_metrics_cache

# Set up execution
ENV FORWARDED_ALLOW_IPS='*'
ENTRYPOINT ["poetry", "run", "gunicorn", "ff4.wsgi", "--log-file", "-"]
