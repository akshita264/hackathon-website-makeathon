from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
import os
import json

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.3,
    api_key=os.getenv("OPENAI_API_KEY")
)

def generate_adaptive_script(text, level="beginner"):
    prompt = PromptTemplate(
        input_variables=["text", "level"],
        template="""
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
    )

    chain = LLMChain(llm=llm, prompt=prompt)
    response = chain.run(text=text, level=level)

    return json.loads(response)