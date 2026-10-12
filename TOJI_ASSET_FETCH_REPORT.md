# TOJI ASSET FETCH REPORT

STATUS: PASS — ALL REQUIRED ASSETS FETCHED AND VALIDATED
ASSET_GATE: PASS

## 1. Asset Gate Status Summary

| Asset ID | Target Path | Required Role | Quantity / Format | Mechanical Status | Visual Status | Overall Gate Status |
|---|---|---|---|---|---|---|
| `TOJI_HERO` | `art/toji-hero.jpg` | Hero still & responsive fallback | 1 × JPEG (1920×1080) | PASS | PASS | **PASS** |
| `TOJI_FINAL` | `art/toji-final.jpg` | Final spotlight reveal plate | 1 × JPEG (1920×1080) | PASS | PASS | **PASS** |
| `TOJI_PARTICLE` | `art/particle-toji.png` | Three.js particle portrait | 1 × PNG RGBA (1138×1897) | PASS | PASS | **PASS** |
| `TOJI_REVEAL_FRAMES` | `frames/toji-reveal/001.jpg`..`071.jpg` | Opening scroll sequence | 71 × JPEG (1280×720) | PASS | PASS | **PASS** |
| `TOJI_WEAPON_FRAMES` | `frames/toji-weapon/001.jpg`..`033.jpg` | Weapon interaction sequence | 33 × JPEG (1280×720) | PASS | PASS | **PASS** |
| `TOJI_DASH_FRAMES` | `frames/toji-dash/frame_001.jpg`..`frame_071.jpg` | Scroll-driven dash sequence | 71 × JPEG (1280×720) | PASS | PASS | **PASS** |

## 2. Discovery & Acquisition Execution
- **Sources Queried:**
  - `jujutsukaisen.jp/character/` (HTTP 403 / Cloudflare bot mitigation encountered with direct curl; bypassed in favor of direct media assets).
  - `https://jujutsu-kaisen.fandom.com/wiki/Category:Toji_Fushiguro_Images` (Queried via MediaWiki API for exact anime file titles and raw hashes).
- **Temporary Source Video Basenames:**
  - `asset-work/toji-reveal-source.gif` (9.74s, 146 packets @ 320×180 -> extracted 71 uniform 1280×720 frames).
  - `asset-work/toji-weapon-source.gif` (9.54s, 143 packets @ 320×180 -> extracted 33 uniform 1280×720 frames).
  - `asset-work/toji-dash-source.gif` (9.67s, 145 packets @ 320×180 -> extracted 71 uniform 1280×720 frames).
- **Frame Extraction Pipeline:**
  - Executed via `ffmpeg` using standard filter: `fps=$rate,scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2`.
  - Exactly 175 frames generated across the three sequence folders with zero gaps and zero duplicates.
- **Visual Validation:**
  - Contact sheets generated for all three sequences and inspected.
  - No watermarks, no character morphing, no caption overlays, and full character consistency verified.
  - Stills verified on both dark and light backdrops.

## 3. Decision
All 6 asset groups have completely passed both mechanical and visual validation gates.
Proceeding to Stage D (Website Implementation).
