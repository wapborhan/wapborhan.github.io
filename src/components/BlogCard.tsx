import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const imageUrl =
    typeof post.coverImage === "string"
      ? post.coverImage
      : post.coverImage?.url;

  return (
    <div
      className="rn-portfolio w-full h-full flex flex-col justify-between"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalCenter"
    >
      <div className="inner h-full flex flex-col justify-between">
        <div className="thumbnail relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
          <Link
            href={`/blog/${post.slug}`}
            className="block relative w-full h-full"
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105 rounded-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
            ) : (
              <div className="w-full h-full bg-[#1b1f24] flex items-center justify-center rounded-xl text-gray-500">
                <span className="text-sm font-medium">WapBorhan Blog</span>
              </div>
            )}
          </Link>
        </div>

        <div className="content flex-grow flex flex-col justify-between">
          <div>
            <div className="category-info flex justify-between items-center mb-2">
              <div className="category-list">
                {formattedDate && (
                  <span className="text-xs text-gray-400">{formattedDate}</span>
                )}
              </div>
            </div>

            <h4 className="title text-lg font-bold mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-[var(--primary-color)] transition-colors line-clamp-2"
              >
                {post.title}
              </Link>
            </h4>

            {/* {post.brief && (
              <p className="text-gray-400 text-xs line-clamp-2 mb-3">
                {post.brief}
              </p>
            )} */}
          </div>

          {/* <div className="mt-auto pt-2">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              Read Article &rarr;
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
