import React from "react";
import NavBar from "../components/NavBar";

function About() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden">
      <NavBar />
      <div className="font-bold text-[60px] dark:text-white text-center mt-32">
        About Page
      </div>
    </div>
  );
}

export default About;
