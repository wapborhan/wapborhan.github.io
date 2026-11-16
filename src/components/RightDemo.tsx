"use client";

import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function RightDemo() {
  const [isDark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!isDark);
    if (typeof document !== "undefined") {
      document.body.classList.toggle("white-version");
    }
  };

  return (
    <div className="riht">
      <div className="rn-right-demo">
        <button
          type="button"
          className="demo-button"
          onClick={toggleDark}
          aria-label="Toggle dark/light theme"
        >
          <span className="text">{!isDark ? <FaSun /> : <FaMoon />}</span>
        </button>
      </div>
    </div>
  );
}
