import Card from "../Card/Card";
import './Cards.css'

const Cards = ({pokemons}) => {
    return (
        <div className="containerCards">
            {pokemons?.map((p) => (
        <Card
          key={p.id}
          id={p.id}
          name={p.name}
          image={p.image}
          types={p.types}
          
        />
      ))}
        </div>

    );
};

export default Cards;