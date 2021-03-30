import React from "react";

const SineCosineAnimation = () => {
  return (
    <svg
      className="position-fixed min-vh-100"
      viewBox="0 0 100 100"
      style={{ zIndex: -1 }}
    >
      {new Array(2000).fill(1).map((_, i) => (
        <g key={i}>
          <circle
            cx={i / 20}
            cy={((i / 20) * (Math.sin(i) + 1)) / 2}
            fill="#f8f9fa"
            opacity="50%"
          >
            <animate
              attributeName="r"
              values={`${0.05 + i * 0.0001}`}
              begin={`${i * 0.001}s`}
            />
          </circle>
          <circle
            cx={(2000 - i) / 20}
            cy={((i / 20) * (Math.cos(i) + 1)) / 2}
            fill="#f8f9fa"
            opacity="50%"
          >
            <animate
              attributeName="r"
              values={`${0.05 + i * 0.0001}`}
              begin={`${0.001 * 2000 + i * 0.001}s`}
            />
          </circle>
        </g>
      ))}
    </svg>
  );
};

export default SineCosineAnimation;
