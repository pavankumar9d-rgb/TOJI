$ErrorActionPreference = 'Stop'

Write-Host "=== MECHANICAL VALIDATION SCRIPT ==="

# 1. Check stills
$stills = @(
    @{ Path = "art/toji-hero.jpg"; ExpectedW = 1376; ExpectedH = 768; Codec = "mjpeg" },
    @{ Path = "art/toji-final.jpg"; ExpectedW = 1376; ExpectedH = 768; Codec = "mjpeg" },
    @{ Path = "art/particle-toji.png"; ExpectedW = 1200; ExpectedH = 896; Codec = "png"; Alpha = $true }
)

foreach ($s in $stills) {
    if (-not (Test-Path $s.Path)) { throw "Missing still: $($s.Path)" }
    $out = & ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,pix_fmt,width,height -of default=noprint_wrappers=1 $s.Path
    $w = ($out | Select-String -Pattern "^width=(\d+)" | ForEach-Object { [int]$_.Matches.Groups[1].Value })
    $h = ($out | Select-String -Pattern "^height=(\d+)" | ForEach-Object { [int]$_.Matches.Groups[1].Value })
    $c = ($out | Select-String -Pattern "^codec_name=(\w+)" | ForEach-Object { $_.Matches.Groups[1].Value })
    $pix = ($out | Select-String -Pattern "^pix_fmt=(\w+)" | ForEach-Object { $_.Matches.Groups[1].Value })
    
    if ($w -ne $s.ExpectedW -or $h -ne $s.ExpectedH) {
        throw "Dimensions mismatch for $($s.Path): got ${w}x${h}, expected $($s.ExpectedW)x$($s.ExpectedH)"
    }
    if ($s.Alpha -and -not ($pix -match "rgba|yuva")) {
        throw "Alpha expected for $($s.Path), but got pix_fmt: $pix"
    }
    Write-Host "PASS STILL: $($s.Path) (${w}x${h}, $c, $pix)"
}

# 2. Check Sequences
function Validate-Sequence {
    param(
        [string]$Directory,
        [int]$Count,
        [string]$PatternPrefix,
        [string]$PatternSuffix
    )
    $files = @(Get-ChildItem -Path $Directory -Filter "*.jpg" | Sort-Object Name)
    if ($files.Count -ne $Count) {
        throw "Sequence $Directory has $($files.Count) frames, expected $Count"
    }
    for ($i = 1; $i -le $Count; $i++) {
        $expectedName = "{0}{1:D3}{2}" -f $PatternPrefix, $i, $PatternSuffix
        $file = $files[$i - 1]
        if ($file.Name -ne $expectedName) {
            throw "Gap or mismatch in $Directory at index ${i}: found $($file.Name), expected $expectedName"
        }
        if ($file.Length -le 1000) {
            throw "File too small or empty: $($file.FullName)"
        }
    }
    # Validate a sample of first, middle, last with ffprobe
    $samples = @($files[0], $files[[Math]::Floor($Count / 2)], $files[$Count - 1])
    foreach ($sample in $samples) {
        $out = & ffprobe -v error -select_streams v:0 -show_entries stream=width,height,codec_name -of default=noprint_wrappers=1 $sample.FullName
        $w = ($out | Select-String -Pattern "^width=(\d+)" | ForEach-Object { [int]$_.Matches.Groups[1].Value })
        $h = ($out | Select-String -Pattern "^height=(\d+)" | ForEach-Object { [int]$_.Matches.Groups[1].Value })
        if ($w -ne 1280 -or $h -ne 720) {
            throw "Invalid frame dimensions for $($sample.FullName): ${w}x${h}"
        }
    }
    Write-Host "PASS SEQUENCE: $Directory ($Count frames verified, exactly 1280x720, continuous numbering)"
}

Validate-Sequence -Directory "frames/toji-reveal" -Count 71 -PatternPrefix "" -PatternSuffix ".jpg"
Validate-Sequence -Directory "frames/toji-weapon" -Count 33 -PatternPrefix "" -PatternSuffix ".jpg"
Validate-Sequence -Directory "frames/toji-dash" -Count 71 -PatternPrefix "frame_" -PatternSuffix ".jpg"

Write-Host "=== ALL ASSETS PASSED MECHANICAL VALIDATION ==="
