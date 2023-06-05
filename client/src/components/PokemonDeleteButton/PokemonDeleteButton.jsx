import React from "react";
import { useDispatch } from "react-redux";
import { DeletePokemon } from "../../actions";
import { useNavigate } from "react-router-dom";


 const PokemonDeleteButton = ({id}) =>{
    const dispatch = useDispatch();
    const history = useNavigate();


    const handleDelete = () => {
        console.log("ID del Pokémon:", id);
        if(id >905){
            dispatch(DeletePokemon(id));
            alert ('Pokemon successfully deleted !')
            history("/home");
        }else {
            alert("UPS!! YOU CAN ONLY DELETE YOUR CREATED POKEMONS !");
        }
    };
    return(

        <div>
        <button className='button-back' onClick={handleDelete}>{"Delete Pokemon"}</button>
        </div>
    );
 };

 export default PokemonDeleteButton;