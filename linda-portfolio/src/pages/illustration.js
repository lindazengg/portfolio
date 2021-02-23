import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MyButton from "../components/myButton"
import ContentPage2 from "../components/contentPage2.js"
import { navigate } from "gatsby"

import "../components/layout.scss"
import Photo from "../components/photo.js"
import replace from "../images/replace.jpg"
import replaceTall from "../images/replace-tall.jpg"
import "../components/fonts.scss"


import artf1 from "../Art/blue-mount.jpg"
import artf2 from "../Art/Bridge.png"
import artf3 from "../Art/emma.jpg"
import artf4 from "../Art/olivia.jpg"
import artd4 from "../Art/owanari.png"
import artf5 from "../Art/sanjana.jpeg"
import artf6 from "../Art/Two.jpg"
import artf7 from "../Art/zeus.jpeg"

const Illustration = () => (
  <ContentPage2 val={ 2 } val2={ 1 }>
  <div className="col-sm-5" id="photoCol">
      <Photo caption="Olivia and Mina">
      <img className="photo" src={ artf4 }/>
      </Photo>
      <Photo caption="Lenore and Mina">
      <img className="photo" src={ artf6 }/>
      </Photo>
      <Photo caption="Bridge">
      <img className="photo" src={ artf2 }/>
      </Photo>
    </div>
    <div className="col-sm-4" id="photoCol">
      <Photo caption="Emma">
      <img className="photo" src={ artf3 }/>
      </Photo>

      <Photo caption="Blue Mountains">
      <img className="photo" src={ artf1 }/>
      </Photo>

      <Photo caption="Sanjana">
      <img className="photo"  src={ artf5 }/>
      </Photo>
    </div>
  </ContentPage2>
  )

export default Illustration