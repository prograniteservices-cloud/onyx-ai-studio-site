from google import genai
from google.genai import types
import os
import dotenv
import time

dotenv.load_dotenv(r"C:\Users\heath\Desktop\skills\auth\.env")
client = genai.Client(api_key=os.environ.get("STITCH_API_KEY"))

def generate_video(prompt, source_image_path, output_file):
    print(f"Generating video: {output_file}...")
    
    with open(source_image_path, "rb") as f:
        image_bytes = f.read()

    operation = client.models.generate_videos(
        model="veo-3.1-generate-preview",
        prompt=prompt,
        image=types.Image(image_bytes=image_bytes, mime_type="image/png"),
        config=types.GenerateVideosConfig(
            duration_seconds=6,
            aspect_ratio="16:9"
        )
    )
    
    print("Video generation started. Waiting for completion...")
    while not operation.done:
        print(".", end="", flush=True)
        time.sleep(10)
        operation = client.models.get_operation(name=operation.name)
    
    video = operation.result.generated_videos[0]
    with open(output_file, "wb") as f:
        f.write(video.video.video_bytes)
    print(f"\nSaved video to {output_file}")

generate_video(
    "Cinematic transition: The chaotic data fragments are sucked into the central dark Onyx prism. The prism glows and refracts the energy, and then perfectly refined glass UI panels emerge and float elegantly in a bright ivory space. Smooth motion, 4k, professional lighting.",
    "public/chaos.png",
    "public/refractive-core.mp4"
)
