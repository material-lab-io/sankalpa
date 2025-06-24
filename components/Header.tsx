'use client'

import Link from 'next/link'
import { Bell, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        <button className="p-2 -ml-2 md:hidden">
          <Menu size={24} className="text-gray-700" />
        </button>
        
        <Link href="/" className="text-xl font-bold text-sankalpa-primary absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
          Sankalpa
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-sankalpa-primary transition-colors">
            Home
          </Link>
          <Link href="/temples" className="text-gray-600 hover:text-sankalpa-primary transition-colors">
            Temples
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-sankalpa-primary transition-colors">
            Services
          </Link>
          <Link href="/chat" className="text-gray-600 hover:text-sankalpa-primary transition-colors">
            Chat
          </Link>
        </div>
        
        <button className="p-2 -mr-2 relative">
          <Bell size={22} className="text-gray-700" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-sankalpa-primary rounded-full"></span>
        </button>
      </nav>
    </header>
  )
}