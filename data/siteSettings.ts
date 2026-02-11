export const siteSettings = {
  title: 'Asif Mollik — Tech Entrepreneur & Full‑Stack Developer',
  description: 'Asif Mollik — Founder of Alphainno. Full‑stack developer, entrepreneur, and digital innovation leader from Bangladesh.',
  favicon: '/favicon.ico'
}

export const updateSiteSettings = (newSettings: typeof siteSettings) => {
  // In a real application, this would update the database
  // For now, we'll just log the update
  console.log('Site settings updated:', newSettings)
  
  // You can implement actual persistence here (e.g., API call, localStorage, etc.)
  if (typeof window !== 'undefined') {
    localStorage.setItem('siteSettings', JSON.stringify(newSettings))
  }
}
