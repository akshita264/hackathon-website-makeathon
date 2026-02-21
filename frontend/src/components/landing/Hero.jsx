import Container from "../ui/Container";
import FadeInUp from "../animations/FadeInUP";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">
      
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>

      <Container className="relative grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <FadeInUp>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Adaptive AI Learning <br />
              <span className="text-purple-500">
                for Every Mind
              </span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="mt-6 text-gray-400 text-lg max-w-lg">
              Upload any lesson and instantly transform it into simplified notes,
              audio narration, visual summaries, and personalized formats —
              built for inclusive education.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition font-medium">
                Start Learning
              </button>

              <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition font-medium">
                Watch Demo
              </button>
            </div>
          </FadeInUp>
        </div>

        {/* RIGHT SIDE — Glass AI Preview Panel */}
        <FadeInUp delay={0.3}>
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
              
              <div className="space-y-4">
                <div className="h-4 w-24 bg-purple-500 rounded"></div>
                <div className="h-3 w-full bg-white/10 rounded"></div>
                <div className="h-3 w-5/6 bg-white/10 rounded"></div>
                <div className="h-3 w-2/3 bg-white/10 rounded"></div>

                <div className="mt-6 h-32 bg-black/40 rounded-lg flex items-center justify-center text-gray-400">
                  AI Generating Accessible Lesson...
                </div>
              </div>

            </div>
          </div>
        </FadeInUp>

      </Container>
    </section>
  );
}