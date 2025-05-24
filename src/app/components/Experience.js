import React from "react";

const experiences = [
  {
    company: "Lmntrix",
    role: "Senior Frontend Engineer",
    years: "Jan 2023 - Present",
    description: "Led team of 5 engineers, improved system performance by 30%, reduced page load times by 40%",
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#F5F5F5"/><text x="5" y="28" fontSize="16" fill="#bbb">Lmntrix</text></svg>
    ),
  },
  {
    company: "Pligence",
    role: "Frontend Developer",
    years: "Feb 2021 - Dec 2022",
    description: "Improved app performance by 20%, reduced API response times by 15%",
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#F5F5F5"/><text x="5" y="28" fontSize="16" fill="#bbb">Pligence</text></svg>
    ),
  },
  {
    company: "Generate Intel Org",
    role: "Frontend Developer",
    years: "Dec 2020 - Feb 2021",
    description: "Developed Threat Intelligence Platform, improved SEO and accessibility compliance",
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#F5F5F5"/><text x="5" y="28" fontSize="16" fill="#bbb">Generate</text></svg>
    ),
  },
  {
    company: "Oric Business",
    role: "Frontend Developer",
    years: "May 2019 - Nov 2020",
    description: "Built dynamic components, improved customer engagement by 20%",
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#F5F5F5"/><text x="5" y="28" fontSize="16" fill="#bbb">Oric</text></svg>
    ),
  },
];

export default function Experience() {
  return (
    <section className="w-full py-16 my-8 bg-[#f7f7f7] flex flex-col gap-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-4">
        {/* Left Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-center min-h-[260px]">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            Professional<br />Experience
          </h2>
          <p className="text-gray-600 mb-6">
            Senior Frontend Engineer with 5+ years of experience in React.js, Next.js, and modern web technologies.
          </p>
          <button className="mt-2 px-6 py-3 rounded-full bg-black text-white font-semibold shadow hover:bg-gray-800 transition text-base w-fit">
            View Resume
          </button>
        </div>
        
        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-center min-h-[160px]">
            <div className="flex items-center gap-4 mb-4">
              {exp.logo}
              <span className="text-lg font-semibold text-gray-500">{exp.company}</span>
            </div>
            <div className="text-xl font-medium text-black mb-2">{exp.role}</div>
            <div className="text-sm text-gray-400 mb-2">{exp.years}</div>
            <div className="text-sm text-gray-600">{exp.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 