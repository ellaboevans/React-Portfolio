import React from "react";

function SkeletonSlider() {
  return (
    <div className="flex w-full ">
      <span className="py-1 items-center  mx-8 w-20 h-24 dark:bg-slate-600 bg-gray-400 rounded animate-pulse"></span>
    </div>
  );
}

export default SkeletonSlider;
