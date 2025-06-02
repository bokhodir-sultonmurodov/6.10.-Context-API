import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6 container mx-auto">
        <li>
          <NavLink 
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="wishlist" 
           
          >
            Wishlist
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
