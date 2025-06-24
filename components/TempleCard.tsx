import { MapPin, Star, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface TempleCardProps {
  name: string
  location: string
  rating: number
  followers: number
  image: string
  deity?: string
  featured?: boolean
  link?: string
}

export default function TempleCard({ 
  name, 
  location, 
  rating, 
  followers, 
  image,
  deity,
  featured,
  link 
}: TempleCardProps) {
  const CardContent = () => (
    <div className={`bg-white rounded-2xl overflow-hidden card-shadow card-shadow-hover transition-all duration-300 animate-fade-in ${featured ? 'ring-2 ring-yellow-400' : ''}`}>
      <div className="relative h-48 bg-gradient-to-br from-sankalpa-light to-sankalpa-accent">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {deity && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full">
            {deity}
          </span>
        )}
        {featured && (
          <span className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star size={12} className="fill-current" />
            FEATURED
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{name}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Users size={14} className="mr-1" />
            <span>{followers > 1000 ? `${(followers/1000).toFixed(1)}k` : followers} followers</span>
          </div>
        </div>
      </div>
    </div>
  )

  if (link) {
    return <Link href={link}>{CardContent()}</Link>
  }

  return CardContent()
}