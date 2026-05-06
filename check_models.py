import google.generativeai as genai
import os
import dotenv

dotenv.load_dotenv(r"C:\Users\heath\Desktop\skills\auth\.env")
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

print("Available models:")
for m in genai.list_models():
    print(f"{m.name}: {m.supported_generation_methods}")
