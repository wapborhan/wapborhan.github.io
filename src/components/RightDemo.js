import React, { useState, useEffect } from "react";
// import { Button, Modal } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";

function RightDemo() {
  const [isDark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!isDark);
    // const html = document.getElementsByTagName("body");
    document.body.classList.toggle("white-version");
  };
  return (
    <>
      <div className="riht">
        <div className="rn-right-demo">
          <a
            className="demo-button"
            // onClick={() => setLgShow(true)}
            onClick={toggleDark}
          >
            <span className="text">{!isDark ? <FaSun /> : <FaMoon />}</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default RightDemo;
