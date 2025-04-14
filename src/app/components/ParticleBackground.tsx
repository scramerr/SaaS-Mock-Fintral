"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resizeCanvas);

    const starCount = 60;
    const stars: {
      x: number;
      y: number;
      size: number;
      opacity: number;
      flicker: number;
    }[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.3,
        flicker: Math.random() * 0.02 + 0.005,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.opacity += star.flicker;
        if (star.opacity > 0.7 || star.opacity < 0.2) {
          star.flicker *= -1;
        }

        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.strokeStyle = "white";
        ctx.shadowColor = "white";
        ctx.shadowBlur = 4;

        // Draw vertical line
        ctx.beginPath();
        ctx.moveTo(star.x, star.y - star.size);
        ctx.lineTo(star.x, star.y + star.size);
        ctx.stroke();

        // Draw horizontal line
        ctx.beginPath();
        ctx.moveTo(star.x - star.size, star.y);
        ctx.lineTo(star.x + star.size, star.y);
        ctx.stroke();

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
