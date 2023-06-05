import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetPokemons,  GetType, PostPokemon } from '../../actions';
import validacion from './Validacion'

import { Link } from 'react-router-dom';
import './CreatePokemon.css'


export default function CreatePokemon() {
    const history = useNavigate();
    const type = useSelector((state) => state.types);
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

      useEffect(() =>{
        dispatch(GetType());
        dispatch(GetPokemons());
      }, [dispatch]);

      const handleSubmit = (e) => {
        dispatch(PostPokemon(form));
        alert("Your pokémon has been created");
        history("/home");
      };
    
      const equal = (value) => {
        const equal = pokemons.find((p) => p.name === value);
        if (equal) {
          alert("pokemon alredy exist, Change the name");
          setForm({
            ...form,
            name: "",
          });
        }
      };
    
      const HandleTypeChange = (e) => {
        const newType = e.target.value;
        if (form.type.length < 17)
          setForm({ ...form, type: [...form.type, newType] });
    
        if (form.type.includes(newType)) {
          setForm({ ...form, type: form.type.filter((t) => t !== newType) });
        }
      };
    
      const handleInputChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        equal(form.name);
    
        setError(
            validacion({
            ...form,
            [e.target.name]: e.target.value,
          })
        );
      };
    
      const BackHome = () => {
        history("/home");
      };

      return (
        <div className='bc-form'>

          

          <form onSubmit={handleSubmit}>
            <div className='totalcontainer'>
              <div className='box'>
                <div className='container-input'>
                  <h1>Create Your Pokemon</h1>
                  <div>
                    <div className='container-input'>
                      <label htmlFor="name">Name:</label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                        value={form.name}
                      />
                      <p>{error.name}</p>
                    </div>
                    <div className='container-input'>
                      <label htmlFor="">Image:</label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="image"
                        value={form.image}
                      />
                      <p>{error.image}</p>
                    </div>
                    <div className='container-input'>
                      <label htmlFor="hp">Hp:</label>
                      <input
                        onChange={handleInputChange}
                        type="range"
                        min='1'
                        max='255'
                        name="hp"
                        id="hp"
                        value={form.hp}
                      />
                      <p>{error.hp}</p>
                      <span>{form.hp}</span>
                    </div>
                    <div className='container-input'>
                      <label htmlFor="attack">Attack:</label>
                      <input
                        onChange={handleInputChange}
                        type="range"
                        min='1'
                        max='255'
                        name="attack"
                        id="attack"
                        value={form.attack}
                      />
                      <p>{error.attack}</p>
                      <span>{form.attack}</span>

                    </div>
                    <div className='container-input'>
                      <label htmlFor="defense">Defense:</label>
                      <input
                        onChange={handleInputChange}
                        type="range"
                        min='1'
                        max='255'
                        name="defense"
                        id="defense"
                        value={form.defense}
                      />
                      <p>{error.defense}</p>
                      <span>{form.defense}</span>

                    </div>
                    <div className='container-input'>
                      <label htmlFor="speed">Speed:</label>
                      <input
                        onChange={handleInputChange}
                        type="range"
                        min='1'
                        max='255'
                        name="speed"
                        id="speed"
                        value={form.speed}
                      />
                      <p>{error.speed}</p>
                      <span>{form.speed}</span>

                    </div>
                    <div className='container-input'>
                      <label htmlFor="height">Height:</label>
                      <input
                        onChange={handleInputChange}
                        type="range"
                        min='1'
                        max='20'
                        name="height"
                        id="height"
                        value={form.height}
                      />
                      <p>{error.height}</p>
                      <span>{form.height}</span>

                    </div>
                    <div className='container-input'>
                      <label htmlFor="weight">Weight:</label>
                      <input
                        onChange={handleInputChange}
                        type="range"
                        min='1'
                        max='1000'
                        name="weight"
                        id="weight"
                        value={form.weight}
                      />
                      <p>{error.weight}</p>
                      <span>{form.weight}</span>

                    </div>
                  </div>
                </div>
    
                <div className='typeButtons'>
                  <h1>Choose types</h1>
                  <div className="typeButtons1">
    {type?.length === 0 ? (
      <h2>No types available, validate API connection
      </h2>
    ) : (
      type.map((t, i) => (
        <div key={i}>
          <button
            type="button"
            name={t.name}
            id={t.id}
            value={t.name}
            onClick={HandleTypeChange}
            className={`btn-type ${form.type.includes(t.name) ? 'selected' : ''}`}
          >
            {t.name}
          </button>
        </div>
      ))
    )}
  </div>
    
                  <p>{error.type}</p>
                  {form.type.length === 0 ? <p>Choose at least one type</p> : false}
                  <div className='button-back2'>
                    {form.type?.map((el, i) => (
                      <input
                        key={i}
                        type="button"
                        id={[i]}
                        onClick={HandleTypeChange}
                        defaultValue={el}
                      />
                    ))}
                  </div>
                </div>
              </div>
    
              {Object.keys(error).length === 0 && form.type.length >= 1 ? (
                <input
                  className='button-back2'
                  type="submit"
                  value="Create Pokemon"
                />
              ) : (
                false
              )}
              
            </div>
            
          </form>

          <div className='backdiv'>

          <Link to="/home">
            <button className="button-back">Back</button>
          </Link>
          </div>
          
        </div>
        
      );
    };