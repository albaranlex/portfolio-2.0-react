import React from "react";
import thumbnail from "../img/img-03.jpg";
import MainImage from "../img/img-02.jpg";

const Landing = () => {
  return (
    <div id="gen-layout">
      <div id="left">
        <div className="menu">
          <h3>X</h3>
        </div>
        <div className="headline-main">
          <h1>Hey there, I'm Alex and I'm a Junior Developer</h1>
        </div>

        <div className="sub-headline">
          <h5>About</h5>
        </div>
      </div>
      <div id="main-window">
        <img src={MainImage} alt="" />
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

export default Landing;
