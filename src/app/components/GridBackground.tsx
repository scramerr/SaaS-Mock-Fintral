"use client";
import { motion } from "framer-motion";

function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Radial mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(100,0,255,0.1),_transparent_60%)]" />

      {/* Subtle animated SVG grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#smallGrid)"
          animate={{ x: [-40, 0], y: [-40, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

export default GridBackground