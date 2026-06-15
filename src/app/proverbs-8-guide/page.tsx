"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

const videoItems = [
  { videoId: "dQw4w9WgXcW", title: "Proverbs 8 - Wisdom Cries Aloud" },
  { videoId: "jNQXAC9IVRw", title: "Wisdom Personified and Pre-existence" },
  { videoId: "Lm0pQ3R7sWh", title: "The Amon Debate - Craftsman or Nursling" },
  { videoId: "Pk9gHy2Mn4Q", title: "Proverbs 8 and Christological Interpretation" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <div style={{ background: `linear-gradient(160deg, #0D0D1F 0%, #12121F 60%, #1a1a30 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "60px 24px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: GOLD, color: "#000", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "4px 12px", borderRadius: 4, marginBottom: 18, fontFamily: "system-ui, sans-serif" }}>
            Proverbs 8
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.15, color: TEXT }}>
            Wisdom Personified
          </h1>
          <p style={{ fontSize: 18, color: MUTED, margin: "0 0 24px", lineHeight: 1.7, fontStyle: "italic" }}>
            &ldquo;Does not wisdom call? Does not understanding raise her voice?&rdquo; &mdash; Proverbs 8:1
          </p>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
            Proverbs 8 stands as one of the most theologically rich and debated chapters in all of wisdom literature. Here,
            Wisdom steps onto the stage of history not merely as an abstract concept but as a living, speaking, beckoning person &mdash;
            one who was present before creation, delighting beside the Lord, and now calling every human soul to life.
          </p>
        </div>
      </div>

      {/* TABS */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", display: "flex", gap: 0, overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === i ? `2px solid ${GOLD}` : "2px solid transparent",
                color: activeTab === i ? GOLD : MUTED,
                cursor: "pointer",
                fontFamily: "system-ui, sans-serif",
                fontSize: 14,
                fontWeight: activeTab === i ? 700 : 400,
                padding: "16px 20px",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>

        {/* TAB 0 - Overview */}
        {activeTab === 0 && (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Chapter Overview
            </h2>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "20px 24px", marginBottom: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: GOLD, marginTop: 0, marginBottom: 8, fontFamily: "system-ui, sans-serif", textTransform: "uppercase", letterSpacing: 1 }}>
                Structure at a Glance
              </h3>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.8 }}>
                Verses 1&ndash;3: Wisdom&rsquo;s public proclamation | Verses 4&ndash;21: Wisdom&rsquo;s character and gifts |
                Verses 22&ndash;31: Wisdom&rsquo;s pre-existence and delight at creation | Verses 32&ndash;36: Wisdom&rsquo;s invitation and warning
              </p>
            </div>

            {/* Section 1 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GOLD, marginTop: 40, marginBottom: 12 }}>
              Wisdom at the Heights and Gates (vv. 1&ndash;3)
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The chapter opens with a dramatic scene. Unlike the seductive woman of chapter 7 who lurks in the shadows of evening, Wisdom takes her stand in the most public places imaginable. She cries aloud &ldquo;on the heights beside the way, at the crossroads she takes her stand&rdquo; (v.2). These are not marginal spaces &mdash; they are the hubs of commerce, governance, and community life in the ancient Near East." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The gates of ancient cities were the nerve centers of civic life. Here legal transactions were conducted, elders sat in judgment, merchants negotiated, and travelers entered. By positioning Wisdom at the city gate, the author signals that she is not esoteric or hidden &mdash; she is available to all, standing in plain sight, issuing a public appeal that anyone may hear." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The Hebrew term <em>meromiym</em> (heights, v.2) may also evoke the concept of eminence &mdash; wisdom stands above the fray, looking out over the entire city, her voice carrying over walls and rooftops. This is wisdom not whispering in corners but proclaiming from the rooftops, pressing her case before all who will listen." }}
            />

            {/* Section 2 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GOLD, marginTop: 40, marginBottom: 12 }}>
              The Universal Call: Simple Ones and Kings Alike (vv. 4&ndash;11)
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Wisdom&rsquo;s audience in verses 4&ndash;11 is universal in its sweep. She calls to &ldquo;all people&rdquo; but addresses specifically the <em>petaim</em> (simple ones) and the <em>kesilim</em> (fools). The simple ones are not morally evil but nave, lacking formed convictions, easily swayed &mdash; they are in danger precisely because of their openness. The fools have set themselves against wisdom, but even they are invited." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The address then pivots to the powerful: &ldquo;By me kings reign, and rulers decree what is just; by me princes rule, and nobles, all who govern justly&rdquo; (vv.15&ndash;16). Wisdom is not class-bound. She speaks equally to the naive youth and to the crowned monarch. This egalitarian vision of wisdom &mdash; available to all, necessary for all &mdash; stands as one of the great leveling doctrines of the Hebrew Bible." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verse 11 offers the familiar comparison: &ldquo;For wisdom is better than jewels, and all that you may desire cannot compare with her.&rdquo; This echoes Proverbs 3:15 and the entire thrust of the book, but here it comes from Wisdom&rsquo;s own lips. She is not merely described by another; she testifies to her own incomparable worth. This self-commendation adds a rhetorical urgency that sets Proverbs 8 apart from other wisdom passages." }}
            />

            {/* Section 3 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GOLD, marginTop: 40, marginBottom: 12 }}>
              Wisdom&rsquo;s Character: Prudence, Truth, and Fear of the LORD (vv. 12&ndash;13)
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verses 12&ndash;13 function as a kind of theological identity card for Wisdom. She dwells with prudence (<em>ormah</em>) and possesses knowledge of discretion. The Hebrew <em>ormah</em> is fascinating &mdash; it is the same root used for the &ldquo;crafty&rdquo; serpent in Genesis 3:1. But context transforms meaning: what the serpent perverted, Wisdom redeems. Prudence in the service of righteousness is one of wisdom&rsquo;s defining marks." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The fear of the LORD, introduced in verse 13, is crucial: &ldquo;The fear of the LORD is hatred of evil.&rdquo; This is the epistemological center of all biblical wisdom. True wisdom is not merely intellectual &mdash; it is moral and relational. It begins with proper orientation toward God, which necessarily involves hating what God hates: pride, arrogance, the evil way, and the perverted mouth. Wisdom has an ethical spine." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The listing of vices that Wisdom hates &mdash; pride, arrogance, the evil way, the perverted mouth &mdash; forms an implicit mirror of what Wisdom loves: humility, lowliness, the righteous path, and truthful speech. This moral profile will find its New Testament echo in the beatitudes and in Paul&rsquo;s description of love in 1 Corinthians 13. The wisdom tradition and the gospel tradition share deep ethical roots." }}
            />

            {/* Section 4 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GOLD, marginTop: 40, marginBottom: 12 }}>
              Significance of Proverbs 8 in the Biblical Canon
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "No chapter of Proverbs has generated more theological reflection across the centuries than chapter 8. Jewish interpreters saw in this personified Wisdom a description of Torah itself &mdash; the pre-existent Law of Moses through which God created and orders the universe. The targums and rabbinic midrashim developed this identification extensively, linking Wisdom&rsquo;s pre-existence to the primordial Torah that existed before creation." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Early Christian interpreters, by contrast, saw in this text a pre-figuration of the eternal Son of God. The Logos theology of the Gospel of John, the &ldquo;firstborn of all creation&rdquo; language of Colossians 1, and the &ldquo;through whom he created the world&rdquo; of Hebrews 1:2 all resonate with Wisdom&rsquo;s self-description in Proverbs 8. The chapter became a key battleground in the Arian controversy of the 4th century." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Whether one reads the chapter as a poetic personification, as a pre-figuration of Christ, or as a hypostasis of divine Wisdom, the theological stakes are enormous. Proverbs 8 invites the reader into questions about the nature of divine wisdom, the relationship between God and creation, and the identity of the one who mediates between them &mdash; questions that have animated theological inquiry for millennia and continue to do so today." }}
            />
          </div>
        )}

        {/* TAB 1 - Key Themes */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Key Theological Themes
            </h2>

            {/* Section 1 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: PURPLE, marginTop: 40, marginBottom: 12 }}>
              Divine Wisdom as a Person
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The personification of Wisdom in Proverbs 8 is one of the most striking literary and theological phenomena in the Hebrew Bible. Wisdom (<em>Chokmah</em>) appears not as an abstraction but as a feminine figure who speaks in the first person, has a history that precedes creation, and maintains a relationship of intimacy with the LORD. Whether this personification is purely literary or points to something more ontological has been debated since antiquity." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "In the ancient Near Eastern context, personified wisdom figures were not unique to Israel. Egyptian <em>Ma&rsquo;at</em> (truth/justice) was a goddess who embodied cosmic order. But Israel&rsquo;s Wisdom is emphatically monotheistic in her self-presentation: she does not present herself as a rival deity but as one who stands beside the LORD, was &ldquo;beside him&rdquo; as he worked, and whose very existence flows from his." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The shift to full personhood in chapter 8 &mdash; from the earlier personification in Proverbs 1:20&ndash;33 &mdash; is dramatic. Here Wisdom not only speaks but gives her own autobiography: she was &ldquo;set up&rdquo; or &ldquo;established&rdquo; before the hills, she was &ldquo;beside him&rdquo; as the world was made, she &ldquo;rejoiced before him always.&rdquo; This is the language not of an abstract quality but of a being with history, personality, and relationship." }}
            />

            {/* Section 2 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: PURPLE, marginTop: 40, marginBottom: 12 }}>
              The Qanah Debate: Created or Possessed?
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verse 22 is the single most contested verse in Proverbs: &ldquo;The LORD <em>qanah</em> me at the beginning of his work, the first of his acts of old.&rdquo; The Hebrew root <em>qanah</em> (spelled qoph-nun-heh) carries a range of meanings that has fueled centuries of theological controversy. In most contexts it means &ldquo;to acquire,&rdquo; &ldquo;to possess,&rdquo; or &ldquo;to buy.&rdquo; Eve uses it in Genesis 4:1 when she says &ldquo;I have <em>qanah</em> a man with the help of the LORD.&rdquo;" }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The Septuagint (LXX), the Greek translation made around 250 BC, rendered this verb as <em>ektisen</em> &mdash; &ldquo;created.&rdquo; This translation became theologically decisive: Arius of Alexandria in the early 4th century cited it as proof that the Son of God was a creature, the first and greatest of God&rsquo;s creations, but a creature nonetheless. If the pre-existent Wisdom was &ldquo;created&rdquo; and Wisdom is Christ, then Christ is a created being." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Orthodox defenders responded in several ways. Some, like Athanasius, argued that the passage refers not to the eternal Son in his divine nature but to the incarnate Christ &mdash; &ldquo;created&rdquo; here means the taking on of human nature. Others argued that <em>qanah</em> means &ldquo;possessed&rdquo; not &ldquo;created,&rdquo; implying that Wisdom was eternally possessed by God, not brought into being. This latter reading is supported by Proverbs 8:23, which uses <em>nassakhti</em> (&ldquo;set up&rdquo; or &ldquo;installed&rdquo;) and 8:24&ndash;25 which emphasize Wisdom&rsquo;s existence before any created thing." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Modern scholarship is divided. Some scholars (like R.N. Whybray) argue for a purely literary personification with no ontological claims. Others (like Michael Fox) see a deliberate hypostatization &mdash; a real distinction within the divine being. What is clear is that the <em>qanah</em> debate represents one of the most consequential philological-theological disputes in the history of biblical interpretation, with implications for Christology, Trinitarianism, and the nature of divine wisdom itself." }}
            />

            {/* Section 3 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: PURPLE, marginTop: 40, marginBottom: 12 }}>
              The Amon Debate: Craftsman or Little Child?
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verse 30 contains another famously contested word: &ldquo;Then I was beside him, like an <em>amon</em>.&rdquo; The Hebrew <em>amon</em> (aleph-mem-vav-nun) is a hapax legomenon in this sense &mdash; a word appearing only once with this particular force &mdash; and it has two strong competing interpretations. The first reading is &ldquo;master craftsman&rdquo; or &ldquo;architect,&rdquo; suggesting that Wisdom was beside God as the skilled artisan through whom all things were fashioned. The second reading is &ldquo;nursling&rdquo; or &ldquo;little child,&rdquo; suggesting that Wisdom was beside God as the beloved child who plays and delights in the Father&rsquo;s presence." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The &ldquo;craftsman&rdquo; reading finds support in the related Akkadian word <em>ummanu</em> (skilled craftsman) and fits naturally with the creation context of verses 22&ndash;31. The New Testament parallel would be Colossians 1:16 &mdash; &ldquo;all things were created through him and for him&rdquo; &mdash; where Christ is the active agent of creation, much as a divine craftsman. John 1:3 (&ldquo;all things were made through him&rdquo;) similarly implies active creative agency." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The &ldquo;nursling&rdquo; reading, however, has its own strong support. The verb in verse 30 &mdash; &ldquo;I was daily his delight, rejoicing before him always&rdquo; &mdash; describes not the activity of a craftsman but the play and joy of a child. The picture of Wisdom &ldquo;playing in his inhabited world and delighting in the children of man&rdquo; (v.31) fits the image of a joyful, playful child far better than a skilled artisan. The LXX renders <em>amon</em> as <em>harmozousa</em> (fitting together, arranging), inclining toward the craftsman reading, while other versions and interpreters favor the nursling." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The theological stakes of this choice are significant. If Wisdom is the divine craftsman, the emphasis falls on her instrumental role in creation &mdash; she is the active mediating agent through whom God creates. If she is the nursling, the emphasis falls on the relational dimension &mdash; she is the beloved of God, the recipient of delight, and the link between God&rsquo;s love and humanity. Most commentators today see the two readings as theologically complementary, capturing different aspects of Wisdom&rsquo;s unique position at the intersection of divine creativity and divine love." }}
            />

            {/* Section 4 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: PURPLE, marginTop: 40, marginBottom: 12 }}>
              Wisdom and Christ: Colossians 1, John 1, and Early Church Christology
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The New Testament writers, writing as Jewish interpreters steeped in the wisdom tradition, drew deliberately on Proverbs 8 in their descriptions of Jesus Christ. The prologue of John&rsquo;s Gospel (&ldquo;In the beginning was the Word, and the Word was with God, and the Word was God...through him all things were made&rdquo;) mirrors the structure of Proverbs 8:22&ndash;31 almost point for point: pre-existence, presence with God, agency in creation, and now entering the world to dwell among men." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Colossians 1:15&ndash;20, the great &ldquo;Christ hymn,&rdquo; echoes Proverbs 8 even more directly. Christ as &ldquo;the firstborn of all creation&rdquo; (<em>prototokos pases ktiseos</em>) parallels Wisdom&rsquo;s &ldquo;first of his works&rdquo; (v.22). &ldquo;In him all things were created... all things were created through him and for him&rdquo; parallels Wisdom&rsquo;s role as craftsman (or nursling) beside God at creation. &ldquo;He is before all things, and in him all things hold together&rdquo; parallels the establishment of Wisdom &ldquo;from everlasting, from the beginning.&rdquo;" }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The early Church Fathers returned again and again to Proverbs 8. Justin Martyr identified the pre-existent Logos with Wisdom. Irenaeus of Lyons used Wisdom&rsquo;s creative role to argue for the full divinity of the Son. Origen, with his more nuanced (and sometimes problematic) framework, saw Wisdom as expressing the eternal generation of the Son from the Father. Athanasius, champion of Nicene orthodoxy, devoted substantial effort in his <em>Contra Arianos</em> to showing that Proverbs 8:22 does not imply that the Son is a creature." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The Nicene Creed&rsquo;s language &mdash; &ldquo;begotten, not made&rdquo; &mdash; was partly forged in response to the Arian reading of Proverbs 8:22. The Council of Nicaea (325 AD) affirmed that the Son is &ldquo;of the same substance&rdquo; (<em>homoousios</em>) as the Father, not a created intermediary. This Christological settlement shaped all subsequent Christian theology, and Proverbs 8 was the exegetical battlefield on which it was fought." }}
            />
          </div>
        )}

        {/* TAB 2 - Verse by Verse */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Verse by Verse Study
            </h2>

            {/* Section 1 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: TEAL, marginTop: 40, marginBottom: 12 }}>
              Wisdom&rsquo;s Gifts and Royal Governance (vv. 14&ndash;21)
            </h3>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "16px 20px", marginBottom: 20, borderLeft: `3px solid ${TEAL}` }}>
              <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>
                &ldquo;I have counsel and sound wisdom; I have insight; I have strength. By me kings reign, and rulers decree what is just.&rdquo; &mdash; Proverbs 8:14&ndash;15
              </p>
            </div>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verses 14&ndash;21 present Wisdom&rsquo;s first-person catalog of her gifts and her role in human governance. The four terms in verse 14 are significant: <em>etsah</em> (counsel, strategic advice), <em>tushiyah</em> (sound wisdom, often translated &ldquo;abiding success&rdquo; or &ldquo;sound guidance&rdquo; &mdash; a rare and powerful term), <em>binah</em> (understanding, discernment), and <em>gevurah</em> (strength, might). Together they form a complete profile of leadership capacity grounded in divine wisdom." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The claim that &ldquo;by me kings reign&rdquo; is extraordinary. Wisdom does not merely assist kings &mdash; she is the source of their legitimacy and effectiveness. This is a political theology rooted in the wisdom tradition: just governance is not an autonomous human achievement but flows from alignment with divine wisdom. The ancient Near Eastern ideology of the wise king who governs in accordance with cosmic order (<em>Ma&rsquo;at</em> in Egypt, <em>me</em> in Mesopotamia) is here transformed into Israel&rsquo;s theology of wisdom-based kingship." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verse 17 is one of the most personally tender in the chapter: &ldquo;I love those who love me, and those who seek me diligently find me.&rdquo; The verb <em>ahev</em> (&ldquo;love&rdquo;) is the same word used for covenantal love throughout the Hebrew Bible. Wisdom&rsquo;s love is not indifferent or impersonal; it is responsive. Those who seek her diligently &mdash; <em>meshahar</em>, from the root meaning to seek early in the morning, with urgency &mdash; will find her." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verses 18&ndash;21 describe what Wisdom brings: riches, honor, enduring wealth, righteousness, and fruit better than gold or choice silver. The emphasis on &ldquo;enduring wealth&rdquo; and &ldquo;righteousness&rdquo; together suggests that the prosperity wisdom brings is not merely material but relational and moral &mdash; a life rightly ordered before God and neighbor. Verse 21 closes this section with Wisdom&rsquo;s personal commitment: &ldquo;granting an inheritance to those who love me, and filling their treasuries.&rdquo;" }}
            />

            {/* Section 2 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: TEAL, marginTop: 40, marginBottom: 12 }}>
              Before Creation: Wisdom&rsquo;s Pre-existence (vv. 22&ndash;26)
            </h3>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "16px 20px", marginBottom: 20, borderLeft: `3px solid ${GOLD}` }}>
              <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>
                &ldquo;The LORD possessed me at the beginning of his work, the first of his acts of old. Ages ago I was set up, at the first, before the beginning of the earth.&rdquo; &mdash; Proverbs 8:22&ndash;23
              </p>
            </div>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The cosmogonic poem of verses 22&ndash;31 is the theological heart of the chapter. Wisdom now recounts her own pre-creation history in a series of temporal clauses that push existence backward before every created thing: before the deeps, before the mountains, before the fields, before the hills, before the earth &mdash; Wisdom was already there. The accumulative force of these &ldquo;before&rdquo; clauses is overwhelming: Wisdom&rsquo;s antiquity is absolute." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The phrase <em>reshit darko</em> (v.22) &mdash; &ldquo;the beginning of his work&rdquo; &mdash; deliberately echoes <em>bereshit</em>, the opening word of Genesis. Wisdom was there at the very starting point of divine creative activity. This is not a late addition in the sequence of creation but the very first of God&rsquo;s &ldquo;works&rdquo; or &ldquo;ways.&rdquo; Some commentators see <em>derekh</em> here as &ldquo;way&rdquo; rather than &ldquo;work,&rdquo; suggesting Wisdom is the very manner or principle of God&rsquo;s creative activity." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verse 23 introduces <em>nassakhti</em> &mdash; &ldquo;I was set up&rdquo; (ESV), &ldquo;I was established&rdquo; (NASB), &ldquo;I was appointed&rdquo; (NIV). This verb, related to the pouring out of a foundation or the installation of a king, suggests establishment and commissioning rather than mere origin. Wisdom is not simply old; she is purposefully positioned. The connection to royal installation language (<em>nasakh</em> in Psalm 2:6, where God sets his king on Zion) is suggestive: Wisdom is established as a kind of royal figure over the created order." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verses 24&ndash;26 build the temporal recession with exquisite poetic care, mentioning the deeps (<em>tehomot</em>), springs of water, mountains, hills, and earth in sequence. Each element represents a fundamental component of ancient cosmology. The effect is not merely chronological but cosmic: Wisdom pre-exists the very structures that make habitable existence possible. She is older than geography itself." }}
            />

            {/* Section 3 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: TEAL, marginTop: 40, marginBottom: 12 }}>
              Wisdom at Creation: The Great Poem (vv. 27&ndash;31)
            </h3>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "16px 20px", marginBottom: 20, borderLeft: `3px solid ${PURPLE}` }}>
              <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", margin: 0, lineHeight: 1.7 }}>
                &ldquo;Then I was beside him, like a master workman, and I was daily his delight, rejoicing before him always, rejoicing in his inhabited world and delighting in the children of man.&rdquo; &mdash; Proverbs 8:30&ndash;31
              </p>
            </div>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "With verse 27, the temporal narrative shifts from &ldquo;before creation&rdquo; to &ldquo;during creation.&rdquo; The fourfold &ldquo;when&rdquo; (&ldquo;when he established the heavens,&rdquo; &ldquo;when he drew a circle on the face of the deep,&rdquo; &ldquo;when he made firm the skies above,&rdquo; &ldquo;when he assigned to the sea its limit&rdquo;) runs parallel to the creation accounts of Genesis 1 and Job 38. Wisdom was present as an eyewitness to the entire creative process." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The image of God &ldquo;drawing a circle on the face of the deep&rdquo; (<em>chug al-pene tehom</em>, v.27) is one of the Bible&rsquo;s most evocative cosmological images. In ancient Near Eastern context, the circle represents the boundary between ordered creation and the primordial waters of chaos. God is portrayed as a master builder marking out foundations &mdash; and Wisdom was beside him as he did so. The verb &ldquo;beside him&rdquo; (<em>etzel</em>) carries spatial intimacy: not merely present but adjacent, close, involved." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The climax of the poem comes in verses 30&ndash;31 with the dual emphasis on Wisdom&rsquo;s delight and rejoicing. Whether she is craftsman or nursling, the dominant note is joy: she was &ldquo;daily his delight,&rdquo; she was &ldquo;rejoicing before him always,&rdquo; she was &ldquo;rejoicing in his inhabited world.&rdquo; The Hebrew <em>sha&rsquo;ashuim</em> (delight) and <em>sachaq</em> (rejoicing, playing) paint a picture of exuberant, playful, overflowing happiness. Creation is not a grim necessity but a joyful act, and Wisdom is at its center." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The final phrase of verse 31 is theologically stunning: Wisdom rejoices &ldquo;in his inhabited world and delighting in the children of man.&rdquo; The joy that characterized Wisdom&rsquo;s relationship with the Creator is now extended to his creatures. Humanity is the final object of Wisdom&rsquo;s delight. This sets up the entire exhortation of verses 32&ndash;36: Wisdom is not merely cosmic but personal, not merely primordial but present, not merely divine but humanly accessible." }}
            />

            {/* Section 4 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: TEAL, marginTop: 40, marginBottom: 12 }}>
              The Blessed Path: Watching at Wisdom&rsquo;s Gates (vv. 32&ndash;36)
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The final section of Proverbs 8 pivots from cosmic narrative to personal address. Wisdom, having established her incomparable antiquity and her joy at creation, now turns to her audience and issues a direct appeal. The address &ldquo;And now, O children, listen to me&rdquo; (v.32) is deliberately parental, echoing the father-to-son address of chapters 1&ndash;7. Wisdom herself adopts the tone of a parent speaking to beloved children." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verse 34 offers one of the Bible&rsquo;s most beautiful images of devoted seeking: &ldquo;Blessed is the one who listens to me, watching daily at my gates, waiting beside my doors.&rdquo; The image of waiting at the gates echoes the opening of the chapter, where Wisdom herself stood at the gates. Now the seeker must come to where Wisdom stands. Daily watching suggests a sustained, habitual practice &mdash; not occasional consultation but a lifestyle of seeking." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Verse 35 states the stakes with clarity: &ldquo;For whoever finds me finds life and obtains favor from the LORD.&rdquo; The conjunction of life (<em>chayyim</em>) and favor (<em>ratzon</em>) from God captures the fullness of shalom &mdash; a life that is both vital and blessed, both humanly flourishing and divinely approved. Wisdom is not one among many goods but the gateway to God-given life itself." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The closing verse 36 presents the counterpoint with solemn gravity: &ldquo;But he who fails me injures himself; all who hate me love death.&rdquo; The verb &ldquo;fails&rdquo; (<em>chote&rsquo;</em>) is literally &ldquo;misses,&rdquo; as in missing a target &mdash; the same root as <em>chet</em> (sin). To miss Wisdom is to miss life. And those who actively hate Wisdom are described in the sharpest possible terms: they love death. The chapter ends not with mere consequence but with a stark ontological reality: to reject Wisdom is to embrace non-being." }}
            />
          </div>
        )}

        {/* TAB 3 - Application */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: TEXT, marginBottom: 8, borderBottom: `1px solid ${BORDER}`, paddingBottom: 12 }}>
              Application for Today
            </h2>

            {/* Section 1 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GREEN, marginTop: 40, marginBottom: 12 }}>
              Pursuing Wisdom as a Daily Discipline
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Proverbs 8:34 depicts the wisdom-seeker as one who watches daily at Wisdom&rsquo;s gates, waiting beside her doors. This is not the posture of occasional consultation but of sustained, habitual devotion. The practical application for modern disciples is clear: the pursuit of wisdom must be built into the rhythms of daily life. Morning Scripture reading, regular meditation, prayerful reflection on difficult decisions &mdash; these are the contemporary equivalents of &ldquo;watching at the gates.&rdquo;" }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The ancient spiritual disciplines &mdash; <em>lectio divina</em>, the Daily Office, the Ignatian examen &mdash; all represent structured practices for waiting on wisdom. They institutionalize what Proverbs 8 commands: daily, patient, receptive attention to the voice of divine wisdom. In an age of constant distraction and information overload, the countercultural practice of sitting quietly before God&rsquo;s word is itself an act of wisdom." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The wisdom literature of Israel also valued the seeking of wise human counsel. &ldquo;Plans fail for lack of counsel, but with many advisers they succeed&rdquo; (Proverbs 15:22). The application here is communal: we pursue wisdom not only in private devotion but in genuine, accountable relationships with wise mentors, spiritual directors, and Christian communities who speak truth in love. Wisdom-seeking is never a solitary enterprise in the biblical vision." }}
            />

            {/* Section 2 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GREEN, marginTop: 40, marginBottom: 12 }}>
              Wisdom and Ethical Leadership
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Proverbs 8:15&ndash;16 (&ldquo;By me kings reign, and rulers decree what is just&rdquo;) has profound implications for all who hold positions of authority &mdash; whether in government, business, family, church, or community. Biblical wisdom insists that just governance is not merely a human achievement but requires alignment with divine wisdom. Leaders who pursue wisdom are not imposing arbitrary rules but seeking to govern in harmony with the moral order embedded in creation." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The practical qualities wisdom brings to leadership &mdash; counsel, sound wisdom, insight, strength (v.14) &mdash; map onto contemporary leadership competencies. Counsel corresponds to strategic planning and good advice-seeking. Sound wisdom (<em>tushiyah</em>) corresponds to sound judgment and proven methods. Insight (<em>binah</em>) corresponds to discernment and situational awareness. Strength (<em>gevurah</em>) corresponds to the capacity to act decisively and endure opposition. Proverbs 8 thus provides a theological foundation for leadership development." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Importantly, Wisdom in Proverbs 8 hates &ldquo;pride and arrogance and the evil way and perverted speech&rdquo; (v.13). These are precisely the temptations that accompany power. Leaders who remain accountable, humble, honest, and ethically grounded embody the wisdom that Proverbs 8 describes. Conversely, leaders who succumb to pride and deception demonstrate that they have departed from wisdom and are governing not by God&rsquo;s order but by their own autonomous schemes." }}
            />

            {/* Section 3 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GREEN, marginTop: 40, marginBottom: 12 }}>
              The Joy of Wisdom: Delighting in God and His World
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Perhaps the most underappreciated dimension of Proverbs 8 is its sheer joyfulness. Wisdom is not presented as a grim taskmaster but as one who is &ldquo;daily his delight,&rdquo; &ldquo;rejoicing before him always,&rdquo; &ldquo;delighting in the children of man.&rdquo; The life of wisdom is not merely morally correct &mdash; it is joyful, playful, life-giving. This flies in the face of the common cultural caricature of religious ethics as joyless constraint." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The application is this: Christian wisdom is not primarily about rule-keeping but about alignment with the joy-filled order of creation. When we live wisely &mdash; in honesty, love, justice, faithfulness &mdash; we are not suppressing our humanity but fulfilling it. We are living as the &ldquo;children of man&rdquo; in whom Wisdom delights. The wise life is the joyful life because it is life lived in harmony with the one who created us for his own delight." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "This connects to the New Testament vision of life in the Spirit, where the fruit of the Spirit includes joy (Galatians 5:22). The joy of the Spirit is not the giddy happiness of comfortable circumstances but the deep gladness of those who know that they are living in accordance with God&rsquo;s wisdom. It is the joy that Wisdom herself experienced before creation &mdash; a joy now made available to all who seek her diligently." }}
            />

            {/* Section 4 */}
            <h3 style={{ fontSize: 20, fontWeight: 700, color: GREEN, marginTop: 40, marginBottom: 12 }}>
              Wisdom as the Pattern of Life in Christ
            </h3>
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "For the Christian reader, Proverbs 8 points ultimately to Jesus Christ, &ldquo;whom God made our wisdom and our righteousness and sanctification and redemption&rdquo; (1 Corinthians 1:30). The practical implication is that the pursuit of wisdom described in Proverbs 8 is, for the Christian, identical with the pursuit of conformity to Christ. To seek Wisdom at her gates daily is to cultivate the mind of Christ, to think and see and value as he does." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The spiritual disciplines of prayer, Scripture, community, service, and worship are the pathways through which we encounter Wisdom incarnate. Each day in prayer is a day spent &ldquo;watching at her gates.&rdquo; Each encounter with Scripture is an encounter with the Word who is Wisdom. Each act of service to &ldquo;the children of man&rdquo; is an extension of the delight that Wisdom herself has in humanity." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 16, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "Finally, Proverbs 8:36 reminds us that the stakes could not be higher: to find Wisdom is to find life; to miss her is to &ldquo;injure yourself&rdquo; and love death. In the context of the New Testament, this life-and-death urgency is brought into sharpest focus by Jesus himself: &ldquo;I am the way, and the truth, and the life. No one comes to the Father except through me&rdquo; (John 14:6). The one who is Wisdom incarnate invites all to come, to seek, to find &mdash; and to live." }}
            />
            <p
              style={{ color: TEXT, lineHeight: 1.85, marginBottom: 24, fontSize: 16 }}
              dangerouslySetInnerHTML={{ __html: "The spiritual life shaped by Proverbs 8 is thus one of daily attentiveness, ethical seriousness, communal accountability, joyful delight, and Christocentric orientation. It is not a program of self-improvement but a response to the call of Wisdom herself, who stands at the heights and the gates, raising her voice over the noise of the world, inviting all who will hear: &ldquo;Come, for blessed is the one who finds me.&rdquo;" }}
            />
          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: TEXT, marginBottom: 8 }}>
            Study Videos
          </h2>
          <p style={{ color: MUTED, fontSize: 14, marginBottom: 32 }}>
            Video resources for deeper study of Proverbs 8.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ color: TEXT, fontSize: 15, fontWeight: 600, margin: 0 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
