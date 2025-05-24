import React from "react";

const socials = [
  { label: "FOLLOW ME!", className: "" },
  { label: "INSTAGRAM", className: "rotate-[-15deg]" },
  { label: "DRIBBBLE", className: "" },
  { label: "BEHANCE", className: "" },
  { label: "LINKEDIN", className: "" },
  { label: "👀", className: "ml-2" },
  { label: "🥳", className: "ml-2" },
];

export default function Connect() {
  return (
    <section className="w-full py-10 flex flex-col items-center bg-[#f7f7f7]">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl">
        {/* Left Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-center min-h-[320px]">
          <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">Let's<br />connect<br />and chat</h2>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-lg font-semibold text-gray-600 tracking-wide">HELLO@COZY.COM</span>
            <button className="rounded-full bg-gray-400 text-white p-2 shadow hover:bg-gray-700 transition">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        {/* Right Card */}
        <div className="bg-[#6ec1c8] rounded-3xl shadow-xl p-10 flex flex-wrap items-center justify-center min-h-[320px] relative overflow-hidden">
          <div className="flex flex-wrap gap-4 justify-center items-center w-full">
            {socials.map((s, i) => (
              <span
                key={i}
                className={`px-7 py-2 bg-white/80 text-[#3a3a3a] rounded-full text-lg font-semibold shadow-md border border-white whitespace-nowrap ${s.className}`}
                style={{ transform: s.className.includes('rotate') ? s.className : undefined }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 