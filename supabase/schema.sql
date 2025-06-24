-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE user_role AS ENUM ('devotee', 'temple_admin');
CREATE TYPE service_type AS ENUM ('pooja', 'hall', 'homa', 'prasad');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled');

-- Users table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  avatar_url TEXT,
  phone TEXT,
  role user_role DEFAULT 'devotee',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Temples table
CREATE TABLE temples (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  location TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  website TEXT,
  images TEXT[],
  admin_id UUID REFERENCES profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Temple followers (many-to-many)
CREATE TABLE temple_followers (
  temple_id UUID REFERENCES temples(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  PRIMARY KEY (temple_id, user_id)
);

-- Services offered by temples
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  temple_id UUID REFERENCES temples(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  duration INTEGER NOT NULL, -- in minutes
  type service_type NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Bookings
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id),
  service_id UUID REFERENCES services(id),
  temple_id UUID REFERENCES temples(id),
  date DATE NOT NULL,
  time TIME NOT NULL,
  status booking_status DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Posts by temples
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  temple_id UUID REFERENCES temples(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  images TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Comments on posts
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Events
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  temple_id UUID REFERENCES temples(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TIME NOT NULL,
  duration INTEGER, -- in minutes
  location TEXT,
  max_participants INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Event participants
CREATE TABLE event_participants (
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  PRIMARY KEY (event_id, user_id)
);

-- Create indexes for better performance
CREATE INDEX idx_temples_location ON temples(location);
CREATE INDEX idx_services_temple_id ON services(temple_id);
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_temple_id ON bookings(temple_id);
CREATE INDEX idx_posts_temple_id ON posts(temple_id);
CREATE INDEX idx_events_temple_id ON events(temple_id);
CREATE INDEX idx_events_date ON events(date);

-- RLS (Row Level Security) policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE temples ENABLE ROW LEVEL SECURITY;
ALTER TABLE temple_followers ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_participants ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Temples policies
CREATE POLICY "Temples are viewable by everyone" ON temples
  FOR SELECT USING (true);

CREATE POLICY "Temple admins can update their temples" ON temples
  FOR UPDATE USING (auth.uid() = admin_id);

-- Services policies
CREATE POLICY "Services are viewable by everyone" ON services
  FOR SELECT USING (true);

-- Bookings policies
CREATE POLICY "Users can view their own bookings" ON bookings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings" ON bookings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Posts policies
CREATE POLICY "Posts are viewable by everyone" ON posts
  FOR SELECT USING (true);

-- Events policies
CREATE POLICY "Events are viewable by everyone" ON events
  FOR SELECT USING (true);

-- Functions
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name)
  VALUES (new.id, new.email, COALESCE(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)));
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Update timestamp function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_temples_updated_at BEFORE UPDATE ON temples
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();