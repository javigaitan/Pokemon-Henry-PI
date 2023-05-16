import React from "react";
import { Link } from "react-router-dom";
import './Paginado.css'


const Paginado = ({ pokePerPage, pokeTotal, paginado, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokeTotal / pokePerPage); i++) {
      pageNumbers.push(i);
    }
    const handlerPrev = () => {
      if (currentPage === 1) return;
      paginado(currentPage - 1);
    };
    const handlerNext = () => {
      if (currentPage === pageNumbers.length) return;
      paginado(currentPage + 1);
    };
  
    return pageNumbers.length > 1 ? (
      <nav>
        <div className='container-paginado'>
          <button className='button-pag' onClick={() => handlerPrev()}>
            Prev
          </button>
          {pageNumbers.map((num) => (
            <div key={num}>
              <Link to={num}>
                <button
                  className='button-pag'
                  onClick={() => paginado(num)}
                >
                  {num}
                </button>
              </Link>
            </div>
          ))}
          <button className='button-pag' onClick={() => handlerNext()}>
            Next
          </button>
        </div>
      </nav>
    ) : null;
  }; 


export default Paginado;