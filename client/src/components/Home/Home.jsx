import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Loader from "../Loader/Loader";
import { GetPokemons, GetType } from "../../actions/index";
import Paginado from '../Paginado/Paginado'
import Cards from '../Cards/Cards'
import NotFound from '../NotFound/NotFound'
import './Home.css'


export default function Home(){

  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.pokemons);
  //const pokerefresh = useSelector(state => state.allPokemons);
  const [loaded, setLoaded] = useState(false);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage] = useState(8);

  useEffect(() => {
    dispatch(GetPokemons());
    dispatch(GetType());
  }, [dispatch]);

  const lastPoke = currentPage * pokePerPage;
  const firstPoke = lastPoke - pokePerPage;
  const currentPokes = pokemones?.slice(firstPoke, lastPoke);

  const paginado = (num) => {
    setCurrentPage(num);
  };

    return(
        <div className="homebc">
                <div className="top-bar">
                    <Link to="/">
                        <button className="button-back">Back</button>
                    </Link>
               
                    <Link to="/">
                        <button className="button-back">Create Pokémon</button>
                    </Link>
                </div>

                <div className='containerPagination'>
          <Paginado
            currentPage={currentPage}
            pokePerPage={pokePerPage}
            pokeTotal={pokemones.length}
            paginado={paginado}
          />
        </div>
        <div className='containerCards'>
          {!loaded && currentPokes[0] === "error" ? (
            <NotFound />
          ) : (
            <Cards pokemons={currentPokes} />
          )}
        </div>
      </div>
    );
};