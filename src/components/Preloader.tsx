"use client";

import React, { useState, useEffect } from "react";
import { usePortfolio } from "../context/PortfolioContext";

export default function Preloader() {
  const { isPageLoading } = usePortfolio();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;
    let timer3: NodeJS.Timeout;

    if (isPageLoading) {
      setVisible(true);
      setProgress(15);
      timer1 = setTimeout(() => {
        setProgress(65);
      }, 100);
      timer2 = setTimeout(() => {
        setProgress(85);
      }, 250);
    } else {
      setProgress(100);
      timer3 = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 350);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isPageLoading]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className={`top-border-loader ${!isPageLoading && progress === 100 ? "completed" : ""}`}
      style={{
        width: `${progress}%`,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    >
      <div className="top-border-loader-glow" />
    </div>
  );
}
