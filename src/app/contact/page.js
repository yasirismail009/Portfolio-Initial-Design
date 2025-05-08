import NavigationBar from "../components/NavigationBar";
import CategoryBar from "../components/CategoryBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <NavigationBar />
      <CategoryBar />
      <main className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 