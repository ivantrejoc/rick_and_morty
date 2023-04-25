import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";

export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://localhost:3001/rickandmorty/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert(`${err.message}`);
      });
    return setCharacter({});
  }, [detailId]);

  const navigate = useNavigate();
  //faltan estilos de boton back to home

  return (
    <div className="detailContent">
      <h1 className="name">Name: {character.name}</h1>
      <img className="image" src={character.image} alt={character.name}></img>
      <h2 className="data">Gender: {character.gender}</h2>
      <h2 className="data">Specie: {character.species}</h2>
      <h2 className="data">Origin: {character.origin && character.origin.name}</h2>
      <h3 className="status">Status: {character.status}</h3>
      <button onClick={()=>{navigate("/Home")}}>Back to home</button>
      
    </div>
  );
}
