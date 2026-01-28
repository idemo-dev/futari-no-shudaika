"use client";

import { useState } from "react";

export function FAQ() {
  const faqs = [
    {
      question: "制作にはどのくらいの期間がかかりますか？",
      answer: "ヒアリングから納品まで、通常2〜3週間程度です。お急ぎの場合はプレミアムプランの優先制作をご利用ください。",
    },
    {
      question: "修正は何回まで可能ですか？",
      answer: "ベーシックプランは1回、プレミアムプランは3回まで無料で修正可能です。それ以降の修正は別途ご相談ください。",
    },
    {
      question: "歌手は選べますか？",
      answer: "はい、複数のAI歌手スタイルからお選びいただけます。ベーシックプランは2種類、プレミアムプランは多数のスタイルから選択可能です。",
    },
    {
      question: "結婚式以外でも利用できますか？",
      answer: "もちろんです。記念日、プロポーズ、誕生日、還暦祝いなど、様々なシーンでご利用いただけます。",
    },
    {
      question: "無料で作った曲はどうなりますか？",
      answer: "無料で制作した曲は試聴用として提供されます。気に入っていただけたら、購入後にフル音源とサブスク配信を受け取れます。",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-32 px-10 md:px-6 bg-[#f9f6f2]">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-20">
          <p className="text-[#c4a27a] text-sm tracking-[0.2em] mb-4 uppercase">
            FAQ
          </p>
          <h2 className="heading-emotional text-2xl md:text-4xl text-[#2d2d2d] mb-4">
            よくあるご質問
          </h2>
        </div>

        {/* FAQ list */}
        <div className="divide-y divide-[#e8e4df]">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="w-full flex items-start justify-between text-left gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-[#2d2d2d] font-medium leading-relaxed">
                  {faq.question}
                </span>
                <span
                  className={`text-[#c4a27a] text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-[#737373] leading-relaxed pl-0">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
