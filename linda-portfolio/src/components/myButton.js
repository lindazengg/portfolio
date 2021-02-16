import PropTypes from "prop-types"
import React from "react"
import { navigate } from "gatsby"

import "./layout.scss"

const MyButton = ({ children, page }) => (
  <button
    onClick={() => {
      navigate(page)
    }}
    type="button" 
    className="btn"
  >
  {children}
  </button>
)

MyButton.propTypes = {
  content: PropTypes.string,
}

export default MyButton
