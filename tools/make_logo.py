#!/usr/bin/env python3
"""Draw the Decent Care sofa mark once, output SVG + PNG icons into images/logo/.

The sofa follows the client's round logo (filled back cushion with outlined arms and seat, small legs), redrawn in the site's gold.
Usage: python3 tools/make_logo.py   (needs Pillow)
"""
from pathlib import Path
from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parent.parent / "images" / "logo"
GOLD, DARK = "#D1AF47", "#0B0B0E"
# (kind, x, y, w, h, radius, mode, stroke-width)   viewBox 0 0 64 64
SHAPES = [
    ("rect", 14, 12, 36, 19, 7, "fill", 0),        # back cushion
    ("rect", 4, 24, 14, 22, 6.5, "line", 2.8),     # left arm
    ("rect", 46, 24, 14, 22, 6.5, "line", 2.8),    # right arm
    ("rect", 16, 33, 32, 11, 4, "line", 2.8),      # seat
    ("rect", 11, 48, 6, 4, 1.5, "fill", 0),        # legs
    ("rect", 47, 48, 6, 4, 1.5, "fill", 0),
]
TUFTS = []                                          # (kept for future use)


def svg(background):
    body = []
    for _, x, y, w, h, r, mode, sw in SHAPES:
        if mode == "fill":
            body.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{GOLD}"/>')
        else:
            body.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="none" stroke="{GOLD}" stroke-width="{sw}"/>')
    for cx, cy in TUFTS:
        body.append(f'<path d="M{cx-2.2} {cy}h4.4M{cx} {cy-2.2}v4.4" stroke="{DARK}" stroke-width="1.6" stroke-linecap="round"/>')
    inner = "".join(body)
    if background:
        inner = f'<rect width="64" height="64" rx="14" fill="{DARK}"/><g transform="translate(6.4 7) scale(.8)">{inner}</g>'
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Decent Care">{inner}</svg>\n'


def png(size, background):
    k = size * 4 / 64                                   # 4x supersampling
    im = Image.new("RGBA", (size * 4, size * 4), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    if background:
        d.rounded_rectangle((0, 0, size * 4 - 1, size * 4 - 1), radius=14 * k, fill=DARK)
        ox, oy, sc = 6.4, 7, .8
    else:
        ox, oy, sc = 0, 0, 1
    T = lambda v, o: (v * sc + o) * k
    for _, x, y, w, h, r, mode, sw in SHAPES:
        half = sw / 2
        box = (T(x - half, ox), T(y - half, oy), T(x + w + half, ox) , T(y + h + half, oy))
        box = (T(x - half, ox), T(y - half, oy), T(x + w + half, ox), T(y + h + half, oy))
        if mode == "fill":
            d.rounded_rectangle((T(x, ox), T(y, oy), T(x + w, ox), T(y + h, oy)), radius=r * sc * k, fill=GOLD)
        else:
            d.rounded_rectangle(box, radius=(r + half) * sc * k, outline=GOLD, width=max(1, round(sw * sc * k)))
    for cx, cy in TUFTS:
        for a, b, c, e in ((cx - 2.2, cy, cx + 2.2, cy), (cx, cy - 2.2, cx, cy + 2.2)):
            d.line((T(a, ox), T(b, oy), T(c, ox), T(e, oy)), fill=DARK, width=max(1, round(1.6 * sc * k)))
    return im.resize((size, size), Image.LANCZOS)


OUT.mkdir(parents=True, exist_ok=True)
(OUT / "decent-care-mark.svg").write_text(svg(False))
(OUT / "favicon.svg").write_text(svg(True))
png(32, True).save(OUT / "favicon-32.png")
png(180, True).save(OUT / "apple-touch-icon.png")
png(512, True).save(OUT / "decent-care-logo.png")
print("logo files written")
