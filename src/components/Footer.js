import React, { Fragment } from "react";
import BackToTop from "react-custom-back-to-top-button";
import { GiArrowWings } from "react-icons/gi";
import footBG from "../assets/images/logo-vertical-dark.png";

export default function Footer() {
  const d = new Date();
  return (
    <div className="rn-footer-area rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area text-center">
              <div className="logo">
                <a>
                  <img src={footBG} alt="logo" />
                </a>
              </div>
              <p className="description mt--30">
                © {d.getFullYear()}. All rights reserved by{" "}
                <a target="_blank" href="https://wapborhan.com">
                  WapBorhan{" "}
                </a>
                | Designer
                <a target="_blank" href="https://www.srdreamlab.com">
                  SR Dream Lab
                </a>
                .
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
