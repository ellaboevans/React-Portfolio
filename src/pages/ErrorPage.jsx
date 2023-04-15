import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden">
      <NavBar />
      <div className="font-bold text-[60px] dark:text-white text-center mt-32">
        Opps! Page not found
      </div>
      <div className="text-center text-[18px] font-semibold mt-8">
        <Link to="/" className="rounded py-2 px-6 bg-slate-400">
          Go back!
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
