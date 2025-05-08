import React from "react";

export default function Blog() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <div className="max-w-5xl w-full px-4">
        <span className="block text-sm font-medium mb-2 text-[var(--secondary)]">News & Blogs</span>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Latest <span className="text-[var(--secondary)] italic">News & Blogs</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Minimalist UI Design: Benefits and Best Practices", date: "21 May 2024", tag: "App UI/UX Design" },
            { title: "Improving User Experience: Best Practices for Web Design", date: "20 May 2024", tag: "Website UI/UX Design" },
            { title: "Understanding the Color Wheel: Basics Every Designer Should Know", date: "19 May 2024", tag: "Color Theory" },
          ].map((b, i) => (
            <div key={i} className="bg-[var(--muted)] rounded-xl shadow p-6 flex flex-col items-start">
              <div className="flex gap-2 mb-2">
                <span className="bg-[var(--secondary)] text-[var(--primary)] rounded px-2 py-1 text-xs font-bold">{b.tag}</span>
                <span className="bg-white text-gray-700 rounded px-2 py-1 text-xs">{b.date}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="text-[var(--secondary)] flex items-center gap-1 font-medium hover:underline">Read More <span>→</span></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 