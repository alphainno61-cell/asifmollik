"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { startupCourseData } from '../../../../data/startupCourseData'

type StartupCourseFormData = typeof startupCourseData

export default function AdminStartupCourse() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [courseData, setCourseData] = useState<StartupCourseFormData>(startupCourseData)
  const [newVideo, setNewVideo] = useState({ title: '', videoId: '' })

  useEffect(() => {
    const authenticated = localStorage.getItem('adminAuthenticated')
    if (!authenticated) {
      router.push('/admin')
    } else {
      setIsAuthenticated(true)
      // Load saved course data from localStorage
      const saved = localStorage.getItem('startupCourseData')
      if (saved) {
        setCourseData(JSON.parse(saved))
      }
    }
  }, [router])

  if (!isAuthenticated) return null

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourseData(prev => ({ ...prev, title: e.target.value }))
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCourseData(prev => ({ ...prev, description: e.target.value }))
  }

  const handleVideoTitleChange = (id: number, newTitle: string) => {
    setCourseData(prev => ({
      ...prev,
      videos: prev.videos.map(v => v.id === id ? { ...v, title: newTitle } : v)
    }))
  }

  const handleVideoIdChange = (id: number, newVideoId: string) => {
    setCourseData(prev => ({
      ...prev,
      videos: prev.videos.map(v => v.id === id ? { ...v, videoId: newVideoId } : v)
    }))
  }

  const handleAddVideo = () => {
    if (newVideo.title && newVideo.videoId) {
      const newId = Math.max(...courseData.videos.map(v => v.id)) + 1
      setCourseData(prev => ({
        ...prev,
        videos: [...prev.videos, { id: newId, ...newVideo }]
      }))
      setNewVideo({ title: '', videoId: '' })
    }
  }

  const handleDeleteVideo = (id: number) => {
    setCourseData(prev => ({
      ...prev,
      videos: prev.videos.filter(v => v.id !== id)
    }))
  }

  const handleRatingChange = (field: 'score' | 'totalRatings', value: string) => {
    setCourseData(prev => ({
      ...prev,
      rating: {
        ...prev.rating,
        [field]: field === 'score' ? parseFloat(value) : parseInt(value)
      }
    }))
  }

  const handleSave = () => {
    localStorage.setItem('startupCourseData', JSON.stringify(courseData))
    alert('Startup Course data saved successfully!')
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage Startup Course</h2>
      
      <div className="bg-white p-8 rounded-lg shadow space-y-6">
        {/* Title Section */}
        <div>
          <label className="block text-sm font-medium mb-2">Course Title</label>
          <input
            type="text"
            value={courseData.title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description Section */}
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={courseData.description}
            onChange={handleDescriptionChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Rating Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Rating Score</label>
            <input
              type="number"
              step="0.1"
              value={courseData.rating.score}
              onChange={(e) => handleRatingChange('score', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Total Ratings</label>
            <input
              type="number"
              value={courseData.rating.totalRatings}
              onChange={(e) => handleRatingChange('totalRatings', e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Subscribe URL Section */}
        <div>
          <label className="block text-sm font-medium mb-2">YouTube Subscribe URL</label>
          <input
            type="url"
            value={courseData.subscribeUrl}
            onChange={(e) => setCourseData(prev => ({ ...prev, subscribeUrl: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://www.youtube.com/@yourchannel?sub_confirmation=1"
          />
          <p className="text-sm text-gray-500 mt-1">
            Format: https://www.youtube.com/@yourhandle?sub_confirmation=1
          </p>
        </div>

        {/* Videos Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Course Videos</h3>
          
          {/* Existing Videos */}
          <div className="space-y-4 mb-6">
            {courseData.videos.map((video) => (
              <div key={video.id} className="border rounded-lg p-4 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Video {video.id} Title</label>
                    <input
                      type="text"
                      value={video.title}
                      onChange={(e) => handleVideoTitleChange(video.id, e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">YouTube Video ID</label>
                    <input
                      type="text"
                      value={video.videoId}
                      onChange={(e) => handleVideoIdChange(video.id, e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., dQw4w9WgXcQ"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteVideo(video.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Delete Video
                </button>
              </div>
            ))}
          </div>

          {/* Add New Video */}
          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3">Add New Video</h4>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <input
                type="text"
                placeholder="Video Title"
                value={newVideo.title}
                onChange={(e) => setNewVideo(prev => ({ ...prev, title: e.target.value }))}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="YouTube Video ID"
                value={newVideo.videoId}
                onChange={(e) => setNewVideo(prev => ({ ...prev, videoId: e.target.value }))}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleAddVideo}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              Add Video
            </button>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}
