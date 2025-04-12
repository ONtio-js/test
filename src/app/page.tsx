"use client";
import { useRouter } from "next/navigation";
import Button from "./_components/Button";
import FeatureCard from "./_components/FeatureCard";
import Image from "next/image";
export default  function Home() {
  const features = [
    {
      id: 1,
      title: "Green Retailing",
      description:
        "Sustainable marketplace connecting consumers with fresh, local produce while minimizing environmental impact.",
      imgUrl: "/home/features/feature4.png",
    },
    {
      id: 2,
      title: "cold last mile delivery",
      description:
        "Temperature-controlled last-mile delivery ensuring maximum freshness and minimal food waste.",
      imgUrl: "/home/features/feature1.png",
    },
    {
      id: 3,
      title: "AI-Powered Nutrition Planner",
      description:
        "Personalized nutrition suggestions powered by artificial intelligence for better health outcomes.",
      imgUrl: "/home/features/feature2.jpeg",
    },
  ];
  const howItWorks = [
    {
      id: 1,
      title: "Discover",
      description: "Browse fresh, healthy products",
    },
    {
      id: 2,
      title: "Plan",
      description: "Get AI-driven nutrition advice.",
    },
    {
      id: 3,
      title: "Shop",
      description: "Place your order effortlessly",
    },
    {
      id: 4,
      title: "Deliver",
      description:
        "Receive solar-cooled, eco-friendly delivery at your doorstep.",
    },
  ];
  const router = useRouter();
  return (
    <>
      {/* begining of hero section */}
      <section className="w-full pb-10 pt-16 md:pt-10">
        <div className="lg:px-30 flex flex-col items-center gap-2 px-10 md:pt-10 lg:pt-0">
          <h1 className="max-w-[500px] pb-4 pt-10 text-center text-3xl font-bold text-gray-800 md:pt-4 md:text-5xl md:leading-snug">
            Healthy Food, Sustainable Future
          </h1>
          <p className="text-center text-sm text-gray-700">
            Revolutionizing food access through green retailing, smart delivery,
            and AI-powered nutrition guidance.
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-7 py-14 md:flex-row">
            <Button
              title="Join waitlist"
              variant="primary"
              type="link"
              onclick={() => router.push("/waitlist")}
              style="w-[250px] md:max-w-[300px] py-4"
            />
          </div>
        </div>
        <div className="no-scrollbar flex w-full items-center gap-2 overflow-x-scroll pl-5 pt-10 md:justify-center lg:gap-4">
          <FeatureCard title="Reduce Food Waste" />
          <FeatureCard title="Support Vendors" />
          <FeatureCard title="Personalized Nutrition" />
          <FeatureCard title="Clean Energy Solutions" />
        </div>
        <div className="relative my-16 w-full overflow-y-hidden">
          <div className="no-scrollbar flex items-center gap-3 overflow-y-hidden overflow-x-scroll md:gap-7 lg:justify-center">
            <Image
              src={
                "https://res.cloudinary.com/dm2pa4nll/grevego/hero/hero2.svg"
              }
              alt="hero"
              width={600}
              height={200}
              className="w-[300px] md:w-full"
              priority
            />
            <Image
              src={
                "https://res.cloudinary.com/dm2pa4nll/grevego/hero/hero-1.svg"
              }
              alt="hero"
              width={600}
              height={100}
              className="w-[300px] md:w-full"
              priority
            />

            <Image
              src={
                "https://res.cloudinary.com/dm2pa4nll/grevego/hero/hero3.png"
              }
              alt="hero"
              width={1000}
              height={200}
              className="w-[300px] md:w-full"
              priority
            />
          </div>
        </div>
      </section>
      {/* end of hero section */}

      {/* beginning of features section */}
      <section className="">
        <div className="flex flex-col items-center gap-5 py-5 md:py-10">
          <h2 className="text-2xl font-semibold capitalize">
            our smart solution
          </h2>
          <p className="px-2 text-center text-gray-700 md:px-10 lg:px-0">
            Grevego combines innovation and sustainability to make healthy
            living effortless—personalized nutrition, eco-friendly delivery, and
            zero-waste solutions, all in one place.
          </p>
        </div>
        <div className="grid gap-10 px-5 pt-10 md:px-20 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="rounded-xl p-5 shadow-lg">
              <Image
                src={feature.imgUrl}
                alt={feature.title}
                height={100}
                width={200}
                className="h-1/2 w-full rounded-lg"
              />
              <h3 className="py-2 pt-10 text-xl font-semibold capitalize">
                {feature.title}
              </h3>
              <p className="pt-2 text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* end of feature section   */}

      <section className="px-5 py-20 md:px-20">
        <div className="flex flex-col items-start gap-4 pb-10">
          <h2 className="text-xl font-semibold capitalize">
            sustainability made simple
          </h2>
          <p className="text-gray-700">
            Experience a seamless journey to healthier living with Grevego
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {howItWorks.map((how) => (
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

      <section className="bg-secondaryColor/50 px-5 py-20 md:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-5">
          <h2 className="py-3 text-2xl font-semibold text-gray-700 md:text-center md:text-3xl">
            Building a Greener Tomorrow
          </h2>
          <p className="max-w-[900px] text-center text-gray-700">
            At Grevego, sustainability isn’t just a goal—it’s our promise.
            Through innovative practices and advanced green technology, we are
            redefining how businesses and individuals can contribute to a
            healthier planet.
          </p>
        </div>
        <div className="no-scrollbar flex items-center overflow-x-scroll pt-10 md:justify-center lg:gap-4">
          <FeatureCard colored title="Reduce Food Waste" />
          <FeatureCard colored title="Support Vendors" />
          <FeatureCard colored title="Personalized Nutrition" />
          <FeatureCard colored title="Clean Energy Solutions" />
        </div>
        <div className="grid grid-cols-4 items-end gap-2 pt-20 md:gap-5">
          <Image
            src={"/home/user-1.jpeg"}
            alt="hero"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src={"/home/user-2.jpeg"}
            alt="hero"
            width={300}
            height={200}
            className="h-[50%] rounded-lg"
          />
          <Image
            src={"/home/user-3.jpeg"}
            alt="hero"
            width={300}
            height={200}
            className="h-[50%] rounded-lg"
          />
          <Image
            src={"/home/user-4.jpeg"}
            alt="hero"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="px-5 py-32 md:px-20">
        <div className="flex flex-col items-center gap-7">
          <h2 className="max-w-[1000px] text-center text-2xl font-semibold text-gray-600 md:text-3xl lg:text-5xl">
            Join the Movement for a Healthier, Greener World
          </h2>
          <p className="max-w-[900px] text-center text-gray-600">
            At Grevego, sustainability isn’t just a goal—it’s our promise.
            Through innovative practices and advanced green technology, we are
            redefining how businesses and individuals can contribute to a
            healthier planet.
          </p>
        </div>
        <div className="my-10 flex flex-col items-center gap-5">
          <div className="relative">
            <Image
              src={"/globe.png"}
              width={800}
              height={800}
              alt="world globe"
              className="my-10"
              priority
            />
          </div>
          <div className="flex items-center gap-10">
            <Button
              title="Join as a Vendor"
              type="link"
              variant="secondary"
              onclick={() => router.push("/vendor")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
