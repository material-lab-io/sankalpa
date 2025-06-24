import { Settings, Heart, Calendar, CreditCard, HelpCircle, LogOut, ChevronRight, Star } from 'lucide-react'

const menuItems = [
  { icon: Heart, label: 'My Temples', count: 12 },
  { icon: Calendar, label: 'My Bookings', count: 3 },
  { icon: CreditCard, label: 'Payment Methods' },
  { icon: HelpCircle, label: 'Help & Support' },
  { icon: Settings, label: 'Settings' },
]

export default function ProfilePage() {
  return (
    <div className="animate-fade-in">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-sankalpa-primary to-sankalpa-secondary px-4 pt-8 pb-12">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            DK
          </div>
          <div className="text-white">
            <h1 className="text-xl font-bold">Devotee Kumar</h1>
            <p className="text-white/80 text-sm">devotee@example.com</p>
            <div className="flex items-center mt-1">
              <Star size={14} className="text-yellow-400 mr-1" fill="currentColor" />
              <span className="text-sm">Premium Devotee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 -mt-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 text-center card-shadow">
            <p className="text-2xl font-bold text-sankalpa-primary">156</p>
            <p className="text-xs text-gray-600">Temple Visits</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center card-shadow">
            <p className="text-2xl font-bold text-sankalpa-primary">24</p>
            <p className="text-xs text-gray-600">Poojas Booked</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center card-shadow">
            <p className="text-2xl font-bold text-sankalpa-primary">₹12k</p>
            <p className="text-xs text-gray-600">Donations</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 mt-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full bg-white rounded-xl p-4 flex items-center justify-between card-shadow hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sankalpa-light rounded-full flex items-center justify-center">
                <item.icon size={20} className="text-sankalpa-primary" />
              </div>
              <span className="font-medium text-gray-900">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.count && (
                <span className="bg-sankalpa-primary/10 text-sankalpa-primary text-sm font-medium px-2 py-1 rounded-full">
                  {item.count}
                </span>
              )}
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-4 mt-6 mb-8">
        <button className="w-full bg-gray-100 rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors">
          <LogOut size={20} className="text-gray-600" />
          <span className="font-medium text-gray-700">Logout</span>
        </button>
      </div>

      {/* App Version */}
      <div className="text-center pb-8">
        <p className="text-xs text-gray-500">Sankalpa v1.0.0</p>
      </div>
    </div>
  )
}