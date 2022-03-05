import React from "react";
import { FiGithub, FiEye, FiExternalLink } from "react-icons/fi";

export default function WordpressList({ props }) {
  // console.log(wpdata);

  return (
    <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
      {/* <!-- Start Single Portfolio --> */}
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-once="true"
        className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
      >
        <div className="rn-portfolio">
          <div className="inner">
            <div className="thumbnail">
              <a>
                <img
                  src="images/portfolio/wordpress/project-01.jpg"
                  alt="Personal Portfolio Images"
                />
              </a>
            </div>
            <div className="content">
              <div className="category-info">
                <div className="category-list">
                  <h3 className="pro-cat">Landing Page</h3>
                </div>
                <div className="meta">
                  <div className="card-btn-container d-flex">
                    <div>
                      <a
                        href="https://github.com/wapborhan/headp"
                        className="btn card-btn"
                        title="Source Code"
                      >
                        <i>
                          <FiGithub />
                        </i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://github.com/wapborhan/headp/blob/main/README.md#headp"
                        className="btn card-btn"
                        title="Details"
                      >
                        <i>
                          <FiEye />
                        </i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://code.wapborhan.com/headp/"
                        className="btn card-btn"
                        title="Live"
                      >
                        <i>
                          <FiExternalLink />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="title">
                <a>
                  HeadP <i className="feather-arrow-up-right"></i>
                </a>
              </h4>
              <p className="tags mt-3">
                <span className="php">php</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Single Portfolio --> */}
    </div>
  );
}
