import React from "react";
import { useDispatch } from "react-redux";
import { FilterByOrder } from "../../actions";
import './Filter.css'

const OrderFilter = ({setOrder, paginado}) => {
    const dispatch = useDispatch();
    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(FilterByOrder(e.target.value));
        paginado(1);
        setOrder(`Order ${e.target.value}`);
    };
    return(
        <div className="filter-contein">
            <select className="filter" onChange={HandleSubmit} >
                <option>Order by Name</option>
                <option value='ASC'>A-Z (+)</option>
                <option value='DSC'>Z-A (-)</option>
            </select>

        </div>

    );
};

export default OrderFilter;