# Image status

Every photo on the site, where it stands, and what to replace. Regenerated 2026-10-12. Each photo also has a small `-sm.webp` copy (cards, thumbnails) made by the same tool.

* **Supplied by client**: watermarked, treated as real products.
* **INSPIRATION**: temporary stand-ins found online (sofas, dining). Third-party images, shown without
  watermark so the client can see the intended look. Replace them with the client's own work. Some carry
  other people's marks or show a real child (kids' sofa): replace those first.
* **PLACEHOLDER**: stock-style images from an earlier developer, not verified as real products.
* **Used = no**: the file is in the repo but no page shows it (safe to delete).

## How to replace an image (watermark is added automatically)

1. Put the new photo in `source-images/<same folder>/<same name>.jpg` (replace the old file there).
   `source-images/` is local only (git-ignored) and holds the un-watermarked originals.
2. If it was an INSPIRATION photo, delete its line in the `INSPIRATION` list at the top of `tools/build_images.py`,
   so the watermark is applied.
3. Run `python3 tools/build_images.py` (needs `pip install Pillow`), then commit the `images/` change.

Never re-run the script on files already in `images/`: the watermark would be stamped twice.
If `source-images/` is lost, the earlier originals are in git history (commit before
"Watermark all images and convert to real WebP").

Aim for 4:3 landscape, about 1200x900. The site shows photos in 4:3 frames.

| File | Used | Status |
|---|---|---|
| `images/beds/headboard-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/beds/headboard-02.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/beds/headboard-03.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/beds/luxury-bed-set-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/beds/luxury-bed-set-02.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/beds/luxury-bed-set-03.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/curtains/curtain-interior-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/curtains/curtain-interior-02.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/curtains/luxury-curtain-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/deewan/premium-teakwood-deewan-01.webp` | yes | Supplied by client (watermarked) |
| `images/dining/premium-marble-dining-table-01.webp` | yes | INSPIRATION (found online, no watermark): replace with client's own photo, then delete its line in `tools/build_images.py` |
| `images/dining/premium-marble-dining-table-02.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/dining/teakwood-dining-table-01.webp` | yes | INSPIRATION (found online, no watermark): replace with client's own photo, then delete its line in `tools/build_images.py` |
| `images/dressing/dressing-table-led-01.webp` | yes | Supplied by client (watermarked) |
| `images/gallery/gallery-01.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/gallery/gallery-02.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/gallery/gallery-03.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/gallery/gallery-04.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/gallery/gallery-05.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/gallery/gallery-06.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/gallery/gallery-07.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/gallery/gallery-08.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/gallery/gallery-09.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/gas-cabinet/gas-cylinder-cabinet-01.webp` | yes | Supplied by client (watermarked) |
| `images/hero/hero-banner-mobile.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/hero/hero-banner.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/interior/cloth-hangers-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/interior/gas-stove-01.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/interior/interior-work-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/interior/interior-work-02.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/interior/mesh-door-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/office/office-table-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/office/office-table-chair-set-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/office/revolving-chair-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/shoe-rack/footwear-cabinet-01.webp` | yes | Supplied by client (watermarked) |
| `images/shoe-rack/shoe-rack-cupboard-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/shoe-rack/shoe-rack-design-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/shoe-rack/shoe-rack-design-02.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/sofas/chesterfield-sofa-3-seater-01.webp` | yes | INSPIRATION (found online, no watermark): replace with client's own photo, then delete its line in `tools/build_images.py` |
| `images/sofas/chesterfield-sofa-set-01.webp` | yes | INSPIRATION (found online, no watermark): replace with client's own photo, then delete its line in `tools/build_images.py` |
| `images/sofas/kids-sofa-01.webp` | yes | INSPIRATION (found online, no watermark): replace with client's own photo, then delete its line in `tools/build_images.py` |
| `images/sofas/l-shape-sofa-set-01.webp` | yes | INSPIRATION (found online, no watermark): replace with client's own photo, then delete its line in `tools/build_images.py` |
| `images/sofas/premium-sofa-set-01.webp` | yes | INSPIRATION (found online, no watermark): replace with client's own photo, then delete its line in `tools/build_images.py` |
| `images/sofas/premium-sofa-set-02.webp` | yes | INSPIRATION (found online, no watermark): replace with client's own photo, then delete its line in `tools/build_images.py` |
| `images/sofas/premium-sofa-set-03.webp` | yes | INSPIRATION (found online, no watermark): replace with client's own photo, then delete its line in `tools/build_images.py` |
| `images/sofas/recliner-sofa-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/sofas/recliner-sofa-02.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/sofas/recliner-sofa-03.webp` | yes | INSPIRATION (found online, no watermark): replace with client's own photo, then delete its line in `tools/build_images.py` |
| `images/teapoy/modern-teapoy-02.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/teapoy/modern-teapoy-velvet-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/teapoy/modern-teapoy-wooden-01.webp` | yes | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/testimonials/client-01.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/testimonials/client-02.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
| `images/testimonials/client-03.webp` | no | PLACEHOLDER (earlier developer): replace with a real Decent Care photo |
