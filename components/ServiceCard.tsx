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
  pooja: 'bg-purple-100 text-purple-700',
  hall: 'bg-blue-100 text-blue-700',
  homa: 'bg-orange-100 text-orange-700',
  prasad: 'bg-green-100 text-green-700',
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
    <div className={`bg-white rounded-xl p-4 card-shadow transition-all duration-300 ${
      available ? 'card-shadow-hover cursor-pointer' : 'opacity-60'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{typeIcons[type]}</span>
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full mt-1 ${typeColors[type]}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={14} className="mr-1" />
          <span>{duration}</span>
        </div>
        
        <div className="text-right">
          <p className="text-lg font-bold text-sankalpa-primary">₹{price}</p>
          {!available && (
            <span className="text-xs text-gray-500">Not available</span>
          )}
        </div>
      </div>
      
      {available && (
        <button className="w-full mt-3 bg-sankalpa-primary text-white py-2 rounded-lg font-medium text-sm hover:bg-sankalpa-secondary transition-colors">
          Book Now
        </button>
      )}
    </div>
  )
}