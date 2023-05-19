import React, { useState } from "react";
import { GetPokemon } from "../../actions";
import { useDispatch } from "react-redux";
import './SearchBar.css';
import Loader from "../Loader/Loader";
import NotFound from "../NotFound/NotFound";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [poke, setPoke] = useState('');
  const [error, setError] = useState('');

  function handlerSubmit(e) {
    e.preventDefault();
    
    if (poke && poke.trim() !== '') {
      dispatch(GetPokemon(poke))
        .then(() => {
          // Se encontró el Pokémon exitosamente
          setError('');
          setPoke('');
        })
        .catch(() => {
          // No se encontró el Pokémon
          setError('No se encontró el Pokémon');
        });
    } else {
      setError('Por favor, ingresa un nombre válido');
    }
  }

  return (
    <form className="form-search" onSubmit={handlerSubmit}>
      <input
        className="input"
        type="text"
        value={poke}
        onChange={(e) => setPoke(e.target.value)}
        placeholder="Buscar Pokémon"
      />
      <input
        className="poke-search"
        type="image"
        src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokedex_tool_icon-icons.com_67529.png"
      />
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
