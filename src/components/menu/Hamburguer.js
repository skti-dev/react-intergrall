import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-5 bg-i-black-800 rounded-full transition ease transform duration-300`;

  return (
    <button className="flex flex-col mr-2 h-4 justify-between items-center group" onClick={() => { setIsOpen(!isOpen) }} title="Menu Hamburguer">
      <div className={`${genericHamburgerLine} ${isOpen ? "transform rotate-45 translate-y-2 default-hover-group": "default-hover-group" }`} />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "default-hover-group" }`} />
      <div className={`${genericHamburgerLine} ${isOpen ? "transform -rotate-40 -translate-y-1.5  default-hover-group" : "default-hover-group" }`} />
    </button>
  );
};

export default Menu;
