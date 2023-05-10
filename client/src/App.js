import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route, Link,} from "react-router-dom";
import LandingPage from './Pages/Landing/LandingPage'
import Home from './Pages/Home/Home'

function App() {
  return (

    <Router>
      
      <div className="App">
        <Routes>

          <Route exact path='/' element={<LandingPage/>} />
          <Route exact path='/home' element={<Home/>} />
          
      </Routes>
      </div>

    </Router>
  );
}

export default App;
