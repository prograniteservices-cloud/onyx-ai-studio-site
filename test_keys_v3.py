from google import genai
import os
import dotenv

dotenv.load_dotenv(r"C:\Users\heath\Desktop\skills\auth\.env")

keys = [
    os.environ.get("GEMINI_API_KEY"),
    os.environ.get("GEMINI_API_KEY_AIZA"),
    os.environ.get("GEMINI_API_KEY_STUDIO"),
    os.environ.get("GEMINI_API_KEY_STARRY")
]

for i, key in enumerate(keys):
    if not key: continue
    print(f"Testing key {i}...")
    try:
        client = genai.Client(api_key=key)
        for m in client.models.list():
            print(f"  {m.name}")
        print(f"Key {i} works!")
    except Exception as e:
        print(f"Key {i} failed: {e}")
