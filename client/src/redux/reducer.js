import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:                     //recibe array de favs desde el back
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    // case ADD_FAVORITE:
    //   return { ...state, allCharacters: [...state.allCharacters, action.payload],
    //   myFavorites: [...state.allCharacters, action.payload],
    //   };


    case REMOVE_FAVORITE:
      return { ...state, myFavorites: action.payload };        //modifica el array en el back
    // case REMOVE_FAVORITE:
    //   const filter = state.myFavorites.filter(
    //     (character) => character.id !== action.payload
    //   );
    //   return {
    //     ...state,
    //     myFavorites: filter,
    //   };

    case FILTER:
      const genderFilter = [...state.allCharacters].filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: genderFilter,
      };

    case ORDER:
      const ordered = [...state.allCharacters].sort((a, b) => {
        if (a.id > b.id) {
          return action.payload === "Ascedente" ? 1 : -1;
        } else if (a.id < b.id) {
          return action.payload === "Descendente" ? 1 : -1;
        } else {
          return 0;
        }
      });

      return {
        ...state,
        myFavorites: ordered,
      };

    default:
      return state;
  }
};

export default rootReducer;
