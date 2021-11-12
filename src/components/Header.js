import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>web development and websites promotions</h1>
        <Typed
          className="typed-text"
          strings={["web desing", "web Development", "facebook Adds"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          contactame
        </a>
      </div>
    </div>
  );
};

export default Header;
