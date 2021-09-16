import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

function Search() {
  return(
    <div className="flex items-center bg-white m-2 p-2 border-2 border-i-black-200 rounded">
      <Menu />
      <input className="focus:outline-none" name="search" placeholder="Pesquisar" />
      <FontAwesomeIcon icon={faSearch} className="ml-2 text-xl text-gray-400 cursor-pointer transition duration-300 opacity-50 hover:opacity-100" />
    </div>
  )
}

export default Search;
