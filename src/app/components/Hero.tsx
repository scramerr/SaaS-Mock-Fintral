"use client";
import { motion } from "framer-motion";
import GridBackground from "./GridBackground";
import FloatingBars from "./FloatingBars";
import MockDashboard from "./MockDashboard";
import TiltedDashboard from "./TiltedDashboard";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-16 bg-gradient-to-br from-[#0f0f0f] via-[#0b0b0b] to-black text-white overflow-hidden">
      {/* Visual overlays */}
      <GridBackground />
      <FloatingBars />
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start gap-5">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x leading-tight"
          >
            Power Your Finances with <br />
            <span className="text-white drop-shadow-[0_1px_15px_rgba(255,255,255,0.1)]">
              Fintral ⚡
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-lg sm:max-w-xl"
          >
            The ultimate SaaS platform to manage, track, and grow your payments—all in one stunning interface.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button className="mt-4 w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl shadow-xl hover:shadow-pink-500/30 transition hover:scale-105 text-sm sm:text-base">
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Mock UI */}
        <div className="flex-1 w-full max-w-md sm:max-w-lg md:max-w-none">
          <TiltedDashboard />
        </div>
      </div>
    </section>
  );
}
