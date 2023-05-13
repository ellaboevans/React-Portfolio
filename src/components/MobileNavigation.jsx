import React, { useState } from "react";
import { navItems } from "../../data";
import { Link } from "react-router-dom";

function MobileNavigation() {
  const [isActive, setIsActive] = useState("Home");
  return (
    <div className="lg:hidden ">
      <div className="w-full bg-gray-100 text-gray-600 dark:bg-white absolute top-24 left-0 dark:text-slate-700 flex flex-col items-center justify-start p-4 shadow-md z-10 space-y-4">
        {navItems.map((item) => (
          <Link
            to={item.link}
            className={`text-lg font-semibold duration-300 ${
              isActive === item.name &&
              " bg-slate-800 text-white rounded py-2 px-12"
            }`}
            key={item.id}
            onClick={() => setIsActive(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNavigation;
