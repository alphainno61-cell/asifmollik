'use client'

import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      greeting: "👋 Hello, I'm Asif Mollik",
      title: "Tech Entrepreneur",
      description: "Founder & CEO of Alphainno. Creating technology to make people's lives smarter, safer & happier.",
      image: "/images/asif-mollik-ceo.png",
      stats: [
        { number: "5+", label: "Years Experience" },
        { number: "50+", label: "Projects Completed" },
        { number: "100%", label: "Client Satisfaction" }
      ]
    },
    {
      id: 2,
      greeting: "💻 Full Stack Developer",
      title: "Tech Developer",
      description: "Expert in React, Node.js, and modern web technologies. Building scalable software and reliable backend systems.",
      image: "/images/asif-mollik-ceo.png",
      stats: [
        { number: "React", label: "Frontend Expert" },
        { number: "Node.js", label: "Backend Pro" },
        { number: "MongoDB", label: "Database Guru" }
      ]
    },
    {
      id: 3,
      greeting: "🎓 Trainer & Content Creator",
      title: "Digital Creator",
      description: "Teaching Business and creating educational content to help developers grow their skills and build amazing projects.",
      image: "/images/asif-mollik-ceo.png",
      stats: [
        { number: "500+", label: "Students Taught" },
        { number: "50+", label: "Videos Created" },
        { number: "10K+", label: "Community Members" }
      ]
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length
      console.log('Next slide:', next)
      return next
    })
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const previous = (prev - 1 + slides.length) % slides.length
      console.log('Previous slide:', previous)
      return previous
    })
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    console.log('Go to slide:', index)
    setCurrentSlide(index)
  }, [])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-16 pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 -mx-8 w-screen left-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 bg-grid-slate-100/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Mobile: Image First, Desktop: Content First */}
          <div className="order-1 lg:order-2 lg:pl-12">
            <AnimatePresence mode="wait">
              <motion.div 
                key={`image-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={currentSlideData.image}
                      alt="Asif Mollik - CEO & Full-Stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-red-400 rounded-full"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: Content Second, Desktop: Content First */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 lg:space-y-8 text-center lg:text-left"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-red-50 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 rounded-full text-sm font-medium"
                  >
                    {currentSlideData.greeting}
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  >
                    {currentSlide === 0 ? (
                      <>
                        Tech{' '}
                        <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                          Entrepreneur
                        </span>
                      </>
                    ) : currentSlide === 1 ? (
                      <>
                        Full Stack{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          Developer
                        </span>
                      </>
                    ) : (
                      <>
                        Trainer &{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          Content Creator
                        </span>
                      </>
                    )}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  >
                    {currentSlideData.description}
                  </motion.p>
                </div>

                {/* Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-6 lg:py-8"
                >
                  {currentSlideData.stats.map((stat, index) => (
                    <div key={`${currentSlide}-${index}`} className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center items-center mt-8 lg:mt-12 space-x-4">
          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 hover:text-purple-600 cursor-pointer z-10"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 cursor-pointer z-10 ${
                  index === currentSlide 
                    ? 'bg-red-500' 
                    : 'bg-gray-300 hover:bg-red-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 hover:text-purple-600 cursor-pointer z-10"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
