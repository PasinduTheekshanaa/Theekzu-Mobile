$dest = "C:\Users\Pasindu_Theekshana\Desktop\Theekzu mobile\assets\images\products"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

# Using Apple press images CDN and other reliable sources with no hotlink protection
$images = @(
    @{file='iphone-17-pro-max.jpg'; url='https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-17-pro.jpg';     url='https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-17.jpg';         url='https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-16-pro-max.jpg'; url='https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-16-pro.jpg';     url='https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-16.jpg';         url='https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-15-pro-max.jpg'; url='https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-15-pro.jpg';     url='https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-15.jpg';         url='https://www.apple.com/newsroom/images/2023/09/apple-announces-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-yellow-hero-230912_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-14-pro-max.jpg'; url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-14-pro.jpg';     url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-14-plus.jpg';    url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-lineup-hero-220907_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-14.jpg';         url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-lineup-hero-220907_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-13-pro-max.jpg'; url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_Lifestyle_09142021_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-13-pro.jpg';     url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_Lifestyle_09142021_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-13.jpg';         url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone13_Colors_09142021_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-13-mini.jpg';    url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone13_Colors_09142021_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-12-pro-max.jpg'; url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-12_iPhone-12-Pro_Availability_10162020_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-12-pro.jpg';     url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-12_iPhone-12-Pro_Availability_10162020_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-12.jpg';         url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-12_iPhone-12-Pro_Availability_10162020_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-11-pro-max.jpg'; url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone11Pro_WelcomeHome_091019.jpg.news_app_ed.jpg'},
    @{file='iphone-11-pro.jpg';     url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone11Pro_WelcomeHome_091019.jpg.news_app_ed.jpg'},
    @{file='iphone-11.jpg';         url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce_iphone11_091019_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-xs-max.jpg';     url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-XS-Max-Gold-09122018_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-xs.jpg';         url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-XS-Gold-09122018_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-x.jpg';          url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneX-front-back-side-image-1_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-8-plus.jpg';     url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone8-all-colors-091217_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-se2.jpg';        url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iPhone-SE_product-image_04152020_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-8.jpg';          url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone8-all-colors-091217_Full-Bleed-Image.jpg.large.jpg'},
    @{file='iphone-7-plus.jpg';     url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-7_Product-Red_032117.jpg.news_app_ed.jpg'},
    @{file='iphone-7.jpg';          url='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-7_Product-Red_032117.jpg.news_app_ed.jpg'}
)

$success = 0; $fail = 0

foreach ($item in $images) {
    $filePath = Join-Path $dest $item.file
    # Skip if already exists and > 50KB
    if ((Test-Path $filePath) -and ((Get-Item $filePath).Length -gt 50000)) {
        Write-Host "SKIP (exists): $($item.file)" -ForegroundColor DarkGray
        $success++
        continue
    }
    try {
        $wr = [System.Net.HttpWebRequest]::Create($item.url)
        $wr.UserAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        $wr.Accept = "image/webp,image/apng,image/*,*/*;q=0.8"
        $wr.Timeout = 20000
        $response = $wr.GetResponse()
        $stream = $response.GetResponseStream()
        $fileStream = [System.IO.FileStream]::new($filePath, [System.IO.FileMode]::Create)
        $stream.CopyTo($fileStream)
        $fileStream.Close()
        $stream.Close()
        $response.Close()
        $size = (Get-Item $filePath).Length
        if ($size -gt 10000) {
            Write-Host "OK  $($item.file) ($([math]::Round($size/1024))KB)" -ForegroundColor Green
            $success++
        } else {
            Write-Host "SMALL $($item.file) ($size bytes)" -ForegroundColor Yellow
            $fail++
        }
    } catch {
        Write-Host "FAIL $($item.file): $($_.Exception.Message)" -ForegroundColor Red
        $fail++
    }
}

Write-Host ""
Write-Host "Done! Success: $success | Failed: $fail" -ForegroundColor Cyan
