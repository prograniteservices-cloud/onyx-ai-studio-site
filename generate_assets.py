import os
import base64
from google.cloud import aiplatform
from vertexai.preview.vision_models import ImageGenerationModel

# Path to your service account key
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = r"C:\Users\heath\Desktop\skills\auth\keys\vape-shop-gcp-key.json"

aiplatform.init(project="vape-494900", location="us-central1")

def generate_image(prompt, output_file):
    model = ImageGenerationModel.from_pretrained("imagegeneration@006")
    images = model.generate_images(
        prompt=prompt,
        number_of_images=1,
        aspect_ratio="16:9",
        language="en",
    )
    images[0].save(location=output_file, include_generation_parameters=False)
    print(f"Image saved to {output_file}")

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
