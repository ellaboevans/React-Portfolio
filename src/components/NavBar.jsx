import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar({ handleThemeSwitch }) {
  return (
    <nav className=" w-screen py-4 px-10 md:px-36 dark:text-white sticky md:mt-4">
      <div className="flex justify-between  md:justify-between items-center">
        <a href="#" className="text-[20px] font-semibold mt-8 md:mt-0">
          CodeConcept
        </a>
        <div className="hidden md:flex items-center justify-between space-x-3">
          <div className="flex space-x-3 text-gray-800 items-center dark:text-white">
            <a href="#" className="hover:text-red-500 transition duration-300">
              Home
            </a>
            <a href="#" className="hover:text-red-500 transition duration-300">
              About
            </a>
            <a href="#" className="hover:text-red-500 transition duration-300">
              Portfolio
            </a>
          </div>

          <div
            className="bg-gray-200 dark:bg-slate-700 p-1 px-3 dark:hover:bg-slate-500 rounded-md hover:bg-red-500 transition hover:text-white cursor-pointer"
            onClick={handleThemeSwitch}
          >
            <a href="#" className="dark:text-white  text-center">
              <FontAwesomeIcon icon={faMoon} />
            </a>
          </div>
        </div>
        <div className=" md:hidden dark:border-white py-1 mt-8 px-3 dark:border rounded cursor-pointer" >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
