import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 bg-[var(--primary)]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--background)] mb-6">
            About <span className="text-[var(--secondary)]">Me</span>
          </h1>
          <p className="text-lg text-[var(--background)] max-w-2xl">
            I'm a passionate developer dedicated to creating beautiful and functional web experiences.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--secondary)] rounded-full -z-10 opacity-20"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">My Journey</h2>
              <div className="space-y-4">
                <div className="relative pl-8 border-l-2 border-[var(--secondary)]">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--secondary)]"></div>
                  <h3 className="text-xl font-semibold text-[var(--primary)]">2023</h3>
                  <p className="text-[var(--foreground)]">
                    Senior Developer at Tech Innovations
                  </p>
                </div>
                <div className="relative pl-8 border-l-2 border-[var(--secondary)]">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--secondary)]"></div>
                  <h3 className="text-xl font-semibold text-[var(--primary)]">2020</h3>
                  <p className="text-[var(--foreground)]">
                    Lead Developer at Digital Solutions
                  </p>
                </div>
                <div className="relative pl-8 border-l-2 border-[var(--secondary)]">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--secondary)]"></div>
                  <h3 className="text-xl font-semibold text-[var(--primary)]">2018</h3>
                  <p className="text-[var(--foreground)]">
                    Started my journey in web development
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">Skills & Expertise</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--card-bg)] p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-[var(--secondary)] mb-2">Frontend Development</h3>
                  <ul className="text-white space-y-1">
                    <li>• React.js & Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Redux</li>
                  </ul>
                </div>
                <div className="bg-[var(--card-bg)] p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-[var(--secondary)] mb-2">Backend Development</h3>
                  <ul className="text-white space-y-1">
                    <li>• Node.js</li>
                    <li>• Express.js</li>
                    <li>• MongoDB</li>
                    <li>• REST APIs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">Achievements</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center bg-[var(--card-bg)] p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-[var(--secondary)]">5+</div>
                  <div className="text-sm text-white">Years Experience</div>
                </div>
                <div className="text-center bg-[var(--card-bg)] p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-[var(--secondary)]">50+</div>
                  <div className="text-sm text-white">Projects Completed</div>
                </div>
                <div className="text-center bg-[var(--card-bg)] p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-[var(--secondary)]">30+</div>
                  <div className="text-sm text-white">Happy Clients</div>
                </div>
                <div className="text-center bg-[var(--card-bg)] p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-[var(--secondary)]">100%</div>
                  <div className="text-sm text-white">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--secondary)] transition-colors"
              >
                Download CV
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 