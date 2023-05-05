import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import createClient from "../client";
import SkeletonElement from "../skeletons/SkeletonElement";

function Project() {
  const itemsPerPage = 3;
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`
          *[_type=="project"]{
            title,
            description,
            projectImage{
              asset->{
                url,
              }
            },
            category,
            link,
          }
        `);
        const limitedData = data.slice(0, itemsPerPage);
        setProjectData(limitedData);
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
      <div>
        <div className="flex justify-evenly items-center">
          <div className="hidden md:block h-[2px]  md:w-4/12 w-96 dark:bg-slate-400 bg-slate-800"></div>
          <p className="dark:text-gray-200 text-center uppercase text-slate-700 text-[22px] font-semibold">
            Some of my latest work
          </p>
          <div className=" hidden md:block h-[2px]  md:w-4/12 w-96 dark:bg-slate-400 bg-slate-800"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-12 lg:px-24 py-6 gap-4">
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
                  <p className="dark:text-gray-200 text-slate-700 font-semibold capitalize text-[22px] flex-1">
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
          {!projectData && [1, 2, 3].map((n) => <SkeletonElement key={n} />)}
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
