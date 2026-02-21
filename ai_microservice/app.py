from fastapi import FastAPI
from pydantic import BaseModel
import os

from ai_pipeline import generate_adaptive_script
from accessibility_engine import build_accessibility_plan
from tts_azure import generate_audio
from scene_generator import create_scene
from video_generator import generate_video

app = FastAPI(title="Inclusive Learning AI")

class AIRequest(BaseModel):
    text: str
    level: str
    user_needs: dict

@app.post("/process-content")
def process_content(data: AIRequest):
    ai_output = generate_adaptive_script(data.text, data.level)
    lesson = build_accessibility_plan(data.user_needs, ai_output)

    os.makedirs("scenes", exist_ok=True)
    os.makedirs("output", exist_ok=True)

    # Generate visuals
    for i, step in enumerate(lesson["steps"]):
        create_scene(step, f"scenes/scene_{i}.png")

    # Generate audio if needed
    if lesson["modes"].get("audio"):
        generate_audio(lesson["text"], "output/audio.wav")

    # Generate video if needed
    if lesson["modes"].get("video"):
        generate_video("scenes", "output/video.mp4")

    return {
        "status": "success",
        "lesson_plan": lesson
    }