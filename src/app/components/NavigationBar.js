import React from "react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <Link href="/" className="font-bold text-2xl text-[var(--primary)]">Olivia.</Link>
      </div>
      <ul className="hidden md:flex gap-8 text-[var(--primary)] font-medium text-base">
        <li><Link href="/" className="hover:text-[var(--secondary)]">Home</Link></li>
        <li><Link href="/services" className="hover:text-[var(--secondary)]">Services</Link></li>
        <li><Link href="/about" className="hover:text-[var(--secondary)]">About</Link></li>
        <li><Link href="/projects" className="hover:text-[var(--secondary)]">Projects</Link></li>
        <li><Link href="/blog" className="hover:text-[var(--secondary)]">Blogs</Link></li>
        <li><Link href="/testimonials" className="hover:text-[var(--secondary)]">Testimonials</Link></li>
      </ul>
      <Link href="/contact" className="ml-4 px-6 py-2 rounded-full bg-[var(--primary)] text-white font-semibold hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition hidden md:block">Contact Me</Link>
    </nav>
  );
} 