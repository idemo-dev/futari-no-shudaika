import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ConceptData {
  title: string;
  sections: {
    heading: string;
    content: ContentBlock[];
  }[];
}

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "lyric-note"; lyric: string; note: string }
  | { type: "structure-item"; label: string; description: string }
  | { type: "table"; headers: string[]; rows: string[][] };

const concepts: Record<string, ConceptData> = {
  "chicken-steak-bento": {
    title: "チキンステーキ弁当",
    sections: [
      {
        heading: "楽曲コンセプト",
        content: [
          {
            type: "paragraph",
            text: "「チキンステーキ弁当」は、あるカップルの結婚式のために制作されたオリジナルソングです。",
          },
          {
            type: "paragraph",
            text: "タイトルは二人の実際のエピソードに由来しています。クリスマスに「チキンかステーキか」で2時間喧嘩して別れかけたという、くだらないけど本人たちには忘れられない思い出。「チキンかステーキ」だった二つが、弁当箱の中では「チキンとステーキ」として仲良く並んでいる。「or」が「and」に変わるその構造自体が、この曲のテーマです。",
          },
          {
            type: "paragraph",
            text: "この曲は、二人のくだらないエピソードを一つずつ「弁当の具材」として詰めていき、最後に蓋が閉まって弁当が完成するという構造で作られています。弁当を毎朝詰めるように、二人の日常は毎日繰り返される。壊れても、冷めても、不格好でも、また明日詰め直せばいい。それがこの曲のメッセージです。",
          },
        ],
      },
      {
        heading: "構造解説",
        content: [
          {
            type: "paragraph",
            text: "Verse 1は奥さん目線、Verse 2は旦那目線で書かれています。同じ「弁当」という比喩の中で、それぞれが相手のことを語っています。Chorus以降は二人共通の視点に合流し、最後は「ふたりの味」として一つになります。",
          },
          {
            type: "structure-item",
            label: "Verse 1",
            description: "最初の具材を詰める（出会い、ハンガーの思い出）",
          },
          {
            type: "structure-item",
            label: "Pre-Chorus",
            description: "メインのおかず（チキンとステーキ）を詰める",
          },
          {
            type: "structure-item",
            label: "Chorus",
            description: "好きも嫌いも全部おかずにして詰めていく宣言",
          },
          {
            type: "structure-item",
            label: "Verse 2",
            description: "日常の具材を詰める（弁当箱、靴下、タバコ）",
          },
          {
            type: "structure-item",
            label: "Bridge",
            description: "最後の一品を詰める（プロポーズ）",
          },
          {
            type: "structure-item",
            label: "Final Chorus",
            description: "蓋が閉まる＝弁当完成＝曲の結論",
          },
          {
            type: "structure-item",
            label: "Outro",
            description: "完成した弁当がある限り、帰る場所がある",
          },
        ],
      },
      {
        heading: "歌詞解説",
        content: [
          // Verse 1
          {
            type: "lyric-note",
            lyric: "迷子でよかった あの日迷わなきゃ / あなたの声を 知らないままだった",
            note: "大学のオリエンテーションで迷子になった奥さんを、旦那さんが案内してくれたのが出会い。「迷子でよかった」は逆説で、普通はネガティブな「迷子」を肯定している。Outroの「この弁当がある限り / どこにいたって帰ってこれる」と対になっており、冒頭で帰る場所がなかった人が、最後に帰る場所を得る物語。",
          },
          {
            type: "lyric-note",
            lyric: "何も言わない夜が いちばん甘くて / 味見もせずに 好きになってた",
            note: "付き合う前の寝落ち電話の時間。何も話さない沈黙が心地よかった。「甘くて」は弁当の味付けであり、甘酸っぱい恋の始まりでもある。「味見もせずに」は弁当のおかずを味見する行為と、相手を試さずに好きになったことの掛詞。",
          },
          {
            type: "lyric-note",
            lyric: "崩れたおかず ハンガーに掛けても / 味は変わらないって 知ってるから",
            note: "奥さんがハンガーを洗濯機に入れてバキバキに壊した話をしたら、旦那さんが「俺3つ入れたことあるよ」と笑った＝「この人だ」と思った瞬間。「崩れたおかず」は形が崩れた＝失敗したもの。形が崩れても味（本質）は変わらない。",
          },
          {
            type: "lyric-note",
            lyric: "全部まとめて 懸けてみるよ / 自分でも笑っちゃうけど",
            note: "「掛ける」の三重掛詞。ハンガーに掛ける＝服を掛ける日常動作、人生を賭ける＝覚悟、言葉を掛ける＝声をかけた出会い。ハンガーひとつのエピソードで人生を懸けるなんて、自分でも笑っちゃう。でも降りる気はない。",
          },
          // Pre-Chorus
          {
            type: "lyric-note",
            lyric: "チキンかステーキかで 壊れかけた夜 / 選べないなら 両方詰めちゃえ",
            note: "クリスマスにチキンかステーキかで2時間喧嘩し、別れかけた実話。タイトル「チキンステーキ弁当」の核心。「選べないなら両方詰めちゃえ」は弁当の具材選びであり、「好きか嫌いか選べないなら両方受け入れる」という曲のテーマの宣言。",
          },
          // Chorus
          {
            type: "lyric-note",
            lyric: "酸っぱい梅干しほど 真ん中にいる / 喧嘩の数だけ 味が締まっていく",
            note: "梅干し＝酸っぱい＝喧嘩。弁当の真ん中に置かれる梅干しは、日の丸弁当の象徴であり、防腐剤の役割もある。喧嘩（酸っぱいもの）ほど関係の真ん中にいて、喧嘩の数だけ関係が引き締まる。梅干しが弁当を守るように、喧嘩が関係を守っている。",
          },
          {
            type: "lyric-note",
            lyric: "好きも嫌いも 全部おかずにして / この弁当箱に 詰めていこう",
            note: "曲の核心メッセージ。好きなところも嫌いなところも、選別せず全部おかずにする。弁当箱＝二人の関係。「詰めていこう」の「いこう」は意志と未来を含む。",
          },
          {
            type: "lyric-note",
            lyric: "遠回りしながら 壊れながら / まだまだ隙間は あるでしょ",
            note: "遠回り＝指輪を取りに往復2時間の遠回り＝人生の遠回り。壊れながら＝喧嘩しながら。弁当の隙間＝まだ詰められる＝まだこれから。",
          },
          // Verse 2
          {
            type: "lyric-note",
            lyric: "弁当箱がまた 小さくなってる / 文句のふりして 味は変わんないの",
            note: "奥さんが旦那の弁当箱をどんどん小さくしてくるという実話。文句を言ってるようで味は変わらない＝愛情は変わらない。",
          },
          {
            type: "lyric-note",
            lyric: "ずるいよ そういうとこ / 靴下も気持ちも 裏返しのまま",
            note: "旦那が挙げた奥さんの嫌いなところ：靴下を裏返しのまま畳む。でも「気持ちも裏返し」＝文句や怒りは好きの裏返し。靴下の裏返しと感情の裏返しを一行で掛けている。",
          },
          {
            type: "lyric-note",
            lyric: "煙たいおかずを 嫌がってた君が / いつの間にか 燻されて笑ってる",
            note: "タバコは別れるレベルで喧嘩したが、旦那は策士で、段階的にアイコスをソファで吸えるまで交渉した。「煙たいおかず」は弁当の燻製おかずであり、タバコの煙でもある。「燻されて笑ってる」＝燻製が煙で味が変わるように、奥さんもいつの間にか受け入れて笑っている。",
          },
          {
            type: "lyric-note",
            lyric: "ソファに残った匂い それも隠し味 / 嫌いなはずが くせになるらしい",
            note: "アイコスのソファの匂い＝弁当の隠し味。嫌いだった匂いが家の匂いになった。「くせになるらしい」の「らしい」は旦那が奥さんの変化を少し距離を置いて観察している照れ隠し。",
          },
          // Bridge
          {
            type: "lyric-note",
            lyric: "冷めたって 美味いもんは美味い / 離れてた分 芯まで味が染みた",
            note: "旦那の就職で2年間の遠距離恋愛。冷めた弁当＝離れていた時間。でも冷めた弁当は味が芯まで染みる。離れていた分、関係の芯まで味が染みた。",
          },
          {
            type: "lyric-note",
            lyric: "遠回りの指輪 握ったまま / 家具より先に 君がよかった",
            note: "指輪の到着を待つ間に住みたい平屋が見つかり入籍を急ぐことに。家具を買いに行く日曜日、旦那は片道1時間かけて指輪を取りに行き2時間遅刻。「家具より先に君がよかった」は実話のプロポーズであり、弁当的には「家の具（家具）＝弁当の具」の掛詞。おかず（具）より先に、一緒に食べる人（君）がよかった。",
          },
          {
            type: "lyric-note",
            lyric: "しょうがないじゃん / 最後のひと品は 不格好でいい",
            note: "不格好なプロポーズ＝弁当の最後の一品。怒ってる奥さんに指輪を見せて「喧嘩を何回しても仲直りして、楽しく明るい家庭を築いていきましょう」と言ったのが実際のプロポーズ。「しょうがないじゃん」のカジュアルさが、この二人らしい。",
          },
          // Final Chorus
          {
            type: "lyric-note",
            lyric: "酸いも 甘いも 焦げたのも / 全部詰まって 蓋が閉まる",
            note: "「酸いも甘いも」は慣用句「酸いも甘いも噛み分ける」に掛けつつ、そこに「焦げたのも」を加えて崩している。失敗も含めて全部入った弁当。蓋が閉まる＝弁当が完成する＝曲が結論に至る。",
          },
          {
            type: "lyric-note",
            lyric: "チキンステーキ弁当 本日のおすすめ / くだらないけど これがふたりの味",
            note: "タイトル回収。弁当屋のアナウンスのような一行がラブソングのサビに来る意外性。「くだらないけど」が曲全体のテーマ。くだらないエピソードの集まりが、かけがえのない「ふたりの味」になっている。",
          },
          // Outro
          {
            type: "lyric-note",
            lyric: "この弁当がある限り / どこにいたって 帰ってこれる",
            note: "弁当がある＝作ってくれる人がいる＝帰る場所がある。Verse 1の「迷子でよかった」と対になる。迷子だった人がもう迷わない。弁当という日常が、帰る場所そのもの。",
          },
          {
            type: "lyric-note",
            lyric: "おかずは不揃い それでいい / これが ふたりの味",
            note: "不揃い＝壊れたハンガーも裏返しの靴下も煙たいおかずも、全部不揃い。でもそれでいい。完璧じゃないことが、ふたりの味。最後の一行で曲全体を締める。",
          },
        ],
      },
      {
        heading: "掛詞・仕掛けマップ",
        content: [
          {
            type: "table",
            headers: ["キーワード", "弁当としての意味", "エピソード/暗喩としての意味"],
            rows: [
              ["掛ける", "ハンガーに服を掛ける", "人生を賭ける / 言葉を掛ける"],
              ["味見もせずに", "弁当を味見しない", "相手を試さず好きになった"],
              ["梅干し", "弁当の真ん中の酸っぱいおかず", "喧嘩＝関係を守る防腐剤"],
              ["裏返し", "おかずの裏返し＝盛り付けが雑", "靴下裏返し＝気持ちの裏返し"],
              ["燻されて", "燻製＝煙で味が変わる", "タバコの煙に慣れた奥さん"],
              ["隠し味", "弁当に隠れた味付け", "ソファのタバコの匂い＝嫌い→家の匂い"],
              ["冷めた", "冷めた弁当", "遠距離2年＝でも味は染みた"],
              ["芯", "弁当の芯まで味が染みる", "心＝芯がブレない"],
              ["家具", "家の具＝家を構成するもの", "弁当の具＝おかずより君が先"],
              ["遠回り", "弁当箱を遠回りして詰める", "指輪を取りに往復2時間＝人生の遠回り"],
              ["酸いも甘いも", "弁当の味のバリエーション", "慣用句＋焦げ"],
              ["蓋が閉まる", "弁当の完成", "曲の結論＝二人の関係の完成"],
              ["不揃い", "おかずのサイズが揃ってない", "完璧じゃない二人＝でもそれでいい"],
            ],
          },
        ],
      },
      {
        heading: "エピソード対応表",
        content: [
          {
            type: "paragraph",
            text: "この曲の各モチーフは、カップルの実際のエピソードに基づいています。",
          },
          {
            type: "table",
            headers: ["弁当の具材", "実際のエピソード", "歌詞での表現"],
            rows: [
              ["チキンとステーキ", "クリスマスにどちらを食べるかで2時間喧嘩", "選べないなら両方詰めちゃえ"],
              ["ハンガー", "洗濯機でハンガーを壊した→「3つ回した」で意気投合", "崩れたおかず ハンガーに掛けても"],
              ["梅干し", "喧嘩を繰り返しても一緒にいる", "酸っぱい梅干しほど真ん中にいる"],
              ["弁当箱（小さくなる）", "奥さんが弁当箱を小さくしてくる", "弁当箱がまた小さくなってる"],
              ["裏返しの靴下", "靴下を裏返しのまま畳む癖", "靴下も気持ちも裏返しのまま"],
              ["煙たいおかず（燻製）", "タバコ→アイコスへの段階的交渉", "いつの間にか燻されて笑ってる"],
              ["隠し味", "ソファに残るアイコスの匂い", "ソファに残った匂い それも隠し味"],
              ["冷めた弁当", "旦那就職で2年間の遠距離恋愛", "冷めたって美味いもんは美味い"],
              ["最後のひと品", "不格好なプロポーズ", "最後のひと品は不格好でいい"],
              ["平屋の食卓", "家賃補助のために入籍→夢の平屋", "平屋の食卓に並べよう"],
            ],
          },
        ],
      },
    ],
  },
};

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concept = concepts[slug];
  if (!concept) return {};

  return {
    title: `${concept.title} コンセプト・歌詞解説 | ふたりの主題歌`,
    description: `「${concept.title}」の楽曲コンセプトと歌詞に込められた想いを解説`,
  };
}

