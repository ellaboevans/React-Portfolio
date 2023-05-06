import React from "react";

function ResumeBtn() {
  return (
    <>
      <div className="my-5">
        <a
          href="https://drive.google.com/file/d/1NrZwufcDDmitVeMrymndCkXJ6IAGIEUC/view?usp=sharing"
          target="_blank"
          className="dark:text-white bg-gray-200 dark:bg-slate-700 py-2 px-4 mt-8 dark:hover:bg-slate-500 rounded-md hover:bg-sky-600 transition hover:text-white cursor-pointer
            "
        >
          Resume
        </a>
      </div>
    </>
  );
}

export default ResumeBtn;
