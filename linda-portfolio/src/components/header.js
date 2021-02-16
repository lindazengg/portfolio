import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./layout.scss"
import filler from "../images/filler.jpg"
import menu from "../images/menu.png"


const Header = ({ val }) => (
<nav className="navbar navbar-expand-xl" id="header">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <img src={ menu } alt="menu" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <div className="flex-column">
    <span
      style={{
        left:`3vh`,
        zIndex: `3`,
        paddingBottom: `5vh`,
        paddingTop: `4vh`,
        display: `block`,
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
        to="/painting"
      >
        ART
      </Link>
    :
      <Link
        to="/painting"
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
