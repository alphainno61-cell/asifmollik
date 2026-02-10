export type EducationItem = {
  id: string
  degree: string
  institution: string
  date: string
}

export const educationData: EducationItem[] = [
  {
    id: "bachelor",
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    date: "March 2022 - April 2026"
  },
  {
    id: "hsc",
    degree: "Higher Secondary School Certificate",
    institution: "Milestone College",
    date: "2021"
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate",
    institution: "Holy Crescent School",
    date: "2019"
  }
]

export default educationData