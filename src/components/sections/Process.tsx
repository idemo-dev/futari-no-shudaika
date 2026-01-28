export function Process() {
  const steps = [
    {
      num: "01",
      title: "ヒアリング",
      description: "ふたりのエピソード・好みの音楽・伝えたいメッセージをお聞きします。オンラインフォームで簡単に入力できます。",
    },
    {
      num: "02",
      title: "制作",
      description: "プロの作詞家・作曲家が、ふたりだけのオリジナル楽曲を制作します。",
    },
    {
      num: "03",
      title: "試聴",
      description: "完成した楽曲をプレビューで確認。この段階ではまだ無料です。",
    },
    {
      num: "04",
      title: "購入・納品",
      description: "気に入ったらご購入。楽曲データとサブスク配信をお届けします。",
    },
  ];

  return (
    <section className="py-16 md:py-32 px-10 md:px-6 bg-[#f9f6f2]">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-20">
          <p className="text-[#c4a27a] text-sm tracking-[0.2em] mb-4 uppercase">
            Process
          </p>
          <h2 className="heading-emotional text-2xl md:text-4xl text-[#2d2d2d] mb-4">
            制作の流れ
          </h2>
          <p className="text-[#737373]">
            シンプルな4ステップで、あなただけの1曲が完成します
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid md:grid-cols-12 gap-6 md:gap-8 py-12 border-t border-[#e8e4df] first:border-t-0"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="text-[#c4a27a] text-sm tracking-widest">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-4">
                <h3 className="text-xl font-medium text-[#2d2d2d]">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-[#737373] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
