"use client";

import { useState } from "react";
import { ContactModal } from "../ContactModal";

export function FooterCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-32 px-10 md:px-6 bg-[#2d2d2d]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative line */}
        <div className="w-12 h-px bg-[#c4a27a] mx-auto mb-12" />

        <h2 className="heading-emotional text-2xl md:text-4xl text-white mb-6">
          ふたりだけの1曲を、
          <br />
          今すぐ作ってみませんか？
        </h2>

        <p className="text-white/70 text-lg mb-12">
          まずは無料でお試しください。
          <br />
          気に入らなければ、購入の必要はありません。
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block px-12 py-4 bg-white text-[#2d2d2d] text-base tracking-wider hover:bg-[#f9f6f2] transition-colors duration-300"
        >
          無料で曲を作ってみる
        </button>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <p className="text-sm text-white/50 mb-4">
            ふたりの主題歌
          </p>
          <p className="text-xs text-white/30">
            © 2025 あなたの主題歌. All rights reserved.
          </p>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
