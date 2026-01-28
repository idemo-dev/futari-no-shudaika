export function Service() {
  const hearingItems = [
    {
      num: "01",
      title: "ふたりのエピソード",
      description: "出会いから今日までの思い出、印象的なエピソードをお聞きします",
      image: "/memorycard.png",
    },
    {
      num: "02",
      title: "好みの音楽",
      description: "ふたりが好きな音楽ジャンルやアーティスト、曲の雰囲気をお聞きします",
      image: "/record.png",
    },
    {
      num: "03",
      title: "伝えたいメッセージ",
      description: "歌詞に込めたい想いや、相手に伝えたいメッセージをお聞きします",
      image: null,
      showMessageBubble: true,
    },
  ];

  const deliverables = [
    {
      title: "オリジナル楽曲",
      description: "プロのクオリティで制作した、ふたりだけのフル楽曲",
      image: null,
      showPlayer: true,
    },
    {
      title: "サブスク配信",
      description: "Spotify、Apple Music等で配信。いつでもどこでも聴けます",
      image: "/subscriptionslogos.png",
    },
    {
      title: "歌詞カード",
      description: "印刷用の歌詞カードデータ",
      premium: true,
      image: "/lyriccard.png",
    },
    {
      title: "動画用データ",
      description: "ムービー制作に使える高音質音源",
      premium: true,
      image: "/wavlogo.png",
    },
  ];

  return (
    <section className="py-16 md:py-32 px-10 md:px-6 bg-[#f9f6f2]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-20">
          <p className="text-[#c4a27a] text-sm tracking-[0.2em] mb-4 uppercase">
            Service
          </p>
          <h2 className="heading-emotional text-2xl md:text-4xl text-[#2d2d2d]">
            サービス内容
          </h2>
        </div>

        {/* Hearing Section */}
        <div className="mb-32 md:mb-24">
          <h3 className="text-lg text-[#2d2d2d] mb-12 text-center">
            ヒアリング内容
          </h3>
          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            {hearingItems.map((item, index) => (
              <div key={index} className="text-center flex flex-col">
                {/* Visual area - fixed height */}
                <div className="h-44 mb-6 flex items-end justify-center">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-auto object-contain"
                    />
                  )}
                  {item.showMessageBubble && (
                    <div className="relative w-52 h-44">
                      {/* First message - top right, small */}
                      <div className="absolute top-0 right-0">
                        <div className="bg-white rounded-2xl rounded-tr-sm px-2.5 py-1.5 shadow-md">
                          <p className="text-[10px] text-[#2d2d2d] text-left">数学的な比喩で愛を表現したい</p>
                        </div>
                      </div>
                      {/* Second message - middle left, medium */}
                      <div className="absolute top-12 left-0">
                        <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2 shadow-lg">
                          <p className="text-sm text-[#2d2d2d] text-left">出会った日の思い出を入れたい</p>
                        </div>
                      </div>
                      {/* Third message - bottom right, large */}
                      <div className="absolute bottom-0 right-2">
                        <div className="bg-white rounded-2xl rounded-br-sm px-3 py-2 shadow-md">
                          <p className="text-xs text-[#2d2d2d] text-left leading-tight">〇〇の曲のこの歌詞の<br/>〇〇な表現を参考にしたい</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Text area - aligned */}
                <p className="text-[#c4a27a] text-sm tracking-widest mb-4">{item.num}</p>
                <h4 className="text-lg font-medium text-[#2d2d2d] mb-3">{item.title}</h4>
                <p className="text-sm text-[#737373] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div>
          <h3 className="text-lg text-[#2d2d2d] mb-12 text-center">
            届くもの
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-[#fefefe] p-6 relative flex flex-col">
                {item.premium && (
                  <span className="absolute top-4 right-4 text-xs text-[#c4a27a] tracking-wider">
                    PREMIUM
                  </span>
                )}
                {/* Visual area - fixed height */}
                <div className="h-40 mb-6 flex items-end justify-center">
                  {item.showPlayer && (
                    <div className="w-32 aspect-square relative rounded-lg overflow-hidden shadow-lg">
                      <img
                        src="/hf_20260128_080249_8848ff4c-c623-4e51-bfcc-a932aba63188.png"
                        alt="サンプル楽曲"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-md flex flex-col items-center justify-center p-2">
                        <div className="w-[70%] aspect-square rounded-md overflow-hidden shadow-md mb-2">
                          <img
                            src="/hf_20260128_080249_8848ff4c-c623-4e51-bfcc-a932aba63188.png"
                            alt="ジャケット"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-[70%] mb-1">
                          <div className="h-0.5 bg-black/10 rounded-full overflow-hidden">
                            <div className="h-full w-1/3 bg-[#c4a27a] rounded-full" />
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <button className="text-[#737373] hover:text-[#2d2d2d] transition-colors">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                            </svg>
                          </button>
                          <button className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center shadow hover:scale-105 transition-transform">
                            <svg className="w-3 h-3 text-[#2d2d2d] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <polygon points="5,3 19,12 5,21" />
                            </svg>
                          </button>
                          <button className="text-[#737373] hover:text-[#2d2d2d] transition-colors">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-auto object-contain"
                    />
                  )}
                </div>
                {/* Text area - aligned */}
                <h4 className="font-medium text-[#2d2d2d] mb-2">{item.title}</h4>
                <p className="text-sm text-[#737373] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
