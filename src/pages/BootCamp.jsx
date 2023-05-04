import React from "react";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import BootCampItems from "../components/BootCampItems";

function BootCamp() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden">
      <Helmet>
        <title>Evans Elabo - BootCamp</title>
      </Helmet>
      <NavBar />
      <BootCampItems />
      <Footer />
    </div>
  );
}

export default BootCamp;
