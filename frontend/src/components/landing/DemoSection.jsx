import Container from "../ui/Container";
import FadeInUP from "../animations/FadeInUP";

export default function DemoSection() {
  return (
    <section className="py-36 bg-black text-white relative overflow-hidden">

      {/* Subtle Center Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_60%)]" />

      <Container className="relative">

        {/* Heading */}
        <FadeInUP>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-purple-400 text-xs tracking-[0.35em] uppercase mb-6">
              Live Demonstration
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              From Upload to
              <span className="text-purple-500"> Intelligent Output</span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Watch how our AI transforms educational content into
              accessible, adaptive formats in seconds.
            </p>
          </div>
        </FadeInUP>

        {/* Process Visual */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 items-start">

          {/* Step 1 */}
          <FadeInUP delay={0.2}>
           <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg 
hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/10 
transition-all duration-500 ease-out">
              <p className="text-sm text-purple-400 mb-4">01</p>
              <h3 className="text-lg font-semibold mb-3">
                Upload Material
              </h3>
              <p className="text-gray-400 text-sm">
                PDF, lecture recording, or notes — instantly analyzed.
              </p>
            </div>
          </FadeInUP>

          {/* Step 2 */}
          <FadeInUP delay={0.3}>
           <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg 
hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/10 
transition-all duration-500 ease-out">
              <p className="text-sm text-purple-400 mb-4">02</p>
              <h3 className="text-lg font-semibold mb-3">
                AI Processing
              </h3>
              <p className="text-gray-400 text-sm">
                Content is adapted based on cognitive level
                and accessibility requirements.
              </p>
            </div>
          </FadeInUP>

          {/* Step 3 */}
          <FadeInUP delay={0.4}>
           <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg 
hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/10 
transition-all duration-500 ease-out">
              <p className="text-sm text-purple-400 mb-4">03</p>
              <h3 className="text-lg font-semibold mb-3">
                Adaptive Output
              </h3>
              <p className="text-gray-400 text-sm">
                Simplified notes, narrated lessons, visual diagrams,
                and personalized videos.
              </p>
            </div>
          </FadeInUP>

        </div>

        {/* Video */}
        <FadeInUP delay={0.5}>
          <div className="mt-20 relative group max-w-5xl mx-auto">

            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <video
                controls
                className="w-full"
                poster="/demo-thumbnail.jpg"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl border border-purple-500/20 group-hover:border-purple-500/40 transition pointer-events-none"></div>

          </div>
        </FadeInUP>

      </Container>
    </section>
  );
}