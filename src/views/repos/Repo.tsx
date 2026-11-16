"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import RepoList from "./RepoList";
import RepoSkeleton from "./RepoSkeleton";
import { usePortfolio } from "../../context/PortfolioContext";

const ITEMS_PER_PAGE = 12;

export default function RepoView() {
  const { repos } = usePortfolio();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isChangingPage, setIsChangingPage] = useState(false);

  const totalRepos = repos ? repos.length : 0;
  const totalPages = Math.max(1, Math.ceil(totalRepos / ITEMS_PER_PAGE));

  const pageFromQuery = parseInt(searchParams.get("page") || "1", 10);
  const currentPage = !isNaN(pageFromQuery) && pageFromQuery >= 1 ? pageFromQuery : 1;

  const validPage = repos
    ? Math.min(Math.max(1, currentPage), totalPages)
    : Math.max(1, currentPage);

  useEffect(() => {
    if (repos && totalPages > 0 && currentPage > totalPages) {
      router.replace(`/repo/?page=${totalPages}`);
    }
  }, [repos, totalPages, currentPage, router]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isChangingPage) {
      timer = setTimeout(() => {
        setIsChangingPage(false);
      }, 400);
    }
    return () => clearTimeout(timer);
  }, [isChangingPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== validPage) {
      setIsChangingPage(true);
      router.push(`/repo/?page=${newPage}`);
      const portfolioEl = document.getElementById("portfolio");
      if (portfolioEl) {
        portfolioEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
  const currentRepos = repos
    ? repos.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    : [];

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

  const isLoading = repos === null || isChangingPage;

  return (
    <div className="sr-content pt--30">
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
                      Visit my portfolio and keep your feedback
                    </span>
                    <h2 className="title">My Repositories</h2>
                  </div>
                </div>
              </div>
              <div className="row flex flex-wrap">
                <div className="col-md-8 w-full md:w-8/12">
                  <div className="catt-title">
                    <h3>
                      Some <span className="txt-success">Projects</span> I&apos;ve
                      Build On
                    </h3>
                    <div className="text-right">
                      <a
                        className="rn-btn btn-brd mr--30"
                        href="https://github.com/wapborhan"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Github</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repositories Grid or Skeleton */}
              <div className="row row--25 mt--10 mt_md--10 mt_sm--10 flex flex-wrap">
                {isLoading ? (
                  Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                    <RepoSkeleton key={`skeleton-${index}`} />
                  ))
                ) : currentRepos.length > 0 ? (
                  currentRepos.map((repo) => {
                    return <RepoList repos={repo} key={repo.id} />;
                  })
                ) : (
                  <div className="col-12 w-full text-center py-10">
                    <h4 className="text-muted text-gray-400">No data</h4>
                  </div>
                )}
              </div>

              {/* Pagination controls */}
              {repos && totalPages > 1 && (
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
