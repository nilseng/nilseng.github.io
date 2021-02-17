import React from "react";
import { Canvas } from "react-three-fiber";
import { getRandomColor } from "../common/utils";

import Box from "./Box";

const ThreeFiber = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {new Array(100).fill(1).map((_, i) => (
        <Box
          key={i}
          position={[
            Math.random() * 8 - 4,
            Math.random() * 8 - 4,
            Math.random() * 8 - 4,
          ]}
          color={getRandomColor()}
          hoverColor={getRandomColor()}
        />
      ))}
    </Canvas>
  );
};

export default ThreeFiber;
