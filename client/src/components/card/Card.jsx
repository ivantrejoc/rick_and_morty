import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { File, ImageCont, CloseButton, Name, Datas, Image } from "./card.js";
import { addFavorite, removeFavorite } from "../../redux/actions.js";

function Card(props) {
  const { character, onClose, addFavorite, removeFavorite, myFavorites } =
    props;
  const [isFav, setIsFav] = useState(false);
  const [closeBtn, setCloseBtn] = useState(true); //estado local que deselecciona el favorito
  
  const handleFavorite = (data) => {
    if (isFav) {
      removeFavorite(data); // character.id
      setIsFav(false);
    } else {
      addFavorite(data); // character
      setIsFav(true);
    }
  };

  useEffect(() => {                  //comprueba si personaje que está en card ya está dentro de favs
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  useEffect(() => {     //modifica el estado para quitar favorito
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);

  return (
    <File>
      <ImageCont>
        <Link to={`/detail/${character.id}`}>
          <Name>{character.name}</Name>
        </Link>
        {isFav ? (
          <button onClick={() => handleFavorite(character.id)}>❤️</button>
        ) : (
          <button onClick={() => handleFavorite(character)}>🤍</button>
        )}
        <Image src={character.image} alt={character.name} />
        <CloseButton onClick={()=>onClose(character.id)}>X</CloseButton>
      </ImageCont>
      <Datas>{character.species}</Datas>
      <Datas>{character.gender}</Datas>
    </File>
  );
}

const mapdispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(Card);
