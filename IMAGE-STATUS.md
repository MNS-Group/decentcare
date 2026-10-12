# Image status

Every photo on the site, where it stands, and what to replace.
Generated 2026-10-12 from the files in `images/` and the references in the pages.

* **Supplied by client**: the two cabinet photos (footwear, gas cylinder).
* **PLACEHOLDER**: stock-style images added earlier by a previous developer. They are not
  verified as real Decent Care products. Replace them as real photos arrive.
* **Used = no**: the file is in the repo but no page shows it (candidates to delete).

## How to replace an image (watermark is added automatically)

1. Put the new photo in `source-images/<same folder>/<same name>.jpg` (or .png/.webp).
   `source-images/` is local only (git-ignored) and holds the un-watermarked originals.
2. Run `python3 tools/build_images.py` (needs `pip install Pillow`).
3. It writes the real, watermarked WebP into `images/`. Commit the `images/` change.

Never edit files inside `images/` by hand and re-run the script on them: the watermark
would be stamped twice. If `source-images/` is lost, the un-watermarked originals are in
the git history, in the commit before "Watermark all images".

Aim for 4:3 landscape (about 1200x900). The site shows photos in 4:3 frames, so a square
photo loses its top and bottom edges.

| File | Used | Status |
|---|---|---|
| `images/beds/headboard-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/beds/headboard-02.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/beds/headboard-03.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/beds/luxury-bed-set-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/beds/luxury-bed-set-02.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/beds/luxury-bed-set-03.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/curtains/curtain-interior-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/curtains/curtain-interior-02.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/curtains/luxury-curtain-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/deewan/deewan-design-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/deewan/deewan-design-02.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/deewan/deewan-with-storage-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/dining/premium-marble-dining-table-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/dining/premium-marble-dining-table-02.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/dining/teakwood-dining-table-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/dressing/dressing-table-led-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/dressing/dressing-table-led-02.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/gallery/gallery-01.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/gallery/gallery-02.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/gallery/gallery-03.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/gallery/gallery-04.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/gallery/gallery-05.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/gallery/gallery-06.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/gallery/gallery-07.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/gallery/gallery-08.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/gallery/gallery-09.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/gas-cabinet/gas-cylinder-cabinet-01.webp` | yes | Supplied by client (confirm these are real product photos) |
| `images/hero/hero-banner-mobile.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/hero/hero-banner.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/interior/cloth-hangers-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/interior/gas-stove-01.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/interior/interior-work-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/interior/interior-work-02.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/interior/mesh-door-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/logo/decent-care-favicon.webp` | yes | Brand asset (not watermarked). Logo is a placeholder crown design: confirm with client |
| `images/logo/decent-care-logo.webp` | yes | Brand asset (not watermarked). Logo is a placeholder crown design: confirm with client |
| `images/office/office-table-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/office/office-table-chair-set-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/office/revolving-chair-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/shoe-rack/footwear-cabinet-01.webp` | yes | Supplied by client (confirm these are real product photos) |
| `images/shoe-rack/shoe-rack-cupboard-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/shoe-rack/shoe-rack-design-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/shoe-rack/shoe-rack-design-02.webp` | no | PLACEHOLDER: replace with a real Decent Care photo |
| `images/sofas/premium-sofa-set-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/sofas/premium-sofa-set-02.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/sofas/premium-sofa-set-03.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/sofas/recliner-sofa-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/sofas/recliner-sofa-02.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/sofas/recliner-sofa-03.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/teapoy/modern-teapoy-02.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/teapoy/modern-teapoy-velvet-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/teapoy/modern-teapoy-wooden-01.webp` | yes | PLACEHOLDER: replace with a real Decent Care photo |
| `images/testimonials/client-01.webp` | no | Unused (testimonials removed) |
| `images/testimonials/client-02.webp` | no | Unused (testimonials removed) |
| `images/testimonials/client-03.webp` | no | Unused (testimonials removed) |
