import React, { useState } from "react";
import Skills from "./Skills";

function Service() {
  const [skills, setSkills] = useState([
    {
      id: 1,
      img: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg",
      title: "Designing",
      description:
        " I create engaging and intuitive designs using tools like Figma and Adobe XD. My designs are always user-centered and tailored to the specific needs of my clients.",
      tools: "Figma, Adobe XD, ADOBE PHOTOSHOP",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      title: "Frontend Development",
      description:
        " I work closely with my clients to understand their business goals and user needs, and I use my expertise to implement interfaces that are both functional and aesthetically pleasing.",
      tools: "HTML, CSS, JAVASCRIPT, REACTJS, TAILWINDCSS",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg",
      title: "Mentoring",
      description:
        "I am passionate about helping others grow in their careers. I share my knowledge and experience to help aspiring developers improve their skills and achieve their goals.",
      tools: "DESIGN & FRONTEND DEVELOPMENT",
    },
  ]);
  return (
    <section className="w-screen py-8 dark:bg-slate-800">
      <div className="flex justify-evenly items-center">
        <div className="hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
        <p className="dark:text-gray-200 uppercase text-slate-700 text-[22px] font-semibold">
          what i actually do
        </p>
        <div className=" hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center px-12 md:px-24 py-6 gap-4">
        {/* Card Components */}
        {skills.map((skill) => (
          <Skills
            img={skill.img}
            title={skill.title}
            description={skill.description}
            tools={skill.tools}
          />
        ))}
      </div>
    </section>
  );
}

export default Service;
