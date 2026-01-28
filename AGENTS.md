# AGENTS.md - 開発フロー概要

## プロジェクト: ふたりの主題歌 LP

オリジナル楽曲制作サービスのランディングページ

## 運用モード

**Solo モード** - Claude Code 単独で開発

## ワークフロー

```
/plan-with-agent → Plans.md作成 → /work → /harness-review → 完了
```

## コマンド一覧

| コマンド | 用途 |
|---------|------|
| `/plan-with-agent` | アイデアから実装計画を作成 |
| `/work` | Plans.md のタスクを実行 |
| `/harness-review` | コードレビュー |
| `/sync-status` | 進捗確認・Plans.md 更新 |
| `/verify` | ビルド検証・エラー復旧 |

## 開発の流れ

1. **計画**: 「/plan-with-agent ヒーローセクションを作りたい」
2. **実装**: `/work` でタスクを実行
3. **検証**: `/verify` でビルド確認
4. **レビュー**: `/harness-review` でコード品質チェック

## ファイル構成

| ファイル | 役割 |
|---------|------|
| `CLAUDE.md` | Claude Code への指示 |
| `Plans.md` | タスク管理（SSOT） |
| `.claude/memory/decisions.md` | 意思決定記録 |
| `.claude/memory/patterns.md` | 再利用パターン |
