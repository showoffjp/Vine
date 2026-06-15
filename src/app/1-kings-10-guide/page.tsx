"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Queen of Sheba",
  "Gold and the Throne",
  "Horses and Trade",
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
    id: "Overview",
    heading: "Overview of 1 Kings 10",
    reference: "1 Kings 10:1&ndash;29",
    paragraphs: [
      "First Kings chapter 10 stands at the dazzling summit of Solomon&rsquo;s reign, the moment when his wisdom and wealth had spread to the ends of the known world and the glory of his kingdom reached its peak. The chapter unfolds in two great panels: the visit of the Queen of Sheba, who comes from afar to test the king and is left breathless by what she finds; and a sweeping catalog of Solomon&rsquo;s staggering riches &mdash; gold, ivory, silver, cedar, horses, and chariots beyond counting.",
      "In the first panel (vv.1&ndash;13), a foreign monarch journeys to Jerusalem to test Solomon with hard questions. She arrives with a great caravan of spices, gold, and precious stones, intending to probe the famed wisdom of Israel&rsquo;s king. Solomon answers every riddle; nothing is too hard for him. When she beholds his wisdom and the splendor of his court, the temple, and the worship of the Lord, her spirit fails her, and she confesses that the half had not been told.",
      "In the second panel (vv.14&ndash;29), the narrator turns to an inventory of Solomon&rsquo;s wealth. Gold flows in at the rate of 666 talents a year. Great shields of beaten gold hang in the House of the Forest of Lebanon. A magnificent ivory throne, overlaid with the finest gold and flanked by lions, towers above the court. Silver is counted as nothing in those days, and the king&rsquo;s ships and traders bring exotic goods from distant lands.",
      "The chapter closes with the accumulation of horses and chariots, imported from Egypt and Kue and traded onward to neighboring kings. Solomon makes silver as common as stones in Jerusalem and cedar as plentiful as the lowland sycamore. It is a portrait of prosperity so abundant that ordinary measures of value collapse, and the king of Israel sits at the center of a vast network of trade and tribute.",
      "Yet for all its splendor, the chapter is poised on a knife&rsquo;s edge. The careful reader who knows the law of the king in Deuteronomy 17 cannot miss the warning signs: the multiplying of gold, the importing of horses from Egypt, the gathering of wealth that the king was expressly forbidden to amass. The glory of chapter 10 carries within it the seeds of the apostasy that erupts in chapter 11.",
      "Read in the full sweep of Scripture, 1 Kings 10 is both a genuine fulfillment and a sober warning. It fulfills the promise that God would give Solomon riches and honor beyond any king; it foreshadows the greater Son of David before whom the nations would bring their treasures. But it also marks the height from which a great fall begins, reminding the people of God that splendor without obedience cannot stand, and that a heart turned from the Lord can squander even the most glorious inheritance.",
    ],
  },
  {
    id: "Queen of Sheba",
    heading: "The Queen of Sheba&rsquo;s Visit",
    reference: "1 Kings 10:1&ndash;13",
    paragraphs: [
      "The chapter opens with a queen drawn by reputation: &ldquo;Now when the queen of Sheba heard of the fame of Solomon concerning the name of the Lord, she came to test him with hard questions&rdquo; (v.1). Sheba lay far to the south, likely in the region of Arabia, and the journey was long and costly. What drew her was not merely Solomon&rsquo;s wealth but his fame &lsquo;concerning the name of the Lord&rsquo; &mdash; the report that his wisdom was bound up with the God of Israel. She came as a tester, bearing riddles and hard questions to probe whether the reports could be true.",
      "Her arrival is described in lavish terms: &ldquo;She came to Jerusalem with a very great retinue, with camels bearing spices and very much gold and precious stones&rdquo; (v.2). This was no modest embassy but a royal caravan, a procession of wealth meant to match the splendor she had heard of. And when she came to Solomon, &ldquo;she told him all that was on her mind.&rdquo; She held nothing back, laying out every question and every difficulty she had carried across the desert to set before the wisest of kings.",
      "Solomon&rsquo;s response is total and unhesitating: &ldquo;And Solomon answered all her questions; there was nothing hidden from the king that he could not explain to her&rdquo; (v.3). No riddle stumped him, no difficulty exceeded his understanding. The wisdom God had granted at Gibeon, when Solomon asked not for riches but for an understanding heart, now stood the test of a foreign monarch&rsquo;s sharpest questions and proved inexhaustible. The reports had not been exaggerated; if anything, they had fallen short.",
      "What overwhelmed the queen, however, was not the answers alone but the whole world they revealed: &ldquo;And when the queen of Sheba had seen all the wisdom of Solomon, the house that he had built, the food of his table, the seating of his officials, and the attendance of his servants, their clothing, his cupbearers, and his burnt offerings that he offered at the house of the Lord, there was no more breath in her&rdquo; (vv.4&ndash;5). Wisdom, palace, provision, order, and worship together formed a vision so complete that it took her breath away. The climax of the list is the worship of the Lord &mdash; the offerings at the temple that crowned all the rest.",
      "Out of this astonishment came her confession: &ldquo;The report was true that I heard in my own land of your words and of your wisdom, but I did not believe the reports until I came and my own eyes had seen it. And behold, the half was not told me; your wisdom and prosperity surpass the report that I heard&rdquo; (vv.6&ndash;7). The famous phrase &lsquo;the half was not told me&rsquo; has echoed down the centuries as the verdict of an honest witness who found reality exceeding rumor. She had come skeptical and departed convinced beyond all expectation.",
      "Most striking of all, the queen turns from praising the king to praising the king&rsquo;s God: &ldquo;Blessed be the Lord your God, who has delighted in you and set you on the throne of Israel! Because the Lord loved Israel forever, he has made you king, that you may execute justice and righteousness&rdquo; (v.9). A pagan queen perceives what the splendor was meant to declare &mdash; that the Lord had set Solomon on the throne out of love for Israel, and for the purpose of justice. Then came the exchange of gifts: she gave Solomon 120 talents of gold, abundant spices, and precious stones, and Solomon gave her all that she desired, &ldquo;besides what he gave her according to the bounty of King Solomon&rdquo; (v.13).",
      "This episode carries a weight in Scripture far beyond its immediate splendor, for Jesus himself appeals to it. &ldquo;The queen of the South will rise up at the judgment with this generation and condemn it, for she came from the ends of the earth to hear the wisdom of Solomon, and behold, something greater than Solomon is here&rdquo; (Matthew 12:42). A Gentile queen crossed a desert to seek out the wisdom of Solomon; how much more should those who stand before the greater Son of David hear and heed his word. Her seeking becomes a rebuke to the indifferent and a foretaste of the nations streaming to Christ.",
    ],
  },
  {
    id: "Gold and the Throne",
    heading: "Solomon&rsquo;s Gold and the Great Throne",
    reference: "1 Kings 10:14&ndash;25",
    paragraphs: [
      "The narrator now turns from the queen to a measured catalog of Solomon&rsquo;s riches, beginning with the staggering annual income of gold: &ldquo;Now the weight of gold that came to Solomon in one year was 666 talents of gold&rdquo; (v.14). The figure is immense &mdash; many tons of gold each year &mdash; and it does not include the gold from traders, merchants, and the kings of Arabia and the governors. The number 666 has long arrested readers; whatever else it signifies, it marks an accumulation of wealth on a scale the law of Israel had warned its kings not to pursue.",
      "From this gold Solomon fashioned ceremonial armor of breathtaking value: &ldquo;King Solomon made 200 large shields of beaten gold; 600 shekels of gold went into each shield. And he made 300 shields of beaten gold; three minas of gold went into each shield. And the king put them in the House of the Forest of Lebanon&rdquo; (vv.16&ndash;17). These were not weapons for battle but emblems of glory, hung in the great hall as a display of the kingdom&rsquo;s splendor. The House of the Forest of Lebanon, built of cedar, became a treasury and a showcase of the king&rsquo;s magnificence.",
      "The centerpiece of the description is the great throne: &ldquo;The king also made a great ivory throne and overlaid it with the finest gold&rdquo; (v.18). Ivory and gold together formed a seat of unrivaled beauty and majesty. The throne was the symbolic heart of the kingdom, the place from which justice flowed, and its grandeur proclaimed the dignity of the office and the God who established it.",
      "The throne&rsquo;s design is described in loving detail: &ldquo;The throne had six steps, and the throne had a round top, and on each side of the seat were armrests and two lions standing beside the armrests, while twelve lions stood there, one on each end of a step on the six steps&rdquo; (vv.19&ndash;20). Twelve lions for the twelve tribes, lions for the kingly tribe of Judah from which the Messiah would come &mdash; the imagery spoke of strength, royalty, and the covenant people. The narrator concludes with a sweeping verdict: &ldquo;The like of it was never made in any kingdom.&rdquo; No throne on earth could rival it.",
      "So abundant was gold in Solomon&rsquo;s court that silver lost all reckoning: &ldquo;All King Solomon&rsquo;s drinking vessels were of gold, and all the vessels of the House of the Forest of Lebanon were of pure gold. None were of silver; silver was not considered as anything in the days of Solomon&rdquo; (v.21). In any ordinary kingdom silver was treasure; in Solomon&rsquo;s, it was beneath notice. The narrator drives home the sheer scale of the wealth by noting that the metal most nations prized was, in Jerusalem, scarcely worth mentioning.",
      "The source of this overflowing abundance lay partly in Solomon&rsquo;s far-flung trade: &ldquo;For the king had a fleet of ships of Tarshish at sea with the fleet of Hiram. Once every three years the fleet of ships of Tarshish used to come bringing gold, silver, ivory, apes, and peacocks&rdquo; (v.22). These triennial voyages brought exotic cargo from distant shores, the ivory of his throne and the gold of his vessels flowing in from the ends of the sea. Solomon stood at the hub of an international commerce that fed his unequaled treasury.",
      "The section ends by gathering the king&rsquo;s greatness into a single summary: &ldquo;Thus King Solomon excelled all the kings of the earth in riches and in wisdom. And the whole earth sought the presence of Solomon to hear his wisdom, which God had put into his mind&rdquo; (vv.23&ndash;24). The whole earth came seeking, just as the queen of Sheba had come, drawn by a wisdom that was God&rsquo;s gift. And year by year they brought their tribute &mdash; &ldquo;every one of them his present, articles of silver and gold, garments, myrrh, spices, horses, and mules, so much year by year&rdquo; (v.25). The nations streamed to Jerusalem, a faint and earthly anticipation of the day when the kings of the earth would bring their glory to the city of God.",
    ],
  },
  {
    id: "Horses and Trade",
    heading: "Horses, Chariots, and Trade",
    reference: "1 Kings 10:26&ndash;29",
    paragraphs: [
      "The chapter closes with Solomon&rsquo;s vast military and commercial machinery, beginning with his accumulation of cavalry and chariotry: &ldquo;And Solomon gathered together chariots and horsemen. He had 1,400 chariots and 12,000 horsemen, whom he stationed in the chariot cities and with the king in Jerusalem&rdquo; (v.26). This was a formidable force, distributed among fortified cities and kept near the king himself. To the eye it spoke of security and strength, a kingdom defended and a king beyond threat.",
      "The prosperity of the realm is captured in two unforgettable images of abundance: &ldquo;And the king made silver as common as stones in Jerusalem, and he made cedar as plentiful as the sycamore of the Shephelah&rdquo; (v.27). Silver, the treasure of the nations, lay about like the ordinary stones of the street; cedar, the costly timber of Lebanon, was as common as the lowly fig-bearing sycamore of the lowlands. The hyperbole conveys a wealth so vast that the rare had become commonplace and the precious had lost its scarcity.",
      "The narrator then details the international horse trade that fed Solomon&rsquo;s stables: &ldquo;And Solomon&rsquo;s import of horses was from Egypt and Kue, and the king&rsquo;s traders received them from Kue at a price&rdquo; (v.28). Solomon&rsquo;s agents operated a lucrative commerce, sourcing horses from Egypt and the region of Kue and managing the trade with the precision of a royal monopoly. Israel had become a center of the ancient arms and bloodstock market.",
      "The trade reached onward to neighboring powers: &ldquo;A chariot could be imported from Egypt for 600 shekels of silver and a horse for 150, and so through the king&rsquo;s traders they were exported to all the kings of the Hittites and the kings of Syria&rdquo; (v.29). Solomon was not merely a buyer but a middleman, channeling Egyptian chariots and horses onward to the Hittite and Aramean kings at a profit. His kingdom sat astride the trade routes, and the wealth of the surrounding nations flowed through his hands.",
      "Yet here, at the very pinnacle of glory, the discerning reader hears a quiet alarm. The law of the king in Deuteronomy 17 had set clear boundaries: the king &ldquo;must not acquire many horses for himself, or cause the people to return to Egypt in order to acquire many horses&rdquo; (Deut. 17:16); &ldquo;he shall not acquire many wives for himself, lest his heart turn away, nor shall he acquire for himself excessive silver and gold&rdquo; (Deut. 17:17). Every one of these prohibitions &mdash; horses from Egypt, the multiplying of gold, and soon the multiplying of wives &mdash; Solomon transgresses. The catalog of glory is also, read against the law, a catalog of disobedience.",
      "The placement of these verses is therefore deeply intentional. The Egyptian horses of verse 28 stand in direct tension with the warning of Deuteronomy not to send the people back to Egypt for horses; the heaping up of gold answers the warning against excessive silver and gold. The narrator records the splendor without overt comment, trusting the reader who knows the law to feel the gathering shadow. Glory at its height, the text whispers, already carries the seeds of decline.",
      "Thus 1 Kings 10 ends poised between fulfillment and foreboding. On one side stands the genuine grandeur of a wisdom and wealth given by God, drawing the nations to Jerusalem and pointing forward to the greater Son of David. On the other stands the slow accumulation of the very things the law forbade, preparing the way for chapter 11, where the multiplied wives turn Solomon&rsquo;s heart after other gods. The peak and the precipice are one and the same place, and the reader is left to learn that abundance is no safeguard against apostasy when the heart drifts from the Lord.",
    ],
  },
];

