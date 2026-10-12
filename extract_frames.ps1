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
    $durationText = (& ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 $video | Select-Object -First 1)
    if ([string]::IsNullOrWhiteSpace("$durationText")) {
        throw "ffprobe could not read duration for $video"
    }
    $duration = [double]::Parse("$durationText".Trim(), $culture)
    if ($duration -le 0) { throw "Invalid duration ($duration) for $video" }

    if (Test-Path -LiteralPath $OutputDirectory) {
        $existingFiles = @(Get-ChildItem -LiteralPath $OutputDirectory -File -Filter '*.jpg')
        if ($existingFiles.Count -eq $FrameCount) {
            Write-Host "$OutputDirectory already has $FrameCount valid frames."
            return
        } elseif ($existingFiles.Count -gt 0) {
            throw "Output directory is not empty: $OutputDirectory ($($existingFiles.Count) files found)."
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
