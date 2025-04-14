"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily Zhang",
    title: "Product Designer",
    quote: "FluxPay transformed our billing system. The UI is stunning and the automation features are game-changers!",
    avatar: "/avatars/person1.jpg"
  },
  {
    name: "Jason Lee",
    title: "Founder, Paylio",
    quote: "I’ve tried tons of payment platforms — nothing feels as smooth and polished as FluxPay. Super impressed.",
    avatar: "/avatars/person2.jpg"
  },
  {
    name: "Aria Miller",
    title: "Freelancer",
    quote: "Managing client payments has never been easier. It’s like Notion + Stripe + Vibes. Love it.",
    avatar: "/avatars/person3.jpg"
  },
];

function Testimonials() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)] z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          What Our Users Are Saying ✨
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-md text-left space-y-4 hover:shadow-purple-500/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-zinc-400">{t.title}</p>
                </div>
              </div>
              <p className="text-zinc-300 italic">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Testimonials