# PowerShell script to download free solar panel images and videos
Write-Host "Downloading Solar Panel Media Assets..." -ForegroundColor Green

# Create directories
New-Item -ItemType Directory -Force -Path "public\videos" | Out-Null
New-Item -ItemType Directory -Force -Path "public\images\projects" | Out-Null

Write-Host "`nDownloading images from Unsplash..." -ForegroundColor Cyan

# Image download list
$imageList = @(
    @{ url = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"; path = "public\images\hero-rooftop.jpg" }
    @{ url = "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80"; path = "public\images\solar-panels-hero.jpg" }
    @{ url = "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&q=80"; path = "public\images\video-thumbnail.jpg" }
    @{ url = "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&q=80"; path = "public\images\projects\residential-kochi.jpg" }
    @{ url = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"; path = "public\images\projects\commercial-tvm.jpg" }
    @{ url = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"; path = "public\images\projects\industrial-calicut.jpg" }
    @{ url = "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1920&q=80"; path = "public\images\projects\rooftop-thrissur.jpg" }
    @{ url = "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920&q=80"; path = "public\images\projects\hybrid-kannur.jpg" }
    @{ url = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"; path = "public\images\projects\villa-ernakulam.jpg" }
)

$count = 1
foreach ($item in $imageList) {
    try {
        $filename = Split-Path $item.path -Leaf
        Write-Host "$count. Downloading $filename..." -ForegroundColor Yellow
        Invoke-WebRequest -Uri $item.url -OutFile $item.path -UseBasicParsing -TimeoutSec 30
        Write-Host "   Downloaded successfully" -ForegroundColor Green
        Start-Sleep -Milliseconds 500
    } catch {
        Write-Host "   Failed to download" -ForegroundColor Red
    }
    $count++
}

Write-Host "`nImages downloaded successfully!" -ForegroundColor Green
Write-Host "`nNext: Download videos manually from:" -ForegroundColor Yellow
Write-Host "1. https://www.pexels.com/video/solar-panels-2618545/" -ForegroundColor Cyan
Write-Host "   Save as: public\videos\hero-solar-panels.mp4" -ForegroundColor White
Write-Host "2. https://www.pexels.com/video/solar-panel-farm-8190804/" -ForegroundColor Cyan
Write-Host "   Save as: public\videos\installation-process.mp4" -ForegroundColor White
