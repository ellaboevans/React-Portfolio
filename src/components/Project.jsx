import React from "react";
import Card from "./Card";

function Project() {
  return (
    <section className="w-screen py-8 dark:bg-slate-800">
      <div className="flex justify-evenly items-center">
        <div className="hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
        <p className="dark:text-gray-200 uppercase text-slate-700 text-[28px] font-semibold">
          Some of my latest work
        </p>
        <div className=" hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-cener px-24 py-6 gap-4">
        {/* Card Components */}
        <Card
          img="https://images.pexels.com/photos/4451501/pexels-photo-4451501.jpeg"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
        />
        <Card
          img="https://images.pexels.com/photos/12745010/pexels-photo-12745010.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
        />
        <Card
          img="https://images.pexels.com/photos/4451501/pexels-photo-4451501.jpeg"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
        />
        <Card
          img="https://images.pexels.com/photos/4451501/pexels-photo-4451501.jpeg"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
        />
        <Card
          img="https://images.pexels.com/photos/4451501/pexels-photo-4451501.jpeg"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
        />
        <Card
          img="https://images.pexels.com/photos/4451501/pexels-photo-4451501.jpeg"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
        />
      </div>
    </section>
  );
}

export default Project;
