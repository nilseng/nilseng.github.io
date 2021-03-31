import React from "react";

const RandomPaths = () => {
  return (
    <svg
      className="position-fixed vh-100 vw-100"
      viewBox="0 0 100 100"
      style={{ zIndex: -1 }}
    >
      <path
        d={`M ${100 * Math.random()} ${100 * Math.random()} H ${
          100 * Math.random()
        } V ${100 * Math.random()} H ${100 * Math.random()} L ${
          100 * Math.random()
        } ${100 * Math.random()}`}
        fill="none"
        stroke="#f8f9fa"
        strokeWidth="0.05"
      />
    </svg>
  );
};

export default RandomPaths;
