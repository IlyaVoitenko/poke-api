import { GET_POKEMONS, GET_POKEMON } from '../actionsTypes';

const initialState = {
  pokemons: [],
  pokemon: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: [...action.payload] };
    case GET_POKEMON:
      return { ...state, pokemon: action.payload };
    default:
      return state;
  }
};
export default reducer;
