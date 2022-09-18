import React from "react";
import { FaRegStar, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";

const StarredList = (props) => {
  const starred = props.starred;
  console.log(starred);
  return (
    <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
      {starred.map((starred) => {
        return (
          <div
            key={starred.id}
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
                    <img
                      src="https://library.fresnostate.edu/sites/all/assets/img/lense/fsdr-lense.png"
                      alt="WapBorhan"
                    />
                  </a>
                  <div className="owner d-flex align-items-end">
                    <img
                      src={starred.owner.avatar_url}
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
                    <h4 className="title text-uppercase mb-3">
                      <a href={starred.html_url}>
                        {starred.name}
                        <i></i>
                      </a>
                    </h4>
                    {/* <div className="live">
                      {pages === null ? (
                        <Fragment></Fragment>
                      ) : (
                        <a
                          href={starred.homepage}
                          title="Live"
                          className="btn card-btn"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div> */}
                  </div>
                  <div className="category-info mb-3">
                    <div className="category-list">
                      <div className="btn btn-warning p-3 text-light fw-bolder text-uppercase">
                        {starred.language}
                      </div>
                    </div>
                    <div className="meta">
                      <div className="card-btn-container d-flex">
                        <div>
                          <a className="btn card-btn" title="Star">
                            <FaRegStar /> <br />
                            {starred.stargazers_count}
                          </a>
                        </div>
                        <div>
                          <a className="btn card-btn" title="Watch">
                            <FaEye /> <br />
                            {starred.watchers_count}
                          </a>
                        </div>
                        <div>
                          <a className="btn card-btn" title="Fork">
                            <VscRepoForked />
                            <br /> {starred.forks_count}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <p className="justify-content-start m-0">
                      <div className=" d-block mt-5 h6 fw-normal text-dark">
                        <span>Crated on:</span>{" "}
                        {dateFormat(starred.created_at, "dS mmm yyyy")}
                      </div>

                      <div className=" d-block mt-3 mb-4 h6 fw-normal text-dark">
                        <span>Update on:</span>{" "}
                        {dateFormat(starred.updated_at, "dS mmm yyyy")}
                      </div>
                    </p> */}
                  {/* <p>
                      <span>Description:</span> {starred.description}
                    </p> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarredList;
