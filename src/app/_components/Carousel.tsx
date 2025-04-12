"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" lg:h-[650px] min-w-[1400px]">
      <Slider {...settings} className="flex items-center">
        <div className="">
          <Image
            src={"https://res.cloudinary.com/dm2pa4nll/grevego/about/about-1.png"}
            alt="about"
            width={500}
            height={500}
            className="w-[90%] rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dm2pa4nll/grevego/about/about-2.png"
            }
            alt="about"
            width={500}
            height={100}
            className="my-auto mt-12 h-[500px] w-[90%] rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dm2pa4nll/grevego/about/about-3.png"
            }
            alt="about"
            width={500}
            height={500}
            className="w-[90%] rounded-2xl"
          />
        </div>
        <div className="">
          <Image
            src={
              "https://res.cloudinary.com/dm2pa4nll/grevego/about/about-4.png"
            }
            alt="about"
            width={500}
            height={500}
            className="mt-12 h-[500px] w-[90%] rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dm2pa4nll/grevego/about/about-5.png"
            }
            alt="about"
            width={500}
            height={500}
            className="w-[90%] rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dm2pa4nll/grevego/about/about-6.png"
            }
            alt="about"
            width={500}
            height={500}
            className="mt-12 h-[500px] w-[90%] rounded-2xl"
          />
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
