"use client";
import React, { useState, useEffect } from 'react';
import StartupVideoTabs from './StartupVideoTabs';
import { startupCourseData, type StartupCourseData } from '../data/startupCourseData'

export default function StartupCourseVideo() {
  const [courseData, setCourseData] = useState<StartupCourseData>(startupCourseData)
  const [currentTab, setCurrentTab] = useState({ id: 1, title: courseData.videos[0].title });

  useEffect(() => {
    // Load course data from localStorage if available
    const saved = localStorage.getItem('startupCourseData')
    if (saved) {
      const parsedData = JSON.parse(saved)
      setCourseData(parsedData)
      setCurrentTab({ id: 1, title: parsedData.videos[0].title })
    }
  }, [])

  const videoMap = courseData.videos.reduce((acc, video) => {
    acc[video.id] = video.videoId
    return acc
  }, {} as Record<number, string>)

  return (
    <section className="flex flex-col items-center py-8 sm:py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">{courseData.title}</h2>
      <p className="text-base sm:text-lg text-center text-gray-600 mb-4 sm:mb-6 max-w-2xl px-2">
        {courseData.description}
      </p>
      <StartupVideoTabs
        onTabChange={setCurrentTab}
        active={currentTab.id}
      />
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-red-200 max-w-xl w-full p-4 sm:p-6 flex flex-col items-center">
        <div className="w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoMap[currentTab.id]}`}
            title={currentTab.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        {/* Course info row */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-3 sm:mb-4 mt-2 gap-2 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-2 sm:px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-semibold">
              {courseData.pricing.isFree ? 'Free' : `৳${courseData.pricing.price}`}
            </span>
            {courseData.pricing.isFree && (
              <span className="px-2 sm:px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs sm:text-sm font-bold border border-red-200">৳000 {courseData.pricing.currency}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
            <span className="text-gray-700 font-semibold text-sm sm:text-base">{courseData.rating.score}</span>
            <span className="text-gray-400 text-xs sm:text-sm">({courseData.rating.totalRatings.toLocaleString()}+ ratings)</span>
          </div>
        </div>
        <a 
          href={courseData.subscribeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full mt-3 sm:mt-4 px-3 py-2 sm:py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-200 text-center block"
        >
          Subscribe for more
        </a>
      </div>
      {/* Slider dots below the card */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
        {/* Previous button */}
        <button
          onClick={() => {
            if (currentTab.id > 1) {
              const newId = currentTab.id - 1;
              const video = courseData.videos.find(v => v.id === newId)
              setCurrentTab({ id: newId, title: video?.title || '' });
            }
          }}
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-lg font-bold shadow transition-all duration-200 mr-2
            ${currentTab.id === 1 ? 'bg-white border-red-100 text-red-300 cursor-not-allowed' : 'bg-white border-blue-400 text-blue-600 hover:bg-blue-50'}`}
          disabled={currentTab.id === 1}
          aria-label="Previous video"
        >
          <span className="material-icons" style={{ fontSize: '20px' }}>&#8592;</span>
        </button>
        {courseData.videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setCurrentTab({ id: video.id, title: video.title })}
            className={`w-4 h-4 rounded-full transition-all duration-200 border-2 flex items-center justify-center focus:outline-none
              ${currentTab.id === video.id ? 'bg-red-500 border-red-500 shadow-lg' : 'bg-gray-200 border-gray-300 hover:border-red-300'}
            `}
            aria-label={`Go to ${video.title}`}
            style={{ boxShadow: currentTab.id === video.id ? '0 2px 8px 0 rgba(255, 0, 0, 0.15)' : undefined }}
          >
            {/* empty for dot */}
          </button>
        ))}
        {/* Next button */}
        <button
          onClick={() => {
            const maxId = Math.max(...courseData.videos.map(v => v.id))
            if (currentTab.id < maxId) {
              const newId = currentTab.id + 1;
              const video = courseData.videos.find(v => v.id === newId)
              setCurrentTab({ id: newId, title: video?.title || '' });
            }
          }}
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-lg font-bold shadow transition-all duration-200 ml-2
            ${currentTab.id === Math.max(...courseData.videos.map(v => v.id)) ? 'bg-white border-red-100 text-red-300 cursor-not-allowed' : 'bg-white border-red-200 text-red-500 hover:bg-red-50'}`}
          disabled={currentTab.id === Math.max(...courseData.videos.map(v => v.id))}
          aria-label="Next video"
        >
          <span className="material-icons" style={{ fontSize: '20px' }}>&#8594;</span>
        </button>
      </div>
    </section>
  );
}
