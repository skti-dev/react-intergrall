import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function IconSettings() {
  return (
    <div className="flex p-2">
      <FontAwesomeIcon icon={faUserCircle} className="text-3xl text-i-black-700 cursor-pointer" />
    </div>
  )
}

export default IconSettings;
