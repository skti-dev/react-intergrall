import React, { useState, createContext } from "react";
const BackgroundContext = createContext();

const BackgroudProvider = ({ children }) => {
  const [background, setBackground] = useState("");
  return (
    <BackgroundContext.Provider value={background, setBackground}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default { BackgroundContext, BackgroudProvider };
