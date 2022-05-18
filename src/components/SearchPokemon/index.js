import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../useAxios';

const SearchPokemon = () => {
  const dispatch = useDispatch();
  const [namePokemon, setNamePokemon] = useState('');
  return (
    <div>
      <input onChange={({ target }) => setNamePokemon(target.value)}></input>
      <Link to="/selected-pokemon">
        <button onClick={() => dispatch(getPokemon(namePokemon))}>
          Search
        </button>
      </Link>
    </div>
  );
};
export default SearchPokemon;
