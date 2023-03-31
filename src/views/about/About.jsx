import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import fotoP from "./foto-perfil.jpg";

export default function About(props) {
  return (
    <div>
      <div className="aboutContent">
        <h1 className="title">
          Bienvenidos a mi primera Single Page Application
        </h1>
        <p className="text">
          Esta SPA permite conocer los personajes de Rick & Morty, con sus
          difrentes características.
        </p>
        <hr className="hr"></hr>
        <h3 className="credits">Más información sobre el autor:</h3>
        <div className="infoContent">
          <Link to={{ pathname: "https://github.com/ivantrejoc" }} className="links">Github</Link>
          <Link to={{ pathname: "https://linkedin/ivantrejoc" }} className="links">LinkedIn</Link>
          <img className="profilePhoto" alt="Foto de perfil" src={fotoP} />
          <h2 className="credits">Iván Trejo</h2>
          
        </div>
      </div>
    </div>
  );
}
