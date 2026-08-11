"use client";

import { useEffect, useRef } from "react";

export default function FilmGrain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const generateGrain = () => {
      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise;     // red
        data[i + 1] = noise; // green
        data[i + 2] = noise; // blue
        data[i + 3] = 12;    // very faint opacity (~4.7%)
      }

      ctx.putImageData(imgData, 0, 0);
      animationFrameId = requestAnimationFrame(generateGrain);
    };

    generateGrain();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="film-grain"
      aria-hidden="true"
    />
  );
}
