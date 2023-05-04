import React, { useEffect, useState } from "react";
import createClient from "../client";

function BootCampItems() {
  const [bootCamps, setBootCamps] = useState([
    {
      id: 1,
      image:
        "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
      title: "Adobe Photoshop Training",
      date: "Oct 14, 2021",
      time: "16:00 GMT",
      link: "/bootcamp/form",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
    },

    {
      id: 2,
      image:
        "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
      title: "Adobe Photoshop Training",
      date: "Oct 14, 2021",
      time: "16:00 GMT",
      link: "/bootcamp/form",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
    },

    {
      id: 3,
      image:
        "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
      title: "Adobe Photoshop Training",
      date: "Oct 14, 2021",
      time: "16:00 GMT",
      link: "/bootcamp/form",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
    },
    {
      id: 4,
      image:
        "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
      title: "Adobe Photoshop Training",
      date: "Oct 14, 2021",
      time: "16:00 GMT",
      link: "/bootcamp/form",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
    },
    {
      id: 5,
      image:
        "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
      title: "Adobe Photoshop Training",
      date: "Oct 14, 2021",
      time: "16:00 GMT",
      link: "/bootcamp/form",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
    },
    {
      id: 6,
      image:
        "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
      title: "Adobe Photoshop Training",
      date: "Oct 14, 2021",
      time: "16:00 GMT",
      link: "/bootcamp/form",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await createClient.fetch(`
        `);
    };
  }, []);

  return (
    <section className="w-screen py-8 dark:bg-slate-800 duration-100 ">
      <div className="md:px-24 pl-14 mt-10 md:w-2/4 ">
        <h1 className="dark:text-gray-200 uppercase text-slate-700 text-[30px] font-semibold">
          CODE WITH CONCEPT
        </h1>
        <p className="dark:text-gray-500 text-center md:text-left text-slate-400 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sequi voluptatibus accusamus aliquam cumque atque officia odio quidem
          molestias reiciendis!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center px-12 md:px-24 py-6 gap-10">
        {bootCamps.map((bootCamp) => (
          <div
            className="  p-3 dark:bg-slate-800 shadow rounded dark:hover:outline outline-1 dark:outline-slate-400 hover:shadow-lg duration-300 hover:scale-105 hover:shadow-xl"
            key={bootCamp.id}
          >
            <div>
              <img
                src={bootCamp.image}
                className="w-[100%] object-cover  rounded"
              />
            </div>
            <div className="mt-2 ">
              <p className=" text-sky-700 text-md dark:text-white font-bold rounded mt-4">
                {bootCamp.date} {bootCamp.time}
              </p>
              <p className="dark:text-gray-200 text-slate-700 font-semibold text-[22px] my- capitalize">
                {bootCamp.title}
              </p>
            </div>
            <p className="text-gray-400 mb-3 leading-normal">
              {bootCamp.description}
            </p>
            <a
              href={bootCamp.link}
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-100 float-right p-2 bg-sky-600 text-gray-100 font-semibold text-sm  duration-300 uppercase"
            >
              Register
            </a>
          </div>
        ))}
      </div>
      {/* Pagination */}
      {/* <div className="w-[300px] flex justify-center py-2 items-center mx-auto space-x-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="p-2 bg-gray-300 dark:bg-gray-500 text-slate-700 dark:text-gray-100  items-center flex rounded-full cursor-pointer"
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>

        <button
          disabled={endIndex >= projectData.length}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="p-2 bg-gray-300 dark:bg-gray-500 text-slate-700 dark:text-gray-100 items-center flex rounded-full cursor-pointer"
        >
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div> */}
    </section>
  );
}

export default BootCampItems;
