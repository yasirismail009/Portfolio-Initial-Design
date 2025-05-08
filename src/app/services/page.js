import NavigationBar from "../components/NavigationBar";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";

const services = [
  {
    title: "Web Development",
    description: "Transform your digital presence with our cutting-edge web development solutions. We create scalable, secure, and high-performance web applications that drive business growth.",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "Content Management Systems"
    ],
    benefits: [
      "Enhanced User Experience",
      "Improved Performance",
      "Better SEO Rankings",
      "Increased Conversion Rates"
    ],
    useCases: [
      "Business Websites",
      "E-commerce Platforms",
      "Web Applications",
      "Corporate Portals"
    ],
    icon: "💻",
    gradient: "from-[var(--primary)] to-[var(--card-bg)]"
  },
  {
    title: "Mobile Development",
    description: "Stay ahead in the mobile-first world with our comprehensive mobile development services. We build native and cross-platform applications that deliver exceptional user experiences.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Solutions",
      "Mobile UI/UX Design"
    ],
    benefits: [
      "Faster Time to Market",
      "Cost-Effective Solutions",
      "Wider Market Reach",
      "Enhanced User Engagement"
    ],
    useCases: [
      "Mobile Apps",
      "Enterprise Solutions",
      "E-commerce Apps",
      "Social Platforms"
    ],
    icon: "📱",
    gradient: "from-[var(--primary)] to-[var(--card-bg)]"
  },
  {
    title: "UI/UX Design",
    description: "Create memorable user experiences with our user-centered design approach. We combine aesthetics with functionality to deliver intuitive and engaging interfaces.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design"
    ],
    benefits: [
      "Improved User Satisfaction",
      "Reduced Development Time",
      "Higher User Retention",
      "Better Brand Perception"
    ],
    useCases: [
      "Website Redesign",
      "App Interface Design",
      "Brand Identity",
      "User Experience Audit"
    ],
    icon: "🎨",
    gradient: "from-[var(--primary)] to-[var(--card-bg)]"
  },
  {
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing with our comprehensive cloud solutions. We help businesses scale efficiently while maintaining security and performance.",
    features: [
      "Cloud Migration",
      "Serverless Architecture",
      "DevOps Implementation",
      "Cloud Security"
    ],
    benefits: [
      "Scalable Infrastructure",
      "Cost Optimization",
      "Enhanced Security",
      "Improved Reliability"
    ],
    useCases: [
      "Cloud Migration",
      "Microservices Architecture",
      "Data Analytics",
      "Disaster Recovery"
    ],
    icon: "☁️",
    gradient: "from-[var(--primary)] to-[var(--card-bg)]"
  }
];

export default function ServicesPage() {
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-gray-100 leading-relaxed">
            Transforming ideas into digital reality with cutting-edge solutions
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <div className="p-8">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">{service.title}</h3>
                  <p className="text-[var(--card-muted)] mb-8 leading-relaxed">{service.description}</p>
                  
                  {/* Features Section */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-[var(--primary)]">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-[var(--card-muted)]">
                          <span className="text-[var(--secondary)] mr-3 text-xl">✓</span>
                          <span className="group-hover:text-[var(--primary)] transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits Section */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-[var(--primary)]">Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-[var(--card-muted)]">
                          <span className="text-[var(--secondary)] mr-3 text-xl">→</span>
                          <span className="group-hover:text-[var(--primary)] transition-colors duration-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases Section */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-[var(--primary)]">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[var(--muted)] text-[var(--primary)] rounded-full text-sm font-medium"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--primary)]">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[var(--card-muted)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your vision to life with our
            comprehensive services.
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