import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">
          <span className="text-white">Adaptive</span>
          <span className="text-purple-500">AI</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-10 text-sm text-gray-300">

          <a
            href="#"
            className="relative group"
          >
            Features
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#"
            className="relative group"
          >
            Demo
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#"
            className="relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>

        {/* CTA */}
       <button
  onClick={() => {
  const section = document.getElementById("upload");
  if (section) {
    const yOffset = -80; // adjust based on navbar height
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}}
  
  className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition"
>
  Get Started
</button>
      </div>
    </nav>
  );
}