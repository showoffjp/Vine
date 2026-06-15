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
  "Structure and Significance",
  "Word to Solomon",
  "Cherubim and Completion",
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
    heading: "Solomon Builds the Temple",
    reference: "1 Kings 6:1&ndash;38",
    paragraphs: [
      "1 Kings 6 stands at the heart of the whole book, recording the moment Israel had anticipated for generations: the building of a permanent house for the name of the Lord in Jerusalem. The chapter opens with a precise chronological marker &mdash; &ldquo;In the four hundred and eightieth year after the people of Israel came out of the land of Egypt, in the fourth year of Solomon&rsquo;s reign over Israel&hellip; he began to build the house of the Lord&rdquo; (v.1). That single verse binds the Temple to the Exodus, framing the building of this house as the climax of God&rsquo;s long work of redeeming and settling his people in the land.",
      "The narrative then turns to the dimensions of the structure: the house was sixty cubits long, twenty cubits wide, and thirty cubits high (v.2). These were modest proportions by the standards of the great temples of Egypt and Mesopotamia, yet every measurement was charged with meaning, echoing and enlarging the pattern of the tabernacle that Moses had been shown on the mountain. A portico stood across the front, side chambers were built on three levels around the outer walls, and recessed windows let in light from above.",
      "One of the most striking details in the chapter is the note about how the stone was prepared: &ldquo;When the house was built, it was with stone prepared at the quarry, so that neither hammer nor axe nor any tool of iron was heard in the house while it was being built&rdquo; (v.7). The Temple rose in silence. No sound of iron tools disturbed the sacred site &mdash; a vivid picture of a house of worship constructed in reverence and peace, untouched by the noise of weapons or the violence of war.",
      "Into the middle of the building account God himself speaks. In verses 11&ndash;13 the word of the Lord comes to Solomon with a conditional promise: if Solomon walks in God&rsquo;s statutes, obeys his rules, and keeps his commandments, then God will establish his word and &ldquo;will dwell among the children of Israel and will not forsake my people Israel&rdquo; (v.13). The grandeur of the building is thus subordinated to the deeper purpose of covenant faithfulness: the house matters only because the God who dwells there has bound himself to his people.",
      "The interior is then described in lavish detail. The inner walls were lined with cedar carved with gourds and open flowers, so that no stone was visible; the floor was overlaid with cypress. At the rear stood the inner sanctuary, the Most Holy Place, a perfect cube overlaid entirely with pure gold, prepared to house the ark of the covenant. Within it Solomon set two great cherubim of olivewood, ten cubits high, their outstretched wings spanning the room from wall to wall. Carved cherubim, palm trees, and open flowers adorned every surface, and the whole house was overlaid with gold.",
      "The chapter closes with another chronological note: the foundation was laid in the fourth year and the house finished in the eleventh year of Solomon&rsquo;s reign, &ldquo;so he was seven years in building it&rdquo; (v.38). Seven years &mdash; a number of completeness and rest &mdash; for the house of God. The reader is meant to hold this beside the detail in the next chapter, where Solomon spends thirteen years building his own palace. The order of his priorities, and the reverent care lavished on the Lord&rsquo;s house, become a quiet sermon in stone and gold.",
    ],
  },
  {
    id: "Structure and Significance",
    heading: "The Temple&rsquo;s Structure and Significance",
    reference: "1 Kings 6:1&ndash;10",
    paragraphs: [
      "The opening verse of the chapter is one of the most debated chronological statements in the Old Testament: the Temple was begun &ldquo;in the four hundred and eightieth year after the people of Israel came out of the land of Egypt&rdquo; (v.1). Whatever its precise reckoning, the theological intent is unmistakable. The narrator deliberately measures the Temple from the Exodus, declaring that the house in Jerusalem is the destination toward which the whole story of redemption has been moving. The God who brought Israel out of Egypt now comes to dwell in their midst in a settled place of his own choosing.",
      "The dimensions given in verse 2 &mdash; sixty cubits long, twenty wide, thirty high &mdash; reveal a structure built on the proportions of the tabernacle, but roughly doubled. The wilderness tent had been thirty cubits long and ten wide; the Temple takes that sacred pattern and enlarges it for a settled people in a permanent land. This continuity matters: Solomon is not inventing a new religion but giving fixed and glorious form to the worship God had already established through Moses. The same God, the same covenant, now housed in cedar and stone rather than skins and poles.",
      "The chapter describes a portico, or vestibule, across the front of the house, twenty cubits wide and projecting ten cubits before it (v.3). It served as a threshold between the common world outside and the holy space within, a place of approach. The narrow, recessed windows mentioned in verse 4 admitted light high in the walls while preserving the sense of enclosure and mystery proper to a sanctuary. Every architectural choice expressed the truth that to draw near to God is to enter a graduated holiness, moving from the ordinary toward the sacred.",
      "Around three sides of the house Solomon built side chambers on three storeys (vv.5&ndash;6). The supporting beams rested on ledges and offsets in the outer wall rather than being driven into the sanctuary itself, so that the holy structure was not pierced or burdened by the surrounding rooms. These chambers stored the treasures and furnishings of worship, but their very design honoured the integrity of the house of God, keeping the sacred core distinct from the practical rooms that served it.",
      "Then comes the celebrated note of verse 7: &ldquo;When the house was built, it was with stone prepared at the quarry, so that neither hammer nor axe nor any tool of iron was heard in the house while it was being built.&rdquo; Each stone was cut, shaped, and finished at the quarry, then carried up and set silently in its place. The result was a building that rose without the clang of iron, without the noise of striking and hewing on the holy mountain. Interpreters across the centuries have heard in this a profound theology of peace: the house of the Lord was built without the sound of weapons, a place set apart from the violence that marks the building of empires.",
      "There is a deeper resonance still. David had been forbidden to build the Temple precisely because he was a man of war who had shed much blood; that task was reserved for Solomon, whose very name is bound to the word for peace, shalom. The silence at the quarry-dressed stones becomes a sign of the peaceful kingdom under which the house was raised. The Temple is the house of the God of peace, and its construction in stillness foreshadows the rest and reconciliation that true worship is meant to bring.",
      "Finally, the description of the entrance, the winding stairway leading to the upper chambers, and the roofing of the house with beams and planks of cedar (vv.8&ndash;10) rounds out the picture of an ordered, deliberate, beautiful structure. Nothing is haphazard. The careful symmetry and the costly materials together proclaim that this is no ordinary building but a dwelling fashioned for the glory of God &mdash; sacred architecture that teaches the worshipper, through its very form, the order, beauty, and holiness of the One who is to be worshipped there.",
    ],
  },
  {
    id: "Word to Solomon",
    heading: "God&rsquo;s Word and the Inner Sanctuary",
    reference: "1 Kings 6:11&ndash;22",
    paragraphs: [
      "In the midst of the building account, the narrative is interrupted by a direct word from God. &ldquo;Now the word of the Lord came to Solomon&rdquo; (v.11), and in three short verses the whole meaning of the great project is reframed. Before another beam is laid or another wall overlaid with gold, the Lord reminds Solomon that the house he is raising is not an end in itself. The stones and cedar and gold are only the setting; the real treasure is the presence and faithfulness of God among his people.",
      "The word is a conditional covenant: &ldquo;Concerning this house that you are building, if you will walk in my statutes and obey my rules and keep all my commandments and walk in them, then I will establish my word with you, which I spoke to David your father&rdquo; (v.12). The promise of God&rsquo;s indwelling presence is bound to a life of obedience. Solomon may build the most magnificent house imaginable, but it is covenant faithfulness, not architecture, that secures the blessing. The grandeur of the Temple can never substitute for a heart that walks in the ways of the Lord.",
      "Then comes the heart of the promise: &ldquo;And I will dwell among the children of Israel and will not forsake my people Israel&rdquo; (v.13). This is the goal toward which all the building points. From the days of the tabernacle, God&rsquo;s great purpose had been to dwell in the midst of his people, and here that promise is renewed and tied to the new house. The Temple matters supremely because the living God has pledged to make it the place of his presence &mdash; the meeting point between heaven and earth, the assurance that he will not abandon those he has redeemed.",
      "With this word ringing in the reader&rsquo;s ears, the account returns to the interior of the house (vv.14&ndash;18). Solomon lines the inside walls with boards of cedar from floor to ceiling and the floor with boards of cypress, so that the inside of the house was all cedar and &ldquo;no stone was seen&rdquo; (v.18). The cedar itself was carved with gourds and open flowers, an interior garden of carved wood. The natural stone of the quarry, however carefully dressed, was wholly hidden beneath a covering of fragrant wood and craftsmanship &mdash; nothing rough or unfinished was left visible in the house of God.",
      "At the rear of the house Solomon prepared the inner sanctuary, the Most Holy Place, &ldquo;to set there the ark of the covenant of the Lord&rdquo; (v.19). This innermost room was a perfect cube, twenty cubits in each dimension. Its perfect proportions speak of completeness and divine order; it was the holiest space in Israel, the throne room of the invisible God, the place toward which all the worship of the nation was oriented. Everything else in the Temple existed to guard and frame this central chamber where the ark would rest beneath the wings of the cherubim.",
      "The defining feature of this inner sanctuary was gold &mdash; and not gold in measure, but gold without limit. Solomon overlaid the inside of the house with pure gold, and he drew chains of gold across the front of the inner sanctuary and overlaid it with gold (vv.20&ndash;21). &ldquo;And he overlaid the whole house with gold, until all the house was finished. Also the whole altar that belonged to the inner sanctuary he overlaid with gold&rdquo; (v.22). The repeated insistence on gold, gold, and more gold is not mere extravagance but a deliberate theology of glory: the radiance of the metal was meant to image the radiant holiness and surpassing worth of the God who would dwell within.",
      "The overlaid gold also carried a sober reminder. Such glory was costly, and it belonged entirely to the Lord. The Most Holy Place, blazing with gold yet empty of any image, declared that the God of Israel could be honoured with the best of human craft and treasure but could never be captured in an idol. The splendour pointed beyond itself to a holiness no gold could contain &mdash; a house full of glory, prepared for the One whom heaven and the highest heaven cannot hold.",
    ],
  },
  {
    id: "Cherubim and Completion",
    heading: "The Cherubim, Carvings, and Completion",
    reference: "1 Kings 6:23&ndash;38",
    paragraphs: [
      "The final movement of the chapter focuses first on the two great cherubim that Solomon made for the inner sanctuary. Each was carved of olivewood and stood ten cubits high (v.23). Their wings were so vast that &ldquo;the wing of the one cherub touched the one wall, and the wing of the other cherub touched the other wall; their other wings touched each other in the middle of the house&rdquo; (v.27). Together the four wings spanned a full twenty cubits, reaching from wall to wall across the Most Holy Place, and the cherubim too were overlaid with gold.",
      "These towering figures were guardians of the divine presence. In Scripture the cherubim guard the way to Eden and surround the throne of God; here they stretch their wings over the place where the ark of the covenant, with its own smaller cherubim of the mercy seat, would rest. The worshipper was meant to grasp that this was holy ground indeed &mdash; the throne room of the King of heaven, attended by the highest of his servants, a space charged with majesty and awe.",
      "From the inner sanctuary the carving spread outward to the whole house. &ldquo;Around all the walls of the house he carved engraved figures of cherubim and palm trees and open flowers, in the inner and outer rooms&rdquo; (v.29). The recurring motifs &mdash; cherubim, palm trees, and blossoming flowers &mdash; together evoked a kind of garden sanctuary, a return to Eden, a place of life and fruitfulness in the presence of God. The whole interior was a wooden paradise overlaid in gold, picturing the harmony between God and his people that worship is meant to restore.",
      "Solomon then made the doors. For the entrance to the inner sanctuary he fashioned two doors of olivewood, carved with cherubim, palm trees, and open flowers and overlaid with gold (vv.31&ndash;32). For the entrance to the nave he made doors of cypress, each with two leaves that folded, also carved and overlaid (vv.33&ndash;35). These doors marked the thresholds of holiness, the points of passage from the outer to the inner, from the holy to the most holy &mdash; reminders that access to the presence of God is graded, guarded, and never to be taken lightly.",
      "Around the house Solomon built the inner courtyard with three courses of dressed stone and a course of cedar beams (v.36). This courtyard set the sanctuary apart from the surrounding world, providing the sacred enclosure where the altar of burnt offering would stand and where the priests and people would gather. The careful boundary between the courtyard and what lay beyond reinforced once more the great theme of the chapter: holiness is ordered and bounded, and to approach the dwelling of God is to cross from common ground into consecrated space.",
      "The chapter ends with a return to chronology. &ldquo;In the fourth year the foundation of the house of the Lord was laid, in the month of Ziv. And in the eleventh year, in the month of Bul, which is the eighth month, the house was finished in all its parts, and according to all its specifications. He was seven years in building it&rdquo; (vv.37&ndash;38). Every part, exactly according to plan, completed in seven years &mdash; the number of fullness and rest. The house of the Lord was finished, perfect and whole, ready for the glory of God to fill it.",
      "The deliberate mention of seven years invites comparison with the very next chapter, where the text records that Solomon spent thirteen years building his own palace. The contrast is pointed but not a simple rebuke; rather it raises a searching question about priorities and proportion. That Solomon built the house of God first, and built it with such silent reverence and lavish glory, stands as a model of devotion. The completion of the Temple in 1 Kings 6 marks the high point of Israel&rsquo;s worship &mdash; a house built first, built well, and built for the God who promised to dwell among his people and never forsake them.",
    ],
  },
];

