"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'error' | 'success' | 'info'>('info')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    // Simulate a slight delay
    setTimeout(() => {
      if (password === 'Asifmollik986@website') {
        setMessage('Verifying credentials...')
        setMessageType('info')
        
        // Another delay for better UX
        setTimeout(() => {
          setMessage('Success! Access granted.')
          setMessageType('success')
          
          // Store auth token and redirect
          setTimeout(() => {
            localStorage.setItem('adminAuthenticated', 'true')
            router.push('/admin/dashboard')
          }, 800)
        }, 1000)
      } else {
        setMessage('Invalid password. Please try again.')
        setMessageType('error')
        setPassword('')
        setIsLoading(false)
      }
    }, 300)
  }

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center font-sans bg-gradient-to-br from-rose-100 via-white to-pink-100"
    >
      <div 
        className="p-10 rounded-3xl w-full max-w-md text-center transition-transform duration-300 hover:-translate-y-1 backdrop-blur-xl border border-white/30"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(236, 72, 153, 0.15) 50%, rgba(147, 51, 234, 0.15) 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
        }}
      >
        {/* Profile Container */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-200">
            <Image
              src="/images/asif-training.jpg"
              alt="Admin Profile"
              width={120}
              height={120}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-3 border-white"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back</h2>
        <p className="text-gray-500 mb-6">Please enter your password</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative mb-6">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg outline-none transition-all duration-200 text-base focus:border-indigo-600 focus:shadow-sm focus:shadow-indigo-600/20 disabled:opacity-50"
              style={{
                boxShadow: password && !isLoading ? '0 0 0 3px rgba(102, 126, 234, 0.2)' : 'none',
              }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              disabled={isLoading}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition disabled:opacity-50"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Unlocking...' : 'Unlock Profile'}
          </button>
        </form>

        {message && (
          <div
            className="mt-4 p-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: messageType === 'error' ? '#fee2e2' : messageType === 'success' ? '#d1fae5' : '#e0e7ff',
              color: messageType === 'error' ? '#991b1b' : messageType === 'success' ? '#065f46' : '#312e81',
              display: 'block',
            }}
          >
            {message}
          </div>
        )}

        <div className="mt-6">
          <a href="/" className="text-sm text-gray-700 hover:text-gray-900 transition">
            ← Back to Site
          </a>
        </div>
      </div>
    </div>
  )
}
