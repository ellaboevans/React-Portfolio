import React from "react";
import { Link } from "react-router-dom";
import { socialItems } from "../../data";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex dark:bg-slate-700 bg-slate-200 text-center md:text-left space-y-10 flex-col  md:flex md:space-y-0 md:flex-row items-center justify-between w-screen  py-10 px-10 md:px-36 ">
      <div>
        <Link
          to="/"
          className="text-[20px] text-gray-800 dark:text-white font-semibold "
        >
          CodeConcept 🇬🇭
        </Link>
        <p className="my-2 dark:text-white">© {year} All Right Reserved.</p>
        <div className="space-x-3 items-center">
          <Link
            to="#"
            className="dark:text-gray-400 dark:hover:text-white  duration-100"
          >
            Team
          </Link>
          <Link
            to="#"
            className="dark:text-gray-400 dark:hover:text-white  duration-100"
          >
            Join Our Team
          </Link>
        </div>
      </div>
      <div className=" flex flex-col space-y-3 items-center dark:text-white">
        <p className="text-[20px] text-gray-800 dark:text-white font-semibold ">
          Let's Connect
        </p>
        <div className=" flex gap-8">
          {socialItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="  rounded-full cursor-pointer hover:translate-x-2 duration-500 ease"
            >
              <ion-icon name={item.name} title={item.name}></ion-icon>
            </Link>
          ))}
        </div>
      </div>
      <div className="dark:text-white flex space-y-3 flex-col">
        <p className="text-[20px] text-gray-800 dark:text-white font-semibold ">
          Contact
        </p>
        <a href="mailto:ellaboevans@gmail.com">ellaboevans@gmail.com</a>
        <a href="tel:+233559237619">+233 559 237 619</a>
      </div>
    </footer>
  );
}

export default Footer;
