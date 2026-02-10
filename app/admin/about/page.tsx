"use client"

import { useState } from 'react'

type AboutContent = {
  title: string
  description: string
  stats: { label: string; value: number }[]
}

export default function AdminAbout() {
  const [about, setAbout] = useState<AboutContent>({
    title: 'About Me',
    description: 'I am a passionate entrepreneur and full-stack developer...',
    stats: [
      { label: 'Completed Projects', value: 19 },
      { label: 'Broken Pencils', value: 13 },
      { label: 'Failed Attempts', value: 27 },
    ]
  })

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

  const handleSave = () => {
    console.log('Saving about info:', about)
    alert('About information saved!')
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage About Section</h2>
      <div className="bg-white p-8 rounded-lg shadow">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={about.title}
              onChange={(e) => setAbout(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={about.description}
              onChange={handleDescriptionChange}
              rows={6}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Statistics</h3>
            <div className="space-y-4">
              {about.stats.map((stat, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Label</label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-24">
                    <label className="block text-sm font-medium mb-1">Value</label>
                    <input
                      type="number"
                      value={stat.value}
                      onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}
