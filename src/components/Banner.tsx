"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaExternalLinkAlt,
  FaBookOpen,
  FaUsers,
  FaUserCheck,
  FaStar,
} from "react-icons/fa";
import { VscRepo } from "react-icons/vsc";
import dateFormatRaw from "dateformat";
import { usePortfolio } from "../context/PortfolioContext";

const dateFormat: any = (dateFormatRaw as any)?.default || dateFormatRaw;

export default function Banner() {
  const { profile, starred } = usePortfolio();
  const pathname = usePathname() || "/";

  const p = profile || {};
  const blogurl = p.blog || "";
  const formattedBlogUrl = blogurl
    ? blogurl.startsWith("http")
      ? blogurl
      : `http://${blogurl}`
    : "#";

  const starredCount = Array.isArray(starred) ? starred.length : 0;

  const isOverviewActive =
    pathname === "/" || pathname === "/overview" || pathname === "/overview/";
  const isRepoActive = pathname.startsWith("/repo");
  const isFollowersActive = pathname.startsWith("/followers");
  const isFollowingActive = pathname.startsWith("/following");
  const isStarredActive = pathname.startsWith("/starred");

  return (
    <div className="main-page-wrapper">
      <div className="rn-header-image-area">
        <div
          className="bg_image--9 bg_image h-full w-full"
          style={{
            backgroundImage: `url(/images/bg-image-9.jpg)`,
          }}
        ></div>
      </div>
      <div className="rn-content-wrapper">
        <div className="container mx-auto">
          <div className="row padding-tb m_dec-top items-center flex flex-wrap">
            <div className="col-lg-6 w-full lg:w-1/2">
              <div className="header-left">
                <div className="header-thumbnail">
                  <img src={p.avatar_url || ""} alt={p.name || "WapBorhan"} />
                </div>
                <div className="header-info-content">
                  <h4 className="title">
                    <a href={p.html_url || "https://github.com/wapborhan"}>
                      {p.name || "Borhan Uddin"}
                      <FaExternalLinkAlt className="ml-3 inline-block" />
                    </a>
                  </h4>
                  <div className="status-info mb-3">{p.bio || ""}</div>

                  {/* social share area */}
                  <div className="social-share-style-1 border-none mt--40">
                    <ul className="social-share flex liststyle">
                      <li className="facebook">
                        <a
                          href="http://www.facebook.com/wapborhan"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-facebook"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </a>
                      </li>
                      <li className="github">
                        <a
                          href="http://www.github.com/wapborhan"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="github"
                            className="feather feather-NavLinkedin fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path
                              fill="currentColor"
                              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li className="NavLinkedin">
                        <a
                          href="http://Linkedin.com/in/wapborhan"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-NavLinkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 w-full lg:w-1/2">
              <div className="header-right">
                <div className="skill-area section-height skill-main ">
                  <div className="inner slide">
                    <div className="flex justify-start flex-wrap gap-2">
                      <span className="badge inline-block px-2.5 py-1 text-xs font-bold text-white rounded bg-[#198754] mt-3">
                        Followers: {p.followers ?? 0}
                      </span>
                      <span className="badge inline-block px-2.5 py-1 text-xs font-bold text-black rounded bg-[#ffc107] mt-3">
                        Following: {p.following ?? 0}
                      </span>
                      <span className="badge inline-block px-2.5 py-1 text-xs font-bold text-white rounded bg-[#0d6efd] mt-3">
                        Public Repos: {p.public_repos ?? 0}
                      </span>
                      <span className="badge inline-block px-2.5 py-1 text-xs font-bold text-black rounded bg-[#0dcaf0] mt-3">
                        Public Gists: {p.public_gists ?? 0}
                      </span>
                    </div>
                    <div className="skill-share-inner ">
                      <ul className="text-left content mt-4 mb-2 p-0">
                        <li>Address: {p.location || "N/A"}</li>
                        <li>Company: {p.company || "N/A"}</li>
                        <li>
                          Website:{" "}
                          {blogurl ? (
                            <a
                              className="text-decoration-none color-dark"
                              href={formattedBlogUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {blogurl}
                            </a>
                          ) : (
                            "N/A"
                          )}
                        </li>
                        <li>
                          Member Since:{" "}
                          {p.created_at
                            ? dateFormat(p.created_at, " dS mmmm yyyy")
                            : "N/A"}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Tabs (hidden on mobile and tablet) */}
      <div className="container mx-auto d-none d-lg-block hidden lg:block banner-nav-desktop">
        <div className="row mt--20">
          <div className="col-lg-12 w-full">
            <ul
              className="rn-nav-list nav flex nav-tabs"
              id="myTabs"
              role="tablist"
            >
              <li className="nav-item">
                <Link
                  className={`nav-link ${isOverviewActive ? "active" : ""}`}
                  href="/overview"
                >
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isRepoActive ? "active" : ""}`}
                  href="/repo"
                >
                  Repositories ({p.public_repos ?? 0})
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isFollowersActive ? "active" : ""}`}
                  href="/followers"
                >
                  Followers ({p.followers ?? 0})
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isFollowingActive ? "active" : ""}`}
                  href="/following"
                >
                  Following ({p.following ?? 0})
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isStarredActive ? "active" : ""}`}
                  href="/starred"
                >
                  Starred ({starredCount})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Menu with Icons (visible on mobile and tablet <= 991px) */}
      <nav
        className="mobile-bottom-nav flex lg:hidden"
        aria-label="Bottom Navigation"
      >
        <Link
          href="/overview"
          className={`mobile-nav-item ${isOverviewActive ? "active" : ""}`}
        >
          <FaBookOpen className="mobile-nav-icon" />
          <span className="mobile-nav-label">Overview</span>
        </Link>

        <Link
          href="/repo"
          className={`mobile-nav-item ${isRepoActive ? "active" : ""}`}
        >
          <VscRepo className="mobile-nav-icon" />
          <span className="mobile-nav-label">Repos</span>
        </Link>

        <Link
          href="/followers"
          className={`mobile-nav-item ${isFollowersActive ? "active" : ""}`}
        >
          <FaUsers className="mobile-nav-icon" />
          <span className="mobile-nav-label">Followers</span>
        </Link>

        <Link
          href="/following"
          className={`mobile-nav-item ${isFollowingActive ? "active" : ""}`}
        >
          <FaUserCheck className="mobile-nav-icon" />
          <span className="mobile-nav-label">Following</span>
        </Link>

        <Link
          href="/starred"
          className={`mobile-nav-item ${isStarredActive ? "active" : ""}`}
        >
          <FaStar className="mobile-nav-icon" />
          <span className="mobile-nav-label">Starred</span>
        </Link>
      </nav>
    </div>
  );
}
