import React from "react";

function SkeletonStack() {
  return (
    <div>
      <div className="md:hidden py-1 flex items-center">
        <div className="mx-2 w-20 h-16 dark:bg-slate-600 bg-gray-400 rounded animate-pulse"></div>
      </div>
    </div>
  );
}

export default SkeletonStack;
