import React from "react";

const icons = [
  // Simple SVG placeholders for each service
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary)]"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
  ),
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary)]"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 12h8" /></svg>
  ),
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary)]"><rect x="2" y="6" width="20" height="12" rx="4" /><path d="M8 12h8" /></svg>
  ),
];

export default function Services() {
  const services = [
    { title: "UI/UX Design", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..." },
    { title: "Application Design", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..." },
    { title: "Website Design", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..." },
  ];
  return (
    <section className="w-full py-16 bg-[var(--background)] flex flex-col items-center">
      <div className="max-w-5xl w-full px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-[var(--secondary)]">Services</span> I Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[var(--secondary)] flex items-center justify-center mb-4">
                {icons[i]}
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
              <button className="mt-4 text-[var(--secondary)] flex items-center gap-1 font-medium hover:underline">Learn more <span>→</span></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 