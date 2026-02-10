"use client";
import { useState } from 'react';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full py-20 sm:py-24 lg:py-28 flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
        {/* Content */}
        <div className="text-center max-w-3xl px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Ready to Transform?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 font-light leading-relaxed">
            Get expert guidance on your startup, business, and personal journey
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-base sm:text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Let's Start
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-14 md:pr-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900">
                  I help you shape bold <span className="text-red-600">ideas.</span>
                </h2>
                <p className="text-slate-700 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-[17px] max-w-prose">
                  I create a focused, collaborative space where your ideas can flow freely and evolve into clear, actionable strategies. We’ll align on goals, surface challenges, explore new possibilities, and refine your concept into a plan you can execute—whether it’s a startup, business initiative, or personal milestone.
                </p>
                <div className="mb-5 sm:mb-6">
                  <p className="text-base sm:text-lg md:text-xl font-bold mb-1">BDT 2100/- Only</p>
                  <p className="text-xs sm:text-sm text-slate-600">*Applicable for 1 Hour (1-hour listening session included)</p>
                </div>
                <a
                  href="https://www.youtube.com/@asifmollik12?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base rounded-lg transition-colors w-full sm:w-auto justify-center"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book an Appointment
                </a>
              </div>
              {/* Right Image */}
              <div className="flex-1 relative bg-gradient-to-br from-slate-100 to-slate-200 min-h-[280px] sm:min-h-[320px] md:min-h-0 overflow-hidden flex items-center justify-center md:justify-start md:-ml-8 lg:-ml-12">
                <img 
                  src="/asif-mollik-modal.png" 
                  alt="Asif Mollik" 
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 transition-colors shadow-md z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
