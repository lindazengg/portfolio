import React from "react"
import { Link } from "gatsby"

import ProjectPage from "../components/projectPage"
import MyButton from "../components/myButton"
import ProjectPhoto from "../components/ProjectPhoto"
import { navigate } from "gatsby"

import "../components/layout.scss"
import "../components/fonts.scss"

import is1 from "../images/is1.png"

const InternshipSearch = () => (
  <ProjectPage val={ 1 } backPage="/experienceDesign" projectTitle={ "Internship Search" } projectText= { "Assignment for ARTG3461-Experience Design 1." }>
  
  	
     <ProjectPhoto imgsrc={ is1 } targetId="is1"></ProjectPhoto>


  </ProjectPage>

  )

export default InternshipSearch

// { children, date, title, summary, page }