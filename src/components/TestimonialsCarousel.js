import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//avatars imports
import avatar1 from "../imagenes/avatars/avatar-1.png";
import avatar2 from "../imagenes/avatars/avatar-2.png";
import avatar3 from "../imagenes/avatars/avatar-3.png";
import avatar4 from "../imagenes/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="Jhon doe 1" />
        <div className="myCarousel">
          <h3>hon doe1 </h3>
          <p>lorem lorem lorem lorem </p>
        </div>
      </>

      <>
        <img src={avatar2} alt="Jhon doe 2" />
        <div className="myCarousel">
          <h3>hon doe2 </h3>
          <p>lorem lorem lorem lorem </p>
        </div>
      </>

      <>
        <img src={avatar3} alt="Jhon doe 3" />
        <div className="myCarousel">
          <h3>hon doe3 </h3>
          <p>lorem lorem lorem lorem </p>
        </div>
      </>

      <>
        <img src={avatar4} alt="Jhon doe 4" />
        <div className="myCarousel">
          <h3>hon doe4 </h3>
          <p>lorem lorem lorem lorem </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
