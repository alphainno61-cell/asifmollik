"use client";
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const ContactModal = dynamic(() => import('./ContactModal'), { ssr: false });

export default function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hide header on admin routes
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Image
              src="/images/Asif Mollik.png"
              alt="Asif Mollik"
              width={140}
              height={56}
              priority
              className="object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a 
              href="#about" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a 
              href="#works" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 relative group"
            >
              Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a 
              href="#achievements" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 relative group"
            >
              Achievements
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-200"></span>
            </a>
            <button
              onClick={() => setContactOpen(true)}
              className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Contact Me
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu" 
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 active:scale-95 transition-all duration-200"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden border-t border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'}`}>
          <div className="py-4 space-y-2">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
              style={{ animationDelay: '50ms' }}
            >
              About
            </a>
            <a 
              href="#works" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
              style={{ animationDelay: '100ms' }}
            >
              Works
            </a>
            <a 
              href="#achievements" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
              style={{ animationDelay: '150ms' }}
            >
              Achievements
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setContactOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                style={{ animationDelay: '200ms' }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  )
}
