'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const TeamCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 10000,
      gap:'100px',
      pauseOnHover:true
    };
const Team: { id: number; name: string; title: string; imageUrl: string }[] = [
  {
    id: 1,
    name: "oreoluwa Michael",
    title: "Founder",
    imageUrl: "/home/team/team-1.svg",
  },
  {
    id: 2,
    name: "oreoluwa Michael",
    title: "Founder",
    imageUrl: "/home/team/team-2.svg",
  },
  {
    id: 3,
    name: "oreoluwa Michael",
    title: "Founder",
    imageUrl: "/home/team/team-3.svg",
  },
];
  return (
    <div className="no-scrollbar min-w-[1000px] overflow-x-scroll">
      <div className="grid grid-cols-3 gap-x-20">
        {Team.map((person) => (
          <div key={person.id} className="flex flex-col items-center gap-5">
            <div className="rounded-3xl bg-gray-100/70 p-10 pb-0">
              <Image
                src={person.imageUrl}
                width={200}
                height={100}
                alt={person.name}
              />
            </div>
            <div className="text-gray-700">
              <h5 className="text-center font-semibold capitalize">
                {person.name}
              </h5>
              <p className="text-center">{person.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCarousel