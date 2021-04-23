import React from "react"
import { Link } from "gatsby"

import ProjectPage from "../components/projectPage"
import MyButton from "../components/myButton"
import ProjectPhoto from "../components/ProjectPhoto"
import { navigate } from "gatsby"

import "../components/layout.scss"
import "../components/fonts.scss"



import sf2 from "../images/sf-2.png"
import sf3 from "../images/sf-3.png"
import sf4 from "../images/sf-4.png"
import sf5 from "../images/sf-5.png"
import sf6 from "../images/sf-6.png"
import sf7 from "../images/sf-7.png"
import sf8 from "../images/sf-8-1.png"
import sf9 from "../images/sf-8.png"

const SpaceFaster = () => (
  <ProjectPage val={ 1 } backPage="/uiux_design" projectTitle={ "Space Faster" }
	projectText= { "My role at Bondetous was to design the branding and user experience for the venture. The design graphics and visualizations I created were presented in Fall 2019, in which we were finalists in the Husky Startup Challenge. Later on, I continued to develop additional wireframes in Adobe XD as well as marketing graphics in Adobe Illustrator."}
  	projectText2={"This was a pivotal experience because I was the lead designer for the venture. I was inspired to self-teach most of the programs I used to develop my designs and delve into different subjects such as marketing. I worked closely with a team of 7 developers to discuss opportunity spaces as well as gain feedback for designs."}
  	projectText3={"Notable Achievements: $13.9k Jelly Incubation Fund Recipient"}>
  	

  	<ProjectPhoto imgsrc={ sf2 } targetId="sf2"> </ProjectPhoto>
  	<ProjectPhoto imgsrc={ sf3 } targetId="sf3"> </ProjectPhoto>
  	<ProjectPhoto imgsrc={ sf4 } targetId="sf4"> </ProjectPhoto>
  	<ProjectPhoto imgsrc={ sf5 } targetId="sf5"> </ProjectPhoto>
  	<ProjectPhoto imgsrc={ sf6 } targetId="sf6"> </ProjectPhoto>
  	<ProjectPhoto imgsrc={ sf7 } targetId="sf7"> </ProjectPhoto>
  	<ProjectPhoto imgsrc={ sf8 } targetId="sf8"> </ProjectPhoto>
  	<ProjectPhoto imgsrc={ sf9 } targetId="sf9"> </ProjectPhoto>
  </ProjectPage>

  )

export default SpaceFaster

// { children, date, title, summary, page }