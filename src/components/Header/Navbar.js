import React, {useState, useEffect} from "react";

import "./Navbar.css";

import Logo from "../../assets/images/logo-dark.png";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    //navbar scroll changeBackground function
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 88) {
        setNavbar(true)
        } else {
        setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    })
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links-container">
          <div className="link-item-container">
            <a href="#" className="link-item">
              Home
            </a>
          </div>
          <div className="link-item-container">
            <a href="#about" className="link-item">
              About
            </a>
          </div>
          <div className="link-item-container">
            <a href="#services" className="link-item">
              Services
            </a>
          </div>
          <div className="link-item-container">
            <a href="#portfolio" className="link-item">
              Portfolio
            </a>
          </div>
          <div className="link-item-container">
            <a href="#pricing" className="link-item">
              Pricing
            </a>
          </div>
          <div className="link-item-container">
            <a href="#contact" className="link-item">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
