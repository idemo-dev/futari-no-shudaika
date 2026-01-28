export function FreeTrial() {
  return (
    <section className="py-12 md:py-24 px-10 md:px-6 bg-[#f9f6f2]">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Square Player Card with Full Glassmorphism */}
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-sm aspect-square relative rounded-2xl overflow-hidden shadow-xl">
              {/* Background Image */}
              <img
                src="/hf_20260128_080249_8848ff4c-c623-4e51-bfcc-a932aba63188.png"
                alt="サンプル楽曲"
                className="w-full h-full object-cover"
              />

              {/* Full Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md flex flex-col items-center justify-center p-4">
                {/* Album Art - Large */}
                <div className="w-[70%] aspect-square rounded-xl overflow-hidden shadow-xl mb-4">
                  <img
                    src="/hf_20260128_080249_8848ff4c-c623-4e51-bfcc-a932aba63188.png"
                    alt="ジャケット"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Progress Bar - Same width as album art */}
                <div className="w-[70%] mb-3">
                  <div className="h-1 bg-black/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-[#c4a27a] rounded-full" />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[#737373] text-[10px]">1:23</span>
                    <span className="text-[#737373] text-[10px]">4:26</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-5">
                  <button className="text-[#737373] hover:text-[#2d2d2d] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                    </svg>
                  </button>
                  <button className="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-[#2d2d2d] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </button>
                  <button className="text-[#737373] hover:text-[#2d2d2d] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-[#c4a27a] text-sm tracking-[0.2em] mb-4 uppercase">
              Free Trial
            </p>

            <h2 className="heading-emotional text-2xl md:text-4xl text-[#2d2d2d] mb-6">
              まずは無料で、
              <br />
              あなただけの1曲を。
            </h2>

            <p className="text-[#737373] leading-relaxed mb-8">
              気に入ったらご購入。
              <br />
              納得してからお支払いいただけます。
            </p>

            <ul className="space-y-4">
              {[
                "クレジットカード不要",
                "試聴してから判断",
                "購入後もサポート"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[#2d2d2d]">
                  <span className="w-5 h-px bg-[#c4a27a]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
