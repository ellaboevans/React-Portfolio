import React from "react";
import { Link } from "react-router-dom";

function Skills({ img, title, description, tools }) {
  return (
    <div className=" text-center w-full p-4 dark:bg-slate-800 shadow rounded hover:shadow-lg duration-300 cursor-pointer">
      <div>
        <img src={img} className="w-[100%] h-[200px] object-cover rounded" />
      </div>
      <div className="flex items-center mt-2 ">
        <p className="dark:text-gray-200 text-slate-700 font-semibold text-[22px] flex-1">
          {title}
        </p>
        
      </div>
      <p className="text-gray-400 mb-3">{description}</p>
      <div>
        <p className="text-gray-400 dark:text-gray-100 text-sm">{tools}</p>
      </div>
    </div>
  );
}

export default Skills;
