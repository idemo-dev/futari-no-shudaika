export function ForYou() {
  const targets = [
    {
      title: "結婚式で、世界に一つだけの曲を流したい方",
      description: "入場曲、ケーキカット、退場曲。一生の思い出に残る瞬間を、ふたりだけの歌で彩ります。",
      scene: "Wedding",
      image: "/hf_20260128_081251_9556eec2-dd52-44dd-a16f-eef65b54da1f.png",
    },
    {
      title: "プロポーズや記念日に、特別なプレゼントを贈りたい方",
      description: "言葉では伝えきれない想いを、歌に込めて届けます。サプライズにも最適です。",
      scene: "Anniversary",
      image: "/memory-02.png",
    },
  ];

  return (
    <section className="py-16 md:py-32 px-10 md:px-6 bg-[#fefefe]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-20">
          <p className="text-[#c4a27a] text-sm tracking-[0.2em] mb-4 uppercase">
            For You
          </p>
          <h2 className="heading-emotional text-2xl md:text-4xl text-[#2d2d2d]">
            こんな方へ
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {targets.map((target, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-[#f5f2ef] to-[#e8e4df] mb-6 overflow-hidden rounded-2xl">
                {target.image ? (
                  <img
                    src={target.image}
                    alt={target.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#a3a3a3] text-sm tracking-widest">{target.scene}</p>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#2d2d2d]/0 group-hover:bg-[#2d2d2d]/5 transition-colors duration-500" />
              </div>

              <h3 className="text-lg md:text-xl font-medium text-[#2d2d2d] mb-3 leading-relaxed">
                {target.title}
              </h3>
              <p className="text-[#737373] leading-relaxed">
                {target.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
