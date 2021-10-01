import axios from "axios";

// CONST
const initialState = {
  array: []
}

// TYPES
const GET_POKEMONS_SUCCESSFUL = 'GET_POKEMONS_SUCCESSFUL';

// REDUCERS
export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_SUCCESSFUL:
      return {
        ...state,
        array: action.payload
      }
    default: return state;
  }
}

// ACTIONS
export const getPokemonsSuccessful = () => async (dispatch, getState) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    dispatch({
      type: GET_POKEMONS_SUCCESSFUL,
      payload: response.data.result
    })
  }
  catch (error) {
    console.log('Error');

  }
}