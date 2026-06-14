"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "A Song of Love",
  "The Beloved and the Bride",
  "Love Awakened",
  "Many Waters Cannot Quench Love",
  "Christ and the Church",
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
    id: "A Song of Love",
    heading: "A Song of Love",
    reference: "Song of Solomon 1",
    paragraphs: [
      "The Song of Solomon &mdash; also called the Song of Songs &mdash; opens with a title that crowns it above all other songs: &ldquo;The Song of Songs, which is Solomon&rsquo;s&rdquo; (1:1). The Hebrew phrasing is a superlative, the way &ldquo;King of kings&rdquo; names the highest king or &ldquo;Holy of Holies&rdquo; names the most sacred place. This is the song that surpasses every other song, a poem set apart for the beauty and the seriousness of its subject: the love between a man and a woman.",
      "Unlike the books of law and prophecy that surround it, the Song offers no commands, no genealogies, no narrative of kings and battles. It is poetry &mdash; an extended lyrical dialogue, mostly between two lovers, with an occasional chorus of friends called the daughters of Jerusalem. The voices weave back and forth, sometimes speaking to one another, sometimes musing aloud, sometimes remembering and longing. The reader is invited to listen in on the intimate language of devotion.",
      "From its first lines the Song celebrates desire as something good and pure: &ldquo;Let him kiss me with the kisses of his mouth! For your love is better than wine&rdquo; (1:2). The beloved speaks of her own beauty with honesty and a touch of vulnerability &mdash; &ldquo;I am very dark, but lovely&rdquo; (1:5) &mdash; weathered by the sun and the labor her brothers demanded of her, yet treasured and sought after by the one she loves.",
      "It is a striking thing that Scripture should contain such a book at all. The Bible does not treat the love between husband and wife as a shameful subject to be whispered about, but as a gift of God worthy of its own song in the canon of holy writings. The physical and emotional union of marriage is honored here as part of the goodness of creation, the same goodness God pronounced over man and woman in the garden.",
      "The Song moves not by argument but by image and atmosphere &mdash; vineyards and gardens, spices and perfumes, the scent of flowers and the songs of birds. Its world is fragrant and alive, charged with the wonder of two people delighting in one another. To read it well is to slow down and savor it, allowing its poetry to teach the heart something of the depth, the dignity, and the tenderness of love.",
      "And yet, for all its earthiness, the Song has always been read by the people of God as pointing beyond itself. The love it celebrates is so strong, so faithful, and so consuming that the faithful have long heard in it an echo of a greater love &mdash; the love of God for his people, and of Christ for his church. The Song is at once a celebration of human love and a window onto the love that made and redeemed the world.",
    ],
  },
  {
    id: "The Beloved and the Bride",
    heading: "The Beloved and the Bride",
    reference: "Song of Solomon 2&ndash;4",
    paragraphs: [
      "At the heart of the Song stands a dialogue of mutual praise. The lover and the beloved take turns describing one another, and the language is unhurried and adoring. &ldquo;As a lily among brambles, so is my love among the young women,&rdquo; says the man; &ldquo;as an apple tree among the trees of the forest, so is my beloved among the young men,&rdquo; answers the woman (2:2&ndash;3). Each finds in the other something rare and singular, set apart from all the rest.",
      "The beloved&rsquo;s voice is bold and unembarrassed in its longing. She recalls her lover coming to her &ldquo;leaping over the mountains, bounding over the hills&rdquo; (2:8), eager and swift. She delights to sit in his shadow, to taste his fruit, to be brought to the banqueting house where his banner over her is love. The Song gives the woman a strong and central voice &mdash; she speaks more than the man does, and she speaks of her desire openly and without shame.",
      "One of the great refrains of these chapters is the springtime invitation: &ldquo;Arise, my love, my beautiful one, and come away, for behold, the winter is past; the rain is over and gone. The flowers appear on the earth, the time of singing has come&rdquo; (2:10&ndash;13). Love is pictured as a kind of spring, a season of new life breaking out after the cold &mdash; warmth, color, fragrance, and song returning to the world.",
      "The man&rsquo;s praise of his bride rises to its fullest in chapter 4, where he calls her &ldquo;altogether beautiful&hellip; there is no flaw in you&rdquo; (4:7). His words move tenderly from feature to feature, drawing on images of doves and flocks, towers and gardens, honey and milk and spice. The poetry is sensuous but never coarse; it lingers over the beloved with reverence, treating her beauty as something to be honored rather than merely possessed.",
      "A recurring image is the garden &mdash; &ldquo;a garden locked is my sister, my bride, a spring locked, a fountain sealed&rdquo; (4:12). Her love is a private, guarded place, not given away cheaply but kept for the one to whom she belongs. When she answers, &ldquo;Let my beloved come to his garden, and eat its choicest fruits&rdquo; (4:16), she freely offers what she has faithfully kept. The Song honors both the guarding and the giving of love within the bond of covenant.",
      "Through all this praise runs a thread of belonging that the Song states again and again in different forms: &ldquo;My beloved is mine, and I am his&rdquo; (2:16). This mutual possession &mdash; freely given and gladly received &mdash; lies at the heart of the Song&rsquo;s vision of love. It is not a fleeting attraction but a settled, exclusive devotion, two people who have given themselves wholly to one another.",
    ],
  },
  {
    id: "Love Awakened",
    heading: "Love Awakened",
    reference: "Song of Solomon 3 &amp; 5",
    paragraphs: [
      "Three times the Song sounds a solemn warning, a refrain addressed to the daughters of Jerusalem: &ldquo;I adjure you&hellip; that you not stir up or awaken love until it pleases&rdquo; (2:7; 3:5; 8:4). Amid all its celebration of desire, the Song pauses to counsel patience. Love has its proper time, and to awaken it before that time &mdash; to rush its delights ahead of its commitments &mdash; is to do violence to something precious.",
      "This refrain gives the Song its restraint and its wisdom. The very book that speaks most freely of the joys of love is also the book that most carefully warns against treating love lightly. Desire is good, but desire unmoored from covenant and timing becomes destructive. The beloved who guards her garden until the right moment is held up not as cold but as wise, keeping love&rsquo;s fire within the hearth where it can warm rather than burn.",
      "The Song does not pretend that love is always smooth. In chapter 3 the beloved dreams of searching the city by night for the one her soul loves, rising and going about the streets, asking the watchmen, &ldquo;Have you seen him whom my soul loves?&rdquo; (3:3). There is anxiety in love, a fear of loss, a restless seeking until the beloved is found and held fast. Love that is real is also love that can ache.",
      "A more painful episode comes in chapter 5. The beloved hears her lover knocking in the night, but she hesitates, slow to rise and open the door; and when at last she opens, he has gone. Again she goes out to seek him through the city &mdash; but this time the watchmen find her, beat her, and take away her veil (5:7). Love exposes the heart to wounding, and the Song does not hide that the pursuit of love can carry real cost and real sorrow.",
      "Yet even in her distress the beloved&rsquo;s devotion does not waver. When the daughters of Jerusalem ask what makes her lover so special, she answers with a long and glowing description &mdash; &ldquo;My beloved is radiant and ruddy, distinguished among ten thousand&hellip; he is altogether desirable&rdquo; (5:10, 16). Her love survives the night of seeking and even the wounds of the watchmen; absence only deepens her longing and sharpens her praise.",
      "In all of this the Song teaches that love is not merely a feeling that comes and goes but a commitment that endures testing. The warning not to awaken love before its time, the night searches, the wounds and the waiting &mdash; all of it points to a love worth guarding, worth seeking, and worth suffering for. It is precisely because love is so strong and so costly that it must not be roused carelessly.",
    ],
  },
  {
    id: "Many Waters Cannot Quench Love",
    heading: "Many Waters Cannot Quench Love",
    reference: "Song of Solomon 8",
    paragraphs: [
      "The Song reaches its great climax in chapter 8, where the poetry rises from delight and longing to a profound meditation on the nature of love itself. Here the beloved speaks words that have echoed through three thousand years as one of the most powerful descriptions of love ever written: &ldquo;Set me as a seal upon your heart, as a seal upon your arm&rdquo; (8:6). She asks to be bound to her lover permanently, marked as his and he as hers.",
      "Then comes the soaring declaration: &ldquo;for love is strong as death, jealousy is fierce as the grave. Its flashes are flashes of fire, the very flame of the Lord&rdquo; (8:6). Love is set alongside death itself &mdash; the one power no one escapes &mdash; and declared its equal in strength. Just as death seizes and will not let go, so true love holds fast and refuses to surrender what it loves. This is not a sentimental feeling but a force of overwhelming power.",
      "The image deepens with one of the Song&rsquo;s most famous lines: &ldquo;Many waters cannot quench love, neither can floods drown it&rdquo; (8:7). Love is a fire, and no flood of waters &mdash; no trial, no distance, no opposition, no passage of time &mdash; can put it out. The faithful love between two people is pictured as an unquenchable flame, burning steadily through whatever storms may break over it.",
      "And love, the Song insists, cannot be bought: &ldquo;If a man offered for love all the wealth of his house, he would be utterly despised&rdquo; (8:7). Love belongs to a different order of things than wealth and trade. It cannot be purchased or earned; it can only be given and received freely. To try to buy love is to insult it, for its worth is beyond all the riches a person could offer.",
      "Many readers have heard in the phrase &ldquo;the very flame of the Lord&rdquo; a hint that this fierce, unquenchable love has its ultimate source in God himself. Human love at its strongest is a spark struck from a far greater fire &mdash; the everlasting love of the One who is love. The flame that burns between husband and wife is a small and faithful image of the consuming love of God.",
      "These verses lift the whole Song to its highest plane. What began as the tender praise of two lovers becomes a hymn to the very nature of love &mdash; strong as death, unquenchable as fire, beyond all price. It is a vision of devotion so complete and so enduring that it can only finally be satisfied in the love that has no end, the love that gives itself wholly and keeps faith forever.",
    ],
  },
  {
    id: "Christ and the Church",
    heading: "Christ and the Church",
    reference: "Song of Solomon &amp; the Gospel",
    paragraphs: [
      "From the earliest centuries, the people of God have read the Song of Solomon not only as a celebration of marriage but as a picture of a greater love &mdash; the love between God and his people. Jewish tradition heard in it the covenant love of the Lord for Israel; the Christian church heard in it the love of Christ, the Bridegroom, for his bride, the church. This allegorical reading runs through much of the history of Christian devotion.",
      "There is solid biblical ground for hearing the Song this way. Throughout the prophets, the Lord describes his bond with Israel as a marriage &mdash; tender when his people are faithful, grieved when they wander. Hosea is commanded to love an unfaithful wife as a living parable of God&rsquo;s love for a wayward people. The marriage covenant becomes, again and again, the chosen image for the covenant between God and those he has claimed as his own.",
      "The New Testament takes up the same picture and makes it explicit. Paul writes that the union of husband and wife is a &ldquo;profound&rdquo; mystery, &ldquo;and I am saying that it refers to Christ and the church&rdquo; (Ephesians 5:32). Christ loved the church and gave himself up for her, to present her to himself in splendor, without spot or wrinkle, holy and blameless. The love a faithful husband bears his wife is meant to be a small reflection of Christ&rsquo;s self-giving love for his people.",
      "Read in this light, the Song&rsquo;s every image gains a deeper resonance. The Bridegroom who comes leaping over the mountains is the Lord who comes to seek and save his beloved. The bride who is &ldquo;altogether beautiful&rdquo; with &ldquo;no flaw&rdquo; is the church made spotless by grace, beautiful not in herself but in the eyes of the One who loves her. The garden once locked and now freely opened is the heart given wholly to its Lord.",
      "The Song&rsquo;s climax shines brightest of all in this reading. The love that is &ldquo;strong as death&rdquo; is fulfilled in the love of Christ, who went down into death itself for his bride and rose again victorious. The &ldquo;many waters&rdquo; that cannot quench love are answered at the cross, where no flood of suffering or wrath could put out the fire of his devotion. He who gave all the wealth of heaven did not buy our love but won it, by first loving us.",
      "And so the Song that ends with the bride crying, &ldquo;Make haste, my beloved&rdquo; (8:14), gives voice to the longing of the whole church across the ages &mdash; the cry for the Bridegroom to come. The book that celebrates the joy of human love points beyond itself to the marriage supper of the Lamb, when the bride at last is joined to her Lord forever, and the love that is stronger than death is consummated in unending joy.",
    ],
  },
];

