"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";

type ContactInfo = {
  phone: string
  email: string
  website: string
  linkedin: string
  facebook: string
  youtube: string
  twitter: string
  instagram: string
  github: string
}

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: '+880 1762738886',
    email: 'hello@asifmollik.com',
    website: 'www.asifmollik.com',
    linkedin: 'https://linkedin.com/in/asifmollik',
    facebook: 'https://facebook.com/asifmollik',
    youtube: 'https://youtube.com/@asifmollik',
    twitter: 'https://x.com/asifmollik',
    instagram: 'https://instagram.com/asifmollik',
    github: 'https://github.com/asifmollik',
  })

  useEffect(() => {
    // Load contact info from localStorage
    const saved = localStorage.getItem('contactInfo')
    if (saved) {
      setContactInfo(JSON.parse(saved))
    }
  }, [open])

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-6xl w-full flex flex-col md:flex-row gap-8 md:gap-12 relative animate-in slide-in-from-bottom-4 duration-300 border border-white/50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-200 z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
          <div className="relative w-full h-full">
            <Image
              src="/images/asif-training.jpg"
              alt="Asif Mollik"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex-1 flex flex-col justify-center gap-6 sm:gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-slate-900">
              Contact Me
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 sm:space-y-5">
            {/* Phone */}
            <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl shadow-md group-hover:shadow-lg transition-all duration-200 transform group-hover:scale-110">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium mb-1">Phone Number</p>
                <p className="text-lg font-semibold text-gray-900">{contactInfo.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl shadow-md group-hover:shadow-lg transition-all duration-200 transform group-hover:scale-110">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium mb-1">Email Address</p>
                <p className="text-lg font-semibold text-gray-900 break-all">{contactInfo.email}</p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white text-lg sm:text-xl shadow-md group-hover:shadow-lg transition-all duration-200 transform group-hover:scale-110">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium mb-1">Website</p>
                <p className="text-lg font-semibold text-gray-900">{contactInfo.website}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 font-medium mb-4">Connect with me</p>
            <div className="flex flex-wrap gap-3">
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110"
              >
                <FaLinkedinIn className="text-lg sm:text-xl" />
              </a>
              <a 
                href={contactInfo.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110"
              >
                <FaFacebookF className="text-lg sm:text-xl" />
              </a>
              <a 
                href={contactInfo.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110"
              >
                <FaYoutube className="text-lg sm:text-xl" />
              </a>
              <a 
                href={contactInfo.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110"
              >
                <FaXTwitter className="text-lg sm:text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
