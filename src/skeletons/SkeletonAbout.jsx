import React from "react";

function SkeletonAbout() {
  return (
    <div className="w-72 bg-gray-100 shadow-md dark:bg-slate-800 rounded-t-md dark:text-gray-200 p-1 animate-pulse">
      <div className="w-full h-60 rounded-t-md  bg-gray-300 dark:bg-slate-600 object-cover"></div>
      <div className="text-center text-slate-800 dark:text-gray-200 my-2">
        <p className="my-2 w-full h-3 rounded bg-gray-300 dark:bg-slate-600"></p>
        <p className="my-2 w-full h-3 rounded bg-gray-300 dark:bg-slate-600"></p>
        <p className="my-2 w-full h-3 rounded bg-gray-300 dark:bg-slate-600"></p>
        <p className="my-2 w-full h-3 rounded bg-gray-300 dark:bg-slate-600"></p>
      </div>
    </div>
  );
}

export default SkeletonAbout;
