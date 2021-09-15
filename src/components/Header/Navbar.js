import React, {useState, useEffect} from "react";

import "./Navbar.css";

import Logo from "../../assets/images/logo-dark.png";
import Close  from '../../assets/icons/close.svg';
import Menu  from '../../assets/icons/menu.svg';

const Navbar = (props) => {
    const [navbar, setNavbar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    //navbar scroll changeBackground function
    const changeBackground = () => {
        if (window.scrollY >= 88) {
        setNavbar(true)
        } else {
        setNavbar(false)
        }
    }

    const langClickHandler = () => {
      setIsOpen(false);
      props.onClickSwitcher();
    }

    // window.addEventListener('scroll', changeBackground);
    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    });
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
          <div className="link-item-container">
            <a href="javascript:void(0)" onClick={langClickHandler} className="link-item lang-switcher">
              {props.isEnglish ? 'عربي' : 'EN' }
            </a>
          </div>
        </div>
        <div className="menu-burger-icon" onClick={() => setIsOpen(true)}>
            <img src={Menu} alt="burger-menu" />
        </div>
      </div>
       {/* The overlay  */}
    <div id="myNav" className={isOpen ? 'overlay display-block' : 'overlay display-none'}>
         {/* Overlay content  */}
        <div className="content">
            <div className="block1"></div>
            <div className="block2 lato-black">
                 {/* Button to close the overlay navigation  */}
                <div onClick={() => setIsOpen(false)} className="closebtn"><img src={Close} alt="close-icon" /></div>
                <div className="side-menu-items-main-container">
                    <div className="side-menu-container">
                        <a href="" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                        <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
                        <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
                        <a href="#contact" onClick={() => setIsOpen(false)}>Contact us</a>
                        <a href="javascript:void(0)" onClick={langClickHandler} className="lang-switcher">{props.isEnglish ? 'عربي' : 'EN'}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </nav>
  );
};

export default Navbar;
