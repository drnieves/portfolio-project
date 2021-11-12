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
          <h1 className="about-heading"> about me</h1>
          <p>
            El tratamiento cosmético de la enfermedad venosa ha avanzado mucho
            en los últimos años, esta técnica creada en Brasil por los Doctores
            Miyake y Kikuchi, usa la tecnología láser Nd: Yag para el cierre de
            las venitas principales y lo asocian con escleroterapia para obtener
            resultados más rápidos y estéticamente más bonitos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
