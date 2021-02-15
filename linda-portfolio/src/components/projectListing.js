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
      marginBottom: `35px`
    }}
  >
  <div className="row">
  <div className="col-md" style={{
    textAlign: `right`,
    width: `35vw`
  }}>
  { children }
  </div>
  <div className="col" style={{
    marginLeft: `10px`,
    marginRight: `10px`,
    width: `10vw`
  }}>

  <div className="row" style={{
    alignItems: `baseline`
  }}>
  <span className="projectTitle"> 
  { title }
  </span>
  <span style={{
    textAlign: `left`,
    marginBottom: `20px`,
    fontWeight: `100`,
    fontSize: `16px`
  }}>
  { date }
  </span>
  </div>

  <div className="row" style={{
    alignItems: `flex-end`,
    marginBottom: `-45px`
  }} >
  <div className="col">
  <span className="projectText">
  { summary }
  </span>
  </div>
  </div>

  </div>
  </div>
  </button>
)

export default ProjectListing
