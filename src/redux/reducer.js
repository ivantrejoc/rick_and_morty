import { ADD_FAVORITE, REMOVE_FAVORITE } from "./action-types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    case REMOVE_FAVORITE:
      const filter = state.myFavorites.filter(
        (character) => character.id !== action.payload)
      return {
        ...state,
        myFavorites: filter,
      };

    default:
      return state;
  }
};

export default rootReducer;
