# TOJI FUSHIGURO — ONE-FILE ANTIGRAVITY MASTER INSTRUCTIONS

**Purpose:** Build a polished, cinematic, scroll-driven Toji Fushiguro fan website. This file is the complete brief, asset plan, acquisition procedure, validation checklist, implementation plan, and QA contract. Do not ask the user to provide another prompt, list of URLs, dependency list, or routine decision.

## NON-NEGOTIABLE EXECUTION ORDER

1. Establish the user's `TOJI` GitHub repository as the canonical delivery repository and keep all project work intended for delivery inside that repository.
2. Audit the available project/scaffold without searching for ZIPs or asking the user for extra files.
3. Acquire the Toji stills and all three source video clips from real, accessible URLs and save them locally. Convert the three clips into the exact 71 + 33 + 71 = 175 numbered image frames specified in Section 2.4.
4. Validate every required asset and write a complete report.
5. **If even one required asset is missing, invalid, or not fetched, STOP before modifying any website source code.** Tell the user exactly which file(s) are missing, why, what was attempted, and precisely where each file must be placed. Commit and push the audit/asset report checkpoints if Git access works; do not begin implementation.
6. Only after every required asset passes the gate, implement the website in reviewable increments, committing and pushing each completed milestone.
7. Run the available tests and report truthfully.

**Do not skip, reorder, or weaken this gate.** Downloading an HTML page instead of an image/video does not count as success. A search result, preview thumbnail, watch page, or URL copied from a search result is not a downloaded asset.

---

## 0. ABSOLUTE WORKSPACE AND GIT DELIVERY RULES — READ FIRST

### 0.1 Canonical delivery repository — mandatory

The destination repository for this project is:

`https://github.com/pavankumar9d-rgb/TOJI.git`

- Use this exact repository as `origin` for all project commits and pushes. This repository is the **Toji-only deliverable**. Do not push the finished work to the old reference/scaffold repository.
- The user says this is a fresh repository, but verify instead of assuming it is empty. First inspect the current workspace and Git state. Check `git status --short --branch`, `git remote -v`, `git branch --show-current`, and `git log -1 --oneline` where applicable. Query the destination safely with `git ls-remote --symref https://github.com/pavankumar9d-rgb/TOJI.git HEAD`.
- If the current workspace is already the `TOJI` repository (its `origin` matches the URL above), use it. If it is a different repository, **do not change that repository's remote and do not push to it**. Clone the destination repository into a sibling folder named `TOJI` (or another collision-free folder if `TOJI` already exists) and use that clone as the canonical output project.
- If the destination is empty, keep its fresh history and create/use `main` unless GitHub explicitly reports a different default branch. If it has a README or prior commit, preserve that history and build on its current default branch. Never assume it is empty solely because the user called it fresh.
- Do not search the computer for ZIPs, `*-master.zip`, archives, or downloaded bundles. Do not request that the user provide one. **Use the live current workspace and Git clone URLs only.**
- Keep the original project/scaffold read-only during asset acquisition. If source code is needed and it is not in the current workspace, clone `https://github.com/Meghamittal0920/Minato.git` into a separate temporary sibling folder such as `TOJI-SOURCE-REFERENCE` solely for inspection; do not use its Git history as the destination history and do not push to it. Do not create or look for a ZIP. After the asset gate passes, selectively copy/adapt source files into the canonical `TOJI` repository. If the source repository cannot be cloned, record the error and prepare a fresh lightweight static project only after the asset gate passes.
- Never overwrite, delete, or force-replace existing destination-branch files/history. Review existing files before copying any scaffold. Merge/adapt what is needed; preserve unrelated user-authored files.
- Use the real workspace path printed by the terminal; never assume a drive letter, username, or absolute path.

### 0.2 Git authentication and safety

- Before planning the first push, test GitHub access using `git ls-remote` and check only already-configured authentication tools (for example, `gh auth status` if GitHub CLI is installed). Do not ask for, print, put in the file, or commit passwords, personal access tokens, cookies, private keys, or other credentials. Never paste a token into a remote URL.
- Check `git config user.name` and `git config user.email`. Use existing correct configuration. Do not impersonate the user or invent a personal email if author identity is missing. If identity/authentication cannot be configured from the available environment, continue local work and commits where possible, record the exact blocker, and state the one required manual Git setup step. Do not falsely claim a push succeeded.
- Before each commit, run `git status --short`, inspect `git diff --check`, review the staged diff, and ensure no secrets, unrelated files, source video, cache, build output, credentials, or unlicensed assets were staged. Do not blindly use `git add .` or `git add --all`. Stage explicit reviewed paths.
- Never use `git push --force`, `git reset --hard`, destructive cleanup commands, history rewrites, or branch deletion. Do not amend/squash earlier milestone commits to simulate progress. Never overwrite remote commits.
- Do not commit temporary source videos, raw download responses, browser profiles, cookies, cache folders, node_modules, build output, logs containing secrets, or files that cannot legally be redistributed. Keep the raw downloads in `asset-work/` and exclude them through an appropriate `.gitignore` or explicit staging choices. Do not commit any asset whose redistribution permission is unclear. An asset can be locally inspected without being automatically approved for public GitHub upload.

### 0.3 Regular commit-and-push policy — mandatory

The user explicitly requested frequent commits and pushes to `pavankumar9d-rgb/TOJI`; do not wait until the whole site is finished. Make **small, meaningful, working checkpoint commits**, and push each checkpoint before moving to the next major phase. Do not create empty or artificial commits. Suggested milestones:

