import React from "react";
import { Follower } from "../../types";

interface FollowingListProps {
  following: Follower[];
}

export default function FollowingList({ following }: FollowingListProps) {
  return (
    <div className="row row--25 mt--10 mt_md--10 mt_sm--10 flex flex-wrap">
      {following.map((follower) => {
        return (
          <div
            key={follower.id}
            data-aos="flip-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="600"
            data-aos-once="true"
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mt--30 mt_md--20 mt_sm--20"
          >
            <div className="rn-portfolio w-full follower-card">
              <div className="inner p-0">
                <div className="follower-avatar-wrap">
                  <a
                    href={`https://github.com/${follower.login}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={follower.avatar_url}
                      alt={follower.login}
                      className="follower-avatar"
                    />
                  </a>
                </div>

                <div className="content p-0">
                  <h5 className="follower-name">
                    <a
                      href={`https://github.com/${follower.login}`}
                      target="_blank"
                      rel="noreferrer"
                      title={follower.login}
                    >
                      {follower.login}
                    </a>
                  </h5>

                  <div className="follower-actions flex justify-center items-center gap-1.5 flex-wrap">
                    <a
                      className="follower-btn follower-btn-repo"
                      href={`https://github.com/${follower.login}?tab=repositories`}
                      target="_blank"
                      rel="noreferrer"
                      title="Repositories"
                    >
                      Repos
                    </a>
                    <a
                      className="follower-btn follower-btn-followers"
                      href={`https://github.com/${follower.login}?tab=followers`}
                      target="_blank"
                      rel="noreferrer"
                      title="Followers"
                    >
                      Followers
                    </a>
                    <a
                      className="follower-btn follower-btn-following"
                      href={`https://github.com/${follower.login}?tab=following`}
                      target="_blank"
                      rel="noreferrer"
                      title="Following"
                    >
                      Following
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
