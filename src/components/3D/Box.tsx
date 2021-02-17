import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { Mesh } from "three";

interface IProps {
  [key: string]: any;
}

const Box = (props: IProps) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const [scale] = useState(Math.random());

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={
        active ? [scale * 1.5, scale * 1.5, scale * 1.5] : [scale, scale, scale]
      }
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? props.color : props.hoverColor} />
    </mesh>
  );
};

export default Box;
