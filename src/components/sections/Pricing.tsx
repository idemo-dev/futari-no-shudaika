"use client";

import { useState } from "react";
import { ContactModal } from "../ContactModal";

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();

  const handlePlanClick = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const plans = [
    {
      name: "Basic",
      nameJa: "ベーシック",
      price: "33,000",
      description: "まずはここから始める方に",
      features: [
        "オリジナル楽曲（フルバージョン）",
        "サブスク配信",
        "試聴用プレビュー",
        "修正1回まで無料",
      ],
      popular: false,
    },
    {
      name: "Premium",
      nameJa: "プレミアム",
      price: "55,000",
      description: "特別な日を最高の形で",
      features: [
        "ベーシックの全て",
        "印刷用歌詞カードデータ",
        "動画用音源データ（WAV）",
        "修正3回まで無料",
        "優先制作",
      ],
      popular: true,
    },
  ];

  return (
    <section className="py-16 md:py-32 px-10 md:px-6 bg-[#fefefe]">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-20">
          <p className="text-[#c4a27a] text-sm tracking-[0.2em] mb-4 uppercase">
            Pricing
          </p>
          <h2 className="heading-emotional text-2xl md:text-4xl text-[#2d2d2d] mb-4">
            料金プラン
          </h2>
          <p className="text-[#737373]">
            シンプルな料金体系。追加費用はありません。
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col">
              {/* RECOMMENDED badge area - same height for both */}
              <div className="h-8 flex items-end">
                {plan.popular && (
                  <p className="w-full text-center text-xs tracking-widest py-2 bg-[#c4a27a] text-white">
                    RECOMMENDED
                  </p>
                )}
              </div>

              {/* Card */}
              <div
                className={`flex flex-col flex-1 p-8 md:p-10 ${
                  plan.popular
                    ? "bg-[#2d2d2d] text-white"
                    : "bg-[#f9f6f2]"
                }`}
              >
                <p className={`text-sm tracking-[0.2em] mb-2 ${plan.popular ? "text-[#c4a27a]" : "text-[#c4a27a]"}`}>
                  {plan.name}
                </p>
                <h3 className={`text-2xl font-medium mb-2 ${plan.popular ? "text-white" : "text-[#2d2d2d]"}`}>
                  {plan.nameJa}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-white/70" : "text-[#737373]"}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className={`text-3xl md:text-4xl font-medium ${plan.popular ? "text-white" : "text-[#2d2d2d]"}`}>
                    ¥{plan.price}
                  </span>
                  <span className={plan.popular ? "text-white/70" : "text-[#737373]"}>
                    （税込）
                  </span>
                </div>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className={`w-4 h-px mt-3 ${plan.popular ? "bg-[#c4a27a]" : "bg-[#c4a27a]"}`} />
                      <span className={plan.popular ? "text-white/90" : "text-[#2d2d2d]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanClick(plan.nameJa)}
                  className={`block w-full text-center py-4 text-sm tracking-wider transition-colors duration-300 mt-8 ${
                    plan.popular
                      ? "bg-white text-[#2d2d2d] hover:bg-[#f9f6f2]"
                      : "bg-[#2d2d2d] text-white hover:bg-[#1a1a1a]"
                  }`}
                >
                  このプランで始める
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#a3a3a3] mt-12">
          ※ まずは無料で1曲お試しいただけます。気に入ったらご購入ください。
        </p>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan}
      />
    </section>
  );
}
