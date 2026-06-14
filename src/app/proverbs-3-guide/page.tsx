"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Trust in the Lord with All Your Heart",
  "Honor the Lord with Your Wealth",
  "Do Not Despise the Lords Discipline",
  "Blessed Is the One Who Finds Wisdom",
  "Do Not Withhold Good",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Trust in the Lord with All Your Heart",
    heading: "Trust in the Lord with All Your Heart",
    reference: "Proverbs 3:1&ndash;8",
    paragraphs: [
      "Proverbs 3 opens in the warm voice of a father teaching a beloved son: &ldquo;My son, do not forget my teaching, but let your heart keep my commandments, for length of days and years of life and peace they will add to you&rdquo; (3:1&ndash;2). The whole chapter is framed as instruction passed from one generation to the next, and its first appeal is to remember &mdash; to bind God&rsquo;s words to the heart and not let them slip away. Wisdom in Proverbs is never abstract; it is a life lived under the words of God.",
      "The father continues with a vivid image: &ldquo;Let not steadfast love and faithfulness forsake you; bind them around your neck; write them on the tablet of your heart&rdquo; (3:3). Steadfast love and faithfulness &mdash; the very qualities of God himself &mdash; are to be worn as one wears a treasured ornament and engraved where they cannot be erased. The result is favor and good success in the sight of God and man (3:4). Wisdom shapes both the inner heart and the outward reputation.",
      "Then comes the verse that crowns the whole book, perhaps the most beloved in all of Proverbs: &ldquo;Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths&rdquo; (3:5&ndash;6). Here is the heartbeat of biblical wisdom &mdash; not a clever technique for managing life, but a posture of whole-hearted dependence on God. The call is total: trust with &ldquo;all&rdquo; your heart, acknowledge him in &ldquo;all&rdquo; your ways.",
      "Notice the contrast the proverb sets up. To trust the Lord with all the heart is the opposite of leaning on &ldquo;your own understanding.&rdquo; The temptation is not usually to deny God outright but to consult him politely and then quietly fall back on our own reasoning. Wisdom refuses that half-measure. It does not despise the mind, but it knows the mind&rsquo;s limits, and it will not make a god of its own perception. The promise attached is gracious and sweeping: he will make your paths straight.",
      "This is the great word for every decision and crossroads of life. To &ldquo;acknowledge him in all your ways&rdquo; is to bring God into the whole of life &mdash; work, money, relationships, plans &mdash; rather than reserving him for the religious corner. The guidance promised is not always a detailed map handed in advance; it is the assurance that the One who is trusted will himself straighten the road, removing obstacles and directing the steps of those who lean on him rather than on themselves.",
      "The section closes with a second pair of commands: &ldquo;Be not wise in your own eyes; fear the Lord, and turn away from evil. It will be healing to your flesh and refreshment to your bones&rdquo; (3:7&ndash;8). The fear of the Lord &mdash; reverent awe before God that shapes the whole of life &mdash; is the foundation of all wisdom, and its near companion is humility, the refusal to be &ldquo;wise in your own eyes.&rdquo; The promise is wholeness: trust and humility before God bring health to the very body and soul of the one who walks in them.",
    ],
  },
  {
    id: "Honor the Lord with Your Wealth",
    heading: "Honor the Lord with Your Wealth",
    reference: "Proverbs 3:9&ndash;10",
    paragraphs: [
      "Having called for whole-hearted trust, the father turns at once to the most practical and revealing test of it: money. &ldquo;Honor the Lord with your wealth and with the firstfruits of all your produce; then your barns will be filled with plenty, and your vats will be bursting with wine&rdquo; (3:9&ndash;10). Trust in the Lord is not a private sentiment; it shows itself in the open ledger of what we do with our possessions. Wisdom reaches all the way down into the wallet.",
      "The key word is &ldquo;firstfruits.&rdquo; In Israel the firstfruits were the first and best of the harvest, given to God before the rest was used. To honor the Lord with the firstfruits is to give him not the leftovers but the first and the best &mdash; to put him first in the order of our giving, and so to confess that everything we have comes from his hand. The order of giving reveals the order of the heart: what we give first is what we truly worship.",
      "This kind of giving is an act of trust as much as an act of worship. To give the first portion away, before one knows whether enough will remain, is to lean not on one&rsquo;s own resources but on the God who provides. It is the practical outworking of &ldquo;trust in the Lord with all your heart&rdquo; from the verses just before. Generosity and trust are bound together; the open hand is the trusting hand.",
      "The promise &mdash; barns filled with plenty and vats bursting with wine &mdash; must be read with care. Proverbs speaks in general truths about how God has ordered the world, not in ironclad guarantees that every giver will grow rich. The book itself knows that the righteous sometimes suffer and the wicked sometimes prosper. The point is that God honors those who honor him, and that a life of grateful, God-first generosity is the path of true blessing, however that blessing finally comes.",
      "The New Testament carries this wisdom forward and deepens it. &ldquo;God loves a cheerful giver,&rdquo; Paul writes, and he who supplies seed to the sower will supply and multiply what is given (2 Cor. 9). The aim is never to enrich ourselves by a transaction with God, but to hold our possessions loosely as stewards, honoring the Giver with the first and best, confident that we cannot out-give the One who gave his own Son.",
      "For every believer wrestling with finances, anxiety, and the fear of not having enough, this brief proverb is a quiet revolution. It moves money from the place of master to the place of servant, and it makes the offering plate a school of trust. To honor the Lord with our wealth is to break the grip of greed and worry, and to discover the freedom of those who know that their barns and their bread are finally in his hands.",
    ],
  },
  {
    id: "Do Not Despise the Lords Discipline",
    heading: "Do Not Despise the Lords Discipline",
    reference: "Proverbs 3:11&ndash;12",
    paragraphs: [
      "After the bright promises of blessing, the father turns to a harder and more tender word: &ldquo;My son, do not despise the Lord&rsquo;s discipline or be weary of his reproof, for the Lord reproves him whom he loves, as a father the son in whom he delights&rdquo; (3:11&ndash;12). Here the book anticipates a real difficulty: the wise and trusting life still meets hardship and correction. How are we to read the painful providences of God?",
      "There are two wrong responses, and the proverb names them both. The first is to &ldquo;despise&rdquo; the Lord&rsquo;s discipline &mdash; to make light of it, to harden the heart and refuse to learn. The second is to &ldquo;be weary&rdquo; of his reproof &mdash; to be crushed and discouraged, to give up under it. Between contempt and despair lies the path of wisdom: to receive God&rsquo;s correction as a child receives the loving discipline of a good father.",
      "The reason transforms everything: &ldquo;the Lord reproves him whom he loves.&rdquo; Discipline, far from being a sign that God has abandoned us, is the very evidence of his fatherly love. The proverb dares to say that God corrects &ldquo;the son in whom he delights.&rdquo; His reproof is not the cold punishment of a judge but the loving shaping of a Father who is committed to his child&rsquo;s good and will not leave him as he is.",
      "This means that the difficulties of life are not random or meaningless for those who belong to God. They are taken up into his purpose and made instruments of his love &mdash; pruning what is fruitless, training us in righteousness, weaning us from lesser trusts so that we lean more fully on him. The same God who promised to make our paths straight sometimes does so through the hard road, and even our reproofs are gifts from a delighting Father.",
      "The writer of Hebrews quotes these very verses to comfort a suffering church: &ldquo;Do not regard lightly the discipline of the Lord, nor be weary when reproved by him&rdquo; (Heb. 12:5&ndash;6). He draws out the conclusion the proverb implies &mdash; that the absence of all discipline would mean we were not truly sons, but that God&rsquo;s loving correction is the proof of our belonging. Discipline is painful for the moment, yet it yields the peaceful fruit of righteousness to those trained by it.",
      "For all who suffer, this short passage reframes the entire experience of pain. It does not promise that hardship will be easy or its meaning always clear, but it anchors the heart in the love of God when life is hard. The trusting believer can say, even in the valley, that the hand which corrects is the hand of a Father who delights in his child &mdash; and so neither despise the discipline nor grow weary under it, but receive it as love.",
    ],
  },
  {
    id: "Blessed Is the One Who Finds Wisdom",
    heading: "Blessed Is the One Who Finds Wisdom",
    reference: "Proverbs 3:13&ndash;26",
    paragraphs: [
      "The chapter now breaks into open praise of wisdom herself: &ldquo;Blessed is the one who finds wisdom, and the one who gets understanding, for the gain from her is better than gain from silver and her profit better than gold&rdquo; (3:13&ndash;14). Wisdom is personified as a woman of priceless worth, and the father piles up comparisons to show that nothing the world prizes can rival her. &ldquo;She is more precious than jewels, and nothing you desire can compare with her&rdquo; (3:15).",
      "Wisdom holds gifts in both her hands: &ldquo;Long life is in her right hand; in her left hand are riches and honor. Her ways are ways of pleasantness, and all her paths are peace&rdquo; (3:16&ndash;17). Length of days, true wealth, honor, pleasantness, peace &mdash; these are the dowry of the one who embraces wisdom. The life ordered by the fear of the Lord is not a grim and joyless duty but a path of pleasantness and a road that runs toward peace.",
      "Then comes one of the most beautiful images in the book: &ldquo;She is a tree of life to those who lay hold of her; those who hold her fast are called blessed&rdquo; (3:18). The phrase &ldquo;tree of life&rdquo; reaches back to the garden of Eden, to the life that was lost when humanity grasped at the wrong tree. Wisdom, the proverb says, is a tree of life regained &mdash; to lay hold of her and hold her fast is to recover something of the life for which we were made.",
      "The father then lifts our eyes to the cosmic scope of this wisdom: &ldquo;The Lord by wisdom founded the earth; by understanding he established the heavens; by his knowledge the deeps broke open, and the clouds drop down the dew&rdquo; (3:19&ndash;20). The very wisdom offered to the son is the wisdom by which God made and ordered the universe. To walk in wisdom is to live in harmony with the grain of reality itself, to align one&rsquo;s small life with the deep structure God built into the world.",
      "From this the instruction flows: &ldquo;My son, keep sound wisdom and discretion&hellip; then you will walk on your way securely, and your foot will not stumble. If you lie down, you will not be afraid; when you lie down, your sleep will be sweet&rdquo; (3:21&ndash;24). The promises are wonderfully ordinary and deeply reassuring &mdash; a secure step, a foot that does not stumble, and the gift of sweet, untroubled sleep. Wisdom guards the whole of life, both the waking road and the resting night.",
      "And so the fearful heart is steadied: &ldquo;Do not be afraid of sudden terror or of the ruin of the wicked, when it comes, for the Lord will be your confidence and will keep your foot from being caught&rdquo; (3:25&ndash;26). Here the chapter circles back to its opening theme of trust. The one who has laid hold of wisdom need not be ruled by the dread of sudden disaster, because his confidence is not in his own footing but in the Lord himself, who keeps the steps of those who walk in his ways.",
    ],
  },
  {
    id: "Do Not Withhold Good",
    heading: "Do Not Withhold Good from Those to Whom It Is Due",
    reference: "Proverbs 3:27&ndash;35",
    paragraphs: [
      "The chapter ends by bringing wisdom down to the daily fabric of how we treat our neighbors. &ldquo;Do not withhold good from those to whom it is due, when it is in your power to do it&rdquo; (3:27). True wisdom is not merely inward devotion; it is active goodness toward others. The trust and the fear of the Lord that fill the chapter must overflow into open-handed kindness, paying what is owed and doing the good that lies within our reach.",
      "The proverb presses against a subtle and very common sin &mdash; the sin of delay: &ldquo;Do not say to your neighbor, Go, and come again, tomorrow I will give it, when you have it with you&rdquo; (3:28). It is easy to put off doing good, to defer the kindness we could show today, to make our neighbor wait when we already have the means to help. Wisdom names this for what it is: a withholding of good, and it calls us to act now rather than to postpone.",
      "A series of warnings follows against the ways of strife and violence: &ldquo;Do not contrive harm against your neighbor, who dwells trustingly beside you. Do not contend with a man for no reason, when he has done you no harm&rdquo; (3:29&ndash;30). Wisdom is a good neighbor &mdash; it does not plot, does not pick needless quarrels, and does not betray the trust of those who live alongside it in peace. The wise life is woven into a community, and it seeks that community&rsquo;s good.",
      "The father then warns against a deeper danger &mdash; the temptation to admire the wrong people: &ldquo;Do not envy a man of violence and do not choose any of his ways, for the devious person is an abomination to the Lord, but the upright are in his confidence&rdquo; (3:31&ndash;32). It is possible to look at those who get ahead by force and cunning and to wish to imitate them. Wisdom refuses that envy, knowing that the Lord&rsquo;s intimate friendship belongs to the upright, not to the crooked.",
      "The chapter closes with a series of sharp contrasts that sum up the whole moral order of the book: &ldquo;The Lord&rsquo;s curse is on the house of the wicked, but he blesses the dwelling of the righteous. Toward the scorners he is scornful, but to the humble he gives favor&rdquo; (3:33&ndash;34). Two roads diverge, and they lead to two destinies. The final word lands on humility: God resists the proud scoffer but pours out grace on the lowly &mdash; a verse the New Testament quotes to remind us that God gives grace to the humble (James 4:6; 1 Pet. 5:5).",
      "&ldquo;The wise will inherit honor, but fools get disgrace&rdquo; (3:35). So Proverbs 3 ends where wisdom always ends &mdash; in the choice between two ways of life and their two outcomes. The whole chapter has traced a single path: trust the Lord with all your heart, honor him with your wealth, receive his discipline as love, lay hold of wisdom as a tree of life, and let it all flow out in good done to your neighbor. This is the way of the humble, and it leads to the favor of God.",
    ],
  },
];

