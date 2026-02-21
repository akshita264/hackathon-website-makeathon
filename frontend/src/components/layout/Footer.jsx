import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 py-24 overflow-hidden border-t border-white/10">

      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_60%)]"></div>

      <Container className="relative">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold text-xl tracking-wide">
              Adaptive<span className="text-purple-500">AI</span>
            </h3>

            <p className="mt-6 text-sm leading-relaxed max-w-sm">
              An AI-driven accessibility system transforming educational
              content into adaptive text, audio, and video formats —
              empowering inclusive learning.
            </p>
          </div>

          {/* System Stack */}
          <div>
            <h4 className="text-purple-400 font-medium mb-6 tracking-wide">
              Architecture
            </h4>

            <ul className="space-y-3 text-sm">
              <li>React + Tailwind Frontend</li>
              <li>Node.js API Gateway</li>
              <li>Python LangChain Engine</li>
              <li>Azure TTS Integration</li>
              <li>FFmpeg Video Rendering</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-purple-400 font-medium mb-6 tracking-wide">
              Project
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                GitHub Repository
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Hackathon Submission
              </li>
              <li>
                hackathon-team@email.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © 2026 AdaptiveAI — Inclusive Education & Accessibility Enablement System
        </div>

      </Container>
    </footer>
  );
}