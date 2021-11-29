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
        <img src={avatar1} alt="avantar clinica nieves" />
        <div className="myCarousel">
          <h3>Maria Laura G - Arauca </h3>
          <p>
            Llevaba años sin usar pantalones cortos o faldas; Definitivamente el
            mejor tratamiento.{" "}
          </p>
        </div>
      </>

      <>
        <img src={avatar2} alt="avantar clinica nieves" />
        <div className="myCarousel">
          <h3>Diana M - Tunja </h3>
          <p>
            Me dolian mucho las piernas y tenia herida. Descanse del dolor y la
            herida cerro. Gracias.{" "}
          </p>
        </div>
      </>

      <>
        <img src={avatar3} alt="avatar clinica nieves" />
        <div className="myCarousel">
          <h3>Sussan Finn - USA </h3>
          <p>Una sesion fue suficiente para quitarme las arañitas. </p>
        </div>
      </>

      <>
        <img src={avatar4} alt="avantar clinica nieves" />
        <div className="myCarousel">
          <h3>Carmenza L - Medellin </h3>
          <p>
            Sin resultados con escleroterapia , me recomendaron laser con dr.
            nieves, luego de dos sesiones el cambio fue increible.{" "}
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
