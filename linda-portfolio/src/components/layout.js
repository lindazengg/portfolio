import React from "react"

import Header from "../components/header"
import MyButton from "../components/myButton"
import { withPrefix, Link, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"

const Layout = ({ children, val }) => (
    <>
      <Helmet><script
                        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossOrigin="anonymous"
                      ></script>
                      <script
                        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                        crossOrigin="anonymous"
                      ></script>
                      <script
                        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossOrigin="anonymous"
                      ></script>
                      <link
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                      />
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