#!/usr/bin/env python3
"""Build the site's images from untouched originals.

    source-images/<folder>/<name>.(jpg|png|webp)   ->   images/<folder>/<name>.webp

* Writes genuine WebP (the old files were JPEGs with a .webp extension).
* Stamps a subtle "DECENT CARE" watermark on every photo.
* Skips logo/, testimonials/ (not photos of products).

The originals folder is git-ignored. Always run this from the originals, never
on files already in images/, or the watermark would be stamped twice.

Usage:  python3 tools/build_images.py            (needs: pip install Pillow)
        python3 tools/build_images.py --no-mark  (convert only)
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SRC, OUT = ROOT / "source-images", ROOT / "images"
SKIP_DIRS = {"logo", "testimonials"}
TEXT = "DECENT CARE"
QUALITY = 82


def place(name, size):
    """Return (anchor, y_fraction) so the mark survives the CSS crops.

    Product photos are shown in 4:3 frames with object-fit: cover, so a square
    1024x1024 file loses its top and bottom 12.5%. The hero is cropped much
    harder (wide on desktop, narrow on phones), so it gets a centred mark.
    """
    w, h = size
    if "hero" in name:
        return "center", 0.74
    if abs(w / h - 1) < 0.02:          # square source, cropped to 4:3 on the site
        return "right", 0.80
    return "right", 0.93


def draw_mark(img, anchor, y_frac):
    w, h = img.size
    font = ImageFont.load_default(size=max(14, round(w * 0.034)))
    track = font.size * 0.22
    widths = [font.getlength(c) for c in TEXT]
    total = sum(widths) + track * (len(TEXT) - 1)
    margin = w * 0.04
    x0 = (w - total) / 2 if anchor == "center" else w - margin - total
    y = h * y_frac - font.size
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    for dx, dy, fill, stroke in ((0, 0, (255, 255, 255, 215), (0, 0, 0, 150)),):
        x = x0 + dx
        for ch, cw in zip(TEXT, widths):
            d.text((x, y + dy), ch, font=font, fill=fill, stroke_width=max(1, round(font.size * 0.07)), stroke_fill=stroke)
            x += cw + track
    return Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")


def main():
    mark = "--no-mark" not in sys.argv
    n = 0
    for src in sorted(SRC.rglob("*")):
        if src.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
            continue
        rel = src.relative_to(SRC)
        out = (OUT / rel).with_suffix(".webp")
        out.parent.mkdir(parents=True, exist_ok=True)
        img = Image.open(src).convert("RGB")
        if mark and rel.parts[0] not in SKIP_DIRS:
            img = draw_mark(img, *place(rel.name, img.size))
        if "favicon" in rel.name:
            img = img.resize((128, 128), Image.LANCZOS)
        img.save(out, "WEBP", quality=QUALITY, method=6)
        n += 1
    print(f"built {n} images")


if __name__ == "__main__":
    main()
