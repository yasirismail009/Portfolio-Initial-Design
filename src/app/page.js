import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import PricingTable from "./components/PricingTable";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-12">
      <Hero />
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}
