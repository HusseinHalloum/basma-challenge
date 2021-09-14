import React from 'react';

import './Footer.css';

import LightLogo from '../../assets/images/logo-light.png';
import Facebook from '../../assets/icons/facebook-filled.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Twitter from '../../assets/icons/twitter-original.svg';
import AngleRight from '../../assets/icons/angle-double-right.svg';
import AngleLeft from '../../assets/icons/angle-double-left.svg';


const Footer = () => {
    return (
        <footer className="contact-section" id="footer">
            <div className="main-container">
                <div className="inner-container">
                    <div className="widget widget-one">
                        <div className="logo-container">
                            <img src={LightLogo} alt="logo" />
                        </div>
                        <div className="text-container">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam nam</p>
                        </div>
                    </div>
                    <div className="widget widget-two">
                        <div className="footer-title-container">
                            <h5>About</h5>
                        </div>
                        <div className="links-container">
                            <a href="#about" className="link-item">
                                <div className="icon-container"><img src={AngleRight} alt="icon" /></div>
                                <p>About us</p>
                            </a>
                            <a href="#contact" className="link-item">
                                <div className="icon-container"><img src={AngleRight} alt="icon" /></div>
                                <p>Contact</p>
                            </a>
                            <a href="#portfolio" className="link-item">
                                <div className="icon-container"><img src={AngleRight} alt="icon" /></div>
                                <p>Portfolio</p>
                            </a>
                        </div>
                    </div>
                    <div className="widget widget-three">
                        <div className="footer-title-container">
                            <h5>Support</h5>
                        </div>
                        <div className="links-container">
                            <a href="mailto:support@example.com" className="link-item">
                                <div className="icon-container"><img src={AngleRight} alt="icon" /></div>
                                <p>support@example.com</p>
                            </a>
                            <a href="tel:+61383766284 " className="link-item">
                                <div className="icon-container"><img src={AngleRight} alt="icon" /></div>
                                <p>+61 3 8376 6284 </p>
                            </a>
                            <a href="#services" className="link-item">
                                <div className="icon-container"><img src={AngleRight} alt="icon" /></div>
                                <p>Services</p>
                            </a>
                        </div>
                    </div>
                    <div className="widget widget-four">
                    <div className="footer-title-container">
                            <h5>Follow us</h5>
                        </div>
                        <div className="links-container">
                            <a href="https://www.facebook.com" className="link-item">
                                <div className="icon-container"><img src={Facebook} alt="icon" className="sm-icon"/></div>
                                <p>Facebook</p>
                            </a>
                            <a href="https://www.twitter.com" className="link-item">
                                <div className="icon-container"><img src={Twitter} alt="icon" className="sm-icon" /></div>
                                <p>Twitter </p>
                            </a>
                            <a href="https://www.instagram.com" className="link-item">
                                <div className="icon-container"><img src={Instagram} alt="icon" className="sm-icon" /></div>
                                <p>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright"> Copyright &#169; All Right Reserved </div>
        </footer>
    )
}

export default Footer;

