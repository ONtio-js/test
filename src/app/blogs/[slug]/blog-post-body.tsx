import React from "react";

function NutritionHabitsBody() {
  return (
    <article className="mt-10 space-y-8 text-base leading-7 text-gray-700 lg:mx-auto lg:max-w-3xl">
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
        <h2 className="text-xl font-semibold text-gray-900">2. Drink more water</h2>
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
        <h2 className="text-xl font-semibold text-gray-900">7. Limit sugary drinks</h2>
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
          simple home-cooked meals are often healthier than takeout or heavily
          processed options. It’s not always easy—do what you can, when you can.
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
  );
}

function EcoFriendlyBody() {
  return (
    <article className="mt-10 space-y-6 text-base leading-7 text-gray-700 lg:mx-auto lg:max-w-3xl">
      <p>
        Building a sustainable future starts with everyday choices—in how we
        grow, move, store, and enjoy food. Grevego focuses on solutions that keep
        produce fresh for longer while reducing waste and emissions.
      </p>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Cold storage that scales</h2>
        <p>
          Solar-assisted and efficient cold storage helps protect perishables in
          transit and at hubs, so less food is lost before it reaches kitchens
          and tables.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Smarter logistics</h2>
        <p>
          Route planning, reliable last-mile cooling, and partnerships with
          trusted vendors combine to shorten the gap between harvest and home—
          good for nutrition and for the planet.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">What you can do</h2>
        <p>
          Choose suppliers who prioritize waste reduction, buy what you can use,
          and store food properly. Small shifts in how businesses and households
          operate add up to meaningful change.
        </p>
      </section>
    </article>
  );
}

function BusinessSustainableBody() {
  return (
    <article className="mt-10 space-y-6 text-base leading-7 text-gray-700 lg:mx-auto lg:max-w-3xl">
      <p>
        Sustainability in business is not only about ethics—it can lower
        costs, strengthen your brand, and build resilience. Here are five
        practical steps to get started.
      </p>
      <ol className="list-decimal space-y-4 pl-5 marker:font-semibold marker:text-gray-900">
        <li>
          <span className="font-semibold text-gray-900">Audit your footprint.</span>{" "}
          Look at energy, packaging, transport, and food waste. You can’t
          improve what you don’t measure.
        </li>
        <li>
          <span className="font-semibold text-gray-900">Set one clear goal.</span>{" "}
          For example: reduce packaging waste by a target percentage this
          quarter, or switch one supplier to a greener option.
        </li>
        <li>
          <span className="font-semibold text-gray-900">Involve your team.</span>{" "}
          Train staff on storage, portioning, and recycling so sustainability
          becomes part of daily operations.
        </li>
        <li>
          <span className="font-semibold text-gray-900">Partner wisely.</span>{" "}
          Work with vendors who share your values on cold chain, sourcing, and
          waste.
        </li>
        <li>
          <span className="font-semibold text-gray-900">Communicate progress.</span>{" "}
          Share wins with customers honestly—authenticity builds trust.
        </li>
      </ol>
    </article>
  );
}

function ColdDeliveryBody() {
  return (
    <article className="mt-10 space-y-6 text-base leading-7 text-gray-700 lg:mx-auto lg:max-w-3xl">
      <p>
        Fresh produce and prepared meals lose quality fast when temperature
        slips. Cold last-mile delivery is how Grevego helps food arrive in
        condition you’d be happy to serve or eat.
      </p>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Why temperature matters</h2>
        <p>
          Heat accelerates spoilage and can affect safety. Keeping the chain
          cool from hub to doorstep preserves texture, nutrients, and taste.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Less waste, happier customers</h2>
        <p>
          When food arrives fresh, fewer items are thrown away and satisfaction
          goes up. That supports both sustainability goals and your bottom line.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Looking ahead</h2>
        <p>
          Grevego continues to invest in efficient cooling and logistics so more
          households and businesses can rely on dependable, sustainable freshness.
        </p>
      </section>
    </article>
  );
}

type BlogPostBodyProps = {
  slug: string;
};

export function BlogPostBody({ slug }: BlogPostBodyProps) {
  switch (slug) {
    case "everyday-nutrition-habits-without-dieting":
      return <NutritionHabitsBody />;
    case "eco-friendly-solutions-sustainable-future":
      return <EcoFriendlyBody />;
    case "business-more-sustainable-five-easy-steps":
      return <BusinessSustainableBody />;
    case "sustainable-freshness-cold-delivery":
      return <ColdDeliveryBody />;
    default:
      return null;
  }
}
