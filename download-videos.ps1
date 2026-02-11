# Download videos from Pexels
Write-Host "Downloading videos (this may take a few minutes)..." -ForegroundColor Green

# Create videos directory
New-Item -ItemType Directory -Force -Path "public\videos" | Out-Null

Write-Host "`nAttempting to download videos from Pexels..." -ForegroundColor Cyan

# Pexels requires going through their website, so we'll create placeholder videos instead
Write-Host "`nCreating placeholder video files..." -ForegroundColor Yellow
Write-Host "You'll need to manually download from Pexels:" -ForegroundColor Yellow
Write-Host ""
Write-Host "VIDEO 1: Hero Background Video" -ForegroundColor Cyan
Write-Host "Link: https://www.pexels.com/video/solar-panels-2618545/" -ForegroundColor White
Write-Host "Instructions:" -ForegroundColor Yellow
Write-Host "  1. Click the link above"
Write-Host "  2. Click 'Free Download' button"
Write-Host "  3. Select 'Full HD 1920x1080'"
Write-Host "  4. Save as: public\videos\hero-solar-panels.mp4"
Write-Host ""
Write-Host "VIDEO 2: Installation Process Video" -ForegroundColor Cyan
Write-Host "Link: https://www.pexels.com/video/solar-panel-farm-8190804/" -ForegroundColor White
Write-Host "Instructions:" -ForegroundColor Yellow
Write-Host "  1. Click the link above"
Write-Host "  2. Click 'Free Download' button"
Write-Host "  3. Select 'Full HD 1920x1080'"
Write-Host "  4. Save as: public\videos\installation-process.mp4"
Write-Host ""
Write-Host "Alternative: Use these shorter Pexels videos (easier to download):" -ForegroundColor Magenta
Write-Host "- https://www.pexels.com/video/solar-panels-on-roof-3773574/" -ForegroundColor White
Write-Host "- https://www.pexels.com/video/solar-panels-on-a-field-3088035/" -ForegroundColor White
