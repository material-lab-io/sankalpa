import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-sankalpa-primary">
            Sankalpa
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-sankalpa-primary">
              Home
            </Link>
            <Link href="/temples" className="text-gray-600 hover:text-sankalpa-primary">
              Temples
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-sankalpa-primary">
              Services
            </Link>
            <Link href="/chat" className="text-gray-600 hover:text-sankalpa-primary">
              Chat
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}