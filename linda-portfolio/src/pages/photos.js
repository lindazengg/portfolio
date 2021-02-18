import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MyButton from "../components/myButton"
import { navigate } from "gatsby"


import "../components/layout.scss"
import Photo from "../components/photo.js"
import foto1h from "../images/DSC_0025-edit.png"
import foto2h from "../images/DSC_0032-edit.png"
import foto3h from "../images/DSC_0035-edit.png"
import foto4h from "../images/DSC_0061-edit.png"
import foto5h from "../images/DSC_0084-edit.png"
import foto6h from "../images/DSC_0093-edit.png"
import foto1v from "../images/DSC_0266.jpg"
//import foto8h from "../images/DSC_0304.JPG"
//import foto9h from "../images/DSC_0424.JPG"
import foto2v from "../images/arthistory.jpg"

import replace from "../images/replace.jpg"
import replaceTall from "../images/replace-tall.jpg"
import "../components/fonts.scss"

const PhotosPage = () => (
  <Layout val={ 3 } >
  <div className="row" style={{paddingLeft: `2vw`}}>
  <div className="col-sm-7" id="photoCol">
        <Photo caption="Paraty">
        <img className="photo" src={ foto1h }/>
        </Photo>

        <Photo caption="Paraty">
        <img className="photo" src={ foto2h }/>
        </Photo>

       
        <Photo caption="boop">
        <img className="photo"  src={ foto4h }/>
        </Photo>

       
        

      </div>
      <div className="col-sm-5" id="photoCol">
        <Photo caption="Inspired by Art History">
        <img className="photo"  src={ foto2v }/>
        </Photo>
        <Photo caption=" Chinese New Year, NYC">
        <img className="photo" src={ foto1v }/>
        </Photo>
        <Photo caption="Paraty">
        <img className="photo"  src={ foto3h }/>
        </Photo>

        <Photo caption="boop">
        <img className="photo"  src={ foto5h }/>
        </Photo>

         
        <Photo caption="boop">
        <img className="photo"  src={ foto6h }/>
        </Photo>
      </div>
  </div>

  </Layout>
  )

export default PhotosPage