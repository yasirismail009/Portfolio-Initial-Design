import React from "react";

const tools = [
  { name: "React.js", percent: 98, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="10" ry="4" stroke="#222" strokeWidth="2"/><ellipse cx="16" cy="16" rx="4" ry="10" stroke="#222" strokeWidth="2"/><circle cx="16" cy="16" r="2.5" fill="#222"/></svg>
  ) },
  { name: "Next.js", percent: 95, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#fff"/><text x="8" y="22" fontSize="12" fill="#222">Next</text></svg>
  ) },
  { name: "Redux", percent: 92, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#764ABC"/><text x="7" y="22" fontSize="12" fill="#fff">Redux</text></svg>
  ) },
  { name: "TypeScript", percent: 90, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#3178C6"/><text x="4" y="22" fontSize="12" fill="#fff">TS</text></svg>
  ) },
  { name: "JavaScript", percent: 95, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#F7DF1E"/><text x="4" y="22" fontSize="12" fill="#222">JS</text></svg>
  ) },
  { name: "Tailwind CSS", percent: 92, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#38BDF8"/><text x="2" y="22" fontSize="10" fill="#fff">TW</text></svg>
  ) },
  { name: "Sass", percent: 85, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#CD6799"/><text x="6" y="22" fontSize="12" fill="#fff">Sass</text></svg>
  ) },
  { name: "Gatsby", percent: 80, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#663399"/><text x="2" y="22" fontSize="12" fill="#fff">Gatsby</text></svg>
  ) },
  { name: "Node.js", percent: 80, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#68A063"/><text x="2" y="22" fontSize="12" fill="#fff">Node</text></svg>
  ) },
  { name: "Nest.js", percent: 75, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#E0234E"/><text x="2" y="22" fontSize="12" fill="#fff">Nest</text></svg>
  ) },
  { name: "Django", percent: 70, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#092E20"/><text x="2" y="22" fontSize="12" fill="#fff">Django</text></svg>
  ) },
  { name: "Jest", percent: 85, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#C21325"/><text x="6" y="22" fontSize="12" fill="#fff">Jest</text></svg>
  ) },
  { name: "Git", percent: 95, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#F05032"/><text x="8" y="22" fontSize="12" fill="#fff">Git</text></svg>
  ) },
  { name: "Docker", percent: 80, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#2496ED"/><text x="2" y="22" fontSize="12" fill="#fff">Docker</text></svg>
  ) },
  { name: "Figma", percent: 90, icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#F24E1E"/><text x="4" y="22" fontSize="12" fill="#fff">Figma</text></svg>
  ) },
];

export default function Tools() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <div className="max-w-6xl w-full px-4">
        <span className="block text-sm font-medium mb-2 text-[var(--secondary)]">My Favorite Tools</span>
        <h2 className="text-3xl font-bold mb-8 text-center">Exploring the Tools <span className="text-[var(--secondary)] italic">Behind My Designs</span></h2>
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[var(--muted)] flex items-center justify-center mb-2 text-2xl font-bold text-[var(--primary)]">
                {tool.icon}
              </div>
              <span className="text-sm font-medium mt-1">{tool.name}</span>
              <span className="text-xs text-gray-500">{tool.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 