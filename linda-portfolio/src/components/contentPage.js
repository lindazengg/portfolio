import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import MyButton from "../components/myButton"
import { Link, navigate } from "gatsby"

import "./layout.scss"

const ContentPage = ({ children, val, val2}) => (
    <>
      <Layout val={ val }>
      <div className="row" style={{
        bottom: `0`
      }}>
      <div className="col-xl-3" style={{
        backgroundColor: `rgba(256, 256, 256, 0.6)`,
        top: `0`,
        zIndex: `10`,
        position: `sticky`,
        display: `block`,
        height: `fit-content`,
        paddingTop: `19vh`,
        paddingRight: `50px`,
        paddingLeft: `65px`
      }}>



        { val2 === 0 ? 
          <div className="row"  id="secondnav_link_active">
        <Link
          className="secondnav_link_active"
          to="/uiux_design"
        >
          UI/UX DESIGN
        </Link>
        </div>
      : 
        <div className="row" id="secondnav_link">
        <Link
          to="/uiux_design"
          className="secondnav_link"
        >
          UI/UX DESIGN
        </Link>
        </div>
      }

      { val2 === 1 ? 
        <div className="row" id="secondnav_link_active">
        <Link
          className="secondnav_link_active"
          to="/experienceDesign"
        >
          EXPERIENCE DESIGN
        </Link>
        </div>
      : 
        <div className="row" id="secondnav_link">
        <Link
          to="/experienceDesign"
          className="secondnav_link"
        >
          EXPERIENCE DESIGN
        </Link>
        </div>
      }
      </div>
      <div className="col">
      { children }
      </div>
      </div>
      </Layout>
    </>
  )

export default ContentPage