import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./layout.scss"


const Header = ({ val }) => (
  <header
    style={{
      top:`0`,
      position: `sticky`,
      zIndex: `3`,
      margin: `0 auto`,
      paddingTop: `3vh`,
      marginLeft: `5vw`,
      marginRight: `5vw`,
      backgroundColor: `rgba(256, 256, 256, 0.8)`
    }}
  >

  <div className="row" style={{
    margin: `0 auto`
  }}>

    <div className="col" style={{
      paddingBottom: `10px`
    }}>

      <span 
        style={{
          left:`3vh`,
          zIndex: `3`,
          padding: `0 1.0875rem`,
          fontSize: `18px`,
          fontFamily: `Roboto`,
          fontWeight: `500`,
          lineHeight: `21px`,
          letterSpacing: `0.325em`
        }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: `#541313`,
            fontWeight: `900`,
            letterSpacing: `0.55em`,
            minHeight: `200px`
          }}
        >
            LINDA ZENG
        </Link>
      </span>



    </div>
    <div className="col" style={{
      textAlign: `right`,
      paddingBottom: `10px`
    }}>


      <span 
      style={{
        right: `-10px`,
        padding: `0 1.0875rem`,
        fontSize: `18px`,
        fontFamily: `Roboto`,
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

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



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

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
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

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          
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

    </div>


  </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
