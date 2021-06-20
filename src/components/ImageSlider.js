import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import th1 from "../img/project-photos/thumbnails/th-01.png";
import th2 from "../img/project-photos/thumbnails/th-02.png";
import th3 from "../img/project-photos/thumbnails/th-03.png";
import th4 from "../img/project-photos/thumbnails/th-04.png";

function ImageSlider() {
  return (
    <div className="my-carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={th1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={th2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={th3} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={th4} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={th1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={th2} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={th3} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;
