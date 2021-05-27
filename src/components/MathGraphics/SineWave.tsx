import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const SineWave = () => {
  const { width, height } = useWindowDimensions();

  return (
    <svg
      className="position-fixed vh-100 vw-100"
      viewBox={`0 0 ${width} ${height}`}
      style={{ zIndex: -1 }}
    >
      {new Array(1000).fill(1).map((_, i) => (
        <g key={i}>
          <circle r={1} cx={(width * i) / 1000} fill="#f8f9fa" opacity="50%">
            <animate
              attributeName="cy"
              values={`
              ${(height / 2) * (Math.sin((2 * Math.PI * i) / 1000) + 1)};
              ${
                (height / 2) *
                (Math.sin((2 * Math.PI * i) / 1000 + Math.PI) + 1)
              };
              ${
                (height / 2) *
                (Math.sin((2 * Math.PI * i) / 1000 + 2 * Math.PI) + 1)
              }`}
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r={1} cx={(width * i) / 1000} fill="#f8f9fa" opacity="50%">
            <animate
              attributeName="cy"
              values={`
              ${
                (height / 2) *
                (Math.sin((2 * Math.PI * i) / 1000 + Math.PI) + 1)
              };
              ${
                (height / 2) *
                (Math.sin((2 * Math.PI * i) / 1000 + 2 * Math.PI) + 1)
              };
              ${
                (height / 2) *
                (Math.sin((2 * Math.PI * i) / 1000 + Math.PI) + 1)
              }`}
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r={1} cx={(width * i) / 1000} fill="#f8f9fa" opacity="50%">
            <animate
              attributeName="cy"
              values={`
              ${
                (height / 2) *
                (Math.sin((2 * Math.PI * i) / 1000 + Math.PI / 2) + 1)
              };
              ${
                (height / 2) *
                (Math.sin((2 * Math.PI * i) / 1000 + (3 * Math.PI) / 2) + 1)
              };
              ${
                (height / 2) *
                (Math.sin((2 * Math.PI * i) / 1000 + Math.PI / 2) + 1)
              }`}
              dur="16s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
};

export default SineWave;
