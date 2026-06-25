import os
from PIL import Image

files = ['logo-async.png', 'logo_async.png', 'logo_async_1.png']
public_dir = 'd:/RAUF/web_personal/public'

for f in files:
    try:
        path = os.path.join(public_dir, f)
        with Image.open(path) as img:
            print(f"{f}: {img.width}x{img.height}, mode={img.mode}")
            
            # Remove black background script idea:
            # If image has alpha, great. If it's a solid black background, convert near-black to transparent
            img = img.convert("RGBA")
            datas = img.getdata()
            newData = []
            for item in datas:
                # item is (R, G, B, A)
                # If it's black or very dark (e.g. R<30, G<30, B<30)
                if item[0] < 30 and item[1] < 30 and item[2] < 30:
                    newData.append((255, 255, 255, 0)) # transparent
                else:
                    newData.append(item)
            
            img.putdata(newData)
            out_path = os.path.join(public_dir, 'no_bg_' + f)
            img.save(out_path, "PNG")
            print(f"Saved {out_path}")
    except Exception as e:
        print(f"Error processing {f}: {e}")
