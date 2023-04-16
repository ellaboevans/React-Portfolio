import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { socialItems } from "../../data";

// Greeting based on time of day
const time = new Date().getHours();
const greeting =
  time < 12
    ? "Good Morning! ☀️"
    : time < 17
    ? "Good Afternoon! 🌙"
    : "Good Evening! 🌑";

function Home() {
  // Clock display based on local time

  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setClock(new Date().toLocaleTimeString());
  });

  return (
    <div className="bg-heroWhite bg-contain bg-blend-mulitply dark:bg-her dark:bg-cover bg-center dark:bg-blend-soft-light z-10 h-screen overflow-x-hidden bg-white dark:bg-slate-800 duration-100">
      <NavBar />
      <div className="  flex items-center px-4 md:px-8 jusitfy-between h-screeen py-32 w-full duration-100 my-8 md:my-0">
        {/* Left Side Items */}

        <div className=" hidden md:flex items-center dark:text-gray-100 flex-col space-y-3 mt-28 md:mt-0 px-3 animate-[bounce_4s_infinite] hover:animate-none">
          <div className="h-11 w-[2px] dark:bg-slate-400 bg-slate-800"></div>

          {/* Social Icons */}

          {socialItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="dark:hover:bg-sky-600 items-center flex p-2 rounded-full cursor-pointer hover:translate-x-2 hover:bg-red-500 duration-500 ease"
            >
              <ion-icon name={item.name} title={item.name}></ion-icon>
            </Link>
          ))}

          <div className="h-11 w-[2px] dark:bg-slate-400 bg-slate-800"></div>
        </div>

        {/* Center Items */}

        <div className=" flex justify-center flex-col space-y-3 items-center">
          <div className="bg-gray-200 py-2 px-4 dark:text-gray-100 dark:bg-slate-700 duration-100  rounded-md">
            <p className="text-gray-800 dark:text-white font-semibold text-xl tracking-widest ">
              {clock}
            </p>
          </div>
          <div className="dark:text-white text-gray-800 md:px-0">
            <h1 className="font- text-[18px] text-center">{greeting} I'm</h1>
            <h2 className="font-bold text-[40px] my-2 md:text-[65px] text-center uppercase">
              Evans Elabo ✨
            </h2>
            <p className="text-center md:px-80 dark:text-slate-400">
              I am a student and self-taught software developer specialized in
              Mobile App Development & Frontend Web Development. I also teach
              and mentor in the field of Web Programming, Graphics Design &
              UI/UX Design.
            </p>
          </div>
          <div className="mt-8">
            <button
              className="dark:text-white bg-gray-200 dark:bg-slate-700 py-2 px-4 mt-8 dark:hover:bg-slate-500 rounded-md hover:bg-red-500 transition hover:text-white cursor-pointer
            "
              onClick={() => alert("This feature is not yet available 🙁")}
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Right Side items */}

        <div className="hidden md:flex items-center flex-col space-y-10 mt-24 md:mt-0 px-3 animate-[bounce_4s_infinite]">
          <div className="h-11 w-[2px] dark:bg-slate-400 bg-slate-800"></div>
          <p className="rotate-90 dark:text-slate-400  ">concept</p>

          <div className="h-11 w-[2px] dark:bg-slate-400 bg-slate-800"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
