import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";  // ✅ required CSS import
import firstImage from "../../assets/images/carousel/1.jpeg";
import secondImage from "../../assets/images/carousel/2.jpeg";
import thirdImage from "../../assets/images/carousel/3.jpeg";
import fourthImage from "../../assets/images/carousel/4.jpeg";

function Carousel() {
  return (
    <div className="carousel-container">
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src={firstImage} alt="Slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={secondImage} alt="Slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={thirdImage} alt="Slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={fourthImage} alt="Slide 2" />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}

export default Carousel;