"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type TimelineItem = {
  id: string
  company: string
  role: string
  date: string
  image: string
  description: string
}

type Props = {
  items: TimelineItem[]
}

export default function Timeline({ items }: Props) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-2xl font-semibold text-center mb-12">Professional Work Experiences</h2>

        <div className="relative">
          {/* central line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 top-0 bottom-0 bg-gray-200" />
          </div>

          <div className="space-y-12">
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={item.id} className="relative">
                  <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
                    {/* Left card */}
                    <div className={`hidden lg:block lg:w-1/2 ${isLeft ? "pl-8 pr-4 text-right" : "pr-8 pl-4 text-left"}`}>
                      {isLeft && (
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white shadow-md rounded-md overflow-hidden">
                          <div className="w-full h-56 relative">
                            <Image src={item.image} alt={item.company} fill className="object-cover" />
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 text-center">{item.role}</h3>
                            <p className="text-sm text-gray-500 mt-2 text-center">{item.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* center marker */}
                    <div className="w-8 flex justify-center items-center relative z-10">
                      <div className="w-0.5 bg-red-500 h-full absolute left-1/2 -translate-x-1/2" />
                      <div className="relative z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-sm text-red-500 font-semibold"> 
                          {/* simple icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6 2a2 2 0 00-2 2v2h12V4a2 2 0 00-2-2H6z" />
                            <path fillRule="evenodd" d="M4 8v6a4 4 0 004 4h4a4 4 0 004-4V8H4zm6 7a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Right card */}
                    <div className={`hidden lg:block lg:w-1/2 ${!isLeft ? "pr-8 pl-4" : "pl-8 pr-4"}`}>
                      {!isLeft && (
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white shadow-md rounded-md overflow-hidden">
                          <div className="w-full h-56 relative">
                            <Image src={item.image} alt={item.company} fill className="object-cover" />
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 text-center">{item.role}</h3>
                            <p className="text-sm text-gray-500 mt-2 text-center">{item.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* small meta (company + date) shown on the opposite side of the card */}
                  <div className={`mt-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:w-48 lg:z-40 ${isLeft ? "lg:-translate-x-20 lg:text-right" : "lg:translate-x-20 lg:text-left"}`}>
                    <h4 className="text-sm font-bold text-red-600">{item.company}</h4>
                    <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                  </div>

                  {/* mobile stacked version */}
                  <div className="lg:hidden mt-4">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white shadow-md rounded-md overflow-hidden">
                      <div className="w-full h-56 relative">
                        <Image src={item.image} alt={item.company} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800 text-center">{item.role}</h3>
                        <p className="text-sm text-gray-500 mt-2 text-center">{item.description}</p>
                        <div className="mt-4">
                          <h4 className="text-sm font-bold text-red-600">{item.company}</h4>
                          <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                        </div>
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
