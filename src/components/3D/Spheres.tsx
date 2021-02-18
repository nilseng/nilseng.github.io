import React from "react";
import { Canvas } from "react-three-fiber";

import RotatingSphere from "./RotatingSphere";

const Spheres = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {new Array(10).fill(1).map((_, i) => (
        <RotatingSphere
          key={i}
          position={[
            Math.random() * 8 - 4,
            Math.random() * 8 - 4,
            Math.random() * 8 - 4,
          ]}
          color={"#f8f9fa"}
        />
      ))}
    </Canvas>
  );
};

export default Spheres;
