import { Calendar, Filter } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    title: 'Abhishekam',
    description: 'Sacred bathing ritual for deities with holy substances',
    price: '500',
    duration: '30 mins',
    type: 'pooja' as const,
  },
  {
    title: 'Archana',
    description: 'Offering prayers with 108 names of the deity',
    price: '250',
    duration: '20 mins',
    type: 'pooja' as const,
  },
  {
    title: 'Kalyana Mandapam',
    description: 'Traditional wedding hall for auspicious ceremonies',
    price: '15,000',
    duration: 'Full day',
    type: 'hall' as const,
  },
  {
    title: 'Ganapati Homam',
    description: 'Fire ritual for removing obstacles and bringing prosperity',
    price: '3,500',
    duration: '2 hours',
    type: 'homa' as const,
  },
  {
    title: 'Laddu Prasadam',
    description: 'Sacred sweet offering blessed by the deity',
    price: '50',
    duration: 'Instant',
    type: 'prasad' as const,
  },
  {
    title: 'Navagraha Pooja',
    description: 'Special prayers to nine planetary deities for peace',
    price: '1,500',
    duration: '45 mins',
    type: 'pooja' as const,
  },
]

const categories = [
  { type: 'all', label: 'All Services', icon: '✨' },
  { type: 'pooja', label: 'Pooja', icon: '🪔' },
  { type: 'hall', label: 'Hall Booking', icon: '🏛️' },
  { type: 'homa', label: 'Homa', icon: '🔥' },
  { type: 'prasad', label: 'Prasadam', icon: '🍛' },
]

export default function ServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-sankalpa-primary to-sankalpa-secondary px-4 py-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Book Services</h1>
        <p className="text-white/80">Schedule your spiritual ceremonies and offerings</p>
      </div>

      {/* Categories */}
      <div className="px-4 py-4 bg-white border-b border-gray-100">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.type}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                category.type === 'all'
                  ? 'bg-sankalpa-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Date Selector */}
      <div className="px-4 py-3 bg-sankalpa-light/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-sankalpa-primary" />
          <span className="text-sm font-medium">Select Date:</span>
          <button className="text-sm text-sankalpa-primary font-semibold">
            Today, 24 June
          </button>
        </div>
        <button className="text-sm text-sankalpa-primary font-medium">
          Change
        </button>
      </div>

      {/* Services Grid */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Available Services
          </h2>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Filter size={18} className="text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 pb-8">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
          <h3 className="font-bold text-lg mb-2">Special Poojas</h3>
          <p className="text-white/90 text-sm mb-4">
            Book special poojas for festivals and auspicious occasions
          </p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium text-sm">
            Explore Special Poojas
          </button>
        </div>
      </div>
    </div>
  )
}