import PropTypes from "prop-types"
import React from "react"
import { navigate } from "gatsby"

import "./layout.scss"

const MyButton = ({ children, page }) => (
  <button
    onClick={() => {
      navigate(page)
    }}
    style={{
      width: `300px`,
      fontStyle: `light`,
      fontFamily: `Poppins`,
      fontWeight: 300,
      fontSize: 16,
      marginBottom: `0.7rem`,
      whiteSpace: `normal`,
      textAlign: `center`
    }}
    type="button" 
    className="btn btn-outline-dark"
  >
  {children}
  </button>
)

MyButton.propTypes = {
  content: PropTypes.string,
}

export default MyButton
