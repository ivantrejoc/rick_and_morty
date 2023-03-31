import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cards from "./components/cards/Cards.jsx";
import logoRM from "./assets/title-rick-and-morty.png";
import Nav from "./components/nav/Nav.jsx";
import About from "./views/about/About.jsx";
import Detail from "./views/detail/Detail.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    let filtered = characters.filter((character) => character.id !== id);
    setCharacters(filtered);
  };
  return (
    <div className="App" style={{ padding: "25px" }}>
      <img className="Titleimg" src={logoRM} alt="rm title" />
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
