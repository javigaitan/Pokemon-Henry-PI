import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CleanDetail, GetPokemonDetail } from '../../actions';
import { useNavigate,useParams } from 'react-router-dom';
import './PokeDetail.css'
import Loader from '../Loader/Loader';
import PokemonDeleteButton from '../PokemonDeleteButton/PokemonDeleteButton';

export const PokeDetail = () =>{

    const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.pokemonDetail);
  useEffect(() => {
    dispatch(GetPokemonDetail(id));
  }, [dispatch, id]);
  const histori = useNavigate();

  const handlerExit = () => {
    dispatch(CleanDetail());
    histori("/home");
  };
      return (
        <div className='bc-pokeback'>
          {!detail ? (
            <Loader />
          ) : (
            <div className='container'>
              <div className='box' >
              <div className='container2'>
                <div className='title'>
                  <h1>{detail.name}</h1>
                </div>
                
                  <img src={detail.image} alt={detail.name} className='image'/>
                
              </div>
              
                <div className='container3'>
                  <div>
                  <h2>Detail</h2>
                  <div className='detailing'>
                    <h3>Id: {detail.id}</h3>
                  </div>
    
                  <div className='detailing'>
                    <h3>Speed: {detail.speed} </h3>
                  </div>
    
                  <div className='detailing'>
                    <h3>Attack: {detail.attack} </h3>
                  </div>
    
                  <div className='detailing'>
                    <h3>Hp: {detail.hp}</h3>
                  </div>
    
                  <div className='detailing'>
                    <h3>Defense: {detail.defense} </h3>
                  </div>
    
                  <div className='detailing'>
                    <h3>Height: {detail.height}</h3>
                  </div>
    
                  <div className='detailing'>
                    <h3>Weight: {detail.weight}</h3>
                  </div>
    
                  <div className='detailing'>
                    <h3>Types: {detail.types?.map((t) => t.name).join(" - ")}</h3>
                  </div>
                  </div>
                </div>
                </div>
              <div className=''>
                <button className='button-back' onClick={handlerExit}>{"Back"}</button>
                <PokemonDeleteButton id={id}/>

              </div>
            </div>
          )}
        </div>
      );

};