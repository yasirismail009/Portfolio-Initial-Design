import NavigationBar from "../components/NavigationBar";
import CategoryBar from "../components/CategoryBar";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function ProjectsPage() {
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
            My Projects
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-gray-100 leading-relaxed">
            Explore my latest work and creative solutions
          </p>
        </div>
      </section>

      <main className="flex-grow">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
} 