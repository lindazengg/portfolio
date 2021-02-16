import PropTypes from "prop-types"
import React from "react"

import "./layout.scss"

const Photo = ({ children, caption}) => (
  <div className="photoClass">
  {children}
  <span className="caption">
  { caption }
  </span>
  </div>
)

export default Photo
