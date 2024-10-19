"use client"
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-x-8">
        <div className="text-white text-2xl font-bold">FVD</div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`hidden sm:flex items-center space-x-6`}
        >
          <a
            href="#"
            className="text-white uppercase hover:text-gray-400 transition-colors"
          >
            About us
          </a>
          <a
            href="#"
            className="text-white uppercase hover:text-gray-400 transition-colors"
          >
            How to buy
          </a>
          <a
            href="#"
            className="text-white uppercase hover:text-gray-400 transition-colors"
          >
            Tokenomics
          </a>
          <a
            href="#"
            className="text-white uppercase hover:text-gray-400 transition-colors"
          >
            Social
          </a>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <a href="#" className="block uppercase text-center text-white py-2 px-4 hover:bg-gray-700">
          About us
        </a>
        <a href="#" className="block uppercase text-center text-white py-2 px-4 hover:bg-gray-700">
          How to buy
        </a>
        <a href="#" className="block uppercase text-center text-white py-2 px-4 hover:bg-gray-700">
          Tokenomics
        </a>
        <a href="#" className="block uppercase text-center text-white py-2 px-4 hover:bg-gray-700">
          Social
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
