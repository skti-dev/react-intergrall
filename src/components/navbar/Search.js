import Hamburguer from "../menu/Hamburguer";

const Search = () => {
  return(
    <div className="flex items-center bg-white m-2 p-2 rounded shadow-sm">
      <Hamburguer />
      <input className="focus:outline-none" name="search" placeholder="Pesquisar" />
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 cursor-pointer transition duration-300 opacity-80 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
};

export default Search;
