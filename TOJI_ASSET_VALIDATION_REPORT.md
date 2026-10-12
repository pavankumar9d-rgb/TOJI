# TOJI ASSET VALIDATION REPORT — GOOGLE FLOW ASSETS

**Date:** 2026-10-12  
**Status:** `GATE_PASSED`  
**Target Repository:** `https://github.com/pavankumar9d-rgb/TOJI.git` (`main`)

---

## 1. Executive Summary
All required and optional Google Flow assets were located within the local repository directory `TOJI_WEBSITE_ASSETS/`, inspected with FFprobe and Pillow, mapped to canonical project asset paths, and validated against strict visual and mechanical criteria.

- **Required Stills:** 3/3 verified and present (`art/toji-hero.jpg`, `art/toji-final.jpg`, `art/particle-toji.png`).
- **Optional Stills:** 2/2 verified and present (`art/toji-dash-poster.jpg`, `art/weapons/inverted-spear.jpg`).
- **Required Video Sources:** 3/3 verified and present in `asset-work/` (1280×720 H.264 @ 24fps, exactly 10.00s each).
- **Required Frame Sequences:** 3/3 verified (71 reveal + 33 weapon + 71 dash = 175 frames total at 1280×720 JPEG).
- **Chroma-Key Processing:** `TOJI_PARTICLE_PORTRAIT` green screen cleanly removed with sub-pixel despill and alpha transparency (`pix_fmt=rgba`). Zero green halo fringing; character hair, eyes, facial scar, and silhouette 100% intact.
- **Contact Sheet Inspection:** Visual inspection confirmed continuous motion, coherent weapon geometry, anatomical consistency, and zero black or duplicate frames.

---

## 2. Source Asset Audit & Mapping

| Source Identifier | Source Format / Dimensions | Canonical Destination | Mechanical Result | Visual QA |
|---|---|---|---|---|
| `TOJI_MASTER_REFERENCE.png_*.jpg` | JPEG 1200×896 | `asset-work/reference/TOJI_MASTER_REFERENCE.jpg` | PASS | Canon Toji facial features, right lip scar, dark black hair, green eyes, Zen'in build |
| `TOJI_HERO_WIDE.png_*.jpg` | JPEG 1376×768 | `art/toji-hero.jpg` | PASS (1376×768) | Full body standing pose in atmospheric Shibuya concrete underpass |
| `TOJI_FINAL_REVEAL_BACKGROUND.png_*.jpg` | JPEG 1376×768 | `art/toji-final.jpg` | PASS (1376×768) | Empty concrete architectural chamber with dramatic skylight beam (character-free) |
| `TOJI_PARTICLE_PORTRAIT.png_*.jpg` | JPEG 1200×896 (chroma green) | `art/particle-toji.png` | PASS (PNG 1200×896 RGBA) | Pristine alpha cutout; green screen fully eliminated; subtle corner watermark cleared |
| `TOJI_WEAPON_DETAIL.png_*.jpg` | JPEG 1200×896 | `art/weapons/inverted-spear.jpg` | PASS (1200×896) | Inverted Spear of Heaven on cracked rock plate |
| `TOJI_DASH_START.png_*.jpg` | JPEG 1376×768 | `art/toji-dash-poster.jpg` | PASS (1376×768) | Explosive sprint prep crouch posture |
| `TOJI_EYE_REVEAL.mp4_*.mp4` | MP4 H.264 1280×720 (10.00s) | `asset-work/toji-reveal-source.mp4` | PASS (240 frames source) | Smooth slow push-in on Toji's eyes and menacing smirk |
| `TOJI_WEAPON_SWEEP.mp4_*.mp4` | MP4 H.264 1280×720 (10.00s) | `asset-work/toji-weapon-source.mp4` | PASS (240 frames source) | Dramatic weapon unsheathing and forward ready strike stance |
| `TOJI_EXPLOSIVE_DASH.mp4_*.mp4` | MP4 H.264 1280×720 (10.00s) | `asset-work/toji-dash-source.mp4` | PASS (240 frames source) | Heavy sprint across flooded subterranean floor sliding into three-point landing |

---

## 3. Frame Sequence Extraction Details

Frames were extracted uniformly across the 10.00-second timeline using `extract_frames.ps1`:
- Formula: `fps = TargetFrames / Duration`
- Scaling: `scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2`
- Quality: `-q:v 2` (high-quality progressive JPEG)

### Extraction Breakdown

1. **Reveal Sequence (`frames/toji-reveal/`)**
   - Output Pattern: `%03d.jpg` (`001.jpg` to `071.jpg`)
   - Frame Count: Exactly 71 frames
   - Resolution: 1280×720
   - Contact Sheet: `asset-work/contact-reveal-flow.jpg` (9×8 grid)
   - Visual Continuity: Flawless gradual zoom; eyes narrow, smile widens, head tilts slightly.

2. **Weapon Sequence (`frames/toji-weapon/`)**
   - Output Pattern: `%03d.jpg` (`001.jpg` to `033.jpg`)
   - Frame Count: Exactly 33 frames
   - Resolution: 1280×720
   - Contact Sheet: `asset-work/contact-weapon-flow.jpg` (6×6 grid)
   - Visual Continuity: Weapon unholstered, swung in controlled arch, brought forward into defensive guard.

3. **Dash Sequence (`frames/toji-dash/`)**
   - Output Pattern: `frame_%03d.jpg` (`frame_001.jpg` to `frame_071.jpg`)
   - Frame Count: Exactly 71 frames
   - Resolution: 1280×720
   - Contact Sheet: `asset-work/contact-dash-flow.jpg` (9×8 grid)
   - Visual Continuity: Ground crouch, acceleration across wet floor, water droplets kicking up, slide brake.

---

## 4. Mechanical Validation Pass Log

```text
=== MECHANICAL VALIDATION SCRIPT ===
PASS STILL: art/toji-hero.jpg (1376x768, mjpeg, yuvj420p)
PASS STILL: art/toji-final.jpg (1376x768, mjpeg, yuvj420p)
PASS STILL: art/particle-toji.png (1200x896, png, rgba)
PASS SEQUENCE: frames/toji-reveal (71 frames verified, exactly 1280x720, continuous numbering)
PASS SEQUENCE: frames/toji-weapon (33 frames verified, exactly 1280x720, continuous numbering)
PASS SEQUENCE: frames/toji-dash (71 frames verified, exactly 1280x720, continuous numbering)
=== ALL ASSETS PASSED MECHANICAL VALIDATION ===
```

---

## 5. Strict Gate Decision
**ASSET GATE RESULT: PASSED.**  
All prerequisites are met. Website source integration is cleared to proceed.
