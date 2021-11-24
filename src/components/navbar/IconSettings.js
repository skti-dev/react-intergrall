import React, { useState } from "react";
import Settings from "../settings/Settings";

const IconSettings = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="flex p-2 relative">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 cursor-pointer default-hover"  onClick={() => toggleSettings()}>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <Settings state={isSettingsOpen} name="Augusto Seabra" login="RE028771" />
    </div>
  );
};

export default IconSettings;
