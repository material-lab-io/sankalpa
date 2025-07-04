import { MapPin, Star, Users } from 'lucide-react'
import Link from 'next/link'
import TempleImage from './TempleImage'

interface TempleCardProps {
  name: string
  location: string
  rating: number
  followers: number
  image: string
  deity?: string
  featured?: boolean
  link?: string
  compact?: boolean
}

export default function TempleCard({ 
  name, 
  location, 
  rating, 
  followers, 
  image,
  deity,
  featured,
  link,
  compact = false
}: TempleCardProps) {
  const CardContent = () => {
    if (compact) {
      // Netflix-style compact card
      return (
        <div className="cursor-pointer">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-2">
            <TempleImage
              src={image}
              alt={name}
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-white text-xs font-medium truncate">{name}</p>
            </div>
          </div>
        </div>
      )
    }
    
    // Regular card
    return (
      <div className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in border border-sankalpa-gold/10 ${featured ? 'ring-2 ring-sankalpa-gold' : ''}`}>
        <div className="relative h-48 bg-gradient-to-br from-sankalpa-cream-light to-sankalpa-light">
        <TempleImage
          src={image}
          alt={name}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {deity && (
          <span className="absolute top-3 left-3 bg-sankalpa-cream-light/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-sankalpa-dark">
            {deity}
          </span>
        )}
        {featured && (
          <span className="absolute top-3 right-3 bg-sankalpa-gold text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star size={12} className="fill-current" />
            FEATURED
          </span>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-serif text-lg text-sankalpa-dark mb-1">{name}</h3>
        
        <div className="flex items-center text-sm text-sankalpa-dark/60 mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star size={16} className="text-sankalpa-gold mr-1" fill="currentColor" />
            <span className="text-sm font-medium text-sankalpa-dark">{rating.toFixed(1)}</span>
          </div>
          
          <div className="flex items-center text-sm text-sankalpa-dark/60">
            <Users size={14} className="mr-1" />
            <span>{followers > 1000 ? `${(followers/1000).toFixed(1)}k` : followers} devotees</span>
          </div>
        </div>
        </div>
      </div>
    )
  }

  if (link) {
    return <Link href={link}>{CardContent()}</Link>
  }

  return CardContent()
}