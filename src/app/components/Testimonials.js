"use client";
import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://placehold.co/100x100?text=SJ",
    quote: "Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations in every way.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    image: "https://placehold.co/100x100?text=MC",
    quote: "The attention to detail and technical expertise shown throughout our project was impressive. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Startup Founder",
    image: "https://placehold.co/100x100?text=ER",
    quote: "They transformed our vision into reality with their innovative solutions and professional approach.",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO at InnovateCo",
    image: "https://placehold.co/100x100?text=DK",
    quote: "The team's technical knowledge and problem-solving skills helped us overcome complex challenges.",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section className="w-full py-20 bg-[var(--background)]">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary)] mb-2">Client Testimonials</h2>
          <p className="text-[var(--muted-foreground)] text-base md:text-lg">What our clients say about working with us</p>
        </div>
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Testimonial Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-md border border-[var(--muted)]">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 flex justify-center px-2 py-8 transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="w-3/4 bg-gradient-to-br from-white via-[var(--background)]/60 to-[var(--muted)]/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02]">
                    <div className="mt-4 mb-4 flex flex-col items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-[var(--primary)] shadow bg-white"
                      />
                      <h3 className="mt-4 font-bold text-xl text-[var(--primary)]">{testimonial.name}</h3>
                      <p className="text-[var(--muted-foreground)] text-sm">{testimonial.role}</p>
                    </div>
                    <div className="mb-3">
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <p className="text-[var(--foreground)] italic text-base md:text-lg flex items-center justify-center gap-2">
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-[var(--primary)] opacity-60' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 17h.01M15 17h.01M7 7h10v10a2 2 0 01-2 2H9a2 2 0 01-2-2V7z' /></svg>
                      {`"${testimonial.quote}"`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 md:p-3 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--secondary)] shadow transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 md:p-3 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--secondary)] shadow transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-[var(--primary)]"
                    : "w-2 bg-[var(--muted)]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}