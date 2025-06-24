'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Phone, Mail, Globe, ArrowLeft, Heart, Share2, Users } from 'lucide-react'
import BottomNav from '@/components/BottomNav'

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
        <Image
          src="/temples/karumari/main.jpg"
          alt="Calgary Sridevi Karumari Amman Hindu Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Calgary Sridevi Karumari Amman Temple</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Calgary, AB
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
                The Calgary Sridevi Karumari Amman Hindu Temple is a sacred place of worship dedicated to Goddess Karumari Amman. 
                Established in 2007, the temple serves as a spiritual and cultural center for the Hindu community in Calgary and surrounding areas.
              </p>
              <div className="bg-sankalpa-secondary/10 p-4 rounded-lg mb-4">
                <p className="text-sankalpa-primary font-semibold text-center text-lg">
                  &ldquo;காத்திடுவாள் ஆத்தாள் காற்றாகி&rdquo;
                </p>
                <p className="text-center text-gray-600 mt-1">
                  &ldquo;Goddess Karumari protects us as the wind&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-sankalpa-primary" />
                  <span>55 Westwinds Crescent NE, Calgary, AB T3J 5H2</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-sankalpa-primary" />
                  <a href="tel:+14035909988" className="text-sankalpa-primary hover:underline">(403) 590-9988</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-sankalpa-primary" />
                  <a href="mailto:karumari2007@yahoo.ca" className="text-sankalpa-primary hover:underline">karumari2007@yahoo.ca</a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-sankalpa-primary" />
                  <a href="https://www.karumariamman.ca" target="_blank" rel="noopener noreferrer" className="text-sankalpa-primary hover:underline">
                    www.karumariamman.ca
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Temple Timings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Morning Hours</h4>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Clock className="h-4 w-4" />
                    9:00 AM - 1:30 PM
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Aarthi/Pooja: 10:00 AM & 12:00 PM</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Evening Hours</h4>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Clock className="h-4 w-4" />
                    5:30 PM - 8:30 PM
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Aarthi/Pooja: 7:00 PM</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Special:</strong> Rahu Kaala Pooja every Tuesday
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
                <div className="border-l-4 border-sankalpa-primary pl-4">
                  <h3 className="font-semibold text-lg">2007 - Foundation</h3>
                  <p className="text-gray-700">
                    The Calgary Sridevi Karumari Amman Hindu Temple was established in Calgary City, coinciding with the auspicious Chithra New Year. 
                    This marked the beginning of a new spiritual center for the Hindu community in Calgary.
                  </p>
                </div>
                <div className="border-l-4 border-sankalpa-primary pl-4">
                  <h3 className="font-semibold text-lg">2020 - Reconstruction & Expansion</h3>
                  <p className="text-gray-700">
                    The temple underwent major reconstruction, adding more idols including the powerful Navashakthi. 
                    This expansion allowed the temple to serve more devotees and offer a wider range of spiritual services.
                  </p>
                </div>
                <div className="border-l-4 border-sankalpa-primary pl-4">
                  <h3 className="font-semibold text-lg">October 19, 2020 - Kumbhabhishekam</h3>
                  <p className="text-gray-700">
                    The temple celebrated its grand Kumbhabhishekam (consecration ceremony), marking the completion of the reconstruction 
                    and the divine installation of all deities in their new sanctums.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Spiritual Leadership</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">Sri Madhukar Guruji</h4>
                <p className="text-gray-700">
                  Sri Madhukar Guruji serves as the spiritual leader (Sarathi) of the temple, guiding devotees in their spiritual journey 
                  and overseeing all religious ceremonies and rituals.
                </p>
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
                  <h4 className="font-semibold">Goddess Karumari Amman</h4>
                  <p className="text-gray-700 text-sm mt-1">
                    The presiding deity of the temple, Goddess Karumari Amman is worshipped as the divine mother who protects her devotees.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-2 text-sankalpa-primary">Other Deities</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Lord Ganesha - Remover of obstacles</li>
                    <li>• Lord Shiva - The destroyer and transformer</li>
                    <li>• Lord Murugan - God of war and victory</li>
                    <li>• Lord Mahavishnu - The preserver</li>
                    <li>• Lord Ayyappan - Lord of growth</li>
                    <li>• Lord Anjaneya - Devotee of Rama</li>
                    <li>• Lord Bhairava - Fierce form of Shiva</li>
                    <li>• Navagrahas - Nine planetary deities</li>
                  </ul>
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
                  Special Service: Rahu Kaala Pooja every Tuesday
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 text-sankalpa-primary">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-sankalpa-primary" />
                    <h3 className="font-semibold">Chariot Construction Project</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    The temple is planning to construct a traditional chariot (Ther) for festival processions.
                  </p>
                  <p className="text-sm text-sankalpa-primary mt-2">Status: Planning Phase</p>
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
                  <span>Weekly Rahu Kaala Pooja (Tuesdays)</span>
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