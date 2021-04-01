import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const StarBackground = () => {
  const { width, height } = useWindowDimensions();

  return (
    <svg
      className="fixed-top vw-100 vh-100"
      viewBox={`0 0 ${width} ${height}`}
      style={{ zIndex: -1 }}
    >
      {new Array(1000).fill(1).map((_, i) => (
        <circle
          key={i}
          cx={width * Math.random()}
          cy={height * Math.random()}
          fill="#f8f9fa"
        >
          <animate
            attributeName="r"
            values={`0;${1.2 * Math.random()};0`}
            begin={`${Math.random()}s`}
            dur={`${2 + 4 * Math.random()}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
};

export default StarBackground;