const videoItems = [
  { videoId: "Wd5Dn4n5h7E", title: "BibleProject - Overview - Song of Songs" },
  { videoId: "qabPdmAVjOQ", title: "Song of Solomon and the Beauty of Married Love" },
  { videoId: "Lb1Ap3hQYZc", title: "Love Strong as Death - Song of Songs 8 Explained" },
  { videoId: "Pz_Lh2Zb3xY", title: "Christ and the Church - The Song as a Picture of the Gospel" },
];

export default function ChristianBookOfSongOfSolomonGuidePage() {
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
            The Song of Solomon
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Song of Songs &mdash; a poetic celebration of love and marriage as a good gift of God, the tender dialogue of the lover and the beloved, the call not to awaken love before its time, the declaration that love is strong as death, and the church&rsquo;s ancient reading of the Song as a picture of Christ&rsquo;s love for his bride.
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
              Deepen your study of the Song of Solomon through visual teaching on the poetry of love, the dialogue of the beloved and the bride, the unquenchable flame of devotion, and the Song as a picture of Christ and his church.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Love Strong as Death</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The Song of Solomon honors the love between husband and wife as a good and holy gift, and lifts that love to its highest meaning: a flame that many waters cannot quench, strong as death and beyond all price. In its unquenchable fire the church has long heard an echo of the love of Christ for his bride &mdash; a love that went down into death and rose again, and that calls still, &ldquo;Arise, my love, and come away.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
