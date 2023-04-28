import React from "react";

function SkeletonElement() {
  return (
    <>
      <div className=" w-full h-full p-4 dark:bg-slate-800 shadow rounded dark:hover:outline outline-1 dark:outline-slate-400 hover:shadow-lg duration-300">
        <div className="animate-pulse ">
          <div className="w-[100%] h-[200px] bg-gray-300 dark:bg-slate-600 rounded"></div>
        </div>
        <div className="flex items-center mt-2 ">
          <p className=" my-2 rounded mr-2 bg-gray-300 h-3 dark:bg-slate-600 flex-1"></p>
          <p className="w-20 h-3 rounded bg-gray-300 dark:bg-slate-600 bg-gray-200"></p>
        </div>
        <p className="mb-2 w-full h-3 bg-gray-300 rounded dark:bg-slate-600"></p>
        <p className="mb-2 w-full h-3 bg-gray-300 rounded dark:bg-slate-600"></p>
        <p className="mb-2 w-full h-3 bg-gray-300 rounded dark:bg-slate-600"></p>
        <p className="mb-2 w-full h-3 bg-gray-300 rounded dark:bg-slate-600"></p>
        <p className="mb-2 w-full h-3 bg-gray-300 rounded dark:bg-slate-600"></p>
        <div className="w-5 h-5 roundedvbg-gray-300 dark:bg-slate-600"></div>
      </div>
    </>
  );
}

export default SkeletonElement;
