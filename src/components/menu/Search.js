import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Hamburguer from "./Hamburguer";

const Search = () => {
  return(
    <div className="flex items-center bg-white m-2 p-2 rounded shadow-sm">
      <Hamburguer />
      <input className="focus:outline-none" name="search" placeholder="Pesquisar" />
      <FontAwesomeIcon icon={faSearch} className="ml-2 text-xl text-i-black-800 cursor-pointer transition duration-300 opacity-80 hover:opacity-100" />
    </div>
  );
};

export default Search;
