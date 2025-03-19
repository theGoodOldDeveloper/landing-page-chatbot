import "../styles/globals.css";
import React from "react";
import type { ReactNode } from "react";

export const metadata = {
  title: "AI Chatbot Solutions",
  description: "AI Chatbots that grow your business",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
