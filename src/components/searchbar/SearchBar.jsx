import{Search, SearchInput, SearchButton} from './searchbar.js';
export default function SearchBar(props) {
   return (
      <Search>
         <><SearchInput type='search' placeholder="Buscar personaje..." />
         <SearchButton onClick={() => props.onSearch("Recibiendo nuevo ID")}>Agregar</SearchButton></> 
      </Search>
   );
}
