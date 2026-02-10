"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type OtherItem = {
  id: string
  title: string
  organization: string
  date: string
  image: string
  description: string
}

type Props = {
  items: OtherItem[]
}

export default function OthersTimeline({ items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-16" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Other Experiences</h2>
        <p className="text-center text-sm text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
          Beyond professional work, I've been actively involved in various youth leadership programs, 
          social initiatives, and community development projects that have shaped my perspective and skills.
        </p>

        <div className="relative">
          {/* Static background line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
          
          {/* Animated red line that fills on scroll */}
          <motion.div 
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-red-500 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-24">
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={item.id} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-start">
                    {/* Left side content */}
                    <div className="w-5/12 pr-8">
                      {isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                            <div className="w-full h-56 relative">
                              <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                              <h3 className="text-base font-semibold text-gray-800 text-center mb-3">{item.title}</h3>
                              <p className="text-sm text-gray-500 leading-relaxed text-center">{item.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Center timeline with organization */}
                    <div className="w-2/12 flex flex-col items-center relative">
                      <motion.div 
                        className="w-3 h-3 rounded-full shadow-md z-10"
                        initial={{ backgroundColor: "#e5e7eb" }}
                        whileInView={{ backgroundColor: "#ef4444" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      />
                      <div className="mt-3 bg-white px-3 py-2 rounded shadow-sm text-center z-10">
                        <motion.p 
                          className="text-sm font-bold whitespace-nowrap"
                          initial={{ color: "#6b7280" }}
                          whileInView={{ color: "#dc2626" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          {item.organization}
                        </motion.p>
                        <p className="text-xs text-gray-400 mt-1 whitespace-nowrap">{item.date}</p>
                      </div>
                    </div>

                    {/* Right side content */}
                    <div className="w-5/12 pl-8">
                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                            <div className="w-full h-56 relative">
                              <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                              <h3 className="text-base font-semibold text-gray-800 text-center mb-3">{item.title}</h3>
                              <p className="text-sm text-gray-500 leading-relaxed text-center">{item.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100"
                    >
                      <div className="w-full h-56 relative">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="mb-3 text-center">
                          <motion.p 
                            className="text-sm font-bold"
                            initial={{ color: "#6b7280" }}
                            whileInView={{ color: "#dc2626" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                          >
                            {item.organization}
                          </motion.p>
                          <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 text-center mb-3">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}