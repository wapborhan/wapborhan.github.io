import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { decode as base64_decode, encode as base64_encode } from "base-64";

const Overview = (props) => {
  let encoded = base64_decode(props.overview);
  // let decoded = base64_decode(props.overview.content);

  const source = encoded;

  // console.log(encoded);

  return (
    <div className="sr-content pt--30">
      <div className="container">
        <div
          className="sect-main"
          style={{
            background: "#0d1117",
          }}
        >
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
                    <h2 className="title text-light mb-5">My Overview</h2>
                  </div>
                </div>
              </div>
              <MarkdownPreview source={source} style={{ color: "black" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
