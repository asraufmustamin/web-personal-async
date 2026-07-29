import sys
import zipfile
import xml.etree.ElementTree as ET

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as zf:
            xml_content = zf.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            # Namespace dictionary
            namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            # Extract all text nodes
            texts = []
            for paragraph in tree.findall('.//w:p', namespaces):
                para_text = []
                for run in paragraph.findall('.//w:r', namespaces):
                    text_elem = run.find('.//w:t', namespaces)
                    if text_elem is not None and text_elem.text:
                        para_text.append(text_elem.text)
                if para_text:
                    texts.append(''.join(para_text))
            
            return '\n'.join(texts)
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    topsis_text = extract_text_from_docx("d:/RAUF/web_personal/2Draf_Jurnal_SPK_TOPSIS_Mustagfir_Format_ELEKTRODA (2).docx")
    with open("C:/Users/Asus/.gemini/antigravity-ide/brain/269117ec-3964-4114-b8a0-4cb58324ed35/scratch/topsis_text.txt", "w", encoding="utf-8") as f:
        f.write(topsis_text)
    
    print("Done")
