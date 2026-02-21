import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/landing/Hero";
import AccessibilitySection from "./components/landing/AccessibilitySection";
import UploadSection from "./components/landing/UploadSection";
import DemoSection from "./components/landing/DemoSection";
import ArchitectureSection from "./components/landing/ArchitectureSection";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden animate-pageEnter">
      <Navbar />
      <Hero />
      <AccessibilitySection />
      <UploadSection />
      <DemoSection />
      <ArchitectureSection />
      <Footer />
    </div>
  );
}

export default App;