import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import BottomNav from '@/components/BottomNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sankalpa - Connect with Temples',
  description: 'A platform connecting devotees with temples',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sankalpa-bg`}>
        <Header />
        <main className="pt-14 pb-20 md:pb-0 min-h-screen">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}