1. `docs: add Toji master instructions and workspace audit` — the supplied master file copied to the root as `TOJI_ANTIGRAVITY_MASTER_INSTRUCTIONS.md`, plus `TOJI_WORKSPACE_AUDIT.md` (and a minimal relevant `.gitignore` only if needed).
2. `docs: record Toji asset acquisition and validation results` — `TOJI_ASSET_MANIFEST.md` and `TOJI_ASSET_FETCH_REPORT.md`, only after actual acquisition/validation attempts.
3. `assets: add validated Toji media approved for redistribution` — only if the gate passes and the specific media has adequate permission for public repository redistribution; stage only the approved files actually needed by the site.
4. After the gate passes, create a commit for each meaningful implementation milestone, for example:
   - `feat: build Toji hero and page structure`
   - `feat: add validated scroll-driven sequences`
   - `feat: add interactive Toji sections`
   - `fix: improve loading, accessibility, and responsive behavior`
   - `test: document validation and implementation results`

Adapt commit subjects to real changes; do not create a commit for a feature that was not implemented. If the asset gate fails, commit and push the completed audit/manifest/fetch-report checkpoint(s) only, then stop all website implementation as required. Do not commit fake placeholder assets to make the gate look passed.

For each checkpoint:

1. Review `git diff` and `git status`; run `git diff --check`.
2. Stage only explicitly reviewed files. Inspect `git diff --cached --stat` and `git diff --cached` (redact sensitive output if reporting).
3. Commit with a descriptive message reflecting the actual, completed work.
4. Push immediately to the verified destination branch. On the first push of a local branch use `git push -u origin <branch>` only after verifying that branch matches the destination's intended default/current branch; on later pushes use `git push origin <branch>`.
5. Verify the push actually succeeded by checking the command exit status and comparing local `HEAD` with `origin/<branch>` (for example, `git fetch origin` followed by `git status --short --branch` / `git log -1 --oneline`). Never claim success based only on having run the command.
6. If a push fails, keep the local commit, capture the exact error, check authentication/network and remote branch state, and retry safely once after resolving an evident transient cause. If it still fails, do not force-push; report the unpushed commit hash, branch, exact failure, and next safe step.

At the end, report the destination repository URL, branch, each actual commit hash/message, push verification status, and any local commits still not pushed. Do not expose credentials.

### 0.4 Workspace bootstrap — mandatory

1. Print/show the current workspace root and list its top-level files and folders.
2. Identify whether the current workspace is already the canonical `TOJI` repository or another project folder. Always make the destination repository above the delivery target. Do not push work to the reference scaffold repository.
3. If the canonical destination repository is not the current workspace, clone it directly with Git. If an existing app is in another workspace, inspect it read-only and use it as a source reference. Do not copy or modify its source files in the destination repository until the asset gate passes.
4. Use Git for project setup and source retrieval. Never search for archives or ZIP files.
5. During the asset stage, only create directories, temporary downloads, contact sheets, manifests, validation/fetch reports, the workspace audit, and necessary Git checkpoint documentation/configuration. Do not change application HTML, CSS, JavaScript, shaders, navigation, or build manifests before the gate passes.
6. The finished repository/site must be exclusively a Toji Fushiguro fan website. No other character, character name, artwork, theme, copy, metadata, or animation may remain visible or be used as Toji art.

### Spending and computer limits

- Budget is **₹0 upfront**. No paid models, asset packs, APIs, subscriptions, plugins, trials requiring payment details, or cloud services. Never approve a purchase on the user's behalf.
- Prefer the installed browser, Git, PowerShell, Python, FFmpeg, and existing project dependencies. Do not install a large toolchain just to download or inspect assets.
- The target machine has roughly 8 GB RAM and integrated graphics. Avoid running several browsers, renderers, downloads, frame extractors, or image-processing jobs in parallel.
- Never claim something downloaded, extracted, checked, or tested unless you inspected the result.

---

## 1. STAGE A — AUDIT THE WORKSPACE AND THE EXISTING WEBSITE

Do this before fetching media. Save a short record to `TOJI_WORKSPACE_AUDIT.md` inside the working project, but do not modify the website source code.

1. Show the workspace root and inventory files/folders to a reasonable depth. Exclude dependency/cache directories such as `node_modules`, `.git`, `.next`, `dist`, `build`, and browser caches from noisy listings.
2. Identify the real entry point(s), HTML, CSS, JavaScript modules, import maps, Three.js setup, frame loaders, section IDs, text, nav links, shader code, and existing asset conventions. Read the files that control the animation before making decisions.
3. Confirm whether the project is plain HTML/CSS/vanilla JS, React, Vite, Next.js, or something else. Do not guess based on appearance.
4. Identify how the original page currently uses sequence animation, point-cloud/particle imagery, scroll triggers, pointer interaction, preloading, and fallbacks. Record what exists and what is absent.
5. Use existing code as a structural reference only. Every character-specific output will be Toji. Do not display any original character media as a temporary Toji placeholder.
6. Identify whether the current loaders wrongly treat failed images as successful, preload too many full-resolution frames, hide watermarks with masks/crops, leave dead navigation, or assume all PNGs have transparency. Record the issues; fix only after the gate passes.

If a workspace audit reveals no existing app at all, use the direct Git clone/fresh-project rule above. Do not let the audit become a reason to ask the user where files are.

