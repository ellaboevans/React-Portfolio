import React, { useEffect, useState } from "react";

import NavBar from "../components/NavBar";

// Greeting based on time of day
const time = new Date().getHours();
const greeting =
  time < 12
    ? "Good Morning! ☀️"
    : time < 18
    ? "Good Afternoon! 🌙"
    : "Good Evening! 🌑";

function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", JSON.stringify("light"));
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="overflow-x-hidden bg-white dark:bg-slate-800 duration-100">
      <NavBar handleThemeSwitch={handleThemeSwitch} />
      <div className="h-screeen py-32 w-full bg-white dark:bg-slate-800 duration-100 my-8 md:my-0">
        <div className=" flex justify-center flex-col space-y-3 items-center">
          <div className="dark:text-white text-gray-800 px-2 md:px-11">
            <h1 className="font- text-[18px] text-center">{greeting} I'm</h1>
            <h2 className="font-bold text-[40px] md:text-[65px] text-center uppercase">
              Evans Elabo ✨
            </h2>
            <p className="text-center md:px-80 dark:text-slate-400">
              I am a student and self-taught Graphics Designer, UI/UX Engineer,
              Photographer, Mobile App Developer & a Frontend Web Developer. I also volunteer to teach
              Graphics Design & UI/UX Design for WEBTEAM.
            </p>
          </div>
          <div className="mt-8">
            <button
              className="dark:text-white bg-gray-200 dark:bg-slate-700 py-2 px-4 mt-8 dark:hover:bg-slate-500 rounded-md hover:bg-red-500 transition hover:text-white cursor-pointer
            "
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
