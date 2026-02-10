import Hero from '../components/Hero'
import About from '../components/About'
import ProfessionalExperiences from '../components/ProfessionalExperiences'
import OthersTimeline from '../components/OthersTimeline'
import EducationTimeline from '../components/EducationTimeline'
import Achievements from '../components/Achievements'
import StartupCourseVideo from '../components/StartupCourseVideo'
import Footer from '../components/CollaborationCTA'
import { professionalExperiences } from '../data/professionalExperiences'
import { othersData } from '../data/othersData'
import { educationData } from '../data/educationData'
import { achievementsData } from '../data/achievementsData'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProfessionalExperiences items={professionalExperiences} />
      <OthersTimeline items={othersData} />
      <EducationTimeline items={educationData} />
      <StartupCourseVideo />
      <Achievements items={achievementsData} />
      <Footer />
    </>
  )
}
