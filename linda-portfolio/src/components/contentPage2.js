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
        backgroundColor: `rgba(244, 244, 199, 0.6)`,
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
          DIGITAL
        </Link>
        </div>
      :
       <div className="row"  id="secondnav_link">
        <Link
          to="/painting"
          className="secondnav_link"
        >
          DIGITAL
        </Link>
        </div>
      }

      { val2 === 1 ?
        <div className="row"  id="secondnav_link_active">
        <Link
          className="secondnav_link_active"
          to="/illustration"
        >
          FINE ARTS
        </Link>
        </div>
      :
       <div className="row"  id="secondnav_link">
        <Link
          to="/illustration"
          className="secondnav_link"
        >
          FINE ARTS
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