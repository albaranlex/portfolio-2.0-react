import React from "react";
import landingImage from "../img/img-02.jpg";
import ImageSlider from "../components/ImageSlider";
import logo from "../img/logo.png";

const Landing = () => {
  return (
    <div id="gen-layout">
      <div id="left">
        <div className="logo-top">
          <img src={logo}></img>
        </div>
        <div className="logo-bottom">
          <h5>
            ALEX<span className="logo-highlight">ALBARAN</span>
          </h5>
        </div>
        <div className="blockade-landing"></div>
        <div className="sub-headline-top-landing">
          <h5>
            M<span className="dash">AIN</span>
          </h5>
        </div>
        <div className="headline-main">
          <h1>Design Symmetry. Reduced Clutter. Better UXperience.</h1>
        </div>

        <div className="sub-headline-bottom">
          <h5>About</h5>
        </div>
      </div>
      <div id="main-window">
        <img src={landingImage} alt="" />
      </div>
      <div id="footer">
        <div className="sub-text">
          <p>
            In a world of rush and chaos, we are in constant search for
            something still and perfect. After all, even a tower block that once
            seemed drab and ugly, can, if photographed in the right way, be
            transformed to a thing of beauty.
          </p>
        </div>
        <div className="photo-slider-window">
          <ImageSlider />
        </div>
        <div className="photo-slider-caption">
          <p>FEAUTRUED PROJECTS</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
