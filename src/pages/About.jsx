import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import Form from "../components/Form";

function About() {
  return (
    <div className="dark:bg-slate-800 duration-100 h-screen w-full overflow-x-hidden scrollbar-thin scrollbar-thumb-sky-600 dark:scrollbar-track-slate-700 scrollbar-track-gray-200 scrollbar-rounded-md">
      <Helmet>
        <title>Evans Elabo | About</title>
        <link rel="canonical" href="/about" />
        <meta
          name="description"
          content="Looking for a creative product designer and frontend web developer? Look no further than Evans Elabo!"
        />
      </Helmet>
      <NavBar />
      <AboutSection />
      <Form />
      <Footer />
    </div>
  );
}

export default About;

//  {
//       id: 1,
//       text: "Greetings! I'm Evans Elabo, a passionate linguistics student who has discovered an unwavering love for software development and design. Throughout my journey, I have honed my skills as a self-taught graphic and website designer for the past five years, and I am now pursuing my first degree at the esteemed Kwame Nkrumah University of Science and Technology.",
//     },
//     {
//       id: 2,
//       text: "My true passion lies in crafting captivating and responsive website designs for both mobile and desktop platforms. The combination of creativity and technicality fuels my drive, as I thrive on the challenges that arise during the design process. I find great satisfaction in wire-framing and prototyping mobile and desktop apps from scratch, meticulously considering usability and carefully designing the information architecture to ensure seamless operation and intuitive decision-making.",
//     },
//     {
//       id: 3,
//       text: "When it comes to my tech stacks, I am well-versed in HTML/CSS, JavaScript, TailwindCSS, React JS, Node JS, MongoDB, and Figma. Continuously learning and expanding my skill set, I dedicate my time as a part-time software developer, actively contributing to both my community and university.",
//     },
//     {
//       id: 4,
//       text: "I am always open to new opportunities and collaborations that allow me to grow both professionally and creatively. If you have an exciting project or a chance to collaborate, I would be thrilled to connect and explore the possibilities together.",
//     },
//     {
//       id: 5,
//       text: "Welcome to my portfolio website, where I showcase my dedication, passion, and ongoing journey as a linguistics student turned software developer and designer. ",
//     },
