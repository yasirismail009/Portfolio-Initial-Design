import React from "react";

const clientLogos = [
  "Jeep", "amazon", "bitcoin", "HubSpot", "stripe", "Google"
];

const services = [
  {
    title: "Frontend Development",
    description: "Building modern, scalable, and responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Creating reusable UI components and design systems. Implementing state management with Redux, Redux Toolkit, Context API, and Apollo Client."
  },
  {
    title: "Performance Optimization",
    description: "Improving application performance (code splitting, lazy loading, caching, image optimization). Reducing load times and enhancing SEO and accessibility."
  },
  {
    title: "API Integration",
    description: "Integrating RESTful APIs and GraphQL endpoints. Real-time data synchronization and CRUD operations using Axios."
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Collaborating with UX/UI teams to create wireframes and prototypes (Figma, Material UI, Chakra UI). Ensuring mobile-first, cross-browser compatible, and accessible designs."
  },
  {
    title: "Backend Integration",
    description: "Connecting frontend with backend technologies (Node.js, Nest.js, Django). Managing data flow and optimizing API communication."
  },
  {
    title: "Testing & Code Quality",
    description: "Writing and maintaining unit and integration tests (Jest, React Testing Library, Mocha). Conducting code reviews and mentoring junior developers."
  },
  {
    title: "DevOps & CI/CD",
    description: "Setting up and maintaining CI/CD pipelines (GitHub, GitLab, Jenkins, Docker). Version control and deployment automation."
  },
  {
    title: "Project Management & Agile",
    description: "Leading teams, introducing Kanban and Agile methodologies. Managing project workflows and increasing team productivity."
  },
  {
    title: "CMS & Landing Pages",
    description: "Developing and deploying CMS solutions and landing pages (React CMS, Next.js, Django CMS). Custom solutions for eCommerce, admin dashboards, and data management."
  }
];

export default function Services() {
  return (
    <section>
      {/* Mission Statement Banner */}
      <div className="w-full mx-auto mt-4 my-32 rounded-3xl bg-[#2ea6b7] px-8 py-12 flex flex-col">
        <h1 className="text-white text-4xl md:text-5xl font-semibold mb-8 leading-11">
          My mission is to assist startups and enterprises in<br />
          creating an emotional bond between their products and<br />
          satisfied, engaged customers.
        </h1>
        <div className="flex flex-wrap justify-start gap-8 opacity-70">
          {clientLogos.map((logo, i) => (
            <span key={i} className="text-white text-lg font-semibold tracking-wide" style={{fontFamily: 'sans-serif', letterSpacing: '0.05em'}}>{logo}</span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full mx-auto my-16  px-4 flex flex-col md:flex-row gap-8 items-start">
        <h2 className="text-5xl font-bold mb-8 md:mb-0 md:mr-12 min-w-[260px] text-left text-black leading-tight">How Can I<br />Assist You?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl w-full shadow-md p-6 flex flex-col justify-between min-h-[180px] relative">
              <div className="flex flex-row items-start mb-2">
                <div className="w-12 h-12 rounded-full bg-[#ede9fe] flex items-center justify-center mr-4">
                  {/* Icon without background circle, centered in a perfect div circle */}
                  {i === 0 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7v10M7 12h10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12h8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="8" width="8" height="8" stroke="#7c3aed" strokeWidth="2" rx="2" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16l3-6 3 6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                    {i === 4 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7v10M7 12h10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                  {i ===  5&& (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12h8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                    {i === 6 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="8" width="8" height="8" stroke="#7c3aed" strokeWidth="2" rx="2" />
                    </svg>
                  )}
                  {i === 7 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16l3-6 3 6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                     {i === 8 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7v10M7 12h10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-gray-500 leading-snug mt-1">{s.description}</p>
              </div>
              <div className="flex flex-row items-end justify-between mt-6">
                <h3 className="font-bold text-lg text-black">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 