export type StartupCourseData = {
  title: string
  description: string
  videos: Array<{
    id: number
    title: string
    videoId: string
  }>
  pricing: {
    isFree: boolean
    price: number
    currency: string
  }
  rating: {
    score: number
    totalRatings: number
  }
  subscribeUrl: string
}

export const startupCourseData: StartupCourseData = {
  title: 'Free Startup Course',
  description:
    'Unlock your entrepreneurial journey with my free Startup Bangla Course! Learn how to generate ideas, validate them, build MVPs, and launch your startup—all in Bangla, designed for aspiring founders in Bangladesh.',
  videos: [
    { id: 1, title: 'How to get Startup Idea', videoId: 'YOUR_VIDEO_ID_1' },
    { id: 2, title: 'How to Validate Your Idea', videoId: 'YOUR_VIDEO_ID_2' },
    { id: 3, title: 'How to Build MVP', videoId: 'YOUR_VIDEO_ID_3' },
    { id: 4, title: 'How to Find Cofounder', videoId: 'YOUR_VIDEO_ID_4' },
    { id: 5, title: 'How to Pitch Investors', videoId: 'YOUR_VIDEO_ID_5' },
    { id: 6, title: 'How to Build a Team', videoId: 'YOUR_VIDEO_ID_6' },
    { id: 7, title: 'How to Launch Product', videoId: 'YOUR_VIDEO_ID_7' },
    { id: 8, title: 'How to Get First Customer', videoId: 'YOUR_VIDEO_ID_8' },
    { id: 9, title: 'How to Scale Startup', videoId: 'YOUR_VIDEO_ID_9' },
    { id: 10, title: 'How to Exit/IPO', videoId: 'YOUR_VIDEO_ID_10' },
  ],
  pricing: {
    isFree: true,
    price: 0,
    currency: 'BDT',
  },
  rating: {
    score: 4.9,
    totalRatings: 1200,
  },
  subscribeUrl: 'https://www.youtube.com/@asifmollik12?sub_confirmation=1',
}
