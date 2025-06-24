# Sankalpa - Temple-Devotee Connection Platform

A mobile-friendly web application that connects temples and devotees, enabling direct engagement through community features, service bookings, and event participation.

## Features

- **For Devotees:**
  - Discover and follow temples
  - Book temple services (pooja, halls, homa)
  - Participate in temple events
  - AI-powered chat support
  - Personalized home feed

- **For Temples:**
  - Manage community and connect with devotees
  - Create posts and announcements
  - Offer services and manage bookings
  - Organize events
  - Provide AI-powered support

## Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Auth, Realtime)
- **UI Components:** Custom components with Lucide icons
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sankalpa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the schema from `supabase/schema.sql`
   - Get your project URL and anon key from Settings > API

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
sankalpa/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   ├── temples/      # Temples listing
│   ├── services/     # Services booking
│   ├── chat/         # AI chat interface
│   └── api/          # API routes
├── components/       # Reusable UI components
├── lib/              # Utility functions and configs
│   ├── supabase/     # Supabase client setup
│   └── utils.ts      # Helper functions
├── types/            # TypeScript type definitions
└── supabase/         # Database schema and migrations
```

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run typecheck  # Run TypeScript type checking
```

## Next Steps

1. Set up authentication flows
2. Implement temple profile pages
3. Add service booking functionality
4. Integrate AI chat feature
5. Create admin dashboard for temples
6. Add payment integration
7. Implement real-time notifications

## Contributing

Please read our contributing guidelines before submitting PRs.

## License

This project is proprietary software.