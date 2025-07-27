import os
import shutil

pasta_alvo = r"C:\Users\Usuario\Downloads"

tipos_arquivos = {
    "Imagens": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"],
    "Documentos": [".pdf", ".doc", ".docx", ".txt", ".xls", ".xlsx", ".ppt", ".pptx"],
    "Videos": [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
    "Musicas": [".mp3", ".wav", ".flac", ".aac"],
    "Compactados": [".zip", ".rar", ".7z", ".tar", ".gz"],
}

def organizar_pasta(caminho):
    for item in os.listdir(caminho):
        item_path = os.path.join(caminho, item)
        
        if os.path.isdir(item_path):
            continue
        
        _, ext = os.path.splitext(item)
        ext = ext.lower() 
        destino_pasta = None
        
        for categoria, exts in tipos_arquivos.items():
            if ext in exts:
                destino_pasta = os.path.join(caminho, categoria)
                break
        
        if not destino_pasta:
            continue
        
        if not os.path.exists(destino_pasta):
            os.makedirs(destino_pasta)
        
        destino_arquivo = os.path.join(destino_pasta, item)
        
        print(f"Movendo {item} → {destino_pasta}")
        shutil.move(item_path, destino_arquivo)

if __name__ == "__main__":
    organizar_pasta(pasta_alvo)
    print("Organização concluída.")
