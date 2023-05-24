import React from "react";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import BootCampItems from "../components/BootCampItems";

function BootCamp() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden scrollbar-thin scrollbar-thumb-sky-600 dark:scrollbar-track-slate-700 scrollbar-track-gray-200 scrollbar-rounded-md">
      <Helmet>
        <title>Evans Elabo - BootCamp</title>
        <link rel="canonical" href="/bootcamp" />
        <meta
          name="description"
          content="Looking for a creative product designer and frontend web developer? Look no further than Evans Elabo!"
        />
      </Helmet>
      <NavBar />
      <BootCampItems />
      <Footer />
    </div>
  );
}

export default BootCamp;
