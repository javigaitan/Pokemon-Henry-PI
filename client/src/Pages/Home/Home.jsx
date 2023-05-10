import React from "react";
import './Home.css';
import {Link} from "react-router-dom";
import Loader from "../../components/Loader/Loader";



export default function Home(){
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


                <Loader/>


        </div>
    )
}