---

## 2. STAGE B — TOJI ASSET ACQUISITION (MUST HAPPEN BEFORE IMPLEMENTATION)

### 2.1 Required working paths

Use these paths relative to the working project root unless the real codebase has a strong, verified reason to use another layout. If paths must differ, record a single unambiguous mapping in `TOJI_ASSET_MANIFEST.md` and keep it consistent.

| Asset ID | Exact target | Requirement | Used for |
|---|---|---|---|
| `TOJI_HERO` | `art/toji-hero.jpg` | Real Toji image, readable face/silhouette, composition usable as a hero and responsive fallback; no baked-in title/logo/watermark | Hero and accessible fallback |
| `TOJI_FINAL` | `art/toji-final.jpg` | Real Toji or Toji-specific cinematic scene/plate with room for a pointer spotlight; no baked-in text/logo/watermark | Final reveal |
| `TOJI_PARTICLE` | `art/particle-toji.png` | Toji cutout with true alpha transparency; not a white/gray background pretending to be transparent; long edge preferably >=1000 px | Point-cloud/particle portrait source |
| `TOJI_REVEAL_VIDEO` | temporary: `asset-work/toji-reveal-source` plus the real source extension (`.mp4`, `.webm`, or animated `.gif`) | One continuous Toji-focused clip suitable for a reveal sequence, not a video watch page | Extract 71 frames |
| `TOJI_REVEAL_FRAMES` | `frames/toji-reveal/001.jpg` through `071.jpg` | Exactly 71 valid, chronologically ordered 1280×720 frames from the approved reveal video | Opening scroll sequence |
| `TOJI_WEAPON_VIDEO` | temporary: `asset-work/toji-weapon-source` plus the real source extension (`.mp4`, `.webm`, or animated `.gif`) | One continuous, Toji-focused weapon handling/scrub clip; one coherent scene | Extract 33 frames |
| `TOJI_WEAPON_FRAMES` | `frames/toji-weapon/001.jpg` through `033.jpg` | Exactly 33 valid, ordered 1280×720 frames | Pointer/touch weapon interaction |
| `TOJI_DASH_VIDEO` | temporary: `asset-work/toji-dash-source` plus the real source extension (`.mp4`, `.webm`, or animated `.gif`) | One continuous clip showing Toji physical movement/rush/dash with no shot changes that destroy continuity | Extract 71 frames |
| `TOJI_DASH_FRAMES` | `frames/toji-dash/frame_001.jpg` through `frame_071.jpg` | Exactly 71 valid, ordered 1280×720 frames | Scroll-driven movement sequence |

**The three video source files are temporary acquisition inputs.** Keep them until frame validation finishes; they may be removed from the public build afterward if large. Preserve them outside the deployed site if removing them.

Before acquisition, create these directories if they do not already exist: `art/`, `asset-work/`, `frames/toji-reveal/`, `frames/toji-weapon/`, and `frames/toji-dash/`. Creating directories is allowed during the asset stage; do not overwrite existing media.

Optional files must not block completion: `art/weapons/inverted-spear.png`, `art/weapons/inventory-curse.png`, and `art/toji-model.glb`. Only use them if a suitable authentic file is directly available, validated, and has clear enough usage terms. A real `.glb` is not required for a particle portrait. Never invent a GLB or rename a 2D image to `.glb`.

### 2.2 Where and how to search for actual Toji media

Use the built-in browser/search ability available in Antigravity and normal public source pages. Start with these actual discovery URLs, then follow through to the media owner's page and the real file:

- Official Jujutsu Kaisen character pages: `https://jujutsukaisen.jp/character/category4.php`
- Toji image gallery / discovery: `https://jujutsu-kaisen.fandom.com/wiki/Toji_Fushiguro/Image_Gallery`
- Toji image category: `https://jujutsu-kaisen.fandom.com/wiki/Category:Toji_Fushiguro_Images`
- Image search query: `https://www.google.com/search?tbm=isch&q=Toji+Fushiguro+character+art`
- Video search query: `https://www.youtube.com/results?search_query=Toji+Fushiguro+anime+scene+reference`
- General background footage only (rain, smoke, dark corridors, dust, metal textures): `https://www.pexels.com/videos/`, `https://pixabay.com/videos/`, `https://mixkit.co/free-stock-video/`
- License pages for background stock: `https://www.pexels.com/legal-pages/license/`, `https://pixabay.com/service/license-summary/`, `https://mixkit.co/license/`

These are search/source pages, **not file URLs**. Visit each candidate page, locate the actual image/video and the source's normal download control or original-file link, then fetch that file. It is fine to use the normal download mechanism exposed by a website. On the Toji gallery/category pages, inspect animated entries as well as stills; relevant candidate titles may include `Toji cuts down Suguru (Anime).gif`, `Toji exorcises Rainbow Dragon (Anime).gif`, and `Toji finishes off Dagon (Anime).gif`. Treat them only as candidates: verify each actual original file, scene continuity, resolution, and intended use before relying on it. Do not bypass a login, paywall, access control, DRM, or a platform restriction. Do not remove watermarks. Do not use an unrelated character or generic stock actor to fill a Toji asset slot.

For every candidate asset, record:

- source page URL;
- direct file URL only when actually observed/verified;
- author/uploader, if shown;
- source/license/terms page and what it says;
- whether reuse rights are clear, limited, unknown, or not permitted;
- the exact local path it is intended to satisfy;
- fetch attempt result and validation result.

