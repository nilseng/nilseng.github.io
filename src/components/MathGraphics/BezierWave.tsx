import React, { useEffect, useRef } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { setCanvasStyleRatio } from "../../utils/canvasResolution";

export const BezierWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const canvas = canvasRef.current;
    const bgCanvas = bgCanvasRef.current;
    const context = canvas?.getContext("2d");
    const bgContext = bgCanvas?.getContext("2d");

    if (canvas && bgCanvas) {
      setCanvasStyleRatio(canvas, context, width, height);
      setCanvasStyleRatio(bgCanvas, bgContext, width, height);

      if (bgContext) {
        const grd = bgContext.createLinearGradient(
          0,
          bgCanvas.height,
          bgCanvas.width / 8,
          0
        );
        grd.addColorStop(0, "#444466");
        grd.addColorStop(1, "#212529");

        // Fill with gradient
        bgContext.fillStyle = grd;
        bgContext.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
      }
    }
  }, [height, width]);

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#0092bc" fill="transparent">
          <animate
            attributeName="d"
            values={`M 0 ${height / 2} 
            Q ${width / 4} 0, ${width / 2} ${height / 2} 
            T ${width} ${height / 2};
            M 0 ${height / 2} 
            Q ${width / 4} ${height}, ${width / 2} ${height / 2} 
            T ${width} ${height / 2};
            M 0 ${height / 2} 
            Q ${width / 4} 0, ${width / 2} ${height / 2} 
            T ${width} ${height / 2}`}
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <path stroke="#4444bc" fill="transparent">
          <animate
            attributeName="d"
            values={`
            M 0 ${height / 2} 
            Q ${width / 4} ${height}, ${width / 2} ${height / 2} 
            T ${width} ${height / 2};
            M 0 ${height / 2} 
            Q ${width / 4} 0, ${width / 2} ${height / 2} 
            T ${width} ${height / 2};
            M 0 ${height / 2} 
            Q ${width / 4} ${height}, ${width / 2} ${height / 2} 
            T ${width} ${height / 2}`}
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <path stroke="#2222bc" fill="transparent">
          <animate
            attributeName="d"
            values={`
            M 0 ${height / 2} 
            Q ${width / 8} 0, ${width / 2} ${height / 2} 
            T ${width} ${height / 2};
            M 0 ${height / 2} 
            Q ${(3 * width) / 8} 0, ${width / 2} ${height / 2} 
            T ${width} ${height / 2};
            M 0 ${height / 2} 
            Q ${width / 8} 0, ${width / 2} ${height / 2} 
            T ${width} ${height / 2}`}
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <path stroke="#444466" fill="transparent">
          <animate
            attributeName="d"
            values={`
            M 0 ${height / 2} 
            Q ${width / 8} ${height}, ${width / 2} ${height / 2} 
            T ${width} ${height / 2};
            M 0 ${height / 2} 
            Q ${(3 * width) / 8} ${height}, ${width / 2} ${height / 2} 
            T ${width} ${height / 2};
            M 0 ${height / 2} 
            Q ${width / 8} ${height}, ${width / 2} ${height / 2} 
            T ${width} ${height / 2}`}
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
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
