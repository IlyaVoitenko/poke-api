import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from '../useAxios';
import { getArrayPokemons } from './selectors';
import ItemPokemon from '../ItemPokemon';
import SearchPokemon from '../SearchPokemon';
import { useEffect, useState } from 'react';

const ListPokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(getArrayPokemons);
  const [fetching, setFetching] = useState(true);
  let startAmount = 50;
  const newLimitPokemon = 20;

  function setNewLimit(start, end) {
    let result = (start += end);
    startAmount = result;
    return startAmount;
  }

  function handlerScroll(e) {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setNewLimit(startAmount, newLimitPokemon);
      setFetching(true);
      dispatch(getAllPokemons(startAmount));
    }
  }

  useEffect(() => {
    if (fetching) dispatch(getAllPokemons());
  }, [dispatch, fetching]);

  useEffect(() => {
    document.addEventListener('scroll', handlerScroll);
    return () => document.removeEventListener('scroll', handlerScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SearchPokemon />
      {pokemons.map((pokemon, index) => (
        <ItemPokemon key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};
export default ListPokemons;
