const {Router} = require("express");    //importamos Router de express
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const {postFav, deleteFav} = require("../controllers/handleFavorites");

const router = Router();       //creamos un router como una constante

router.get("/character/:id", getCharById);  //cada ruta representa el controlador y método
router.get("/login", login);                 
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav)

module.exports = router;