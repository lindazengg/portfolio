import React from "react"

import Header from "../components/header"
import MyButton from "../components/myButton"
import { withPrefix, Link, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"

const Layout = ({ children, val }) => (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </Helmet>
      <div className="row">
      <div className="col-xl-2" id="header" style={{
      top:`0`,
      position: `sticky`,
      display: `block`,
      overflowWrap: `anywhere`,
      height: `fit-content`,
      paddingTop: `3vh`,
      paddingLeft: `3vw`,
      paddingRight: `3vw`
    }}>
      <Header val={ val } />
      </div>
      <div className="col">
      { children }
      </div>

      <div className="col-xl-1">
        contact icon
        <br/>
        email icon
        <br />
        linkedin icon
      </div>
      </div>
       <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Cantarell:wght@700&family=Hammersmith+One&family=Maven+Pro:wght@400;900&family=Miriam+Libre:wght@400&family=Poppins:wght@200&display=swap" rel="stylesheet"/>
      </Helmet>
    </>
  )

export default Layout