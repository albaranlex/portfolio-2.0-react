import React from "react";
import ProjectImage from "../img/img-05.jpg";
import ImageSlider from "../components/ImageSlider";

const Projects = () => {
  return (
    <div id="gen-layout">
      <div id="left">
        <div className="blockade-projects"></div>
        <div className="sub-headline-top-projects">
          <h5>
            PR<span className="dash">OJECTS</span>
          </h5>
        </div>
        <div className="headline-main">
          <h1>LET'S TALK HOW MY SERVICES COULD BENEFIT YOU</h1>
        </div>

        <div className="sub-headline-bottom">
          <h5>About</h5>
        </div>
      </div>
      <div id="main-window">
        <img src={ProjectImage} alt="" />
      </div>
      <div id="footer">
        <div className="sub-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            qui aliquam doloribus perferendis, eligendi laborum harum neque
            dolorum iure dolorem provident odio illum est! In, incidunt maxime?
            Doloremque, ipsam minus!
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

export default Projects;
