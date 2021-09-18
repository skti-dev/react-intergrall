import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Settings from "./Settings";

const IconSettings = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }

  return (
    <div className="flex p-2 relative">
      <FontAwesomeIcon icon={faUserCircle} className="text-3xl text-i-black-800 cursor-pointer default-hover" onClick={() => toggleSettings()} />
      <Settings state={isSettingsOpen} name="Augusto Seabra" login="RE028771" />
    </div>
  )
}

export default IconSettings;
