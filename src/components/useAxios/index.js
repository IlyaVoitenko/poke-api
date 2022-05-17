import axios from 'axios';
import {
  getPokemonsAction,
  getPokemonAction,
} from '../../store/actionCreaters';

export function getAllPokemons() {
  return (dispatch) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`)
      .then((data) => {
        dispatch(getPokemonsAction(data.data.results));
      });
  };
}
export function getPokemon(pokemonName) {
  return (dispatch) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(({ data }) => {
        dispatch(getPokemonAction(data));
      });
  };
}
