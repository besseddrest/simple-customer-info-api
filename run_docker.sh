#!/bin/bash

# Check if Docker daemon is running
docker info >/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Error: Docker daemon is not running. Please start Docker and try again."
    exit 1
fi

# Start services with Docker Compose
docker-compose up --build

# Optional: Include other docker-compose commands as necessary, such as monitoring logs
# docker-compose logs -f
