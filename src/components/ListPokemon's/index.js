import { useSelector } from 'react-redux';
import { getArrayPokemons } from './selectors';
import ItemPokemon from '../ItemPokemon';

const ListPokemons = () => {
  const pokemons = useSelector(getArrayPokemons);
  return pokemons.map((pokemon, index) => (
    <ItemPokemon key={index} pokemon={pokemon} />
  ));
};
export default ListPokemons;
