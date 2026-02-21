import subprocess

def generate_video(scene_dir, output_video):
    cmd = [
        "ffmpeg",
        "-y",
        "-framerate", "1",
        "-i", f"{scene_dir}/scene_%d.png",
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        output_video
    ]
    subprocess.run(cmd, check=True)