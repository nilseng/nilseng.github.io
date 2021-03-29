import React from "react";

const StarBackground = () => {
  return (
    <svg
      className="position-fixed"
      viewBox="0 0 100 100"
      style={{ zIndex: -1 }}
    >
      {new Array(10).fill(1).map((_, i) =>
        new Array(1000).fill(1).map((_, j) => (
          <circle
            key={i * 1000 + j}
            cx={100 * Math.random()}
            cy={100 * Math.random()}
            fill="#f8f9fa"
          >
            <animate
              attributeName="r"
              values={`0;${0.1 * Math.random()};0`}
              begin={`${Math.random()}s`}
              dur={`${2 + 4 * Math.random()}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))
      )}
    </svg>
  );
};

export default StarBackground;
