import React from "react"
import { Link } from "gatsby"

import ContentPage from "../components/contentPage"
import ProjectListing from "../components/projectListing"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"

import roomPal from "../images/roompal.png"
import "../components/layout.scss"
import "../components/fonts.scss"

import bond1 from "../images/bondetous-pres1.png"
import bond2 from "../images/bondetous-pres2.png"
import ptp_nohov from "../images/ptp-pres1.png"
import ptp_hov from "../images/ptp-pres2.png"
import rp1 from "../images/rp-hov1.png"
import rp2 from "../images/rp-hov2.png"


const UiUxDesignPage = () => (
  <ContentPage val={ 1 } val2={ 0 }>
  	<ProjectListing date={ "DEC 2020 - PRESENT" } page="/peaceThruPlay" title={ "Peace Through Play" } summary={ "A redesign of an organization’s website and mobile platform in Figma. Peace through Play is a Northeastern club dedicated to educating youth through engaging games, crafts, and other mediums." } >
  	  <div className="hov-img">
      <img className="projectPicture" src={ ptp_nohov } alt="peace through play logo" />
      <img className="projectPicture-hov" src={ ptp_hov } alt="peace through play logo" />
  	</div>
    </ProjectListing>
  	<ProjectListing date={ "JAN 2021 - PRESENT" } page="/roomPal" title={ "RoomPal" } summary={ "In Progress: A preliminary design of a mobile platform in Figma. Room Pal is a personal project intended to revolutionize the subleasing experience. " } >
  	 <div className="hov-img">
        <img className="projectPicture" src={ rp1 } alt="Room Pal's site on a phone" />
        <img className="projectPicture-hov" src={ rp2 } alt="post room" />
    </div>
  	</ProjectListing>
  	<ProjectListing date={ "NOV 2019 - SEP 2020" } page="/spaceFaster" title={ "SpaceFaster" } summary={ "A preliminary design of company’s branding and digital platforms. SpaceFaster, formerly Bondetous, is a startup to personalize the storage process. " } >
  	  <div className="hov-img">
        <img className="projectPicture" src={ bond1 } alt="SpaceFaster on a laptop" />
  	   <img className="projectPicture-hov" src={ bond2 } alt="hi linda" />
      </div>
    </ProjectListing>
  </ContentPage>

  )

export default UiUxDesignPage

// { children, date, title, summary, page }