Do not label a copyrighted anime frame as open-licensed just because a wiki or fan page is accessible. Do not label a YouTube watch page as a downloadable MP4. Do not infer a file URL by changing part of another URL. Do not make the website dependent on a remote host at runtime; keep valid acquired assets local. Any license uncertainty must be clearly identified in the manifest; do not claim permission or endorsement that the source does not state.

### 2.3 Specific browser-to-file procedure — perform this, do not merely recommend it

For each required image/video group, do all of the following yourself:

1. Search the listed candidate sources and any additional reputable relevant sources. Try multiple relevant source pages where possible. Do not stop after the first failed search.
2. Open the candidate page and confirm it actually contains Toji media of the right type and scene. For the hero still and particle portrait, look for a high-resolution image or a transparent render. For the three sequences, locate a continuous downloadable video clip; individual still images do not count as sequence source video.
3. Use the site's own download button when present, or a verified direct original media URL. Save/download to a temporary location first. If a UI download produces a file, move it to the required path after confirming it is the actual image/video.
4. For terminal downloads on Windows, use an available tool such as `curl.exe -L --fail --show-error --output <destination> <verified-direct-file-url>` or PowerShell `Invoke-WebRequest` only after confirming a direct media URL. Do not copy placeholder angle-bracket text into commands. Quote URLs and file paths. Never print cookies, authentication tokens, or private browser headers into reports.
5. Check HTTP result, file size, and file signature/decoder. Reject a file that is actually HTML, JSON, a login page, an error page, a thumbnail, an empty response, or a suspiciously tiny file. Verify that an image opens and that video metadata can be read. A successful HTTP response by itself is not success.
6. Retry with another source when a download is blocked or invalid. If the website needs a login, paid access, unsupported download, or blocked origin, do not bypass it; record the exact limitation and move on.
7. Repeat for all required asset groups. **Finish all asset acquisition attempts and collect every failure before reporting. Do not stop at the first missing file.**

Use the web browser for discovery and use the terminal only for a URL already verified as a direct file. Never run a general-purpose web crawl over arbitrary domains, download a whole website, fetch an entire video platform, or search the local computer for unrelated files.

### 2.4 VIDEO DOWNLOAD → FRAME EXTRACTION — MANDATORY, NOT OPTIONAL

**This is a required end-to-end task, not a suggestion:** discover and fetch the actual Toji source video files from accessible sources; save the real video files locally; decode and inspect them; extract the required numbered image frames from those downloaded videos; validate the extracted frames; and then use those exact local frame sequences to build smooth scroll-driven animation. Do not merely provide search links, paste video URLs, embed remote video players, or stop after downloading a video. The website must not depend on third-party video URLs at runtime.

The required extraction counts and exact output names are:

| Source video basename in `asset-work/` (keep its actual extension) | Count | Output path and filename pattern |
|---|---:|---|
| `toji-reveal-source` | 71 | `frames/toji-reveal/001.jpg` … `frames/toji-reveal/071.jpg` (`%03d.jpg`) |
| `toji-weapon-source` | 33 | `frames/toji-weapon/001.jpg` … `frames/toji-weapon/033.jpg` (`%03d.jpg`) |
| `toji-dash-source` | 71 | `frames/toji-dash/frame_001.jpg` … `frames/toji-dash/frame_071.jpg` (`frame_%03d.jpg`) |

Total required sequence output: **175 frames across three separate sequences**. They must come from three suitable continuous Toji clips (or valid animated GIFs), not from still-image downloads and not from fabricated/duplicated frames. Keep the original extension (`.mp4`, `.webm`, or `.gif`); never rename a GIF/WebM to `.mp4`.

#### Required procedure

1. Confirm the actual source video file has been downloaded under the correct basename in `asset-work/`, with its real extension. Verify it decodes using `ffprobe`/`ffmpeg`; reject HTML, JSON, a watch page, an error response, a thumbnail, or a tiny/invalid file.
2. Confirm FFmpeg and FFprobe are available with `ffmpeg -version` and `ffprobe -version`. Do not assume they exist and do not automatically install a heavyweight toolchain. If unavailable, check for an already-installed equivalent decoder. If none exists, report that exact blocker and do not pass the gate.
3. Read the source duration, resolution, codec, and frame rate. Ensure the clip has enough unique source frames and the action remains visually coherent. Create and inspect a contact sheet before treating the clip as suitable.
4. Sample across the **full usable duration**. Never take only the first 71/33 frames of the clip, never sample just the opening few seconds, and never stretch one short moment across the whole interaction. The extraction rate must be computed from the actual clip duration and target count as in the executable PowerShell below.
5. Keep the output directory empty before extraction. Do not overwrite existing user files or previous frames. If the output directory already contains files, inspect them first and choose a safe, separate temporary output directory or ask the user only if a safe choice cannot be made without data loss.
6. After extraction, confirm the exact count, continuous numbering with no gaps, dimensions exactly 1280×720, readable image signatures, and visual consistency. Review contact sheets and inspect representative first/middle/last frames. If the command produces fewer than the required count, diagnose the source or sampling rate; do not duplicate frames to fake the count.
7. If one source clip does not fit, retry other legitimate candidate sources and finish attempts for all three sequences before making the report. Never combine unrelated shots and call them one smooth camera take. Do not remove watermarks; reject watermarked footage instead.

#### PowerShell extraction workflow (run only after all three files are truly downloaded)

