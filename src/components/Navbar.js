import { Link } from "react-router-dom"
import "./NavbarStyles.css"

import React, { useState } from 'react'
import{FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handelClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
            setColor(true);

        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>WebCraft</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            {/* <li>
                <Link to="/login-signup" className="btn">Log-in/Sign-Up</Link>  // This button is not working
            </li> */}
            
        </ul>
        <div className="hamburger" onClick={handelClick}>
        {click ? (
            <FaTimes size={20} style={{color: "#9fff"}
            }/>
            )  :(

            
            <FaBars size={20} style={{color: "#9fff"}
            }/>
            )}
        </div>
    </div>
  );
};

export default Navbar;