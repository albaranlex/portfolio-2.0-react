import React from "react";
import thumbnail from "../img/img-03.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="gen-layout">
      <div id="left">
        <div className="blockade-contact"></div>
        <div className="sub-headline-top-contact">
          <h5>
            CO<span className="dash">NTACT</span>
          </h5>
        </div>
        <div className="headline-main">
          <h1>
            HEY I JUST MET YOU. AND THIS IS CRAZY. BUT HERE'S MY{" "}
            <span className="dash-two">CONTACT DETAILS</span>. SO CALL ME MAYBE?
          </h1>
        </div>

        <div className="sub-headline-bottom">
          <h5>SOCIAL</h5>
        </div>
      </div>
      <div id="main-window">{/* <img src={ContactImage} alt="" /> */}</div>
      <div id="footer">
        <div className="sub-text">
          <span className="icons">
            <FaGithubSquare />
          </span>
          <span className="icons">
            <FaLinkedin />{" "}
          </span>
          <span className="icons">
            <FaInstagramSquare />
          </span>
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

export default Contact;
