import { Link } from "react-router-dom";
import React from "react";

// Link all pages

const Navbar = () => {
  return (
    <>
      <header className="flex item-center justify-between px-5 py-3 bg-blue-500 text-white">
        <div>
         <h1> Abi's</h1>
        </div>
        <div>
        <ul className="flex space-x-2 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Theme</li>
         </ul>
        </div>
      </header>
      
    </>
  );
};

export default Navbar;
