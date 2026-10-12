# TOJI ASSET MANIFEST — GOOGLE FLOW ASSETS

`ASSET_GATE: PASS`

## 1. Inventory Summary

| Asset ID | Expected Name | Actual Source Path | Format / Codec | Dimensions / Duration | Chosen Destination | Validation Result | Notes |
|---|---|---|---|---|---|---|---|
| `TOJI_MASTER_REFERENCE` | `TOJI_MASTER_REFERENCE.png` | `TOJI_WEBSITE_ASSETS/TOJI_MASTER_REFERENCE.png_20261012201158.jpg` | JPEG / mjpeg | 1200×896 | `asset-work/reference/TOJI_MASTER_REFERENCE.jpg` | PASS | Identity reference only: facial scar, messy black hair, green eyes, muscular frame |
| `TOJI_HERO` | `TOJI_HERO_WIDE.png` | `TOJI_WEBSITE_ASSETS/TOJI_HERO_WIDE.png_20261012201158.jpg` | JPEG / mjpeg | 1376×768 | `art/toji-hero.jpg` | PASS | Main hero artwork; full body standing pose in dark Shibuya basement |
| `TOJI_FINAL` | `TOJI_FINAL_REVEAL_BACKGROUND.png` | `TOJI_WEBSITE_ASSETS/TOJI_FINAL_REVEAL_BACKGROUND.png_20261012201158.jpg` | JPEG / mjpeg | 1376×768 | `art/toji-final.jpg` | PASS | Background plate without character; concrete pillars and light shaft |
| `TOJI_PARTICLE` | `TOJI_PARTICLE_PORTRAIT.png` | `TOJI_WEBSITE_ASSETS/TOJI_PARTICLE_PORTRAIT.png_20261012201158.jpg` | PNG / RGBA | 1200×896 | `art/particle-toji.png` | PASS | Processed via local despill & alpha chromakey; pure RGBA, zero green fringing, clean hair and shoulder edges |
| `TOJI_WEAPON_DETAIL` | `TOJI_WEAPON_DETAIL.png` | `TOJI_WEBSITE_ASSETS/TOJI_WEAPON_DETAIL.png_20261012201158.jpg` | JPEG / mjpeg | 1200×896 | `art/weapons/inverted-spear.jpg` | PASS | Optional prop detail: Inverted Spear of Heaven on cracked stone |
| `TOJI_DASH_START` | `TOJI_DASH_START.png` | `TOJI_WEBSITE_ASSETS/TOJI_DASH_START.png_20261012201158.jpg` | JPEG / mjpeg | 1376×768 | `art/toji-dash-poster.jpg` | PASS | Optional movement sequence poster: low three-point sprint crouch |
| `TOJI_EYE_REVEAL` | `TOJI_EYE_REVEAL.mp4` | `TOJI_WEBSITE_ASSETS/TOJI_EYE_REVEAL.mp4_20261012201158.mp4` | MP4 / H.264 | 1280×720 @ 24fps (10.00s) | `frames/toji-reveal/001.jpg` .. `071.jpg` | PASS (71 frames) | Continuous eye/head zoom and reveal; uniform extraction across 10s clip |
| `TOJI_WEAPON_SWEEP` | `TOJI_WEAPON_SWEEP.mp4` | `TOJI_WEBSITE_ASSETS/TOJI_WEAPON_SWEEP.mp4_20261012201158.mp4` | MP4 / H.264 | 1280×720 @ 24fps (10.00s) | `frames/toji-weapon/001.jpg` .. `033.jpg` | PASS (33 frames) | Continuous weapon draw and sweep; uniform extraction across 10s clip |
| `TOJI_EXPLOSIVE_DASH` | `TOJI_EXPLOSIVE_DASH.mp4` | `TOJI_WEBSITE_ASSETS/TOJI_EXPLOSIVE_DASH.mp4_20261012201158.mp4` | MP4 / H.264 | 1280×720 @ 24fps (10.00s) | `frames/toji-dash/frame_001.jpg` .. `frame_071.jpg` | PASS (71 frames) | Continuous physical sprint and slide; uniform extraction across 10s clip |

## 2. Total Counts & Verification
- **Total Validated Image Sequences:** 3 sequences (71 + 33 + 71 = 175 frames total)
- **Total Sequence Dimensions:** Exactly 1280×720 JPEG
- **Total Validated Stills:** 3 required stills (`toji-hero.jpg`, `toji-final.jpg`, `particle-toji.png`) + 2 optional stills (`toji-dash-poster.jpg`, `art/weapons/inverted-spear.jpg`)
- **Particle Cutout Transparency:** 100% true RGBA, anti-aliased edge alpha, complete chroma-green suppression
- **All Assets Local & Relative:** Yes (`art/` and `frames/`)
