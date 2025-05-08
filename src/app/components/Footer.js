import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-[var(--primary)] text-white flex flex-col items-center">
      <div className="max-w-5xl w-full px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-xl mb-2 text-[var(--secondary)]">Olivia.</span>
          <p className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex gap-2 mt-2">
            <span className="w-8 h-8 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] font-bold">B</span>
            <span className="w-8 h-8 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] font-bold">Y</span>
            <span className="w-8 h-8 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)] font-bold">I</span>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex gap-8 mb-2">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">Blogs</a>
            <a href="#" className="hover:underline">FAQs</a>
          </div>
          <div className="text-xs text-gray-400">Copyright © 2024 Olivia. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
} 