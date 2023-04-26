import React from "react";

function Card({ title, description, img }) {
  return (
    <div className=" w-full p-4 dark:bg-slate-800 shadow rounded dark:hover:outline outline-1 dark:outline-slate-400 hover:shadow-lg duration-300">
      <div>
        <img src={img} className="w-[100%] h-[200px] object-cover rounded" />
      </div>
      <p className="dark:text-gray-200 text-slate-700 mt-2 font-semibold text-[22px]">
        {title}
      </p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default Card;
