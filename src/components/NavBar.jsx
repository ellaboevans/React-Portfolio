import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { navItems } from "../../data";

function NavBar({ handleThemeSwitch }) {
  return (
    <nav className=" w-screen py-4 px-10 md:px-36 dark:text-white sticky md:mt-4">
      <div className="flex justify-between  md:justify-between items-center">
        <Link to="/" className="text-[20px] font-semibold mt-8 md:mt-0">
          CodeConcept
        </Link>
        <div className="hidden md:flex items-center justify-between space-x-3">
          {/* Navigation Items */}
          <div className="flex space-x-3 text-gray-800 items-center dark:text-white">
            {navItems.map((item) => (
              <Link
                to={item.link}
                className="hover:text-red-500 transition duration-300"
                key={item.id}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div
            className="bg-gray-200 dark:bg-slate-700 p-1 px-3 dark:hover:bg-slate-500 rounded-md hover:bg-red-500 transition hover:text-white cursor-pointer"
            onClick={handleThemeSwitch}
          >
            <button className="dark:text-white  text-center">
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </div>
        </div>
        <div
          className=" md:hidden dark:border-white py-1 mt-8 px-3 dark:border rounded cursor-pointer"
          onClick={() => alert("Oops! We're yet to implement features.")}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
