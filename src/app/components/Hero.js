"use client";
import React from "react";
import { motion } from "framer-motion";

// Types
const skills = [
  { id: 1, label: "React.js", x: "70%", y: "20%" },
  { id: 2, label: "Next.js", x: "80%", y: "60%" },
  { id: 3, label: "Redux", x: "60%", y: "85%" },
  { id: 4, label: "TypeScript", x: "20%", y: "80%" },
  { id: 5, label: "Tailwind CSS", x: "10%", y: "50%" },
  { id: 6, label: "Performance", x: "15%", y: "20%" },
  { id: 7, label: "API Integration", x: "40%", y: "10%" },
  { id: 8, label: "Testing", x: "50%", y: "90%" },
];

const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-yasir-5143b3164/",
    icon: () => (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#f5a623"/>
        <path d="M8.5 10.5v5m0 0v-5m0 5H7m1.5 0H10m4-5v5m0 0v-2.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5V15m3-4.5h1.5m-1.5 0V15" stroke="#314733" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/yasirismail009",
    icon: () => (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#f5a623"/>
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.652 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.38.202 2.399.1 2.652.64.699 1.028 1.593 1.028 2.686 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="#314733"/>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section 
      className="relative w-full bg-white flex flex-col items-center justify-center pt-16 pb-8 md:pb-20"
      aria-label="Hero section"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Left: Image with circle and skill tags */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex-shrink-0 flex items-center justify-center w-full md:w-auto"
        >
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-full bg-[var(--secondary)]"
              style={{ zIndex: 1 }}
            />
            <div className="absolute left-1/2 top-1/2 w-[260px] h-[320px] md:w-[320px] md:h-[400px] -translate-x-1/2 -translate-y-1/2 z-10 shadow-xl rounded-b-full rounded-t-full overflow-hidden">
              <img
                src="https://limewire.com/decrypt?downloadUrl=https%3A%2F%2Flimewire-filesharing-production.b61cdfd8cf17f52ddc020162e738eb5d.r2.cloudflarestorage.com%2Fbuckets%2F13a43c49-0afa-4a5f-9c5f-172adf4dc149%2Fed28ec7c-fb45-4c32-8d1f-db46bf736c7c%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20250506T110545Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Credential%3Da1868571dfad6d4fe293ee5b945a0ad5%252F20250506%252Fauto%252Fs3%252Faws4_request%26X-Amz-Expires%3D14400%26X-Amz-Signature%3D1089a573398263645ca6958b58fd774008f84bd05d9bd92ef1fb834923d1bb0b&mediaType=image%2Fjpeg&decryptionSession=eyJhZXNKd2tHY20iOnsiYWVzS2V5VHlwZSI6IlNZTU1FVFJJQ19BRVMtR0NNX0tFWSIsImp3ayI6eyJhbGciOiJBMjU2R0NNIiwiZXh0Ijp0cnVlLCJrIjoiY2M0V21Cdy1ManFicHZZQnlQRHBCcjhqQlpzMk4xeHJ4UmFPWU5RckY0ZyIsImtleV9vcHMiOlsiZW5jcnlwdCIsImRlY3J5cHQiXSwia3R5Ijoib2N0In19LCJhZXNKd2tDdHIiOnsiYWVzS2V5VHlwZSI6IlNZTU1FVFJJQ19BRVMtQ1RSX0tFWSIsImp3ayI6eyJhbGciOiJBMjU2Q1RSIiwiZXh0Ijp0cnVlLCJrIjoiY2M0V21Cdy1ManFicHZZQnlQRHBCcjhqQlpzMk4xeHJ4UmFPWU5RckY0ZyIsImtleV9vcHMiOlsiZW5jcnlwdCIsImRlY3J5cHQiXSwia3R5Ijoib2N0In19fQ"
                alt="Muhammad Yasir Ismail"
                className="w-full h-full object-cover"
              />
            </div>
            {skills?.map((skill) => (
              <motion.span
                key={skill.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: skill.id * 0.1 }}
                className="absolute px-3 py-1 rounded-full bg-white text-[var(--primary)] text-xs font-semibold shadow-md border border-[var(--muted)]"
                style={{ left: skill.x, top: skill.y, transform: "translate(-50%, -50%)", zIndex: 20 }}
              >
                {skill.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right: Text and buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block text-sm font-medium mb-2 text-[var(--secondary)]"
          >
            Senior Frontend Engineer
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-[var(--primary)] mb-4 leading-tight text-center md:text-left"
          >
            Muhammad <span className="text-[var(--secondary)] italic">Yasir Ismail</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-2 mb-4 text-gray-600 text-base items-center md:items-start"
          >
            <span>Islamabad</span>
            <span className="hidden sm:inline">|</span>
            <span>+92-3026331556</span>
            <span className="hidden sm:inline">|</span>
            <span>yasirismail321@gmail.com</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4 mb-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
              >
                {link.icon()}
              </a>
            ))}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-700 mb-8 text-center md:text-left max-w-xl"
          >
            Highly skilled Senior Frontend Engineer with 5+ years of hands-on experience in developing web applications using React.js, Next.js, Redux, TypeScript, and Tailwind CSS. Expertise in front-end architecture, performance optimization, and building scalable, dynamic, and responsive web applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button 
              className="px-7 py-3 rounded-full bg-[var(--primary)] text-white font-semibold flex items-center gap-2 hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all duration-300 text-base shadow hover:shadow-lg"
              aria-label="View portfolio"
            >
              View My Portfolio
            </button>
            <button 
              className="px-7 py-3 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-semibold flex items-center gap-2 hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-base shadow hover:shadow-lg"
              aria-label="Hire me"
            >
              Hire Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 