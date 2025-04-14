"use client";

import { motion } from "framer-motion";
import { LucideBarChart3, LucideShieldCheck, LucideZap, LucideUserCheck } from "lucide-react";

const features = [
    {
        icon: <LucideBarChart3 size={28} />,
        title: "Real-time Analytics",
        description: "Get instant insights into your payment trends and cashflow metrics.",
    },
    {
        icon: <LucideShieldCheck size={28} />,
        title: "Bank-Level Security",
        description: "Encrypted transactions with 2FA and biometric-level protection.",
    },
    {
        icon: <LucideZap size={28} />,
        title: "Fast Transfers",
        description: "Lightning-fast money transfers without hidden fees.",
    },
    {
        icon: <LucideUserCheck size={28} />,
        title: "User-Centric UI",
        description: "Designed for clarity, speed, and ease of use across any device.",
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="w-full px-6 md:px-12 py-24 bg-black text-white relative">
            {/* Optional glow background */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#1a1a1a] via-transparent to-[#0b0b0b]" />

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text"
                >
                    Why Choose Fintral?
                </motion.h2>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-start gap-4 shadow-lg hover:shadow-pink-500/20 transition hover:-translate-y-1 hover:border-pink-500/30"
                        >
                            {/* Glowing Rings */}
                            <div className="absolute top-3 left-3 w-14 h-14 z-0">
                                <div className="absolute inset-0 bg-pink-500/10 blur-2xl rounded-full animate-ping [animation-duration:3s]" />
                                <div className="absolute inset-0 bg-pink-500/5 blur-xl rounded-full animate-ping [animation-delay:0.5s] [animation-duration:4s]" />
                            </div>


                            {/* Icon */}
                            <div className="relative z-10 p-3 bg-white/10 rounded-xl text-pink-400">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-lg font-semibold text-white">{feature.title}</h3>

                            {/* Description */}
                            <p className="relative z-10 text-zinc-400 text-sm">{feature.description}</p>
                        </motion.div>

                    ))}
                </div>
            </div>
        </section>
    );
}
