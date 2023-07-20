import React from "react";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import ProjectPortfolio from "../components/ProjectPortfolio";

function Project() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden scrollbar-thin scrollbar-thumb-sky-600 dark:scrollbar-track-slate-700 scrollbar-track-gray-200 scrollbar-rounded-md">
      <Helmet>
        <title>Evans Elabo | Project</title>
        <link rel="canonical" href="/project" />
        <meta
          name="description"
          content="Looking for a creative product designer and frontend web developer? Look no further than Evans Elabo!"
        />
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
