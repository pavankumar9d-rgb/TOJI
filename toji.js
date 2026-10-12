/* ═══════════════════════════════════════════════════════════
   TOJI FUSHIGURO — 伏黒甚爾
   The Sorcerer Killer · Heavenly Restriction
   Cinematic scroll-driven sequence orchestrator.
   ═══════════════════════════════════════════════════════════ */

/* ───────────────────────── Utility Helpers ───────────────────────── */
const pad   = n => String(n).padStart(3, '0');
const lerp  = (a, b, t) => a + (b - a) * t;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

const coarsePointer = matchMedia('(pointer: coarse)').matches;

function fitCanvas(canvas) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.round(canvas.offsetWidth * dpr);
  const h = Math.round(canvas.offsetHeight * dpr);
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  return canvas.getContext('2d');
}

/* Aspect-ratio preserving cover-draw without watermark masking */
function drawCover(ctx, img, cw, ch) {
  if (!img || !img.naturalWidth) return false;
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = cw / ch;
  let dw = cw, dh = ch, dx = 0, dy = 0;

  if (canvasRatio > imgRatio) {
    dh = cw / imgRatio;
    dy = (ch - dh) / 2;
  } else {
    dw = ch * imgRatio;
    dx = (cw - dw) / 2;
  }

  ctx.drawImage(img, dx, dy, dw, dh);
  return true;
}

/* Resilient frame resolver to prevent blank flashes during fast scrolls */
function getClosestFrame(targetArray, requestedIndex, totalCount) {
  if (targetArray[requestedIndex]?.naturalWidth) return targetArray[requestedIndex];
  for (let d = 1; d < totalCount; d++) {
    const prev = requestedIndex - d;
    if (prev >= 0 && targetArray[prev]?.naturalWidth) return targetArray[prev];
    const next = requestedIndex + d;
    if (next < totalCount && targetArray[next]?.naturalWidth) return targetArray[next];
  }
  return null;
}

/* ───────────────────────── Asset & Preload Engine ───────────────────────── */
const REVEAL_COUNT = 71;
const WEAPON_COUNT = 33;
const DASH_COUNT   = 71;

const revealFrames = new Array(REVEAL_COUNT);
const weaponFrames = new Array(WEAPON_COUNT);
const dashFrames   = new Array(DASH_COUNT);

const loaderEl   = document.getElementById('loader');
const loaderFill = document.getElementById('loaderFill');
const loaderPct  = document.getElementById('loaderPct');
const loaderMsg  = document.getElementById('loaderMsg');

const LOADER_STEPS = [
  'RESTRICTION ZERO / 呪力零',
  'PHYSICAL INVENTORY / 武具同期',
  'SENSORY RECEPTORS / 五感解放',
  'CARNAGE STANDBY / 展開完了'
];

let loadedCount = 0;
let failedAssets = [];
const criticalTotal = REVEAL_COUNT + WEAPON_COUNT + DASH_COUNT;

function loadImageAsset(src, targetArray, index) {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      targetArray[index] = img;
      loadedCount++;
      const progress = clamp(loadedCount / criticalTotal, 0, 1);
      if (loaderFill) loaderFill.style.width = `${(progress * 100).toFixed(1)}%`;
      if (loaderPct) loaderPct.textContent = `${Math.round(progress * 100)}%`;
      if (loaderMsg) loaderMsg.textContent = LOADER_STEPS[Math.min(3, Math.floor(progress * 4))];
      resolve(true);
    };
    img.onerror = () => {
      failedAssets.push(src);
      console.warn(`[Toji Asset Loader] Failed loading: ${src}`);
      resolve(false);
    };
    img.src = src;
  });
}

