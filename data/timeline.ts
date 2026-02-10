export type TimelineItem = {
  id: string
  company: string
  role: string
  date: string
  image: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    id: 'mindy',
    company: 'Mindy',
    role: 'Founder & CEO',
    date: 'August 2021 - Present',
    image: '/images/asif-training.jpg',
    description:
      "Concerning the rising number of suicides in Bangladesh, Mindy opened a platform to listen and support people anonymously. I helped shape content and operations to make the platform secure and accessible.",
  },
  {
    id: 'goldenvault',
    company: 'GoldenVault',
    role: 'Operations Advisor',
    date: 'January 2025 - Present',
    image: '/images/asif-mollik-ceo.png',
    description:
      "Golden Vault is a student-founded startup that engages learners with real-world challenges and expert guidance. I advised on operations and partnerships.",
  },
  {
    id: 'bylc',
    company: 'Bangladesh Youth Leadership Center (BYLC)',
    role: 'Leadership Development Facilitator',
    date: 'August 2021 - Present',
    image: '/images/asif-training.jpg',
    description:
      "I delivered leadership development workshops and curriculum for youth development programs, focusing on empathy, problem solving, and public leadership skills.",
  },
  {
    id: '10min',
    company: '10 Minute School',
    role: 'Content Designer',
    date: 'March 2021 - December 2021',
    image: '/images/asifmollik.jpg',
    description:
      "Worked on K-12 content design to make academic and skill-development material accessible to students across Bangladesh and beyond.",
  },
]

export default timeline
