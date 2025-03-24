'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 3,
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
    <div className="min-w-[1400px] h-[500px]">
      <Slider {...settings}>
        <div>
          <Image
            src={"/home/about/about-1.png"}
            alt="about"
            width={100}
            height={500}
            className="w-64 rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={"/home/about/about-2.png"}
            alt="about"
            width={100}
            height={100}
            className="my-auto mt-12 h-96 w-64 rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={"/home/about/about-3.png"}
            alt="about"
            width={100}
            height={500}
            className="w-64 rounded-2xl"
          />
        </div>
        <div className="">
          <Image
            src={"/home/about/about-4.png"}
            alt="about"
            width={100}
            height={500}
            className="mt-12 h-96 w-64 rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={"/home/about/about-5.png"}
            alt="about"
            width={100}
            height={500}
            className="w-64 rounded-2xl"
          />
        </div>
        <div>
          <Image
            src={"/home/about/about-6.png"}
            alt="about"
            width={100}
            height={500}
            className="mt-12 h-96 w-64 rounded-2xl"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel