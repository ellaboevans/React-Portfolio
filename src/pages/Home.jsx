import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { socialItems } from "../../data";
import NavBar from "../components/NavBar";
import LogoSlider from "../components/LogoSlider";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Service from "../components/Service";
import ResumeBtn from "../components/ResumeBtn";
import Form from "../components/Form";

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
    <div className="bg-heroWhite bg-contain bg-blend-mulitply dark:bg-her dark:bg-cover bg-center dark:bg-blend-soft-light z-10 h-screen overflow-x-hidden bg-white dark:bg-slate-800 duration-100  scrollbar-thin scrollbar-thumb-sky-600 dark:scrollbar-track-slate-700 scrollbar-track-gray-200 scrollbar-rounded-md">
      <Helmet>
        <title>Evans Elabo - Home</title>
        <meta
          name="description"
          content="I am a student and self-taught software developer specialized in Mobile App Development & Frontend Web Development. I also teach and mentor in the field of Web ..."
        />
        
        <link rel="canonical" href="/" />
      </Helmet>
      <NavBar />
      <div className="  flex items-center px-4 lg:px-8 jusitfy-between h-screeen py-32 w-full duration-100 my-8 md:-my-8 lg:my-0">
        {/* Left Side Items */}

        <div className=" hidden md:flex items-center dark:text-gray-100 flex-col space-y-3 mt-28 lg:mt-0 px-3 animate-[bounce_4s_infinite] hover:animate-none">
          <div className="h-11 w-[2px] dark:bg-slate-400 bg-slate-800"></div>

          {/* Social Icons */}

          {socialItems.map((item) => (
            <a
              key={item.id}
              target="_blank"
              rel="noreferrer noopener"
              href={item.link}
              className="dark:hover:bg-sky-600 items-center flex p-2 rounded-full cursor-pointer hover:translate-x-2 hover:bg-red-500 duration-500 ease"
            >
              <ion-icon name={item.name} title={item.name}></ion-icon>
            </a>
          ))}

          <div className="h-11 w-[2px] dark:bg-slate-400 bg-slate-800"></div>
        </div>

        {/* Center Items */}

        <div className=" flex justify-center flex-col space-y-3 items-center">
          <div className="bg-gray-200 -mt-14 py-2 px-4 dark:text-gray-100 dark:bg-slate-700 duration-100  rounded-md">
            <p className="text-gray-800 dark:text-white font-semibold text-xl tracking-widest ">
              {clock}
            </p>
          </div>
          <div className="dark:text-white  text-gray-800 lg:px-0">
            <h1 className=" text-[18px] text-center">{greeting} I'm</h1>
            <h2 className="font-bold text-[40px] my-2 lg:text-[65px] text-center uppercase">
              Evans Elabo <span className="">✨</span>
            </h2>
            <p className="text-center xl:px-80 mb-4 dark:text-slate-400">
              I am a student and self-taught software developer specialized in
              Mobile App Development & Frontend Web Development. I also teach
              and mentor in the field of Web Programming, Graphics Design &
              UI/UX Design.
            </p>
          </div>
          <ResumeBtn />
        </div>

        {/* Right Side items */}

        <div className="hidden md:flex items-center flex-col space-y-10 mt-24 lg:mt-0 px-3 animate-[bounce_4s_infinite]">
          <div className="h-11 w-[2px] dark:bg-slate-400 bg-slate-800"></div>
          <p className="rotate-90 dark:text-slate-400  ">concept</p>

          <div className="h-11 w-[2px] dark:bg-slate-400 bg-slate-800"></div>
        </div>
      </div>
      <LogoSlider />
      <Service />
      <Project />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
