import "./HeroImgStyles.css";


import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>There is no such thing as a boring project.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:e36352bc-ab2d-377a-98b0-b995bf076dcc"
            className="btn">Download CV
            </Link>
            <Link to="https://sayanmanda.github.io/contact_me/"
            className="btn btn-light">Contact 
            </Link>
        </div>
    </div>
  </div>
  
}

export default HeroImg;