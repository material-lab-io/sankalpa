export interface Temple {
  id: string
  name: string
  description: string
  location: string
  address: string
  phone?: string
  email?: string
  website?: string
  images: string[]
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  email: string
  name: string
  avatar_url?: string
  role: 'devotee' | 'temple_admin'
  created_at: string
}

export interface Service {
  id: string
  temple_id: string
  name: string
  description: string
  price: number
  duration: number
  type: 'pooja' | 'hall' | 'homa' | 'prasad'
}

export interface Booking {
  id: string
  user_id: string
  service_id: string
  temple_id: string
  date: string
  time: string
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
}