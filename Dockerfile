# Use a Python+Poetry image as the base
FROM thehale/python-poetry:1.7.1-py3.11-slim

# Copy files
COPY . /app

# Install Python dependencies
WORKDIR /app
RUN poetry install

# Generate static files
RUN ENVIRONMENT=Build poetry run python manage.py collectstatic --noinput

# Set up execution
ENV FORWARDED_ALLOW_IPS='*'
ENTRYPOINT ["poetry", "run", "gunicorn", "ff4.wsgi", "--log-file", "-"]
