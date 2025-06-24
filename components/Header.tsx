'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, Menu } from 'lucide-react'
import SideDrawer from './SideDrawer'

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-sankalpa-cream-light/95 backdrop-blur-sm shadow-sm z-30">
        <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif text-sankalpa-gold">சங்கல்ப</span>
            <span className="text-lg font-serif text-sankalpa-dark hidden sm:inline">Sankalpa</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sankalpa-dark hover:text-sankalpa-gold transition-colors font-medium">
              Home
            </Link>
            <Link href="/temples" className="text-sankalpa-dark hover:text-sankalpa-gold transition-colors font-medium">
              Temples
            </Link>
            <Link href="/services" className="text-sankalpa-dark hover:text-sankalpa-gold transition-colors font-medium">
              Services
            </Link>
            <Link href="/chat" className="text-sankalpa-dark hover:text-sankalpa-gold transition-colors font-medium">
              Chat
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 relative group">
              <Bell size={22} className="text-sankalpa-dark group-hover:text-sankalpa-gold transition-colors group-hover:animate-bell-ring" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-sankalpa-secondary rounded-full"></span>
            </button>
            
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 -mr-2 md:hidden"
            >
              <Menu size={24} className="text-sankalpa-dark" />
            </button>
          </div>
        </nav>
      </header>
      
      <SideDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        userName="Devotee"
      />
    </>
  )
}