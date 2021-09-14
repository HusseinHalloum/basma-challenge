import React from "react";

import "./Banner.css";
import ButtonFilled from "../UI/ButtonFilled";
import ButtonOutline from "../UI/ButtonOutline";

import BannerImage from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-main-container">
        <div className="banner-inner-container">
          <div className="banner-title-container">
            <h5>WELCOME TO OYA</h5>
            <h2><span className="text-with-stroke uppercase">A DIGITAL</span></h2>
            <h2><span className="text-with-stroke uppercase">AGENCY</span></h2>
            <ButtonFilled value="Get Started" />
            <ButtonOutline value="Get Started" />
          </div>
          <div className="banner-image-container">
            <img src={BannerImage} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
