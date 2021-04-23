import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"

import about from "../images/about.png"
import about1 from "../images/por.png"
import filler from "../images/profile.gif"

import "../components/fonts.scss"

const IndexPage = () => (
  <Layout val={ 0 }>

  <div className="row">
  <div className="col-1">
  </div>
  <div className="col">

  <div className="row" style= {{
    paddingTop: `10vh`
    
  }}>

  <div className="col-md" style={{
  }}>
  <span className="primary">
  Bronx-born,<br/>
  Boston-based.
  </span>
  </div>
  </div>

  

  <div className="col-sm-8">
  <span className="text">
  Hello, I am Linda Zeng. I’m a student studying Experience Design at Northeastern University. Originally a civil engineering student, I found that I wanted to impact society outside of the built environment. I am greatly interested in engaging and developing different solutions that can benefit many aspects of society.
  </span>
  

 
  </div>

  </div>
 <div className="col-sm-5"

    
 >

<div className="row"
style={{
      textAlign: `center`,
      paddingTop:`10vh`,
      paddingLeft:`40px`,
      paddingRight:`5px`
    }}

>

  <img style={{
    width: `100%`
  }}
  src={filler} alt="linda's picture" />
</div>
 </div>

  </div>
  </Layout>

  )

export default IndexPage