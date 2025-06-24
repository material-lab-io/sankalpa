#!/bin/bash

echo "========================================"
echo "Deploying to sankalpa.materiallab.io"
echo "========================================"
echo ""

# Build the application
echo "Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed. Please fix any errors and try again."
    exit 1
fi

echo ""
echo "Build successful!"
echo ""

# Create a script for running the server with sudo
cat > run-server.sh << 'EOF'
#!/bin/bash
# This script runs the server with proper permissions

cd /home/kanaba/sankalpa

# Kill any existing node servers on port 3000
sudo lsof -ti:3000 | xargs sudo kill -9 2>/dev/null

# Start the server
echo "Starting server on port 3000..."
sudo node server.js
EOF

chmod +x run-server.sh

# Create Cloudflare tunnel configuration
cat > setup-tunnel.sh << 'EOF'
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
url: http://localhost:3000
tunnel: sankalpa
credentials-file: /home/kanaba/.cloudflared/[TUNNEL_ID].json
EOFCONFIG

echo "Run the tunnel with: cloudflared tunnel run sankalpa"
EOF

chmod +x setup-tunnel.sh

echo "Setup complete!"
echo ""
echo "To deploy to sankalpa.materiallab.io:"
echo ""
echo "1. In Terminal 1, run the server:"
echo "   ./run-server.sh"
echo ""
echo "2. In Terminal 2, set up and run the Cloudflare tunnel:"
echo "   ./setup-tunnel.sh"
echo ""
echo "3. Once both are running, your site will be accessible at:"
echo "   https://sankalpa.materiallab.io"
echo ""
echo "Note: You'll need sudo access to run the server on port 3000."