import NavigationBar from "../components/NavigationBar";
import CategoryBar from "../components/CategoryBar";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <NavigationBar />
      <CategoryBar />
      <main className="flex-grow">
        <Blog />
      </main>
      <Footer />
    </div>
  );
} 