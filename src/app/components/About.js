'use client';

import React from "react";

const skills = [
  { label: "React.js", x: "60%", y: "20%" },
  { label: "Next.js", x: "80%", y: "60%" },
  { label: "Redux", x: "60%", y: "85%" },
  { label: "TypeScript", x: "20%", y: "80%" },
  { label: "Tailwind CSS", x: "10%", y: "50%" },
  { label: "Performance", x: "15%", y: "20%" },
  { label: "API Integration", x: "40%", y: "10%" },
];

export default function About() {
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = "/cv.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <section className="w-full py-20 bg-[var(--primary)] flex flex-col items-center text-white">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 px-4">
        {/* Left: Image with circle and skill tags */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-full md:w-auto">
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
            <div className="absolute inset-0 rounded-full bg-[var(--secondary)]" style={{ zIndex: 1 }} />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Muhammad Yasir Ismail"
              className="absolute left-1/2 top-1/2 w-[260px] h-[320px] md:w-[320px] md:h-[400px] object-cover rounded-b-full rounded-t-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-xl"
              style={{ objectPosition: "center top" }}
            />
            {/* Skill tags */}
            {skills.map((skill, i) => (
              <span
                key={i}
                className="absolute px-3 py-1 rounded-full bg-white text-[var(--primary)] text-xs font-semibold shadow-md border border-[var(--muted)]"
                style={{ left: skill.x, top: skill.y, transform: "translate(-50%, -50%)", zIndex: 20 }}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>
        {/* Right: Text and stats */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0">
          <span className="block text-sm font-medium mb-2 text-[var(--secondary)]">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center md:text-left">
            Who is <span className="text-[var(--secondary)] italic">Muhammad Yasir Ismail?</span>
          </h2>
          <p className="mb-8 text-lg text-white/80 text-center md:text-left max-w-xl">
            Highly skilled Senior Frontend Engineer with 5+ years of hands-on experience in developing web applications using React.js, Next.js, Redux, TypeScript, and Tailwind CSS. Proven track record of improving application performance by 30%, reducing load times by 40%, and increasing productivity by 12%.
          </p>
          <div className="flex gap-10 mb-8 w-full justify-center md:justify-start">
            <div className="text-center">
              <span className="text-3xl font-bold text-[var(--secondary)]">5+</span>
              <div className="text-xs">Years Experience</div>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-[var(--secondary)]">30%</span>
              <div className="text-xs">Performance Gain</div>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-[var(--secondary)]">40%</span>
              <div className="text-xs">Faster Load</div>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-[var(--secondary)]">12%</span>
              <div className="text-xs">Productivity</div>
            </div>
          </div>
          <div className="flex items-center gap-6 mb-4">
            <button 
              onClick={() => handleDownloadCV()}
              className="px-7 py-3 rounded-full bg-[var(--secondary)] text-[var(--primary)] font-semibold flex items-center gap-2 hover:bg-[var(--accent)] transition text-base shadow"
            >
              Download CV
              <span className="inline-block bg-white rounded-full p-1 ml-1">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </button>
            <span className="font-signature text-2xl text-[var(--secondary)] italic">Muhammad Yasir Ismail</span>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/muhammad-yasir-5143b3164/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--secondary)] hover:text-white">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#f5a623"/><path d="M8.5 10.5v5m0 0v-5m0 5H7m1.5 0H10m4-5v5m0 0v-2.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5V15m3-4.5h1.5m-1.5 0V15" stroke="#314733" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="https://github.com/yasirismail009" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--secondary)] hover:text-white">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#f5a623"/><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.652 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.38.202 2.399.1 2.652.64.699 1.028 1.593 1.028 2.686 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="#314733"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 