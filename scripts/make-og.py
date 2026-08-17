#!/usr/bin/env python3
"""Render the Open Graph card.

Drawn rather than generated: the card has to match the site exactly, and
diffusion models cannot hold a precise lattice or render type. Same palette,
same ketupat lattice, same Bodoni Moda and IBM Plex Mono as the pages.
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
SS = 2  # supersample

INK = (18, 16, 26)
INK_DEEP = (12, 10, 18)
BONE = (232, 226, 214)
BONE_FAINT = (110, 104, 96)
GOLD = (201, 162, 39)
GOLD_LIT = (232, 206, 126)

BODONI = "/mnt/d/claude-tmp/bodoni.ttf"
MONO = "/mnt/d/claude-tmp/plexmono.ttf"
OUT = "/mnt/d/aldo-site/public/og.jpg"


def f(path, size, variations=None):
    font = ImageFont.truetype(path, size * SS)
    if variations:
        try:
            font.set_variation_by_axes(variations)
        except Exception:
            pass
    return font


def tracked(d, xy, text, font, fill, tracking=0.0):
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += d.textlength(ch, font=font) + tracking * SS
    return x - xy[0]


def build():
    img = Image.new("RGB", (W * SS, H * SS), INK)
    d = ImageDraw.Draw(img)

    # Vertical ground gradient.
    for y in range(H * SS):
        t = y / (H * SS)
        d.line([(0, y), (W * SS, y)], fill=tuple(int(INK[i] + (INK_DEEP[i] - INK[i]) * t) for i in range(3)))

    # Ketupat lattice, nested diamonds on a 48px grid, faded in from the right
    # so it never sits under the type.
    lat = Image.new("L", (W * SS, H * SS), 0)
    ld = ImageDraw.Draw(lat)
    step = 48 * SS
    for cx in range(0, W * SS + step, step):
        for cy in range(0, H * SS + step, step):
            r = step // 2
            ld.polygon([(cx, cy - r), (cx + r, cy), (cx, cy + r), (cx - r, cy)], outline=90, width=SS)
            r2 = step // 4
            ld.polygon([(cx, cy - r2), (cx + r2, cy), (cx, cy + r2), (cx - r2, cy)], outline=90, width=SS)

    mask = Image.new("L", (W * SS, H * SS), 0)
    md = ImageDraw.Draw(mask)
    for x in range(0, W * SS, 4 * SS):
        t = x / (W * SS)
        v = 0 if t < 0.42 else int(255 * min(1.0, (t - 0.42) / 0.5))
        md.rectangle([x, 0, x + 4 * SS, H * SS], fill=v)
    lat = Image.composite(lat, Image.new("L", lat.size, 0), mask)
    img.paste(Image.new("RGB", img.size, GOLD), (0, 0), lat.point(lambda v: int(v * 0.45)))

    d = ImageDraw.Draw(img)

    pad = 74 * SS

    # Eyebrow
    fe = f(MONO, 17)
    tracked(d, (pad, 92 * SS), "PADANG, INDONESIA", fe, BONE_FAINT, tracking=3.2)

    # Name, Bodoni. Regular then italic gold, as on the site.
    fname = f(BODONI, 82, [16, 500])
    d.text((pad, 132 * SS), "Aldo", font=fname, fill=BONE)
    d.text((pad, 218 * SS), "Rizona", font=fname, fill=GOLD_LIT)

    # Gold rule + thesis
    d.rectangle([pad, 336 * SS, (pad + 54 * SS), 337 * SS + SS], fill=GOLD)
    fth = f(BODONI, 27, [16, 400])
    d.text((pad, 360 * SS), "Security research, open source,", font=fth, fill=BONE)
    d.text((pad, 398 * SS), "and constitutional law.", font=fth, fill=BONE)

    # Proof strip along the bottom
    fs = f(MONO, 19)
    y = 512 * SS
    d.line([(pad, y - 26 * SS), (W * SS - pad, y - 26 * SS)], fill=(48, 44, 58), width=SS)
    x = pad
    x += tracked(d, (x, y), "$2,500 HackerOne", fs, GOLD_LIT, tracking=0.5)
    x += tracked(d, (x, y), "   /   ", fs, BONE_FAINT, tracking=0.5)
    x += tracked(d, (x, y), "2 AI platform findings", fs, BONE, tracking=0.5)
    x += tracked(d, (x, y), "   /   ", fs, BONE_FAINT, tracking=0.5)
    x += tracked(d, (x, y), "7 merged OSS PRs", fs, BONE, tracking=0.5)

    img = img.resize((W, H), Image.LANCZOS)
    img.save(OUT, "JPEG", quality=88, optimize=True, progressive=True)
    return OUT


if __name__ == "__main__":
    import os
    p = build()
    print(f"wrote {p} ({os.path.getsize(p)/1024:.0f} KB)")
