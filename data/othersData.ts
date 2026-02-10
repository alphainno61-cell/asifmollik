export type OtherItem = {
  id: string
  title: string
  organization: string
  date: string
  image: string
  description: string
}

export const othersData: OtherItem[] = [
  {
    id: "hult-prize",
    title: "Head of Startup and Judges Management",
    organization: "Hult Prize OnCampus Program",
    date: "2023 - 2024",
    image: "/images/asif-training.jpg",
    description: "The OnCampus program serves as the first instance of the annual $1M+ Hult Prize competition. Student-led teams, known as Campus Directors, organize hackathon events at their universities focused on the Hult Prize theme. The program has reached 121 countries and 2,000+ universities, creating learning opportunities for students to be the next generation of the world's most promising social entrepreneurs."
  },
  {
    id: "unicef",
    title: "Youth Representative",
    organization: "UNICEF Bangladesh",
    date: "2022 - 2026",
    image: "/images/asif-mollik-ceo.png",
    description: "UNICEF supports the Government of Bangladesh to respond to the needs of the most disadvantaged children. The 2022 to 2026 UNICEF country programme is aligned to Bangladesh's path from Low-Plan for 2021 to 2025, with a focus on developing Bangladesh to be the knowledge hub for the next phase of child rights and gender-equal development of Bangladesh."
  },
  {
    id: "gen-unlimited",
    title: "Youth Representative",
    organization: "Generation Unlimited Bangladesh",
    date: "2020 - Present",
    image: "/images/asifmollik.jpg",
    description: "A Generation Unlimited Bangladesh Youth Representative is a young person who represents the voices, perspectives, and aspirations of young people in Bangladesh between the key stakeholders and policymakers. I am the Mentor here, the United Nations Development Programme (UNDP), BRAC, the Manusher Jonno Foundation of Generation, and ministry."
  },
  {
    id: "hulla",
    title: "Child Journalist",
    organization: "Hulla Bangladesh",
    date: "2020",
    image: "/images/asif-training.jpg",
    description: "Hulla Bangladesh webinar for child journalists. Under 18, every child can participate in this program. I was a child journalist in 2020, contributing to youth-focused content and community engagement initiatives."
  }
]

export default othersData