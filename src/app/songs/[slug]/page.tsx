import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SongPlayer } from "@/components/SongPlayer";

interface SongData {
  title: string;
  artist: string;
  lyricist: string;
  audioFile: string;
  artwork: string;
  lyrics: string;
}

const songs: Record<string, SongData> = {
  "chicken-steak-bento": {
    title: "チキンステーキ弁当",
    artist: "ふたりの主題歌",
    lyricist: "nought",
    audioFile: "/songs/chicken-steak-bento.wav",
    artwork: "/chikinstake.png",
    lyrics: `迷子でよかった　あの日迷わなきゃ
あなたの声を　知らないままだった
何も言わない夜が　いちばん甘くて
味見もせずに　好きになってた

崩れたおかず　ハンガーに掛けても
味は変わらないって　知ってるから
全部まとめて　懸けてみるよ
自分でも笑っちゃうけど

チキンかステーキかで　壊れかけた夜
選べないなら　両方詰めちゃえ

酸っぱい梅干しほど　真ん中にいる
喧嘩の数だけ　味が締まっていく
好きも嫌いも　全部おかずにして
この弁当箱に　詰めていこう

遠回りしながら　壊れながら
まだまだ隙間は　あるでしょ

弁当箱がまた　小さくなってる
文句のふりして　味は変わんないの
ずるいよ　そういうとこ
靴下も気持ちも　裏返しのまま

煙たいおかずを　嫌がってた君が
いつの間にか　燻されて笑ってる
ソファに残った匂い　それも隠し味
嫌いなはずが　くせになるらしい

冷めたって　美味いもんは美味い
離れてた分　芯まで味が染みた
遠回りの指輪　握ったまま
家具より先に　君がよかった

しょうがないじゃん
最後のひと品は　不格好でいい

酸いも　甘いも　焦げたのも
全部詰まって　蓋が閉まる
ありがとうも　ごめんねも
ぎゅっと詰めて　はい　できあがり

チキンステーキ弁当　本日のおすすめ
くだらないけど　これがふたりの味
平屋の食卓に　並べよう
明日もまた　詰めよう

この弁当がある限り
どこにいたって　帰ってこれる
おかずは不揃い　それでいい
これが　ふたりの味`,
  },
  "yorimichi": {
    title: "寄り道",
    artist: "ふたりの主題歌",
    lyricist: "nought",
    audioFile: "/songs/michi.wav",
    artwork: "/yorimichi.png",
    lyrics: `なんか今日　ほんとに来ちゃったね
何も言わない夜が　道しるべで
あなたの隣が　あんまり心地よくて
気づいたら　ここまで歩いてた

人前じゃ目も　合わせられないのに
ふたりきりだと　どこまでも走れる
行き先のない夜　ドライブしながら
あなたとなら　地図なんていらないの

信号が赤に変わって
同じ交差点で　止まった日もあったけど

全部正解だった
迷った数だけ　道が広がって
ほんとに　ほんとに
ここまで来れてよかった

ありがとう　隣にいてくれて
これから先も　ずっと ずっと
一緒に歩いていこう

追いかけてくれた君と　また並んで
同じ速さで歩けるって　いいもんだね
泣いた夜も　怒った朝も
足を止めなかった　それがふたりだ

好きって言うのが　ヘタすぎて
何回言っても　まだ足りないけど
そのぶん隣にいるから
不器用でごめん　でもずっといるから

ねぇ　今　隣にいるでしょ
ここに来るまでの道　覚えてる？
こんなに人が　笑ってくれてる
ふたりの道は　間違いじゃなかったね

まっすぐは歩けなかったけど
君となら　どこへだって行ける

全部正解だった
迷った数だけ　道が広がって
ほんとに　ほんとに
ふたりの未来が　広がっていく

ありがとう　隣にいてくれて
今日も明日も　その先も　ずっと ずっと
この道を　ふたりで行こう

涙と拍手に　包まれた今日
白い道の上　となりに君がいて
ふたりの足あとが　ひとつになる
この道で　よかった`,
  },
};

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const song = songs[slug];
  if (!song) return {};

  return {
    title: `${song.title} | ふたりの主題歌`,
    description: `${song.title} — ふたりだけのオリジナル楽曲`,
    openGraph: {
      title: `${song.title} | ふたりの主題歌`,
      description: `${song.title} — ふたりだけのオリジナル楽曲`,
      type: "music.song",
      locale: "ja_JP",
      images: [{ url: song.artwork }],
    },
  };
}

export default async function SongPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const song = songs[slug];

  if (!song) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      {/* Header */}
      <header className="pt-10 pb-6 text-center">
        <p className="text-[#c4a27a] text-[10px] tracking-[0.3em] uppercase mb-6">
          Futari no Shudaika
        </p>
        <h1 className="heading-emotional text-3xl sm:text-4xl md:text-5xl text-[#2d2d2d] mb-4">
          {song.title}
        </h1>
        <Link
          href={`/songs/${slug}/concept`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-sm rounded-xl text-xs text-[#2d2d2d] hover:bg-white/80 transition-colors ring-1 ring-black/5"
        >
          <svg className="w-3.5 h-3.5 text-[#c4a27a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          コンセプト・歌詞解説を読む
        </Link>
      </header>

      {/* Decorative divider */}
      <div className="flex justify-center mb-8">
        <div className="w-12 h-px bg-[#c4a27a]" />
      </div>

      {/* Audio Player with lyrics */}
      <section className="px-4 mb-12">
        <SongPlayer
          title={song.title}
          artist={song.artist}
          audioSrc={song.audioFile}
          artwork={song.artwork}
          lyrics={song.lyrics}
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e0d8] py-10 text-center">
        <p className="text-[#c4a27a] text-xs tracking-[0.2em] uppercase mb-2">
          Futari no Shudaika
        </p>
        <p className="text-[#a3a3a3] text-xs mb-4">
          ふたりの思い出を、世界に一つだけの歌に。
        </p>
        <a
          href="/"
          className="inline-block text-xs text-[#c4a27a] border-b border-[#c4a27a]/30 hover:border-[#c4a27a] transition-colors"
        >
          あなたもオリジナル楽曲をつくる
        </a>
      </footer>
    </div>
  );
}
