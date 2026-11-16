"use client";

import React from "react";
import FollowersList from "./FollowersList";
import FollowerSkeleton from "./FollowerSkeleton";
import { usePortfolio } from "../../context/PortfolioContext";

export default function FollowersView() {
  const { followers } = usePortfolio();
  const isLoading = followers === null;

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
                    <h2 className="title">My Followers</h2>
                  </div>
                </div>
              </div>
              {isLoading ? (
                <div className="row row--25 mt--10 mt_md--10 mt_sm--10 flex flex-wrap">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <FollowerSkeleton key={`follower-skel-${i}`} />
                  ))}
                </div>
              ) : followers && followers.length > 0 ? (
                <FollowersList followers={followers} />
              ) : (
                <div className="col-12 w-full text-center py-10">
                  <h4 className="text-muted text-gray-400">No data</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
