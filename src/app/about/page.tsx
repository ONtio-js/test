import React from 'react'
import Image from 'next/image';

import Carousel from '../_components/Carousel';
import TeamCarousel from '../_components/TeamCarousel';
import ButtonComponent from './ButtonComponent';
 export const ourDefinition: {
   id: number;
   title: string;
   description: string;
 }[] = [
   {
     id: 1,
     title: "sustainability",
     description: "We champion green practices to protect our planet.",
   },
   {
     id: 2,
     title: "Innovation",
     description: "AI and IoT power our smart, future-forward solutions.",
   },
   {
     id: 3,
     title: "Integrity",
     description: "We build trust through honesty and responsible business.",
   },
   {
     id: 3,
     title: "Collaboration",
     description:
       "Working with vendors, farmers, and communities to grow together.",
   },
 ];
const AboutPage = () => {

 
  return (
    <>
      <section className="mt-10 px-8 md:-mt-10">
        <h1 className="mx-auto pb-5 text-center text-3xl font-semibold leading-snug md:px-28 md:text-4xl lg:max-w-[650px] lg:px-0">
          Revolutionizing Sustainable Living, one Fresh Product at a Time
        </h1>
        <p className="mx-auto text-center text-gray-700 md:px-28 lg:max-w-[700px] lg:px-0">
          At Grevego, we are building a future where sustainability meets
          convenience. Our mission is to empower communities with eco-friendly
          shopping, smarter nutrition, and green technology.
        </p>
        <ButtonComponent />
        <div className="mt-16 flex items-center justify-center">
          <Image
            src={"/home/about/about-hero.png"}
            width={1000}
            height={100}
            alt="about-hero"
            className="rounded-3xl md:w-[80%]"
          />
        </div>
      </section>
      <section className="mt-20 bg-primaryColor py-20">
        <div className="flex flex-col items-center gap-7 px-10 text-white">
          <h2 className="text-center text-2xl font-semibold md:max-w-[400px] md:text-3xl lg:w-full">
            The Grevego Journey: From Vision to Impact
          </h2>
          <p className="max-w-[620px] text-center lg:max-w-[950px]">
            Grevego was founded with a simple yet powerful idea—bridging the gap
            between healthy food, sustainability, and technology. Our goal is to
            create a smarter, greener way to access fresh produce while
            minimizing waste and empowering vendors
          </p>
        </div>
        <div className="pt-32">
          <Carousel />
        </div>
      </section>
      <section className="px-5 py-20 md:px-20 lg:px-40">
        <div className="flex flex-col items-center gap-7 text-gray-700">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">
            Driving Change, One Sustainable Choice at a Time
          </h2>
          <p className="max-w-[950px] text-center">
            At Grevego, we are redefining the future of sustainable shopping by
            integrating smart technology, eco-friendly logistics, and
            community-driven solutions
          </p>
        </div>
        <div className="flex flex-col items-center py-10 text-gray-700">
          <h2 className="text-2xl font-semibold">Our Mission & Vision</h2>
          <div className="grid max-w-[800px] gap-10 pt-6 md:grid-cols-2">
            <div className="group rounded-3xl bg-gray-100/70 p-10 py-14 transition-all duration-300 ease-in-out hover:bg-primaryColor">
              <h3 className="py-2 text-center text-lg font-semibold group-hover:text-white">
                Mission Statement
              </h3>
              <p className="text-center text-gray-600 group-hover:text-white">
                To reduce malnutrition and food waste by connecting consumers to
                fresh hygienic products while improving market access linkage.
              </p>
            </div>
            <div className="group rounded-3xl bg-gray-100/70 p-10 py-14 transition-all duration-300 ease-in-out hover:bg-primaryColor">
              <h3 className="py-2 text-center text-lg font-semibold group-hover:text-white">
                Vision Statement
              </h3>
              <p className="text-center text-gray-600 group-hover:text-white">
                To create a healthier, greener world by empowering communities
                to embrace innovation and a sustainable lifestyle.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center gap-7 text-gray-700">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">
            Guiding Principles That Define Grevego
          </h2>
          <p className="max-w-[950px] text-center">
            At Grevego, our values drive every decision we make. From
            eco-friendly solutions to cutting-edge technology, we are committed
            to creating a healthier, more sustainable future. We believe in
            transparency, collaboration, and real impact, ensuring that every
            product, partnership, and innovation contributes to a better world.
          </p>
        </div>
        <div className="grid gap-4 pt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-20">
          {ourDefinition.map((how) => (
            <div
              key={how.id}
              className="relative h-56 overflow-hidden rounded-2xl bg-primaryColor p-5 text-white"
            >
              <h3 className="text-2xl font-medium">{how.title}</h3>
              <p className="py-2 text-sm">{how.description}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="80"
                viewBox="0 0 107 108"
                fill="none"
                className="absolute -right-2 bottom-0"
              >
                <path
                  d="M31.5644 31.9999L129.627 158.957"
                  stroke="#CEDDD0"
                  stroke-width="62.6795"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="80"
                viewBox="0 0 107 108"
                fill="none"
                className="absolute -right-14 top-24"
              >
                <path
                  d="M31.5644 31.9999L129.627 158.957"
                  stroke="#CEDDD0"
                  stroke-width="62.6795"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="80"
                viewBox="0 0 107 108"
                fill="none"
                className="absolute -bottom-10 right-12"
              >
                <path
                  d="M31.5644 31.9999L129.627 158.957"
                  stroke="#CEDDD0"
                  stroke-width="62.6795"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className="mt-24 flex flex-col items-center gap-7 px-5 text-gray-700">
          <h2 className="text-center text-xl font-semibold md:text-3xl">
            The People behind The Mission
          </h2>
          <p className="max-w-[950px] text-center">
            At Grevego, we are more than a team—we are a movement dedicated to
            reshaping the future of eco-friendly living. Our diverse group of
            industry leaders, technology pioneers, and sustainability advocates
            brings together expertise from across the globe to drive impactful
            change.
          </p>
          <Image
            src={"/home/team/team-all.png"}
            width={1000}
            height={200}
            alt="our team"
            className="mt-10 w-full rounded-3xl"
          />
        </div>
        <h2 className="mb-10 pt-20 text-center text-2xl font-bold text-gray-700">
          Our Leadership
        </h2>
        <div className="no-scrollbar overflow-x-scroll pb-10">
          <TeamCarousel />
        </div>
      </section>
    </>
  );
}

export default AboutPage