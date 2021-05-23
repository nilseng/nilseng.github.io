import React, { useEffect, useRef } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getPixelRatio } from "../common/utils";

export const RandomWeb = () => {
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

        let requestId: number;
        context.strokeStyle = "#ffffff";

        const render = () => {
          context.beginPath();

          context.moveTo(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
          context.lineTo(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
          context.stroke();
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
