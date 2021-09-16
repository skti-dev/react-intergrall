import React, { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-5 bg-gray-400 rounded-full transition ease transform duration-300`;

  return (
    <button className="flex flex-col mr-2 h-4 justify-between items-center group" onClick={() => { setIsOpen(!isOpen) }} title="menu-hamburguer">
      <div className={`${genericHamburgerLine} ${isOpen ? "transform rotate-45 translate-y-2 opacity-50 group-hover:opacity-100": "opacity-50 group-hover:opacity-100" }`} />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100" }`} />
      <div className={`${genericHamburgerLine} ${isOpen ? "transform -rotate-40 -translate-y-1.5  opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100" }`} />
    </button>
  )
}

export default Menu;
