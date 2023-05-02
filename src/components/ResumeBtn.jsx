import React from 'react'

function ResumeBtn() {
  return (
    <>
      <div className="my-5">
        <a
          href="https://docs.google.com/document/d/1-I3gFV0nVhNoS-itnti1TeZJFrCxEilgrX2b_Bdo3qw/edit?usp=sharing"
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

export default ResumeBtn