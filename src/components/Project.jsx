import React from "react";
import Card from "./Card";
import { projects } from "../../data";
import { Link } from "react-router-dom";

function Project() {
  const itemsPerPage = 3;
  const data = projects;

  // Calculate the start and end index of the items to display
  const slicedData = data.slice(0, itemsPerPage);

  return (
    <section className="w-screen py-8 dark:bg-slate-800 duration-100">
      <div>
        <div className="flex justify-evenly items-center">
          <div className="hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
          <p className="dark:text-gray-200 uppercase text-slate-700 text-[22px] font-semibold">
            Some of my latest work
          </p>
          <div className=" hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center px-12 md:px-24 py-6 gap-4">
          {/* Card Components */}
          {slicedData.map((project) => (
            <Card
              key={project.id}
              img={project.img}
              title={project.title}
              description={project.description}
              tag={project.tag}
            />
          ))}
        </div>
        <div className="w-36 text-center mx-auto items-center">
          <Link to="/portfolio">
            <p
              className="dark:text-white bg-gray-200 dark:bg-slate-700 py-2 px-4 mt-8 dark:hover:bg-slate-500 rounded-md hover:bg-sky-600 transition hover:text-white cursor-pointer
            "
            >
              View More
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project;
