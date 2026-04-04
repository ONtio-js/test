export type BlogAuthor = {
  name: string;
  bio: string;
  imageSrc: string;
  instagram: string;
  facebook: string;
  twitter: string;
};

export const defaultBlogAuthor: BlogAuthor = {
  name: "Daramola Favour",
  bio: "Nutritionist and Food Scientist with a passion for sustainable food systems and nutrition.",
  imageSrc: "/home/team/favour.png",
  instagram:
    "https://www.instagram.com/nimi_favour?igsh=MTA0cHYwOHk3a21ubA%3D%3D&utm_source=qr",
  facebook: "https://www.facebook.com/grevego.hq?igsh=bmprb2plNHltN2tj&utm_source=qr",
  twitter: "https://www.twitter.com/grevego.hq?igsh=bmprb2plNHltN2tj&utm_source=qr",
};

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  /** Card / carousel longer blurb */
  excerpt: string;
  dateLabel: string;
  readMinutes: number;
  imageSrc: string;
  imageAlt: string;
  baseLikes: number;
  shareText: string;
  author: BlogAuthor;
  show: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "everyday-nutrition-habits-without-dieting",
    title: "10 Everyday Habits That Improve Your Nutrition Without Dieting.",
    subtitle:
      "Discover 10 everyday habits that can improve your nutrition without dieting. These simple tips are easy to incorporate into your daily routine and can help you maintain a healthy diet.",
    excerpt:
      "Small daily habits—breakfast, hydration, smarter carbs, and mindful portions—can improve how you eat without strict dieting.",
    dateLabel: "April 4, 2026",
    readMinutes: 5,
    imageSrc: "/home/blog.jpg",
    imageAlt: "Grevego Journal — nutrition habits",
    baseLikes: 100,
    shareText:
      "Simple nutrition habits you can adopt without strict dieting — from Grevego.",
    author: defaultBlogAuthor,
    show: true,
  },
  {
    slug: "eco-friendly-solutions-sustainable-future",
    title: "Eco-Friendly Solutions for a Sustainable Future",
    subtitle:
      "Sustainable freshness, delivered with care at your doorstep via a cold last-mile delivery network.",
    excerpt:
      "Discover practical tips to reduce your environmental impact and enhance your business’s sustainability. With our solar-powered cold storage and sustainable logistics, we guarantee that your fresh produce arrives at its best. This not only minimizes food waste but also cuts down on carbon emissions, making a positive impact on the environment.",
    dateLabel: "July 11, 2025",
    readMinutes: 4,
    imageSrc: "/home/blog.jpg",
    imageAlt: "Grevego Journal — eco-friendly solutions",
    baseLikes: 88,
    shareText:
      "How Grevego combines cold chain logistics with lower environmental impact.",
    author: defaultBlogAuthor,
    show: false,
  },
  {
    slug: "business-more-sustainable-five-easy-steps",
    title: "How to Make Your Business More Sustainable: 5 Easy Steps",
    subtitle:
      "Sustainable freshness, delivered with care at your doorstep via a cold last-mile delivery network.",
    excerpt:
      "Discover practical tips to reduce your environmental impact and enhance your business’s sustainability. With our solar-powered cold storage and sustainable logistics, we guarantee that your fresh produce arrives at its best. This not only minimizes food waste but also cuts down on carbon emissions, making a positive impact on the environment.",
    dateLabel: "July 11, 2025",
    readMinutes: 6,
    imageSrc: "/home/blog.jpg",
    imageAlt: "Grevego Journal — sustainable business",
    baseLikes: 92,
    shareText: "Five practical steps to make your operations greener — from Grevego.",
    author: defaultBlogAuthor,
    show: false,
  },
  {
    slug: "sustainable-freshness-cold-delivery",
    title: "Sustainable Freshness at Your Doorstep",
    subtitle:
      "Why cold last-mile delivery matters for quality, waste, and the planet.",
    excerpt:
      "Discover practical tips to reduce your environmental impact and enhance your business’s sustainability. With our solar-powered cold storage and sustainable logistics, we guarantee that your fresh produce arrives at its best.",
    dateLabel: "July 11, 2025",
    readMinutes: 5,
    imageSrc: "/home/blog.jpg",
    imageAlt: "Grevego Journal — cold delivery",
    baseLikes: 76,
    shareText:
      "How cold-chain delivery keeps food fresh and supports sustainability.",
    author: defaultBlogAuthor,
    show: false
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

/** Visible on the Journal page (carousel + grid). Homepage uses all {@link blogPosts}. */
export function getListedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.show);
}
