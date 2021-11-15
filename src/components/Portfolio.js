import React from "react";
import netflix from "../imagenes/netflix.png";
import cityGuide from "../imagenes/cityGuide.png";
import portfolio from "../imagenes/portfolio.png";
import taskManager from "../imagenes/taskManager.png";
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// react popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //netflix

  const openPopuboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="la imagen netflix"
        />
        <p>Lorem ipsum lorem ipsum lorem ipsum </p>
        <b>GitHub</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() => window.open("www.clinicanieves.co", "_blank")}
        >
          direecion de en lace{" "}
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix imagen project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //cityGuide

  const openPopuboxcityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cityGuide}
          alt="la imagen cityGuide"
        />
        <p>Lorem ipsum lorem ipsum lorem ipsum </p>
        <b>GitHub</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() => window.open("www.clinicanieves.co", "_blank")}
        >
          direecion de en lace{" "}
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigcityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide  imagen project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //portfolio

  const openPopuboxportfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="la imagen portfolio"
        />
        <p>Lorem ipsum lorem ipsum lorem ipsum </p>
        <b>GitHub</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() => window.open("www.clinicanieves.co", "_blank")}
        >
          direecion de en lace{" "}
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigportfolio = {
    titleBar: {
      enable: true,
      text: "portfolio  imagen project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //taskManager

  const openPopuboxtaskManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={taskManager}
          alt="la imagen taskManager"
        />
        <p>Lorem ipsum lorem ipsum lorem ipsum </p>
        <b>GitHub</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() => window.open("www.clinicanieves.co", "_blank")}
        >
          direecion de en lace{" "}
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigtaskManager = {
    titleBar: {
      enable: true,
      text: "taskManager  imagen project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  return (
    <div id="cursos" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">
          Cursos 1:1 para medicos especialistas
        </h1>
        <div className="image-box-wrapper d-flex flex-wrap align-items-center justify-content-center">
          <div className="portfolio-image-box" onClick={openPopuboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopuboxcityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopuboxportfolio}>
            <img className="portfolio-image" src={portfolio} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopuboxtaskManager}>
            <img className="portfolio-image" src={taskManager} alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigcityGuide} />
      <PopupboxContainer {...popupboxConfigportfolio} />
      <PopupboxContainer {...popupboxConfigtaskManager} />
    </div>
  );
};

export default Portfolio;
