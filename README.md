# Scarab

> A Safari extension that automatically cleans Amazon URLs by removing tracking parameters, affiliate tags, and referral information.

[日本語版 README はこちら](README.ja.md)

## What it does

When you visit an Amazon product page, Scarab automatically redirects you to a clean URL containing only the essential product identifier (ASIN).

**Before:**
```
https://www.amazon.co.jp/Some-Product-Name/dp/B09V3KXJPB/ref=sr_1_1?crid=XXX&keywords=YYY&tag=affiliate-22&...
```

**After:**
```
https://www.amazon.co.jp/dp/B09V3KXJPB
```

## Supported Domains

amazon.co.jp, amazon.com, amazon.co.uk, amazon.de, amazon.fr, amazon.it, amazon.es, amazon.ca, amazon.com.au, amazon.com.br, amazon.in, amazon.sg, amazon.com.mx, amazon.nl, amazon.se, amazon.pl, amazon.com.be, amazon.sa, amazon.ae, amazon.eg

## Installation

### Requirements

- iOS 15.0+ / macOS 12.0+
- Safari
- Xcode 15+ (for building from source)

### Build from Source

1. Clone this repository
2. Open `Scarab.xcodeproj` in Xcode
3. Select your target device and run (⌘R)
4. On iOS, go to **Settings → Safari → Extensions → Scarab** and enable it
5. Allow access for all websites when prompted

## Privacy

Scarab does not collect, store, or transmit any user data. All URL processing happens locally on your device.

## License

MIT License
