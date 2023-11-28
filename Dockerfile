# Use a Python+Poetry image as the base
FROM thehale/python-poetry:1.7.1-py3.11-slim

# Copy files
COPY . /app

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
