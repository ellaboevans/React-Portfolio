import React, { useState, useEffect } from "react";
import createClient from "../client";
import SkeletonElement from "../skeletons/SkeletonElement";

function ProjectPortfolio() {
  // const itemsPerPage = 6;
  const [projectData, setProjectData] = useState(null);
  // const [currentPage, setCurrentPage] = useState(1);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`
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
      `);

        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-screen py-8 dark:bg-slate-800 duration-100">
      <div className="md:px-24 px-8 mt-10 md:w-2/4 ">
        <h1 className="dark:text-gray-200 md:text-left text-center uppercase text-slate-700 text-[30px] font-semibold">
          Projects🚀
        </h1>
        <p className="dark:text-gray-500 text-center md:text-left text-slate-400 w-full">
          Explore my captivating portfolio and witness the evolution of my
          skills and expertise. Delve into a collection of projects that
          exemplify my dedication, creativity, and growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center px-12 md:px-24 py-6 gap-4">
        {/* Card Components */}
        {!projectData &&
          [1, 2, 3, 4, 5, 6].map((n) => <SkeletonElement key={n} />)}
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
                  className="w-[100%] h-[200px] object-cover  rounded"
                />
              </div>
              <div className="flex items-center mt-2 ">
                <p className="dark:text-gray-200 text-slate-700 font-semibold text-[22px] capitalize flex-1">
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
      </div>
      {/* Pagination */}
      {/* <div className="w-[300px] flex justify-center py-2 items-center mx-auto space-x-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="p-2 bg-gray-300 dark:bg-gray-500 text-slate-700 dark:text-gray-100  items-center flex rounded-full cursor-pointer"
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>

        <button
          disabled={endIndex >= projectData.length}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="p-2 bg-gray-300 dark:bg-gray-500 text-slate-700 dark:text-gray-100 items-center flex rounded-full cursor-pointer"
        >
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div> */}
    </section>
  );
}

export default ProjectPortfolio;
