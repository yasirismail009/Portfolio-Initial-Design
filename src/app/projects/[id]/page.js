"use client";

import NavigationBar from "../../components/NavigationBar";
import CategoryBar from "../../components/CategoryBar";
import Footer from "../../components/Footer";
import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Image from "next/image";

// This would typically come from your data source
const getProjectDetails = (id) => {
  // This is a placeholder - replace with your actual data fetching logic
  return {
    id,
    title: "Project Title",
    description: "Detailed project description goes here...",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
    images: [
      "https://placehold.co/1200x800/2563eb/ffffff?text=Project+Screenshot+1",
      "https://placehold.co/1200x800/2563eb/ffffff?text=Project+Screenshot+2",
      "https://placehold.co/1200x800/2563eb/ffffff?text=Project+Screenshot+3",
      "https://placehold.co/1200x800/2563eb/ffffff?text=Project+Screenshot+4"
    ],
    liveUrl: "https://project-url.com",
    githubUrl: "https://github.com/username/project",
    features: [
      "Feature 1 description",
      "Feature 2 description",
      "Feature 3 description"
    ],
    stats: {
      duration: "3 months",
      teamSize: "4 members",
      completionDate: "March 2024"
    },
    challenges: [
      "Challenge 1 description",
      "Challenge 2 description",
      "Challenge 3 description"
    ],
    solutions: [
      "Solution 1 description",
      "Solution 2 description",
      "Solution 3 description"
    ]
  };
};

export default function ProjectDetailPage({ params }) {
  const project = getProjectDetails(params.id);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationBar />
      <CategoryBar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Project Header */}
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-medium mb-4">
              Featured Project
            </span>
            <h1 className="text-5xl font-bold mb-6 text-[var(--primary)]">{project.title}</h1>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-semibold hover:bg-[var(--secondary)] hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{project.stats.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{project.stats.teamSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{project.stats.completionDate}</span>
              </div>
            </div>
          </div>

          {/* Project Images Carousel */}
          <div className="mb-16">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
                <div className="flex">
                  {project.images.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div className="relative aspect-video">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={1200}
                          height={800}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Navigation */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === selectedIndex
                        ? "bg-[var(--secondary)] w-6"
                        : "bg-white/80 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] flex items-center gap-2">
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-colors font-semibold flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors font-semibold flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] flex items-center gap-2">
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Challenges */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] flex items-center gap-2">
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Challenges
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-lg">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] flex items-center gap-2">
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Solutions
              </h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-lg">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 