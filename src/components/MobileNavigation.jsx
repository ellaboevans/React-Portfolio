import React from "react";
import { navItems } from "../../data";
import { Link } from "react-router-dom";

function MobileNavigation() {
  return (
    <div className="md:hidden">
      <div className="w-full bg-slate-600 dark:bg-white absolute top-24 left-0 text-white dark:text-slate-700 flex flex-col items-center justify-start p-4 rounded-lg shadow-lg">
        {navItems.map((item) => (
          <Link
            to={item.link}
            className="text-lg font-semibold py-2 px-12 hover:bg-slate-800 hover:text-white rounded duration-300"
            key={item.id}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNavigation;
