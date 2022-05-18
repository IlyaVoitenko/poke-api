import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_TYPES_POKEMONS,
  GET_POKEMONS_BY_SELECTED_TYPE,
} from '../actionsTypes';

export function getPokemonsAction(payload) {
  return { type: GET_POKEMONS, payload };
}
export function getPokemonAction(payload) {
  return { type: GET_POKEMON, payload };
}
export function getTypesPokemonsAction(payload) {
  return { type: GET_TYPES_POKEMONS, payload };
}
export function getPokemonsBySelectedTypeAction(payload) {
  return { type: GET_POKEMONS_BY_SELECTED_TYPE, payload };
}
