from google import genai
from google.genai import types
import os
import dotenv
import time

dotenv.load_dotenv(r"C:\Users\heath\Desktop\skills\auth\.env")
client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY_AIZA"))

def generate_image(prompt, output_file):
    print(f"Generating image: {output_file}...")
    # Trying the flash image model which might be in the free tier
    response = client.models.generate_content(
        model="gemini-2.5-flash-image",
        contents=prompt
    )
    for part in response.candidates[0].content.parts:
        if part.inline_data:
            with open(output_file, "wb") as f:
                f.write(part.inline_data.data)
            print(f"Saved to {output_file}")
            return
    print(f"Failed to find image data in response for {output_file}")

# 1. Chaos Image
generate_image(
    "High-realism cinematic wide shot of chaotic, unstructured business data fragments, dark obsidian textures, sharp noise, floating technical glitches, deep volumetric space, professional editorial lighting, photorealistic, 8k",
    "public/chaos.png"
)

# 2. Refined Image
generate_image(
    "High-realism cinematic wide shot of a dark faceted Onyx gem mark in a bright minimalist ethereal space. The gem has refined everything into perfect, glowing translucent glass UI panels. Ethereal depth, crisp edges, professional lighting, photorealistic, 8k",
    "public/refined.png"
)
