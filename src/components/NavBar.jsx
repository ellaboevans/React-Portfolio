import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { navItems, options } from "../../data";
import MobileNavigation from "./MobileNavigation";

function NavBar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage))
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" w-screen dark:bg-slate-800 py-4 px-10 md:px-36 dark:text-white sticky md:mt-4">
      <div className="flex justify-between  md:justify-between items-center">
        <Link
          to="/"
          className="text-[20px] text-gray-800 dark:text-white font-semibold mt-8 md:mt-0"
        >
          CodeConcept 🇬🇭
        </Link>
        <div className="hidden md:flex  items-center justify-between space-x-3">
          {/* Navigation Items */}
          <div className="flex space-x-3 text-gray-800 items-center dark:text-white">
            {navItems.map((item) => (
              <Link
                to={item.link}
                className="hover:text-red-500 dark:hover:text-sky-600 transition duration-300"
                key={item.id}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="bg-gray-200 dark:text-gray-100 dark:bg-slate-700 duration-100  rounded-md cursor-pointer">
            {options.map((option) => (
              <button
                className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                  theme === option.text && "text-sky-600"
                }`}
                key={option.icon}
                onClick={() => setTheme(option.text)}
              >
                <ion-icon name={option.icon} title={option.text}></ion-icon>
              </button>
            ))}
          </div>
        </div>
        <div className="md:hidden flex flex-col  dark:text-gray-100 duration-100  rounded-md cursor-pointer absolute top-[500px] right-0  px-3 ">
          {options.map((option) => (
            <button
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 animate-[bounce_4s_infinite] hover:animate-none ${
                theme === option.text && "text-sky-600"
              }`}
              key={option.icon}
              onClick={() => setTheme(option.text)}
            >
              <ion-icon name={option.icon} title={option.text}></ion-icon>
            </button>
          ))}
        </div>
        <div
          className=" md:hidden dark:border-white py-1 mt-8 px-3 dark:border rounded cursor-pointer"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {isOpen && <MobileNavigation />}
    </nav>
  );
}

export default NavBar;
