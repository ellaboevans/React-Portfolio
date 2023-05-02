import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function ErrorPage() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden">
      <NavBar />
      <div className="flex flex-col items-center justify-center mt-11 md:mt-0 space-y-4">
        <p className="font-bold text-[120px] md:text-[200px] text-gray-600 dark:text-white tracking-widest">
          404
        </p>
        <div>
          <p className="text-[45px] text-center md:text-[50px] text-gray-600 dark:text-white tracking-wide">
            There's
            <span className="uppercase font-bold"> nothing</span> here....
          </p>
        </div>
        <div className="flex items-center jusitfy-center space-x-3 text-[18px] rounded py-2 px-6 bg-gray-200 dark:hover:bg-slate-600 dark:bg-slate-700 text-gray-600 my-4 dark:text-white font-semibold">
          <ion-icon name="arrow-back-outline"></ion-icon>
          <Link to="/">Go back!</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
