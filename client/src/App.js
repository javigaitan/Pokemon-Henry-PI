import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route, Link,} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetPokemons, GetType } from "./actions/index";
import CreatePokemon from './components/CreatePokemon/CreatePokemon'
import LandingPage from './components/Landing/LandingPage';
import Home from './components/Home/Home';
import {PokeDetail} from './components/PokeDetail/PokeDetail';

function App() {
  return (

      <div className="App">
        <Routes>

          <Route exact path='/' element={<LandingPage/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path="/pokemon/:id" element={<PokeDetail/>}/>
          <Route exact path='/CreatePokemon' element={<CreatePokemon/>}/>
          
      </Routes>
      </div>

    
  );
}

export default App;