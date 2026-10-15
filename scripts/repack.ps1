param()
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$src  = Join-Path $root 'src'
$dist = Join-Path $root 'dist'

# 1. Read current version
$manifestPath = Join-Path $src 'manifest.json'
$manifest = Get-Content $manifestPath -Encoding UTF8 | ConvertFrom-Json
$current = $manifest.version
$parts = $current -split '\.'
$major = [int]$parts[0]
$minor = [int]$parts[1]
$patch = [int]$parts[2]

$patchVer = "$major.$minor.$($patch + 1)"
$minorVer = "$major.$($minor + 1).0"
$majorVer = "$($major + 1).0.0"

Write-Host "Current version: $current" -ForegroundColor Yellow
Write-Host ""
Write-Host "Select version bump:" -ForegroundColor Cyan
Write-Host "  [1] patch  -> $patchVer"
Write-Host "  [2] minor  -> $minorVer"
Write-Host "  [3] major  -> $majorVer"
Write-Host "  [0] skip   -> keep $current"
Write-Host ""

$choice = Read-Host "Choice (0-3)"
$newVer = switch ($choice) {
  '1' { $patchVer }
  '2' { $minorVer }
  '3' { $majorVer }
  default { $current }
}

# Helper: write UTF-8 without BOM
function Write-UTF8NoBOM($Path, $Content) {
  $utf8 = New-Object System.Text.UTF8Encoding $false
  [System.IO.File]::WriteAllText($Path, $Content, $utf8)
}

if ($newVer -ne $current) {
  Write-Host "Updating version: $current -> $newVer" -ForegroundColor Green

  # Update src/manifest.json
  $m = Get-Content $manifestPath -Encoding UTF8 -Raw
  $m = $m -replace '("version"s*:s*)"[^"]*"', ('$1"' + $newVer + '"')
  Write-UTF8NoBOM $manifestPath $m

  # Update package.json
  $pkgPath = Join-Path $root 'package.json'
  $p = Get-Content $pkgPath -Encoding UTF8 -Raw
  $p = $p -replace '("version"s*:s*)"[^"]*"', ('$1"' + $newVer + '"')
  Write-UTF8NoBOM $pkgPath $p

  Write-Host "Version updated in manifest.json and package.json" -ForegroundColor Green
} else {
  Write-Host "Keeping current version: $current" -ForegroundColor Green
}

# 2. Repackage
if (Test-Path $dist) { Remove-Item -LiteralPath $dist -Recurse -Force }
New-Item -ItemType Directory -Path $dist | Out-Null
Copy-Item -Path (Join-Path $src '*') -Destination $dist -Recurse -Force

$zipName = "bookmarksync-$newVer.zip"
$zip = Join-Path $dist $zipName
if (Test-Path $zip) { Remove-Item -LiteralPath $zip -Force }
Compress-Archive -Path (Join-Path $dist '*') -DestinationPath $zip

Write-Host "OK: $zip" -ForegroundColor Green