This script discovers each video by its basename and actual extension, reads its duration, calculates a sampling rate to spread the requested samples across the full clip, extracts the required frames, and checks the count. It intentionally fails rather than silently overwriting existing frames. Inspect the video/contact sheet first; this script does not replace visual quality or license checks.

```powershell
$ErrorActionPreference = 'Stop'
$culture = [System.Globalization.CultureInfo]::InvariantCulture

function Export-UniformFrames {
    param(
        [Parameter(Mandatory=$true)][string]$VideoBaseName,
        [Parameter(Mandatory=$true)][int]$FrameCount,
        [Parameter(Mandatory=$true)][string]$OutputDirectory,
        [Parameter(Mandatory=$true)][string]$OutputPattern
    )

    $matches = @(Get-ChildItem -LiteralPath 'asset-work' -File | Where-Object {
        $_.BaseName -eq $VideoBaseName -and $_.Extension.ToLowerInvariant() -in @('.mp4', '.webm', '.gif')
    })
    if ($matches.Count -ne 1) {
        throw "Expected exactly one asset-work/$VideoBaseName.(mp4|webm|gif); found $($matches.Count). Do not guess or rename files."
    }

    $video = $matches[0].FullName
    $durationText = (& ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 $video 2>$null | Select-Object -First 1)
    if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace("$durationText")) {
        throw "ffprobe could not read duration for $video"
    }
    $duration = [double]::Parse("$durationText".Trim(), $culture)
    if ($duration -le 0) { throw "Invalid duration ($duration) for $video" }

    if (Test-Path -LiteralPath $OutputDirectory) {
        $existingFiles = @(Get-ChildItem -LiteralPath $OutputDirectory -File -ErrorAction SilentlyContinue)
        if ($existingFiles.Count -gt 0) {
            throw "Output directory is not empty: $OutputDirectory. Do not overwrite/delete existing files; inspect them and select a safe clean output directory first."
        }
    } else {
        New-Item -ItemType Directory -Path $OutputDirectory -Force | Out-Null
    }

    # Spread requested samples across the full source duration, then cap to the exact target count.
    $rate = $FrameCount / $duration
    $rateText = $rate.ToString('0.########', $culture)
    $filter = "fps=$rateText,scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2"
    $output = Join-Path $OutputDirectory $OutputPattern
    & ffmpeg -hide_banner -i $video -vf $filter -frames:v $FrameCount -q:v 2 $output
    if ($LASTEXITCODE -ne 0) { throw "ffmpeg frame extraction failed for $video (exit $LASTEXITCODE)" }

    $frames = @(Get-ChildItem -LiteralPath $OutputDirectory -File -Filter '*.jpg' | Sort-Object Name)
    if ($frames.Count -ne $FrameCount) {
        throw "Expected $FrameCount frames in $OutputDirectory, but found $($frames.Count). Do not fake or duplicate missing frames; inspect duration/FPS/source and record the failure."
    }
    Write-Host "EXTRACTED $($frames.Count) frames from $video into $OutputDirectory"
}

Export-UniformFrames -VideoBaseName 'toji-reveal-source' -FrameCount 71 -OutputDirectory 'frames/toji-reveal' -OutputPattern '%03d.jpg'
Export-UniformFrames -VideoBaseName 'toji-weapon-source' -FrameCount 33 -OutputDirectory 'frames/toji-weapon' -OutputPattern '%03d.jpg'
Export-UniformFrames -VideoBaseName 'toji-dash-source' -FrameCount 71 -OutputDirectory 'frames/toji-dash' -OutputPattern 'frame_%03d.jpg'
```

**Important:** treat successful command exit/count as mechanical extraction only. It does not prove the media is a good match. Inspect the output visually and verify frames are not blank, duplicated, watermarked, from unrelated scenes, or visually inconsistent. Verify dimensions and open/decoder status for every frame. A GIF is valid input only if FFprobe/FFmpeg can decode its animation; inspect that it has real temporal change.

If the source duration/sample rate means the requested output would have to duplicate frames, or FFmpeg cannot yield exactly the required number of unique, valid frames, mark that sequence `FAILED VALIDATION`, specify the exact source and output path, and stop at the asset gate. If FFmpeg/FFprobe and other decoders are missing, report the exact conversion blocker and give the user the source file path and exact frame naming/count still required.

### 2.5 Particle portrait generation from a real acquired still

If `art/particle-toji.png` is not directly available as an actual transparent image:

1. Only attempt conversion if `art/toji-hero.jpg` has passed visual validation and a local cutout/background-removal tool is already available without payment.
2. Preserve a real alpha channel. Inspect the result over both a black and a light checkerboard/background to catch white halos. Do not call a black-background image “transparent.”
3. If no viable local conversion tool exists, do not download a random transparent PNG or fake transparency. Report `art/particle-toji.png` as missing and list the exact requirement.

No reliance on an external image-generation API, paid model, login, or paid credits is allowed.

### 2.6 Libraries and visual references: React Bits and ThreeUI

Use these sites to inform design only after you know the actual app architecture:

- React Bits: `https://reactbits.dev/`
- React Bits source repository: `https://github.com/DavidHDev/react-bits`
- ThreeUI Community source: `https://github.com/MengTo/threeui`
- ThreeUI asset licenses: `https://github.com/MengTo/threeui/blob/main/ASSET-LICENSES.md`
- Three.js docs/license: `https://threejs.org/docs/` and `https://threejs.org/license/`

