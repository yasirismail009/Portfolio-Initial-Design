"use client";

import NavigationBar from "../../components/NavigationBar";
import CategoryBar from "../../components/CategoryBar";
import Footer from "../../components/Footer";
import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import Image from "next/image";
import { projects } from "../../components/Portfolio";
import Link from "next/link";

// This would typically come from your data source
const getProjectDetails = (id) => {
  const project = projects.find(p => p.id === id);
  if (!project) return null;

  // Use actual images for Plexaar, placeholders for other projects
  const images = project.id === "plexaar" ? [
    "/plexaar/Plexaar 1.png",
    "/plexaar/Plexaar 2.png",
    "/plexaar/Plexaar 3.png",
    "/plexaar/Plexaar 4.png"
  ] : [
    `https://placehold.co/1200x800/2563eb/ffffff?text=${project.title}+Screenshot+1`,
    `https://placehold.co/1200x800/2563eb/ffffff?text=${project.title}+Screenshot+2`,
    `https://placehold.co/1200x800/2563eb/ffffff?text=${project.title}+Screenshot+3`,
    `https://placehold.co/1200x800/2563eb/ffffff?text=${project.title}+Screenshot+4`
  ];

  // Generate features based on technologies
  const features = project.technologies.map(tech => 
    `Implemented ${tech} for enhanced functionality and performance`
  );

  // Generate challenges and solutions based on project category
  const challenges = [
    `Optimizing performance for ${project.category} applications`,
    `Implementing secure authentication and authorization`,
    `Ensuring cross-browser compatibility and responsive design`
  ];

  const solutions = [
    `Utilized modern development practices and tools for optimal performance`,
    `Implemented industry-standard security protocols and best practices`,
    `Adopted responsive design principles and thorough testing`
  ];

  const stats = {
    duration: "3 months",
    teamSize: "4 members",
    completionDate: `${project.year}`
  };

  return {
    ...project,
    images,
    features: project.features || features,
    challenges: project.challenges || challenges,
    solutions: project.solutions || solutions,
    stats: project.stats || stats,
    testimonials: project.id === "plexaar" ? [
      {
        quote: "Plexaar has transformed how we manage our business operations. The automation capabilities are unmatched.",
        author: "Sarah Johnson",
        role: "Operations Director",
        company: "TechCorp"
      },
      {
        quote: "The KPI tracking and reporting features have given us unprecedented visibility into our business performance.",
        author: "Michael Chen",
        role: "CEO",
        company: "Global Solutions"
      }
    ] : []
  };
};

export default function ProjectDetailPage({ params }) {
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
  const project = getProjectDetails(params.id);
  
  if (!project) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <NavigationBar />
        <CategoryBar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Project Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationBar />
      <CategoryBar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white/95 rounded-2xl shadow-lg p-8">
          {/* Project Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="px-4 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium">
                {project.agency || <span className='text-gray-400'>No agency</span>}
              </span>
              <span className="px-4 py-1 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-sm font-medium">
                {project.category || <span className='text-gray-400'>No category</span>}
              </span>
            </div>
            <h1 className="text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
              {project.title || <span className='text-gray-400'>No Title</span>}
            </h1>
            <div className="w-24 h-1 mx-auto mb-6 rounded bg-[var(--primary)]" />
            {project.description && (
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                The #1 ERP System for Business Excellence. All-In-One Business Management Suite trusted by 10k+ happy customers worldwide.
              </p>
            )}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {(project.technologies && project.technologies.length > 0) ? project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              )) : <span className='text-gray-400'>No technologies listed</span>}
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <span className="font-bold">Duration:</span> <span>{project.stats?.duration || <span className='text-gray-400'>N/A</span>}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Team Size:</span> <span>{project.stats?.teamSize || <span className='text-gray-400'>N/A</span>}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Completed:</span> <span>{project.stats?.completionDate || <span className='text-gray-400'>N/A</span>}</span>
              </div>
            </div>
          </div>

          {/* Project Images Carousel */}
          <div className="mb-16">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
                <div className="flex">
                  {(project.images && project.images.length > 0) ? project.images.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div className="relative aspect-video">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={1200}
                          height={800}
                          className="object-cover w-full h-full"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  )) : <div className='w-full text-center text-gray-400 py-12'>No images available</div>}
                </div>
              </div>
              {/* Carousel Navigation */}
              {project.images && project.images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === selectedIndex
                          ? "bg-[var(--primary)] w-6"
                          : "bg-white/80 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] flex items-center gap-2 text-black">
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6 text-black">{project.description || <span className='text-gray-400'>No description provided</span>}</p>
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
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
                )}
                {project.githubUrl && (
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
                )}
                {project.detailsUrl && (
                  <a
                    href={project.detailsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition-colors font-semibold flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    Learn More
                  </a>
                )}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] flex items-center gap-2 text-black">
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Features
              </h2>
              <ul className="space-y-4">
                {(project.features && project.features.length > 0) ? project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-6 h-6 text-[var(--secondary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-black">{feature}</span>
                  </li>
                )) : <li className='text-gray-400'>No features listed</li>}
              </ul>
            </div>
          </div>

          {/* Testimonials Section (for Plexaar) */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-[var(--primary)] text-center text-black">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(project.testimonials && project.testimonials.length > 0) ? project.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                      <span className="text-[var(--primary)] font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-black">{testimonial.author}</h3>
                      <p className="text-gray-600 text-black">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-black">&quot;{testimonial.quote}&quot;</p>
                </div>
              )) : <div className='text-gray-400 text-center col-span-2'>No testimonials yet</div>}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Challenges */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] flex items-center gap-2 text-black">
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Challenges
              </h2>
              <ul className="space-y-4">
                {(project.challenges && project.challenges.length > 0) ? project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-lg text-black">{challenge}</span>
                  </li>
                )) : <li className='text-gray-400'>No challenges listed</li>}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] flex items-center gap-2 text-black">
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Solutions
              </h2>
              <ul className="space-y-4">
                {(project.solutions && project.solutions.length > 0) ? project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-lg text-black">{solution}</span>
                  </li>
                )) : <li className='text-gray-400'>No solutions listed</li>}
              </ul>
            </div>
          </div>

          {/* Project Stats */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-[var(--primary)] text-center text-black">Project Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--primary)] mb-2 text-black">{project.stats?.duration || <span className='text-gray-400'>N/A</span>}</div>
                <p className="text-gray-600 text-black">Development Time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--primary)] mb-2 text-black">{project.stats?.teamSize || <span className='text-gray-400'>N/A</span>}</div>
                <p className="text-gray-600 text-black">Team Size</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--primary)] mb-2 text-black">{project.stats?.completionDate || <span className='text-gray-400'>N/A</span>}</div>
                <p className="text-gray-600 text-black">Completion Date</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 