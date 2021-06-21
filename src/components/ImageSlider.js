import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

//Photo Import
import th1 from "../img/project-photos/thumbnails/th-01.png";
import th2 from "../img/project-photos/thumbnails/th-02.png";
import th3 from "../img/project-photos/thumbnails/th-03.png";
import th4 from "../img/project-photos/thumbnails/th-04.png";
import th5 from "../img/project-photos/thumbnails/th-05.png";
import th6 from "../img/project-photos/thumbnails/th-06.png";
import th7 from "../img/project-photos/thumbnails/th-07.png";

function ImageSlider() {
  return (
    <div className="my-carousel">
      <Carousel fade>
        <Carousel.Item>
          <div class="container">
            <img className="d-block w-100" src={th1} alt="First slide" />
            <a
              href="https://github.com/albaranlex/gallerywallApp"
              target="_blank"
            >
              <div class="overlay">
                <div class="text">Portfolio Project v1.0</div>
              </div>
            </a>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="container">
            <img className="d-block w-100" src={th2} alt="Second slide" />
            <a
              href="https://github.com/albaranlex/gallerywallApp"
              target="_blank"
            >
              <div class="overlay">
                <div class="text">YouTube Clone</div>
              </div>
            </a>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="container">
            <img className="d-block w-100" src={th3} alt="Third slide" />
            <a
              href="https://github.com/albaranlex/gallerywallApp"
              target="_blank"
            >
              <div class="overlay">
                <div class="text">Photo Gallery</div>
              </div>
            </a>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="container">
            <img className="d-block w-100" src={th4} alt="First slide" />
            <a
              href="https://github.com/albaranlex/gallerywallApp"
              target="_blank"
            >
              <div class="overlay">
                <div class="text">LogIn App</div>
              </div>
            </a>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="container">
            <img className="d-block w-100" src={th5} alt="First slide" />
            <a
              href="https://github.com/albaranlex/gallerywallApp"
              target="_blank"
            >
              <div class="overlay">
                <div class="text">Currency Converter</div>
              </div>
            </a>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="container">
            <img className="d-block w-100" src={th6} alt="Sixth slide" />
            <a
              href="https://github.com/albaranlex/gallerywallApp"
              target="_blank"
            >
              <div class="overlay">
                <div class="text">Numeral Systems Converter</div>
              </div>
            </a>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div class="container">
            <img className="d-block w-100" src={th7} alt="First slide" />
            <a
              href="https://github.com/albaranlex/gallerywallApp"
              target="_blank"
            >
              <div class="overlay">
                <div class="text">Black & White Shop</div>
              </div>
            </a>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;
