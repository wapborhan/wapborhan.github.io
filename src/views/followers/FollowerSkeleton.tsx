import React from "react";

export default function FollowerSkeleton() {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mt--30 mt_md--20 mt_sm--20">
      <div className="rn-portfolio w-full skeleton-card follower-skeleton-card">
        <div className="inner p-0">
          <div
            className="skeleton-shimmer rounded-full mx-auto mb-3"
            style={{ width: "76px", height: "76px" }}
          ></div>
          <div
            className="skeleton-shimmer mx-auto mb-3"
            style={{ width: "60%", height: "18px", borderRadius: "4px" }}
          ></div>
          <div className="flex justify-center gap-2 mt-2">
            <div
              className="skeleton-shimmer"
              style={{ width: "55px", height: "26px", borderRadius: "20px" }}
            ></div>
            <div
              className="skeleton-shimmer"
              style={{ width: "70px", height: "26px", borderRadius: "20px" }}
            ></div>
            <div
              className="skeleton-shimmer"
              style={{ width: "65px", height: "26px", borderRadius: "20px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
