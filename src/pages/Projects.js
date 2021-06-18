import React from "react";
import thumbnail from "../img/img-03.jpg";
import ProjectImage from "../img/img-04.jpg";

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
        <div className="next-image-window">
          <img src={thumbnail} alt="" id="thumbnail" />
        </div>
        <div className="next-image-text">
          <p>
            <span id="img-number">01</span> YOUTUBE CLONE
          </p>
        </div>
        <div className="slide-buttons">
          <span>
            {" "}
            <p>&lt; </p>
          </span>
          <span>
            <p> &gt; </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
