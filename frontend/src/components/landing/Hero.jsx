import { useEffect, useState } from "react";
import Container from "../ui/Container";
import FadeInUP from "../animations/FadeInUP";

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.15),transparent_60%)]"></div>

      <Container className="relative grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <FadeInUP>
            <p className="text-purple-400 text-xs tracking-[0.35em] uppercase mb-6">
              Adaptive Intelligence Platform
            </p>
          </FadeInUP>

          <FadeInUP delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              One Lesson.
              <br />
              <span className="text-purple-500">
                Infinite Accessibility.
              </span>
            </h1>
          </FadeInUP>

          <FadeInUP delay={0.2}>
            <p className="mt-8 text-gray-400 text-lg max-w-lg">
              Transform any PDF into simplified notes, narrated lessons,
              visual summaries and adaptive learning formats —
              designed for every learner.
            </p>
          </FadeInUP>

          <FadeInUP delay={0.3}>
            <div className="mt-10 flex gap-6">
              <button className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/30 active:scale-95">
                Experience Platform
              </button>

              <button
                onClick={() => setShowVideo(true)}
                className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition font-medium"
              >
                Watch Demo
              </button>
            </div>
          </FadeInUP>
        </div>

        {/* RIGHT SIDE - Parallax Image */}
        <FadeInUP delay={0.2}>
          <div
            className="relative float-slow"
            style={{
              transform: `translateY(${offset * 0.08}px)`
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-purple-600/20 blur-3xl glow-pulse"></div>

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 shadow-2xl">
              <img
                src="/ai-hero.png"
                alt="AI Adaptive Learning Interface"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </FadeInUP>

      </Container>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">

          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-8 right-8 text-white text-3xl hover:text-purple-400 transition"
          >
            ✕
          </button>

          <div className="w-[90%] md:w-[70%] rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/10">
            <video controls autoPlay className="w-full">
              <source src="/demo-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

    </section>
  );
}