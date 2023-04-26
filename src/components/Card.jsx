import React from "react";

function Card({ title, description, img, tag }) {
  return (
    <div className=" w-full p-4 dark:bg-slate-800 shadow rounded dark:hover:outline outline-1 dark:outline-slate-400 hover:shadow-lg duration-300 cursor-pointer">
      <div>
        <img src={img} className="w-[100%] h-[200px] object-cover rounded" />
      </div>
      <div className="flex items-center mt-2 ">
        <p className="dark:text-gray-200 text-slate-700 font-semibold text-[22px] flex-1">
          {title}
        </p>
        <p className="py-1 px-4 text-xs dark:text-white font-bold rounded bg-gray-200 text-slate-700 dark:bg-sky-700">
          {tag ? tag : "No Category"}
        </p>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default Card;
