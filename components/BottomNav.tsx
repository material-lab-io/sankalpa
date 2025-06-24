'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, ShoppingBag, MessageCircle, User } from 'lucide-react'

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/temples', icon: Search, label: 'Temples' },
  { href: '/services', icon: ShoppingBag, label: 'Services' },
  { href: '/chat', icon: MessageCircle, label: 'Chat' },
  { href: '/profile', icon: User, label: 'Profile' },
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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 pb-safe z-50 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = isActive(href)
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all ${
                active 
                  ? 'text-sankalpa-primary scale-105' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon 
                size={22} 
                className={active ? 'mb-1' : 'mb-1'}
                strokeWidth={active ? 2.5 : 2}
              />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}