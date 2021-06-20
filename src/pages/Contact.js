import React from "react";
import ContactImage from "../img/img-04.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import ImageSlider from "../components/ImageSlider";

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
            <span className="dash-two">NUMBER</span>. SO CALL ME MAYBE?
          </h1>
        </div>

        <div className="sub-headline-bottom">
          <h5>SOCIAL</h5>
        </div>
      </div>
      <div id="main-window">
        <img src={ContactImage} alt="" />
      </div>
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

export default Contact;
