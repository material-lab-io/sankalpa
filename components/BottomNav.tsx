'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Building, Flower2, MessageCircle, User } from 'lucide-react'

const navItems = [
  { href: '/', icon: Home, label: 'Home', sanskrit: 'गृह' },
  { href: '/temples', icon: Building, label: 'Temples', sanskrit: 'मन्दिर' },
  { href: '/services', icon: Flower2, label: 'Services', sanskrit: 'सेवा' },
  { href: '/chat', icon: MessageCircle, label: 'Chat', sanskrit: 'संवाद' },
  { href: '/profile', icon: User, label: 'Profile', sanskrit: 'विवरण' },
]

export default function BottomNav() {
  const pathname = usePathname()
  const basePath = '/sankalpa'
  
  const isActive = (href: string) => {
    const fullPath = basePath + href
    if (href === '/') {
      return pathname === basePath || pathname === basePath + '/'
    }
    return pathname.startsWith(fullPath)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-sankalpa-cream-light/95 backdrop-blur-sm border-t border-sankalpa-gold/20 px-2 pb-safe z-50 md:hidden shadow-lg">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ href, icon: Icon, label, sanskrit }) => {
          const active = isActive(href)
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center py-2 px-3 rounded-2xl transition-all group ${
                active 
                  ? 'text-sankalpa-gold scale-105 bg-sankalpa-gold/10' 
                  : 'text-sankalpa-dark/60 hover:text-sankalpa-gold'
              }`}
            >
              <Icon 
                size={20} 
                className={`mb-0.5 transition-transform ${active ? 'animate-float' : 'group-hover:scale-110'}`}
                strokeWidth={active ? 2.5 : 2}
              />
              <span className="text-[10px] font-medium">{label}</span>
              {active && <span className="text-[8px] font-serif text-sankalpa-gold/70">{sanskrit}</span>}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}