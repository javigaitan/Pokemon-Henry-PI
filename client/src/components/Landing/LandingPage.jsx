import React from "react";
import './LandingPage.css';
import {Link} from "react-router-dom";



export default function LandingPage(){
    return(
        <div className="landing">
            <a href="https://www.linkedin.com/in/javier-emanuel-gaitan/">
            <h1 className="title-henry"> Henry Individual Project - Gaitan Javier Emanuel</h1>
            </a>
            <Link to = '/home'>
                <button className="button"> Start </button>
            </Link>

           

        </div>
    )
}