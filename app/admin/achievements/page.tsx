"use client"

import { useState } from 'react'

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
      description: 'Recognized for outstanding entrepreneurship...',
      category: 'Award',
    },
    {
      id: '2',
      title: 'Tech Innovation',
      organization: 'Tech Summit',
      date: '2022',
      description: 'Developed innovative solutions...',
      category: 'Innovation',
    },
  ])

  const [newAchievement, setNewAchievement] = useState<Omit<Achievement, 'id'>>({
    title: '',
    organization: '',
    date: '',
    description: '',
    category: 'Award',
  })

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
      alert('Achievement added!')
    }
  }

  const handleDeleteAchievement = (id: string) => {
    setAchievements(prev => prev.filter(a => a.id !== id))
    alert('Achievement removed!')
  }

  const handleUpdateAchievement = (id: string, field: keyof Achievement, value: string) => {
    setAchievements(prev => prev.map(a => a.id === id ? { ...a, [field]: value } : a))
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage Achievements</h2>
      
      <div className="bg-white p-8 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold mb-4">Add New Achievement</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Achievement Title"
            value={newAchievement.title}
            onChange={(e) => setNewAchievement(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Organization"
            value={newAchievement.organization}
            onChange={(e) => setNewAchievement(prev => ({ ...prev, organization: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Date"
            value={newAchievement.date}
            onChange={(e) => setNewAchievement(prev => ({ ...prev, date: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Description"
            value={newAchievement.description}
            onChange={(e) => setNewAchievement(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newAchievement.category}
            onChange={(e) => setNewAchievement(prev => ({ ...prev, category: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Award</option>
            <option>Innovation</option>
            <option>Recognition</option>
            <option>Certification</option>
          </select>
          <button
            onClick={handleAddAchievement}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Add Achievement
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">Existing Achievements</h3>
        {achievements.map(achievement => (
          <div key={achievement.id} className="bg-white p-6 rounded-lg shadow">
            <div className="space-y-3">
              <input
                type="text"
                value={achievement.title}
                onChange={(e) => handleUpdateAchievement(achievement.id, 'title', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
              />
              <input
                type="text"
                value={achievement.organization}
                onChange={(e) => handleUpdateAchievement(achievement.id, 'organization', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  value={achievement.date}
                  onChange={(e) => handleUpdateAchievement(achievement.id, 'date', e.target.value)}
                  className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  value={achievement.category}
                  onChange={(e) => handleUpdateAchievement(achievement.id, 'category', e.target.value)}
                  className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Award</option>
                  <option>Innovation</option>
                  <option>Recognition</option>
                  <option>Certification</option>
                </select>
              </div>
              <textarea
                value={achievement.description}
                onChange={(e) => handleUpdateAchievement(achievement.id, 'description', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleDeleteAchievement(achievement.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
