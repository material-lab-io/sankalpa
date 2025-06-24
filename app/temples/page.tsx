import { Filter, MapPin, Search } from 'lucide-react'
import TempleCard from '@/components/TempleCard'

const temples = [
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
  { 
    name: 'Kedarnath Temple', 
    location: 'Uttarakhand', 
    rating: 4.9, 
    followers: 18000,
    image: 'https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=400',
    deity: 'Lord Shiva'
  },
  { 
    name: 'Golden Temple', 
    location: 'Amritsar', 
    rating: 5.0, 
    followers: 25000,
    image: 'https://images.unsplash.com/photo-1574360183218-88f47f597868?w=400',
    deity: 'Guru Granth Sahib'
  },
  { 
    name: 'Jagannath Temple', 
    location: 'Puri', 
    rating: 4.7, 
    followers: 10500,
    image: 'https://images.unsplash.com/photo-1601653695165-ce5e8fe4fa3e?w=400',
    deity: 'Lord Jagannath'
  },
  { 
    name: 'Somnath Temple', 
    location: 'Gujarat', 
    rating: 4.8, 
    followers: 9800,
    image: 'https://images.unsplash.com/photo-1624529062974-34dc93c93847?w=400',
    deity: 'Lord Shiva'
  },
]

export default function TemplesPage() {
  return (
    <div className="animate-fade-in">
      {/* Search Header */}
      <div className="sticky top-14 bg-white border-b border-gray-100 px-4 py-3 z-30">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search temples..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sankalpa-primary/20 focus:bg-white transition-all"
            />
          </div>
          <button className="p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <Filter size={20} className="text-gray-600" />
          </button>
        </div>
        
        {/* Filter Pills */}
        <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
          {['All', 'Near Me', 'Most Popular', 'Highest Rated', 'Recently Added'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === 'All' 
                  ? 'bg-sankalpa-primary text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Location Banner */}
      <div className="px-4 py-3 bg-sankalpa-light/50 flex items-center justify-between">
        <div className="flex items-center text-sm">
          <MapPin size={16} className="text-sankalpa-primary mr-2" />
          <span className="text-gray-700">Showing temples near <strong>Bangalore</strong></span>
        </div>
        <button className="text-sankalpa-primary text-sm font-medium">
          Change
        </button>
      </div>

      {/* Temples Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {temples.map((temple, index) => (
            <div 
              key={temple.name} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <TempleCard {...temple} />
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="px-4 pb-8">
        <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
          Load More Temples
        </button>
      </div>
    </div>
  )
}