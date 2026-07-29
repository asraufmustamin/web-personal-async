import fitz  # PyMuPDF
import os

output_dir = r"C:\Users\Asus\.gemini\antigravity-ide\brain\269117ec-3964-4114-b8a0-4cb58324ed35\scratch"
os.makedirs(output_dir, exist_ok=True)

pdfs = [
    (r"d:\RAUF\web_personal\BUKU PANDUAN SISITEM INFOMASI DESA CENRANA.pdf", "buku_panduan"),
    (r"d:\RAUF\web_personal\REV_2022233037_LAPORAN HASIL_ ASRAUF MUSTAMIN.pdf", "laporan_hasil"),
]

for pdf_path, prefix in pdfs:
    print(f"\n{'='*80}")
    print(f"PROCESSING: {os.path.basename(pdf_path)}")
    print(f"{'='*80}")
    
    doc = fitz.open(pdf_path)
    print(f"Total pages: {doc.page_count}")
    
    # Extract text (first 30 pages or all)
    text_file = os.path.join(output_dir, f"{prefix}_text.txt")
    with open(text_file, "w", encoding="utf-8") as f:
        for page_num in range(min(doc.page_count, 50)):
            page = doc[page_num]
            text = page.get_text()
            f.write(f"\n--- PAGE {page_num + 1} ---\n")
            f.write(text)
    print(f"Text extracted to: {text_file}")
    
    # Extract images
    img_count = 0
    img_dir = os.path.join(output_dir, f"{prefix}_images")
    os.makedirs(img_dir, exist_ok=True)
    
    for page_num in range(doc.page_count):
        page = doc[page_num]
        images = page.get_images(full=True)
        for img_idx, img in enumerate(images):
            xref = img[0]
            try:
                pix = fitz.Pixmap(doc, xref)
                if pix.n < 5:  # GRAY or RGB
                    img_path = os.path.join(img_dir, f"page{page_num+1}_img{img_idx+1}.png")
                    pix.save(img_path)
                else:  # CMYK: convert to RGB
                    pix2 = fitz.Pixmap(fitz.csRGB, pix)
                    img_path = os.path.join(img_dir, f"page{page_num+1}_img{img_idx+1}.png")
                    pix2.save(img_path)
                img_count += 1
            except Exception as e:
                print(f"  Error extracting image on page {page_num+1}: {e}")
    
    print(f"Images extracted: {img_count} images to {img_dir}")
    doc.close()

print("\n\nDONE! All content extracted.")
