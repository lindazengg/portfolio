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
      <div className="col" style={{
        top: `0`,
        zIndex: `5`,
        position: `sticky`,
        display: `block`,
        height: `fit-content`,
        paddingTop: `8vh`,
        marginRight: `50px`,
        marginLeft: `50px`
      }}>



        { val2 === 0 ? 
        <Link
          className="secondnav_link_active"
          to="/"
        >
          UI/UX DESIGN
        </Link>
      : 
        <Link
          to="/"
          className="secondnav_link"
        >
          UI/UX DESIGN
        </Link>
      }
      <br/>

      { val2 === 1 ? 
        <Link
          className="secondnav_link_active"
          to="/"
        >
          EXPERIENCE DESIGN
        </Link>
      : 
        <Link
          to="/"
          className="secondnav_link"
        >
          EXPERIENCE DESIGN
        </Link>
      }
      </div>
      <div className="col-10" style={{
        padding: `50px`
      }}>
      { children }
      </div>
      </div>
      </Layout>
    </>
  )

export default ContentPage