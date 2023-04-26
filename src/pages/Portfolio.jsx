import React from "react";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden">
      <Helmet>
        <title>Evans Elabo - Portfolio</title>
      </Helmet>
      <NavBar />
      <div className="font-bold text-[60px] dark:text-white text-center mt-32">
        Portfolio page is under construction
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
