#!/bin/bash
docker build -t your-app-name .
docker run -p 5173:5173 -p 8080:8080 your-app-name
