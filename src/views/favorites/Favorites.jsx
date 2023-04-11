import { connect } from "react-redux";
import Cards from "../../components/cards/Cards.jsx";

function Favorites({ myFavorites, onClose }) {
  return (
    <div>
      <Cards characters={myFavorites} onClose={onClose} />;
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
