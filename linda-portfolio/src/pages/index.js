import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"

import about from "../images/about.png"
import "../components/fonts.css"

const IndexPage = () => (
  <Layout val={ 0 }>
  <div className="row" style= {{
    paddingTop: `7vh`,
    paddingLeft: `6vh`
  }}>

  <div className="col-md" style={{
  }}>
  <span className="primary">
  Bronx-born,<br/>
  Boston-based.
  </span>
  </div>
  </div>

  <div className="row" style={{
    marginLeft: `20vw`,
    marginRight: `1vw`
  }}>

  <div className="col-sm-4">
  <span className="text">
  Hello, I am Linda Zeng. I’m a student studying Experience Design at Northeastern University. Originally a civil engineering student, I found that I wanted to impact society outside of the built environment. I am greatly interested in engaging and developing different solutions that can benefit many aspects of society.
  </span>
  </div>

  <div className="col-sm-5">
  <img style={{
    width: `100%`
  }}
  src={about} alt="linda carrying a big sausage" />

  </div>
  </div>
  </Layout>

  )

export default IndexPage