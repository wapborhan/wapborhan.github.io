import React from "react";
import logo from "../logo.png";

export default function CoomingSoon() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        This site is Redesigning by React
        <br />{" "}
      </p>
      <div className=" d-flex justify-content-around">
        <h2>Visit Our Old Site to</h2>
        <h2>
          <a href="https://wapborhan.com/old/" className="btn btn-warning ms-2">
            {" "}
            Here
          </a>
        </h2>
      </div>
    </header>
  );
}