export default async function ConceptPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const concept = concepts[slug];

  if (!concept) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      {/* Header */}
      <header className="pt-10 pb-6 text-center px-6">
        <Link
          href={`/songs/${slug}`}
          className="inline-flex items-center gap-1.5 text-[#c4a27a] text-xs tracking-wider hover:text-[#a8896a] transition-colors mb-6"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          楽曲ページに戻る
        </Link>
        <h1 className="heading-emotional text-2xl sm:text-3xl md:text-4xl text-[#2d2d2d] mb-2">
          {concept.title}
        </h1>
        <p className="text-sm text-[#a3a3a3] tracking-wider">
          コンセプト・歌詞解説
        </p>
      </header>

      {/* Divider */}
      <div className="flex justify-center mb-10">
        <div className="w-12 h-px bg-[#c4a27a]" />
      </div>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 pb-20">
        {concept.sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <h2 className="heading-emotional text-xl sm:text-2xl text-[#2d2d2d] mb-8 pb-3 border-b border-[#e8e0d8]">
              {section.heading}
            </h2>

            <div className="space-y-6">
              {section.content.map((block, blockIndex) => {
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={blockIndex}
                      className="text-[#2d2d2d] text-sm sm:text-base leading-[2] tracking-wide"
                    >
                      {block.text}
                    </p>
                  );
                }

                if (block.type === "lyric-note") {
                  return (
                    <div
                      key={blockIndex}
                      className="bg-white/60 rounded-xl p-5 sm:p-6 ring-1 ring-black/5"
                    >
                      <p className="font-serif text-[#c4a27a] text-sm sm:text-base font-medium leading-[1.8] mb-3">
                        {block.lyric}
                      </p>
                      <p className="text-[#555] text-xs sm:text-sm leading-[2] tracking-wide">
                        {block.note}
                      </p>
                    </div>
                  );
                }

                if (block.type === "structure-item") {
                  return (
                    <div key={blockIndex} className="flex gap-4 items-baseline">
                      <span className="text-[#c4a27a] text-xs font-medium tracking-wider shrink-0 w-24 sm:w-28 text-right">
                        {block.label}
                      </span>
                      <span className="text-[#2d2d2d] text-sm leading-[1.8]">
                        {block.description}
                      </span>
                    </div>
                  );
                }

                if (block.type === "table") {
                  return (
                    <div key={blockIndex} className="overflow-x-auto -mx-2">
                      <table className="w-full text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-[#e8e0d8]">
                            {block.headers.map((header, i) => (
                              <th
                                key={i}
                                className="text-left text-[#a3a3a3] font-medium py-3 px-2 tracking-wider"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className="border-b border-[#f0ebe5]"
                            >
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className={`py-3 px-2 leading-[1.8] ${
                                    cellIndex === 0
                                      ? "text-[#c4a27a] font-medium font-serif"
                                      : "text-[#555]"
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e8e0d8] py-10 text-center">
        <Link
          href={`/songs/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-[#c4a27a] hover:text-[#a8896a] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          楽曲ページに戻る
        </Link>
      </footer>
    </div>
  );
}
