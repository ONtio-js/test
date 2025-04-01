"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const FooterCarousel = () => {
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
    <div className="min-w-[1400px] lg:h-[650px]">
      <Slider {...settings} className="flex items-center">
        <Image
              src={"/home/test-3.svg"}
              alt="hero"
              width={600}
              height={200}
              className="w-[300px] md:w-full"
            />
            <Image
              src={"/home/test-2.svg"}
              alt="hero"
              width={500}
              height={200}
              className="w-[300px] md:w-full"
            />
            <Image
              src={"/home/test-1.svg"}
              alt="hero"
              width={600}
              height={200}
              className="w-[300px] md:w-full"
            />
       
      </Slider>
    </div>
  );
};
export default FooterCarousel;
