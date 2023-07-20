import React, { useEffect, useState } from "react";
import createClient from "../client";
import SkeletonElement from "../skeletons/SkeletonElement";

function BootCampItems() {
  const [bootCamps, setBootCamps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`
        *[_type == "bootcamp"]{
          title,
          description,
          date,
          time,
          instructor,
          link,
          bootcampImage{
            asset->{
              _id,
              url
            }
          },
        }
        `);
        setBootCamps(data);
      } catch (error) {
        console.log(`Error feetching data: ${error}`);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-screen py-8 dark:bg-slate-800 duration-100 ">
      <div className="lg:px-24 px-8 mt-10 xl:w-2/4 ">
        <h1 className="dark:text-gray-200 xl:text-left text-center uppercase text-slate-700 text-[30px] font-semibold">
          CODE WITH CONCEPT🚀
        </h1>
        <p className="dark:text-gray-500 text-center xl:text-left text-slate-400 w-full">
          Ignite your passion for learning by joining our{" "}
          <strong className="text-slate-600 dark:text-gray-300">
            free skill-building bootcamps
          </strong>
          . Embrace the opportunity to expand your knowledge and unlock new
          horizons.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center px-12 lg:px-24 py-6 gap-10">
        
        {bootCamps.length < 1 ? (
          <h1 className="text-slate-800 dark:text-white text-2xl mt-4">
            There are no bootcamps events at the moment!
          </h1>
        ) : (
          bootCamps.map((bootCamp, index) => (
            <div
              className=" lg:w-[380px]  p-3 dark:bg-slate-800 shadow rounded dark:hover:outline outline-1 dark:outline-slate-400 hover:shadow-lg duration-300 hover:scale-105 hover:shadow-xl"
              key={index}
            >
              <div className="">
                <img
                  src={
                    bootCamp.bootcampImage?.asset.url
                      ? bootCamp.bootcampImage?.asset.url
                      : "https://t4.ftcdn.net/jpg/03/56/02/11/240_F_356021129_xu10B4UK64NAxI17YyXq3MRiKIV0R93E.jpg"
                  }
                  alt={bootCamp.title}
                  className="w-full h-full object-cover  rounded"
                />
              </div>
              <div className="mt-2 ">
                <p className=" text-sky-700 text-md uppercase dark:text-gray-500 font-bold rounded mt-4">
                  {bootCamp.date ? bootCamp.date : "date not set"}{" "}
                  <span className="float-right">
                    {bootCamp.time ? bootCamp.time : "time not set"}
                  </span>
                </p>
                <p className="dark:text-gray-200 text-slate-700 font-semibold text-[22px] mt-3 capitalize">
                  {bootCamp.title ? bootCamp.title : "Bootcamp Title"}
                </p>
              </div>
              <p className="text-gray-400 mb-3 leading-normal">
                {bootCamp.description
                  ? bootCamp.description
                  : "Code Concept is setting up something huge for you guys. It will be a win, win for us all. Just stay tuned!!! We are definitely going to take you from zero to hero."}
              </p>
              <div className="flex items-center  ">
                <p className="text-gray-400 leading-normal flex-1">
                  By:{" "}
                  <span className="text-sky-700 font-bold uppercase">
                    {" "}
                    {bootCamp.instructor ? bootCamp.instructor : "dev_concept"}
                  </span>
                </p>
                <a
                  href={bootCamp.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="float-right p-2 bg-sky-600 text-gray-100 font-semibold text-sm  duration-300 uppercase"
                >
                  Register
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default BootCampItems;

// {
//       id: 1,
//       image:
//         "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
//       title: "Adobe Photoshop Training",
//       instructor: "Evans Elabo",
//       date: "Oct 14, 2021",
//       time: "16:00 GMT",
//       link: "/bootcamp/form",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
//     },

//     {
//       id: 2,
//       image:
//         "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
//       title: "Adobe Photoshop Training",
//       instructor: "Evans Elabo",
//       date: "Oct 14, 2021",
//       time: "16:00 GMT",
//       link: "/bootcamp/form",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
//     },

//     {
//       id: 3,
//       image:
//         "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
//       title: "Adobe Photoshop Training",
//       instructor: "Evans Elabo",
//       date: "Oct 14, 2021",
//       time: "16:00 GMT",
//       link: "/bootcamp/form",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
//     },
//     {
//       id: 4,
//       image:
//         "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
//       title: "Adobe Photoshop Training",
//       instructor: "Evans Elabo",
//       date: "Oct 14, 2021",
//       time: "16:00 GMT",
//       link: "/bootcamp/form",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
//     },
//     {
//       id: 5,
//       image:
//         "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
//       title: "Adobe Photoshop Training",
//       instructor: "Evans Elabo",
//       date: "Oct 14, 2021",
//       time: "16:00 GMT",
//       link: "/bootcamp/form",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus consequuntur impedit vero est dolorem modi rerum sit animi. Quia tenetur, ex nisi molestias perferendis",
//     },
//     {
//       id: 6,
//       image:
//         "https://pbs.twimg.com/media/FASXUTCXEAMQvwb?format=jpg&name=medium",
//       title: "Adobe Photoshop Training",
//       instructor: "Evans Elabo",
//       date: "Oct 14, 2021",
//       time: "16:00 GMT",
//       link: "",
//       description: "",
//     },
