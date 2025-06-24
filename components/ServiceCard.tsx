import { Clock, Calendar } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  price: string
  duration: string
  type: 'pooja' | 'hall' | 'homa' | 'prasad'
  available?: boolean
  compact?: boolean
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
  available = true,
  compact = false
}: ServiceCardProps) {
  if (compact) {
    // Netflix-style compact service card
    return (
      <div className="bg-sankalpa-cream-light rounded-xl p-4 h-full cursor-pointer hover:bg-sankalpa-light transition-colors">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">{typeIcons[type]}</span>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${typeColors[type]}`}>
            {type.toUpperCase()}
          </span>
        </div>
        <h3 className="font-medium text-sm text-sankalpa-dark mb-1 line-clamp-1">{title}</h3>
        <p className="text-xs text-sankalpa-dark/60 mb-2">₹{price}</p>
        {available && (
          <button className="w-full bg-sankalpa-gold text-white py-1.5 rounded-lg text-xs font-medium hover:bg-sankalpa-gold-dark transition-colors">
            Book
          </button>
        )}
      </div>
    )
  }
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