const videoItems = [
  { videoId: "Ki10sGd7VpQ", title: "BibleProject - Books of 1 and 2 Kings Overview" },
  { videoId: "Sh3bQwN5zRt", title: "The Queen of Sheba Visits Solomon - 1 Kings 10" },
  { videoId: "Gd8YpVx4fJn", title: "Solomon's Gold, the Great Throne, and the Splendor of His Reign" },
  { videoId: "Hr5XbZ2gM7T", title: "Glory at Its Height - Solomon and Deuteronomy 17" },
];

export default function FirstKings10GuidePage() {
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
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The First Book of Kings, Chapter 10
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The peak of Solomon&rsquo;s glory &mdash; the Queen of Sheba comes from the ends of the earth to test the king with hard questions and is left breathless, confessing &ldquo;the half was not told me.&rdquo; A catalog of staggering wealth follows: 666 talents of gold, the great ivory throne, golden shields, horses and chariots &mdash; splendor at its height, with the quiet seeds of decline already sown.
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
              Deepen your study of 1 Kings 10 through visual teaching on the Queen of Sheba&rsquo;s journey to test Solomon&rsquo;s God-given wisdom, the breathtaking catalog of gold, ivory, and the great throne that marks the peak of his reign, and the quiet warning of Deuteronomy 17 that foreshadows the apostasy to come.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Glory at Its Height</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            First Kings 10 shows Solomon at the summit of his splendor, with the nations streaming to Jerusalem and the Queen of Sheba confessing that the half had not been told. Yet read against the law of the king in Deuteronomy 17, the multiplied gold and the horses from Egypt sound a quiet warning. Abundance is no safeguard against apostasy when the heart drifts from the Lord &mdash; and the peak and the precipice are one and the same place.
          </p>
        </div>
      </main>
    </div>
  );
}
