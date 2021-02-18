import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import MyButton from "../components/myButton"
import { Link, navigate } from "gatsby"

import "./layout.scss"

const ContentPage2 = ({ children, val, val2}) => (
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
          to="/painting"
        >
          PAINTING
        </Link>
        </div>
      :
       <div className="row"  id="secondnav_link">
        <Link
          to="/painting"
          className="secondnav_link"
        >
          PAINTING
        </Link>
        </div>
      }

      { val2 === 1 ?
        <div className="row"  id="secondnav_link_active">
        <Link
          className="secondnav_link_active"
          to="/illustration"
        >
          ILLUSTRATION
        </Link>
        </div>
      :
       <div className="row"  id="secondnav_link">
        <Link
          to="/illustration"
          className="secondnav_link"
        >
          ILLUSTRATION
        </Link>
        </div>
      }

      { val2 === 2 ?
        <div className="row"  id="secondnav_link_active">
        <Link
          className="secondnav_link_active"
          to="/sketches"
        >
          SKETCHES
        </Link>
        </div>
      :
      <div className="row"  id="secondnav_link">
        <Link
          to="/sketches"
          className="secondnav_link"
        >
          SKETCHES
        </Link>
        </div>
      }
      </div>
      { children }
      </div>
      </Layout>
    </>
  )

export default ContentPage2