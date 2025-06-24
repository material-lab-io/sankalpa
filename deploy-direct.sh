#!/bin/bash

echo "======================================"
echo "Deploying Sankalpa to Cloudflare Pages"
echo "======================================"
echo ""

# Check if the out directory exists
if [ ! -d "out" ]; then
    echo "Building the application first..."
    npm run build
    if [ $? -ne 0 ]; then
        echo "Build failed. Please fix any errors and try again."
        exit 1
    fi
fi

echo ""
echo "The 'out' directory is ready for upload."
echo ""
echo "Since we need Node.js v20+ for Wrangler CLI, please follow these manual steps:"
echo ""
echo "1. Open your browser and go to:"
echo "   https://dash.cloudflare.com/?to=/:account/pages"
echo ""
echo "2. Click 'Create application' > 'Pages' > 'Direct Upload'"
echo ""
echo "3. Drag and drop or browse to select the following folder:"
echo "   $(pwd)/out"
echo ""
echo "4. Name your project: sankalpa"
echo "   (or sankalpa-app if 'sankalpa' is taken)"
echo ""
echo "5. Click 'Create project'"
echo ""
echo "Your site will be live in a few moments at:"
echo "https://sankalpa.pages.dev"
echo "(or https://sankalpa-app.pages.dev if you used the alternate name)"
echo ""
echo "Note: The first deployment may take 2-3 minutes to complete."
echo ""

# Create a zip file for easier upload if needed
echo "Creating a zip file for easier upload..."
cd out && zip -r ../sankalpa-deploy.zip . && cd ..
echo "Created sankalpa-deploy.zip in case you prefer to upload a zip file."