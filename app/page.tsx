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
      <section className="relative h-56 bg-gradient-to-br from-sankalpa-cream-light via-sankalpa-light to-sankalpa-gold-light overflow-hidden">
        {/* Kolam pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <pattern id="kolam" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" className="text-sankalpa-gold-dark" />
              <path d="M10,5 L15,10 L10,15 L5,10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sankalpa-gold-dark" />
            </pattern>
            <rect width="100" height="100" fill="url(#kolam)" />
          </svg>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-4 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-sm text-sankalpa-dark/70 mb-1">
              {new Date().getHours() < 12 ? 'Good Morning' : new Date().getHours() < 17 ? 'Good Afternoon' : 'Good Evening'}
            </p>
            <h1 className="text-3xl font-serif text-sankalpa-dark mb-2">
              Welcome back, <span className="text-sankalpa-gold">Devotee</span>
            </h1>
            <p className="text-sankalpa-dark/80 text-sm mb-1 font-serif italic">
              सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः
            </p>
            <p className="text-xs text-sankalpa-dark/60">
              May all beings be happy, may all be free from disease
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative mt-6 max-w-md mx-auto w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sankalpa-dark/60" size={18} />
            <input
              type="text"
              placeholder="Search temples, services..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm placeholder-sankalpa-dark/50 focus:outline-none focus:ring-2 focus:ring-sankalpa-gold/30 text-sm"
            />
          </div>
        </div>
        
        {/* Temple border pattern */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0,30 Q30,0 60,30 T120,30 T180,30 T240,30 T300,30 T360,30 T420,30 T480,30 T540,30 T600,30 T660,30 T720,30 T780,30 T840,30 T900,30 T960,30 T1020,30 T1080,30 T1140,30 T1200,30 L1200,60 L0,60 Z" 
                  fill="white" className="fill-sankalpa-bg" />
          </svg>
        </div>
      </section>

      {/* Featured Temple Section */}
      <section className="px-4 mt-6">
        <Link href="/temples/karumari" className="block">
          <div className="bg-gradient-to-r from-sankalpa-gold-light/20 to-sankalpa-cream-light border border-sankalpa-gold/20 rounded-3xl p-5 relative overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="absolute top-3 right-3 bg-sankalpa-gold text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star size={12} className="fill-current" />
              FEATURED
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-sankalpa-gold to-sankalpa-gold-dark rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                <span className="font-serif">కరు</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-sankalpa-dark">Sri Devi Karumariamma Temple</h3>
                <p className="text-sm text-sankalpa-dark/70 mt-1">RR Nagar, Bengaluru</p>
                <p className="text-xs text-sankalpa-gold font-medium mt-2 flex items-center gap-1">
                  <span>Explore divine services</span>
                  <span className="text-lg">→</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Quick Actions */}
      <section className="px-4 mt-8">
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: '🛕', label: 'Temples', sanskrit: 'मन्दिर' },
            { icon: '🪔', label: 'Poojas', sanskrit: 'पूजा' },
            { icon: '🎊', label: 'Events', sanskrit: 'उत्सव' },
            { icon: '🙏', label: 'Donate', sanskrit: 'दान' },
          ].map((item) => (
            <button
              key={item.label}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md active:scale-95 transition-all border border-sankalpa-gold/10 group"
            >
              <div className="text-2xl mb-1 group-hover:animate-float">{item.icon}</div>
              <span className="text-xs text-sankalpa-dark font-medium block">{item.label}</span>
              <span className="text-[10px] text-sankalpa-dark/60 font-serif">{item.sanskrit}</span>
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