#!/bin/bash

# This script initializes deployment to Cloudflare Pages

echo "Initializing Cloudflare Pages deployment for Sankalpa..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit"
fi

echo ""
echo "To deploy to Cloudflare Pages:"
echo ""
echo "1. Create a GitHub repository and push your code:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/sankalpa.git"
echo "   git push -u origin main"
echo ""
echo "2. Go to https://dash.cloudflare.com/ and sign in"
echo ""
echo "3. Navigate to 'Workers & Pages' > 'Create application' > 'Pages' > 'Connect to Git'"
echo ""
echo "4. Select your GitHub repository"
echo ""
echo "5. Configure build settings:"
echo "   - Framework preset: Next.js (Static HTML Export)"
echo "   - Build command: npm run build"
echo "   - Build output directory: out"
echo ""
echo "6. Add environment variables (if needed):"
echo "   - NEXT_PUBLIC_SUPABASE_URL"
echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo ""
echo "7. Click 'Save and Deploy'"
echo ""
echo "Your site will be available at: https://sankalpa.pages.dev"
echo "(or your custom domain if configured)"