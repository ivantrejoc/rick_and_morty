import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar.jsx";
import "./nav.css";

export default function Nav(props) {
  return (
    <div className="navCont">
      <div className="navButtons">
        <NavLink to="/home" className="navButtons">Home</NavLink>
        <NavLink to="/favorites" className="navButtons">Favorites</NavLink>
        <NavLink to="/about" className="navButtons">About</NavLink>        
        {/* <p className="link" onClick={props.logout}>
          Logout
        </p> */}
        
      </div>
      <button className="logout" onClick={props.logout} >Logout</button>
      <SearchBar onSearch={(CharacterID) => props.onSearch(CharacterID)} />
    </div>
  );
}
