import { FaDiscord, FaFacebook, FaGithub, FaHackerrank, FaHome, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhone, FaTwitter  } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
<div className="left">
<div className="location">
    <a href="https://www.google.com/maps?q=Kolkata+700152+West+Bengal+India" target="_blank">
        <FaLocationArrow size={15} style={{color:"#fff", marginRight: "2rem"}}/>
        <div>
            <p>Kolkata 700152</p>
            <p>West Bengal</p>
            <p>India.</p>
        </div>
    </a>
</div>

    <div className="phone">
    <h4>
        <a href="tel:+916294513408">
            <FaPhone size={15} style={{color:"#fff", marginRight: "2rem"}}/>
            +91 6294513408
        </a>
    </h4>
</div>

    <div className="email">
    <h4>
        <a href="mailto:sayanmanda1922001@gmail.com">
            <FaMailBulk size={15} style={{color:"#fff", marginRight: "2rem"}}/>
            sayanmanda1922001@gmail.com
        </a>
    </h4>
</div>
        
</div>
<div className="right">
    <h1>About Me</h1>
    <p>I am an ambitious individual who is looking to broaden my career path. 
    My background lays mostly in analyzing and solving critical situations. </p>
    <div className="social">
    <a href="https://www.facebook.com/profile.php?id=100038789199924&mibextid=ZbWKwL" target="_blank">
      <FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} />
    </a>
    <a href="https://instagram.com/sayanmandal0009?igshid=NGExMmI2YTkyZg==" target="_blank">
      <FaInstagram size={30} style={{ color: "#fff", marginRight: "2rem" }} />
    </a>
    <a href="https://twitter.com/SayanMa11753671" target="_blank">
      <FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }} />
    </a>
    <a href="https://www.linkedin.com/in/sayan-mandal-b07283204/" target="_blank">
      <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
    </a> 
    
    <a href="https://github.com/sayanmanda" target="_blank">
      <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
    </a>
    <a href="https://discord.gg/pAbxnrCN" target="_blank">
      <FaDiscord size={30} style={{ color: "#fff", marginRight: "2rem" }} />
    </a>
   
    {/* <a href="https://www.hackerrank.com/profile/sayanmanda192201" target="_blank">
      <FaHackerrank size={30} style={{ color: "#fff", marginRight: "2rem" }} />
    </a>
     */}
    </div>
</div>
        </div>
    </div>
  )
}

export default Footer