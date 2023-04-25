import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logoRM from "./assets/title-rick-and-morty.png";
import Nav from "./components/nav/Nav.jsx";
import About from "./views/about/About.jsx";
import Detail from "./views/detail/Detail.jsx";
import Cards from "./components/cards/Cards.jsx";
import LandingPage from "./views/landingpage/landing";
import Favorites from "./views/favorites/Favorites.jsx";

function App() {
  // const [input, setInput] = useState("");
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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

  //login
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "ejemplo@gmail.com";
  const password = "1password";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  //logout
  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  
  

  return (
    <div className="App" style={{ padding: "25px" }}>
      <img className="Titleimg" src={logoRM} alt="rm title" />
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} 
        logout={logout} />
      )}
      <Routes>
        <Route exact path="/" element={<LandingPage login={login} />} />
        {access && ( 
          <>          
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} /> 
        <Route path="/favorites" element={<Favorites />} />
        </>
        )}
      </Routes>
    </div>
  );
}

export default App;
