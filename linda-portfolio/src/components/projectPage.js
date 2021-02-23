import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import MyButton from "../components/myButton"
import backArrow from "../images/backarrow.png"
import { Link, navigate } from "gatsby"

import "./layout.scss"

const ProjectPage = ({ children, val, backPage, projectTitle, projectText, projectText2, projectText3}) => (
    <>
      <Layout val={ val }>
      <div className="row" style={{
        paddingTop: `8vh`,
        marginLeft: `3vh`,
        marginRight: `3vh`
      }}>
      <div className="col-sm-3" style={{

      }}>
      <a
      onClick={() => {
        navigate(backPage)
      }}
      className="back"
      >
      <img src={ backArrow } alt="back arrow" />
      </a>
      <span className="projectTitle">
      { projectTitle }
      </span>
      <br/>
      <span className="projectText">
      { projectText }
      <br/>
      <br/>
      { projectText2 }
      <br/>
      <br/>
      { projectText3 }

      </span>
      </div>
      <div className="col-8" style={{
        paddingLeft: `50px`,
        paddingRight: `50px`,
        paddingBottom: `50px`,
        paddingTop: `5vh`
      }}>
      { children }
      </div>
      </div>
      </Layout>
    </>
  )

export default ProjectPage