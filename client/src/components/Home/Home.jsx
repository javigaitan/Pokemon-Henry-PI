import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader";
import { GetPokemons, GetType } from "../../actions/index";
import Paginado from '../Paginado/Paginado'
import Cards from '../Cards/Cards';
import NotFound from '../NotFound/NotFound';
import SearchBar from "../SearchBar/SearchBar";
import AttackFilter from "../Filters/AttackFilter";
import OrderFilter from "../Filters/OrderFilter";
import PokemonsFilter from "../Filters/PokemonsFilter";
import TypeFilter from '../Filters/TypeFilter';
import CreatePokemon from '../CreatePokemon/CreatePokemon'
import './Home.css'


export default function Home(){

  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.pokemons);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage] = useState(12);
  const handlerHome = () =>{
    dispatch(GetPokemons());
  }

  useEffect(() => {
    dispatch(GetPokemons());
    dispatch(GetType());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const lastPoke = currentPage * pokePerPage;
  const firstPoke = lastPoke - pokePerPage;
  const currentPokes = pokemones?.slice(firstPoke, lastPoke);

  const paginado = (num) => {
    setCurrentPage(num);
  };

  function handleClick(e){
    e.preventDefault();
    dispatch(GetPokemons())
  }

  return (
    <div >
      <div className="homebc">
        <div className="top-bar">
          <Link to="/">
            <button className="button-back">Back</button>
          </Link>
          <Link to="/CreatePokemon">
            <button className="button-back">Create Pokémon</button>
          </Link>

          <button className="button-back" onClick={e =>{handleClick(e)}}>Reset</button>


          <SearchBar/>
        </div>

        <div className="top-bar2">
            <OrderFilter setOrder={setOrder} paginado={paginado} />
            <AttackFilter setOrder={setOrder} paginado={paginado} />
            <TypeFilter />
            <PokemonsFilter />

        </div>

        

        {loading ? (
          <Loader /> // Renderizar el componente Loader mientras se carga
        ) : (
          <div className="containerCards">
            {currentPokes.length === 0 ? (
              <NotFound />
            ) : (
              <Cards pokemons={currentPokes} />
            )}
          </div>
        )}
      </div>

      <div className="containerPagination">
        <Paginado
          currentPage={currentPage}
          pokePerPage={pokePerPage}
          pokeTotal={pokemones.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
}