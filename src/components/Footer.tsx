"use client";

import React, { useState, useEffect } from "react";
import { GiArrowWings } from "react-icons/gi";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="rn-footer-area rn-section-gap">
      <div className="container mx-auto">
        <div className="row flex flex-wrap">
          <div className="col-lg-12 w-full">
            <div className="footer-area text-center">
              <div className="logo flex justify-center">
                <a href="/">
                  <img src="/images/logo-vertical-dark.png" alt="logo" />
                </a>
              </div>
              <p className="description mt--30 text-center">
                © {currentYear}. All rights reserved by{" "}
                <a target="_blank" href="https://wapborhan.com" rel="noreferrer">
                  WapBorhan{" "}
                </a>
                | Designer{" "}
                <a
                  target="_blank"
                  href="https://www.srdreamlab.com"
                  rel="noreferrer"
                >
                  SR Dream Lab
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {showTopBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="custom-back-to-top-button"
          style={{
            position: "fixed",
            zIndex: 999,
            fontSize: 25,
            backgroundColor: "#ff014f",
            color: "#ffffff",
            width: "5rem",
            height: "5rem",
            bottom: 30,
            right: 30,
            transform: "rotate(312deg)",
            borderRadius: "50%",
            border: "none",
            boxShadow: "0 10px 25px rgba(255, 1, 79, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <GiArrowWings />
        </button>
      )}
    </footer>
  );
}
