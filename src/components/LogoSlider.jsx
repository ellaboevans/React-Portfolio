import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliders } from "../../data";

function LogoSlider() {
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
    <section className="w-screen bg-gray-200  dark:bg-slate-700 -mt-14 mb-11 py-2">
      <Slider {...settings}>
        {sliders.map((item) => (
          <div key={item.id}>
            <img src={item.img} className="md:h-24" />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default LogoSlider;
