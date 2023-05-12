let myFavorites = [];

function postFav(req, res) {
  const character = req.body; //recibe info por body
  myFavorites.push(character); //pushea el persona al array myFavorites
  res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;           //recibe id por params "EL DATO ES UNA STRING"
  const myFavorites = myFavorites.filter(
    (character) => character.id !== Number(id)
  );                                           //nos quedamos con todos los que no son iguales a la id
  res.status(200).json(myFavorites); //método filter devuelve un array
}


module.exports = {
    postFav,
    deleteFav,
};