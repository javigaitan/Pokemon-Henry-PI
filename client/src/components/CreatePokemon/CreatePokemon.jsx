import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetPokemons,  GetType, PostPokemon } from '../../actions';

import { Link } from 'react-router-dom';
import './CreatePokemon.css'


export default function CreatePokemon() {
    const history = useNavigate();
    const type = useSelector((state) => state.type);
    const pokemons = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();
    const [error, setError] = useState({name:''});
    const [form, setForm] = useState({
        name: "",
        image: "",
        attack: "",
        defense: "",
        hp: "",
        speed: "",
        height: "",
        weight: "",
        type: [],
      });

      




    return (

        <div className='bc-form'>
        <div className="top-bar">
          <Link to="/home">
            <button className="button-back2">Back</button>
          </Link>
          </div>


        </div>
    );
}