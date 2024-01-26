import { Link } from "react-router-dom";
import React from "react";

// Link all pages

const Navbar = () => {
  return (
    <>
      <header className="flex items-center justify-between font-roboto px-5 py-3 bg-slate-800 text-white border-b-2">
        <div>
         <h1 className="text-5xl font-caveat font-black "> NotifyMe</h1>
        </div>
        <div>
        <ul className="flex space-x-6 pr-5 items-center text-base font-medium">
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
