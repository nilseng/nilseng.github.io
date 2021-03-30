import React from "react";

const CircularAnimation = () => {
  const cx = 50;
  const cy = 50;
  return (
    <svg
      className="position-fixed vh-100 vw-100"
      viewBox="0 0 100 100"
      style={{ zIndex: -1 }}
    >
      {new Array(100).fill(1).map((_, i) => {
        const y = cy + 20 * Math.sin((2 * Math.PI * i) / 100);
        const x0 = 20 + 20 * Math.cos((2 * Math.PI * i) / 100);
        return (
          <g key={i}>
            <circle r={0.1} cy={y} fill="#f8f9fa">
              <animate
                attributeName="cx"
                values={`
              ${cx + x0};
              ${cx - x0};
              ${cx + x0}
              `}
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}
    </svg>
  );
};

export default CircularAnimation;
