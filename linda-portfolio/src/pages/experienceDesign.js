import React from "react"
import { Link } from "gatsby"

import ContentPage from "../components/contentPage"
import ProjectListing from "../components/projectListing"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"

import peaceThroughPlay from "../images/peacethruplay.png"
import "../components/layout.scss"

const ExperienceDesign = () => (
  <ContentPage val={ 1 } val2={ 1 }>
  	<ProjectListing date={ "DEC 2020" } page="/internshipSearch" title={ "Internship Search" } summary={ "An individual class project designed to answer the question, \"How can we empower students through their internship search?\"" } >
  	  <img className="projectPicture" src={ peaceThroughPlay } alt="peace through play logo" />
  	</ProjectListing>
  	<ProjectListing date={ "DEC 2020" } page="/centennial" title={ "Centennial" } summary={ "An individual class project with the intention of connecting." } >
      <img className="projectPicture" src={ peaceThroughPlay } alt="peace through play logo" />
    </ProjectListing>
    <ProjectListing date={ "DEC 2020" } page="/internshipSearch" title={ "Internship Search" } summary={ "An individual class project designed to answer the question, \"How can we empower students through their internship search?\"" } >
      <img className="projectPicture" src={ peaceThroughPlay } alt="peace through play logo" />
    </ProjectListing>
  </ContentPage>

  )

export default ExperienceDesign

// { children, date, title, summary, page }