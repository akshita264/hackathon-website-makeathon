import Navbar from "./components/layout/Navbar";
import Hero from "./components/landing/Hero";
import AccessibilitySection from "./components/landing/AccessibilitySection";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <AccessibilitySection />
    </div>
  );
}

export default App;