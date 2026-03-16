"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface SongPlayerProps {
  title: string;
  artist: string;
  audioSrc: string;
  artwork?: string;
  lyrics?: string;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function SongPlayer({ title, artist, audioSrc, artwork, lyrics }: SongPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const lyricsProgressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    if (isPlaying && lyrics) {
      setShowLyrics(true);
    }
  }, [isPlaying, lyrics]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      await audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const seekFromBar = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) => {
      const audio = audioRef.current;
      const bar = ref.current;
      if (!audio || !bar || duration === 0) return;

      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audio.currentTime = ratio * duration;
    },
    [duration],
  );

  const lyricSections = lyrics ? lyrics.split("\n\n") : [];

  return (
    <>
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* ===== Normal (card) view ===== */}
      <div
        className={`w-full max-w-md mx-auto bg-white/40 backdrop-blur-xl backdrop-saturate-150 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] ring-1 ring-white/60 ring-inset transition-opacity duration-500 ${
          showLyrics ? "opacity-0 pointer-events-none h-0 overflow-hidden p-0 mb-0" : "opacity-100"
        }`}
      >
        {/* Artwork */}
        {artwork && (
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg mb-5">
            <img
              src={artwork}
              alt={`${title} artwork`}
              className="w-full h-full object-cover"
            />
            {/* Lyrics toggle */}
            {lyrics && (
              <button
                onClick={() => setShowLyrics(true)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 flex items-center justify-center transition-all"
                aria-label="歌詞を表示"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Track info */}
        <div className="text-center mb-5">
          <h3 className="heading-emotional text-lg text-[#2d2d2d]">{title}</h3>
          <p className="text-sm text-[#737373] mt-1">{artist}</p>
        </div>

        {/* Progress bar */}
        <div
          ref={progressRef}
          onClick={(e) => seekFromBar(e, progressRef)}
          className="h-1.5 bg-black/10 rounded-full overflow-hidden cursor-pointer mb-2"
        >
          <div
            className="h-full bg-[#c4a27a] rounded-full transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Time */}
        <div className="flex justify-between text-xs text-[#a3a3a3] mb-5">
          <span>{formatTime(currentTime)}</span>
          <span>{duration > 0 ? formatTime(duration) : "-:--"}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => {
              if (audioRef.current) audioRef.current.currentTime = Math.max(0, currentTime - 10);
            }}
            className="w-10 h-10 flex items-center justify-center text-[#737373] hover:text-[#2d2d2d] transition-colors"
            aria-label="10秒戻る"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.5 3C7.81 3 4.01 6.54 3.56 11H1l3.5 4 3.5-4H5.57C6.01 7.65 8.96 5 12.5 5c3.87 0 7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C7.88 20.1 10.05 21 12.5 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
              <text x="10" y="15.5" fontSize="7.5" textAnchor="middle" fill="currentColor" fontWeight="bold">10</text>
            </svg>
          </button>

          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-[#2d2d2d] flex items-center justify-center hover:scale-105 hover:bg-[#1a1a1a] transition-all shadow-lg"
            aria-label={isPlaying ? "一時停止" : "再生"}
          >
            {isPlaying ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>

          <button
            onClick={() => {
              if (audioRef.current) audioRef.current.currentTime = Math.min(duration, currentTime + 10);
            }}
            className="w-10 h-10 flex items-center justify-center text-[#737373] hover:text-[#2d2d2d] transition-colors"
            aria-label="10秒進む"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.5 3c4.69 0 8.49 3.54 8.94 8H23l-3.5 4-3.5-4h2.43C18 7.65 15.04 5 11.5 5 7.63 5 4.5 8.13 4.5 12s3.13 7 7 7c1.93 0 3.68-.79 4.94-2.06l1.42 1.42C16.12 20.1 13.95 21 11.5 21c-4.97 0-9-4.03-9-9s4.03-9 9-9z" />
              <text x="14" y="15.5" fontSize="7.5" textAnchor="middle" fill="currentColor" fontWeight="bold">10</text>
            </svg>
          </button>
        </div>
      </div>

      {/* ===== Full-screen lyrics view (Apple Music style) ===== */}
      <div
        className={`fixed inset-0 z-50 flex flex-col transition-all duration-500 ${
          showLyrics ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Blurred artwork background */}
        {artwork && (
          <img
            src={artwork}
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-150 blur-[80px] brightness-[0.6] saturate-[1.8]"
          />
        )}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content over background */}
        <div className="relative z-10 flex flex-col h-full max-w-lg mx-auto w-full px-6">
          {/* Top bar: thumbnail + track info + close */}
          <div className="flex items-center gap-3 pt-6 pb-4 shrink-0">
            {artwork && (
              <img
                src={artwork}
                alt={title}
                className="w-12 h-12 rounded-lg object-cover shadow-lg"
              />
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium text-sm truncate">{title}</h3>
              <p className="text-white/50 text-xs truncate">{artist}</p>
            </div>
            <button
              onClick={() => setShowLyrics(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all shrink-0"
              aria-label="歌詞を閉じる"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

          {/* Lyrics area */}
          <div className="flex-1 overflow-y-auto scrollbar-hide py-4">
            <div className="space-y-8">
              {lyricSections.map((section, index) => (
                <div key={index}>
                  {section.split("\n").map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className="font-serif text-white/90 text-lg sm:text-xl font-medium leading-[2] tracking-wide"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom controls */}
          <div className="shrink-0 pb-8 pt-4">
            {/* Progress bar */}
            <div
              ref={lyricsProgressRef}
              onClick={(e) => seekFromBar(e, lyricsProgressRef)}
              className="h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer mb-2"
            >
              <div
                className="h-full bg-white/80 rounded-full transition-[width] duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Time */}
            <div className="flex justify-between text-[11px] text-white/40 mb-4">
              <span>{formatTime(currentTime)}</span>
              <span>{duration > 0 ? `-${formatTime(duration - currentTime)}` : "-:--"}</span>
            </div>

            {/* Playback controls */}
            <div className="flex items-center justify-center gap-10">
              <button
                onClick={() => {
                  if (audioRef.current) audioRef.current.currentTime = Math.max(0, currentTime - 10);
                }}
                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="10秒戻る"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              <button
                onClick={togglePlay}
                className="w-16 h-16 flex items-center justify-center text-white hover:scale-105 transition-transform"
                aria-label={isPlaying ? "一時停止" : "再生"}
              >
                {isPlaying ? (
                  <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="5" y="3" width="5" height="18" rx="1" />
                    <rect x="14" y="3" width="5" height="18" rx="1" />
                  </svg>
                ) : (
                  <svg className="w-14 h-14 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => {
                  if (audioRef.current) audioRef.current.currentTime = Math.min(duration, currentTime + 10);
                }}
                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="10秒進む"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
