import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Piernas lindas y saludables</h1>
        <Typed
          className="typed-text"
          strings={["Adios Venitas", "Chao Arañitas", "Hola Shorts"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to="contacto"
          offset={-110}
          className="nav-link"
          href="#"
          href="#"
          className="btn-main-offer"
        >
          contactame
        </Link>
      </div>
    </div>
  );
};

export default Header;
