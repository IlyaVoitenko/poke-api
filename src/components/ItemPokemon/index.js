import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPokemon } from '../useAxios';
import { ListGroup } from 'react-bootstrap';

const ItemPokemon = ({ pokemon }) => {
  const dispatch = useDispatch();
  const { name } = pokemon;

  return (
    <ListGroup.Item>
      <span className="float-start">
        {name === undefined ? pokemon.pokemon.name : pokemon.name}
      </span>
      <Link to="/selected-pokemon">
        <Button
          className="float-end"
          variant="primary"
          onClick={() => {
            dispatch(
              getPokemon(
                name === undefined ? pokemon.pokemon.name : pokemon.name
              )
            );
          }}
        >
          Info
        </Button>
      </Link>
    </ListGroup.Item>
  );
};
export default ItemPokemon;
