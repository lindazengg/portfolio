import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./layout.scss"
import filler from "../images/profile.gif"
import menu from "../images/menu.png"
import about1 from "../images/por.png"


const Header = ({ val }) => (
<nav className="navbar navbar-expand-xl" id="header">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <img src={ menu } alt="menu" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <div className="flex-column">
    <span
      style={{
        paddingleft:`3vh`,
        zIndex: `3`,
        paddingBottom: `5vh`,
        paddingTop: `9vh`,
        display: `block`,
        fontSize: `30px`,
        fontWeight: `500`,
        lineHeight: `27px`,
        letterSpacing: `0.3 em`,
        fontFamily: `Barrio`,
      }}>
      <Link
        to="/"
        className="headerName"
      >
          LINDA ZENG
      </Link>
    </span>

    <img src={ about1 } alt="linda zeng" style={{
      maxWidth: `15vh`,
      paddingBottom: `45px`
    }}
    />
    <br/>



    { val === 0 ?
      <div className="row" id="navlink_active">
      <Link
        className="navlink_active"
        to="/"
      >
        ABOUT
      </Link>
      </div>
    :
      <div className="row" id="navlink">
      <Link
        to="/"
        className="navlink"
      >
        ABOUT 
      </Link>
      </div>
    }


    { val === 1 ?

      <div className="row" id="navlink_active">
      <Link
        className="navlink_active"
        to="/uiux_design"
      >
        DESIGN
      </Link>
      </div>
    :

      <div className="row" id="navlink">
      <Link
        to="/uiux_design"
        className="navlink"
      >
        DESIGN
      </Link>
      </div>
    }

    { val === 2 ?

      <div className="row" id="navlink_active">
      <Link
        className="navlink_active"
        to="/painting"
      >
        ART
      </Link>
      </div>
    :

      <div className="row" id="navlink">
      <Link
        to="/painting"
        className="navlink"
      >
        ART
      </Link>
      </div>
    }

    { val === 3 ?


      <div className="row" id="navlink_active">
      <Link
        className="navlink_active"
        to="/photos"
      >
        PHOTOS
      </Link>
      </div>
    :
      <div className="row" id="navlink">
      <Link
        to="/photos"
        className="navlink"
      >
        PHOTOS
      </Link>
      </div>
    }






</div>
  </div>
</nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
