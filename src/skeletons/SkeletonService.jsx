import React from "react";

function SkeletonService() {
  return (
    <div className=" text-center w-full p-4 dark:bg-slate-800 shadow rounded hover:shadow-lg duration-300">
      <div className="animate-pulse">
        <div className="dark:bg-slate-600 bg-gray-300 w-[100%] h-[200px] object-cover rounded"></div>
        <div className="flex items-center my-3 ">
          <p className=" rounded w-40 mx-auto h-3 dark:bg-slate-600 bg-gray-300"></p>
        </div>
        <p className=" mb-2 w-full h-3 rounded bg-gray-300 dark:bg-slate-600"></p>
        <p className=" mb-2 w-full h-3 rounded bg-gray-300 dark:bg-slate-600"></p>
        <p className=" mb-2 w-full h-3 rounded bg-gray-300 dark:bg-slate-600"></p>
        <p className=" mb-2 w-full h-3 rounded bg-gray-300 dark:bg-slate-600"></p>
        <div className=" mt-3 w-full h-3 rounded bg-gray-300 dark:bg-slate-600"></div>
      </div>
    </div>
  );
}

export default SkeletonService;
