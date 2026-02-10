"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type EducationItem = {
  id: string
  degree: string
  institution: string
  date: string
}

type Props = {
  items: EducationItem[]
}

export default function EducationTimeline({ items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-12 sm:py-16" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-3 sm:mb-4">Educational Background</h2>
        <p className="text-center text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 leading-relaxed px-2">
          I pursued my Secondary School Certificate at Holy Crescent School in Dhaka in 2019, followed by my Higher Secondary School 
          Certificate at Milestone College in 2021. Currently, I'm pursuing a Bachelor of Science in Software Engineering at Daffodil International 
          University, with an expected graduation in April 2026.
        </p>

        <div className="relative max-w-2xl mx-auto">
          {/* Static background line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
          
          {/* Animated red line that fills on scroll */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-red-500 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={item.id} className="relative">
                  <div className="flex items-center">
                    {/* Left side content */}
                    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'order-3 text-left pl-8'}`}>
                      {(isLeft || !isLeft) && (
                        <motion.div
                          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100"
                        >
                          <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">{item.degree}</h3>
                          <motion.p 
                            className="text-sm"
                            initial={{ color: "#6b7280" }}
                            whileInView={{ color: "#dc2626" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            {item.institution}
                          </motion.p>
                        </motion.div>
                      )}
                    </div>

                    {/* Center timeline marker */}
                    <div className={`w-2/12 flex justify-center relative z-10 ${isLeft ? 'order-2' : 'order-2'}`}>
                      <motion.div 
                        className="w-4 h-4 rounded-full shadow-md flex items-center justify-center"
                        initial={{ backgroundColor: "#e5e7eb" }}
                        whileInView={{ backgroundColor: "#ef4444" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </motion.div>
                    </div>

                    {/* Right side - date */}
                    <div className={`w-5/12 ${!isLeft ? 'text-right pr-8' : 'order-1 text-left pl-8'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: !isLeft ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center"
                      >
                        <div className="bg-white px-4 py-2 rounded shadow-sm border border-gray-100">
                          <motion.p 
                            className="text-sm font-medium"
                            initial={{ color: "#6b7280" }}
                            whileInView={{ color: "#dc2626" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          >
                            {item.date}
                          </motion.p>
                        </div>
                      </motion.div>
                    </div>
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