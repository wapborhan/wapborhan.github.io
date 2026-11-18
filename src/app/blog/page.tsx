import { Suspense } from "react";
import { getHashnodePosts } from "../../util/blog";

import Blog from "./Blog";
import RepoSkeleton from "@/views/repos/RepoSkeleton";

export default async function BlogPage() {
  const posts = await getHashnodePosts();

  if (!posts || posts.length === 0) {
    return <p className="text-center py-10">No posts found</p>;
  }
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
                      <RepoSkeleton key={`fallback-skel-${i}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <Blog posts={posts} />
    </Suspense>
  );
}
