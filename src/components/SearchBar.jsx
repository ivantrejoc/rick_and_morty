import styled from "styled-components";

const Search = styled.div`
  
`;

export default function SearchBar(props) {
   return (
      <Search>
         <><input type='search' />
         <button onClick={() => props.onSearch("Recibiendo nuevo ID")}>Agregar</button></> 
      </Search>
   );
}
