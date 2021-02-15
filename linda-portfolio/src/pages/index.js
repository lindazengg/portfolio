import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"

import about from "../images/about.png"
import "../components/fonts.css"

const IndexPage = () => (
  <Layout val={ 0 }>
  <div className="row justify-content-center" style= {{
    paddingTop: `6vh`
  }}>

  <div className="col-md-5" style={{
  paddingLeft: `20vh`
  }}>
  <div>
  <span className="primary">
  Bronx-born,
  Boston-based.
  </span>

  <p className="text">
  Hello, I am Linda Zeng. I’m a student studying Experience Design at Northeastern University. Originally a civil engineering student, I found that I wanted to impact society outside of the built environment. I am greatly interested in engaging and developing different solutions that can benefit many aspects of society.
  </p>

  </div>
  </div>
  <div className="col" style={{
  }}> 
  <img src={about} alt="linda carryig a big sausage" />
  </div>
  </div>
  </Layout>

  )

export default IndexPage