import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";  // ✅ required CSS import
import firstImage from "../../assets/images/carousel/1.jpeg";
import secondImage from "../../assets/images/carousel/2.jpeg";

function Carousel() {
  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src={firstImage} alt="Slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={secondImage} alt="Slide 2" />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}

export default Carousel;