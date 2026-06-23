from PIL import Image

input_path = 'public/logo asyin gold.png'
img = Image.open(input_path).convert("RGB")
width, height = img.size

# Check corners
colors = [
    img.getpixel((0, 0)),
    img.getpixel((width-1, 0)),
    img.getpixel((0, height-1)),
    img.getpixel((width-1, height-1))
]
print("Corner colors:", colors)
