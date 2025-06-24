#!/bin/bash

echo "=================================="
echo "Sankalpa - Cloudflare Pages Setup"
echo "=================================="
echo ""

# Check if build was successful
if [ ! -d "out" ]; then
    echo "Building the application..."
    npm run build
fi

echo ""
echo "Your app is ready for deployment!"
echo ""
echo "Option 1: Deploy via GitHub (Recommended)"
echo "------------------------------------------"
echo "1. Create a new GitHub repository"
echo "2. Push your code:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/sankalpa.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Go to: https://dash.cloudflare.com/?to=/:account/pages"
echo "4. Click 'Create application' > 'Pages' > 'Connect to Git'"
echo "5. Select your repository"
echo "6. Use these build settings:"
echo "   - Framework preset: None"
echo "   - Build command: npm run build"
echo "   - Build output directory: out"
echo ""
echo "Option 2: Direct Upload"
echo "-----------------------"
echo "1. Go to: https://dash.cloudflare.com/?to=/:account/pages"
echo "2. Click 'Create application' > 'Pages' > 'Direct Upload'"
echo "3. Upload the 'out' folder"
echo "4. Name your project: sankalpa"
echo ""
echo "Your site will be available at:"
echo "https://sankalpa.pages.dev"
echo ""
echo "Note: Remember to add environment variables in Cloudflare Pages settings if needed."