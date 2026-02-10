
"use client";
import React, { useState } from 'react';
const videoTopics = [
  "How to get Startup Idea",
  "How to Validate Your Idea",
  "How to Build MVP",
  "How to Find Cofounder",
  "How to Pitch Investors",
  "How to Build a Team",
  "How to Launch Product",
  "How to Get First Customer",
  "How to Scale Startup",
  "How to Exit/IPO"
];

export default function StartupVideoTabs({ onTabChange, active }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col items-center mb-8">
      {/* Responsive timeline: two rows on mobile */}
      <div className="w-full max-w-5xl flex flex-col gap-2 items-center justify-center">
        {/* Desktop: single row, Mobile: two rows */}
        <div className="hidden sm:flex relative w-full items-center justify-center">
          {/* Red timeline */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-red-400 z-0" style={{ transform: 'translateY(-50%)', width: '100%' }} />
          <div className="flex flex-row justify-between w-full z-10">
            {videoTopics.map((topic, idx) => (
              <div key={idx} className="relative flex flex-col items-center group" style={{ flex: 1 }}>
                <button
                  onClick={() => onTabChange({ id: idx + 1, title: topic })}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center border-2 text-base font-bold shadow-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-red-300
                    ${active === idx + 1
                      ? 'border-red-500 bg-red-500 text-white scale-110 shadow-xl'
                      : 'border-red-300 bg-white text-red-400 hover:bg-red-100 hover:scale-105'}
                  `}
                  style={{ boxShadow: active === idx + 1 ? '0 2px 8px 0 rgba(255, 0, 0, 0.10)' : undefined, position: 'relative', top: '-0.5rem', marginLeft: idx === 0 ? 0 : 24, marginRight: idx === videoTopics.length - 1 ? 0 : 24 }}
                >
                  {idx + 1}
                </button>
                {/* Animated Tooltip */}
                <div
                  className={`pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#fdf8fb] text-red-500 text-base font-medium border-2 border-red-300 shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-20 whitespace-nowrap
                    ${hovered === idx ? '' : 'invisible'}`}
                  style={{ minWidth: 'max-content' }}
                >
                  {topic}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile: two rows */}
        <div className="sm:hidden w-full flex flex-col gap-2 items-center">
          {/* First row: 1-5 */}
          <div className="relative w-full flex items-center justify-center mb-1">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-red-400 z-0" style={{ transform: 'translateY(-50%)', width: '100%' }} />
            <div className="flex flex-row justify-between w-full z-10">
              {videoTopics.slice(0, 5).map((topic, idx) => (
                <div key={idx} className="relative flex flex-col items-center group" style={{ flex: 1 }}>
                  {/* Animated Tooltip ABOVE for first row */}
                  <div
                    className={`pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#fdf8fb] text-red-500 text-base font-medium border-2 border-red-300 shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 z-20 whitespace-nowrap
                      ${hovered === idx ? '' : 'invisible'}`}
                    style={{ minWidth: 'max-content' }}
                  >
                    {topic}
                  </div>
                  <button
                    onClick={() => onTabChange({ id: idx + 1, title: topic })}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border-2 text-base font-bold shadow-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-red-300
                      ${active === idx + 1
                        ? 'border-red-500 bg-red-500 text-white scale-110 shadow-xl'
                        : 'border-red-300 bg-white text-red-400 hover:bg-red-100 hover:scale-105'}
                    `}
                    style={{ boxShadow: active === idx + 1 ? '0 2px 8px 0 rgba(255, 0, 0, 0.10)' : undefined, position: 'relative', top: '-0.5rem', marginLeft: idx === 0 ? 0 : 16, marginRight: idx === 4 ? 0 : 16 }}
                  >
                    {idx + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Second row: 6-10 */}
          <div className="relative w-full flex items-center justify-center mt-1">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-red-400 z-0" style={{ transform: 'translateY(-50%)', width: '100%' }} />
            <div className="flex flex-row justify-between w-full z-10">
              {videoTopics.slice(5, 10).map((topic, idx) => (
                <div key={idx + 5} className="relative flex flex-col items-center group" style={{ flex: 1 }}>
                  <button
                    onClick={() => onTabChange({ id: idx + 6, title: topic })}
                    onMouseEnter={() => setHovered(idx + 5)}
                    onMouseLeave={() => setHovered(null)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border-2 text-base font-bold shadow-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-red-300
                      ${active === idx + 6
                        ? 'border-red-500 bg-red-500 text-white scale-110 shadow-xl'
                        : 'border-red-300 bg-white text-red-400 hover:bg-red-100 hover:scale-105'}
                    `}
                    style={{ boxShadow: active === idx + 6 ? '0 2px 8px 0 rgba(255, 0, 0, 0.10)' : undefined, position: 'relative', top: '-0.5rem', marginLeft: idx === 0 ? 0 : 16, marginRight: idx === 4 ? 0 : 16 }}
                  >
                    {idx + 6}
                  </button>
                  {/* Animated Tooltip - reduced gap below number */}
                  <div
                    className={`pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#fdf8fb] text-red-500 text-base font-medium border-2 border-red-300 shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-300 z-20 whitespace-nowrap
                      ${hovered === idx + 5 ? '' : 'invisible'}`}
                    style={{ minWidth: 'max-content' }}
                  >
                    {topic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
