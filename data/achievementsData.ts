export type Achievement = {
  id: string
  title: string
  organization: string
  date: string
  image: string
  description: string
  category: string
}

export const achievementsData: Achievement[] = [
  {
    id: "youth-advocate",
    title: "Youth Advocate",
    organization: "Generation Unlimited Bangladesh",
    date: "2020",
    image: "/images/asif-training.jpg",
    description: "Appointed as Youth Representative to bridge young people's voices with key stakeholders and policymakers in Bangladesh for sustainable development.",
    category: "Advocacy"
  },
  {
    id: "youth-representative",
    title: "Youth Representative",
    organization: "UNICEF Bangladesh",
    date: "2021",
    image: "/images/asif-mollik-ceo.png",
    description: "Selected as Youth Representative to advocate for children's rights and contribute to policy development for disadvantaged children in Bangladesh.",
    category: "Social Impact"
  },
  {
    id: "leadership-facilitator",
    title: "Leadership Facilitator",
    organization: "Bangladesh Youth Leadership Center",
    date: "2021",
    image: "/images/asifmollik.jpg",
    description: "Recognized for excellence in delivering leadership development workshops and curriculum design for youth empowerment programs across Bangladesh.",
    category: "Education"
  },
  {
    id: "founder-ceo",
    title: "Founder & CEO",
    organization: "Mindy Platform",
    date: "2021",
    image: "/images/asif-training.jpg",
    description: "Founded and launched Mindy, a mental health support platform addressing rising suicide rates in Bangladesh through anonymous counseling services.",
    category: "Entrepreneurship"
  },
  {
    id: "content-innovation",
    title: "Content Innovation",
    organization: "10 Minute School",
    date: "2021",
    image: "/images/asif-mollik-ceo.png",
    description: "Contributed to innovative K-12 content design making education accessible to students across Bangladesh and beyond through digital platforms.",
    category: "Innovation"
  },
  {
    id: "hult-prize-director",
    title: "Campus Director",
    organization: "Hult Prize Foundation",
    date: "2023",
    image: "/images/asifmollik.jpg",
    description: "Successfully organized and managed the Hult Prize OnCampus competition, leading startup and judges management for the $1M+ global competition.",
    category: "Leadership"
  }
]

export default achievementsData