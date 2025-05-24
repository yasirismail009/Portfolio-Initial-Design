import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white rounded-t-3xl shadow flex flex-col md:flex-row items-center justify-between px-6 py-4 mt-8">
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-bold text-xl">C</span>
        <span className="font-bold text-gray-700 tracking-wide">COZYDIADORA</span>
      </div>
      <div className="text-gray-400 text-sm my-2 md:my-0">©2024</div>
      <button className="rounded-full bg-gray-400 text-white px-6 py-2 font-medium shadow hover:bg-gray-700 transition text-base">Book a call</button>
    </footer>
  );
} 