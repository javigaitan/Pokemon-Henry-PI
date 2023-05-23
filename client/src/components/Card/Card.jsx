import { Link } from "react-router-dom";
import './Card.css'

const Card = ({id, name, image, types, attack}) => {
    return (

        <Link to={`/pokemon/${id}`}>
        <div key={id} class="articles">
       <article>
       <div class="article-wrapper">
      <figure>
      <img src={image} alt={name}  width='250px' height='200px'/>
      </figure>
      <div class="article-body">
        <h2>{name?.toUpperCase()}</h2>
        <div>
                {types?.map((t, i) => (
            <h3 className={`${t.name}`} key={i}>
              {t.name}
            </h3>
          ))}
                </div>
        
        
        
      </div>
    </div>
  </article>

</div>


            </Link>
    );
};

export default Card;