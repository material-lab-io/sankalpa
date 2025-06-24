#!/bin/bash

echo "========================================="
echo "Deploying Sankalpa to GitHub Pages"
echo "========================================="
echo ""

# Check if git remote exists
if ! git remote | grep -q origin; then
    echo "No git remote 'origin' found."
    echo ""
    echo "Please follow these steps:"
    echo ""
    echo "1. Create a new repository on GitHub:"
    echo "   - Go to https://github.com/new"
    echo "   - Name it: sankalpa"
    echo "   - Make it public"
    echo "   - Don't initialize with README"
    echo ""
    echo "2. Add the remote and push:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/sankalpa.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
else
    echo "Git remote found. Pushing to GitHub..."
    git add .
    git commit -m "Update for GitHub Pages deployment"
    git push origin main
    echo ""
    echo "Code pushed to GitHub!"
    echo ""
fi

echo "3. Enable GitHub Pages:"
echo "   - Go to your repository on GitHub"
echo "   - Click 'Settings' tab"
echo "   - Scroll down to 'Pages' in the left sidebar"
echo "   - Under 'Build and deployment':"
echo "     - Source: GitHub Actions"
echo ""
echo "4. The workflow will run automatically after push"
echo "   Check progress at: https://github.com/YOUR_USERNAME/sankalpa/actions"
echo ""
echo "5. Your site will be available at:"
echo "   https://YOUR_USERNAME.github.io/sankalpa"
echo ""
echo "Note: First deployment may take 5-10 minutes."