import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MyButton from "../components/myButton"
import ContentPage2 from "../components/contentPage2.js"
import { navigate } from "gatsby"

import "../components/fonts.scss"
import "../components/layout.scss"
import Photo from "../components/photo.js"

import artd1 from "../Art/anna.png"
import artf1 from "../Art/blue-mount.jpg"
//import artf2 from "../Art/Bridge.JPG"
import artf3 from "../Art/emma.jpg"
import artd2 from "../Art/Lenore_0126.png"
import artd3 from "../Art/neon.png"
import artf4 from "../Art/olivia.jpg"
import artd4 from "../Art/owanari.png"
import artf5 from "../Art/sanjana.jpeg"
import artf6 from "../Art/Two.jpg"
import artf7 from "../Art/zeus.jpeg"

import replace from "../images/replace.jpg"
import replaceTall from "../images/replace-tall.jpg"

//painting is digital

const Painting = () => (
  <ContentPage2 val={ 2 } val2={ 0 }>
    <div className="col-sm-5" id="photoCol">
      <Photo caption="Anna">
      <img className="photo" src={ artd1 }/>
      </Photo>
      <Photo caption="Lenore">
      <img className="photo" src={ artd2 }/>
      </Photo>
    </div>
    <div className="col-sm-4" id="photoCol">
      <Photo caption="Owanari">
      <img className="photo"  src={ artd4 }/>
      </Photo>
      <Photo caption="Neon girl">
      <img className="photo" src={ artd3 }/>
      </Photo>
    </div>
  </ContentPage2>

  )

export default Painting