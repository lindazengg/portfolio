import React from "react"
import { Link } from "gatsby"

import ProjectPage from "../components/projectPage"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"

import "../components/layout.scss"
import "../components/fonts.scss"

const SpaceFaster = () => (
  <ProjectPage val={ 1 } backPage="/uiux_design" projectTitle={ "SpaceFaster" } projectText= { "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." }>
  </ProjectPage>

  )

export default SpaceFaster

// { children, date, title, summary, page }