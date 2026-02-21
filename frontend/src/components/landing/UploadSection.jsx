import { useState } from "react";
import Container from "../ui/Container";
import FadeInUp from "../animations/FadeInUP";

export default function UploadSection() {
  const [level, setLevel] = useState("Beginner");
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    simulateProcessing();
  };

  const simulateProcessing = () => {
    setIsProcessing(true);

    // Fake 3-second AI processing
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-black to-neutral-900 text-white">
      <Container>

        <FadeInUp>
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Transform Any Lesson{" "}
            <span className="text-purple-500">Instantly</span>
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
            Upload your study material and let our AI generate personalized,
            accessible learning formats in seconds.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="mt-16 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-lg">

            {/* Cognitive Level Selector */}
            <div className="mb-10 text-center">
              <p className="text-sm text-gray-400 mb-4">
                Select Learning Level:
              </p>

              <div className="flex justify-center gap-4">
                {["Beginner", "Intermediate", "Advanced"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setLevel(item)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                      level === item
                        ? "bg-purple-600 text-white"
                        : "border border-white/20 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Upload Area */}
            <label className="block border-2 border-dashed border-purple-500/40 rounded-xl p-12 text-center cursor-pointer hover:border-purple-500 transition">
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />

              {file ? (
                <div>
                  <p className="text-lg font-medium text-purple-400">
                    {file.name}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Selected Level: {level}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-lg font-medium">
                    Drag & Drop PDF Here
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    or click to upload
                  </p>
                </div>
              )}
            </label>

            {/* AI Processing Status */}
            {isProcessing && (
              <div className="mt-10 space-y-4">

                <ProcessingStep text="Analyzing Content Structure..." />
                <ProcessingStep text="Adapting to Cognitive Level..." />
                <ProcessingStep text="Generating Accessible Formats..." />

              </div>
            )}

          </div>
        </FadeInUp>

      </Container>
    </section>
  );
}

/* Reusable Processing Step */
function ProcessingStep({ text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}