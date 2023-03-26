import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import SearchBar from "./components/searchbar/SearchBar.jsx";
import characters from "./data.js";
import logoRM from "./assets/title-rick-and-morty.png";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className="Header">
        <img className="Titleimg" src={logoRM} alt="rm title" />
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <Cards
        characters={characters}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      />
    </div>
  );
}

export default App;
