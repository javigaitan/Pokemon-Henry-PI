import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FilterByType } from "../../actions";
import './Filter.css'

const TypeFilter = () => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
     const handlerSubmit = (e) => {
      e.preventDefault();
      dispatch(FilterByType(e.target.value));
  };
    return(
        <div className="filter-contein">
            <select className="filter" onChange={handlerSubmit} >
                <option>Order by Type</option>
                {types?.map((t, i) => (
          <option key={i} value={`${t.name}`}>
            {" "}
            {t.name}{" "}
          </option>
        ))}
      </select>

        </div>

    );
};

export default TypeFilter;