Rules:

- React Bits primarily provides React components. If the current project is vanilla JS, do not add React just for a component. Recreate at most a small relevant text/scroll/hover effect in the current stack where practical, or skip it.
- ThreeUI Community is a public open-source project, but verify each component and included asset/license and do not copy remote catalog thumbnails/previews as if they were bundled under the repository license. Do not use Pro/Beta/private/paid resources, paid installers, or account-only downloads.
- Do not install multiple overlapping animation libraries. The existing Three.js/custom animation approach may already be enough. Keep only components that improve the actual Toji design and work on an integrated GPU.
- If code/assets are reused, record the exact source, license, and required notices in `THIRD_PARTY_NOTICES.md`. If licensing is not clear, document the uncertainty and do not claim the item is open-source.

---

## 3. STAGE C — ASSET VALIDATION AND THE HARD GATE

This stage happens before any edits to website HTML/CSS/JS. Create `TOJI_ASSET_MANIFEST.md` and `TOJI_ASSET_FETCH_REPORT.md` in the working project.

### 3.1 Mechanical validation

For all required assets:

- Check each file exists at the exact expected path and has nonzero size.
- Decode every image with an available tool. Do not trust the extension alone.
- Confirm all reveal frames `001.jpg`–`071.jpg`, all weapon frames `001.jpg`–`033.jpg`, and all dash frames `frame_001.jpg`–`frame_071.jpg` exist, have no gaps, and are each 1280×720.
- Validate each temporary source video can be opened by the installed media decoder and the resulting frames match the intended source clip.
- Confirm `art/particle-toji.png` has an alpha channel with real nontransparent and transparent pixels; inspect for halo edges.
- Confirm image dimensions and aspect ratios. Recheck all paths as case-sensitive where deployment might be case-sensitive.
- Reject HTML/error documents masquerading as image/video downloads.
- Scan source code only after the gate for links to old assets, but do not edit source code during this stage.

### 3.2 Visual validation

Create a contact sheet for each sequence and inspect it visually. Verify Toji identity and consistent visual style throughout; no unrelated character, hand/face/weapon morphing, watermarks, caption overlays, hard cuts, flicker, repeated frames, black frames, or mismatched art styles. Check the hero and particle image on both dark and light backgrounds. If manual visual inspection is not possible, mark the relevant validation **NOT VERIFIED** and treat it as failed—not passed.

### 3.3 Required report format

`TOJI_ASSET_MANIFEST.md` must include the inventory table, exact local file paths, byte sizes, dimensions, frame counts, source page URLs, verified direct-file URLs where observed, creator/uploader if stated, license/terms URL, license confidence, download date, mechanical validation result, visual validation result, and notes. Never claim a license is cleared unless the source terms support that conclusion.

`TOJI_ASSET_FETCH_REPORT.md` must start with one of:

- `STATUS: PASS — ALL REQUIRED ASSETS FETCHED AND VALIDATED`
- `STATUS: BLOCKED — ASSET GATE NOT PASSED`

Include a summary table for every asset ID with status `PASS`, `MISSING`, `FAILED DOWNLOAD`, `FAILED VALIDATION`, `NOT VERIFIED`, or `OPTIONAL NOT FOUND`. Do not omit failed or unattempted required assets.

For **every missing, invalid, or unverified required item**, include this exact template:

```text
Asset ID:
Exact required filename/path:
Expected format / dimensions / exact frame range:
What this asset is supposed to show:
Sources searched (actual page URLs):
Direct file URL tested (only if truly tested):
Download method attempted:
Exact result/error:
Why it failed or remains unverified:
License/permission status:
What the user must do manually:
Exact destination to put the file:
How to verify the fix:
```

Also include:

- the complete terminal/browser download error when available, with private tokens/cookies redacted;
- which candidate page was only a preview/watch page rather than a file;
- whether the file exists but failed dimensions, frame count, alpha, continuity, or visual inspection;
- exact remaining files needed, grouped by directory;
- if FFmpeg/tooling is missing, exactly what extraction remains and the exact output naming required.

### 3.4 HARD GATE decision

- Try fetching **all** required groups first; do not quit at the first missing item.
- After attempts, validate the whole inventory and write both reports.
- If any required asset has any non-PASS status, **STOP. Do not modify the page, styles, scripts, shaders, package manifests, navigation, or application code.** Leave the source project safe. Respond to the user with the report path and a short exact list of every missing item and where it belongs. Do not proceed into implementation merely with placeholders.
- If every required asset passes, explicitly set `ASSET_GATE: PASS` in both reports and continue to Stage D.
- If the user later supplies the missing assets, resume at validation of those files. Keep already successful downloads and do not repeat good work without reason.

---

## 4. STAGE D — IMPLEMENTATION (ONLY AFTER THE GATE PASSES)

### 4.1 Protect the project and keep the current stack

- Before any code edits, preserve a reversible local backup or Git checkpoint. Do not discard the only copy of the source.
- Keep the existing architecture if it works. If static HTML/CSS/vanilla JS with Three.js import map is present, retain it. Do not migrate to React/Next.js/Vite or install a package manager just to use React Bits/ThreeUI.
- Make focused, testable edits. Use existing working canvas, shader, pointer, scroll, text-reveal, and particle code where useful. Correct bugs rather than rewrite stable math unnecessarily.
- All final asset paths must be local, relative paths. Do not rely on third-party image/video URLs at runtime.
- Remove any stale source-character references from visible text, document title, metadata, alt text, filenames referenced by code, and navigation. Existing source imagery must not be used as Toji. Move/delete legacy character assets from the public output after a backup so the final site contains Toji-only artwork. Keep private backups out of deployed public folders.
- No Lorem Ipsum, dummy buttons, empty anchors, fake loading bars, fabricated statistics, or placeholders hidden behind effects.

