import React, { useEffect, useRef } from "react";
import * as THREE from "three";

let renderer: any,
  scene: any,
  camera: any,
  sphere: THREE.Mesh,
  v0y: number = 0;

const init = (mainEl: React.RefObject<HTMLDivElement>) => {
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight
  );
  camera.position.z = 10;

  scene = new THREE.Scene();
  scene.background = new THREE.Color("#f8f9fa");

  //Create a plane that receives shadows (but does not cast them)
  var planeGeometry = new THREE.PlaneBufferGeometry(5, 5, 32, 32);
  var planeMaterial = new THREE.MeshStandardMaterial({ color: "#f8f9fa" });
  var floor = new THREE.Mesh(planeGeometry, planeMaterial);
  floor.receiveShadow = true;
  floor.rotateX(-Math.PI / 2);
  floor.position.set(0, -2, 0);
  scene.add(floor);

  // Adding a sphere
  const sphereGeometry = new THREE.SphereBufferGeometry(0.5, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: "#faf8f9" });

  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.castShadow = true;
  sphere.position.set(-4, 4, 0);
  scene.add(sphere);

  // Adding light
  const pointLight = new THREE.PointLight(0xffffff, 2);
  pointLight.position.set(1, 1, 10);
  pointLight.castShadow = true;
  scene.add(pointLight);

  //Set up shadow properties for the light
  pointLight.shadow.mapSize.width = 5000;
  pointLight.shadow.mapSize.height = 5000;
  pointLight.shadow.camera.near = 0.5;
  pointLight.shadow.camera.far = 500;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.render(scene, camera);
  mainEl.current?.appendChild(renderer.domElement);
};

const animate = () => {
  requestAnimationFrame(animate);
  sphere.position.x += 0.05;
  sphere.position.y +=
    sphere.position.y >= -1.5 || sphere.position.x > 2.5
      ? v0y * (1 / 60) + (1 / 2) * -9.81 * Math.pow(1 / 60, 2)
      : 0;
  v0y =
    sphere.position.y >= -1.5 || sphere.position.x > 2.5
      ? v0y - 9.81 * (1 / 60)
      : 0;
  if (sphere.position.y < -4) {
    sphere.position.y = 4;
    sphere.position.x = -4;
    v0y = 0;
  }
  if (renderer) renderer.render(scene, camera);
};

const BackgroundAnimation = () => {
  const mainEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    init(mainEl);
    animate();
  });
  return (
    <>
      <div
        ref={mainEl}
        className="h-100 w-100"
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
      ></div>
    </>
  );
};

export default BackgroundAnimation;
