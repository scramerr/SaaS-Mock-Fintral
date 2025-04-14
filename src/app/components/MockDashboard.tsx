// components/MockDashboard.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, CreditCard } from "lucide-react";

export default function MockDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-md rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 shadow-xl relative overflow-hidden"
    >
      {/* Accent Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 blur-2xl opacity-50 pointer-events-none z-0" />

      {/* Balance */}
      <div className="relative z-10 mb-6">
        <p className="text-sm text-white/60">Current Balance</p>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-white tracking-tight"
        >
          $12,480.50
        </motion.h2>
      </div>

      {/* Recent Transactions */}
      <div className="relative z-10 space-y-4">
        <TransactionItem
          name="Spotify"
          amount="-12.99"
          icon={<ArrowDownRight className="text-red-500" />}
        />
        <TransactionItem
          name="Stripe Payout"
          amount="+240.00"
          icon={<ArrowUpRight className="text-green-500" />}
        />
        <TransactionItem
          name="Visa Card"
          amount="-105.43"
          icon={<CreditCard className="text-yellow-400" />}
        />
      </div>
    </motion.div>
  );
}

type TransactionItemProps = {
  name: string;
  amount: string;
  icon: React.ReactNode;
};

function TransactionItem({ name, amount, icon }: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between text-white/90">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <span className="text-sm">{name}</span>
      </div>
      <span
        className={`text-sm font-medium ${
          amount.startsWith("+") ? "text-green-400" : "text-red-400"
        }`}
      >
        {amount}
      </span>
    </div>
  );
}
