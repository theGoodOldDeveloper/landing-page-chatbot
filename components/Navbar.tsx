"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ lang }: { lang: string }) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between items-center p-4 shadow-md"
    >
      <h1 className="text-lg font-bold">AI Chatbot Solutions</h1>
      <div className="flex items-center space-x-4">
        {/* <a
          href={`/${lang}`}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Hire me
        </a> */}
        <div className="flex space-x-2">
          {["EN", "HU", "FR", "DE"].map((l) => (
            <a key={l} href={`/${l.toLowerCase()}`} className="relative group">
              {l}
              {l !== "EN" && (
                <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100">
                  Coming soon 😊
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
