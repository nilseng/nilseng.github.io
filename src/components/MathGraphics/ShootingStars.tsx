import React, { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getPixelRatio } from "../common/utils";

const drawShootingStar = (
  context: CanvasRenderingContext2D,
  star: ShootingStar
) => {
  const grad = context.createLinearGradient(star.x1, star.y1, star.x2, star.y2);
  grad.addColorStop(0, "#FCAF82");
  grad.addColorStop(1, "#A7D4FF");
  context.strokeStyle = grad;
  context.moveTo(star.x1, star.y1);
  context.lineTo(star.x2, star.y2);
  context.stroke();

  context.beginPath();
  context.arc(star.x2, star.y2, 2, 0, 2 * Math.PI);
  context.fillStyle = "#A7D4FF";
  context.fill();
};

interface ShootingStar {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  direction: {
    x: number;
    y: number;
  };
}

export const ShootingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowDimensions();

  const [stars, setStars] = useState<[number, number, number][]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const bgCanvas = bgCanvasRef.current;
    const context = canvas?.getContext("2d");
    const bgContext = bgCanvas?.getContext("2d");

    if (canvas && bgCanvas) {
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

      bgCanvas.width = +canvasWidth * ratio;
      bgCanvas.height = +canvasHeight * ratio;
      bgCanvas.style.width = `${width}px`;
      bgCanvas.style.height = `${height}px`;

      if (bgContext) {
        const grd = bgContext.createLinearGradient(0, bgCanvas.height, 0, 0);
        grd.addColorStop(0, "rgba(88,88,124,0.5)");
        grd.addColorStop(1, "rgba(0,0,0,0)");

        // Fill with gradient
        bgContext.fillStyle = grd;
        bgContext.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
      }

      setStars(
        new Array(1000)
          .fill(1)
          .map((_) => [
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 2 * Math.PI,
          ])
      );
    }
  }, [setStars, height, width]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      if (context) {
        context.fillStyle = "#ffffff";

        let requestId: number,
          i = 0;

        let shootingStar: ShootingStar;

        const render = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          i += 0.01;

          // Rendering stars
          stars.forEach((star) => {
            context.beginPath();
            context.arc(
              star[0],
              star[1],
              0.2 * (star[2] * Math.abs(Math.cos(i + star[2]))),
              0,
              2 * Math.PI
            );
            context.fill();
          });

          // Rendering shooting stars

          if (requestId % 60 === 0) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const direction = {
              x: 2 * Math.random() - 1,
              y: 2 * Math.random() - 1,
            };
            shootingStar = {
              x1: x,
              y1: y,
              x2: x,
              y2: y,
              direction: direction,
            };
          } else {
            if (shootingStar) {
              shootingStar = {
                x1: shootingStar.x1 + shootingStar.direction.x,
                y1: shootingStar.y1 + shootingStar.direction.y,
                x2: shootingStar.x2 + 4 * shootingStar.direction.x,
                y2: shootingStar.y2 + 4 * shootingStar.direction.y,
                direction: shootingStar.direction,
              };
              drawShootingStar(context, shootingStar);
            }
          }

          requestId = requestAnimationFrame(render);
        };

        render();

        return () => {
          cancelAnimationFrame(requestId);
        };
      }
    }
  }, [stars, height, width]);

  return (
    <>
      <canvas
        ref={bgCanvasRef}
        className="fixed-top"
        id="bgCanvas"
        style={{ zIndex: -2 }}
        width={width}
        height={height}
      ></canvas>
      <canvas
        ref={canvasRef}
        id="myCanvas"
        className="fixed-top"
        style={{ zIndex: -1 }}
        width={width}
        height={height}
      ></canvas>
    </>
  );
};
