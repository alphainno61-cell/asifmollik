"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

type AboutContent = {
  title: string
  description: string
  stats: { label: string; value: number }[]
}

export default function AdminAbout() {
  const [about, setAbout] = useState<AboutContent>({
    title: 'I am Asif Mollik',
    description: 'Bangladeshi tech entrepreneur, developer, and business trainer. As the Founder & CEO of Alphainno, I lead projects in web development, software solutions, and educational technology, building platforms that help startups, businesses, and learners thrive. I combine my experience in technology, branding, and digital business to create innovative and scalable ventures that focus on creativity, strategy, and sustainable growth. I\'m passionate about using technology to solve real-world problems, enable entrepreneurs, and make an impact in emerging markets.',
    stats: [
      { label: 'Completed Projects', value: 19 },
      { label: 'Broken Pencils', value: 13 },
      { label: 'Failed Attempts', value: 27 },
    ]
  })

  const [isSaving, setIsSaving] = useState(false)

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAbout(prev => ({ ...prev, description: e.target.value }))
  }

  const handleStatChange = (index: number, field: 'label' | 'value', value: string) => {
    const newStats = [...about.stats]
    if (field === 'value') {
      newStats[index].value = parseInt(value) || 0
    } else {
      newStats[index].label = value
    }
    setAbout(prev => ({ ...prev, stats: newStats }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Saving about info:', about)
    setIsSaving(false)
    // Show success message
    alert('About information saved successfully!')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">About Section Management</h1>
              <p className="text-gray-600 mt-1">Update your personal information and statistics</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-xl">
          <form className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Section Title
              </h3>
              <input
                type="text"
                value={about.title}
                onChange={(e) => setAbout(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Enter section title"
              />
            </div>

            {/* Description Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                About Description
              </h3>
              <textarea
                value={about.description}
                onChange={handleDescriptionChange}
                rows={8}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                placeholder="Write your about description..."
              />
              <p className="text-sm text-gray-500">
                {about.description.length} characters
              </p>
            </div>

            {/* Statistics Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Statistics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {about.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-6 border border-gray-200/50">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Label</label>
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Value</label>
                          <input
                            type="number"
                            value={stat.value}
                            onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
              <button
                type="button"
                className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium"
              >
                Reset Changes
              </button>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                >
                  Preview
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-medium shadow-lg shadow-red-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
