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
      <pointLight position={[5, 5, 10]} />
      {new Array(100).fill(1).map((_, i) => (
        <RotatingSphere key={i} color={"#f8f9fa"} />
      ))}
    </Canvas>
  );
};

export default Spheres;
