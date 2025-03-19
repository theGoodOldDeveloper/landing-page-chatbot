"use client";
import React from "react";

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="text-center p-4 bg-gray-200">
      <p>{dict.footer_text}</p>
    </footer>
  );
}