/* Bounded concurrency queue to prevent network and decode choke */
async function loadQueue(items, concurrency = 8) {
  let index = 0;
  async function worker() {
    while (index < items.length) {
      const current = items[index++];
      await loadImageAsset(current.src, current.array, current.idx);
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
}

async function preloadAllSequences() {
  const leadIn = [];
  const background = [];

  // 1. Lead-in window for instant interaction (first 18 reveal, first 8 weapon, first 15 dash)
  for (let i = 1; i <= REVEAL_COUNT; i++) {
    const item = { src: `frames/toji-reveal/${pad(i)}.jpg`, array: revealFrames, idx: i - 1 };
    if (i <= 18) leadIn.push(item);
    else background.push(item);
  }
  for (let i = 1; i <= WEAPON_COUNT; i++) {
    const item = { src: `frames/toji-weapon/${pad(i)}.jpg`, array: weaponFrames, idx: i - 1 };
    if (i <= 8) leadIn.push(item);
    else background.push(item);
  }
  for (let i = 1; i <= DASH_COUNT; i++) {
    const item = { src: `frames/toji-dash/frame_${pad(i)}.jpg`, array: dashFrames, idx: i - 1 };
    if (i <= 15) leadIn.push(item);
    else background.push(item);
  }

  // Load essential lead-in window first with 8-channel concurrency
  await loadQueue(leadIn, 8);

  // Transition to ready state immediately
  setTimeout(() => {
    if (loaderEl) loaderEl.classList.add('done');
    document.body.classList.add('ready');
    initAllSystems();
  }, 150);

  // Stream in the remaining frames in background with 6-channel concurrency
  loadQueue(background, 6);
}

/* ───────────────────────── System Initialization ───────────────────────── */
function initAllSystems() {
  initRevealScrub();
  initParticlePortrait();
  initWeaponScrub();
  initDashScrub();
  initSpotlightOutro();
  initAmbientDust();
}

/* ═══════════════════════════════════════════════════════════
   ACT I — OPENING SCROLL REVEAL (#top)
   ═══════════════════════════════════════════════════════════ */
let revealCurrentFrame = 0;
let revealTargetFrame  = 0;

function initRevealScrub() {
  const section = document.getElementById('top');
  const canvas  = document.getElementById('revealCanvas');
  const readout = document.getElementById('revealReadout');
  const titleblock = document.getElementById('titleblock');
  const phases = [
    document.getElementById('phase0'),
    document.getElementById('phase1'),
    document.getElementById('phase2'),
    document.getElementById('phase3'),
  ];

  if (!canvas || !section) return;
  const ctx = fitCanvas(canvas);

  // Immediate first frame draw
  if (revealFrames[0] && revealFrames[0].naturalWidth) {
    drawCover(ctx, revealFrames[0], canvas.width, canvas.height);
  }

  let idleTime = 0;

  function renderReveal() {
    if (revealTargetFrame === 0 && window.scrollY === 0) {
      idleTime += 0.035;
      const idleOffset = Math.sin(idleTime) * 2 + 2; // frames 0..4 gentle motion
      revealCurrentFrame = lerp(revealCurrentFrame, idleOffset, 0.08);
    } else {
      revealCurrentFrame = lerp(revealCurrentFrame, revealTargetFrame, 0.15);
    }

    const idx = Math.min(REVEAL_COUNT - 1, Math.max(0, Math.round(revealCurrentFrame)));
    const frameImg = getClosestFrame(revealFrames, idx, REVEAL_COUNT);

    if (frameImg) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCover(ctx, frameImg, canvas.width, canvas.height);
      if (readout) readout.textContent = `FRAME ${pad(idx + 1)} / ${pad(REVEAL_COUNT)}`;
    }

    requestAnimationFrame(renderReveal);
  }

  function onScroll() {
    const rect = section.getBoundingClientRect();
    const totalDist = section.offsetHeight - window.innerHeight;
    if (totalDist <= 0) return;

    const progress = clamp(-rect.top / totalDist, 0, 1);
    revealTargetFrame = progress * (REVEAL_COUNT - 1);

    // Titleblock fade out on advance
    if (titleblock) {
      const titleOpacity = clamp(1 - progress * 4.0, 0, 1);
      titleblock.style.opacity = titleOpacity;
      titleblock.style.transform = `translateY(${-progress * 60}px)`;
    }

    // Phase narrative triggers
    const phaseIndex = Math.min(3, Math.floor(progress * 4));
    phases.forEach((p, i) => {
      if (p) p.classList.toggle('active', i === phaseIndex && progress > 0.04);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    fitCanvas(canvas);
    onScroll();
  }, { passive: true });

  onScroll();
  requestAnimationFrame(renderReveal);
}

/* ═══════════════════════════════════════════════════════════
   ACT II — THREE.JS PARTICLE PORTRAIT (#particles)
   ═══════════════════════════════════════════════════════════ */
function initParticlePortrait() {
  const canvas = document.getElementById('particleCanvas');
  const fallback = document.getElementById('particleFallback');
  if (!canvas) return;

  import('./particle-object.js')
    .then(({ createParticleObject }) => {
      createParticleObject(
        { canvas },
        {
          src: 'art/particle-toji.png',
          count: coarsePointer ? 16000 : 28000,
          size: 2.2,
          sizeVariance: 0.35,
          radius: 120,
          strength: 1.25,
          swirl: 0.8,
          spring: 1.3,
          damping: 0.35,
          drift: 0.2,
          scale: 3.6,
          yOffset: -0.2,
          cameraDistance: 4.1,
          onError: () => {
            if (fallback) fallback.hidden = false;
            canvas.style.display = 'none';
          }
        }
      );
    })
    .catch((err) => {
      console.warn('[Toji Particle Object] Fallback triggered:', err);
      if (fallback) fallback.hidden = false;
      canvas.style.display = 'none';
    });
}

/* ═══════════════════════════════════════════════════════════
   ACT III — WEAPON ARSENAL INTERACTIVE SCRUB (#weapon)
   ═══════════════════════════════════════════════════════════ */
function initWeaponScrub() {
  const stage   = document.getElementById('weaponStage');
  const canvas  = document.getElementById('weaponCanvas');
  const posEl   = document.getElementById('weaponPos');
  const frameEl = document.getElementById('weaponFrame');
  const fillEl  = document.getElementById('weaponFill');
  const thumbEl = document.getElementById('weaponThumb');

  if (!stage || !canvas) return;
  const ctx = fitCanvas(canvas);

  let currentProgress = 0;
  let targetProgress  = 0;
  let isDragging = false;

  function setProgress(p) {
    targetProgress = clamp(p, 0, 1);
  }

  // Draw initial frame
  if (weaponFrames[0] && weaponFrames[0].naturalWidth) {
    drawCover(ctx, weaponFrames[0], canvas.width, canvas.height);
  }

  function renderWeapon() {
    currentProgress = lerp(currentProgress, targetProgress, 0.18);
    const frameIndex = Math.min(WEAPON_COUNT - 1, Math.max(0, Math.round(currentProgress * (WEAPON_COUNT - 1))));
    const frameImg = getClosestFrame(weaponFrames, frameIndex, WEAPON_COUNT);

    if (frameImg) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCover(ctx, frameImg, canvas.width, canvas.height);
    }

    const pct = Math.round(currentProgress * 100);
    if (posEl) posEl.textContent = `POSITION ${String(pct).padStart(2, '0')}%`;
    if (frameEl) frameEl.textContent = `FRAME ${pad(frameIndex + 1)} / ${pad(WEAPON_COUNT)}`;
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (thumbEl) thumbEl.style.left = `${pct}%`;
    if (stage) stage.setAttribute('aria-valuenow', frameIndex + 1);

    requestAnimationFrame(renderWeapon);
  }

  function handlePointer(e) {
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left;
    setProgress(x / rect.width);
  }

  stage.addEventListener('mousedown', (e) => {
    isDragging = true;
    handlePointer(e);
  });
  window.addEventListener('mousemove', (e) => {
    if (isDragging) handlePointer(e);
  });
  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  stage.addEventListener('touchstart', (e) => {
    isDragging = true;
    handlePointer(e);
  }, { passive: true });
  stage.addEventListener('touchmove', (e) => {
    if (isDragging) handlePointer(e);
  }, { passive: true });
  stage.addEventListener('touchend', () => {
    isDragging = false;
  });

  stage.addEventListener('keydown', (e) => {
    const step = 1 / (WEAPON_COUNT - 1);
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      setProgress(targetProgress + step);
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      setProgress(targetProgress - step);
      e.preventDefault();
    }
  });

  window.addEventListener('resize', () => fitCanvas(canvas), { passive: true });
  requestAnimationFrame(renderWeapon);
}

