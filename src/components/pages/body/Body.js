import React, { Component } from "react";
import Wordpress from "./wordpress/Wordpress";
// import PsdtoHtml from "./PsdtoHtml";
// import Javascript from "./Javascript";
import DATA_WORDPRESS from "../../data/portfolio/WordpressData";

export default class Body extends Component {
  state = {
    wpdata: DATA_WORDPRESS,
  };

  render() {
    // console.log(this.state.wpdata);
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
                      <span className="subtitle">
                        Visit my portfolio and keep your feedback
                      </span>
                      <h2 className="title">My Project</h2>
                    </div>
                  </div>
                </div>

                {/* Wordpress */}
                <Wordpress wpdata={this.state.wpdata} />

                {/* psd to html */}
                {/* <PsdtoHtml /> */}

                {/* Javascript */}
                {/* <Javascript /> */}
              </div>
            </div>
            {/* <!-- End portfolio Area --> */}
          </div>
        </div>
      </div>
    );
  }
}
