import { useState } from "react";
import Container from "../ui/Container";
import FadeInUP from "../animations/FadeInUP";

export default function UploadSection() {
  const [file, setFile] = useState(null);
  const [stage, setStage] = useState("idle"); 
  // idle | processing | text | audio | video | done

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setStage("processing");

    setTimeout(() => setStage("text"), 1500);
    setTimeout(() => setStage("audio"), 3000);
    setTimeout(() => setStage("video"), 4500);
    setTimeout(() => setStage("done"), 5500);
  };

  return (
   <section
  id="upload"
  className="py-32 bg-black text-white relative"
>
      <Container>

        <FadeInUP>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-purple-400 text-xs tracking-[0.35em] uppercase mb-6">
              Start Transforming
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold">
              Upload Your Lesson
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              AI adapts your material into text, audio, and video outputs.
            </p>
          </div>
        </FadeInUP>

        <FadeInUP delay={0.2}>
          <div className="mt-16 max-w-3xl mx-auto">

            {stage === "idle" && (
              <label className="flex flex-col items-center justify-center h-56 border-2 border-dashed border-white/20 rounded-3xl bg-white/5 backdrop-blur-lg cursor-pointer hover:border-purple-500/40 transition">
                <p className="text-gray-400">
                  Drag & Drop PDF or Click to Upload
                </p>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}

            {(stage === "processing" ||
              stage === "text" ||
              stage === "audio" ||
              stage === "video" ||
              stage === "done") && (
              <div className="space-y-6">

                {/* Processing Indicator */}
                {stage === "processing" && (
                  <div className="text-purple-400 animate-pulse">
                    Initializing AI Engine...
                  </div>
                )}

                {/* Text */}
                {["text", "audio", "video", "done"].includes(stage) && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg
                  hover:-translate-y-2 transition-all duration-500">
                    <h3 className="font-semibold mb-2">Text Notes Generated</h3>
                    <p className="text-gray-400 text-sm">
                      Structured and simplified lesson content ready.
                    </p>
                  </div>
                )}

                {/* Audio */}
                {["audio", "video", "done"].includes(stage) && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg
                  hover:-translate-y-2 transition-all duration-500">
                    <h3 className="font-semibold mb-2">Audio Narration Created</h3>
                    <p className="text-gray-400 text-sm">
                      AI-generated voice explanation available.
                    </p>
                  </div>
                )}

                {/* Video */}
                {["video", "done"].includes(stage) && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg
                  hover:-translate-y-2 transition-all duration-500">
                    <h3 className="font-semibold mb-2">Adaptive Video Rendered</h3>
                    <p className="text-gray-400 text-sm">
                      Personalized visual lesson ready.
                    </p>
                  </div>
                )}

              </div>
            )}

          </div>
        </FadeInUP>

      </Container>
    </section>
  );
}