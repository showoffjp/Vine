"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "kV3vWvBHPe8", title: "Hebrews 8 - The Better Covenant Explained" },
  { videoId: "mNpuSm1JQRY", title: "Jesus as High Priest of the Heavenly Tabernacle" },
  { videoId: "r9tV4oHxNpA", title: "The New Covenant from Jeremiah 31 - Deep Dive" },
  { videoId: "bL2e7qW5Kzs", title: "Law Written on Hearts - Hebrews 8 Bible Study" },
];

export default function Hebrews8GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(160deg, rgba(58,125,86,0.12) 0%, rgba(107,79,187,0.08) 60%, rgba(7,7,15,0) 100%)", borderBottom: `1px solid ${BORDER}`, paddingBottom: "2.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1.5rem 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span style={{ color: GREEN, fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" }}>Bible Study Guide</span>
            <span style={{ color: BORDER, fontSize: "0.7rem" }}>/</span>
            <span style={{ color: MUTED, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>New Testament</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Hebrews{" "}
            <span style={{ background: `linear-gradient(135deg, ${GREEN}, ${PURPLE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Chapter 8
            </span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: MUTED, maxWidth: 680, lineHeight: 1.65, marginBottom: "1.75rem" }}
            dangerouslySetInnerHTML={{ __html: "The climax of the book of Hebrews &mdash; Jesus seated at the right hand of the Father as minister of the true heavenly tabernacle, and the revolutionary New Covenant from Jeremiah 31 that replaces the Mosaic Law with God&rsquo;s law written on human hearts." }}
          />
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              { label: "Hebrews 8:1-13", color: GREEN },
              { label: "New Covenant", color: PURPLE },
              { label: "Jeremiah 31", color: GOLD },
              { label: "High Priest", color: TEAL },
            ].map((tag) => (
              <span key={tag.label} style={{ padding: "0.3rem 0.9rem", borderRadius: 999, fontSize: "0.72rem", fontWeight: 700, background: `${tag.color}18`, color: tag.color, border: `1px solid ${tag.color}35` }}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", display: "flex", gap: "0.25rem", overflowX: "auto" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "0.85rem 1.1rem",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.03em",
                color: activeTab === tab.id ? GREEN : MUTED,
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${GREEN}` : "2px solid transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1.5rem" }}>

        {/* ==================== OVERVIEW ==================== */}
        {activeTab === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
              {[
                {
                  label: "The Main Point",
                  color: GREEN,
                  icon: "I",
                  text: "Hebrews 8 opens with &ldquo;the main point of what we are saying&rdquo; &mdash; we have such a high priest who is seated at the right hand of the throne of the Majesty in heaven. Everything else in this chapter flows from that one central fact.",
                },
                {
                  label: "The Heavenly Tabernacle",
                  color: PURPLE,
                  icon: "II",
                  text: "Jesus ministers in the true tabernacle erected by God, not by human hands. The Mosaic tabernacle was only a shadow and copy of the heavenly reality. Moses was instructed to build according to the pattern shown on the mountain &mdash; pointing always upward.",
                },
                {
                  label: "A Better Covenant",
                  color: GOLD,
                  icon: "III",
                  text: "Jesus has obtained a ministry superior to that of the Levitical priests, as much as the new covenant is better than the old. The new covenant is established on better promises &mdash; not stone tablets but hearts, not external law but internal transformation.",
                },
                {
                  label: "The Old Made Obsolete",
                  color: TEAL,
                  icon: "IV",
                  text: "By speaking of a &ldquo;new&rdquo; covenant, God declared the first one obsolete. What is obsolete and aging will soon disappear. This is one of the boldest statements in the New Testament about the relationship between the old and new covenants.",
                },
              ].map((card) => (
                <div key={card.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.4rem", borderTop: `3px solid ${card.color}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.7rem" }}>
                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: `${card.color}20`, color: card.color, fontSize: "0.65rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{card.icon}</span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 800, color: TEXT }}>{card.label}</span>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: card.text }} />
                </div>
              ))}
            </div>

            {/* Key verse */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}12, ${PURPLE}08)`, border: `1px solid ${GREEN}30`, borderRadius: 16, padding: "1.75rem", marginBottom: "2rem" }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.1em", color: GREEN, textTransform: "uppercase", marginBottom: "0.9rem" }}>Key Verse &mdash; Hebrews 8:6</p>
              <blockquote style={{ fontSize: "1.15rem", fontStyle: "italic", color: TEXT, lineHeight: 1.75, margin: "0 0 0.75rem 0", borderLeft: `3px solid ${GREEN}`, paddingLeft: "1.25rem" }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;But in fact the ministry Jesus has received is as superior to theirs as the covenant of which he is mediator is superior to the old one, since the new covenant is established on better promises.&rdquo;" }}
              />
              <p style={{ fontSize: "0.8rem", color: MUTED, margin: 0 }}>Hebrews 8:6 (NIV)</p>
            </div>

            {/* Chapter structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem", marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: TEXT, marginBottom: "1.1rem", letterSpacing: "0.02em" }}>Chapter Structure at a Glance</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { ref: "vv. 1-2", title: "The Main Point: Jesus seated at the right hand, minister of the true tabernacle", color: GREEN },
                  { ref: "vv. 3-5", title: "Every high priest offers gifts &mdash; Christ&rsquo;s superior offering in the heavenly sanctuary", color: PURPLE },
                  { ref: "v. 6", title: "The better ministry, the better covenant, the better promises", color: GOLD },
                  { ref: "vv. 7-9", title: "The fault with the first covenant &mdash; finding fault with the people", color: BLUE },
                  { ref: "vv. 10-12", title: "The New Covenant: law on hearts, all shall know God, sins forgotten", color: TEAL },
                  { ref: "v. 13", title: "The word &ldquo;new&rdquo; renders the old covenant obsolete and aging", color: "#E11D48" },
                ].map((row) => (
                  <div key={row.ref} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "0.65rem 0.9rem", background: "rgba(255,255,255,0.025)", borderRadius: 10, border: `1px solid ${BORDER}` }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: row.color, minWidth: 54, letterSpacing: "0.02em" }}>{row.ref}</span>
                    <span style={{ fontSize: "0.87rem", color: MUTED, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: row.title }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Context */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: TEXT, marginBottom: "0.9rem" }}>Historical and Theological Context</h3>
              <p style={{ fontSize: "0.92rem", color: MUTED, lineHeight: 1.75, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "Hebrews was written to Jewish Christians who were under pressure to return to the Mosaic covenant. Chapter 8 reaches the theological apex of the entire letter &mdash; demonstrating that Jesus is not a deviation from God&rsquo;s plan but its fulfillment. The author&rsquo;s argument builds through chapters 5-10: Jesus is a priest, a better priest, from a better order (Melchizedek), with a better sacrifice, in a better tabernacle, under a better covenant." }}
              />
              <p style={{ fontSize: "0.92rem", color: MUTED, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The quotation of Jeremiah 31:31-34 in verses 8-12 is the longest Old Testament quotation in the entire New Testament &mdash; a signal that the author considers this passage absolutely central. Jeremiah himself announced a coming new covenant while the nation was in exile, a covenant so different from Sinai that it would not merely regulate behavior but transform hearts." }}
              />
            </div>
          </div>
        )}

        {/* ==================== KEY THEMES ==================== */}
        {activeTab === "themes" && (
          <div>
            <p style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.7, marginBottom: "2rem" }}
              dangerouslySetInnerHTML={{ __html: "Hebrews 8 is dense with covenantal theology. Four major themes emerge that carry both historical weight and contemporary relevance for the believer&rsquo;s life with God." }}
            />

            {[
              {
                num: "01",
                title: "Jesus Seated at the Right Hand",
                color: GREEN,
                body: [
                  "The posture of Jesus &mdash; seated &mdash; is theologically loaded. In the Mosaic priesthood, there were no chairs in the tabernacle. The priests stood continuously, their work never finished. Jesus sits because his sacrificial work is complete. The writer points to Psalm 110:1, which runs like a thread throughout Hebrews: &ldquo;The Lord said to my Lord: Sit at my right hand until I make your enemies a footstool for your feet.&rdquo;",
                  "To be seated at the right hand of the Majesty in heaven is to occupy the seat of supreme authority and honor. This is not retirement &mdash; it is the posture of a king who has won the decisive battle and now reigns. Jesus is not waiting to become high priest; he is actively mediating for his people from the seat of all cosmic authority.",
                ],
              },
              {
                num: "02",
                title: "The True Tabernacle vs. the Earthly Copy",
                color: PURPLE,
                body: [
                  "The Mosaic tabernacle was a shadow and copy (Greek: skia and hupodeigma) of the heavenly reality. It was never meant to be the final word &mdash; it was always a pointer, a pedagogical instrument, a visual theology. Moses received the pattern on Mount Sinai (Exodus 25:40) precisely because the earthly structure was to correspond to something real and eternal in the heavens.",
                  "This means the entire Levitical system &mdash; the priests, the sacrifices, the annual Day of Atonement, the architecture of holy space &mdash; was essentially enacted prophecy. Every act of the high priest entering the Most Holy Place once a year with blood said: &ldquo;One day, someone will enter the true Most Holy Place with his own blood, once and for all.&rdquo; Jesus fulfills what the tabernacle taught.",
                ],
              },
              {
                num: "03",
                title: "The Ministry of a Better Covenant",
                color: GOLD,
                body: [
                  "The comparison the author draws is not between an inferior and a superior thing of the same kind &mdash; it is between a type and its antitype, a shadow and the substance. The old covenant was not a mistake or a failure on God&rsquo;s part; it was always an interim arrangement pointing forward to something better. The Sinai covenant had glory (2 Corinthians 3), but it was a &ldquo;ministry of condemnation&rdquo; because the law could diagnose sin but not cure it.",
                  "The new covenant is established on &ldquo;better promises&rdquo; because the promises are no longer conditional on human performance. The Sinai covenant said, &ldquo;If you obey, I will be your God.&rdquo; The new covenant says, &ldquo;I will write my law on your hearts &mdash; the obedience itself is my gift to you.&rdquo; The grace goes all the way down.",
                ],
              },
              {
                num: "04",
                title: "The New Covenant Written on Hearts",
                color: TEAL,
                body: [
                  "The Jeremiah 31 oracle is the most radical promise in the Old Testament. Jeremiah, writing from the rubble of a failed covenant with a people who had repeatedly proved unable to keep it, announces a coming covenant that will not depend on human faithfulness. It will not be externally inscribed on tablets of stone but internally inscribed on the tablet of the heart.",
                  "The New Covenant makes four promises: (1) God will put his law within them &mdash; the source of obedience moves from external command to internal desire; (2) God will be their God and they will be his people &mdash; the covenant relationship restored; (3) all will know God directly, not through intermediaries &mdash; a democratization of spiritual access; (4) sins will be forgiven and remembered no more &mdash; the permanent removal of guilt and condemnation. Hebrews 8 shows that Jesus&rsquo; death accomplished all four.",
                ],
              },
            ].map((theme) => (
              <div key={theme.num} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.75rem", marginBottom: "1.25rem", borderLeft: `4px solid ${theme.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 900, color: theme.color, opacity: 0.6, letterSpacing: "0.08em" }}>{theme.num}</span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: 0 }}>{theme.title}</h3>
                </div>
                {theme.body.map((para, i) => (
                  <p key={i} style={{ fontSize: "0.92rem", color: MUTED, lineHeight: 1.75, marginBottom: i < theme.body.length - 1 ? "0.9rem" : 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            ))}

            {/* Jeremiah connection callout */}
            <div style={{ background: `linear-gradient(135deg, ${GOLD}10, ${TEAL}08)`, border: `1px solid ${GOLD}30`, borderRadius: 16, padding: "1.5rem", marginTop: "1rem" }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.1em", color: GOLD, textTransform: "uppercase", marginBottom: "0.75rem" }}>Connection: Old Testament to New</p>
              <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Jeremiah 31:31-34 is quoted verbatim in Hebrews 8:8-12, making it the longest Old Testament citation in the New Testament. The Spirit-filled expositor cannot miss the signal: the author considered this promise the heart of everything. The New Covenant announced by Jeremiah &mdash; written on hearts, universal knowledge of God, unconditional forgiveness &mdash; is not a future hope for the reader of Hebrews. It is a present reality, secured by the blood of Jesus." }}
              />
            </div>
          </div>
        )}

        {/* ==================== VERSE BY VERSE ==================== */}
        {activeTab === "verse" && (
          <div>
            <p style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.7, marginBottom: "2rem" }}
              dangerouslySetInnerHTML={{ __html: "A careful verse-by-verse walk through Hebrews 8, following the argument of the author as he builds toward the climactic announcement of the New Covenant." }}
            />

            {[
              {
                ref: "Hebrews 8:1-2",
                heading: "The Main Point &mdash; Seated at the Right Hand",
                color: GREEN,
                verses: [
                  {
                    v: "v.1",
                    text: "&ldquo;Now the main point of what we are saying is this: We do have such a high priest, who sat down at the right hand of the throne of the Majesty in heaven&rdquo;",
                    note: "The Greek word for &ldquo;main point&rdquo; (kephalaion) can also mean &ldquo;summary&rdquo; or &ldquo;chief point.&rdquo; Everything in chapters 1-7 leads here. The author is not beginning a new topic &mdash; he is naming what he has been saying all along. The posture &ldquo;sat down&rdquo; is theologically crucial: Jesus&rsquo; priestly work is complete. His session at the right hand is both rest from completed work and active reign.",
                  },
                  {
                    v: "v.2",
                    text: "&ldquo;...who serves in the sanctuary, the true tabernacle set up by the Lord, not by a mere human being.&rdquo;",
                    note: "The &ldquo;true tabernacle&rdquo; (Greek: alethinos) does not mean the Mosaic tabernacle was false &mdash; alethinos means original, archetypal, the real thing of which others are copies. Moses&rsquo; tabernacle was divinely authorized and deeply meaningful; it was simply not the ultimate reality. Jesus ministers in the original. He is the priest in the place the earthly tabernacle could only gesture toward.",
                  },
                ],
              },
              {
                ref: "Hebrews 8:3-6",
                heading: "Every High Priest Offers &mdash; The Superior Ministry",
                color: PURPLE,
                verses: [
                  {
                    v: "vv.3-4",
                    text: "&ldquo;Every high priest is appointed to offer both gifts and sacrifices, and so it was necessary for this one also to have something to offer. If he were on earth, he would not be a priest...&rdquo;",
                    note: "The logic is airtight: if Jesus is a priest, he must have something to offer. What does he offer? Himself &mdash; his own body and blood, once for all (Hebrews 10:10). The parenthetical &ldquo;if he were on earth&rdquo; is remarkable: Jesus does not belong to the earthly priestly order. He is not a Levite. He cannot serve in the Jerusalem temple. His priesthood operates in a different realm entirely &mdash; the heavenly sanctuary.",
                  },
                  {
                    v: "vv.5-6",
                    text: "&ldquo;They serve at a sanctuary that is a copy and shadow of what is in heaven...But in fact the ministry Jesus has received is as superior to theirs as the covenant of which he is mediator is superior to the old one.&rdquo;",
                    note: "The author cites Exodus 25:40 to establish the copy-and-shadow relationship. Moses was explicitly told to build according to the &ldquo;pattern shown you on the mountain&rdquo; &mdash; acknowledging that there was a heavenly original. The logic: if the copy is glorious (and the author concedes it was), how much more glorious the original? The superiority of Jesus&rsquo; ministry is not just quantitative but qualitative &mdash; it operates at a different ontological level.",
                  },
                ],
              },
              {
                ref: "Hebrews 8:7-9",
                heading: "Finding Fault &mdash; The First Covenant&rsquo;s Limitation",
                color: GOLD,
                verses: [
                  {
                    v: "vv.7-8a",
                    text: "&ldquo;For if there had been nothing wrong with that first covenant, no place would have been sought for another. But God found fault with the people and said...&rdquo;",
                    note: "The author is careful: he does not say God found fault with the law. He says God found fault with the people. The problem with the Sinai covenant was never that God&rsquo;s commands were wrong or burdensome in themselves (Romans 7:12: &ldquo;the law is holy and just and good&rdquo;). The problem was that it operated on the assumption of human ability to comply &mdash; and human beings, fallen and self-centered, could not sustain faithful covenant loyalty.",
                  },
                  {
                    v: "v.9",
                    text: "&ldquo;...not like the covenant I made with their ancestors when I took them by the hand to lead them out of Egypt, because they did not remain faithful to my covenant, and I turned away from them, declares the Lord.&rdquo;",
                    note: "Jeremiah is citing the Exodus &mdash; the defining covenant moment of Israel&rsquo;s history &mdash; as the negative comparison. God&rsquo;s tender image of taking them by the hand like a parent with a child only heightens the tragedy of their failure to remain faithful. The verb &ldquo;did not remain&rdquo; captures the story of the entire Old Testament: a repeated pattern of covenant violation, divine patience, judgment, and restoration &mdash; a cycle that could only be broken by a different kind of covenant.",
                  },
                ],
              },
              {
                ref: "Hebrews 8:10-12",
                heading: "The New Covenant &mdash; Law on Hearts, All Shall Know",
                color: TEAL,
                verses: [
                  {
                    v: "v.10",
                    text: "&ldquo;This is the covenant I will make with the people of Israel after that time, declares the Lord. I will put my laws in their minds and write them on their hearts. I will be their God, and they will be my people.&rdquo;",
                    note: "Two radical shifts: first, the location of the law moves from stone tablets to the human heart &mdash; from external legislation to internal desire. Second, the covenant identity is stated without condition: &ldquo;I will be their God.&rdquo; No &ldquo;if you obey.&rdquo; This is the unconditional grace of the new covenant &mdash; God commits himself to the relationship without contingency on human performance. This is what the indwelling Holy Spirit accomplishes in the new covenant believer.",
                  },
                  {
                    v: "v.11",
                    text: "&ldquo;No longer will they teach their neighbor, or say to one another, &lsquo;Know the Lord,&rsquo; because they will all know me, from the least of them to the greatest.&rdquo;",
                    note: "A stunning democratization of spiritual knowledge. In the old covenant, only certain people had intimate access &mdash; priests entered the tabernacle, only the high priest entered the Most Holy Place, and the common Israelite was kept at a distance by barriers of holiness. The new covenant eliminates the distance. Through the Spirit, every believer has direct personal knowledge of God &mdash; not merely knowledge about God, but the relational intimacy once reserved for Moses.",
                  },
                  {
                    v: "v.12",
                    text: "&ldquo;For I will forgive their wickedness and will remember their sins no more.&rdquo;",
                    note: "The final promise is the foundation of all the others. God&rsquo;s &ldquo;not remembering&rdquo; sins is not a failure of divine omniscience &mdash; it is a declaration of permanent non-prosecution. The case is closed. The record is expunged not because the sin was minor but because it has been fully atoned for. The Day of Atonement in the old covenant had to be repeated annually because it provided temporary covering; the blood of Jesus provides permanent removal.",
                  },
                ],
              },
              {
                ref: "Hebrews 8:13",
                heading: "By Saying &ldquo;New&rdquo; &mdash; The Old Rendered Obsolete",
                color: "#E11D48",
                verses: [
                  {
                    v: "v.13",
                    text: "&ldquo;By calling this covenant &lsquo;new,&rsquo; he has made the first one obsolete; and what is obsolete and aging will soon disappear.&rdquo;",
                    note: "A single word &mdash; &ldquo;new&rdquo; &mdash; in Jeremiah&rsquo;s prophecy carries enormous theological weight. The very fact that God promised a new covenant implied that the old one would not be permanent. The author, writing probably before the destruction of Jerusalem in 70 AD, notes that the first covenant is &ldquo;aging&rdquo; &mdash; the temple still stood, sacrifices were still being offered, but they had been rendered theologically obsolete by the coming of Christ. The physical destruction was simply catching up with the theological reality.",
                  },
                ],
              },
            ].map((section) => (
              <div key={section.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.75rem", marginBottom: "1.5rem" }}>
                <div style={{ marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: section.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>{section.ref}</span>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: TEXT, marginTop: "0.3rem" }} dangerouslySetInnerHTML={{ __html: section.heading }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {section.verses.map((verse) => (
                    <div key={verse.v} style={{ borderLeft: `3px solid ${section.color}40`, paddingLeft: "1.25rem" }}>
                      <p style={{ fontSize: "0.78rem", fontWeight: 800, color: section.color, marginBottom: "0.5rem", letterSpacing: "0.04em" }}>{verse.v}</p>
                      <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: TEXT, lineHeight: 1.65, marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: verse.text }} />
                      <p style={{ fontSize: "0.88rem", color: MUTED, lineHeight: 1.75, margin: 0 }} dangerouslySetInnerHTML={{ __html: verse.note }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ==================== APPLICATION ==================== */}
        {activeTab === "application" && (
          <div>
            <p style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.7, marginBottom: "2rem" }}
              dangerouslySetInnerHTML={{ __html: "Hebrews 8 is not theological abstraction &mdash; it is the foundation of how we live with God. These four applications draw from the chapter&rsquo;s central claims to reshape how we pray, how we relate to God, and how we understand our own identity in Christ." }}
            />

            {[
              {
                num: "1",
                title: "Approaching God Directly Through Christ",
                color: GREEN,
                icon: "->",
                text: [
                  "Because Jesus is the minister of the true tabernacle &mdash; the heavenly sanctuary &mdash; every prayer you pray is received in the most holy place in the universe. You are not accessing a religious system; you are approaching the throne of God through a high priest who is seated there, actively interceding for you.",
                  "Many Christians pray with an unconscious sense of distance or inadequacy &mdash; as if God must be persuaded, or as if our sins disqualify our prayers. Hebrews 8 (and 4:16) corrects this: we approach the throne of grace with confidence, not because of our own righteousness but because our high priest has made the way. Practice: Before your next prayer, consciously remember who is interceding for you at the right hand of the Father.",
                ],
              },
              {
                num: "2",
                title: "The New Covenant Reality of the Indwelling Spirit",
                color: PURPLE,
                icon: "^",
                text: [
                  "The promise that God will write his law on our hearts (v.10) is fulfilled by the Holy Spirit. Ezekiel 36:26-27 develops the same promise: &ldquo;I will give you a new heart and put a new spirit in you... I will put my Spirit in you and move you to follow my decrees.&rdquo; The Spirit does not force compliance &mdash; he creates desire. The new covenant believer is not someone who is forced to obey God but someone who wants to.",
                  "If you find yourself experiencing a desire for holiness, a longing for prayer, a love for God&rsquo;s word &mdash; that is not self-generated moral ambition. That is the Spirit fulfilling the promise of Jeremiah 31. Do not take credit for your own spiritual desires; recognize them as gifts of the new covenant. Equally, when your desires feel cold, do not manufacture false devotion &mdash; ask God to awaken what he promised to put within you.",
                ],
              },
              {
                num: "3",
                title: "God&rsquo;s Promise: All Shall Know Him Personally",
                color: TEAL,
                icon: "*",
                text: [
                  "The New Covenant eliminates the religious hierarchy that keeps ordinary people at a distance from God. Under the Sinai system, the common Israelite had limited access. The priest had more access. The high priest had the most &mdash; once a year, into the Most Holy Place. But in the new covenant, &ldquo;they will all know me, from the least of them to the greatest&rdquo; (v.11).",
                  "This means your access to God is not determined by your education, your spiritual pedigree, your emotional capacity, or your track record. The newest, most broken, least theologically sophisticated believer has the same access to God as the most seasoned saint. You do not need a priest, a theologian, a pastor, or a mediator between you and God &mdash; you have Christ himself. This does not make pastors and teachers unnecessary, but it means they point you to Jesus, not to themselves.",
                ],
              },
              {
                num: "4",
                title: "The Assurance of Forgiveness &mdash; Sins Remembered No More",
                color: GOLD,
                icon: "~",
                text: [
                  "The final promise of the New Covenant is the most personally freeing: &ldquo;I will remember their sins no more&rdquo; (v.12). This is the ground of Christian assurance. It does not say God will remember your sins less vividly, or remember them with less anger, or remember them until the next time you sin. He will not remember them. The case is permanently closed.",
                  "Many Christians live with a low-grade spiritual anxiety, as if God is keeping a record and their standing is precarious. Hebrews 8 is a direct corrective. The new covenant is not &ldquo;God will forgive you if you remain sufficiently faithful.&rdquo; It is &ldquo;I will forgive their wickedness &mdash; full stop.&rdquo; The basis is not your faithfulness but his. This does not license carelessness about sin; rather, it means we confess sin not to regain a lost standing but from the secure standing already given. Receive the assurance of forgiveness today &mdash; not as sentimentality but as theological reality grounded in the blood of the new covenant.",
                ],
              },
            ].map((app) => (
              <div key={app.num} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.75rem", marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1rem" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${app.color}20`, border: `1px solid ${app.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 900, color: app.color }}>{app.num}</span>
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: TEXT, margin: 0 }} dangerouslySetInnerHTML={{ __html: app.title }} />
                </div>
                {app.text.map((para, i) => (
                  <p key={i} style={{ fontSize: "0.92rem", color: MUTED, lineHeight: 1.75, marginBottom: i < app.text.length - 1 ? "0.85rem" : 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            ))}

            {/* Reflection questions */}
            <div style={{ background: `linear-gradient(135deg, ${PURPLE}10, ${GREEN}08)`, border: `1px solid ${PURPLE}30`, borderRadius: 16, padding: "1.75rem", marginTop: "1rem" }}>
              <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: TEXT, marginBottom: "1.1rem" }}>Reflection and Discussion Questions</h3>
              <ol style={{ paddingLeft: "1.25rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "What does it change about your prayer life to know that Jesus is actively seated at the right hand of the Father, interceding for you right now?",
                  "Where in your life have you been treating your relationship with God as if it depended on your performance rather than on the New Covenant?",
                  "The New Covenant promises that all shall know God &mdash; from the least to the greatest. How does this democratization of spiritual access challenge any sense of spiritual elitism or inadequacy in your own faith?",
                  "What would change in your daily life if you fully believed that God will &ldquo;remember your sins no more&rdquo; &mdash; that the record is permanently closed?",
                  "How does understanding the Old Covenant as a &ldquo;shadow and copy&rdquo; of a heavenly reality change how you read the Old Testament narratives, laws, and rituals?",
                ].map((q, i) => (
                  <li key={i} style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>

      {/* Video section */}
      <div style={{ background: CARD, borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: "1.75rem" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", color: GREEN, textTransform: "uppercase", marginBottom: "0.5rem" }}>Video Resources</p>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: TEXT, margin: 0 }}>Hebrews 8 Teaching Videos</h2>
            <p style={{ fontSize: "0.9rem", color: MUTED, marginTop: "0.5rem", marginBottom: 0 }}
              dangerouslySetInnerHTML={{ __html: "In-depth video teaching on the New Covenant, the heavenly tabernacle, and Jesus as our great high priest." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "1.25rem" }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: BG, borderRadius: 14, overflow: "hidden", border: `1px solid ${BORDER}` }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "0.9rem 1rem" }}>
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: TEXT, margin: 0, lineHeight: 1.4 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{ borderTop: `1px solid ${BORDER}`, padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT, marginBottom: "0.6rem" }}>Continue Studying Hebrews</p>
          <p style={{ fontSize: "0.9rem", color: MUTED, lineHeight: 1.65, marginBottom: "1.5rem" }}
            dangerouslySetInnerHTML={{ __html: "Hebrews 8 is the theological center of the letter. Chapters 9 and 10 develop the sacrifice and the Day of Atonement typology that chapter 8 introduces. Chapter 4:14-16 prepares the ground for approaching the throne of grace with confidence." }}
          />
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/bible-study" style={{ display: "inline-block", padding: "0.65rem 1.5rem", borderRadius: 10, background: `${GREEN}20`, color: GREEN, fontWeight: 700, fontSize: "0.85rem", border: `1px solid ${GREEN}40`, textDecoration: "none" }}>
              Open Bible Study Tool
            </a>
            <a href="/commentary-guide" style={{ display: "inline-block", padding: "0.65rem 1.5rem", borderRadius: 10, background: "rgba(255,255,255,0.04)", color: MUTED, fontWeight: 700, fontSize: "0.85rem", border: `1px solid ${BORDER}`, textDecoration: "none" }}>
              Commentary Guide
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
