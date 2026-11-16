import React, { Suspense } from "react";
import StarredView from "../../views/starred/Starred";
import RepoSkeleton from "../../views/repos/RepoSkeleton";

export default function StarredPage() {
  return (
    <Suspense
      fallback={
        <div className="sr-content pt--30">
          <div className="container mx-auto">
            <div className="sect-main">
              <div className="rn-portfolio-area" id="portfolio">
                <div className="container mx-auto">
                  <div className="row flex flex-wrap row--25 mt--10 mt_md--10 mt_sm--10">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <RepoSkeleton key={`fallback-star-skel-${i}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <StarredView />
    </Suspense>
  );
}
