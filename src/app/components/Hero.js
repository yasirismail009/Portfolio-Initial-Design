"use client";
import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Lmntrix", logo: "/brands/lmntrix.svg" },
  { name: "Pligence", logo: "/brands/pligence.svg" },
  { name: "Oric Business", logo: "/brands/oric.svg" },
];

// Duplicate brands for seamless scrolling
const duplicatedBrands = [...brands, ...brands];

const socials = [
  { 
    name: "LinkedIn", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    url: "https://www.linkedin.com/in/muhammad-yasir-5143b3164/",
    color: "hover:bg-blue-600"
  },
  { 
    name: "GitHub", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#181717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    url: "https://github.com/yasirismail009",
    color: "hover:bg-gray-800"
  },
  { 
    name: "Email", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    url: "mailto:yasirismail321@gmail.com",
    color: "hover:bg-red-500"
  },
];

const nameVariants = {
  initial: { y: 0 },
  animate: {
    y: [-20, 0, -20],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const scrollVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-32 py-16 bg-[#f7f8fa] min-h-[70vh]" style={{zoom: '120%'}}>
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-lg">
        <span className="mb-4 px-4 py-1 rounded-full bg-[#eafaff] text-[#1cb5e0] text-xs font-semibold shadow-sm">
          ● AVAILABLE FOR WORK
        </span>
        <h1 className="text-7xl md:text-7xl font-bold text-black mb-4">
          Hi, I'm a<br />
          <motion.div
            variants={nameVariants}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            Product<br />Engineer
          </motion.div>
          <span className="align-super text-2xl">©</span>
        </h1>
        <p className="text-gray-400 mb-8 text-xs md:text-sm">
          Senior Software Engineer with 5+ years of experience in React.js, Next.js, and modern web technologies. Expert in building scalable, dynamic, and responsive web applications.
        </p>
        <button className="px-8 py-2 rounded-full bg-black text-white font-semibold shadow hover:bg-gray-800 transition text-sm">
          Contact Me
        </button>
      </div>
      {/* Right Side */}
      <div className="flex flex-col gap-4 items-center md:items-end justify-center">
        {/* Card and Profile Side by Side */}
        <div className="flex flex-row gap-5 w-full">
          {/* Card */}
          <div className="w-56 bg-white rounded-2xl shadow-lg p-5 flex flex-col items-start justify-center min-h-[170px]">
            <span className="font-semibold text-lg text-black mb-1">Muhammad Yasir</span>
            <span className="text-gray-400 text-sm mb-2">Islamabad, Pakistan</span>
            <span className="inline-block px-3 py-1 rounded-full bg-[#f5f6fa] text-xs font-semibold text-gray-700 mb-2">Product Engineer</span>
            <span className="text-[#1cb5e0] font-bold text-sm">yasirismail321@gmail.com</span>
          </div>
          {/* Profile Image */}
          <img src="/yasir.jpg" alt="Muhammad Yasir" className="w-72 h-60 rounded-2xl object-cover shadow-lg bg-white" />
        </div>
        {/* Brands */}
        <div className="flex flex-row gap-2 w-full">
        <div className="w-80 bg-gradient-to-r from-[#b3baff] to-[#a0e9ff] rounded-lg p-4 flex flex-col items-center shadow overflow-hidden">
          <span className="text-xs text-white mb-2">Companies I've worked with &lt;3</span>
          <motion.div
            variants={scrollVariants}
            animate="animate"
            className="flex gap-6 items-center justify-center"
          >
            {duplicatedBrands.map((brand, index) => (
              <p key={index} className="text-white text-xl font-bold w-max px-8">
                {brand.name}
              </p>
            ))}
          </motion.div>
        </div>
        {/* Social Icons */}
        <div className="flex flex-wrap w-52 gap-4 justify-center">
          {socials.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`bg-white rounded-full p-3 shadow flex items-center justify-center transition-colors duration-300 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
} 