"use client"

import { useState } from 'react'

type WorkItem = {
  id: string
  title: string
  organization: string
  date: string
  description: string
}

export default function AdminWorks() {
  const [works, setWorks] = useState<WorkItem[]>([
    {
      id: '1',
      title: 'Leadership Facilitator',
      organization: 'Youth Organization',
      date: '2022 - Present',
      description: 'Guiding youth in leadership development...',
    },
    {
      id: '2',
      title: 'Content Designer',
      organization: 'EdTech Platform',
      date: '2021 - 2022',
      description: 'Creating engaging educational content...',
    },
  ])

  const [editingId, setEditingId] = useState<string | null>(null)
  const [newWork, setNewWork] = useState<Omit<WorkItem, 'id'>>({
    title: '',
    organization: '',
    date: '',
    description: '',
  })

  const handleAddWork = () => {
    if (newWork.title && newWork.organization) {
      setWorks(prev => [...prev, { ...newWork, id: Date.now().toString() }])
      setNewWork({ title: '', organization: '', date: '', description: '' })
      alert('Work experience added!')
    }
  }

  const handleDeleteWork = (id: string) => {
    setWorks(prev => prev.filter(w => w.id !== id))
    alert('Work experience removed!')
  }

  const handleUpdateWork = (id: string, field: keyof WorkItem, value: string) => {
    setWorks(prev => prev.map(w => w.id === id ? { ...w, [field]: value } : w))
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage Work Experiences</h2>
      
      <div className="bg-white p-8 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold mb-4">Add New Work Experience</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Job Title"
            value={newWork.title}
            onChange={(e) => setNewWork(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Organization"
            value={newWork.organization}
            onChange={(e) => setNewWork(prev => ({ ...prev, organization: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Date (e.g., 2022 - Present)"
            value={newWork.date}
            onChange={(e) => setNewWork(prev => ({ ...prev, date: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Description"
            value={newWork.description}
            onChange={(e) => setNewWork(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddWork}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Add Work Experience
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">Existing Work Experiences</h3>
        {works.map(work => (
          <div key={work.id} className="bg-white p-6 rounded-lg shadow">
            <div className="space-y-3">
              <input
                type="text"
                value={work.title}
                onChange={(e) => handleUpdateWork(work.id, 'title', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
              />
              <input
                type="text"
                value={work.organization}
                onChange={(e) => handleUpdateWork(work.id, 'organization', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={work.date}
                onChange={(e) => handleUpdateWork(work.id, 'date', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                value={work.description}
                onChange={(e) => handleUpdateWork(work.id, 'description', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleDeleteWork(work.id)}
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
