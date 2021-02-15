import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"

import about from "../images/about.png"
import "../components/fonts.css"

const IndexPage = () => (
  <Layout val={ 0 }>
  <div className="row justify-content-center">

  <div className="col" style={{
    textAlign: `center`
  }} >
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
    textAlign: `center`
  }}> 
  <img src={about} alt="linda carryig a big sausage" />
  </div>
  </div>

  <div className="row" style={{
      paddingTop: `5vh`,
      paddingBottom: `2vh`,
      bottom: `0`,
      textAlign: `center`
  }}>
  <div className="col">
  <MyButton>
  EMAIL
  </MyButton>
  </div>
  <div className="col">
  <MyButton>
  RESUME
  </MyButton>
  </div>
  <div className="col">
  <MyButton>
  LINKEDIN
  </MyButton>
  </div>
  </div>
  </Layout>

  )

export default IndexPage