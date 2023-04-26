import React, { useState } from "react";
import Card from "./Card";
import { projects } from "../../data";

function ProjectPortfolio() {
  const itemsPerPage = 6;
  const data = projects;

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index of the items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array based on the start and end index
  const slicedData = data.slice(startIndex, endIndex);

  return (
    <section className="w-screen py-8 dark:bg-slate-800">
      <div className="flex justify-evenly items-center">
        <div className="hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
        <p className="dark:text-gray-200 uppercase text-slate-700 text-[22px] font-semibold">
          Some of my latest work
        </p>
        <div className=" hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center px-12 md:px-24 py-6 gap-4">
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
      {/* Pagination */}
      <div className="w-[300px] flex justify-center py-2 items-center mx-auto space-x-6">
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
      </div>
    </section>
  );
}

export default ProjectPortfolio;
