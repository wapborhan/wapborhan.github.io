import React from "react";
import logo from "../logo.png";

export default function CoomingSoon() {
  return (
    <div className="bg-dark text-center vh-100    ">
      <header className="container pt-5">
        <img src={logo} className="App-logo w-25" alt="logo" />
        <p className="pt-5">
          This site is Redesigning by React
          <br />{" "}
        </p>
        <div className="text-center">
          <h4>Visit Our Old Site to</h4>

          <a
            href="https://wapborhan.com/old/"
            className="btn btn-warning btn-lg"
          >
            Here
          </a>
        </div>
      </header>
    </div>
  );
}
