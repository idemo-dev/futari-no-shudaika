export function BrandStatement() {
  return (
    <section className="py-16 md:py-32 px-10 md:px-6 bg-[#fefefe]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative line */}
        <div className="w-12 h-px bg-[#c4a27a] mx-auto mb-12" />

        {/* Brand statement - emotional copy with serif */}
        <p className="heading-emotional text-xl md:text-3xl lg:text-4xl text-[#2d2d2d] leading-relaxed mb-12">
          初めて目が合った日、
          <br />
          一緒に笑った夜、
          <br />
          ケンカして仲直りした朝。
        </p>

        <p className="text-[#737373] text-base md:text-lg leading-loose mb-12">
          ふたりの間に積み重なった、
          <br className="md:hidden" />
          かけがえのない時間。
          <br />
          その全てを、たった一曲の歌に込めて。
        </p>

        {/* Decorative line */}
        <div className="w-12 h-px bg-[#c4a27a] mx-auto" />
      </div>
    </section>
  );
}
