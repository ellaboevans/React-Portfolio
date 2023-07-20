import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { navItems, options } from "../../data";
import { motion } from "framer-motion";

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
  const [navItem, setNavItem] = useState([]);

  useEffect(() => {
    setNavItem(navItems);
  }, []);

  const variants = {
    open: { opacity: 1, y: 0, duration: 5 },
    closed: {
      opacity: 0,
      y: "-100%",
    },
  };
  const logoVariants = {
    hidden: {
      x: "-1000%",
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
      },
    },
  };
  const navigationVariants = {
    hidden: {
      x: "1000%",
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
      },
    },
  };

  return (
    <nav className=" w-screen outline outline-gray-600 outline-1 dark:bg-slate-800 py-4 px-10 xl:px-24 dark:text-white overflow-hidden">
      <div className="flex justify-between my-4  md:justify-between items-center">
        <motion.a
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          href="/"
          className="text-[20px] text-gray-800 dark:text-white font-semibold"
        >
          CodeConcept 🇬🇭
        </motion.a>
        <motion.div
          variants={navigationVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex  items-center justify-between space-x-3"
        >
          {/* Navigation Items */}
          <div className="flex space-x-3 text-gray-800 items-center dark:text-white">
            {navItem.map((item) => (
              <CustomLink to={item.link} key={item.id}>
                {item.name}
              </CustomLink>
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
        </motion.div>
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
        <motion.div
          variants={navigationVariants}
          initial="hidden"
          animate="visible"
          className=" lg:hidden dark:border-white py-1  px-3 dark:border rounded cursor-pointer"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </motion.div>
      </div>
      {/* Mobile Menu Starts */}
      <div className="lg:hidden">
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="bg-gray-100 text-gray-600 dark:bg-white h-screen absolute dark:text-slate-700 p-10 shadow-md z-10 space-y-4 font-bold right-0 left-0 top-0"
        >
          <div
            className="absolute right-6 top-8 dark:border-white py-1  px-3 dark:border rounded cursor-pointer"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <FontAwesomeIcon icon={faClose} />
          </div>
          <div className="flex flex-col items-center my-24 gap-5">
            {navItems.map((item) => (
              <CustomLink
                to={item.link}
                key={item.id}
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                {item.name}
              </CustomLink>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div className={`${isActive === to && "active"}`}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </div>
  );
};

export default NavBar;

// py-2 px-2 dark:bg-slate-400 bg-gray-200 rounded
