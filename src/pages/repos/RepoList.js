import React, { Fragment, useState } from "react";
import {
  FaRegStar,
  FaEye,
  FaExternalLinkAlt,
  FaRegCheckCircle,
} from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";
import RepoIMG from "../../assets/images/repo.png";

export default function Repos(user) {
  const repo = user.repos;
  const pages = repo.homepage;

  // console.log(repo);
  return (
    <Fragment>
      <div
        // key={repo.id}
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
              {/* <a>
                <img src={RepoIMG} alt="WapBorhan" />
              </a> */}
              <div className="owner d-flex align-items-end">
                <img
                  src={repo.owner.avatar_url}
                  className="img-fluid w-25 rounded-circle "
                  alt="Profile"
                />
                {/* <h6 className="bg-dark px-3 bg-opacity-50 rounded">
                        Borhan Uddin
                      </h6> */}
              </div>
            </div>

            <div className="content">
              <div className="head d-flex justify-content-between">
                <h4 className="title text-uppercase mb-5">
                  <a href={repo.html_url}>
                    <span style={{ color: "red", marginRight: "10px" }}>
                      <FaRegCheckCircle />
                    </span>{" "}
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
              <div className="category-info p-0">
                <div className="category-list">
                  {repo.language ? (
                    <div
                      className={
                        "btn  p-3 text-light fw-bolder text-uppercase " +
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
                  <div className="card-btn-container d-flex">
                    <div>
                      <a className="btn card-btn" title="Star">
                        <FaRegStar />
                        {" " + repo.stargazers_count}
                      </a>
                    </div>
                    <div>
                      <a className="btn card-btn" title="Watch">
                        <FaEye />
                        {" " + repo.watchers_count}
                      </a>
                    </div>
                    <div>
                      <a className="btn card-btn" title="Fork">
                        <VscRepoForked /> {" " + repo.forks_count}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <p className="justify-content-start m-0">
                      <div className=" d-block mt-5 h6 fw-normal text-dark">
                        <span>Crated on:</span>{" "}
                        {dateFormat(repo.created_at, "dS mmm yyyy")}
                      </div>

                      <div className=" d-block mt-3 mb-4 h6 fw-normal text-dark">
                        <span>Update on:</span>{" "}
                        {dateFormat(repo.updated_at, "dS mmm yyyy")}
                      </div>
                    </p> */}
              {/* <p>
                      <span>Description:</span> {repo.description}
                    </p> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
