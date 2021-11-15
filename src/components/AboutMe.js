import React from "react";
import author from "../me.png";

const AboutMe = () => {
  return (
    <div id="bio" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img
              className="profile-img"
              src={author}
              alt="dr ernesto nieves imagen"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading"> Cirujano Vascular</h1>
          <p className="d-flex justify-content-center">
            Hola, soy el Dr. Nieves, estoy para ayudarte en la búsqueda del
            mejor tratamiento para puedas disfrutar de piernas lindas y
            saludables.
          </p>
          <p className="d-flex justify-content-center">
            Experto internacional en el uso de Laser para el manejo cosmético y
            quirúrgico de los problemas relacionados con la enfermedad venosa.{" "}
          </p>

          <p className="d-flex justify-content-center">
            {" "}
            Para ti que buscas el mejor tratamiento, en clínica nieves cuento
            con la mejor tecnología para ofrecerte procedimientos ambulatorios,
            avanzados y de calidad.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
