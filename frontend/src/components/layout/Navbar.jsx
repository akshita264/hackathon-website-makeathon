import Container from "../ui/Container";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <Container className="flex items-center justify-between h-16">
        <div className="text-lg font-semibold tracking-wide">
          NeuroLearn AI
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">
            Features
          </a>
          <a href="#" className="hover:text-white transition">
            Accessibility
          </a>
          <a href="#" className="hover:text-white transition">
            Demo
          </a>
        </div>

        <button className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-sm font-medium">
          Get Started
        </button>
      </Container>
    </nav>
  );
}