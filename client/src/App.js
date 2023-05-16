import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route, Link,} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetPokemons, GetType } from "./actions/index";

import LandingPage from './components/Landing/LandingPage'
import Home from './components/Home/Home'

function App() {
  return (

    
      
      <div className="App">
        <Routes>

          <Route exact path='/' element={<LandingPage/>} />
          <Route exact path='/home' element={<Home/>} />
          
      </Routes>
      </div>

    
  );
}

export default App;