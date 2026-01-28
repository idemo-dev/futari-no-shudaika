import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ふたりの主題歌 | 出会いから今日までを、1曲に。",
  description: "ふたりの思い出を、世界に一つだけの歌に。結婚式やプロポーズ、記念日に、オリジナル楽曲をプレゼント。まずは無料で1曲作れます。",
  openGraph: {
    title: "ふたりの主題歌 | 出会いから今日までを、1曲に。",
    description: "ふたりの思い出を、世界に一つだけの歌に。結婚式やプロポーズ、記念日に、オリジナル楽曲をプレゼント。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ふたりの主題歌 | 出会いから今日までを、1曲に。",
    description: "ふたりの思い出を、世界に一つだけの歌に。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