const videoItems = [
  { videoId: "Qm7e0xpToK4", title: "BibleProject - The Temple Explained - 1 Kings 6" },
  { videoId: "Lr8pzN9V3fA", title: "Solomon Builds the Temple - Bible Study Walkthrough" },
  { videoId: "Wd4tFq2mXbN", title: "No Hammer Was Heard - The Silent Construction of the Temple" },
  { videoId: "Zk9rB7hLpQ2", title: "The Most Holy Place and the Cherubim - 1 Kings 6 Explained" },
];

export default function OneKings6GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => setLoaded(true), []);
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
            1 Kings 6: Solomon Builds the Temple
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The building of the house of the Lord in Jerusalem &mdash; begun four hundred and eighty years after the Exodus, raised in silence from quarry-dressed stone, overlaid with gold, guarded by towering cherubim, and completed in seven years as the dwelling place for the God who promised never to forsake his people." }} />
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
              Deepen your study of 1 Kings 6 through visual teaching on the design of the Temple, the silent construction from quarry-dressed stone, the gold-overlaid Most Holy Place, and the great cherubim that guarded the ark.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A House for the Name of the Lord</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "1 Kings 6 shows worship given fixed and glorious form: a house raised in silence, overlaid in gold, and built first and built well. Yet the chapter&rsquo;s own word from God reminds us that no building can replace a faithful heart &mdash; the Temple matters because the living God pledged to dwell among his people and never forsake them." }} />
        </div>
      </main>
    </div>
  );
}
