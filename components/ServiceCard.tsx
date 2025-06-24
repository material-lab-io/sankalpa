import { Clock, Calendar } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  price: string
  duration: string
  type: 'pooja' | 'hall' | 'homa' | 'prasad'
  available?: boolean
}

const typeColors = {
  pooja: 'bg-sankalpa-gold/10 text-sankalpa-gold-dark',
  hall: 'bg-sankalpa-green/10 text-sankalpa-green-dark',
  homa: 'bg-sankalpa-secondary/10 text-sankalpa-secondary',
  prasad: 'bg-sankalpa-cream text-sankalpa-dark',
}

const typeIcons = {
  pooja: '🪔',
  hall: '🏛️',
  homa: '🔥',
  prasad: '🍛',
}

export default function ServiceCard({ 
  title, 
  description, 
  price, 
  duration,
  type,
  available = true
}: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-sankalpa-gold/10 ${
      available ? 'cursor-pointer' : 'opacity-60'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{typeIcons[type]}</span>
          <div>
            <h3 className="font-serif text-lg text-sankalpa-dark">{title}</h3>
            <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full mt-1 ${typeColors[type]}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-sankalpa-dark/70 mb-3 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-sankalpa-dark/60">
          <Clock size={14} className="mr-1" />
          <span>{duration}</span>
        </div>
        
        <div className="text-right">
          <p className="text-lg font-bold text-sankalpa-gold">₹{price}</p>
          {!available && (
            <span className="text-xs text-sankalpa-dark/50">Not available</span>
          )}
        </div>
      </div>
      
      {available && (
        <button className="w-full mt-3 bg-gradient-to-r from-sankalpa-gold to-sankalpa-gold-dark text-white py-2.5 rounded-full font-medium text-sm hover:shadow-md transition-all transform hover:scale-105">
          Book Now
        </button>
      )}
    </div>
  )
}