"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ChatbotBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="w-80 h-96 bg-white shadow-lg rounded-lg p-4 border border-gray-300"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">AI Chatbot</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
          <iframe
            src={process.env.NEXT_PUBLIC_FLOWISE_URL}
            className="w-full h-80 border-none"
            title="Chatbot"
          />
        </motion.div>
      )}
      {/* <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
      >
        💬
      </motion.button> */}
    </div>
  );
}
