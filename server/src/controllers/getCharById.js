const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params; //recibe datos por params se hace destructuring de id
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    const { name, image, gender, species, status, origin } = data; //destructuring de las propiedades que queremos
    const character = {id, name, image, gender, species, status, origin }; //resumen
    character.name
      ? res.status(200).json(character)
      : res.status(404).send("Personaje no existe"); //valida si character existe
  } catch (error) {
    res.status(500).json({ message: error.message }); //mensaje de error
  }

  // *** PROMISES *** *** no lleva async
  // const {id}= req.params //recibe datos por params se hace destructuring de id
  // axios
  //   .get(`https://rickandmortyapi.com/api/character/${id}`)
  //   .then((response) => {
  //     //recibe un objeto response.data
  //     const { name, image, gender, species, status, origin } = response.data; //destructuring de las propiedades que queremos
  //     const character = { name, image, gender, species, status, origin } //resumen
  //     character.name? res.status(200).json(character):res.status(404).send("Personaje no existe"); //valida si character existe
  //   })
  //   .catch((error) => {
  //     res.status(500).json({message: error.message}); //mensaje de error
  //   });
};

module.exports = getCharById;
