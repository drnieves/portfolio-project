import React from "react";

const NavbarPoke = () => {
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav className="navbar-poke">
      <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
    </nav>
  );
};

export default NavbarPoke;
