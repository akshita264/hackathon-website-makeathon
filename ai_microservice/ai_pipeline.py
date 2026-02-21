from dotenv import load_dotenv
import os
import json
from google import genai

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def generate_adaptive_script(text, level="beginner"):

    prompt = f"""
You are an educational AI.

Rewrite the content for a {level} learner.
Then extract structured learning steps.

Return ONLY valid JSON:
{{
  "topic": "...",
  "simplified_text": "...",
  "steps": ["step1", "step2", "step3"]
}}

Content:
{text}
"""

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt,
    )

    content = response.text.replace("```json", "").replace("```", "").strip()

    try:
        data = json.loads(content)
    except Exception:
        # fallback safe structure (NO 500 error)
        data = {
            "topic": "unknown",
            "simplified_text": text,
            "steps": [text]
        }

    return data