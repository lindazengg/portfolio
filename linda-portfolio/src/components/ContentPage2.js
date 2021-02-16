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
      <div className="col-xl-2" style={{
        backgroundColor: `rgba(256, 256, 256, 0.6)`,
        top: `0`,
        zIndex: `10`,
        position: `sticky`,
        display: `block`,
        height: `fit-content`,
        paddingTop: `19vh`,
        paddingRight: `50px`,
        paddingLeft: `50px`
      }}>



        { val2 === 0 ?
        <Link
          className="secondnav_link_active"
          to="/painting"
        >
          PAINTING
        </Link>
      :
        <Link
          to="/painting"
          className="secondnav_link"
        >
          PAINTING
        </Link>
      }
      <br/>

      { val2 === 1 ?
        <Link
          className="secondnav_link_active"
          to="/illustration"
        >
          ILLUSTRATION
        </Link>
      :
        <Link
          to="/illustration"
          className="secondnav_link"
        >
          ILLUSTRATION
        </Link>
      }
      <br/>

      { val2 === 2 ?
        <Link
          className="secondnav_link_active"
          to="/sketches"
        >
          SKETCHES
        </Link>
      :
        <Link
          to="/sketches"
          className="secondnav_link"
        >
          SKETCHES
        </Link>
      }
      </div>
      { children }
      </div>
      </Layout>
    </>
  )

export default ContentPage2