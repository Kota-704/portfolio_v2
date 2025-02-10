"use client";

import { useState } from "react";
import Hamburger from "../hamburger";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="hamburger fixed top-6 right-5 z-50 lg:hidden h-4 w-8 cursor-pointer"
      >
        <span
          className={`absolute h-px w-8 left-0 bg-white transition-transform duration-300 ${
            isOpen ? "rotate-45 top-2" : "top-0"
          }`}
        ></span>
        <span
          className={`absolute h-px w-8 left-0 bg-white transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "top-2"
          }`}
        ></span>
        <span
          className={`absolute h-px w-8 left-0 bg-white transition-transform duration-300 ${
            isOpen ? "-rotate-45 top-2" : "top-4"
          }`}
        ></span>
      </button>
      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
