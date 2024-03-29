import React from "react";
import FollowersList from "./FollowersList";

const Followers = (props) => {
  // console.log(props.followers);
  return (
    <div className="sr-content pt--30">
      <div className="container">
        <div className="sect-main">
          {/* <!-- Start Portfolio Area --> */}
          <div className="rn-portfolio-area " id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="section-title text-center"
                  >
                    {/* <span className="subtitle">
                      Visit my portfolio and keep your feedback
                    </span> */}
                    <h2 className="title">My Followers</h2>
                  </div>
                </div>
              </div>
              {props.followers ? (
                <FollowersList followers={props.followers} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followers;
