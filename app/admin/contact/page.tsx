"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type ContactInfo = {
  phone: string
  email: string
  website: string
  linkedin: string
  facebook: string
  youtube: string
  twitter: string
}

export default function AdminContact() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: '+880 1762738886',
    email: 'hello@rehanuzzaman.com',
    website: 'www.rehanuzzaman.com',
    linkedin: 'https://linkedin.com/in/asifmollik',
    facebook: 'https://facebook.com/asifmollik',
    youtube: 'https://youtube.com/@asifmollik',
    twitter: 'https://x.com/asifmollik',
  })

  useEffect(() => {
    const authenticated = localStorage.getItem('adminAuthenticated')
    if (!authenticated) {
      router.push('/admin')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (!isAuthenticated) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContactInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    console.log('Saving contact info:', contactInfo)
    alert('Contact information saved!')
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage Contact Information</h2>
      <div className="bg-white p-8 rounded-lg shadow">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={contactInfo.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Website</label>
            <input
              type="text"
              name="website"
              value={contactInfo.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-4">Social Media Links</h3>

          <div>
            <label className="block text-sm font-medium mb-2">LinkedIn</label>
            <input
              type="url"
              name="linkedin"
              value={contactInfo.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Facebook</label>
            <input
              type="url"
              name="facebook"
              value={contactInfo.facebook}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">YouTube</label>
            <input
              type="url"
              name="youtube"
              value={contactInfo.youtube}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Twitter/X</label>
            <input
              type="url"
              name="twitter"
              value={contactInfo.twitter}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}
