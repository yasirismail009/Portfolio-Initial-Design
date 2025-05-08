import React from 'react';
import NavigationBar from "../components/NavigationBar";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";

export const metadata = {
  title: 'Testimonials | Portfolio',
  description: 'Client and colleague testimonials about my work and professional experience',
};

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Developer",
    company: "Tech Corp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
    project: "E-commerce Platform Development",
    date: "March 2024"
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    company: "Innovate Inc",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Working with them was a pleasure. They brought innovative solutions to complex problems and maintained excellent communication throughout the project.",
    project: "Healthcare Management System",
    date: "February 2024"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupX",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    text: "Their technical expertise and ability to understand business requirements made them an invaluable asset to our team. The delivered solution exceeded our expectations.",
    project: "SaaS Platform Development",
    date: "January 2024"
  },
  {
    name: "Sarah Johnson",
    role: "Product Owner",
    company: "DesignHub",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "The attention to detail and focus on user experience was remarkable. They consistently delivered features that our users love.",
    project: "UI/UX Redesign",
    date: "December 2023"
  },
  {
    name: "David Wilson",
    role: "Lead Developer",
    company: "CodeCraft",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "Their code quality and architectural decisions have significantly improved our development process. A true professional in every sense.",
    project: "Microservices Architecture",
    date: "November 2023"
  },
  {
    name: "Emily Brown",
    role: "Marketing Director",
    company: "GrowthLabs",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 5,
    text: "The website they built has transformed our online presence. The performance improvements and SEO optimizations have had a direct impact on our business growth.",
    project: "Corporate Website Redesign",
    date: "October 2023"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-[var(--secondary)]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <NavigationBar />
      <CategoryBar />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--card-bg)] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
            Testimonials
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-gray-100 leading-relaxed">
            What clients and colleagues say about working with me
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[var(--secondary)]"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-[var(--primary)]">{testimonial.name}</h3>
                    <p className="text-[var(--secondary)] font-medium">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <StarRating rating={testimonial.rating} />
                
                <p className="text-gray-600 my-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-[var(--secondary)]">
                      {testimonial.project}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--primary)]">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-[var(--card-muted)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can bring your vision to life with our expertise and dedication.
          </p>
          <button className="bg-[var(--primary)] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[var(--secondary)] hover:text-[var(--primary)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
} 