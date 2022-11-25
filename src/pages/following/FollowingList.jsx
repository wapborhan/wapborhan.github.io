import React from "react";

const FollowingList = (props) => {
  // console.log(props);
  return (
    <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
      {props.following.map((follower) => {
        // const pages = repo.homepage;

        return (
          <div
            key={follower.id}
            data-aos="flip-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="600"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="rn-portfolio w-100">
              <div className="inner">
                <div className="thumbnail">
                  <a>
                    <img src={follower.avatar_url} alt={follower.login} />
                  </a>
                </div>

                <div className="content">
                  <div className="head d-flex justify-content-between">
                    <h4 className="title text-uppercase mb-3">
                      <a href={follower.url}>{follower.login}</a>
                    </h4>
                  </div>
                  <div className="category-info d-block mb-3">
                    <div className="category-list d-flex justify-content-between">
                      <div className="btn btn-info p-3 text-light fw-bolder text-uppercase">
                        <a
                          className="text-white"
                          href={`https://github.com/${follower.login}?tab=repositories`}
                        >
                          Repos
                        </a>
                      </div>
                      <div className="btn btn-danger p-3 text-light fw-bolder text-uppercase">
                        <a
                          className="text-white"
                          href={`https://github.com/${follower.login}?tab=followers`}
                        >
                          Followers
                        </a>
                      </div>
                      <div className="btn btn-warning p-3 text-light fw-bolder text-uppercase">
                        <a
                          className="text-white"
                          href={`https://github.com/${follower.login}?tab=following`}
                        >
                          Following
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FollowingList;
