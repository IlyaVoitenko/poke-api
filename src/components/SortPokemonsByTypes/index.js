import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import {
  getTypesPokemons,
  getAllPokemons,
  getPokemonBySelectedType,
} from '../useAxios';
import { getStateTypesPokemons } from './selectors';

const SortPokemonsByTypes = () => {
  const dispatch = useDispatch();
  const typesPokemons = useSelector(getStateTypesPokemons);

  function slectTypePokemo(type) {
    if (type === 'All') {
      dispatch(getAllPokemons());
    }
    dispatch(getPokemonBySelectedType(type));
  }

  useEffect(() => {
    dispatch(getTypesPokemons());
  }, [dispatch]);

  return (
    <Form.Select onChange={({ target }) => slectTypePokemo(target.value)}>
      <option value="All">All</option>
      {typesPokemons.map((type, index) => (
        <option key={index} value={type.name}>
          {type.name}
        </option>
      ))}
    </Form.Select>
  );
};
export default SortPokemonsByTypes;
