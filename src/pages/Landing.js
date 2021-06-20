import React from "react";
import thumbnail from "../img/img-03.jpg";
import LandingImage from "../img/img-02.jpg";
import ImageSlider from "../components/ImageSlider";

const Landing = () => {
  return (
    <div id="gen-layout">
      <div id="left">
        <div className="blockade-landing"></div>
        <div className="sub-headline-top-landing">
          <h5>
            M<span className="dash">AIN</span>
          </h5>
        </div>
        <div className="headline-main">
          <h1>SYMMETRY IN DESIGNS AND CODE.</h1>
        </div>

        <div className="sub-headline-bottom">
          <h5>About</h5>
        </div>
      </div>
      <div id="main-window">
        <img src={LandingImage} alt="" />
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
