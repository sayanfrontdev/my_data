import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React, { useState } from 'react';
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.png";


const AboutContent = () => {
    const [isImageClicked, setIsImageClicked] = useState(false);

    const handleImageClick = () => {
      setIsImageClicked(true);
  
      

      
    };
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a front-end developer.  I am a strong believer in clean code practices and maintainable software architecture. </p>
            <Link to="https://connect-me-three.vercel.app/">
                <button className="btn">Contact</button>
            </Link>

        </div>
        <div className="right">
      <div className={`img-container ${isImageClicked ? 'clicked' : ''}`}>
        <div className="img-stack top">
          <a href="https://github.com/sayanmanda" onClick={handleImageClick}>
            <img src={React1} className="img" alt="true" />
          </a>
        </div>
            <div className="img-stack bottom">
                <img src={React2}
                    className="img"
                    alt="true" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutContent