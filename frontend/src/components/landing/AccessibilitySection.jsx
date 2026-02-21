import Container from "../ui/Container";
import FadeInUP from "../animations/FadeInUP";

export default function AccessibilitySection() {
  return (
    <section className="py-32 bg-black text-white relative">

      <Container>

        <FadeInUP>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Designed for
              <span className="text-purple-500"> Every Mind</span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Our adaptive engine understands cognitive context and accessibility
              requirements to deliver personalized learning instantly.
            </p>
          </div>
        </FadeInUP>

        <div className="mt-20 grid md:grid-cols-3 gap-10">

          <FadeInUP delay={0.2}>
       <div className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md
hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/10
transition-all duration-500 ease-out cursor-pointer">
              <h3 className="text-xl font-semibold mb-4">
                Cognitive Adaptation
              </h3>
              <p className="text-gray-400">
                Automatically adjusts lesson complexity from beginner
                clarity to advanced depth.
              </p>
            </div>
          </FadeInUP>

          <FadeInUP delay={0.3}>
   <div className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md
hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/10
transition-all duration-500 ease-out cursor-pointer">
              <h3 className="text-xl font-semibold mb-4">
                Multi-Format Output
              </h3>
              <p className="text-gray-400">
                Notes, narrated lessons, visual diagrams and adaptive
                presentations generated in seconds.
              </p>
            </div>
          </FadeInUP>

          <FadeInUP delay={0.4}>
          <div className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md
hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/10
transition-all duration-500 ease-out cursor-pointer">
              <h3 className="text-xl font-semibold mb-4">
                Accessibility First
              </h3>
              <p className="text-gray-400">
                Built to empower learners with diverse sensory,
                cognitive and physical needs.
              </p>
            </div>
          </FadeInUP>

        </div>

      </Container>

    </section>
  );
}