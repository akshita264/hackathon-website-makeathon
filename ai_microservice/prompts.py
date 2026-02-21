def simplify_prompt(text):
    return f"""
You are an educational assistant.
Rewrite the following content in very simple language.
Use short sentences and examples.
Do NOT remove meaning.

Content:
{text}
"""

def concept_prompt(text):
    return f"""
Extract key learning information from the content.
Return ONLY valid JSON with:
- topic
- key_concepts
- steps (ordered)

Content:
{text}
"""