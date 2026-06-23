from PIL import Image

def remove_black_bg(input_path, output_path, threshold=20):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        max_val = max(item[0], item[1], item[2])
        if max_val < threshold:
            # Make dark pixels transparent
            newData.append((0, 0, 0, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

remove_black_bg('public/logo asyin gold.png', 'public/logo-async-gold-transparent.png')
