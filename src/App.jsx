import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import BootCamp from "./pages/BootCamp";
import ErrorPage from "./pages/ErrorPage";
import Team from "./pages/Team";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <div className="dark:bg-slate-800 duration-100 ">
      {loading ? <Loader /> : null}
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="/" exact />
          <Route Component={About} path="/about" />
          <Route Component={Project} path="/project" />
          <Route Component={BootCamp} path="/bootcamp" />
          <Route Component={Team} path="/team" />
          <Route Component={ErrorPage} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
