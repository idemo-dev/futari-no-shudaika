"use client";

import { useState, useRef, useEffect } from "react";

interface LyricLine {
  time: number;
  text: string;
  isBreak?: boolean;
}

export function Sample() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Lyrics with timestamps (in seconds) - adjusted with user
  const lyrics: LyricLine[] = [
    { time: 0, text: "", isBreak: true },
    { time: 20, text: "君と僕は　最初はただの変数で" },
    { time: 25, text: "交わることなんて　考えもしなかった" },
    { time: 30, text: "友達の店で　視線が重なった瞬間" },
    { time: 35, text: "二週間で　恋という解を見つけた" },
    { time: 39, text: "", isBreak: true },
    { time: 40, text: "1LDKで　割り切れない日々が" },
    { time: 44, text: "生活力の差を　浮き彫りにしていく" },
    { time: 49, text: "朝のコーヒーも　君と僕じゃ違う" },
    { time: 54, text: "すれ違うベクトルが　部屋を満たした" },
    { time: 58, text: "", isBreak: true },
    { time: 59, text: "愛は平行線になりかけて" },
    { time: 64, text: "交わらない未来だけが　見えていた" },
    { time: 68, text: "", isBreak: true },
    { time: 69, text: "君と僕の最大公約数は" },
    { time: 74, text: "「今」というたった一つの答え" },
    { time: 78, text: "12本の薔薇に　12の約束かけて" },
    { time: 82, text: "ふたりの方程式　解いていこう" },
    { time: 87, text: "", isBreak: true },
    { time: 88, text: "間違えたって　やり直せばいい" },
    { time: 93, text: "証明の途中で　気づくこともある" },
    { time: 99, text: "", isBreak: true },
    { time: 118, text: "別れた夜に　残ったものは" },
    { time: 122, text: "月に一度の　業務連絡だけ" },
    { time: 128, text: "既読の向こう　君は何を思う" },
    { time: 132, text: "返信のない画面　見つめていた" },
    { time: 137, text: "", isBreak: true },
    { time: 138, text: "半年の沈黙　君が破った夜" },
    { time: 142, text: "僕を必要としてくれた　それで十分だった" },
    { time: 147, text: "1Roomから　また1LDKへ" },
    { time: 152, text: "どんな部屋でも　君となら家になる" },
    { time: 156, text: "", isBreak: true },
    { time: 157, text: "1足す1が2じゃ足りない" },
    { time: 160, text: "君となら　余白も埋められる" },
    { time: 162, text: "割り切れないままでも" },
    { time: 165, text: "それが僕らの証明" },
    { time: 166, text: "", isBreak: true },
    { time: 167, text: "完璧じゃなくていい" },
    { time: 171, text: "君といる今が　美しい" },
    { time: 177, text: "", isBreak: true },
    { time: 180, text: "12本の薔薇を君に" },
    { time: 183, text: "12回「ありがとう」言うよ" },
    { time: 186, text: "感謝と信頼　愛情と希望" },
    { time: 188, text: "全部を抱きしめて　歩いていこう" },
    { time: 190, text: "", isBreak: true },
    { time: 191, text: "何でもない日が　幸せになる" },
    { time: 196, text: "これからもずっと　ふたりで" },
    { time: 198, text: "最大公約数　探し続ける" },
    { time: 206, text: "", isBreak: true },
    { time: 220, text: "式場の朝　差し込む光" },
    { time: 225, text: "君のドレスに　12の影" },
    { time: 230, text: "変数だった僕らが" },
    { time: 235, text: "今　一つの式になる" },
  ];

  // Find current lyric index
  const getCurrentLyricIndex = () => {
    for (let i = lyrics.length - 1; i >= 0; i--) {
      if (currentTime >= lyrics[i].time) {
        return i;
      }
    }
    return 0;
  };

  const currentIndex = getCurrentLyricIndex();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);


  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  const handleLyricClick = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section className="py-16 md:py-32 px-10 md:px-6 bg-[#fefefe]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#c4a27a] text-sm tracking-[0.2em] mb-4 uppercase">
            Sample
          </p>
          <h2 className="heading-emotional text-2xl md:text-4xl text-[#2d2d2d] mb-4">
            制作実例
          </h2>
          <p className="text-[#737373]">
            実際にお届けした楽曲をお聴きください
          </p>
        </div>

        {/* Audio element */}
        <audio ref={audioRef} src="/12roses.wav" preload="metadata" />

        {/* Three-column layout: Player | Lyrics | Story */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[260px_1fr_320px] gap-0 bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl">

          {/* Left column: Player + Story */}
          <div className="bg-[#1a1a1a] p-5 flex flex-col">
            {/* Album art */}
            <div className="aspect-square relative overflow-hidden rounded-xl mb-6 shadow-lg">
              <img
                src="/12roses.png"
                alt="12本の薔薇 - ジャケット"
                className="w-full h-full object-cover"
              />
              {/* Playing indicator overlay */}
              {isPlaying && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="flex items-end gap-1 h-8">
                    <span className="w-1 bg-white rounded-full animate-pulse" style={{ height: "60%", animationDelay: "0ms" }} />
                    <span className="w-1 bg-white rounded-full animate-pulse" style={{ height: "100%", animationDelay: "150ms" }} />
                    <span className="w-1 bg-white rounded-full animate-pulse" style={{ height: "40%", animationDelay: "300ms" }} />
                    <span className="w-1 bg-white rounded-full animate-pulse" style={{ height: "80%", animationDelay: "450ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Song info */}
            <div className="mb-4">
              <h3 className="text-white text-xl font-medium mb-2">
                12本の薔薇
              </h3>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#c4a27a] text-[#1a1a1a] text-xs font-bold rounded-full">
                  Premium
                </span>
                <span className="text-white/50 text-sm">¥55,000 <span className="text-white/30 text-xs">(税込)</span></span>
              </div>
            </div>

            {/* Progress bar */}
            <div
              className="mb-2 cursor-pointer group"
              onClick={handleSeek}
            >
              <div className="h-1 bg-white/20 rounded-full relative overflow-hidden">
                <div
                  className="h-full bg-[#c4a27a] rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Time */}
            <div className="flex justify-between text-xs text-white/40 mb-4">
              <span>{formatTime(currentTime)}</span>
              <span>{duration ? formatTime(duration) : "0:00"}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => {
                  const audio = audioRef.current;
                  if (audio) audio.currentTime = Math.max(0, audio.currentTime - 10);
                }}
                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.5 3C17.15 3 21.08 6.03 22.47 10.22L20.1 11C19.05 7.81 16.04 5.5 12.5 5.5C10.54 5.5 8.77 6.22 7.38 7.38L10 10H3V3L5.6 5.6C7.45 4 9.85 3 12.5 3M10 12V22H8V14H6V12H10M18 14V20C18 21.11 17.11 22 16 22H14C12.9 22 12 21.1 12 20V14C12 12.9 12.9 12 14 12H16C17.11 12 18 12.9 18 14M14 14V20H16V14H14Z" />
                </svg>
              </button>
              <button
                onClick={togglePlay}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1a1a1a] hover:scale-105 transition-transform shadow-lg"
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => {
                  const audio = audioRef.current;
                  if (audio) audio.currentTime = Math.min(duration, audio.currentTime + 10);
                }}
                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.5 3C6.85 3 2.92 6.03 1.53 10.22L3.9 11C4.95 7.81 7.96 5.5 11.5 5.5C13.46 5.5 15.23 6.22 16.62 7.38L14 10H21V3L18.4 5.6C16.55 4 14.15 3 11.5 3M14 12V22H16V14H18V12H14M10 14V20C10 21.11 9.11 22 8 22H6C4.9 22 4 21.1 4 20V14C4 12.9 4.9 12 6 12H8C9.11 12 10 12.9 10 14M6 14V20H8V14H6Z" />
                </svg>
              </button>
            </div>

            {/* Streaming platforms */}
            <div className="mt-auto pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs mb-3">配信中</p>
              <div className="flex items-center gap-3">
                {/* Spotify */}
                <a href="#" className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-[#1DB954] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
                {/* Apple Music */}
                <a href="#" className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-[#FA243C] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.99c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.455-2.105-1.327-.38-1.03.093-2.137 1.066-2.563.327-.143.672-.226 1.022-.29.293-.052.59-.09.885-.135.26-.04.52-.082.77-.156.25-.073.42-.237.478-.5.018-.09.026-.18.026-.27v-5.48c0-.12-.015-.24-.044-.36-.037-.154-.135-.248-.286-.284a2.12 2.12 0 00-.346-.05c-.633-.078-1.266-.15-1.9-.224l-3.98-.46c-.09-.01-.182-.015-.27-.033-.185-.038-.305-.157-.34-.34a.99.99 0 01-.02-.2V5.112c0-.13.012-.26.04-.387.054-.24.196-.38.433-.432.19-.04.384-.066.578-.086.82-.086 1.64-.17 2.46-.256l2.59-.27c.57-.06 1.14-.118 1.71-.178l.436-.044c.245-.024.4.106.445.344.017.09.023.18.023.27l-.002 5.454z"/>
                  </svg>
                </a>
                {/* YouTube Music */}
                <a href="#" className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-[#FF0000] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228 18.228 15.432 18.228 12 15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Synced Lyrics - Spotify style */}
          <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] relative flex flex-col pt-5">
            <div className="px-6 text-[#c4a27a] text-xs tracking-widest uppercase">
              Lyrics
            </div>
            <div className="px-6 pt-8 pb-10">
              {/* Show only nearby lyrics */}
              <div className="space-y-4">
                {(() => {
                  // Get visible lyrics (2 before, current, 3 after)
                  const visibleRange = 3;
                  const visibleLyrics: { line: LyricLine; index: number; position: number }[] = [];

                  // Find non-break lyrics around current
                  let count = 0;
                  for (let i = currentIndex - 1; i >= 0 && count < 2; i--) {
                    if (!lyrics[i].isBreak && lyrics[i].text) {
                      visibleLyrics.unshift({ line: lyrics[i], index: i, position: -(2 - count) });
                      count++;
                    }
                  }

                  // Add current
                  if (lyrics[currentIndex] && !lyrics[currentIndex].isBreak) {
                    visibleLyrics.push({ line: lyrics[currentIndex], index: currentIndex, position: 0 });
                  }

                  // Add future lyrics
                  count = 0;
                  for (let i = currentIndex + 1; i < lyrics.length && count < visibleRange; i++) {
                    if (!lyrics[i].isBreak && lyrics[i].text) {
                      visibleLyrics.push({ line: lyrics[i], index: i, position: count + 1 });
                      count++;
                    }
                  }

                  return visibleLyrics.map(({ line, index, position }) => (
                    <p
                      key={index}
                      onClick={() => handleLyricClick(line.time)}
                      className={`
                        cursor-pointer transition-all duration-500 leading-relaxed font-bold
                        ${position === 0
                          ? "text-xl lg:text-2xl text-white"
                          : position < 0
                            ? "text-base lg:text-lg text-white/25"
                            : position === 1
                              ? "text-base lg:text-lg text-white/40 hover:text-white/60"
                              : "text-sm lg:text-base text-white/20 hover:text-white/40"
                        }
                      `}
                    >
                      {line.text}
                    </p>
                  ));
                })()}
              </div>
            </div>
          </div>

          {/* Right column: Story / Customer Voice */}
          <div className="bg-[#252525] p-5 flex flex-col border-l border-white/5">
            <h4 className="text-[#c4a27a] text-xs tracking-widest mb-3 uppercase">Voice</h4>
            <div className="flex-1 space-y-3 text-xs leading-relaxed">
              <p className="text-white/90 text-sm">
                私たちの歩んできた道のりが、そのまま音楽になった——そんな一曲です。
              </p>
              <p className="text-white/60">
                友達の店で出会い、交際がスタートして同棲。でも一度はすれ違って、別れてしまった時期もありました。1LDKから始まり、1ROOMに戻り、そしてまた1LDKへ——そんな私たちの軌跡を丁寧に描いていただきました。
              </p>
              <p className="text-white/60">
                数学的な比喩で愛を表現したいという想いと、結婚式の「ダーズンローズ」の演出。12の約束と最大公約数が重なる歌詞に仕上げていただきました。
              </p>
              <p className="text-white/70 border-l-2 border-[#c4a27a]/30 pl-3">
                聴くたびに、二人で過ごしてきた日々が蘇ってきます。変数だった二人が、一つの式になる。これから始まる新しい方程式の最初の一音として、ずっと大切にしていきます。
              </p>
            </div>
            <p className="mt-auto pt-3 border-t border-white/10 text-xs text-white/40">
              — Hirata夫妻
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
