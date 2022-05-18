import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_TYPES_POKEMONS,
  GET_POKEMONS_BY_SELECTED_TYPE,
} from '../actionsTypes';

const initialState = {
  pokemons: [],
  pokemon: {
    data: {
      sprites: {
        other: {
          dream_world: '',
        },
      },
    },
  },
  typesPokemons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: [...action.payload] };
    case GET_POKEMON:
      return { ...state, pokemon: action.payload };
    case GET_TYPES_POKEMONS:
      return { ...state, typesPokemons: [...action.payload] };
    case GET_POKEMONS_BY_SELECTED_TYPE:
      return { ...state, pokemons: [...action.payload] };
    default:
      return state;
  }
};
export default reducer;
