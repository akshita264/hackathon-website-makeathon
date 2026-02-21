from PIL import Image, ImageDraw, ImageFont
import textwrap

def create_scene(text, path):
    img = Image.new("RGB", (1280, 720), "white")
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default()

    wrapped = textwrap.fill(text, 40)
    draw.text((100, 300), wrapped, fill="black", font=font)

    img.save(path)