# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sankalpa is a temple-devotee connection platform (described as "OnlyFans for temples") that allows temples to engage with their community through posts, events, and services while devotees can discover, follow, and interact with temples.

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript and App Router
- **Styling**: Tailwind CSS with custom theme colors and animations
- **Database**: Supabase (PostgreSQL with auth, realtime, and RLS policies)
- **Deployment**: Static export configured for GitHub Pages

## Development Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000
npm run build        # Build for production (static export to /out)
npm run serve        # Serve static build on port 8090

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run typecheck    # Run TypeScript type checking
```

## Key Architecture Decisions

1. **Static Site Generation**: The app is configured for static export (`output: 'export'` in next.config.js) to deploy on GitHub Pages with base path `/sankalpa`.

2. **Database Architecture**: 
   - All database logic uses Supabase with TypeScript types
   - Row Level Security (RLS) policies are implemented for all tables
   - Schema includes: profiles, temples, services, bookings, posts, events, etc.

3. **Component Structure**:
   - Mobile-first design with `BottomNav` component for primary navigation
   - Reusable cards for temples (`TempleCard`) and services (`ServiceCard`)
   - Custom animations defined in Tailwind config

4. **Supabase Client Setup**:
   - Client-side: `/lib/supabase/client.ts`
   - Server-side: `/lib/supabase/server.ts`
   - Always use the appropriate client based on component type

## Code Style Guidelines

- **No semicolons** (configured in Prettier)
- **Single quotes** for strings
- **2-space indentation**
- **TypeScript strict mode** is enabled
- Use path alias `@/` for imports from root

## Environment Variables

Required in `.env`:
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_APP_URL
```

## Common Development Tasks

### Adding a New Page
- Create file in `/app` directory following Next.js App Router conventions
- Use mobile-first responsive design
- Include proper TypeScript types

### Working with Supabase
- Define types in `/types/supabase.ts`
- Use the generated types from database schema
- Always handle loading and error states
- Check RLS policies when adding new features

### Styling Components
- Use Tailwind CSS classes
- Custom colors available: `sankalpa-primary`, `sankalpa-secondary`, etc.
- Animations: `fade-in`, `slide-up`, `scale`

## Deployment

The project deploys to GitHub Pages:
1. `npm run build` creates static export in `/out`
2. Base path is configured as `/sankalpa`
3. Images are unoptimized for static export compatibility

## Important Notes

- No test framework is currently configured
- Authentication flows are planned but not yet implemented
- Payment integration is a future requirement
- The project follows a mobile-first approach with bottom navigation