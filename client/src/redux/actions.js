import axios from "axios";
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action-types";

export const addFavorite = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';   //recibe array de favs desde el back
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: ADD_FAVORITE,
           payload: data,
        });
     });
  };
};


// export const addFavorite = (character) => {
//   return {
//     type: ADD_FAVORITE,
//     payload: character,
//   };
// };


export const removeFavorite = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;     //modifica array de favs en el back
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: REMOVE_FAVORITE,
           payload: data,
     });
     });
  };
};


// export const removeFavorite = (id) => {
//     return {
//       type: REMOVE_FAVORITE,
//       payload: id ,   //quité destructuring al id
//     };
//   };

  export const filterCards = (gender)=>{
    return {
      type: FILTER,
      payload: gender, 
    };
  }

  export const orderCards = (id)=>{
    return {
      type: ORDER,
      payload: id, 
    };
  }