/* ═══════════════════════════════════════════════════════════
   ACT IV — FULL-BLEED DASH SEQUENCE (#dash)
   ═══════════════════════════════════════════════════════════ */
let dashCurrentFrame = 0;
let dashTargetFrame  = 0;

function initDashScrub() {
  const section = document.getElementById('dash');
  const canvas  = document.getElementById('dashCanvas');
  const readout = document.getElementById('dashReadout');

  if (!section || !canvas) return;
  const ctx = fitCanvas(canvas);

  if (dashFrames[0] && dashFrames[0].naturalWidth) {
    drawCover(ctx, dashFrames[0], canvas.width, canvas.height);
  }

  function renderDash() {
    dashCurrentFrame = lerp(dashCurrentFrame, dashTargetFrame, 0.15);
    const idx = Math.min(DASH_COUNT - 1, Math.max(0, Math.round(dashCurrentFrame)));
    const frameImg = getClosestFrame(dashFrames, idx, DASH_COUNT);

    if (frameImg) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCover(ctx, frameImg, canvas.width, canvas.height);
    }

    if (readout) {
      const ms = (idx * (1000 / 24)).toFixed(1);
      readout.textContent = `${ms} ms · SUPERSONIC SPEED`;
    }

    requestAnimationFrame(renderDash);
  }

  function onScroll() {
    const rect = section.getBoundingClientRect();
    const totalDist = section.offsetHeight - window.innerHeight;
    if (totalDist <= 0) return;

    const progress = clamp(-rect.top / totalDist, 0, 1);
    dashTargetFrame = progress * (DASH_COUNT - 1);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    fitCanvas(canvas);
    onScroll();
  }, { passive: true });

  onScroll();
  requestAnimationFrame(renderDash);
}

