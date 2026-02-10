"use client"

import React, { useEffect, useState } from 'react'

function Counter({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(progress * (value - start) + start)
      setCount(current)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [value, duration])

  return <div className="text-4xl md:text-5xl font-extrabold">{count}</div>
}

export default function About() {
  const stats = [
    { label: 'Completed Projects', value: 19 },
    { label: 'Broken Pencils', value: 13 },
    { label: 'Failed Attempts', value: 27 },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="order-1 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
            <img
              src="/images/asif-training.jpg"
              alt="Asif Mollik training"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

          <div className="order-2 md:order-2 space-y-4">
            <div>
              <p className="text-xs sm:text-sm text-primary font-medium">Let me introduce myself!</p>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2">I am Asif Mollik</h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Bangladeshi tech entrepreneur, developer, and business trainer. As the Founder &amp; CEO of Alphainno, I lead projects in web development, software solutions, and educational technology, building platforms that help startups, businesses, and learners thrive. I combine my experience in technology, branding, and digital business to create innovative and scalable ventures that focus on creativity, strategy, and sustainable growth. I’m passionate about using technology to solve real-world problems, enable entrepreneurs, and make an impact in emerging markets.
          </p>


            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-200">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <Counter value={s.value} />
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
