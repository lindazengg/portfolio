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
      marginBottom: `25px`
    }}
  >
  <div className="row">
  <div className="col-md-4" style={{
    textAlign: `left`,
    marginLeft: `15px`,
    marginBottom: `20px`
  }}>
  { children }
  </div>
  <div className="col" style={{
    marginLeft: `10px`,
    marginRight: `10px`
  }}>

  <div className="row" style={{
    alignItems: `baseline`,
    marginBottom: `-5px`
  }}>
  <div className="col"  style={{
    textAlign: `left`,
    marginBottom: `-30px`
  }}>
  <span className="projectTitle"> 
  { title }
  </span>
  </div>

  <div className="col-md-4" style={{
    textAlign: `left`,
    marginBottom: `20px`,
    fontWeight: `100`,
    fontSize: `16px`
  }}>
  { date }
  </div>
  </div>

  <div className="row" style={{
    alignItems: `flex-end`,
    marginBottom: `-45px`
  }} >
  <div className="col">
  <p className="projectText">
  { summary }
  </p>
  </div>
  </div>

  </div>
  </div>
  </button>
)

export default ProjectListing
