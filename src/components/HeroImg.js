import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>There is no such thing as a boring project.</p>
        <h1>Frontend Developer.</h1>
        <div>
          <a download href={require("../assets/Sayan-CV.pdf")} className="btn">Download CV</a>
          
          <Link to="https://connect-me-three.vercel.app/" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
