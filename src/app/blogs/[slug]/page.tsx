import React from "react";
import Image from "next/image";
import { FacebookIcon, Instagram, TwitterIcon } from "lucide-react";
import Link from "next/link";

import { BlogEngagementBar } from "./blog-engagement-bar";


const BlogPage = () => {
  return (
    <div className="mt-20 space-y-10 px-5 py-10 md:px-20 lg:-mt-4">
      <div className="flex w-full flex-col items-start justify-between gap-5 lg:flex-row">
        <div className="flex max-w-full flex-col gap-3 lg:max-w-[60%]">
          <h1 className="text-3xl font-semibold">
            10 Everyday Habits That Improve Your Nutrition Without Dieting.
          </h1>
          <p className="text-lg text-gray-700">
            Discover 10 everyday habits that can improve your nutrition without
            dieting. These simple tips are easy to incorporate into your daily
            routine and can help you maintain a healthy diet.
          </p>
          {/* <p className="text-gray-700">
            With our solar-powered cold storage and sustainable logistics, we
            guarantee that your fresh produce arrives at its best. This not only
            minimizes food waste but also cuts down on carbon emissions, making
            a positive impact on the environment.
          </p> */}
        </div>
        <div className="flex w-full items-center justify-end lg:w-auto">
          <p className="w-fit rounded-full bg-primaryColor/30 p-2 px-4 text-right text-sm text-gray-700 lg:w-auto">
            April 4, 2026 | 5 min read
          </p>
        </div>
      </div>
      {/* <Image
        src="/home/blog.jpg"
        alt="Grevego Journal"
        width={300}
        height={200}
        className="h-[500px] w-full rounded-2xl object-cover"
      /> */}
      <article className="lg:mx-auto lg:max-w-3xl mt-10 space-y-8 text-base leading-7 text-gray-700">
        <p>
          Eating healthy doesn’t always mean strict diets or complicated meal
          plans. Small, consistent habits can transform your nutrition, energy,
          and overall health. Below are 10 simple everyday habits you can adopt
          without ever feeling like you’re “on a diet.”
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            1. Start your day with a balanced breakfast
          </h2>
          <p>
            Breakfast kick-starts your metabolism and gives you energy for the
            day. Include protein, healthy fats, and fiber—think eggs, avocado with
            vegetables, oatmeal with nuts, or yogurt with fruit—to stay full and
            focused.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            2. Drink more water
          </h2>
          <p>
            Hydration affects everything from digestion to energy. Carry a water
            bottle, especially in hot weather, and sip through the day. Sometimes
            thirst feels like hunger, so staying hydrated can cut unnecessary
            snacking.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            3. Add more fruits and vegetables
          </h2>
          <p>
            Aim to fill about half your plate with fruits and vegetables. They’re
            rich in vitamins, minerals, and fiber, which support digestion and
            long-term health. Start small: add fruit to your lunchbox or snack on
            carrot sticks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            4. Choose better carbs (not fewer carbs)
          </h2>
          <p>
            You don’t have to give up rice, bread, or swallow—improve your choices
            and portions instead. Try Ofada rice alongside white rice, or whole
            wheat bread sometimes. Pair swallow (eba, amala, semo) with plenty of
            vegetable-rich soup. That combo keeps you full longer and helps
            prevent overeating.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            5. Include protein in every meal
          </h2>
          <p>
            Protein supports muscle health and helps you feel satisfied. Add
            sources like eggs, beans, fish, yogurt, or lean meat to each meal to
            avoid mid-day energy crashes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">6. Mind your portions</h2>
          <p>
            You don’t need to ban favorite foods—just notice portion sizes. The
            goal is balance, not restriction. If carbs tend to dominate your
            plate, try structuring meals with the “My Plate” idea:
          </p>
          <ul className="list-disc space-y-2 pl-5 marker:text-gray-400">
            <li>
              <span className="font-medium text-gray-800">Half your plate</span>{" "}
              — vegetables (ugwu, efo, okra, carrots)
            </li>
            <li>
              <span className="font-medium text-gray-800">One quarter</span> —
              carbs (rice, yam, eba, bread)
            </li>
            <li>
              <span className="font-medium text-gray-800">One quarter</span> —
              protein (eggs, beans, fish, chicken)
            </li>
          </ul>
          <p>
            That simple split helps you eat enough without overeating—no measuring,
            no stress.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            7. Limit sugary drinks
          </h2>
          <p>
            Sodas, energy drinks, and some juices add empty calories and can spike
            blood sugar. Swap them for water, sparkling water, or herbal tea when
            you can.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            8. Cook at home more often
          </h2>
          <p>
            Cooking lets you control ingredients, portions, and seasoning. Even
            simple home-cooked meals are often healthier than takeout or
            heavily processed options. It’s not always easy—do what you can, when
            you can.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            9. Practice mindful eating
          </h2>
          <p>
            Slow down and focus on your food. Mindful eating helps you enjoy meals
            and reduces overeating. Try putting phones and laptops away during
            meals.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">10. Snack smart</h2>
          <p>
            Instead of defaulting to chips or candy, keep handy options like nuts,
            fruit, or yogurt. They tide you over between meals without undoing
            your nutrition goals.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-200 bg-gray-50/80 p-6">
          <h2 className="text-xl font-semibold text-gray-900">Final tip</h2>
          <p className="mb-0">
            Small changes add up. You don’t need to overhaul your diet overnight.
            Pick one or two habits, build them in gently, and let better choices
            follow naturally.
          </p>
        </section>
      </article>
      {/* <div className="grid grid-cols-2 gap-5">
        <Image
          src="/home/blog.jpg"
          alt="Grevego Journal"
          width={300}
          height={200}
          className="h-[520px] w-full rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-5">
          <Image
            src="/home/blog.jpg"
            alt="Grevego Journal"
            width={300}
            height={200}
            className="h-[250px] w-full rounded-2xl object-cover"
          />
          <Image
            src="/home/blog.jpg"
            alt="Grevego Journal"
            width={300}
            height={200}
            className="h-[250px] w-full rounded-2xl object-cover"
          />
        </div>
      </div> */}

      <BlogEngagementBar
        baseLikes={100}
        shareTitle="10 Everyday Habits That Improve Your Nutrition Without Dieting"
        shareText="Simple nutrition habits you can adopt without strict dieting — from Grevego."
      />
      <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-primaryColor/30 p-10 lg:max-w-[500px]">
        <div className="flex max-w-[400px] items-center gap-2">
          <div className="flex w-full max-w-[100px] flex-col items-center gap-2">
            <Image
              src="/home/team/favour.png"
              alt="User"
              width={40}
              height={40}
              className="h-16 w-16 rounded-full border-2 border-primaryColor object-cover shadow-md"
            />
            <p className="word-wrap text-center font-medium capitalize text-gray-700">
              Daramola Favour
            </p>
          </div>
          <div className="flex w-full max-w-[300px] flex-col gap-2">
            <p className="text-gray-700">
              Nutritionist and Food Scientist with a passion for sustainable
              food systems and nutrition.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Link
            href="https://www.instagram.com/nimi_favour?igsh=MTA0cHYwOHk3a21ubA%3D%3D&utm_source=qr"
            target="_blank"
            className="group transition-all duration-300 ease-in-out hover:text-primaryColor"
          >
            <Instagram className="h-6 w-6 text-primaryColor transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:transform" />
          </Link>
          <Link
            href="https://www.facebook.com/grevego.hq?igsh=bmprb2plNHltN2tj&utm_source=qr"
            target="_blank"
            className="group transition-all duration-300 ease-in-out hover:text-primaryColor"
          >
            <FacebookIcon className="h-6 w-6 text-primaryColor transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:transform" />
          </Link>
          <Link
            href="https://www.twitter.com/grevego.hq?igsh=bmprb2plNHltN2tj&utm_source=qr"
            target="_blank"
            className="group transition-all duration-300 ease-in-out hover:text-primaryColor"
          >
            <TwitterIcon className="h-6 w-6 text-primaryColor transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;