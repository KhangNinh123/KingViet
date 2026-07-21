import os
from PIL import Image

directory = "/Users/MAC/Documents/KingViet/src/assets/images/logos/Logo hieu sach"
for filename in os.listdir(directory):
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):
        filepath = os.path.join(directory, filename)
        img = Image.open(filepath)
        webp_filename = os.path.splitext(filename)[0] + ".webp"
        webp_filepath = os.path.join(directory, webp_filename)
        img.save(webp_filepath, "WEBP")
        print(f"Converted {filename} to {webp_filename}")
        os.remove(filepath)
