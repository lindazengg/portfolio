import React from "react"
import { Link } from "gatsby"

import ProjectPage from "../components/projectPage"
import MyButton from "../components/myButton"
import ProjectPhoto from "../components/ProjectPhoto"
import { navigate } from "gatsby"

import "../components/layout.scss"
import "../components/fonts.scss"

import rp1 from "../images/rp-1.png"
import rp2 from "../images/rp-2.png"


const RoomPal = () => (
  <ProjectPage val={ 1 } backPage="/uiux_design" projectTitle={ "RoomPal" } projectText= { "My role at RoomPal was to design the user interface. The user interface includes all stages of the user experience in the app: the login/sign-up, search, and confirmation process. I collaborated with the developers of the project to create iterations based on both functionality and feasibility. " }
  projectText2={"Additionally, I mentored another designer on the team to create the wireframes on Figma and establish a timeline on Notion. This involved teaching the program and guiding the design process."}>
  
  	<ProjectPhoto imgsrc={ rp1 } targetId="rp1"></ProjectPhoto>
	<ProjectPhoto imgsrc={ rp2 } targetId="rp2"> </ProjectPhoto>
	
  </ProjectPage>

  )

export default RoomPal

// { children, date, title, summary, page }