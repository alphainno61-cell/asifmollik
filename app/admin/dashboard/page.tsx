"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteSettings, updateSiteSettings } from '../../data/siteSettings'
import { useState } from 'react'

export default function AdminDashboard() {
  // Admin settings state
  const [settings, setSettings] = useState(siteSettings)
  const [faviconPreview, setFaviconPreview] = useState(settings.favicon)
  const [saveMsg, setSaveMsg] = useState('')

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSettings(prev => ({ ...prev, [name]: value }))
    if (name === 'favicon') setFaviconPreview(value)
  }

  const handleSave = () => {
    updateSiteSettings(settings)
    setSaveMsg('Settings updated!')
    setTimeout(() => setSaveMsg(''), 2000)
  }

  // Move stats array definition here
  const stats = [
    { 
      name: 'Total Views', 
      value: '12.4k', 
      change: '+12%', 
      changeType: 'positive',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
    },
    { 
      name: 'Inquiries', 
      value: '48', 
      change: '+8%', 
      changeType: 'positive',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    },
    { 
      name: 'Projects', 
      value: '19', 
      change: '+2', 
      changeType: 'positive',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    { 
      name: 'Achievements', 
      value: '27', 
      change: '+5', 
      changeType: 'positive',
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
    }
  ]
        {/* Admin Site Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-xl mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Website Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={settings.title}
                onChange={handleSettingsChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={settings.description}
                onChange={handleSettingsChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Favicon URL</label>
              <input
                type="text"
                name="favicon"
                value={settings.favicon}
                onChange={handleSettingsChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
              <div className="mt-2">
                <span className="text-xs text-gray-500">Preview:</span>
                <img src={faviconPreview} alt="Favicon Preview" className="inline-block w-8 h-8 ml-2 border rounded" />
              </div>
            </div>
            <button
              onClick={handleSave}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >Save Settings</button>
            {saveMsg && <div className="mt-2 text-green-600 text-sm">{saveMsg}</div>}
          </div>
        </motion.div>
        {/* ...existing dashboard content continues here... */}
  ]

  const quickActions = [
    { name: 'Edit About Section', href: '/admin/dashboard/about', color: 'bg-gradient-to-br from-red-500 to-red-600', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Manage Works', href: '/admin/dashboard/works', color: 'bg-gradient-to-br from-gray-800 to-gray-900', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { name: 'Update Achievements', href: '/admin/dashboard/achievements', color: 'bg-white border-2 border-gray-200', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { name: 'Contact Messages', href: '/admin/dashboard/contact', color: 'bg-gradient-to-br from-red-600 to-red-700', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
  ]

  const recentActivity = [
    { action: 'Updated About section', time: '2 hours ago', type: 'edit' },
    { action: 'Added new project: E-commerce App', time: '1 day ago', type: 'create' },
    { action: 'New contact message received', time: '2 days ago', type: 'message' },
    { action: 'Achievement milestone reached', time: '3 days ago', type: 'achievement' }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Asif!</span>
            </h1>
            <p className="text-gray-600 mt-2">Here's what's happening with your portfolio today.</p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/asif-mollik-ceo.png" 
                alt="Asif Mollik"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={action.name}
              href={action.href}
              className="group relative overflow-hidden rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 ${action.color} group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative z-10">
                <div className={`flex items-center justify-between ${
                  action.color.includes('bg-white') ? 'text-gray-800' : 'text-white'
                }`}>
                  <div>
                    <h3 className="font-semibold text-sm">{action.name}</h3>
                    <p className={`text-xs mt-1 ${
                      action.color.includes('bg-white') ? 'text-gray-600' : 'opacity-90'
                    }`}>Manage content</p>
                  </div>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === 'edit' ? 'bg-red-100 text-red-600' :
                  activity.type === 'create' ? 'bg-gray-100 text-gray-800' :
                  activity.type === 'message' ? 'bg-gray-800 text-white' :
                  'bg-red-500 text-white'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                      activity.type === 'edit' ? 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' :
                      activity.type === 'create' ? 'M12 6v6m0 0v6m0-6h6m-6 0H6' :
                      activity.type === 'message' ? 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' :
                      'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                    } />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-xl"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Portfolio Overview</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Profile Completion</span>
              <span className="text-sm font-bold text-gray-900">95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Content Freshness</span>
              <span className="text-sm font-bold text-gray-900">88%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 h-2 rounded-full" style={{ width: '88%' }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">SEO Score</span>
              <span className="text-sm font-bold text-gray-900">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-red-600 to-red-700 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
