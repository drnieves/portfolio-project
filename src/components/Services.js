import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYelp,
  faVine,
  faFreeCodeCamp,
  faTencentWeibo,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="tratamientos" className="services">
      <h1 className="py-5"> Tratamientos </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faYelp}
                  size="2x"
                />{" "}
              </div>
              <h3>Arañitas</h3>
              <p>Pocas sesiones, resultados increíbles con LASER. </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faVine}
                  size="2x"
                />{" "}
              </div>
              <h3>Varices</h3>
              <p>
                Sin Anestesia y sin Cortes, tenemos la cirugía más moderna.{" "}
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faFreeCodeCamp}
                  size="2x"
                />{" "}
              </div>
              <h3>Úlcera Varicosa</h3>
              <p>Somos expertos; Publicaciones y premios internacionales. </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                {" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faTencentWeibo}
                  size="2x"
                />{" "}
              </div>
              <h3>Pie Diabetico</h3>
              <p>Luchamos para prevenir una posible amputación. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
