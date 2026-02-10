"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type WorkItem = {
  id: string
  title: string
  organization: string
  date: string
  description: string
  category: string
}

export default function AdminWorks() {
  const [works, setWorks] = useState<WorkItem[]>([
    {
      id: '1',
      title: 'Leadership Facilitator',
      organization: 'Youth Organization',
      date: '2022 - Present',
      description: 'Guiding youth in leadership development and organizing community programs to foster growth and collaboration.',
      category: 'Leadership'
    },
    {
      id: '2',
      title: 'Content Designer',
      organization: 'EdTech Platform',
      date: '2021 - 2022',
      description: 'Creating engaging educational content and designing user-friendly learning experiences for online platforms.',
      category: 'Design'
    },
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newWork, setNewWork] = useState<Omit<WorkItem, 'id'>>({
    title: '',
    organization: '',
    date: '',
    description: '',
    category: 'Development'
  })

  const categories = ['Development', 'Design', 'Leadership', 'Education', 'Business', 'Other']

  const handleAddWork = () => {
    if (newWork.title && newWork.organization) {
      setWorks(prev => [...prev, { ...newWork, id: Date.now().toString() }])
      setNewWork({ title: '', organization: '', date: '', description: '', category: 'Development' })
      setShowAddForm(false)
      // Show success message
      alert('Work experience added successfully!')
    }
  }

  const handleDeleteWork = (id: string) => {
    if (confirm('Are you sure you want to delete this work experience?')) {
      setWorks(prev => prev.filter(w => w.id !== id))
    }
  }

  const handleUpdateWork = (id: string, field: keyof WorkItem, value: string) => {
    setWorks(prev => prev.map(w => w.id === id ? { ...w, [field]: value } : w))
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Development': 'from-red-500 to-red-600',
      'Design': 'from-red-500 to-red-600',
      'Leadership': 'from-green-500 to-green-600',
      'Education': 'from-yellow-500 to-yellow-600',
      'Business': 'from-red-500 to-red-600',
      'Other': 'from-gray-500 to-gray-600'
    }
    return colors[category as keyof typeof colors] || colors.Other
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Work Experience Management</h1>
            <p className="text-gray-600 mt-1">Manage your professional experiences and projects</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-medium shadow-lg shadow-red-500/25 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Experience
            </button>
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
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Add New Work Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Senior Developer"
                    value={newWork.title}
                    onChange={(e) => setNewWork(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    placeholder="e.g., Alphainno"
                    value={newWork.organization}
                    onChange={(e) => setNewWork(prev => ({ ...prev, organization: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                  <input
                    type="text"
                    placeholder="e.g., 2022 - Present"
                    value={newWork.date}
                    onChange={(e) => setNewWork(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newWork.category}
                    onChange={(e) => setNewWork(prev => ({ ...prev, category: e.target.value }))}
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
                  placeholder="Describe your role and achievements..."
                  value={newWork.description}
                  onChange={(e) => setNewWork(prev => ({ ...prev, description: e.target.value }))}
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
                onClick={handleAddWork}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all font-medium shadow-lg shadow-green-500/25"
              >
                Add Experience
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Existing Works */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          Existing Work Experiences ({works.length})
        </h3>
        
        <div className="grid gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(work.category)} text-white text-xs font-medium rounded-full`}>
                    {work.category}
                  </div>
                  <span className="text-sm text-gray-500">{work.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingId(editingId === work.id ? null : work.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    title="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeleteWork(work.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {editingId === work.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={work.title}
                      onChange={(e) => handleUpdateWork(work.id, 'title', e.target.value)}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-semibold"
                      placeholder="Job Title"
                    />
                    <input
                      type="text"
                      value={work.organization}
                      onChange={(e) => handleUpdateWork(work.id, 'organization', e.target.value)}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Organization"
                    />
                    <input
                      type="text"
                      value={work.date}
                      onChange={(e) => handleUpdateWork(work.id, 'date', e.target.value)}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Date Range"
                    />
                    <select
                      value={work.category}
                      onChange={(e) => handleUpdateWork(work.id, 'category', e.target.value)}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    value={work.description}
                    onChange={(e) => handleUpdateWork(work.id, 'description', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Description"
                  />
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{work.title}</h4>
                  <p className="text-gray-600 font-medium mb-3">{work.organization}</p>
                  <p className="text-gray-700 leading-relaxed">{work.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
