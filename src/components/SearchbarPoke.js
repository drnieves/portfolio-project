import React from "react";
import { searchPokemon } from "../Api";
const { useState } = React;

const SearchbarPoke = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div>
      <div>
        <input placeholder="Buscar pokemoN..." onChange={onChange} />
      </div>
      <div>
        <div>
          <button onClick={onClick}>Buscar Pokemon</button>
        </div>
        <div>
          {pokemon && (
            <div>
              <div> Nombre: {pokemon.name}</div>
              <div> Peso: {pokemon.weight}</div>

              <img src={pokemon.sprites.front_default} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchbarPoke;
