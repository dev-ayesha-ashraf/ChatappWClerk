"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ShieldCheck, Zap } from "lucide-react";
import PricingSection from "./components/PricingSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center text-center md:text-left p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Chat Smarter, <span className="text-indigo-600">Connect Faster</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-lg">
            MyApp makes conversations seamless, fun, and lightning fast. Join millions of people
            already using MyApp to stay in touch with friends, family, and teams.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-2xl bg-white border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1677252438425-e4125f74fbbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNoYXR8ZW58MHx8MHx8fDA%3D"
            alt="Chat illustration"
            className="w-96"
          />
        </motion.div>
      </section>
      <section id="features" className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Why Choose MyApp?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Zap className="w-10 h-10 text-indigo-600" />,
              title: "Lightning Fast",
              desc: "Experience real-time chat with zero lag and instant message delivery."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
              title: "Secure & Private",
              desc: "End-to-end encryption keeps your conversations safe and private."
            },
            {
              icon: <MessageSquare className="w-10 h-10 text-indigo-600" />,
              title: "Media Friendly",
              desc: "Share images, videos, and files with just one click."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <PricingSection />

      {/* Footer */}
      <footer className="text-center py-6 text-white text-sm bg-gray-900">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
}

// export const metadata={
//   title: 'HOME - My app',
//   description: 'My app helps you connect with pepple of your choice',
// }
