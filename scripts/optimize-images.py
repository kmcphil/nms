"""Resize content photos and emit WebP siblings. Run from repo root:
python scripts/optimize-images.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path('public/images')
MAX_EDGE = 2000
QUALITY = 82
EXTS = {'.jpg', '.jpeg', '.png'}


def main() -> None:
    for path in sorted(ROOT.rglob('*')):
        if path.suffix.lower() not in EXTS or path.name.startswith('.'):
            continue
        img = Image.open(path)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        w, h = img.size
        long_edge = max(w, h)
        if long_edge > MAX_EDGE:
            scale = MAX_EDGE / long_edge
            img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
        img.save(path, 'JPEG', quality=QUALITY, optimize=True, progressive=True)
        img.save(path.with_suffix('.webp'), 'WEBP', quality=QUALITY, method=6)
        print(path)


if __name__ == '__main__':
    main()
