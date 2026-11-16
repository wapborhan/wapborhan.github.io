import React from "react";

export default function RepoSkeleton() {
  return (
    <div className="col-lg-6 col-xl-4 col-md-6 col-12 w-full md:w-1/2 xl:w-1/3 mt--50 mt_md--30 mt_sm--70">
      <div className="rn-portfolio w-full skeleton-card">
        <div className="inner">
          <div className="content">
            <div className="head flex justify-between items-center mb-5">
              <div
                className="flex items-center"
                style={{ width: "75%", gap: "10px" }}
              >
                <div
                  className="skeleton-shimmer rounded-full"
                  style={{ width: "20px", height: "20px", flexShrink: 0 }}
                ></div>
                <div
                  className="skeleton-shimmer"
                  style={{ width: "75%", height: "20px", borderRadius: "4px" }}
                ></div>
              </div>
              <div
                className="skeleton-shimmer"
                style={{ width: "36px", height: "36px", borderRadius: "8px" }}
              ></div>
            </div>

            <div className="category-info p-0">
              <div className="category-list mb-4">
                <div
                  className="skeleton-shimmer"
                  style={{ width: "85px", height: "34px", borderRadius: "6px" }}
                ></div>
              </div>
              <div className="meta">
                <div className="card-btn-container flex" style={{ gap: "8px" }}>
                  <div
                    className="skeleton-shimmer"
                    style={{ width: "65px", height: "36px", borderRadius: "8px" }}
                  ></div>
                  <div
                    className="skeleton-shimmer"
                    style={{ width: "65px", height: "36px", borderRadius: "8px" }}
                  ></div>
                  <div
                    className="skeleton-shimmer"
                    style={{ width: "65px", height: "36px", borderRadius: "8px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
