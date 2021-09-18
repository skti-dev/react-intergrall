import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faUtensils, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import BackgroundChanger from "./BackgroundChanger"

const Settings = ({ state, name, login }) => {
  return (
    <div 
      className={`absolute -bottom-80 right-4 w-96 z-10
      bg-white rounded shadow-sm px-2 py-3 overflow-hidden
      transition duration-150 ease-linear ${state ? 'visible opacity-100' : 'invisible opacity-0'}
      `}
    >
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faUserCircle} className="text-6xl" />
        <h1 className="text-2xl mx-2 mt-2 truncate" title={name}>{name}</h1>
        <h2 className="text-xl mx-2 mb-2 truncate" title={login}>{login}</h2>
        <hr className="w-full h-1" />
        <BackgroundChanger />
        <hr className="w-full h-1" />
        <button title="Marcar ponto" className="default-button bg-blue-500 text-white"> 
          <FontAwesomeIcon icon={faUtensils} className="default-button-icon" />
          Marcar ponto
        </button>
        <button title="Sair" className="default-button bg-red-500 text-white"> 
          <FontAwesomeIcon icon={faSignOutAlt} className="default-button-icon" />
          Sair
        </button>
      </div>
    </div>
  );
};

export default Settings;
