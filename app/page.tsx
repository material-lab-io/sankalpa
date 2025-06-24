import { Search, TrendingUp, Calendar, Sparkles, Star } from 'lucide-react'
import TempleCard from '@/components/TempleCard'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

const featuredTemples = [
  { 
    name: 'Sri Devi Karumariamma Temple', 
    location: 'RR Nagar, Bengaluru', 
    rating: 4.9, 
    followers: 5200,
    image: '/temples/karumari/main.jpg',
    deity: 'Sri Devi Karumariamma',
    featured: true,
    link: '/temples/karumari'
  },
  { 
    name: 'Sri Venkateswara Temple', 
    location: 'Tirupati', 
    rating: 4.9, 
    followers: 15200,
    image: 'https://images.unsplash.com/photo-1621940532789-97536328d9b5?w=400',
    deity: 'Lord Venkateswara'
  },
  { 
    name: 'Meenakshi Amman Temple', 
    location: 'Madurai', 
    rating: 4.8, 
    followers: 12500,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400',
    deity: 'Goddess Meenakshi'
  },
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
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-br from-sankalpa-primary to-sankalpa-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex flex-col justify-center px-4">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to Sankalpa
          </h1>
          <p className="text-white/90 text-lg mb-6">
            Your spiritual journey begins here
          </p>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search temples, services..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-sankalpa-bg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Featured Temple Section */}
      <section className="px-4 mt-6">
        <Link href="/temples/karumari" className="block">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-4 relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star size={14} className="fill-current" />
              FEATURED
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-sankalpa-primary to-sankalpa-secondary rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                కరు
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900">Sri Devi Karumariamma Temple</h3>
                <p className="text-sm text-gray-600 mt-1">RR Nagar, Bengaluru | First temple partner on Sankalpa</p>
                <p className="text-xs text-sankalpa-primary mt-2 font-medium">Explore temple services →</p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Quick Actions */}
      <section className="px-4 mt-6">
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: '🛕', label: 'Temples' },
            { icon: '🎉', label: 'Events' },
            { icon: '📿', label: 'Pooja' },
            { icon: '🎁', label: 'Donate' },
          ].map((item) => (
            <button
              key={item.label}
              className="bg-white rounded-xl p-4 card-shadow active:scale-95 transition-all"
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <span className="text-xs text-gray-600">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <TrendingUp size={20} className="mr-2 text-sankalpa-primary" />
            Trending Temples
          </h2>
          <button className="text-sm text-sankalpa-primary font-medium">
            View all
          </button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {featuredTemples.map((temple) => (
            <div key={temple.name} className="min-w-[280px] animate-slide-up">
              <TempleCard {...temple} />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 mt-8 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center">
            <Sparkles size={20} className="mr-2 text-sankalpa-primary" />
            Popular Services
          </h2>
          <button className="text-sm text-sankalpa-primary font-medium">
            Browse all
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {popularServices.map((service, index) => (
            <div key={service.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Banner */}
      <section className="px-4 mt-8 mb-8">
        <div className="bg-gradient-to-r from-sankalpa-primary to-sankalpa-secondary rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-lg mb-1">Karthika Deepam</h3>
              <p className="text-white/80 text-sm mb-3">
                Join thousands of devotees for this auspicious festival
              </p>
              <button className="bg-white text-sankalpa-primary px-4 py-2 rounded-lg font-medium text-sm">
                Learn More
              </button>
            </div>
            <Calendar className="text-white/80" size={32} />
          </div>
        </div>
      </section>
    </div>
  )
}