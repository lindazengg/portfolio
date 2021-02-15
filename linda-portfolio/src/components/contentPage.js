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
        bottom: `0`, 
        position: `sticky`,
        alignSelf: `end`,
        marginRight: `50px`,
        marginLeft: `10px`
      }}>



        { val2 === 0 ? 
        <Link
          className="secondnav_link_active"
          to="/"
        >
          UI/UX Design
        </Link>
      : 
        <Link
          to="/"
          className="secondnav_link"
        >
          UI/UX Design
        </Link>
      }
      <br/>

      { val2 === 1 ? 
        <Link
          className="secondnav_link_active"
          to="/"
        >
          Experience Design
        </Link>
      : 
        <Link
          to="/"
          className="secondnav_link"
        >
          Experience Design
        </Link>
      }
      </div>
      <div className="col-10">
      { children }
      </div>
      </div>
      </Layout>
    </>
  )

export default ContentPage