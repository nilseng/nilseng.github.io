import React, { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getPixelRatio } from "../../utils/canvasResolution";

import "../Birthday/Birthday.scss";

export const RandomWeb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowDimensions();

  const [isLolVisible, setIsLolVisible] = useState(false);

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
  }, [height, width]);

  useEffect(() => {
    setTimeout(() => setIsLolVisible(true), 2000);
  }, []);

  return (
    <>
      <div
        className="fixed-top vw-100 vh-100 d-flex align-items-center justify-content-center"
        style={{ zIndex: -1 }}
      >
        <h1
          className="spin-2s delay-2s"
          style={{
            color: "red",
            visibility: isLolVisible ? "visible" : "hidden",
          }}
        >
          lol
        </h1>
      </div>
      <canvas
        ref={canvasRef}
        id="myCanvas"
        className="fixed-top"
        style={{ zIndex: -2 }}
        width={width}
        height={height}
      ></canvas>
    </>
  );
};
