"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero({ dict }: { dict: any }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center py-20 bg-gray-100 px-4"
    >
      <h1 className="text-4xl font-bold mb-4">{dict.hero_title}</h1>
      <p className="text-lg mb-6">{dict.hero_subtitle}</p>
      {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
        {dict.hero_button}
      </button> */}
    </motion.section>
  );
}
