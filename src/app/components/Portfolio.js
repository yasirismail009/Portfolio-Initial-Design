"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

const projects = [
  {
    id: "plexaar",
    title: "Plexaar",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT.JS", "WEB DEV"],
    category: "Web Development",
    description: "A modern web application built with React.js, featuring dynamic components and responsive design. Implemented advanced state management and optimized performance.",
    technologies: ["React.js", "Redux", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://plexaar.com",
    githubUrl: "https://github.com/yasirismail009/plexaar"
  },
  {
    id: "expert-ecommerce",
    title: "Expert eCommerce",
    agency: "FREELANCE",
    year: 2023,
    tags: ["NEXT.JS", "E-COMMERCE"],
    category: "E-Commerce",
    description: "Full-featured e-commerce platform with advanced product management, payment integration, and real-time inventory tracking. Built with Next.js for optimal performance.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Redux Toolkit"],
    liveUrl: "https://expert-ecommerce.com",
    githubUrl: "https://github.com/yasirismail009/expert-ecommerce"
  },
  {
    id: "full-measure",
    title: "Full Measure",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT CMS", "DASHBOARD"],
    category: "Dashboard",
    description: "Enterprise-grade content management system with dynamic components, real-time data visualization, and advanced analytics dashboard.",
    technologies: ["React.js", "Redux", "Material UI", "Chart.js"],
    liveUrl: "https://fullmeasure.com",
    githubUrl: "https://github.com/yasirismail009/full-measure"
  },
  {
    id: "insaaf-care",
    title: "Insaaf Care",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT CMS", "HEALTHCARE"],
    category: "Healthcare",
    description: "Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features. Built with React.js and integrated with healthcare APIs.",
    technologies: ["React.js", "Node.js", "MongoDB", "Material UI"],
    liveUrl: "https://insaafcare.com",
    githubUrl: "https://github.com/yasirismail009/insaaf-care"
  },
  {
    id: "studio",
    title: "Studio",
    agency: "FREELANCE",
    year: 2023,
    tags: ["DJANGO CMS", "CREATIVE"],
    category: "Creative",
    description: "Creative studio management platform with project tracking, client management, and portfolio showcase features. Built with Django for robust backend functionality.",
    technologies: ["Django", "Python", "PostgreSQL", "React.js"],
    liveUrl: "https://studio.com",
    githubUrl: "https://github.com/yasirismail009/studio"
  },
  {
    id: "vidtao-app",
    title: "Vidtao App",
    agency: "FREELANCE",
    year: 2023,
    tags: ["NEXT.JS", "VIDEO"],
    category: "Video",
    description: "Advanced video streaming application with real-time features, content management, and user engagement analytics. Built with Next.js for optimal performance.",
    technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC"],
    liveUrl: "https://vidtao.com",
    githubUrl: "https://github.com/yasirismail009/vidtao-app"
  },
  {
    id: "quran-app",
    title: "Quran App",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT.JS", "MOBILE"],
    category: "Mobile",
    description: "Islamic application for Quran reading and learning with audio features, translation, and tafsir. Built with React.js and optimized for mobile devices.",
    technologies: ["React.js", "Redux", "Tailwind CSS", "PWA"],
    liveUrl: "https://quran-app.com",
    githubUrl: "https://github.com/yasirismail009/quran-app"
  },
  {
    id: "japan-sale-solution",
    title: "Japan Sale Solution",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT.JS", "E-COMMERCE"],
    category: "E-Commerce",
    description: "Specialized e-commerce solution for Japanese market with multi-language support, custom payment gateways, and inventory management system.",
    technologies: ["React.js", "Redux", "Material UI", "i18n"],
    liveUrl: "https://japan-sale-solution.com",
    githubUrl: "https://github.com/yasirismail009/japan-sale-solution"
  },
  {
    id: "pligence",
    title: "Pligence",
    agency: "FREELANCE",
    year: 2023,
    tags: ["NEXT.JS", "DASHBOARD"],
    category: "Dashboard",
    description: "Advanced business intelligence dashboard with real-time analytics, custom reporting, and data visualization features. Built with Next.js for optimal performance.",
    technologies: ["Next.js", "TypeScript", "Chart.js", "Redux Toolkit"],
    liveUrl: "https://pligence.com",
    githubUrl: "https://github.com/yasirismail009/pligence"
  },
  {
    id: "threat-intel-platform",
    title: "Threat Intel Platform",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT.JS", "SECURITY"],
    category: "Security",
    description: "Comprehensive threat intelligence platform with real-time monitoring, threat detection, and security analytics. Built with React.js for robust frontend performance.",
    technologies: ["React.js", "Redux", "Material UI", "WebSocket"],
    liveUrl: "https://threat-intel-platform.com",
    githubUrl: "https://github.com/yasirismail009/threat-intel-platform"
  },
  {
    id: "privacy-defender",
    title: "Privacy Defender",
    agency: "FREELANCE",
    year: 2023,
    tags: ["NEXT.JS", "SECURITY"],
    category: "Security",
    description: "Privacy protection platform with advanced security features, monitoring tools, and real-time threat detection. Built with Next.js and TypeScript for enhanced security.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://privacydefender.com",
    githubUrl: "https://github.com/yasirismail009/privacy-defender"
  },
  {
    id: "pda-admin-dashboard",
    title: "PDA Admin Dashboard",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT.JS", "DASHBOARD"],
    category: "Dashboard",
    description: "Comprehensive admin dashboard for PDA management with user management, analytics, and reporting features. Built with React.js and Material UI.",
    technologies: ["React.js", "Redux", "Material UI", "Chart.js"],
    liveUrl: "https://pda-admin-dashboard.com",
    githubUrl: "https://github.com/yasirismail009/pda-admin-dashboard"
  },
  {
    id: "data-management",
    title: "Data Management",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT.JS", "DATA"],
    category: "Data",
    description: "Enterprise data management system with advanced data processing, visualization, and reporting capabilities. Built with React.js for optimal performance.",
    technologies: ["React.js", "Redux", "Material UI", "D3.js"],
    liveUrl: "https://data-management.com",
    githubUrl: "https://github.com/yasirismail009/data-management"
  },
  {
    id: "internal-management",
    title: "Internal Management",
    agency: "FREELANCE",
    year: 2023,
    tags: ["REACT.JS", "DASHBOARD"],
    category: "Dashboard",
    description: "Internal management system for enterprise operations with workflow automation, task management, and team collaboration features.",
    technologies: ["React.js", "Redux", "Material UI", "WebSocket"],
    liveUrl: "https://internal-management.com",
    githubUrl: "https://github.com/yasirismail009/internal-management"
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
        <a
          href="https://www.linkedin.com/in/muhammad-yasir-5143b3164/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-full px-6 py-2 shadow-md mb-4 text-lg font-medium hover:bg-[var(--secondary)] transition-all"
        >
          Book a Call
        </a>
      </aside>

      {/* Projects Section (Scrollable) */}
      <div className="flex-1 max-h-[calc(100vh-0rem)] overflow-y-auto pr-2 hide-scrollbar">
        {/* Main Featured Card */}
        {filteredProjects.length > 0 && (
          <div className="mb-10">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[420px] relative transition-all duration-300">
              <div className="w-full md:w-2/3 h-72 md:h-auto overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                <PlaceholderImage
                  category={filteredProjects[0].category}
                  title={filteredProjects[0].title}
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
                <PlaceholderImage
                  category={project.category}
                  title={project.title}
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