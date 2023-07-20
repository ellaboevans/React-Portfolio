import React from "react";
import { ThreeCircles } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bg-gray-200 z-20 h-screen overflow-hidden">
      <ThreeCircles
        height="100"
        width="100"
        color="#005475"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );
}

export default Loader;
