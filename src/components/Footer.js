import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter  } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
<div className="left">
    <div className="location">
        <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
        <div>
            <p>Abash 721102</p>
            <p>West Bengal</p>
            <p>India.</p>
            
        </div>
        
    </div>
    <div className="phone">
   <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
        +91 6294513408
    </h4>
    </div>
    <div className="email">
   <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
        sayanmanda1922001@gmail.com
    </h4>
    </div>
        
</div>
<div className="right">
    <h1>About Me</h1>
    <p>I am an ambitious individual who is looking to broaden my career path. My background lays mostly in analyzing and solving critical situations. </p>
    <div className="social">
    <a href="https://www.facebook.com/profile.php?id=100038789199924&mibextid=ZbWKwL" target="_blank">
      <FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} />
    </a>
    <a href="https://twitter.com/SayanMa11753671" target="_blank">
      <FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }} />
    </a>
    <a href="https://www.linkedin.com/in/sayan-mandal-b07283204/" target="_blank">
      <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
    </a>
    
    </div>
</div>
        </div>
    </div>
  )
}

export default Footer