/* ═══════════════════════════════════════════════════════════
   ACT V — FINAL SPOTLIGHT OUTRO (#spotlight)
   ═══════════════════════════════════════════════════════════ */
function initSpotlightOutro() {
  const section = document.getElementById('spotlight');
  const mask = document.getElementById('spotlightMask');
  const ghostCanvas = document.getElementById('ghostCanvas');

  if (!section || !mask) return;

  function updateSpotlight(x, y) {
    const rect = section.getBoundingClientRect();
    const relX = ((x - rect.left) / rect.width) * 100;
    const relY = ((y - rect.top) / rect.height) * 100;
    mask.style.setProperty('--spot-x', `${relX.toFixed(1)}%`);
    mask.style.setProperty('--spot-y', `${relY.toFixed(1)}%`);
  }

  section.addEventListener('mousemove', (e) => {
    updateSpotlight(e.clientX, e.clientY);
  });
  section.addEventListener('touchmove', (e) => {
    if (e.touches?.[0]) updateSpotlight(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  if (ghostCanvas) {
    import('./ghost-cursor.js')
      .then(({ createGhostCursor }) => {
        const cursor = createGhostCursor(ghostCanvas, {
          color: '#9B1C31',
          trailLength: 24,
          brightness: 1.4,
          edgeIntensity: 0.45
        });
        section.addEventListener('mousemove', (e) => {
          const rect = ghostCanvas.getBoundingClientRect();
          cursor.move(e.clientX - rect.left, e.clientY - rect.top);
        });
        section.addEventListener('mouseleave', () => cursor.leave());
        function anim() {
          cursor.render();
          requestAnimationFrame(anim);
        }
        requestAnimationFrame(anim);
      })
      .catch((err) => console.warn('[Ghost Cursor] Ambient fallback:', err));
  }
}

/* ═══════════════════════════════════════════════════════════
   AMBIENT DUST AIR DISPLACEMENT
   ═══════════════════════════════════════════════════════════ */
function initAmbientDust() {
  const canvas = document.getElementById('dustCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  const particles = Array.from({ length: 40 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: Math.random() * 0.4 + 0.15,
    size: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.25 + 0.08
  }));

  function loop() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y > h) { p.y = 0; p.x = Math.random() * w; }
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      ctx.fillStyle = `rgba(229, 231, 235, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }, { passive: true });

  requestAnimationFrame(loop);
}

// Preload assets and launch
preloadAllSequences();
