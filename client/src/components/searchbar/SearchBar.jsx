import { useState } from 'react';
import "./searchbar.css";

export default function SearchBar(props) {
   const [input, setInput]= useState("");
   const handleInputChange = (event)=>{
      const {value}=event.target;
      setInput(value)
   };
   return (
      <div className="searchCont">
         <input className='searchInput' type='search' onChange={handleInputChange} placeholder="Buscar personaje..." />
         <button className='searchButton' onClick={()=>props.onSearch(input)}>Agregar</button>
      </div>
   );
}
