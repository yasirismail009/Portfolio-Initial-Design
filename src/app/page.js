import NavigationBar from "./components/NavigationBar";
import CategoryBar from "./components/CategoryBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Tools from "./components/Tools";
import Portfolio from "./components/Portfolio";
import PricingTable from "./components/PricingTable";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <NavigationBar />
      <CategoryBar />
      <Hero />
      <Services />
      <About />
      <Tools />
      <Portfolio />
      <PricingTable />
      <Contact />
      <Testimonials />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
}
