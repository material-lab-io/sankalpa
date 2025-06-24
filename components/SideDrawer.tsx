'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { X, Home, Building, Flower2, MessageCircle, User, LogOut, Bell } from 'lucide-react'

interface SideDrawerProps {
  isOpen: boolean
  onClose: () => void
  userName?: string
}

const menuItems = [
  { href: '/', label: 'Home', tamilName: 'முகப்பு', icon: Home },
  { href: '/temples', label: 'Temples', tamilName: 'கோவில்கள்', icon: Building },
  { href: '/services', label: 'Services', tamilName: 'சேவைகள்', icon: Flower2 },
  { href: '/chat', label: 'Divine Chat', tamilName: 'தெய்வீக உரை', icon: MessageCircle },
  { href: '/profile', label: 'Profile', tamilName: 'விவரம்', icon: User },
]

export default function SideDrawer({ isOpen, onClose, userName = 'Devotee' }: SideDrawerProps) {
  return (
    <Fragment>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-sankalpa-cream-light shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-br from-sankalpa-gold-light to-sankalpa-light p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5 text-sankalpa-dark" />
          </button>
          
          {/* User Profile Section */}
          <div className="text-center mt-4">
            <div className="w-20 h-20 mx-auto bg-sankalpa-gold rounded-full flex items-center justify-center mb-3">
              <span className="text-3xl font-serif text-white">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <h3 className="font-serif text-xl text-sankalpa-dark">வணக்கம், {userName}</h3>
            <p className="text-sm text-sankalpa-dark/70 mt-1 italic">
              Vanakkam • ನಮಸ್ಕಾರ • నమస్కారం
            </p>
          </div>
        </div>
        
        {/* Menu Items */}
        <nav className="p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-sankalpa-gold/10 transition-colors group"
            >
              <item.icon className="h-5 w-5 text-sankalpa-gold group-hover:text-sankalpa-gold-dark" />
              <div className="flex-1">
                <p className="text-sankalpa-dark font-medium">{item.label}</p>
                <p className="text-xs text-sankalpa-dark/60">{item.tamilName}</p>
              </div>
            </Link>
          ))}
        </nav>
        
        {/* Divider */}
        <div className="mx-6 border-t border-sankalpa-gold/20" />
        
        {/* Bottom Section */}
        <div className="p-4">
          <button className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-sankalpa-gold/10 transition-colors w-full group">
            <Bell className="h-5 w-5 text-sankalpa-gold group-hover:text-sankalpa-gold-dark" />
            <div className="flex-1 text-left">
              <p className="text-sankalpa-dark font-medium">Notifications</p>
              <p className="text-xs text-sankalpa-dark/60">3 new updates</p>
            </div>
          </button>
          
          <button className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors w-full group mt-2">
            <LogOut className="h-5 w-5 text-red-600" />
            <span className="text-red-600 font-medium">Logout</span>
          </button>
        </div>
        
        {/* Decorative Bottom Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-sankalpa-gold/5 to-transparent pointer-events-none" />
      </div>
    </Fragment>
  )
}