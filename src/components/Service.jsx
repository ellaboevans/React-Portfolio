import React, { useEffect, useState } from "react";
import createClient from "../client";
import SkeletonElement from "../skeletons/SkeletonElement";
import SkeletonService from "../skeletons/SkeletonService";

function Service() {
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      createClient
        .fetch(
          `
     *[_type == "service"]{
      title,
      description,
      tags,
      serviceImage{
        asset->{
          _id,
          url
        }
      }
      
    }
    `
        )
        .then((data) => setSkillsData(data))
        .catch(console.error);
    },2000)
  }, []);

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
        {skillsData &&
          skillsData.map((skill, index) => (
            <div
              className=" text-center w-full p-4 dark:bg-slate-800 shadow rounded hover:shadow-lg duration-300"
              key={index}
            >
              <div>
                <img
                  src={skill.serviceImage?.asset.url}
                  alt={skill.title}
                  className="w-[100%] h-[200px] object-cover rounded"
                />
              </div>
              <div className="flex items-center mt-2 ">
                <p className="dark:text-gray-200 text-slate-700 font-semibold text-[22px] flex-1">
                  {skill.title}
                </p>
              </div>
              <p className="text-gray-400 mb-3">{skill.description}</p>
              <div>
                <p className="text-gray-400 font-semibold dark:text-gray-100 text-sm">
                  {skill.tags}
                </p>
              </div>
            </div>
          ))}
        {!skillsData && [1, 2, 3].map((n) => <SkeletonService key={n} />)}
      </div>
    </section>
  );
}

export default Service;
