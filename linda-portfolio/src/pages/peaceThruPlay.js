import React from "react"
import { Link } from "gatsby"

import ProjectPage from "../components/projectPage"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"

import "../components/layout.scss"
import "../components/fonts.scss"

import ptp1 from "../images/ptp-1.png"
import ptp2 from "../images/ptp-2.png"
import ptp3 from "../images/ptp-3.png"
import ptp4 from "../images/ptp-4.png"
import ptp5 from "../images/ptp-5.png"

const PeaceThruPlay = () => (
  <ProjectPage val={ 1 } backPage="/uiux_design" projectTitle={ "Peace Through Play" } 
  	projectText= { "My role at Peace Through Play was to redesign their entire mobile and website experience for students, parents, and other visitors. I consulted with the E-Board of the club organization to review their brand guide as well as additional features they wanted to add to their website. The critical problem spaces we needed to address were the accessibility of information on the landing page as well as the fluidity of the search features on the activities page. "}
  	projectText2={"The designs were created in a shared Figma file in which the E-Board could view my progress and provide feedback at any time. We met biweekly to discuss any room for improvement or any additional wireframes needed. "}>
  	<img className="pscroll" src={ ptp1 }/>
	<img className="pscroll" src={ ptp2 }/>
	<img className="pscroll" src={ ptp3 }/>
	<img className="pscroll" src={ ptp4 }/>
	<img className="pscroll" src={ ptp5 }/>



  </ProjectPage>

  )

export default PeaceThruPlay

// { children, date, title, summary, page }