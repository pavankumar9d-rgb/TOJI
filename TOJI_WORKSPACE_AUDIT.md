# TOJI WORKSPACE & SCAFFOLD AUDIT (STAGE A)

## 1. Workspace Root & Environment
- **Workspace Path:** `C:\Users\saipa\OneDrive\Desktop\TOJI`
- **Canonical Delivery Repository:** `https://github.com/pavankumar9d-rgb/TOJI.git`
- **Active Git Branch:** `main`
- **Remote Status:** Configured as `origin` to `https://github.com/pavankumar9d-rgb/TOJI.git`
- **Scaffold Reference:** Cloned read-only from `https://github.com/Meghamittal0920/Minato.git` into `TOJI-SOURCE-REFERENCE/` (git-ignored) for structural inspection.
- **Tools Available:**
  - `ffmpeg` version 8.1.1-essentials_build-www.gyan.dev
  - `ffprobe` version 8.1.1-essentials_build-www.gyan.dev
  - PowerShell 7 / Windows PowerShell
  - Native browser and fetch tooling

## 2. Scaffold Architecture & Entry Points (Inspected from TOJI-SOURCE-REFERENCE)
- **Tech Stack:** Vanilla HTML5, CSS3, ES Modules / Vanilla JavaScript. No React, Vite, or Next.js build-step overhead.
- **Entry Points:**
  - `index.html` (Document root)
  - `minato.css` (Main styling)
  - `minato.js` (Main controller and animation orchestrator)
  - `particle-object.js` (Three.js WebGL particle point-cloud system)
  - `ghost-cursor.js` (Pointer / ambient effect)
- **External Dependencies:**
  - Google Fonts (`Shippori Mincho`, `Zen Kaku Gothic New`, `Anton`, `Space Grotesk`, `JetBrains Mono`)
  - Import map for Three.js (`three` @ `0.169.0` via CDN)
- **Sections & IDs in Reference:**
  - `#top` (`.scrub`) — Scroll-scrubbed gaze sequence (71 frames)
  - `#rasengan` (`.ras`) — Left-to-right tracking interaction (33 frames)
  - `#particles` (`.hero`) — Three.js WebGL particle portrait
  - `#hiraishin` (`.hira`) — Hidden/empty section in reference
  - `#dash` (`.dash`) — Scroll-driven full-bleed dash sequence (71 frames)
  - `#legacy` (`.legacy`) — Pointer spotlight & ghost cursor reveal

## 3. Existing Asset Conventions & Flaws Identified
- **Flaws in Reference Implementation:**
  1. **Loader Error Handling:** In `minato.js` line 96, `img.onload = img.onerror = () => { loaded++; ... }` treats network errors or missing images as successful loads, presenting false 100% progress.
  2. **Monolithic Preloading:** Attempts to load all 175 frames at once on startup (`Promise.all(jobs)`), which risks memory pressure and stutter on 8GB RAM / integrated GPU machines.
  3. **Watermark Masking Hack:** Line 42 and lines 50–66 use `maskCorner()` with radial gradients to obscure watermarks in source frames rather than using clean, unwatermarked footage.
  4. **Character Contamination:** All copy, metadata, iconography, Japanese typography, and assets are character-specific to Minato Namikaze.
- **Toji Adaptation Mandate:**
  - Zero Minato assets or references will be served or visible.
  - Remove `maskCorner()`; require clean source footage without watermarks.
  - Implement reliable error handling: failed loads will trigger genuine fallbacks and will not falsely register as complete.
  - Staggered/lazy lead-in frame preloading instead of an all-at-once memory dump.
  - Strictly Toji Fushiguro lore, palette (near-black `#08090B`, silver/ivory `#E5E7EB`, deep crimson `#9B1C31`), and typography.

## 4. Required Toji Target Assets
| Asset ID | Exact Target Path | Required Format / Specs | Role |
|---|---|---|---|
| `TOJI_HERO` | `art/toji-hero.jpg` | High-res still, unwatermarked | Hero fallback / responsive plate |
| `TOJI_FINAL` | `art/toji-final.jpg` | High-res still, unwatermarked | Final spotlight outro |
| `TOJI_PARTICLE` | `art/particle-toji.png` | True transparent PNG cutout | Three.js point-cloud portrait |
| `TOJI_REVEAL_FRAMES` | `frames/toji-reveal/001.jpg`..`071.jpg` | Exactly 71 frames @ 1280x720 | Scroll-driven opening reveal |
| `TOJI_WEAPON_FRAMES` | `frames/toji-weapon/001.jpg`..`033.jpg` | Exactly 33 frames @ 1280x720 | Horizontal pointer weapon scrub |
| `TOJI_DASH_FRAMES` | `frames/toji-dash/frame_001.jpg`..`frame_071.jpg` | Exactly 71 frames @ 1280x720 | Scroll-driven physical rush sequence |

## 5. Next Steps
- Stage A complete.
- Proceed to Stage B: Search, download, and extract Toji media according to Section 2 of master instructions.
- Execute asset gate before any website source files are adapted or modified.
