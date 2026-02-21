import azure.cognitiveservices.speech as speechsdk
import os

def generate_audio(text, output_path):
    speech_config = speechsdk.SpeechConfig(
        subscription=os.getenv("AZURE_SPEECH_KEY"),
        region=os.getenv("AZURE_SPEECH_REGION")
    )

    audio_config = speechsdk.audio.AudioOutputConfig(
        filename=output_path
    )

    synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config,
        audio_config=audio_config
    )

    synthesizer.speak_text_async(text).get()