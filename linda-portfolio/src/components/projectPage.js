import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import MyButton from "../components/myButton"
import backArrow from "../images/backarrow.png"
import { Link, navigate } from "gatsby"

import "./layout.scss"

const ProjectPage = ({ children, val, backPage, projectTitle, projectText}) => (
    <>
      <Layout val={ val }>
      <div className="row" style={{
        paddingTop: `8vh`,
        marginLeft: `3vh`,
        marginRight: `3vh`
      }}>
      <div className="col-md-2" style={{

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
      </span>
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

export default ProjectPage