import Container from "../ui/Container";
import FadeInUP from "../animations/FadeInUP";

const steps = [
  "User Upload",
  "Node.js API",
  "Python AI Engine",
  "Azure TTS",
  "FFmpeg Rendering",
  "Adaptive Output"
];

export default function ArchitectureSection() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">

      <Container>
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-purple-500/30 via-purple-500/60 to-purple-500/30 -translate-y-1/2"></div>

        <FadeInUP>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-purple-400 text-xs tracking-[0.35em] uppercase mb-6">
              System Flow
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold">
              How Adaptive AI Works
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              A seamless pipeline transforming content into inclusive formats.
            </p>
          </div>
        </FadeInUP>
<div className="mt-20 relative">
  <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
    
    {[
      "User Upload",
      "Node.js API",
      "Python AI Engine",
      "Azure TTS",
    ].map((step, index) => (
      <div key={index} className="relative flex flex-col items-center">
        
        {/* Circle */}
        <div className="w-40 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md 
        flex items-center justify-center text-sm md:text-base 
        hover:bg-purple-500/10 hover:border-purple-500/40 
        transition-all duration-300">
          {step}
        </div>

        {/* Arrow (hidden on mobile vertical layout) */}
        {index !== 3 && (
          <div className="hidden md:block absolute right-[-60px] top-1/2 -translate-y-1/2 text-purple-500 text-2xl">
            →
          </div>
        )}
      </div>
    ))}
  </div>
</div>
      </Container>
    </section>
  );
}