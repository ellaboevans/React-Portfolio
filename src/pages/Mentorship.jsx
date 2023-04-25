import React from "react";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";

function Mentorship() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden">
      <Helmet>
        <title>Evans Elabo - Mentorship</title>
        <meta
          name="description"
          content="Looking for a creative product designer and frontend web developer? Look no further than Evans Elabo! With expertise in Figma design and frontend website development, Evans brings innovative ideas to life with stunning visuals and flawless functionality. Visit the portfolio website now to see his latest work."
        />
        <meta name="author" content="Evans Elabo" />
        <meta
          name="keywords"
          content="product design, frontend web development, Figma, portfolio"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mentorship" />
        <meta
          name="twitter:description"
          content="Looking for a creative product designer and frontend web developer? Look no further than Evans Elabo!"
        />
        <meta
          name="twitter:image"
          content="https://t4.ftcdn.net/jpg/03/56/02/11/240_F_356021129_xu10B4UK64NAxI17YyXq3MRiKIV0R93E.jpg"
        />
        <meta name="twitter:image:alt" content="Site Logo" />
      </Helmet>
      <NavBar />
      <div className="font-bold text-[60px] dark:text-white text-center mt-32">
        Mentorship page is under construction
      </div>
    </div>
  );
}

export default Mentorship;
