"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      monthly: 0,
      yearly: 0,
      features: ["Unlimited chats", "Basic support", "Public room access"],
      popular: false,
    },
    {
      name: "Pro",
      monthly: 9,
      yearly: 90,
      features: ["Unlimited chats", "Priority support", "Private rooms", "Custom emojis"],
      popular: true,
    },
    {
      name: "Enterprise",
      monthly: 29,
      yearly: 290,
      features: ["Everything in Pro", "Dedicated manager", "Custom SLA & compliance"],
      popular: false,
    },
  ];

  return (
    <section className="relative px-8 py-24 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-300 via-purple-200 to-transparent" />

      <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-4 relative z-10">
        Flexible Pricing for Everyone
      </h3>
      <p className="text-gray-600 text-center mb-12 relative z-10">
        Choose a plan that grows with you — no hidden fees.
      </p>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-14 relative z-10">
        <div className="bg-white shadow-md rounded-full px-3 py-1 flex items-center gap-2 border border-gray-200">
          <span className={`text-sm ${!yearly ? "text-indigo-600 font-semibold" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            className="w-12 h-6 bg-gray-200 rounded-full relative transition"
            onClick={() => setYearly(!yearly)}
          >
            <motion.span
              layout
              className="absolute top-0.5 left-0.5 w-5 h-5 bg-white shadow rounded-full"
              animate={{ x: yearly ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </button>
          <span className={`text-sm ${yearly ? "text-indigo-600 font-semibold" : "text-gray-500"}`}>
            Yearly <span className="ml-1 text-green-600 font-medium">(Save 20%)</span>
          </span>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {plans.map((plan, i) => {
          const price = yearly ? plan.yearly : plan.monthly;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
              className={`relative backdrop-blur-xl bg-white/60 border rounded-2xl p-8 shadow-md transition-all ${
                plan.popular ? "border-indigo-400 ring-2 ring-indigo-200 scale-105" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                  MOST POPULAR
                </span>
              )}
              <h4 className="text-xl font-bold text-gray-900 text-center mb-2">{plan.name}</h4>
              <p className="text-center mb-6">
                <span className="text-5xl font-extrabold text-indigo-600">
                  {price === 0 ? "Free" : `$${price}`}
                </span>
                {price > 0 && (
                  <span className="text-gray-500 text-sm block mt-1">
                    per {yearly ? "year" : "month"}
                  </span>
                )}
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold transition shadow-md ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
