"use client";

import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic",
    price: "$19/month",
    features: [
      "Real-time Analytics",
      "Up to 5 Users",
      "Basic Security",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$49/month",
    features: [
      "Advanced Analytics",
      "Up to 50 Users",
      "Advanced Security",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99/month",
    features: [
      "Custom Analytics",
      "Unlimited Users",
      "Enterprise-level Security",
      "Dedicated Support",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full px-6 md:px-12 py-24 bg-gradient-to-br from-[#0f0f0f] via-[#0b0b0b] to-black text-white relative">
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text"
        >
          Choose Your Plan
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`bg-white/5 backdrop-blur-sm border ${plan.popular ? 'border-pink-500/30' : 'border-white/10'} rounded-2xl p-8 flex flex-col items-center gap-6 shadow-lg hover:shadow-pink-500/20 transition hover:-translate-y-1`}
            >
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="text-xl font-bold text-pink-500">{plan.price}</p>

              <ul className="text-zinc-400 text-sm list-disc pl-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <motion.button
                
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer mt-4 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl shadow-xl hover:shadow-pink-500/30 transition"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
