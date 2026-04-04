import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <div className="mx-auto mt-24 max-w-lg px-5 py-16 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">Article not found</h1>
      <p className="mt-3 text-gray-600">
        This post may have moved or the link is incorrect.
      </p>
      <Link
        href="/blogs"
        className="mt-8 inline-flex rounded-full bg-primaryColor px-6 py-3 text-white transition-opacity hover:opacity-90"
      >
        Back to Journal
      </Link>
    </div>
  );
}
