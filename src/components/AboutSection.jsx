import React, { useEffect, useState } from "react";
import { socialItems } from "../../data";
import ResumeBtn from "../components/ResumeBtn";
import createClient from "../client";
import SkeletonAbout from "../skeletons/SkeletonAbout";
import SkeletonStory from "../skeletons/SkeletonStory";

function AboutSection() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`
        *[_type=="about"]{
            title,
            role,
            description,
            authorImage{
                asset->{
                url
            }
        }
        
        }
        `);
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  //   console.log(aboutData);

  return (
    <section className="flex flex-col items-center space-y-8 md:space-y-0  md:flex-row md:items-start md:space-x-4 lg:space-x-14 justify-between md:px-10 p-20 ">
      {!aboutData && <SkeletonAbout />}
      {aboutData &&
        aboutData.map((result, index) => (
          <div
            key={index}
            className="md:w-2/4 bg-gray-100 shadow-md dark:bg-slate-600 rounded-t-md dark:text-gray-200 p-1"
          >
            <img
              src={result.authorImage?.asset.url}
              alt={result.title}
              className="w-full h-60 lg:h-60 md:h-[190px] rounded-t-md object-cover"
            />
            <div className="text-center text-slate-800 dark:text-gray-200 my-1">
              <p className="font-bold text-[28px]">{result.title}</p>
              <p className="text-[14px]">{result.role}</p>
              <div className="space-x-3 flex text-slate-800 dark:text-gray-200 justify-center items-center my-4 md:my-1 ">
                {socialItems.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    key={item.id}
                    className="items-center hover:animate-bounce"
                  >
                    <ion-icon name={item.name} class="text-[20px]"></ion-icon>
                  </a>
                ))}
              </div>
              <ResumeBtn />
            </div>
          </div>
        ))}

      <div className="bg-gray-100 text-slate-800 dark:bg-slate-600 md:w-[700px] lg:w-[950px] w-[400px] rounded-t-md shadow-lg p-4 ">
        <h2 className="font-bold text-right my-3 text-3xl dark:text-gray-200 text-slate-800">
          My Story
        </h2>
        {!aboutData && <SkeletonStory />}
        {aboutData &&
          aboutData.map((data, index) => (
            <p key={index} className="dark:text-gray-200 text-justify">
              {data.description}
            </p>
          ))}
      </div>
    </section>
  );
}

export default AboutSection;
