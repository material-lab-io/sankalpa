'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Phone, Mail, Globe, ArrowLeft, Heart, Share2, Users } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import TempleImage from '@/components/TempleImage'

export default function KarumariTemplePage() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen bg-gradient-to-b from-sankalpa-primary/5 to-white pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sankalpa-primary">
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </Link>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Share2 className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setIsFollowing(!isFollowing)}
              className={`p-2 rounded-full hover:bg-gray-100 ${isFollowing ? 'text-red-500' : ''}`}
            >
              <Heart className={`h-5 w-5 ${isFollowing ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <div className="relative h-64 md:h-96">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <TempleImage
          src="/temples/karumari/main.jpg"
          alt="Sri Devi Karumariamma Temple"
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Sri Devi Karumariamma Temple</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              RR Nagar, Bengaluru
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              5.2K followers
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {['about', 'history', 'deities', 'services', 'events', 'gallery'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full whitespace-nowrap capitalize ${
                activeTab === tab
                  ? 'bg-sankalpa-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'about' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-sankalpa-primary">About the Temple</h2>
              <p className="text-gray-700 mb-4">
                Sri Devi Karumariamma Temple is a sacred place of worship located in Raja Rajeshwari Nagar (RR Nagar), Bengaluru. 
                The temple is dedicated to Goddess Karumariamma and serves as a spiritual center for devotees in Bengaluru and surrounding areas.
              </p>
              <div className="bg-sankalpa-secondary/10 p-4 rounded-lg mb-4">
                <p className="text-sankalpa-primary font-semibold text-center text-lg italic">
                  &ldquo;Where devotion meets divine grace&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-sankalpa-primary" />
                  <span>Sri Devi Karumariamman Temple, Raja Rajeshwari Nagar, Bangalore-560098</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-sankalpa-primary" />
                  <a href="https://www.karumari.org" target="_blank" rel="noopener noreferrer" className="text-sankalpa-primary hover:underline">
                    www.karumari.org
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="space-y-3">
                <a href="https://www.instagram.com/srikarumariammantemple/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-sankalpa-primary">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                  <span>@srikarumariammantemple</span>
                </a>
                <a href="https://www.facebook.com/KarumariammanTempleRRnagar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-sankalpa-primary">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>KarumariammanTempleRRnagar</span>
                </a>
                <a href="https://www.youtube.com/@srisheethalakrishnamaarite3584" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-sankalpa-primary">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Sri Sheethala Krishnamaari Temple</span>
                </a>
                <a href="https://g.co/kgs/TziJSR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-sankalpa-primary">
                  <MapPin className="h-5 w-5" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Temple Timings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Daily Timings</h4>
                  <p className="text-gray-700 text-sm">
                    The temple is open for devotees throughout the week with regular poojas and alankaras.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Special Programs</h4>
                  <p className="text-gray-700 text-sm">
                    Special poojas, abhishekas, and annaprasadham are conducted on auspicious days.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Please contact the temple directly for specific timings and special event schedules.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-sankalpa-primary">Temple History</h2>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">
                  Sri Devi Karumariamma Temple in Raja Rajeshwari Nagar (RR Nagar) is a revered spiritual center in Bengaluru. 
                  The temple has been serving devotees for many years and has become an integral part of the local community&apos;s 
                  spiritual and cultural life.
                </p>
                <div className="border-l-4 border-sankalpa-primary pl-4">
                  <h3 className="font-semibold text-lg">Active Temple Community</h3>
                  <p className="text-gray-700">
                    The temple regularly uploads videos of daily poojas, alankaras, special poojas, abhishekas, and annaprasadham 
                    on YouTube and other social media platforms to connect with devotees worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Temple Features</h3>
              <div className="grid gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Daily Videos</h4>
                  <p className="text-gray-700 text-sm">
                    The temple regularly shares videos of daily poojas, alankaras, and special events on social media.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Community Engagement</h4>
                  <p className="text-gray-700 text-sm">
                    Active presence on Instagram, Facebook, and YouTube to connect with devotees worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'deities' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-sankalpa-primary">Deities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2 text-sankalpa-primary">Main Deity</h3>
                  <h4 className="font-semibold">Sri Devi Karumariamma</h4>
                  <p className="text-gray-700 text-sm mt-1">
                    The presiding deity of the temple, Sri Devi Karumariamma is worshipped as the divine mother who protects her devotees.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2 text-sankalpa-primary">Temple Worship</h3>
                  <p className="text-gray-700 text-sm">
                    The temple is dedicated to the worship of Sri Devi Karumariamma with regular poojas, 
                    abhishekas, and special rituals conducted for the benefit of devotees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-sankalpa-primary">Temple Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">Homam</h3>
                  <p className="text-gray-700 text-sm">
                    Sacred fire ritual performed for various purposes including prosperity, health, and spiritual well-being.
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">Archanai</h3>
                  <p className="text-gray-700 text-sm">
                    Personal blessing ritual where devotees offer prayers with flowers and receive divine blessings.
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">Abisegam</h3>
                  <p className="text-gray-700 text-sm">
                    Ritual bathing of deities with sacred substances like milk, honey, and holy water.
                  </p>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">Alangaram</h3>
                  <p className="text-gray-700 text-sm">
                    Special decoration of deities with flowers, jewelry, and colorful garments.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-sankalpa-secondary/10 rounded-lg">
                <p className="text-sankalpa-primary font-semibold">
                  Contact the temple for booking special poojas and services
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-sankalpa-primary">Temple Activities</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-sankalpa-primary" />
                    <h3 className="font-semibold">Latest Temple Videos</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    The temple regularly uploads videos of daily poojas, alankaras, and special events. 
                    Follow their YouTube channel for the latest updates.
                  </p>
                  <a href="https://www.youtube.com/@srisheethalakrishnamaarite3584" target="_blank" rel="noopener noreferrer" className="text-sm text-sankalpa-primary mt-2 inline-block hover:underline">
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Regular Programs</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sankalpa-primary rounded-full"></div>
                  <span>Daily Aarthi and Poojas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sankalpa-primary rounded-full"></div>
                  <span>Special Abhishekas and Alankaras</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sankalpa-primary rounded-full"></div>
                  <span>Festival celebrations throughout the year</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-sankalpa-primary">Temple Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span>Image {num}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-sankalpa-primary text-white py-3 px-4 rounded-lg hover:bg-sankalpa-primary/90 transition-colors">
              Book Pooja
            </button>
            <button className="bg-sankalpa-secondary text-white py-3 px-4 rounded-lg hover:bg-sankalpa-secondary/90 transition-colors">
              Make Donation
            </button>
            <button className="border border-sankalpa-primary text-sankalpa-primary py-3 px-4 rounded-lg hover:bg-sankalpa-primary/5 transition-colors">
              View Calendar
            </button>
            <button className="border border-sankalpa-primary text-sankalpa-primary py-3 px-4 rounded-lg hover:bg-sankalpa-primary/5 transition-colors">
              Contact Temple
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}