const videoItems = [
  { videoId: "AzmYV8GNAIM", title: "BibleProject - Overview - Book of Proverbs" },
  { videoId: "u-_jh-q-bIM", title: "Trust in the Lord with All Your Heart - Proverbs 3" },
  { videoId: "Yt5oNVz2spA", title: "The Fear of the Lord - Wisdom in Proverbs 3" },
  { videoId: "X4i5GDxZ6vM", title: "A Tree of Life - Finding Wisdom in Proverbs 3" },
];

export default function Proverbs3GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Proverbs Chapter Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Proverbs 3
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            &ldquo;Trust in the Lord with all your heart, and do not lean on your own understanding&rdquo; &mdash; a verse-by-verse journey through the great chapter of wisdom: whole-hearted trust, honoring God with the firstfruits, receiving his discipline as love, finding wisdom as a tree of life, and doing good to your neighbor.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Proverbs 3 through visual teaching on whole-hearted trust in the Lord, the fear of the Lord as the beginning of wisdom, honoring God with the firstfruits, and finding wisdom as a tree of life.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Trust in the Lord with All Your Heart</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Proverbs 3 gathers the whole of the wise life into a single path: trust God with all your heart, honor him with your wealth, receive his discipline as the love of a delighting Father, lay hold of wisdom as a tree of life, and let it overflow in good done to your neighbor. Its enduring call still steadies every heart that must choose its way: &ldquo;In all your ways acknowledge him, and he will make straight your paths.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
