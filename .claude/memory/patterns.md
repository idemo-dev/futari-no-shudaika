# patterns.md - 再利用パターン

## コンポーネント構成

### セクションコンポーネント
```tsx
// src/components/sections/[SectionName].tsx
export function SectionName() {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* content */}
      </div>
    </section>
  );
}
```

### CTAボタン
```tsx
<a
  href="#"
  className="inline-block px-8 py-4 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition-colors"
>
  無料で曲を作ってみる
</a>
```

---

## デザイントークン（候補）

```css
/* globals.css で定義予定 */
--color-primary: /* ピンク系 */
--color-accent: /* ゴールド系 */
--color-background: /* 白/オフホワイト */
```

---

## テンプレート

```
## [パターン名]

### 用途
[どういう場面で使うか]

### コード例
[再利用可能なコードスニペット]
```
