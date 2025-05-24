import React from "react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="w-full bg-[#F7F8FA] py-4 flex justify-center items-center">
      <nav className="w-full  flex items-center justify-between px-8 py-3 bg-white rounded-2xl shadow-lg" style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.06)' }}>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-3 font-bold text-xl tracking-wide">
            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white text-black font-bold text-lg">C</span>
            <span className="text-gray-400 font-bold tracking-wide text-lg">COZYDIADORA</span>
          </span>
        </div>
        <Link href="#" className="px-7 py-2 rounded-full bg-black text-white font-semibold shadow-lg hover:bg-gray-800 transition text-base" style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}>
          Book a call
        </Link>
      </nav>
    </div>
  );
} 