import React from "react";
import StarredList from "./StarredList";

const Starred = (props) => {
  // console.log(props.starred);
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
                    className="section-title text-center mb-4"
                  >
                    {/* <span className="subtitle">
                Visit my portfolio and keep your feedback
              </span> */}
                    <h2 className="title ">Starred</h2>
                  </div>
                </div>
              </div>
              <StarredList starred={props.starred} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starred;
