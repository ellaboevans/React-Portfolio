import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import BootCamp from "./pages/BootCamp";
import ErrorPage from "./pages/ErrorPage";
import Team from "./pages/Team";

function App() {
  return (
    <div className="dark:bg-slate-800 duration-100">
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="/" exact />
          <Route Component={About} path="/about" />
          <Route Component={Portfolio} path="/portfolio" />
          <Route Component={BootCamp} path="/bootcamp" />
          <Route Component={Team} path="/team" />
          <Route Component={ErrorPage} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

{
  /* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes> */
}
export default App;
