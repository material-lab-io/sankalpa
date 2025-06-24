import { Search, TrendingUp, Calendar, Sparkles, Star, ChevronRight } from 'lucide-react'
import TempleCard from '@/components/TempleCard'
import ServiceCard from '@/components/ServiceCard'
import TempleImage from '@/components/TempleImage'
import Link from 'next/link'

const featuredTemples = [
  { 
    name: 'Sri Devi Karumariamma Temple', 
    location: 'RR Nagar, Bengaluru', 
    rating: 4.9, 
    followers: 5200,
    image: 'https://images.unsplash.com/photo-1544588440-fc7551331160?w=400&h=600&fit=crop',
    deity: 'Sri Devi Karumariamma',
    featured: true,
    link: '/temples/karumari'
  },
  { 
    name: 'Sri Venkateswara Temple', 
    location: 'Tirupati', 
    rating: 4.9, 
    followers: 15200,
    image: 'https://images.unsplash.com/photo-1621940532789-97536328d9b5?w=400&h=600&fit=crop',
    deity: 'Lord Venkateswara'
  },
  { 
    name: 'Meenakshi Amman Temple', 
    location: 'Madurai', 
    rating: 4.8, 
    followers: 12500,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=600&fit=crop',
    deity: 'Goddess Meenakshi'
  },
  {
    name: 'Golden Temple',
    location: 'Vellore',
    rating: 4.7,
    followers: 8900,
    image: 'https://images.unsplash.com/photo-1609947017287-d6b32d646711?w=400&h=600&fit=crop',
    deity: 'Goddess Lakshmi'
  },
  {
    name: 'Kapaleeshwarar Temple',
    location: 'Chennai',
    rating: 4.8,
    followers: 10200,
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=400&h=600&fit=crop',
    deity: 'Lord Shiva'
  }
]

const popularServices = [
  {
    title: 'Abhishekam',
    description: 'Sacred bathing ritual for deities with holy substances',
    price: '500',
    duration: '30 mins',
    type: 'pooja' as const,
  },
  {
    title: 'Kalyana Mandapam',
    description: 'Traditional wedding hall for auspicious ceremonies',
    price: '15,000',
    duration: 'Full day',
    type: 'hall' as const,
  },
]

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Search Bar - Netflix style top */}
      <section className="px-4 pt-20 pb-3 bg-sankalpa-bg">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sankalpa-dark/60" size={16} />
          <input
            type="text"
            placeholder="Search temples, services..."
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-sankalpa-cream-light placeholder-sankalpa-dark/50 focus:outline-none focus:ring-2 focus:ring-sankalpa-gold/30 text-sm"
          />
        </div>
      </section>

      {/* Featured Temple Section - Netflix Hero Style */}
      <section className="relative -mt-3">
        <Link href="/temples/karumari" className="block">
          <div className="relative h-[420px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <TempleImage
                src="https://images.unsplash.com/photo-1544588440-fc7551331160?w=800&h=600&fit=crop"
                alt="Sri Devi Karumariamma Temple"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 pb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-sankalpa-gold text-white px-3 py-1 rounded text-xs font-bold">FEATURED</span>
                <span className="text-white/80 text-xs">Temple of the Month</span>
              </div>
              
              <h2 className="text-3xl font-serif text-white mb-2">Sri Devi Karumariamma Temple</h2>
              <p className="text-white/80 text-sm mb-4">RR Nagar, Bengaluru • 5.2K Devotees</p>
              
              <div className="flex items-center gap-3">
                <button className="bg-white text-sankalpa-dark px-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-white/90 transition-colors">
                  <span>Visit Temple</span>
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-full font-medium text-sm border border-white/30 hover:bg-white/30 transition-colors">
                  More Info
                </button>
              </div>
              
              {/* Quick Info Pills */}
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="text-xs text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Daily Poojas</span>
                <span className="text-xs text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Hall Booking</span>
                <span className="text-xs text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Live Darshan</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Quick Actions - Netflix style compact */}
      <section className="px-4 mt-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {[
            { icon: '🛕', label: 'Temples' },
            { icon: '🪔', label: 'Poojas' },
            { icon: '🎊', label: 'Events' },
            { icon: '🙏', label: 'Donate' },
            { icon: '📿', label: 'Rituals' },
            { icon: '🎯', label: 'Bookings' },
          ].map((item) => (
            <button
              key={item.label}
              className="flex flex-col items-center min-w-[72px] py-3 px-2 bg-sankalpa-cream-light rounded-xl hover:bg-sankalpa-light transition-colors"
            >
              <div className="text-xl mb-1">{item.icon}</div>
              <span className="text-[11px] text-sankalpa-dark font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Trending Section - Netflix style */}
      <section className="mt-6">
        <div className="flex items-center justify-between mb-3 px-4">
          <h2 className="text-base font-semibold text-sankalpa-dark">
            Trending Temples
          </h2>
          <ChevronRight size={20} className="text-sankalpa-dark/60" />
        </div>
        
        <div className="flex gap-2 pl-4 overflow-x-auto scrollbar-hide">
          {featuredTemples.map((temple) => (
            <div key={temple.name} className="min-w-[120px] animate-slide-up">
              <TempleCard {...temple} compact />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Netflix style */}
      <section className="mt-6">
        <div className="flex items-center justify-between mb-3 px-4">
          <h2 className="text-base font-semibold text-sankalpa-dark">
            Popular Services
          </h2>
          <ChevronRight size={20} className="text-sankalpa-dark/60" />
        </div>
        
        <div className="flex gap-3 pl-4 overflow-x-auto scrollbar-hide pb-4">
          {popularServices.map((service, index) => (
            <div key={service.title} className="min-w-[160px] animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard {...service} compact />
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events - Netflix style banner */}
      <section className="mt-6 mb-20">
        <div className="flex items-center justify-between mb-3 px-4">
          <h2 className="text-base font-semibold text-sankalpa-dark">
            Upcoming Events
          </h2>
          <ChevronRight size={20} className="text-sankalpa-dark/60" />
        </div>
        
        <div className="px-4">
          <div className="bg-gradient-to-r from-sankalpa-gold to-sankalpa-gold-dark rounded-xl p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Calendar size={80} />
            </div>
            <div className="relative z-10">
              <h3 className="font-semibold text-white mb-1">Karthika Deepam Festival</h3>
              <p className="text-white/80 text-xs mb-3">
                Nov 15, 2024 • Multiple temples participating
              </p>
              <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-medium border border-white/30">
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}