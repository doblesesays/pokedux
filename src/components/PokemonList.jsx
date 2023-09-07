import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {

  const not_found = useSelector((state) => state.ui.not_found);

  if (not_found) {
    return <div className='notFound'>Pokemon no encontrado</div>;
  }

  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;
