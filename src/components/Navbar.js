import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
// react fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link smooth={true} to="home" className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo" />
          Dr. Nieves - Vascular
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                to="bio"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Bio <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="tratamientos"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Tratamientos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="clinica"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Enfoque
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="cursos"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contacto"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
