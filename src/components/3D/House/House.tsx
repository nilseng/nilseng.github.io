import React, { useEffect, useRef } from "react";
import { useThree } from "react-three-fiber";
import { Mesh, DoubleSide, Vector3 } from "three";

const House = () => {
  const groundFloor = useRef<Mesh>();

  const firstFloor = useRef<Mesh>();

  const houseLocation = new Vector3(0, -4, -4);

  useEffect(() => {
    if (groundFloor.current) {
      groundFloor.current.rotateX(Math.PI / 2);
      groundFloor.current.position.y = 0;
      groundFloor.current.position.z = -5;
    }
  }, []);

  useEffect(() => {
    if (firstFloor.current) {
      firstFloor.current.rotateX(Math.PI / 2);
      firstFloor.current.position.y = 2.4;
      firstFloor.current.position.z = -5;
    }
  }, []);

  return (
    <>
      <mesh ref={groundFloor}>
        <planeBufferGeometry args={[10, 5]} />
        <meshStandardMaterial color="#f8f9fa" side={DoubleSide} />
      </mesh>
      <mesh ref={firstFloor}>
        <planeBufferGeometry args={[10, 5]} />
        <meshStandardMaterial color="#f8f9fa" side={DoubleSide} />
      </mesh>
    </>
  );
};

export default House;
