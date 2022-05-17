import { GET_POKEMONS, GET_POKEMON } from '../actionsTypes';

export function getPokemonsAction(payload) {
  return { type: GET_POKEMONS, payload };
}
export function getPokemonAction(payload) {
  return { type: GET_POKEMON, payload };
}
