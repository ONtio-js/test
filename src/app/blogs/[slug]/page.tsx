import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FacebookIcon, Instagram, TwitterIcon } from "lucide-react";
import Link from "next/link";

import { getAllPosts, getPostBySlug } from "@/content/blog-posts";
import { BlogEngagementBar } from "./blog-engagement-bar";
import { BlogPostBody } from "./blog-post-body";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found | Grevego" };
  }
  return {
    title: `${post.title} | Grevego Journal`,
    description: post.subtitle,
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const author = post.author;

  return (
    <div className="mt-20 space-y-10 px-5 py-10 md:px-20 lg:-mt-4">
      <div className="flex w-full flex-col items-start justify-between gap-5 lg:flex-row">
        <div className="flex max-w-full flex-col gap-3 lg:max-w-[60%]">
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          <p className="text-lg text-gray-700">{post.subtitle}</p>
        </div>
        <div className="flex w-full items-center justify-end lg:w-auto">
          <p className="w-fit rounded-full bg-primaryColor/30 p-2 px-4 text-right text-sm text-gray-700 lg:w-auto">
            {post.dateLabel} | {post.readMinutes} min read
          </p>
        </div>
      </div>

      <BlogPostBody slug={post.slug} />

      <BlogEngagementBar
        baseLikes={post.baseLikes}
        shareTitle={post.title}
        shareText={post.shareText}
      />

      <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-primaryColor/30 p-10 lg:max-w-[500px]">
        <div className="flex max-w-[400px] items-center gap-2">
          <div className="flex w-full max-w-[100px] flex-col items-center gap-2">
            <Image
              src={author.imageSrc}
              alt={author.name}
              width={40}
              height={40}
              className="h-16 w-16 rounded-full border-2 border-primaryColor object-cover shadow-md"
            />
            <p className="word-wrap text-center font-medium capitalize text-gray-700">
              {author.name}
            </p>
          </div>
          <div className="flex w-full max-w-[300px] flex-col gap-2">
            <p className="text-gray-700">{author.bio}</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Link
            href={author.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all duration-300 ease-in-out hover:text-primaryColor"
          >
            <Instagram className="h-6 w-6 text-primaryColor transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:transform" />
          </Link>
          <Link
            href={author.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all duration-300 ease-in-out hover:text-primaryColor"
          >
            <FacebookIcon className="h-6 w-6 text-primaryColor transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:transform" />
          </Link>
          <Link
            href={author.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all duration-300 ease-in-out hover:text-primaryColor"
          >
            <TwitterIcon className="h-6 w-6 text-primaryColor transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
