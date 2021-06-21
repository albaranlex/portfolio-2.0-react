import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import ImageSlider from "../components/ImageSlider";
import logo from "../img/logo.png";

const Contact = () => {
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
        <div className="blockade-contact"></div>
        <div className="sub-headline-top-contact">
          <h5>
            CO<span className="dash">NTACT</span>
          </h5>
        </div>

        <div className="headline-main">{/* <h1>Love the hustle.</h1> */}</div>

        <div className="sub-headline-bottom">
          <h5>Love the hustle.</h5>
        </div>
      </div>
      <div id="main-window">
        <div className="contact-content">
          <div className="contact-header">
            <h1>
              Allow me to inspire you. let's build something great together.
            </h1>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Start a conversation</h3>
              <a href="mailto:albaranlex@icloud.com">
                <p>albaranlex@icloud.com</p>
              </a>
              <p>+49 000 000 0000</p>
            </div>
            <div>
              <h3>Social</h3>
              <span className="icons">
                <a href="https://github.com/albaranlex">
                  <FaGithubSquare />
                </a>
              </span>
              <span className="icons">
                <a href="https://www.linkedin.com/in/albaranalex/">
                  <FaLinkedin />
                </a>
              </span>
              <span className="icons">
                <a href="https://www.instagram.com/maaculit/">
                  <FaInstagramSquare />
                </a>
              </span>
            </div>
          </div>
        </div>
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

export default Contact;
