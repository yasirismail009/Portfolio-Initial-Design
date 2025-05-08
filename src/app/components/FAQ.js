"use client"; 
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      q: "What industries have you worked in as a product designer?", 
      a: "I have extensive experience across various industries including technology, healthcare, e-commerce, and financial services. My work spans from enterprise software to consumer-facing applications, allowing me to bring diverse perspectives to each project."
    },
    { 
      q: "Can I download your resume/CV for information?", 
      a: "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements."
    },
    { 
      q: "Are you available for freelance design work?", 
      a: "Yes, I am available for select freelance opportunities. I carefully consider each project to ensure I can deliver the highest quality work while maintaining a balanced workload. Feel free to reach out through the contact form to discuss potential collaborations."
    },
    { 
      q: "What tools do you use for your design work?", 
      a: "I utilize a comprehensive suite of design tools including Figma for UI/UX design, Adobe Creative Suite for visual design, and various prototyping tools. I'm also proficient in design systems, user research methodologies, and collaboration tools to ensure seamless project delivery."
    },
    { 
      q: "How do I navigate through your portfolio projects?", 
      a: "You can browse my portfolio projects through the Projects section of this website. Each project includes detailed case studies, process documentation, and final deliverables. Use the navigation menu or scroll through the projects page to explore my work."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-[var(--primary)] flex flex-col items-center">
      <div className="max-w-5xl w-full px-4">
        <span className="block text-sm font-medium mb-2 text-[var(--secondary)]">FAQs</span>
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Questions? <span className="text-[var(--secondary)] italic">Look here.</span></h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={false}
              animate={{
                backgroundColor: openIndex === i ? "var(--card-highlight)" : "var(--card-bg)",
                color: openIndex === i ? "var(--primary)" : "white"
              }}
              transition={{ duration: 0.3 }}
              className="rounded-xl p-6 shadow flex flex-col"
            >
              <motion.div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(i)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <motion.span 
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl"
                >
                  {openIndex === i ? "–" : "+"}
                </motion.span>
              </motion.div>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-sm"
                    >
                      {faq.a}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 