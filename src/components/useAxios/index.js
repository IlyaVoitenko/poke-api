import axios from 'axios';
import {
  getPokemonsAction,
  getPokemonAction,
  getTypesPokemonsAction,
  getPokemonsBySelectedTypeAction,
} from '../../store/actionCreaters';

export function getAllPokemons(amauntPokemon = 50) {
  return (dispatch) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${amauntPokemon}&offset=0`)
      .then(({ data }) => dispatch(getPokemonsAction(data.results)));
  };
}
export function getPokemon(pokemonName) {
  return (dispatch) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((data) => dispatch(getPokemonAction(data)))
      .catch((error) => {
        return error.toJSON();
      });
  };
}
export function getTypesPokemons() {
  return (dispatch) => {
    return axios.get(`https://pokeapi.co/api/v2/type/`).then(({ data }) => {
      dispatch(getTypesPokemonsAction(data.results));
    });
  };
}
export function getPokemonBySelectedType(typePokemon) {
  return (dispatch) => {
    return axios
      .get(`https://pokeapi.co/api/v2/type/${typePokemon}`)
      .then(({ data }) => {
        dispatch(getPokemonsBySelectedTypeAction(data.pokemon));
      });
  };
}
