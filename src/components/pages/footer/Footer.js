import React, { Fragment } from "react";
import BackToTop from "react-custom-back-to-top-button";
import { GiArrowWings } from "react-icons/gi";

export default function Footer() {
  return (
    <div className="rn-footer-area rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area text-center">
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo/logo-vertical-dark.png" alt="logo" />
                </a>
              </div>

              <p className="description mt--30">
                © 2022. All rights reserved by{" "}
                <a target="_blank" href="https://wapborhan.com">
                  WapBorhan
                </a>{" "}
                | Designer{" "}
                <a target="_blank" href="https://facebook.com/infoborhan">
                  Borhan Uddin
                </a>
                .{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Fragment>
        <BackToTop
          style={{
            fontSize: 25,
            backgroundColor: "#ff014f",
            width: "5rem",
            height: "5rem",
            bottom: 30,
            right: 30,
            transform: "rotate(312deg)",
          }}
          icon={<GiArrowWings />}
        />
      </Fragment>
    </div>
  );
}
