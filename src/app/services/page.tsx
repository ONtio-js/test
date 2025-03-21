import React from "react";
import Button from "../_components/Button";
import Image from "next/image";
import { ourDefinition } from "../about/page";

const page = () => {
  return (
    <>
      <section className="md:px-20 lg:px-0">
        <div className="mt-10  md:-mt-10 flex flex-col items-center gap-6 pb-20">
          <h2 className="lg:max-w-[800px] text-center text-2xl md:text-5xl font-semibold sm:px-20 md:leading-[3rem] text-gray-700">
            <span className="text-[#ffb84d]">Innovative solutions</span> for a
            Greener Future
          </h2>
          <p className="max-w-[800px] text-center text-gray-700 px-5 md:px-0">
            At Grevego, we blend cutting-edge technology with sustainability to
            create a future where healthy living is effortless and eco-conscious
            choices are second nature.
          </p>
          <Button
            variant="primary"
            title="Explore Our Services"
            style=" w-[250px] py-4 rounded-full mt-10"
            type="link"
          />
        </div>
        <div className="mb-20 flex max-h-96 items-center md:justify-center gap-4 lg:gap-8 px-20 overflow-x-scroll no-scrollbar">
          <Image
            src={"/home/services/service-hero-1.png"}
            alt="agent"
            width={190}
            height={100}
            className="h-[15rem] rounded-3xl"
          />
          <Image
            src={"/home/services/service-hero-2.jpeg"}
            alt="agent"
            width={190}
            height={100}
            className="h-48 lg:w-[20%] rounded-3xl"
          />
          <Image
            src={"/home/services/service-hero-3.jpeg"}
            alt="agent"
            width={190}
            height={100}
            className="h-[15rem] rounded-3xl"
          />
          <Image
            src={"/home/services/service-hero-4.jpeg"}
            alt="agent"
            width={190}
            height={100}
            className="h-48 lg:w-[20%] rounded-3xl"
          />
        </div>
      </section>
      <section className=" px-5 md:px-10 py-20 lg:px-20">
        <div>
          <h2 className="text-center text-3xl font-bold capitalize text-gray-700">
            our services
          </h2>
          <p className="pt-5 text-center text-gray-700">
            Empowering a healthier world through innovation & eco-friendly
            solutions
          </p>
        </div>
        <div className="mt-28 flex items-center flex-col md:flex-row justify-between rounded-3xl bg-primaryColor/10 p-5 py-10 lg:p-10 gap-10 lg:gap-40">
          <div className="flex max-w-[550px] flex-col gap-3 text-gray-700">
            <h3 className="text-xl md:text-3xl font-bold">Cold Last-Mile Delivery</h3>
            <h6 className="text-lg md:font-medium">
              Freshness Delivered, Sustainably
            </h6>
            <p className="">
              Our solar-powered cold storage and eco-friendly logistics ensure
              that fresh produce reaches you in peak condition, reducing food
              waste and carbon emissions.
            </p>
          </div>
          <div>
            <Image
              src={"/home/services/service-1.png"}
              alt="delivery"
              width={700}
              height={100}
              className="rounded-3xl "
            />
          </div>
        </div>
        <div className="my-24 flex flex-col md:flex-row-reverse items-center gap-5 rounded-3xl bg-primaryColor/10 px-5 py-10 lg:p-10 transition-all delay-0 ease-linear hover:-translate-x-1 gap-y-10 lg:gap-40">
          <div className="flex max-w-[550px] flex-col gap-3 text-gray-700">
            <h3 className="text-xl md:text-3xl font-bold">
              Ai-Powered Personalized Nutrition
            </h3>
            <h6 className="text-lg md:font-medium">
              Smart Nutrition, Just for You
            </h6>
            <p>
              Our AI-driven nutrition planner tailors meal recommendations based
              on your health goals, ensuring that every bite supports your
              well-being.
            </p>
          </div>
          <div>
            <Image
              src={"/home/services/service-2.png"}
              alt="delivery"
              width={700}
              height={100}
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row rounded-3xl bg-primaryColor/10 px-5 py-10 lg:p-10 transition-all delay-0 ease-linear hover:translate-x-1 gap-y-10 lg:gap-40">
          <div className="flex max-w-[550px] flex-col gap-3 text-gray-700">
            <h3 className="text-xl md:text-3xl font-bold">
              Organic Recycling & Waste Management
            </h3>
            <h6 className="text-lg font-medium">Turning Waste into Value</h6>
            <p>
              We transform organic waste into biofuel and compost, closing the
              loop on sustainability and minimizing environmental impact.
            </p>
          </div>
          <div>
            <Image
              src={"/home/services/service-3.png"}
              alt="delivery"
              width={700}
              height={100}
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="mt-32 flex flex-col items-center gap-7 text-gray-700">
          <h2 className="text-3xl md:max-w-[400px] text-center lg:w-full font-semibold">
            Guiding Principles That Define Grevego
          </h2>
          <p className="max-w-[950px] text-center">
            At Grevego, our values drive every decision we make. From
            eco-friendly solutions to cutting-edge technology, we are committed
            to creating a healthier, more sustainable future. We believe in
            transparency, collaboration, and real impact, ensuring that every
            product, partnership, and innovation contributes to a better world
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-20 lg:gap-8">
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
      </section>
    </>
  );
};

export default page;
