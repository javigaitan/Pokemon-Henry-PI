import React from "react";
import { useDispatch } from "react-redux";
import { FilterByPokemons } from "../../actions";
import './Filter.css'

const PokemonsFilter = () => {
    const dispatch = useDispatch();

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(FilterByPokemons(e.target.value));
    };
    return(
        <div className="filter-contein">
            <select className="filter" name='Existent'onChange={HandleSubmit} >
                <option>Order by Origin</option>
                <option value='API'>Api</option>
                <option value='DATA_BASE'>DataBase</option>
            </select>

        </div>

    );
};

export default PokemonsFilter;