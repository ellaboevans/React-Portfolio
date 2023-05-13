import React from "react";
import { navItems } from "../../data";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function MobileNavigation() {
  return (
    <div className="lg:hidden">
      <div className="w-full bg-gray-100 text-gray-600 dark:bg-white absolute top-24 left-0 dark:text-slate-700 flex flex-col items-center justify-start p-4 shadow-md z-10 space-y-4 font-bold">
        {navItems.map((item) => (
          <CustomLink to={item.link} key={item.id}>
            {item.name}
          </CustomLink>
        ))}
      </div>
    </div>
  );
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div className={`${isActive === to && "active"}`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default MobileNavigation;
