import React from "react";
import ProjectImage from "../img/img-05.jpg";
import ImageSlider from "../components/ImageSlider";
import logo from "../img/logo.png";

//Content
import Designer from "../components/Designer";
import FullstackDeveloper from "../components/FullstackDeveloper";
import WorkExperience from "../components/WorkExperience";

const Services = () => {
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
        <div className="blockade-projects"></div>
        <div className="sub-headline-top-projects">
          <h5>
            SE<span className="dash">RVICES</span>
          </h5>
        </div>

        <div className="sub-headline-bottom">
          <h5>Love the hustle.</h5>
        </div>
      </div>
      <div id="main-window">
        <div className="skills">
          <Designer />
          <div className="line-divider"></div>
          <FullstackDeveloper />
          <div className="line-divider"></div>
          <WorkExperience />
        </div>
        {/* <div className="skills-img">
          <img src={ProjectImage} />
        </div> */}
      </div>
      <div id="footer">
        <div className="sub-text">
          <p>&#169; 2021 ALEXALBARAN.</p>
          <p>All Right Reserved.</p>
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

export default Services;