### 4.2 Art direction

Build a high-end, cinematic, editorial character experience—not a generic gaming template, crowded HUD, or AI collage.

- Palette: near-black (`#08090B`, `#15171A`), cool ivory/silver text (`#E5E7EB`), subdued gray secondary text, restrained deep-crimson accents (around `#9B1C31`). Use red sparingly; avoid constant neon glow.
- Use large confident typography, quiet negative space, precise grids, strong asymmetry, carefully graded image crops, controlled film grain, and intentional motion timing.
- Avoid random gradients, overused glass cards, borders around every section, dozens of floating stats, fake system readouts, generic cyberpunk decoration, and excessive particle clutter.
- Do not bake titles/logos into imagery. Render text in HTML/CSS. Use font fallbacks; do not make the layout depend on a remote font.
- Website identity and copy must be **Toji Fushiguro only**. Use no other character as a subject, no other character's color/ability motifs, and no leftover source branding. Do not make up official quotes, canonical stats, kill counts, ranks, or unsupported story facts.
- Present it as an unofficial fan-made project. Do not imply affiliation or endorsement by the rights holders.

### 4.3 Suggested page structure and interactions

Adapt safely to the existing code after inspection; these are intended experiences, not a reason to break working architecture.

#### A. Smooth page scrolling and scroll-linked frame animation — mandatory

- The three downloaded-video-derived local sequences are the actual animation frames: `frames/toji-reveal/001.jpg`–`071.jpg`, `frames/toji-weapon/001.jpg`–`033.jpg`, and `frames/toji-dash/frame_001.jpg`–`frame_071.jpg`. Do not replace them with fabricated frames, static-only sections, or a remote embedded video.
- Implement **smooth scroll-linked scrubbing**: as the user scrolls through each pinned/sticky sequence section, scroll progress maps to a target frame index from the first to the last frame. Scrolling up must reverse the sequence accurately. Use `GSAP ScrollTrigger` with an appropriate `scrub` setting if GSAP already exists or can be added cleanly; otherwise use native scroll position plus a single `requestAnimationFrame` loop to ease the displayed frame toward the target frame. Do not update the canvas only on coarse scroll events or draw every frame in one blocking loop.
- Make transitions visually continuous: keep consistent dimensions/aspect ratio and image positioning, draw only the current frame, decode/preload a small lead-in window before each section becomes active, limit download/decode concurrency, and avoid loading all 175 frames into memory at once. Track real loading failures and show a useful poster/fallback if a frame is unavailable.
- **Whole-page smooth scrolling:** retain a smooth, natural, responsive page-scroll feel. If the project uses GSAP already, integrate with it correctly. Add Lenis only if compatible with the actual stack and it can be integrated without breaking ScrollTrigger, keyboard navigation, touch scrolling, anchors, or `prefers-reduced-motion`; do not add it just for fashion. If not appropriate, keep native scrolling and make the frame scrubbing itself smooth. Never hijack the mouse wheel or trap normal scrolling.
- Test forward/backward scrubbing, fast scroll, slow scroll, refreshing halfway down the page, mobile touch, keyboard navigation, reduced-motion mode, and WebGL-unavailable fallback. Reduced-motion mode should show a meaningful still image or a non-scrubbed simplified experience.

#### B. Hero / scroll reveal

- Title: `TOJI FUSHIGURO`; a restrained secondary descriptor such as `SORCERER KILLER` is permitted.
- Use `frames/toji-reveal/001.jpg` through `071.jpg` for the sticky scroll-driven canvas/sequence only after the real source frames pass inspection.
- Give the face enough screen area, use mobile-aware focal positioning, and prevent headings from covering key features.
- Provide a poster image fallback using `art/toji-hero.jpg` if WebGL/canvas fails or reduced-motion is enabled.

#### C. Particle portrait / identity

- Use `art/particle-toji.png` as the pixel source for a conservative Three.js point-cloud portrait. Use `art/toji-hero.jpg` as the non-WebGL/accessible fallback.
- Keep point count and render resolution moderate for an 8 GB RAM/integrated-GPU laptop. Limit device pixel ratio and avoid running more than one heavy canvas needlessly.
- Include semantic text/alt fallback; the meaning must not depend on the animation.

#### D. Weapon interaction

- Use `frames/toji-weapon/001.jpg` through `033.jpg` in a mouse/touch horizontal scrub area.
- Provide keyboard controls or a keyboard-accessible equivalent. Do not trap touch scrolling or hijack the whole page.
- Keep the presentation grounded in Toji's gear and movement; do not invent weapon stats or add weapon imagery that was not validated.

#### E. Physical dash / movement

- Use `frames/toji-dash/frame_001.jpg` through `frame_071.jpg` for a scroll-driven sequence.
- Communicate physical speed, force, silhouette, dust/rain/air displacement—not teleportation, magical circles, or unrelated anime powers.
- Do not obscure the character with needless instrumentation.

#### F. Final spotlight / outro

