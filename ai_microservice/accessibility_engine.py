def build_accessibility_plan(user_needs, ai_output):
    plan = {
        "topic": ai_output["topic"],
        "text": ai_output["simplified_text"],
        "steps": ai_output["steps"],
        "modes": {}
    }

    if user_needs.get("blind"):
        plan["modes"]["audio"] = True

    if user_needs.get("deaf"):
        plan["modes"]["video"] = True
        plan["modes"]["captions"] = True

    if user_needs.get("cognitive"):
        plan["modes"]["visual"] = True

    return plan