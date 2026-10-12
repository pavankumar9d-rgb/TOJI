# 伏黒甚爾 · TOJI FUSHIGURO

> **The Sorcerer Killer · Heavenly Restriction (天与呪縛)**  
> Cinematic scroll-driven web experience built with Vanilla HTML5, CSS3, JavaScript (ES6 modules), HTML5 Canvas, and Three.js.

---

## Overview

A high-craft editorial tribute to **Toji Fushiguro** from *Jujutsu Kaisen*. Featuring continuous 60fps canvas scroll scrubbing, Three.js 3D point-cloud particle portrait physics, and interactive cursed weapon mechanics.

## Architecture & Features

- **Act I — Opening Scroll Reveal (`#top`):** 71-frame continuous head and eye reveal sequence driven by sticky scroll position with 4-phase narrative transitions.
- **Act II — Three.js Particle Portrait (`#particles`):** Real-time 3D point-cloud interactive portrait with cursor proximity dispersion and instant physical reflex reassembly.
- **Act III — Cursed Arsenal (`#weapon`):** 33-frame interactive weapon strike arc scrubber with touch swipe, mouse drag, and keyboard navigation (`ArrowLeft` / `ArrowRight`).
- **Act IV — Supersonic Dash (`#dash`):** 71-frame physical acceleration sprint across a flooded subterranean corridor with live displacement telemetry.
- **Act V — Spotlight Outro (`#spotlight`):** Dual-layer radial spotlight tracking with WebGL fluid ghost cursor ambient trail.

## Tech Stack

- **Core:** Vanilla HTML5 / CSS3 / ES6 Modules (Zero frameworks, zero build step)
- **3D Graphics:** Three.js (`three@0.169.0` via browser import map)
- **Animation Engine:** Single `requestAnimationFrame` interpolation loop with lead-in preloading and closest-frame fallback

---

*Non-commercial fan tribute. Jujutsu Kaisen characters and motifs are the property of Gege Akutami, Shueisha, and MAPPA.*
