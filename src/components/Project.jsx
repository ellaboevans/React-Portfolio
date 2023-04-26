import React from "react";
import Card from "./Card";

function Project() {
  return (
    <section className="w-screen py-8 dark:bg-slate-800">
      <div className="flex justify-evenly items-center">
        <div className="hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
        <p className="dark:text-gray-200 uppercase text-slate-700 text-[22px] font-semibold">
          Some of my latest work
        </p>
        <div className=" hidden md:block h-[2px] w-96 dark:bg-slate-400 bg-slate-800"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center px-12 md:px-24 py-6 gap-4">
        {/* Card Components */}
        <Card
          img="https://cdn.dribbble.com/userupload/4173059/file/original-1aebd83221dfcb583799b43de30c4621.png?compress=1&resize=320x240&vertical=top"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
          tag="UX Design"
        />
        <Card
          img="https://cdn.dribbble.com/userupload/4396498/file/original-7f018dd4f3260b5099adc5fd8da28dee.png?compress=1&resize=1024x768"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
          tag="Mobile App"
        />
        <Card
          img="https://cdn.dribbble.com/userupload/4962756/file/original-732a558b1b3ae95a7551f61a5c0a9b47.png?compress=1&resize=400x300&vertical=top"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
          tag="UI Design"
        />
        <Card
          img="https://cdn.dribbble.com/userupload/5223146/file/original-01cba0b74c69d26af2ff386a3824fcbe.png?compress=1&resize=320x240&vertical=top"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
          tag="Web Design"
        />
        <Card
          img="https://cdn.dribbble.com/userupload/4823854/file/original-7658742d626e1486fdfa889f556eb90a.png?compress=1&resize=320x240&vertical=top"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
          tag="Frontend Dev."
        />
        <Card
          img="https://cdn.dribbble.com/userupload/4399707/file/original-be5d0f58a9efd912c1cd721ee42c8ebb.png?compress=1&resize=320x240&vertical=top"
          title="Project Name"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsa
        earum pariatur nam asperiores dicta corporis cupiditate! Eveniet, alias
        excepturi."
          tag=""
        />
      </div>
    </section>
  );
}

export default Project;
