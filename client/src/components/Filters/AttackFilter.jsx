import React from "react";
import { useDispatch } from "react-redux";
import { FilterByAttack } from "../../actions";
import './Filter.css'

const AttackFilter = ({setOrder, paginado}) => {
    const dispatch = useDispatch();
    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(FilterByAttack(e.target.value));
        paginado(1);
        setOrder(`Order ${e.target.value}`);
    };
    return(
        <div className="filter-contein">
            <select className="filter" onChange={HandleSubmit} >
                <option>Order by ATTACK</option>
                <option value={'LOUDER'}>ATTACK (+)</option>
                <option value={'LESS_STRONG'}>ATTACK (-)</option>
            </select>

        </div>

    );
};

export default AttackFilter;