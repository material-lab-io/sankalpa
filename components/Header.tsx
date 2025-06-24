'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, Menu } from 'lucide-react'
import SideDrawer from './SideDrawer'

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif text-white drop-shadow-md">Sankalpa</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
              Home
            </Link>
            <Link href="/temples" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
              Temples
            </Link>
            <Link href="/services" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
              Services
            </Link>
            <Link href="/chat" className="text-white/90 hover:text-white transition-colors font-medium drop-shadow">
              Chat
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 relative group">
              <Bell size={22} className="text-white/90 group-hover:text-white transition-colors group-hover:animate-bell-ring drop-shadow" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-sankalpa-gold rounded-full"></span>
            </button>
            
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 -mr-2 md:hidden"
            >
              <Menu size={24} className="text-white drop-shadow" />
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