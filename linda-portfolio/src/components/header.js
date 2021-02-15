import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./layout.scss"
import filler from "../images/filler.jpg"


const Header = ({ val }) => (
  <header>
      <span 
        style={{
          left:`3vh`,
          zIndex: `3`,
          padding: `0 1.0875rem`,
          fontSize: `18px`,
          fontWeight: `500`,
          lineHeight: `21px`,
          letterSpacing: `0.325em`
        }}>
        <Link
          to="/"
          className="headerName"
        >
            LINDA ZENG
        </Link>
      </span>
      <br/>

      <img src={ filler } alt="linda zeng" style={{
        maxWidth: `15vh`,
        paddingBottom: `40px`
      }}
      />

      <br/>

      <span 
      style={{
        fontSize: `18px`,
        fontWeight: `500`,
        lineHeight: `21px`,
        letterSpacing: `0.065em`
      }}>


      { val === 0 ? 

        <Link
          className="navlink_active"
          to="/"
        >
          HOME
        </Link>
      : 
        <Link
          to="/"
          className="navlink"
        >
          HOME
        </Link>
      }

      <br/>


      { val === 1 ? 

        <Link
          className="navlink_active"
          to="/uiux_design"
        >
          DESIGN
        </Link>
      : 
        <Link
          to="/uiux_design"
          className="navlink"
        >
          DESIGN
        </Link>
      }

      <br/>
    
      { val === 2 ? 

        <Link
          className="navlink_active"
          to="/art"
        >
          ART
        </Link>
      : 
        <Link
          to="/art"
          className="navlink"
        >
          ART
        </Link>
      }

      <br/>
          
      { val === 3 ? 

        <Link
          className="navlink_active"
          to="/photos"
        >
          PHOTOS
        </Link>
      : 
        <Link
          to="/photos"
          className="navlink"
        >
          PHOTOS
        </Link>
      }

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        


      </span>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
