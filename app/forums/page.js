"use client";

import Link from "next/link";
import { Search, MessageCircle, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

function Card({ children, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl overflow-hidden transition-all ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}

function Button({ children, href, className }) {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full shadow hover:shadow-md hover:scale-105 transition-all";
  if (href) {
    return <Link href={href} className={`${baseClasses} ${className || ""}`}>{children}</Link>;
  }
  return <button className={`${baseClasses} ${className || ""}`}>{children}</button>;
}

export default function ForumsPage() {
  const categories = [
    { title: "General Chat", desc: "Talk about anything with the community.", img: "https://images.unsplash.com/photo-1629131530694-c2b44f0cd901?w=600&h=300&fit=crop" },
    { title: "Feature Requests", desc: "Suggest new features for MyApp.", img: "https://plus.unsplash.com/premium_photo-1721697080473-8281f165fbfb?w=600&h=300&fit=crop" },
    { title: "Bug Reports", desc: "Report issues and help us improve.", img: "https://plus.unsplash.com/premium_photo-1684761949512-fab7ef8a3b3c?w=600&h=300&fit=crop" },
    { title: "Tips & Tricks", desc: "Share your best productivity hacks.", img: "https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=600&h=300&fit=crop" },
  ];

  const trendingTopics = [
    "Best MyApp customization hacks",
    "Dark mode improvements",
    "New emoji pack suggestions",
    "Performance tips for large groups",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm mb-6 animate-pulse">
          MyApp Forums
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Join discussions, share your thoughts, and collaborate with the community.
        </p>
        <div className="flex justify-center">
          <div className="flex items-center gap-3 bg-white shadow-lg rounded-full px-6 py-3 w-full max-w-lg border border-gray-100 focus-within:ring-2 focus-within:ring-purple-300">
            <Search className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search topics..."
              className="flex-1 outline-none text-base bg-transparent"
            />
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {categories.map((cat, i) => (
          <Card key={i}>
            <Image src={cat.img} alt={cat.title} width={600} height={300} className="w-full h-32 object-cover" />
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-gray-800">{cat.title}</h2>
              <p className="text-gray-600 text-sm">{cat.desc}</p>
              <Button href={`/forum/${cat.title.toLowerCase().replace(/\s+/g, "-")}`} className="mt-2">
                <MessageCircle className="mr-2 h-4 w-4" /> Join Discussion
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Trending Topics */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto border border-gray-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="text-indigo-500" />
          <h2 className="text-2xl font-bold text-gray-800">Trending Topics</h2>
        </div>
        <ul className="space-y-4">
          {trendingTopics.map((title, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 5 }}
              className="flex items-center justify-between text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-sm font-bold text-indigo-500">{i + 1}</span>
                {title}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
