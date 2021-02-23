import React from "react"
import { Link } from "gatsby"

import ContentPage from "../components/contentPage"
import ProjectListing from "../components/projectListing"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"

import peaceThroughPlay from "../images/peacethruplay.png"
import "../components/layout.scss"
import "../components/fonts.scss"

import is_nohov from "../images/is-11.png"
import is_hov from "../images/is-2.png"

const ExperienceDesign = () => (
  <ContentPage val={ 1 } val2={ 1 }>
  	<ProjectListing date={ "DEC 2020" } page="/internshipSearch" title={ "Internship Search" } summary={ "An individual class project designed to answer the question, \"How can we empower students through their internship search?\"" } >
  	  <div className="hov-img">
        <img className="projectPicture" src={ is_nohov } alt="preInternship" />
        <img className="projectPicture-hov" src={ is_hov } alt="postInternship" />
      </div>
  	</ProjectListing>
    

  </ContentPage>

  )

export default ExperienceDesign

// { children, date, title, summary, page }
