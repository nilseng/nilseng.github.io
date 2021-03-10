import { throttle } from "lodash-es";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addTail,
  Canvas,
  extend,
  ReactThreeFiber,
  useFrame,
  useThree,
} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Boxes from "./Boxes";

import Spheres from "./Spheres";

const sceneContentMap: { [key: string]: JSX.Element } = {
  spheres: <Spheres />,
  boxes: <Boxes />,
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

extend({ OrbitControls });

interface ISceneContentProps {
  setFps: any;
  sceneContent: JSX.Element;
}

const SceneControls = ({ setFps, sceneContent }: ISceneContentProps) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  let last = Date.now();
  const fn: any = useMemo(() => throttle((fps) => setFps(fps.toFixed(0)), 60), [
    setFps,
  ]);

  useFrame(() => {
    let now = Date.now();
    fn(1 / ((now - last) / 1000));
    last = now;
  });
  useEffect(() => addTail(() => fn(0)), [fn]);

  return (
    <>
      <orbitControls args={[camera, domElement]} />
      <ambientLight />
      <pointLight position={[5, 5, 10]} />
      {sceneContent}
    </>
  );
};

const Scene = () => {
  const [sceneContent, setSceneContent] = useState<JSX.Element>();

  const useQuery = () => {
    return new URLSearchParams(useLocation()?.search);
  };

  const query = useQuery();

  useEffect(() => {
    if (query) {
      const scene = query.get("scene");
      if (scene) setSceneContent(sceneContentMap[scene]);
    }

    return () => setSceneContent(undefined);
  }, [query]);

  const [fps, setFps] = useState();

  return (
    <>
      <div
        className="bg-light position-absolute rounded m-2 p-2"
        style={{ width: "80px" }}
      >
        FPS: {fps}
      </div>
      <Canvas
        style={{
          width: "100%",
          height: "calc(100vh - 60px)",
        }}
      >
        {sceneContent && (
          <SceneControls setFps={setFps} sceneContent={sceneContent} />
        )}
      </Canvas>
    </>
  );
};

export default Scene;
