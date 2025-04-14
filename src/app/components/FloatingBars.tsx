"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingBars() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
        key={i}
        className="absolute w-0.5 h-40 bg-gradient-to-b from-blue-500/30 to-transparent rounded-md blur-sm drop-shadow-md"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{
          y: -60,
          opacity: 0.8,
          scale: 0.8,
        }}
        animate={{
          y: 80,
          opacity: [0.5, 0.6, 0.8],
          scale: [0.8, 1, 0.9],
        }}
        transition={{
          duration: 6 + Math.random() * 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
      
      ))}
    </div>
  );
}
