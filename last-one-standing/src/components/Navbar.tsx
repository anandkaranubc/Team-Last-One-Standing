// components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-red-600 shadow-md z-50">
      <ul className="flex justify-center space-x-8 p-4">
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-red-100 hover:text-white"
              }`
            }
          >
            User Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/persona"
            className={({ isActive }) =>
              `text-lg font-semibold ${
                isActive
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-red-100 hover:text-white"
              }`
            }
          >
            Persona Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
