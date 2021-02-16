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

const Illustration = () => (
  <ContentPage2 val={ 2 } val2={ 1 }>
  <div className="col-sm-5" id="photoCol">
      <Photo caption="beep beep boop">
      <img className="photo" src={ replace }/>
      </Photo>
      <Photo caption="beep beep boop">
      <img className="photo" src={ replace }/>
      </Photo>
    </div>
    <div className="col-sm-4" id="photoCol">
      <Photo caption="beep beep boop">
      <img className="photo"  src={ replaceTall }/>
      </Photo>
      <Photo caption="beep beep boop">
      <img className="photo" src={ replaceTall }/>
      </Photo>
    </div>
  </ContentPage2>
  )

export default Illustration