"use client";
import React from "react";

export default function Cards({ dict }: { dict: any }) {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          {dict.cards_title}
        </h2>
        <ul className="space-y-4 text-left max-w-xl mx-auto">
          {dict.cards_points.map((item: string, idx: number) => (
            <li key={idx} className="text-gray-600">
              - {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
