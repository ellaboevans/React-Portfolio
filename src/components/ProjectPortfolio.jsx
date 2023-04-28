import React, { useState, useEffect } from "react";
import createClient from "../client";
import SkeletonElement from "../skeletons/SkeletonElement";

function ProjectPortfolio() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      createClient
        .fetch(
          `
    *[_type=="project"]{
      title,
      description,
      projectImage{
        asset->{
          _id,
          url
        }
      },
      category,
      link
    }
    `
        )
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, 2000);
  }, []);
  return (
    <section className="w-screen py-8 dark:bg-slate-800 duration-100">
      <div className="flex justify-evenly items-center">
        <div className="hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
        <p className="dark:text-gray-200 uppercase text-slate-700 text-[22px] font-semibold">
          Some of my latest work
        </p>
        <div className=" hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center px-12 md:px-24 py-6 gap-4">
        {/* Card Components */}
        {projectData &&
          projectData.map((project, index) => (
            <div
              className=" w-full p-4 dark:bg-slate-800 shadow rounded dark:hover:outline outline-1 dark:outline-slate-400 hover:shadow-lg duration-300"
              key={index}
            >
              <div>
                <img
                  src={project.projectImage?.asset.url}
                  alt={project.title}
                  className="w-[100%] h-[200px] object-cover rounded"
                />
              </div>
              <div className="flex items-center mt-2 ">
                <p className="dark:text-gray-200 text-slate-700 font-semibold text-[22px] flex-1">
                  {project.title}
                </p>
                <p className="py-1 px-2 text-xs dark:text-white font-bold rounded bg-gray-200 text-slate-700 dark:bg-sky-700">
                  {project.category ? project.category : "No Category"}
                </p>
              </div>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="dark:text-gray-100 text-slate-700  text-xl p-2 hover:bg-sky-600 hover:text-gray-100 rounded duration-300"
              >
                <ion-icon name="open-outline"></ion-icon>
              </a>
            </div>
          ))}
        {!projectData &&
          [1, 2, 3, 4, 5, 6].map((n) => <SkeletonElement key={n} />)}
      </div>
      {/* Pagination */}
      {/* <div className="w-[300px] flex justify-center py-2 items-center mx-auto space-x-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="p-2 bg-gray-300 dark:bg-gray-500 text-slate-700 dark:text-gray-100  items-center flex rounded-full"
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>

        <button
          disabled={endIndex >= data.length}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="p-2 bg-gray-300 dark:bg-gray-500 text-slate-700 dark:text-gray-100 items-center flex rounded-full"
        >
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div> */}
    </section>
  );
}

export default ProjectPortfolio;
