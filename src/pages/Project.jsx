import React from "react";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import ProjectPortfolio from "../components/ProjectPortfolio";

function Project() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden">
      <Helmet>
        <title>Evans Elabo - Project</title>
      </Helmet>
      <NavBar />
      {/* <div className="font-bold text-[60px] dark:text-white text-center mt-32">
        Project page is under construction
      </div> */}
      <ProjectPortfolio />
      <Footer />
    </div>
  );
}

export default Project;
