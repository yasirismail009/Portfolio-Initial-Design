"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "plexaar",
    title: "Plexaar",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT.JS", "WEB DEV"],
    img: "https://placehold.co/600x400?text=Plexaar",
    description: "A modern web application built with React.js, featuring dynamic components and responsive design.",
    technologies: ["React.js", "Redux", "Tailwind CSS"],
    liveUrl: "https://plexaar.com",
    githubUrl: "https://github.com/yasirismail009/plexaar"
  },
  {
    id: "expert-ecommerce",
    title: "Expert eCommerce",
    agency: "FREELANCE",
    year: 2023,
    tags: ["NEXT.JS", "E-COMMERCE"],
    img: "https://placehold.co/600x400?text=Expert+eCommerce",
    description: "Full-featured e-commerce platform with advanced product management and payment integration.",
    technologies: ["Next.js", "TypeScript", "Stripe"],
    liveUrl: "https://expert-ecommerce.com",
    githubUrl: "https://github.com/yasirismail009/expert-ecommerce"
  },
  {
    id: "full-measure",
    title: "Full Measure",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT CMS", "DASHBOARD"],
    img: "https://placehold.co/600x400?text=Full+Measure",
    description: "Content management system with dynamic components, charts, and data visualization.",
    technologies: ["React.js", "Redux", "Material UI"],
    liveUrl: "https://fullmeasure.com",
    githubUrl: "https://github.com/yasirismail009/full-measure"
  },
  {
    id: "insaaf-care",
    title: "Insaaf Care",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT CMS", "HEALTHCARE"],
    img: "https://placehold.co/600x400?text=Insaaf+Care",
    description: "Healthcare management system with patient records and appointment scheduling.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    liveUrl: "https://insaafcare.com",
    githubUrl: "https://github.com/yasirismail009/insaaf-care"
  },
  {
    id: "studio",
    title: "Studio",
    agency: "FREELANCE",
    year: 2023,
    tags: ["DJANGO CMS", "CREATIVE"],
    img: "https://placehold.co/600x400?text=Studio",
    description: "Creative studio management platform with project tracking and client management.",
    technologies: ["Django", "Python", "PostgreSQL"],
    liveUrl: "https://studio.com",
    githubUrl: "https://github.com/yasirismail009/studio"
  },
  {
    id: "vidtao-app",
    title: "Vidtao App",
    agency: "FREELANCE",
    year: 2023,
    tags: ["NEXT.JS", "VIDEO"],
    img: "https://placehold.co/600x400?text=Vidtao+App",
    description: "Video streaming application with real-time features and content management.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    liveUrl: "https://vidtao.com",
    githubUrl: "https://github.com/yasirismail009/vidtao-app"
  },
  {
    id: "quran-app",
    title: "Quran App",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT.JS", "MOBILE"],
    img: "https://placehold.co/600x400?text=Quran+App",
    description: "Islamic application for Quran reading and learning with audio features.",
    technologies: ["React.js", "Redux", "Tailwind CSS"],
    liveUrl: "https://quran-app.com",
    githubUrl: "https://github.com/yasirismail009/quran-app"
  },
  {
    id: "privacy-defender",
    title: "Privacy Defender",
    agency: "FREELANCE",
    year: 2023,
    tags: ["NEXT.JS", "SECURITY"],
    img: "https://placehold.co/600x400?text=Privacy+Defender",
    description: "Privacy protection platform with advanced security features and monitoring tools.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://privacydefender.com",
    githubUrl: "https://github.com/yasirismail009/privacy-defender"
  }
];


export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.tags.includes(selectedCategory));

  return (
    <section className="w-full my-16 mx-auto mt-16 px-4 flex flex-col md:flex-row gap-8 items-start">
      {/* Sidebar */}
      <aside className="md:mr-12 min-w-[260px] flex flex-col items-start pt-4 sticky top-8 self-start z-10">
        <h2 className="text-5xl font-bold text-black mb-8 leading-tight">Selected<br />work</h2>
        <button className="bg-black text-white rounded-full px-6 py-2 shadow-md mb-4 text-lg font-medium hover:bg-[var(--secondary)] transition-all">See All</button>
      </aside>

      {/* Projects Section (Scrollable) */}
      <div className="flex-1 max-h-[calc(100vh-0rem)] overflow-y-auto pr-2 hide-scrollbar">
        {/* Main Featured Card */}
        {filteredProjects.length > 0 && (
          <div className="mb-10">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[420px] relative transition-all duration-300">
              <div className="w-full md:w-2/3 h-72 md:h-auto overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                <Image
                  src={filteredProjects[0].img}
                  alt={filteredProjects[0].title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-sm text-gray-500 mb-2 font-semibold">{filteredProjects[0].agency}</div>
                <h3 className="font-bold text-2xl mb-2 text-[var(--primary)]">{filteredProjects[0].title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{filteredProjects[0].description}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {filteredProjects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-[var(--primary)] rounded-full px-4 py-1 text-xs font-semibold shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <div className="flex gap-3">
                    {filteredProjects[0].liveUrl && (
                      <a
                        href={filteredProjects[0].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--secondary)] font-medium hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {filteredProjects[0].githubUrl && (
                      <a
                        href={filteredProjects[0].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--secondary)] font-medium hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm font-semibold">{filteredProjects[0].year}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Grid of Remaining Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
          {filteredProjects.slice(1).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between min-h-[320px] relative transition-all duration-300"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm text-gray-500 mb-2 font-semibold">{project.agency}</div>
                <h3 className="font-bold text-2xl mb-2 text-[var(--primary)]">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2 flex-1">{project.description}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-[var(--primary)] rounded-full px-4 py-1 text-xs font-semibold shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--secondary)] font-medium hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--secondary)] font-medium hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm font-semibold">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 