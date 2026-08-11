"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
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

    const gridSize = 50; // Grid spacing
    let gridOffset = 0;

    // Glowing Nodes / Dots Particles
    const particleCount = 65;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.3,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      color: "255, 255, 255",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep Dark Ambient Gradient Base
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, "#080808");
      bgGrad.addColorStop(0.5, "#0d0d0d");
      bgGrad.addColorStop(1, "#060606");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Animated Moving Grid Lines
      gridOffset = (gridOffset + 0.35) % gridSize;

      ctx.lineWidth = 1;

      // Primary Vertical Grid Lines
      for (let x = gridOffset; x < width; x += gridSize) {
        const isMajor = Math.floor((x - gridOffset) / gridSize) % 4 === 0;
        ctx.strokeStyle = isMajor
          ? "rgba(255, 255, 255, 0.12)"
          : "rgba(255, 255, 255, 0.05)";
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Primary Horizontal Grid Lines
      for (let y = gridOffset; y < height; y += gridSize) {
        const isMajor = Math.floor((y - gridOffset) / gridSize) % 4 === 0;
        ctx.strokeStyle = isMajor
          ? "rgba(255, 255, 255, 0.12)"
          : "rgba(255, 255, 255, 0.05)";
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Glowing Crosshair Intersections
      for (let x = gridOffset; x < width; x += gridSize * 2) {
        for (let y = gridOffset; y < height; y += gridSize * 2) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 3. Connect Nearby Particles with Constellation Rays
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.2;
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 4. Draw Floating Glowing Dots
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.008;
        const currentAlpha = Math.max(0.15, Math.min(0.7, p.alpha));

        // Core Dot
        ctx.fillStyle = `rgba(${p.color}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Glowing Outer Halo
        ctx.fillStyle = `rgba(${p.color}, ${currentAlpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
