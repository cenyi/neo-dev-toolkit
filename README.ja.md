# JSONフォーマッター＆マルチフォーマットコンバーター

<div align="ltr" >

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Astro](https://img.shields.io/badge/Astro-4.15-FF5D01.svg)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-orange.svg)

**究極のJSONツールキット - オンラインでJSONをフォーマット、変換、検証**

[🇺🇸 English](README.md) • [🇨🇳 简体中文](README.zh.md) • 🇯🇵 日本語

</div>

---

## ✨ 概要

強力なブラウザベースのJSONツールキット。20+種類の形式変換とコード生成をサポート。

---

## 🚀 クイックスタート

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/cenyi/neo-dev-toolkit.git

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# 本番ビルド
npm run build
```

---

## 🎯 機能

### 主な機能

- ✨ **スマート入力**: JSON、URL、XML、YAML、15+形式の自動検出
- 🔄 **20+コンバーター**: JSON ↔ YAML/XML/CSV/HTML/PDF/Table など
- 💻 **コード生成**: TypeScript、Dart、Go、Rust、Python、C、JSON Schema
- 🔍 **高度なツール**: JSON比較、diff、フィールド抽出、検証
- 🌐 **多言語対応**: 英語と日本語の完全サポート
- 📱 **モバイル最適化**: すべてのデバイスで完璧に動作
- 🔒 **プライバシー優先**: 100%ブラウザベース、サーバーへのアップロードなし

---

## 📖 使用例

### 例 1: API レスポンス

```json
{
  "status": "success",
  "data": {
    "users": [
      {"id": 1, "name": "Alice", "email": "alice@example.com"}
    ]
  }
}
```

**すべての email を抽出**:
```javascript
obj => obj.data.users.map(u => u.email)
```

### 例 2: YAML 変換

**入力（YAML として自動検出）**:
```yaml
server:
  host: localhost
  port: 8080
```

**自動的に JSON に変換** → **Go 構造体を生成**

---

## 🎨 インターフェース機能

### レスポンシブデザイン

- 🖥️ **デスクトップ**: マルチカラムレイアウト、サイドバイサイドエディタ
- 📱 **タブレット**: 最適化された2カラムグリッド
- 📲 **モバイル**: シングルカラム、タッチボタン

### ボタン構成

ボタンは機能別にグループ化されています：
```
[基本操作] | [データ変換] | [コード生成] | [分析] | [ユーティリティ]
```

**基本操作**: 折りたたみ、展開、コメント削除、圧縮、エスケープ
**データ変換**: XML、YAML、CSV、Excel、HTML、PDF
**コード生成**: TypeScript、Dart、C、Go、Rust、Python、Schema
**分析**: テーブル、比較
**ユーティリティ**: クリア、履歴、フォントサイズ

---

## 🔧 技術的詳細

### テクノロジースタック

| コンポーネント | テクノロジー | バージョン |
|-----------|-----------|---------|
| フレームワーク | Astro | 4.15+ |
| エディター | Monaco Editor | Latest |
| スタイル | ネイティブCSS | - |
| 言語 | JavaScript | ES6+ |
| デプロイ | Cloudflare Pages/Workers | - |

### アーキテクチャ

```
┌─────────────────────────────────────────┐
│           ユーザーブラウザ                │
│  ┌──────────────────────────────────┐  │
│  │    Astroフロントエンドアプリ       │  │
│  ├──────────────────────────────────┤  │
│  │  • スマート入力検出                │  │
│  │  • コンバージョンエンジン          │  │
│  │  • コード生成モジュール            │  │
│  │  • Monaco Editor統合              │  │
│  │  • 履歴管理（ローカル）            │  │
│  └──────────────────────────────────┘  │
│                                         │
│  100%クライアント処理                   │
│  ❌ サーバーへのアップロードなし        │
│  ✅ 完全なプライバシー                 │
└─────────────────────────────────────────┘
```

---

## 🚢 デプロイメント

### Cloudflare Pages (推奨)

```bash
# プロジェクトをビルド
npm run build

# Wrangler CLIを使用してデプロイ
npm install -g wrangler
wrangler login
wrangler pages deploy dist
```

### 他のプラットフォーム

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🎓 Use Cases

### 開発者向け
- ✅ API レスポンスのデバッグ
- ✅ TypeScript インターフェースの生成
- ✅ 設定ファイルの変換
- ✅ JSON 差分の比較

### データアナリスト向け
- ✅ JSON から CSV/Excel への変換
- ✅ テーブルとしてのデータ可視化
- ✅ 特定フィールドの抽出
- ✅ データ構造の検証

---

## 🌟 キー機能

| 機能 | 説明 | ステータス |
|---------|-------------|--------|
| スマート入力 | 15+フォーマットの自動検出 | ✅ |
| JSON 検証 | リアルタイムエラー検出 | ✅ |
| コンバージョン | 10+出力フォーマット | ✅ |
| コード生成 | 7つのプログラミング言語 | ✅ |
| JSON 比較 | ビジュアル diff ツール | ✅ |
| フィールド抽出 | JavaScript 式 | ✅ |

---

## 📊 パフォーマンス

- ⚡ **フォーマット速度**: 1MB JSON で < 100ms
- 📦 **バンドルサイズ**: < 500KB (gzip)
- 🚀 **読み込み時間**: 3G で < 2s
- 💾 **メモリ使用量**: 10MB JSON で < 100MB
- 🔄 **変換速度**: ほとんどの形式で < 500ms

---

## 🔒 プライバシーとセキュリティ

- ✅ **サーバーへのアップロードなし**: すべての処理はブラウザで行われます
- ✅ **分析なし**: 追跡コードはありません
- ✅ **Cookieなし**: ユーザー追跡はありません
- ✅ **HTTPS**: 安全な接続
- ✅ **オープンソース**: 完全に検証可能なコード
- ✅ **ローカルストレージ**: 履歴はデバイスに残ります

---

## 📝 ライセンス

MIT License - [LICENSE](LICENSE) ファイルを参照

---

## 🙏 謝辞

- [Astro](https://astro.build) - Webフレームワーク
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) -強力なコードエディタ
- [Cloudflare](https://cloudflare.com) - ホスティングとCDN

---

## 📞 Support

- 📧 Email: support@tojsons.com
- 🐛 Issues: [GitHub Issues](https://github.com/cenyi/neo-dev-toolkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/cenyi/neo-dev-toolkit/discussions)

---

<div align="ltr">

**Made with ❤️ by the JSON Tools Team**

🔗 [Live Demo](https://tojsons.com) • 📖 [Docs](https://tojsons.com/docs) • 🐛 [Issues](https://github.com/cenyi/neo-dev-toolkit/issues)

[🇺🇸 English](README.md) | [🇨🇳 简体中文](README.zh.md) | 🇯🇵 Japanese
</div>
