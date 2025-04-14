"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-br from-[#0d0d0d] via-black to-[#0a0a0a] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Ready to supercharge your payments?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          Fintral helps you automate, manage, and elevate your finance flow—all in a gorgeous, blazing-fast interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="space-x-4"
        >
          <button className=" cursor-pointer px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all">
            Get Started Now
          </button>
          <button className=" cursor-pointer px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl shadow-md hover:bg-white/10 hover:border-white/60 transition-all">
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
