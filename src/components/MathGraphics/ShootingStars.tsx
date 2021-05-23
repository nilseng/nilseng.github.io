import React, { useEffect, useRef } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getPixelRatio } from "../common/utils";

export const ShootingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      if (context) {
        const ratio = getPixelRatio(context);
        const canvasWidth = getComputedStyle(canvas)
          .getPropertyValue("width")
          .slice(0, -2);
        const canvasHeight = getComputedStyle(canvas)
          .getPropertyValue("height")
          .slice(0, -2);

        canvas.width = +canvasWidth * ratio;
        canvas.height = +canvasHeight * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        context.strokeStyle = "#ffffff";
        context.fillStyle = "#ffffff";

        let requestId: number,
          i = 0;

        const stars: [number, number, number][] = new Array(10000)
          .fill(1)
          .map((_) => [
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 2 * Math.PI,
          ]);

        const render = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          i += 0.05;
          stars.forEach((star) => {
            context.beginPath();
            context.arc(
              star[0],
              star[1],
              0.5 * (star[2] * Math.abs(Math.cos(i + star[2]))),
              0,
              2 * Math.PI
            );
            context.fill();
          });
          requestId = requestAnimationFrame(render);
        };

        render();

        return () => {
          cancelAnimationFrame(requestId);
        };
      }
    }
  });

  return (
    <canvas
      ref={canvasRef}
      id="myCanvas"
      className="fixed-top"
      style={{ zIndex: -1 }}
      width={width}
      height={height}
    ></canvas>
  );
};
