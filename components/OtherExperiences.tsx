"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type ExperienceItem = {
  id: string
  title: string
  organization: string
  image: string
  description: string
  position?: string
}

type Props = {
  items: ExperienceItem[]
}

export default function OtherExperiences({ items }: Props) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Other Work Experiences</h2>
        <p className="text-center text-sm text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          I have a multifaceted background in youth empowerment and advocacy, with experience in organizations like the Hult Prize 
          OnCampus Program, UNICEF, and Generation Unlimited. As a Child Journalist in Hult Prize and a Youth Parliamentarian 
          for Generation Parliament, I'm dedicated to creating positive change and opportunities for youth in Bangladesh.
        </p>

        <div className="relative">
          {/* central line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-red-500" />

          <div className="space-y-16">
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={item.id} className="relative">
                  <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8">
                    {/* Left side */}
                    <div className={`w-full lg:w-1/2 ${isLeft ? "lg:pr-12" : "lg:pl-12 lg:order-2"}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-md rounded-lg overflow-hidden"
                      >
                        <div className="w-full h-64 relative">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{item.title}</h3>
                          {item.position && (
                            <p className="text-sm text-gray-600 text-center mb-3">{item.position}</p>
                          )}
                          <p className="text-sm text-gray-500 leading-relaxed text-center">{item.description}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center marker */}
                    <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 flex-col items-center ${isLeft ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="w-3 h-3 bg-red-500 rounded-full shadow-md" />
                    </div>

                    {/* Right side - organization label */}
                    <div className={`w-full lg:w-1/2 ${!isLeft ? "lg:pr-12" : "lg:pl-12 lg:order-3"}`}>
                      <motion.div
                        initial={{ opacity: 0, x: !isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`flex items-start pt-8 ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}
                      >
                        <div className={`${isLeft ? "text-left" : "text-right"}`}>
                          <h4 className="text-base font-bold text-red-600">{item.organization}</h4>
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
