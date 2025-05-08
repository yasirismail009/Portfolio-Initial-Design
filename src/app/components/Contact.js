import React from "react";

export default function Contact() {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <div className="max-w-5xl w-full px-4 grid md:grid-cols-2 gap-8">
        <div>
          <span className="block text-sm font-medium mb-2 text-[var(--secondary)]">Contact Us</span>
          <h2 className="text-3xl font-bold mb-4">Let's Talk for <span className="text-[var(--secondary)] italic">Your Next Projects</span></h2>
          <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <form className="bg-[var(--muted)] rounded-xl p-6 flex flex-col gap-4">
          <input className="rounded px-4 py-2" placeholder="Your Name *" required />
          <input className="rounded px-4 py-2" placeholder="Email *" type="email" required />
          <input className="rounded px-4 py-2" placeholder="Phone *" type="tel" required />
          <select className="rounded px-4 py-2">
            <option>I'm Interested in *</option>
            <option>UI/UX Design</option>
            <option>App Design</option>
            <option>Web Design</option>
          </select>
          <button className="mt-2 px-6 py-3 rounded-full bg-[var(--secondary)] text-[var(--primary)] font-semibold flex items-center gap-2 hover:bg-[var(--accent)] transition" type="submit">
            Submit
            <span className="inline-block bg-white rounded-full p-1 ml-2">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
} 