import PropTypes from "prop-types"
import React from "react"
import { navigate } from "gatsby"

import "./fonts.css"

const ProjectListing = ({ children, date, title, summary, page }) => (
  <button
    className="projectListing"
    onClick={() => {
      navigate(page)
    }}
    style={{
      marginTop: `8vh`,
      marginLeft: `30px`,
      marginRight: `30px`,
      marginBottom: `-45px`,
      width: `fit-to-content`
    }}
  >
  <div className="row"
  >
  <div className="col-sm-6" style={{
    textAlign: `right`,
    marginBottom: `2vh`
  }}>
  { children }
  </div>
  <div className="col-sm-3" style={{
    marginLeft: `6px`,
    marginRight: `10px`,
    textAlign: `left`
  }}>

  <span className="projectTitle"> 
  { title }
  </span>
  <span  className="projectListingText"
  style={{
    fontWeight: `100`,
    fontSize: `16px`,
    marginBottom: `10px`
  }}>
  { date }
  </span>

  <span className="projectListingText">
  { summary }
  </span>

  </div>
  </div>
  </button>
)

export default ProjectListing
