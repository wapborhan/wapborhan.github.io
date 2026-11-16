import React, { Fragment } from "react";
import {
  FaRegStar,
  FaEye,
  FaExternalLinkAlt,
  FaRegCheckCircle,
} from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";
import { Repo } from "../../types";

interface RepoListProps {
  repos: Repo;
}

export default function RepoList({ repos: repo }: RepoListProps) {
  const pages = repo.homepage;

  return (
    <Fragment>
      <div
        data-aos="flip-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-delay="600"
        data-aos-once="true"
        className="col-lg-6 col-xl-4 col-md-6 col-12 w-full md:w-1/2 xl:w-1/3 mt--50 mt_md--30 mt_sm--70"
      >
        <div className="rn-portfolio w-full">
          <div className="inner">
            <div className="content">
              <div className="head flex justify-between">
                <h4 className="title uppercase mb-5">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    <span style={{ color: "red", marginRight: "10px" }}>
                      <FaRegCheckCircle className="inline-block" />
                    </span>{" "}
                    {repo.name}
                  </a>
                </h4>
                <div className="live">
                  {pages ? (
                    <a
                      href={repo.homepage!}
                      title="Live"
                      className="btn card-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="category-info p-0">
                <div className="category-list">
                  {repo.language ? (
                    <div
                      className={
                        "btn p-3 text-light font-bold uppercase " +
                        repo.language.toLowerCase()
                      }
                    >
                      {repo.language}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="meta">
                  <div className="card-btn-container flex">
                    <div>
                      <span className="btn card-btn" title="Star">
                        <FaRegStar className="inline-block" />
                        {" " + repo.stargazers_count}
                      </span>
                    </div>
                    <div>
                      <span className="btn card-btn" title="Watch">
                        <FaEye className="inline-block" />
                        {" " + repo.watchers_count}
                      </span>
                    </div>
                    <div>
                      <span className="btn card-btn" title="Fork">
                        <VscRepoForked className="inline-block" /> {" " + repo.forks_count}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
