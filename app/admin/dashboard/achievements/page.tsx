"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Achievement = {
  id: string
  title: string
  organization: string
  date: string
  description: string
  category: string
}

export default function AdminAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'Best Young Entrepreneur',
      organization: 'Youth Awards 2023',
      date: '2023',
      description: 'Recognized for outstanding entrepreneurship and innovative business solutions that impact the community.',
      category: 'Award',
    },
    {
      id: '2',
      title: 'Tech Innovation Excellence',
      organization: 'Tech Summit Bangladesh',
      date: '2022',
      description: 'Developed innovative solutions for educational technology that transformed learning experiences.',
      category: 'Innovation',
    },
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newAchievement, setNewAchievement] = useState<Omit<Achievement, 'id'>>({
    title: '',
    organization: '',
    date: '',
    description: '',
    category: 'Award',
  })

  const categories = ['Award', 'Innovation', 'Recognition', 'Certification', 'Competition', 'Publication']

  const handleAddAchievement = () => {
    if (newAchievement.title && newAchievement.organization) {
      setAchievements(prev => [...prev, { ...newAchievement, id: Date.now().toString() }])
      setNewAchievement({
        title: '',
        organization: '',
        date: '',
        description: '',
        category: 'Award',
      })
      setShowAddForm(false)
      alert('Achievement added successfully!')
    }
  }

  const handleDeleteAchievement = (id: string) => {
    if (confirm('Are you sure you want to delete this achievement?')) {
      setAchievements(prev => prev.filter(a => a.id !== id))
    }
  }

  const handleUpdateAchievement = (id: string, field: keyof Achievement, value: string) => {
    setAchievements(prev => prev.map(a => a.id === id ? { ...a, [field]: value } : a))
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Award': 'from-yellow-500 to-yellow-600',
      'Innovation': 'from-red-500 to-red-600',
      'Recognition': 'from-green-500 to-green-600',
      'Certification': 'from-red-600 to-red-700',
      'Competition': 'from-red-500 to-red-600',
      'Publication': 'from-indigo-500 to-indigo-600'
    }
    return colors[category as keyof typeof colors] || colors.Award
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Award': 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      'Innovation': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      'Recognition': 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      'Certification': 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      'Competition': 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      'Publication': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    }
    return icons[category as keyof typeof icons] || icons.Award
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
              <h1 className="text-2xl font-bold text-gray-900">Achievements Management</h1>
              <p className="text-gray-600 mt-1">Showcase your awards, recognitions, and accomplishments</p>
            </div>
            <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-medium shadow-lg shadow-red-500/25 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Achievement
            </button>
          </div>
        </div>
        </div>
      </motion.div>

      {/* Add Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Add New Achievement
              </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Achievement Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Best Innovation Award"
                    value={newAchievement.title}
                    onChange={(e) => setNewAchievement(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    placeholder="e.g., Tech Awards Bangladesh"
                    value={newAchievement.organization}
                    onChange={(e) => setNewAchievement(prev => ({ ...prev, organization: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="text"
                    placeholder="e.g., 2023"
                    value={newAchievement.date}
                    onChange={(e) => setNewAchievement(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newAchievement.category}
                    onChange={(e) => setNewAchievement(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  placeholder="Describe your achievement and its significance..."
                  value={newAchievement.description}
                  onChange={(e) => setNewAchievement(prev => ({ ...prev, description: e.target.value }))}
                  rows={8}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-gray-200/50">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAchievement}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all font-medium shadow-lg shadow-green-500/25"
              >
                Add Achievement
              </button>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Existing Achievements */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          Your Achievements ({achievements.length})
        </h3>
        
        <div className="grid gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-gradient-to-r ${getCategoryColor(achievement.category)} rounded-xl`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getCategoryIcon(achievement.category)} />
                    </svg>
                  </div>
                  <div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white text-xs font-medium rounded-full`}>
                      {achievement.category}
                    </div>
                    <span className="text-sm text-gray-500 mt-1 block">{achievement.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingId(editingId === achievement.id ? null : achievement.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    title="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeleteAchievement(achievement.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {editingId === achievement.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={achievement.title}
                      onChange={(e) => handleUpdateAchievement(achievement.id, 'title', e.target.value)}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all font-semibold"
                      placeholder="Achievement Title"
                    />
                    <input
                      type="text"
                      value={achievement.organization}
                      onChange={(e) => handleUpdateAchievement(achievement.id, 'organization', e.target.value)}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="Organization"
                    />
                    <input
                      type="text"
                      value={achievement.date}
                      onChange={(e) => handleUpdateAchievement(achievement.id, 'date', e.target.value)}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="Date"
                    />
                    <select
                      value={achievement.category}
                      onChange={(e) => handleUpdateAchievement(achievement.id, 'category', e.target.value)}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    value={achievement.description}
                    onChange={(e) => handleUpdateAchievement(achievement.id, 'description', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                    placeholder="Description"
                  />
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{achievement.title}</h4>
                  <p className="text-gray-600 font-medium mb-3">{achievement.organization}</p>
                  <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                </div>
              )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
