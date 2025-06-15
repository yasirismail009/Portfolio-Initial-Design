"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import { caseStudies } from "../data/caseStudies";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? caseStudies : caseStudies.slice(0, 2);
  console.log(caseStudies);
  return (
    <section className="w-full my-16 mx-auto mt-16 px-4 flex flex-col md:flex-row gap-8 items-start">
      {/* Sidebar */}
      <aside className="md:mr-12 min-w-[260px] flex flex-col items-start pt-4 sticky top-8 self-start z-10">
        <h2 className="text-5xl font-bold text-black mb-8 leading-tight">All<br />Projects</h2>
        <div className="flex flex-col gap-2 w-full">
      <button className="bg-black text-white rounded-full px-6 py-2 shadow-md mt-8 text-lg font-medium hover:bg-[var(--secondary)] transition-all">
        All Projects
      </button>
        </div>
        <a
          href="https://www.linkedin.com/in/muhammad-yasir-5143b3164/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-full px-6 py-2 shadow-md mt-8 text-lg font-medium hover:bg-[var(--secondary)] transition-all"
        >
          Book a Call
        </a>
      </aside>

      {/* Projects Section (Scrollable) */}
      <div className="flex-1 max-h-[calc(100vh-0rem)] overflow-y-auto pr-2 hide-scrollbar">
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
          {displayedProjects.map((project) => (
            <Link key={project.id} href={`/case-studies/${project.id}`} className="block">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between min-h-[320px] relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                <div className="w-full h-48 overflow-hidden rounded-t-3xl">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <PlaceholderImage
                      category={project.category}
                      title={project.title}
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-sm text-gray-500 mb-2 font-semibold">{project.client}</div>
                  <h3 className="font-bold text-2xl mb-2 text-[var(--primary)]">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-1">{project.description}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.content.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-[var(--primary)] rounded-full px-4 py-1 text-xs font-semibold shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-end mt-auto">
                    <span className="text-[var(--secondary)] font-medium">
                      {project.duration}
                    </span>
                    <div className="flex flex-col items-end">
                      {project.results.slice(0, 1).map((result, index) => (
                        <span key={index} className="text-gray-400 text-sm font-semibold">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Explore More Button */}
        {!showAll && caseStudies.length > 2 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-black text-white rounded-full px-8 py-3 text-lg font-medium hover:bg-[var(--secondary)] transition-all shadow-lg hover:shadow-xl"
            >
              Explore More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 