import React from "react";

export default function Contact() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-[#f7f7f7]">
      <div className="w-full max-w-6xl mx-auto rounded-3xl p-10 md:p-16 shadow-xl flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#e9e6ff] to-[#c7c6f7]" style={{minHeight: '420px'}}>
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-4">Contact with me to sizzle your project</h2>
        <p className="text-md md:text-lg text-gray-600 text-center mb-8">Feel free to contact me if having any questions. I'm available for new projects or just for chatting.</p>
        <form className="w-full flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 rounded-full px-6 py-4 bg-white/60 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bcb6f7] text-lg shadow"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 rounded-full px-6 py-4 bg-white/60 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bcb6f7] text-lg shadow"
            />
          </div>
          <textarea
            placeholder="Work Description..."
            rows={5}
            className="rounded-2xl px-6 py-4 bg-white/60 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bcb6f7] text-lg shadow resize-none w-full"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-gray-500 text-white font-semibold text-lg py-4 mt-2 shadow hover:bg-gray-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
} 