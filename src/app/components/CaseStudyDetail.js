"use client";
import React from "react";
import Image from "next/image";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudyDetail({ id }) {
  const caseStudy = caseStudies.find(study => study.id === parseInt(id));

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="text-sm text-gray-500 mb-4 font-semibold">{caseStudy.client}</div>
        <h1 className="text-5xl text-[var(--primary)] font-bold mb-6">{caseStudy.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{caseStudy.description}</p>
        <div className="flex flex-wrap gap-4 mb-8">
          {caseStudy.content.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-[var(--primary)] rounded-full px-4 py-2 text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-8 text-gray-600">
          <div>
            <span className="font-semibold">Duration:</span> {caseStudy.duration}
          </div>
          <div>
            <span className="font-semibold">Category:</span> {caseStudy.category}
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-16">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-3xl shadow-xl"
        />
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="text-3xl text-[var(--primary)] font-bold mb-6">Overview</h2>
          <div className="prose prose-lg">
            {caseStudy.content.overview.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-[var(--primary)]">{paragraph}</p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Challenge</h2>
          <div className="prose prose-lg">
            {caseStudy.content.challenge.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-[var(--primary)]">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Solution</h2>
        <div className="prose prose-lg">
          {caseStudy.content.solution.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-[var(--primary)]">{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose prose-lg">
            {caseStudy.content.results.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-[var(--primary)]">{paragraph}</p>
            ))}
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">Key Achievements</h3>
            <ul className="space-y-4">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-center text-[var(--primary)]">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {caseStudy.content.testimonial && (
        <div className="bg-gray-50 p-12 rounded-3xl mb-16">
          <blockquote className="text-2xl font-medium mb-6 text-[var(--primary)]">
            &quot;{caseStudy.content.testimonial.quote}&quot;
          </blockquote>
          <div>
            <div className="font-bold text-[var(--primary)]">{caseStudy.content.testimonial.author}</div>
            <div className="text-gray-600">{caseStudy.content.testimonial.position}</div>
          </div>
        </div>
      )}

      {/* Additional Images */}
      {caseStudy.detail_images && caseStudy.detail_images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[var(--primary)]">
          {caseStudy.detail_images.map((image, index) => (
            <div key={index} className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={image}
                alt={`${caseStudy.title} - Detail ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 