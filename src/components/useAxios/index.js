import axios from 'axios';
import {
  getPokemonsAction,
  getPokemonAction,
} from '../../store/actionCreaters';

export function getAllPokemons(amauntPokemon = 50) {
  return (dispatch) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${amauntPokemon}&offset=0`)
      .then((data) => {
        dispatch(getPokemonsAction(data.data.results));
      });
  };
}
export function getPokemon(pokemonName) {
  return (dispatch) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((data) => {
        dispatch(getPokemonAction(data));
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
  };
}
