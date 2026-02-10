"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

type Achievement = {
  id: string
  title: string
  organization: string
  date: string
  image: string
  description: string
  category: string
}

type Props = {
  items: Achievement[]
}

export default function Achievements({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(1) // Start with middle card focused

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + items.length) % items.length
    
    if (position === 0) {
      // Center card - focused
      return {
        transform: 'translateX(0%) scale(1)',
        zIndex: 30,
        opacity: 1,
      }
    } else if (position === 1 || position === items.length - 1) {
      // Side cards
      const isRight = position === 1
      return {
        transform: `translateX(${isRight ? '80%' : '-80%'}) scale(0.85)`,
        zIndex: 20,
        opacity: 0.7,
      }
    } else {
      // Hidden cards
      return {
        transform: position < items.length / 2 ? 'translateX(-150%) scale(0.7)' : 'translateX(150%) scale(0.7)',
        zIndex: 10,
        opacity: 0.3,
      }
    }
  }

  return (
    <section id="achievements" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">Achievements</h2>
          <button className="text-red-500 text-sm hover:underline font-medium">
            Browse all
          </button>
        </div>

        <div className="relative h-80 sm:h-96 overflow-hidden">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards container */}
          <div className="relative h-full flex items-center justify-center">
            {items.map((item, index) => {
              const style = getCardStyle(index)
              return (
                <motion.div
                  key={item.id}
                  className="absolute w-72 h-80 sm:w-80 sm:h-96 cursor-pointer"
                  style={style}
                  animate={style}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    {/* Image section with gradient background */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-200 via-pink-200 to-red-200 overflow-hidden">
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
                        <span className="text-xs font-semibold text-red-500">{item.date}</span>
                      </div>
                      <div className="absolute inset-x-4 top-12 bottom-4">
                        <div className="w-full h-full relative">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill 
                            className="object-cover rounded-lg shadow-lg" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="px-5 pt-4 pb-12">
                      <div className="text-center space-y-3">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight px-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed px-3">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                currentIndex === index 
                  ? 'bg-red-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}