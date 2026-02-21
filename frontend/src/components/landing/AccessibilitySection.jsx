import Container from "../ui/Container";
import FadeInUp from "../animations/FadeInUP";

export default function AccessibilitySection() {
  return (
    <section className="py-32 bg-black text-white">
      <Container>

        <FadeInUp>
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Built for <span className="text-purple-500">Every Learning Style</span>
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
            Our AI adapts lessons based on cognitive level, accessibility needs,
            and interaction patterns — ensuring effective participation for all learners.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <FadeInUp delay={0.3}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition">
              <h3 className="text-xl font-semibold mb-4">Cognitive Adaptation</h3>
              <p className="text-gray-400">
                Beginner, Intermediate, or Advanced — content adjusts automatically
                to match knowledge level.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition">
              <h3 className="text-xl font-semibold mb-4">Multi-Format Output</h3>
              <p className="text-gray-400">
                Notes, Audio Narration, Visual Summaries, and Personalized Videos —
                generated instantly.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.5}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition">
              <h3 className="text-xl font-semibold mb-4">Accessibility First</h3>
              <p className="text-gray-400">
                Designed for diverse cognitive, sensory, and physical needs —
                enabling inclusive education.
              </p>
            </div>
          </FadeInUp>

        </div>

      </Container>
    </section>
  );
}