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
      <div className="col-md-2" id="header" style={{
      top:`0`,
      position: `sticky`,
      display: `block`,
      overflowWrap: `anywhere`,
      height: `100vh`,
      paddingTop: `3vh`,
      paddingLeft: `3vw`,
      paddingRight: `3vw`
    }}>
      <Header val={ val } />
      </div>
      <div className="col">
      { children }
      </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Cantarell:wght@700&family=Hammersmith+One&family=Maven+Pro:wght@400;900&family=Miriam+Libre:wght@700&family=Poppins:wght@200&display=swap" rel="stylesheet"/>
      </Helmet>
    </>
  )

export default Layout