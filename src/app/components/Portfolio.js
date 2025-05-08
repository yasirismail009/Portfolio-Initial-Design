"use client";
import React, { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: "plexaar",
    title: "Plexaar",
    tags: ["React.js", "UI/UX"],
    img: "https://placehold.co/400x300?text=Plexaar",
    description: "A modern web application built with React.js",
    technologies: ["React.js", "Node.js", "MongoDB"],
    liveUrl: "https://plexaar.com",
    githubUrl: "https://github.com/username/plexaar"
  },
  {
    id: "expert-ecommerce",
    title: "Expert eCommerce",
    tags: ["Next.js", "E-commerce"],
    img: "https://placehold.co/400x300?text=Expert+eCommerce",
    description: "Full-featured e-commerce platform",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "https://expert-ecommerce.com",
    githubUrl: "https://github.com/username/expert-ecommerce"
  },
  {
    id: "full-measure",
    title: "Full Measure",
    tags: ["React CMS", "Dashboard"],
    img: "https://placehold.co/400x300?text=Full+Measure",
    description: "Content management system built with React",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://fullmeasure.com",
    githubUrl: "https://github.com/username/full-measure"
  },
  { 
    id: "insaaf-care",
    title: "Insaaf Care", 
    tags: ["React CMS", "Healthcare"], 
    img: "https://placehold.co/400x300?text=Insaaf+Care",
    description: "Healthcare management system",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  { 
    id: "studio",
    title: "Studio", 
    tags: ["Django CMS", "Creative"], 
    img: "https://placehold.co/400x300?text=Studio",
    description: "Creative studio management platform",
    technologies: ["Django", "Python", "PostgreSQL"]
  },
  { 
    id: "vidtao-app",
    title: "Vidtao App", 
    tags: ["Next.js", "Video"], 
    img: "https://placehold.co/400x300?text=Vidtao+App",
    description: "Video streaming application",
    technologies: ["Next.js", "Node.js", "MongoDB"]
  }
];

const categories = ["All", "React.js", "Next.js", "Django CMS", "UI/UX", "E-commerce", "Dashboard", "Healthcare", "Creative", "Video"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedCategory));

  return (
    <section className="w-full py-16 bg-[var(--background)] flex flex-col items-center">
      <div className="max-w-7xl w-full px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "bg-[var(--muted)] text-[var(--primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[var(--secondary)] text-[var(--primary)] rounded-full px-3 py-1 text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-bold text-xl mb-2 text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[var(--muted)] text-[var(--primary)] rounded px-2 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--secondary)] flex items-center gap-1 font-medium hover:underline"
                    >
                      Live Demo <span>→</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--secondary)] flex items-center gap-1 font-medium hover:underline"
                    >
                      GitHub <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 