- Use `art/toji-final.jpg` for a refined pointer spotlight or dual-layer reveal only if the asset genuinely supports it. Keep the behavior usable with keyboard/touch and a static fallback.
- End with concise Toji-specific copy and a small fan-project disclaimer. All navigation must point to real visible sections.

If an effect does not suit the acquired assets, do not force it; choose a simpler polished version using the validated assets. Do not invent additional required files after the asset gate passes. Optional assets stay optional.

### 4.4 Loader and performance requirements

- Fix loaders so `onerror` never counts as a successful image load. A failed file must be recorded and fall back meaningfully; progress must report actual completed loads only.
- **Do not preload all 175 frames at once.** Load critical hero imagery first; then load/predecode the upcoming sequence as its section approaches. Limit concurrency and release unused frame references safely.
- Never show 100% progress unless every required load actually succeeded. Do not keep the user on an endless black/loading screen.
- Remove code that masks a corner or region to hide a watermark (including any equivalent of `maskCorner()` if found). Use clean approved assets instead.
- Cap device pixel ratio sensibly (roughly 1–1.5 on mobile and up to 2 on desktop, test results permitting). Stop or reduce nonessential animations when the tab is hidden or section is far offscreen. Clean up listeners, observers, and animation loops.
- Respect `prefers-reduced-motion`; offer a meaningful still-image/low-motion mode. Keep layout stable; use image dimensions/aspect-ratio where possible.
- WebGL unavailable/context loss, missing sequence frame, local path error, unsupported touch, or JavaScript exception must not produce an unusable blank canvas.

### 4.5 Accessibility and responsive requirements

- Use semantic HTML, logical heading order, useful alt text, working buttons/links, visible keyboard focus, proper accessible names, and readable contrast.
- No information only on hover or via a custom cursor. Provide keyboard and touch equivalents.
- Respect `prefers-reduced-motion`, avoid flashing, and do not force scroll-jacking that prevents normal reading.
- Ensure page works at desktop around 1440×900, mobile around 390×844 and narrow 360 px; test an intermediate width if tooling permits. Avoid horizontal overflow and keep Toji's face/body framed correctly.

---

## 5. STAGE E — TESTING AND HONEST COMPLETION REPORT

Only after implementation, perform available real tests. Do not fabricate a browser test, screenshot, performance number, or pass result.

### Functional tests

- Start the project using the existing documented method or a small local static server compatible with it. Do not rely on `file://` if ES modules/WebGL/CORS need a server.
- Check browser console and network for import errors, local 404s, failed frames, uncaught exceptions, and WebGL/context issues.
- Scroll forwards and backwards through reveal/dash; scrub the weapon interaction with mouse and touch; verify keyboard alternative.
- Verify final pointer reveal, all navigation/anchors, footer, fallbacks, reduced-motion mode, refresh/reload, and a missing-frame fallback if practical.
- Confirm every visible character reference and every loaded character asset is Toji-specific.

### Visual tests

- Inspect desktop, mobile, and narrow mobile. Check face crop, visual consistency between frames, flicker, layout shifts, text overlap, loading stalls, particle density, touch conflicts, and color grading.
- If the browser cannot be automated in this environment, say so and provide the exact manual checks not run.

### `TOJI_IMPLEMENTATION_REPORT.md`

Create this report only after the asset gate passed and implementation work began. Include:

1. Workspace location, project architecture, and entry points.
2. Asset gate status and reference to the manifest/fetch report.
3. Files changed and character-specific content replaced.
4. Implemented sections and interactions.
5. Exact tests performed, viewport sizes tested, and pass/fail status.
6. Known defects, limitations, and reproduction steps.
7. Performance/accessibility measures and third-party license notices.

Do not call the site “fully tested” unless the stated tests actually ran.

---

## 6. REQUIRED FINAL BEHAVIOR

### If blocked at the asset gate

The final response must begin:

`BLOCKED — ASSET GATE NOT PASSED`

Then provide the exact missing file paths grouped by folder, the specific failure reason for every file/group, the source pages/direct file URLs actually tried, and exactly where the user should put each file. Point to `TOJI_ASSET_FETCH_REPORT.md` and `TOJI_ASSET_MANIFEST.md`. State clearly that website implementation was not started. Do not ask the user to make another prompt or locate external source files. The user should only need to put the named missing files into the named folders, then tell Antigravity to resume validation.

### If all assets pass and implementation is complete

Report the actual asset-gate pass, the important implementation changes, the checks that were truly run, and any unresolved issues. Point to `TOJI_ASSET_MANIFEST.md`, `TOJI_ASSET_FETCH_REPORT.md`, and `TOJI_IMPLEMENTATION_REPORT.md`. Also list every actual commit hash/message, the `pavankumar9d-rgb/TOJI` branch, and whether each checkpoint push was verified.

### Final execution command

**Execute this file from top to bottom now. Establish `https://github.com/pavankumar9d-rgb/TOJI.git` as the canonical delivery repository. Do not search for ZIPs or archives. Audit the workspace, inspect the source scaffold from Git if needed, attempt every required Toji asset group, validate all downloads, and write the full missing-assets report if anything fails. Commit and push each completed audit/asset checkpoint to the destination repository, but stop before application-code changes unless the asset gate passes. After it passes, implement and test in meaningful, incremental commits and push after every checkpoint. Never force-push, never push to the source scaffold, and never report a commit or push as successful without verifying it. Do not ask me for any extra input that this file can resolve itself.**
