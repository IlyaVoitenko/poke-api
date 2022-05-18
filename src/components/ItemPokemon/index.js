import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemon } from '../useAxios';

const ItemPokemon = ({ pokemon }) => {
  const dispatch = useDispatch();
  const { name } = pokemon;

  return (
    <div>
      <span>{name === undefined ? pokemon.pokemon.name : pokemon.name}</span>
      <Link to="/selected-pokemon">
        <button
          onClick={() => {
            dispatch(
              getPokemon(
                name === undefined ? pokemon.pokemon.name : pokemon.name
              )
            );
          }}
        >
          info
        </button>
      </Link>
    </div>
  );
};
export default ItemPokemon;
