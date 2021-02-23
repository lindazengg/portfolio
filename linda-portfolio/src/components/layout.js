import React from "react"

import Header from "../components/header"
import MyButton from "../components/myButton"
import { withPrefix, Link, navigate } from "gatsby"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"
import email from "../images/emailicon.png"
import resume from "../images/resumeicon.png"
import linkedin from "../images/linkedin.png"

const Layout = ({ children, val }) => (
    <>
      <div className="row" id="site" style={{maxWidth: `100vw`}}>
      <div className="col-xl-2" id="header" style={{
      top:`0`,
      position: `sticky`,
      display: `block`,
      overflowWrap: `anywhere`,
      height: `fit-content`,
      paddingLeft: `3vw`,
      paddingRight: `3vw`
    }}>
      <Header val={ val } />
      </div>
      <div className="col">
      { children }
      </div>

      <div className="col-xl-2">
      <div style={{
        textAlign: `center`,
        paddingRight: `2vh`,
        paddingTop: `9vh`,
        paddingBottom: `6vh`,
        top: `0`,
        position: `sticky`
      }}>
      <div style={{display: `inline-block`, textAlign: `left`}}>
      <div className="row">
        <a className="iconlinks" href="mailto: zeng.lin@northeastern.edu">
        <img src={ email } alt="Email icon" /> 
        <span className="iconlinktext"> EMAIL </span>
        </a>
        </div>
        <div className="row">
        <a className="iconlinks" href="https://drive.google.com/file/d/16o3Gfz9rwz1GUQabfSXXM4ejD9LjTxUl/view?usp=sharing">
         <img src={ resume } alt="Resume icon" /> 
        <span className="iconlinktext"> RESUME </span>
         </a>
         </div>
         <div className="row">
        <a className="iconlinks" href="https://www.linkedin.com/in/linda-zeng-3809b318b/">
         <img src={ linkedin } alt="Linkedin icon" /> 
        <span className="iconlinktext"> LINKEDIN </span>
         </a>
         </div>
         </div>
         </div>
      </div>
      </div>
    </>
  )

export default Layout