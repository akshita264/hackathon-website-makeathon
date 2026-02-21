from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from pydantic import BaseModel
import os

from ai_microservice.ai_pipeline import generate_adaptive_script
from ai_microservice.accessibility_engine import build_accessibility_plan
from ai_microservice.tts_azure import generate_audio
from ai_microservice.scene_generator import create_scene
from ai_microservice.video_generator import generate_video

app = FastAPI(title="Inclusive Learning AI")

# ✅ ONLY text required now
class AIRequest(BaseModel):
    text: str


@app.post("/process-content")
def process_content(data: AIRequest):

    try:
        # Default values applied internally
        level = "beginner"
        user_needs = {}

        ai_output = generate_adaptive_script(data.text, level)
        lesson = build_accessibility_plan(user_needs, ai_output)

        os.makedirs("scenes", exist_ok=True)
        os.makedirs("output", exist_ok=True)

        # ✅ Safe iteration
        for i, step in enumerate(lesson.get("steps", [])):
            create_scene(step, f"scenes/scene_{i}.png")

        # ✅ Safe checks
        if lesson.get("modes", {}).get("audio"):
            generate_audio(lesson.get("text", ""), "output/audio.wav")

        if lesson.get("modes", {}).get("video"):
            generate_video("scenes", "output/video.mp4")

        return {
            "status": "success",
            "lesson_plan": lesson
        }

    except Exception as e:
        # NEVER return 500 blindly again
        return {
            "status": "error",
            "message": str(e)
        }