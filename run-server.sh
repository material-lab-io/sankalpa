#!/bin/bash
# This script runs the server with proper permissions

cd /home/kanaba/sankalpa

# Kill any existing node servers on port 8090
sudo lsof -ti:8090 | xargs sudo kill -9 2>/dev/null

# Start the server
echo "Starting server on port 8090..."
sudo node server.js
