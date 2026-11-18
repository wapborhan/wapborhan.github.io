"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { BlogPost } from "@/types/blog";

const ITEMS_PER_PAGE = 6;

type Props = {
  posts: BlogPost[];
};

export default function Blog({ posts = [] }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isChangingPage, setIsChangingPage] = useState(false);

  const totalPosts = posts ? posts.length : 0;
  const totalPages = Math.max(1, Math.ceil(totalPosts / ITEMS_PER_PAGE));

  const pageFromQuery = parseInt(searchParams?.get("page") || "1", 10);
  const currentPage =
    !isNaN(pageFromQuery) && pageFromQuery >= 1 ? pageFromQuery : 1;
  const validPage = Math.min(Math.max(1, currentPage), totalPages);

  useEffect(() => {
    if (pathname === "/blog" && totalPages > 0 && currentPage > totalPages) {
      router.replace(`/blog/?page=${totalPages}`);
    }
  }, [totalPages, currentPage, router, pathname]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isChangingPage) {
      timer = setTimeout(() => {
        setIsChangingPage(false);
      }, 350);
    }
    return () => clearTimeout(timer);
  }, [isChangingPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== validPage) {
      setIsChangingPage(true);
      router.push(`/blog/?page=${newPage}`);
      const blogElement = document.getElementById("portfolio");
      if (blogElement) {
        blogElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (validPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }
    if (validPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [
      1,
      "...",
      validPage - 1,
      validPage,
      validPage + 1,
      "...",
      totalPages,
    ];
  };

  const isHome = pathname === "/";

  return (
    <div className="sr-content pt--30 rn-portfolio-area rn-section-gap section-separator">
      <div className="container mx-auto">
        <div className="sect-main">
          <div className="rn-portfolio-area" id="portfolio">
            <div className="container mx-auto">
              <div className="row flex flex-wrap">
                <div className="col-lg-12 w-full">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="section-title text-center"
                  >
                    <span className="subtitle">
                      Read my latest tech insights & tutorials
                    </span>
                    <h2 className="title">My Blog</h2>
                  </div>
                </div>
              </div>

              <div className="row flex flex-wrap mb--30">
                <div className="col-md-8 w-full md:w-8/12">
                  <div className="catt-title">
                    <h3>
                      Latest <span className="txt-success">Articles</span> &
                      Guides
                    </h3>
                  </div>
                </div>
                <div className="col-md-4 w-full md:w-4/12 text-left md:text-right self-center">
                  <a
                    className="rn-btn btn-brd"
                    href="https://blog.wapborhan.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Visit Hashnode</span>
                  </a>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                {isHome ? (
                  <>
                    {posts.slice(0, 4).map((post) => (
                      <div
                        className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
                        key={post.id}
                      >
                        <BlogCard post={post} />
                      </div>
                    ))}
                    <div className="col-12 w-full text-center mt--30">
                      <Link href="/blog" className="rn-btn">
                        <span>All Blogs &rarr;</span>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {isChangingPage ? (
                      <div className="col-12 w-full text-center py-10 flex justify-center items-center min-h-[300px]">
                        <div
                          className="animate-spin inline-block rounded-full border-4 border-solid border-current border-r-transparent text-[#ff014f]"
                          role="status"
                          style={{ width: "2.5rem", height: "2.5rem" }}
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : currentPosts.length > 0 ? (
                      currentPosts.map((post) => (
                        <div
                          className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
                          key={post.id}
                        >
                          <BlogCard post={post} />
                        </div>
                      ))
                    ) : (
                      <div className="col-12 w-full text-center py-10">
                        <h4 className="text-muted text-gray-400">
                          No posts found
                        </h4>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Pagination Controls */}
              {!isHome && totalPages > 1 && (
                <div className="row mt--50 pb--20 flex flex-wrap">
                  <div className="col-12 w-full flex justify-center items-center">
                    <div className="pagination-container flex items-center justify-center">
                      <button
                        type="button"
                        className="rn-btn pagination-btn prev"
                        disabled={validPage === 1}
                        onClick={() => handlePageChange(validPage - 1)}
                        aria-label="Previous Page"
                      >
                        &laquo; Prev
                      </button>

                      {getPageNumbers().map((p, idx) => {
                        if (p === "...") {
                          return (
                            <span
                              key={`ellipsis-${idx}`}
                              className="pagination-ellipsis px-1"
                            >
                              ...
                            </span>
                          );
                        }

                        const pageNum = Number(p);
                        const isFirst = pageNum === 1;
                        const isLast = pageNum === totalPages;
                        const isActive = pageNum === validPage;
                        const isNear = Math.abs(pageNum - validPage) <= 1;

                        return (
                          <button
                            key={`page-${pageNum}`}
                            type="button"
                            className={`rn-btn pagination-btn page-num ${
                              isActive ? "active" : ""
                            } ${isFirst ? "first-page" : ""} ${
                              isLast ? "last-page" : ""
                            } ${isNear ? "near-page" : ""}`}
                            onClick={() => handlePageChange(pageNum)}
                            aria-label={`Page ${pageNum}`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <span>{pageNum}</span>
                          </button>
                        );
                      })}

                      <button
                        type="button"
                        className="rn-btn pagination-btn next"
                        disabled={validPage === totalPages}
                        onClick={() => handlePageChange(validPage + 1)}
                        aria-label="Next Page"
                      >
                        <span>Next &raquo;</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
