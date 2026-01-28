# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

「ふたりの主題歌」- オリジナル楽曲制作サービスのランディングページ。
結婚式やプロポーズ、記念日向けにカップルの思い出を1曲にするサービス。

## Development Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4

## Architecture

```
src/
├── app/           # App Router pages and layouts
│   ├── layout.tsx # Root layout (metadata, fonts)
│   ├── page.tsx   # Homepage (LP)
│   └── globals.css
```

Path alias: `@/*` → `./src/*`

## LP Sections (Top to Bottom)

1. Hero - キャッチコピー「出会いから今日までを、1曲に。」+ CTA
2. 無料訴求 - 無料で試せる訴求
3. こんな方へ - ターゲット顧客
4. サービス内容 - ヒアリング内容と納品物
5. 料金プラン - ベーシック(3万円) / プレミアム(5万円)
6. 制作の流れ - 4ステップ
7. サンプル曲 - 試聴プレイヤー（プレースホルダー）
8. FAQ - よくある質問
9. CTA - フッター前の最終CTA

## Design Guidelines

- Tone: 温かみ、エモーショナル、祝福感
- Colors: 柔らかいピンク、ゴールド、白
- Mobile-first responsive design
