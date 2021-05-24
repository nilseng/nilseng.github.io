import React, { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getPixelRatio } from "../common/utils";

const drawShootingStar = (
  context: CanvasRenderingContext2D,
  star: ShootingStar
) => {
  context.moveTo(star.x1, star.y1);
  context.lineTo(star.x2, star.y2);
  context.stroke();
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
  const { width, height } = useWindowDimensions();

  const [stars, setStars] = useState<[number, number, number][]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas) {
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
        context.strokeStyle = "#ffffff";
        context.fillStyle = "#ffffff";

        let requestId: number,
          i = 0;

        let shootingStar: ShootingStar;

        const render = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          i += 0.01;
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
          if (requestId % 120 === 0) {
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
              console.log(shootingStar);
              shootingStar = {
                x1: shootingStar.x1 + shootingStar.direction.x,
                y1: shootingStar.y1 + shootingStar.direction.y,
                x2: shootingStar.x2 + 2 * shootingStar.direction.x,
                y2: shootingStar.y2 + 2 * shootingStar.direction.y,
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
