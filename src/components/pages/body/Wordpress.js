import React from "react";
import { FiGithub } from "react-icons/fi";

export default function Wordpress() {
  return (
    <div className="wordpress">
      {/* <!-- Project Tittle Start --> */}
      <div className="row">
        <div className="col-md-8">
          <div className="catt-title">
            <h3>
              Some <span className="txt-success">Projects</span> I've Build By
            </h3>
            <div className="text-right">
              <a
                className="rn-btn btn-brd mr--30"
                href="more//portfolio/wordpress.html"
              >
                <span>Wordpress</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project Tiitle End --> */}

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
                          <i className="feather-github"></i>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/wapborhan/headp/blob/main/README.md#headp"
                          className="btn card-btn"
                          title="Details"
                        >
                          <i className="feather-eye"></i>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://code.wapborhan.com/headp/"
                          className="btn card-btn"
                          title="Live"
                        >
                          <i className="feather-external-link"></i>
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

        {/* <!-- Start Single Portfolio --> */}
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-once="true"
          className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 "
        >
          <div className="rn-portfolio">
            <div className="inner">
              <div className="thumbnail">
                <a>
                  <img
                    src="images/portfolio/wordpress/project-02.jpg"
                    alt="Personal Portfolio Images"
                  />
                </a>
              </div>
              <div className="content">
                <div className="category-info">
                  <div className="category-list">
                    <h3 className="pro-cat">News Site</h3>
                  </div>
                  <div className="meta">
                    <div className="card-btn-container d-flex">
                      <div>
                        <a
                          href="https://github.com/wapborhan/daily-uttaran"
                          className="btn card-btn"
                          title="Source Code"
                        >
                          <i className="feather-github"></i>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/wapborhan/daily-uttaran/blob/main/README.md"
                          className="btn card-btn"
                          title="Details"
                        >
                          <i className="feather-eye"></i>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://code.wapborhan.com/daily-uttaran/"
                          className="btn card-btn"
                          title="Live"
                        >
                          <i className="feather-external-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="title">
                  <a>
                    Daily Uttaran
                    <i className="feather-arrow-up-right"></i>
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

        {/* <!-- Start Single Portfolio --> */}
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-once="true"
          className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
        >
          <div
            className="rn-portfolio"
            data-toggle="modal"
            data-target="#exampleModalCenter-3"
          >
            <div className="inner">
              <div className="thumbnail">
                <a href="#">
                  <img
                    src="images/portfolio/wordpress/project-03.jpg"
                    alt="Personal Portfolio Images"
                  />
                </a>
              </div>
              <div className="content">
                <div className="category-info">
                  <div className="category-list">
                    <h3 className="pro-cat">E-Commerce</h3>
                  </div>
                  <div className="meta">
                    <div className="card-btn-container d-flex">
                      <div>
                        <a
                          href="https://github.com/wapborhan/fol-bazar"
                          className="btn card-btn"
                          title="Source Code"
                        >
                          <i className="feather-github">
                            <FiGithub />
                          </i>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://github.com/wapborhan/fol-bazar/blob/main/README.md"
                          className="btn card-btn"
                          title="Details"
                        >
                          <i className="feather-eye"></i>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://code.wapborhan.com/fol-bazar/"
                          className="btn card-btn"
                          title="Live"
                        >
                          <i className="feather-external-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="title">
                  <a>
                    Fol Bazar
                    <i className="feather-arrow-up-right"></i>
                  </a>
                </h4>
                <p className="tags mt-3">
                  <span className="php">php</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Single Portfolio -->/ */}
      </div>
    </div>
  );
}
