import React from "react";
import { Link } from "react-router-dom";
import './Paginado.css'


const Paginado = ({ pokePerPage, pokeTotal, pagination, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokeTotal / pokePerPage); i++) {
      pageNumbers.push(i);
    }
    const handlerPrev = () => {
      if (currentPage === 1) return;
      pagination(currentPage - 1);
    };
    const handlerNext = () => {
      if (currentPage === pageNumbers.length) return;
      pagination(currentPage + 1);
    };
  
    return pageNumbers.length > 1 ? (
      <nav>
        <div className='container'>
          <button className='btn_pn' onClick={() => handlerPrev()}>
            Prev
          </button>
          {pageNumbers.map((num) => (
            <div key={num}>
              <Link to={num}>
                <button
                  className='btn'
                  onClick={() => pagination(num)}
                >
                  {num}
                </button>
              </Link>
            </div>
          ))}
          <button className='btn_pn' onClick={() => handlerNext()}>
            Next
          </button>
        </div>
      </nav>
    ) : null;
  }; 


export default Paginado;