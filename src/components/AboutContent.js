import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react'
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.png";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react front-end developer.  I am a strong believer in clean code practices and maintainable software architecture. </p>
            <Link to="https://connect-sayan.netlify.app/">
                <button className="btn">Contact</button>
            </Link>

        </div>
        <div className="right">
        <div className="img-container">
            <div className="img-stack top">
            <a href="https://github.com/sayanmanda">
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