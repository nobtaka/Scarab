# Scarab

> AmazonのURLからトラッキングパラメータ、アフィリエイトタグ、リファラル情報を自動で除去するSafari機能拡張です。

[English README](README.md)

## 機能

Amazonの商品ページにアクセスすると、自動的にクリーンなURL（商品識別子ASINのみ）にリダイレクトします。

**変換前:**
```
https://www.amazon.co.jp/Some-Product-Name/dp/B09V3KXJPB/ref=sr_1_1?crid=XXX&keywords=YYY&tag=affiliate-22&...
```

**変換後:**
```
https://www.amazon.co.jp/dp/B09V3KXJPB
```

## 対応ドメイン

amazon.co.jp, amazon.com, amazon.co.uk, amazon.de, amazon.fr, amazon.it, amazon.es, amazon.ca, amazon.com.au, amazon.com.br, amazon.in, amazon.sg, amazon.com.mx, amazon.nl, amazon.se, amazon.pl, amazon.com.be, amazon.sa, amazon.ae, amazon.eg

## インストール

### 必要環境

- iOS 15.0+ / macOS 12.0+
- Safari
- Xcode 15+（ソースからビルドする場合）

### ソースからビルド

1. このリポジトリをクローン
2. Xcodeで `Scarab.xcodeproj` を開く
3. ターゲットデバイスを選択して実行（⌘R）
4. iOSの場合、**設定 → Safari → 機能拡張 → Scarab** で有効化
5. すべてのWebサイトへのアクセスを許可

## プライバシー

Scarabはユーザーデータの収集・保存・送信を一切行いません。URLの処理はすべてデバイス上でローカルに実行されます。

## ライセンス

MIT License
