import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar.jsx";
import "./nav.css";

export default function Nav(props) {
  return (
    <div className="navCont">
      <div className="navButtons">
        <NavLink to="/Home" className="navButtons">Home</NavLink>
        <NavLink to="/About" className="navButtons">About</NavLink>
        <p className="link" onClick={props.logout}>
          logout
        </p>
      </div>
      <SearchBar onSearch={(CharacterID) => props.onSearch(CharacterID)} />
    </div>
  );
}
