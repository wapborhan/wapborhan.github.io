import React, { Fragment } from "react";
import { FaRegStar, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";

export default function Repos(user) {
  const repos = user.repos;

  return (
    <Fragment>
      {/* <!-- Project Tittle Start -->/ */}
      <div className="row">
        <div className="col-md-8">
          <div className="catt-title">
            <h3>
              Some <span className="txt-success">Projects</span> I've Build By
            </h3>
            <div className="text-right">
              <a
                className="rn-btn btn-brd mr--30"
                href="more/portfolio/javascript.html"
              >
                <span>Javascript</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project Tiitle End --> */}

      <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
        {repos.map((repo) => {
          const pages = repo.homepage;

          return (
            <div
              key={repo.id}
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
                      {/* <img
                        src="https://library.fresnostate.edu/sites/all/assets/img/lense/fsdr-lense.png"
                        alt="WapBorhan"
                      /> */}
                    </a>
                    {/* <div className="owner d-flex align-items-end">
                      <img
                        src={repo.owner.avatar_url}
                        className="img-fluid w-25 rounded-circle "
                        alt=""
                      />{" "}
                      <h5 className="bg-dark px-3 bg-opacity-50 rounded">
                        Borhan Uddin
                      </h5>
                    </div> */}
                  </div>

                  <div className="content">
                    <div className="head d-flex justify-content-between">
                      <h4 className="title text-uppercase mb-3">
                        <a href={repo.html_url}>
                          {repo.name}
                          <i></i>
                        </a>
                      </h4>
                      <div className="live">
                        {pages === null ? (
                          <Fragment></Fragment>
                        ) : (
                          <a
                            href={repo.homepage}
                            title="Live"
                            className="btn card-btn"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="category-info mb-3">
                      <div className="category-list">
                        <div className="btn btn-warning p-3 text-light fw-bolder text-uppercase">
                          {repo.language}
                        </div>
                      </div>
                      <div className="meta">
                        <div className="card-btn-container d-flex">
                          <div>
                            <a className="btn card-btn" title="Star">
                              <FaRegStar /> {repo.stargazers_count}
                            </a>
                          </div>
                          <div>
                            <a className="btn card-btn" title="Watch">
                              <FaEye /> {repo.watchers_count}
                            </a>
                          </div>
                          <div>
                            <a className="btn card-btn" title="Fork">
                              <VscRepoForked /> {repo.forks_count}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      <span>Description:</span> {repo.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
