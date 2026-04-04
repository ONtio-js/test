"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { HeartIcon,  ShareIcon } from "lucide-react";

const likeStorageKey = (slug: string) => `grevego:blog-like:${slug}`;

type BlogEngagementBarProps = {
  baseLikes?: number;
  shareTitle: string;
  shareText?: string;
};

function slugFromParams(slug: string | string[] | undefined) {
  if (typeof slug === "string") return slug;
  if (Array.isArray(slug) && slug[0]) return slug[0];
  return "post";
}

export function BlogEngagementBar({
  baseLikes = 100,
  shareTitle,
  shareText,
}: BlogEngagementBarProps) {
  const params = useParams();
  const slug = slugFromParams(params?.slug);
  const [liked, setLiked] = useState(false);
  const [shareHint, setShareHint] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(likeStorageKey(slug));
      setLiked(raw === "1");
    } catch {
      setLiked(false);
    }
  }, [slug]);

  const toggleLike = useCallback(() => {
    setLiked((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(likeStorageKey(slug), next ? "1" : "0");
      } catch {
        /* ignore quota / private mode */
      }
      return next;
    });
  }, [slug]);

  const handleShare = useCallback(async () => {
    const url =
      typeof window !== "undefined" ? window.location.href : "";

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText ?? shareTitle,
          url,
        });
        return;
      } catch (err) {
        const name = err instanceof Error ? err.name : "";
        if (name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setShareHint("Link copied");
      window.setTimeout(() => setShareHint(null), 2500);
    } catch {
      setShareHint("Could not copy link");
      window.setTimeout(() => setShareHint(null), 2500);
    }
  }, [shareTitle, shareText]);

  const likeCount = baseLikes + (liked ? 1 : 0);

  return (
    <div
      className="flex flex-wrap items-center gap-8 font-medium text-muted-foreground md:gap-10"
      role="group"
      aria-label="Article actions"
    >
      <button
        type="button"
        onClick={toggleLike}
        aria-pressed={liked}
        aria-label={liked ? "Unlike this article" : "Like this article"}
        className="flex items-center gap-2 rounded-lg p-1 transition-colors hover:text-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor"
      >
        <HeartIcon
          className={`h-6 w-6 shrink-0 transition-colors ${
            liked ? "fill-primaryColor text-primaryColor" : ""
          }`}
          aria-hidden
        />
        <span className="tabular-nums">{likeCount}</span>
      </button>

      {/* <div className="flex items-center gap-2">
        <MessageCircleIcon className="h-6 w-6 shrink-0" aria-hidden />
        <span>Comment</span>
      </div> */}

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => void handleShare()}
          aria-label="Share this article"
          className="flex items-center gap-2 rounded-lg p-1 transition-colors hover:text-primaryColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColor"
        >
          <ShareIcon className="h-6 w-6 shrink-0" aria-hidden />
          <span>Share</span>
        </button>
        {shareHint ? (
          <span
            className="text-sm text-gray-600"
            role="status"
            aria-live="polite"
          >
            {shareHint}
          </span>
        ) : null}
      </div>
    </div>
  );
}
