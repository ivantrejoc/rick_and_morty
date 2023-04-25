import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions.js";
import Cards from "../../components/cards/Cards.jsx";

function Favorites(props) {
  const { myFavorites, onClose } = props;
  const dispatch = useDispatch();
//faltan estilos de etiquetas select
  return (
    <div>
      <div>
        
        <select name="order" onClick={(e)=>{dispatch(orderCards(e.target.value))}} > 
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        </select>

        <select name="filterbygender" onClick={(e)=>{dispatch(filterCards(e.target.value))}} >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">Unknown</option>
        <option value="Genderless">Genderless</option>
        </select>
      </div>
      <Cards characters={myFavorites} onClose={onClose} />;
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
//holaa
export default connect(mapStateToProps)(Favorites);
