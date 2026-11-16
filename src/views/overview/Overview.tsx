"use client";

import React from "react";
import dynamic from "next/dynamic";
import { decode as base64_decode } from "base-64";
import { usePortfolio } from "../../context/PortfolioContext";

const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default || mod),
  {
    ssr: false,
    loading: () => (
      <div className="col-12 w-full text-center py-10 flex justify-center items-center">
        <div
          className="animate-spin inline-block rounded-full border-4 border-solid border-current border-r-transparent text-[#ff014f]"
          role="status"
          style={{ width: "2.5rem", height: "2.5rem" }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ),
  }
);

export default function OverviewView() {
  const { overview } = usePortfolio();

  let decoded = "";
  try {
    decoded = overview ? base64_decode(overview) : "";
  } catch {
    decoded = "";
  }

  const isLoading = overview === "TG9hZGluZy4uLg==";
  const hasData =
    decoded && decoded.trim().length > 0 && decoded !== "Loading...";

  return (
    <div className="sr-content pt--30">
      <div className="container mx-auto">
        <div
          className="sect-main"
          style={{
            background: "#0d1117",
          }}
        >
          <div className="rn-portfolio-area" id="portfolio">
            <div className="container mx-auto">
              <div className="row flex flex-wrap">
                <div className="col-lg-12 w-full">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="section-title text-center mb-4"
                  >
                    <h2 className="title text-light mb-5">My Overview</h2>
                  </div>
                </div>
              </div>
              {isLoading ? (
                <div className="col-12 w-full text-center py-10 flex justify-center items-center">
                  <div
                    className="animate-spin inline-block rounded-full border-4 border-solid border-current border-r-transparent text-[#ff014f]"
                    role="status"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : hasData ? (
                <MarkdownPreview source={decoded} style={{ color: "black" }} />
              ) : (
                <div className="col-12 w-full text-center py-10">
                  <h4 className="text-gray-400">No data</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
