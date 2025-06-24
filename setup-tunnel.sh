#!/bin/bash
# This script sets up Cloudflare tunnel to sankalpa.materiallab.io

# Check if cloudflared is installed
if ! command -v cloudflared &> /dev/null; then
    echo "Installing cloudflared..."
    curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
    sudo dpkg -i cloudflared.deb
    rm cloudflared.deb
fi

# Run the tunnel
echo "Starting Cloudflare tunnel to sankalpa.materiallab.io..."
echo "Make sure the domain is configured in your Cloudflare account."
echo ""

# Create tunnel configuration
cloudflared tunnel login
cloudflared tunnel create sankalpa
cloudflared tunnel route dns sankalpa sankalpa.materiallab.io

# Create config file
cat > ~/.cloudflared/config.yml << EOFCONFIG
url: http://localhost:8090
tunnel: sankalpa
credentials-file: /home/kanaba/.cloudflared/[TUNNEL_ID].json
EOFCONFIG

echo "Run the tunnel with: cloudflared tunnel run sankalpa"
