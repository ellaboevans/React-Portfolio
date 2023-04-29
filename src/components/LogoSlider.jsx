import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import createClient from "../client";
import SkeletonStack from "../skeletons/SkeletonStack";
import SkeletonSlider from "../skeletons/SkeletonSlider";

function LogoSlider() {
  const [sliderData, setSliderData] = useState(null);
  const [stackData, setStackData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`
          *[_type=="stack"]{
      title,
      stackImage{
        asset->{
          _id,
          url
        }
      },
    }
        `);
        setStackData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`
     *[_type=="slider"]{
      title,
      sliderImage{
        asset->{
          _id,
          url
        }
      },
    }`);
        setSliderData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    easing: "linear",
    centerMode: true,
    centerPadding: "200px",
  };
  return (
    <section className=" w-screen bg-gray-200  dark:bg-slate-700 md:-mt-14 -mt-10 mb-11 md:py-2 duration-100">
      <div className="hidden md:flex">
        {!sliderData &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => <SkeletonSlider key={n} />)}
      </div>
      <div className="hidden md:block">
        <Slider {...settings}>
          {sliderData &&
            sliderData.map((slider) => (
              <div key={slider.title}>
                <img src={slider.sliderImage?.asset.url} className="md:h-24" />
              </div>
            ))}
        </Slider>
      </div>
      <div className="md:hidden flex items-center">
        {stackData &&
          stackData.map((stack, index) => (
            <div key={index}>
              <img src={stack.stackImage?.asset.url} className="w-44 p-3" />
            </div>
          ))}
        {!stackData && [1, 2, 3, 4].map((n) => <SkeletonStack key={n} />)}
      </div>
    </section>
  );
}

export default LogoSlider;
