"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const memories = [
  { src: "/memory-04.png", label: "出会い" },
  { src: "/memory-01.png", label: "デート" },
  { src: "/memory-02.png", label: "記念日" },
  { src: "/memory-03.png", label: "プロポーズ" },
  { src: "/memory-05.png", label: "準備" },
  { src: "/hero-wedding.png", label: "結婚式" },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageProgress, setImageProgress] = useState(0);
  const imageProgressRef = useRef(0);

  const intervalDuration = 4000; // 4 seconds per image
  const tickInterval = 50; // update every 50ms
  const progressPerTick = 100 / (intervalDuration / tickInterval);

  // Calculate overall progress based on current image and image progress
  const totalProgress = ((currentIndex + imageProgress / 100) / memories.length) * 100;

  const nextImage = useCallback(() => {
    setCurrentIndex((current) => {
      if (current >= memories.length - 1) {
        // Loop back to start
        imageProgressRef.current = 0;
        setImageProgress(0);
        return 0;
      }
      imageProgressRef.current = 0;
      setImageProgress(0);
      return current + 1;
    });
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      imageProgressRef.current += progressPerTick;

      if (imageProgressRef.current >= 100) {
        nextImage();
      } else {
        setImageProgress(imageProgressRef.current);
      }
    }, tickInterval);

    return () => clearInterval(interval);
  }, [isPlaying, nextImage, progressPerTick]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    imageProgressRef.current = 0;
    setImageProgress(0);
  };

  return (
    <section className="relative min-h-[80vh] lg:min-h-screen flex items-start lg:items-center justify-center overflow-hidden bg-[#f8f5f2] pt-12 sm:pt-16 lg:pt-0">
      {/* Background decorative elements for glassmorphism */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large colorful blobs */}
        <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#c4a27a]/60 to-[#d4a855]/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#e8d5c4]/70 to-[#c4a27a]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-gradient-to-b from-[#f5ebe0]/60 to-[#d4a855]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-start lg:items-center pt-0 sm:pt-12 lg:pt-0">
        {/* Left: Text content */}
        <div className="text-center sm:text-left">
          {/* Brand tag */}
          <p className="text-[#c4a27a] text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 md:mb-6 uppercase">
            Futari no Shudaika
          </p>

          {/* Main copy - editorial creative layout */}
          <h1 className="mb-4 sm:mb-6 md:mb-8 relative">
            {/* Decorative line */}
            <span className="absolute -left-8 top-6 w-6 h-px bg-[#c4a27a] hidden lg:block" />

            {/* Mobile: single line for first two parts */}
            <span className="block sm:hidden heading-emotional text-xl text-[#2d2d2d] tracking-wider">
              出会いから今日までを
            </span>

            {/* Desktop: separate lines with offset */}
            <span className="hidden sm:block heading-emotional text-2xl md:text-3xl lg:text-4xl text-[#737373] tracking-wider">
              出会いから
            </span>
            <span className="hidden sm:block heading-emotional text-4xl md:text-5xl lg:text-6xl text-[#2d2d2d] sm:translate-x-8 md:translate-x-16 lg:translate-x-32 sm:-mt-1">
              今日までを
            </span>

            {/* 1曲に。 - centered on mobile */}
            <span className="block font-bold tracking-tight mt-2 sm:mt-0 sm:-mt-2 flex items-baseline justify-center sm:justify-start">
              <span className="text-[#c4a27a] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">1</span>
              <span className="text-[#2d2d2d] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none -translate-y-0.5 sm:-translate-y-1">曲に。</span>
            </span>
          </h1>

          {/* Sub copy */}
          <p className="text-[#737373] text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-10 max-w-lg">
            ふたりの思い出を、<br className="sm:hidden" />
            世界に一つだけの歌に。
          </p>

          {/* CTA */}
          <a
            href="#"
            className="inline-block px-4 sm:px-8 md:px-12 py-2 sm:py-3 md:py-4 bg-[#2d2d2d] text-white text-xs sm:text-sm md:text-base tracking-wider hover:bg-[#1a1a1a] transition-colors duration-300"
          >
            無料で曲を作ってみる
          </a>

          <p className="mt-3 sm:mt-4 md:mt-6 text-[10px] sm:text-xs md:text-sm text-[#a3a3a3]">
            まずは無料で体験。気に入ったらご購入。
          </p>
        </div>

        {/* Right: Music Player Card */}
        <div className="relative flex justify-center">
          {/* Player Card - Glassmorphism */}
          <div className="w-full max-w-[280px] sm:max-w-[240px] md:max-w-xs lg:max-w-md bg-white/30 backdrop-blur-2xl backdrop-saturate-150 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-1 ring-white/60 ring-inset">
            {/* Album Artwork */}
            <div className="relative aspect-square rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-xl mb-2 sm:mb-4 lg:mb-6">
              {memories.map((memory, index) => (
                <img
                  key={memory.src}
                  src={memory.src}
                  alt={memory.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Track Info */}
            <div className="text-center mb-2 sm:mb-4 lg:mb-6">
              <h3 className="text-[#2d2d2d] text-xs sm:text-base md:text-lg lg:text-xl font-medium mb-0.5 sm:mb-1">ふたりの主題歌</h3>
              <p className="text-[#737373] text-[10px] sm:text-xs md:text-sm">Our Story in Music</p>
            </div>

            {/* Progress bar */}
            <div className="mb-2 sm:mb-4 lg:mb-6">
              <div className="h-1 sm:h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#c4a27a] rounded-full transition-all"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Previous */}
              <button
                onClick={() => goToImage((currentIndex - 1 + memories.length) % memories.length)}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-[#737373] hover:text-[#2d2d2d] transition-colors"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>

              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[72px] lg:h-[72px] rounded-full bg-[#2d2d2d] flex items-center justify-center hover:scale-105 hover:bg-[#1a1a1a] transition-all shadow-lg"
              >
                {isPlaying ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>

              {/* Next */}
              <button
                onClick={() => goToImage((currentIndex + 1) % memories.length)}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-[#737373] hover:text-[#2d2d2d] transition-colors"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                </svg>
              </button>
            </div>

            {/* Track dots */}
            <div className="flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 mt-2 sm:mt-4 lg:mt-6">
              {memories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`h-1 sm:h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#c4a27a] w-4 sm:w-6 lg:w-8"
                      : "bg-black/20 hover:bg-black/30 w-1 sm:w-1.5 lg:w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-[#a3a3a3]">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#a3a3a3] to-transparent" />
        </div>
      </div>
    </section>
  );
}
