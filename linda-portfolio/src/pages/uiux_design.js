import React from "react"
import { Link } from "gatsby"

import ContentPage from "../components/contentPage"
import ProjectListing from "../components/projectListing"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"

import peaceThroughPlay from "../images/peacethruplay.png"
import bondetous from "../images/bondetous.png"
import roomPal from "../images/roompal.png"
import "../components/layout.scss"

const UiUxDesignPage = () => (
  <ContentPage val={ 1 } val2={ 0 }>
  	<ProjectListing date={ "DEC 2020 - PRESENT" } page="/peaceThruPlay" title={ "Peace Through Play" } summary={ "A redesign of an organization’s website and mobile platform in Figma. Peace through Play is a Northeastern club dedicated to educating youth through engaging games, crafts, and other mediums." } >
  	  <img className="projectPicture" src={ peaceThroughPlay } alt="peace through play logo" />
  	</ProjectListing>
  	<ProjectListing date={ "JAN 2021 - PRESENT" } page="/roomPal" title={ "RoomPal" } summary={ "In Progress: A preliminary design of a mobile platform in Figma. Room Pal is a personal project intended to revolutionize the subleasing experience. " } >
  	  <img className="projectPicture" src={ roomPal } alt="Room Pal's site on a phone" />
  	</ProjectListing>
  	<ProjectListing date={ "NOV 2019 - SEP 2020" } page="/spaceFaster" title={ "SpaceFaster" } summary={ "A preliminary design of company’s branding and digital platforms. SpaceFaster, formerly Bondetous, is a startup to personalize the storage process. " } >
  	  <img className="projectPicture" src={ bondetous } alt="SpaceFaster on a laptop" />
  	</ProjectListing>
  </ContentPage>

  )

export default UiUxDesignPage

// { children, date, title, summary, page }