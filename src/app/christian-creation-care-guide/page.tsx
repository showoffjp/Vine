"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";

const TABS = ["Genesis Mandate", "Land & Sabbath", "Psalms & Praise", "New Creation", "Practice", "Videos"] as const;
type Tab = typeof TABS[number];

const SECTIONS: Record<Tab, { heading: string; color: string; verse: string; verseRef: string; paragraphs: string[] }> = {
  "Genesis Mandate": {
    heading: "Till and Keep: The Original Mandate",
    color: GREEN,
    verse: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it.",
    verseRef: "Genesis 2:15",
    paragraphs: [
      "The very first assignment God gave humanity was ecological. Before the fall, before sin, before civilization, God placed the human being in a garden and gave two verbs: abad (to work, serve, till) and shamar (to keep, guard, preserve). These are not passive verbs. They describe active, attentive, loving cultivation — the kind of care a gardener gives to living things that depend on her.",
      "The broader mandate in Genesis 1:28 speaks of dominion (radah) and subduing (kabash). These words have been badly misread. Radah in the Old Testament most often describes a shepherd\\'s oversight of a flock or a king\\'s care for his people. It is authority exercised for the benefit of what is under one\\'s care, not for its exploitation. The king who destroys his subjects has failed as a king. The steward who ruins the master\\'s estate has failed in his stewardship.",
      "Christian creation care begins here: not with politics, not with environmental science (though both matter), but with the original vocation of humanity. We were made to be gardeners. The fall distorted that calling — thorns and thistles, sweat and toil, fracture between the human and the humus from which we were made (Gen. 3:17-19). Redemption in Christ restores us to our original vocation, now pursued with longing and hope in a still-broken world.",
      "The image of God (imago Dei) in Genesis 1:26-28 is inseparable from the mandate to care. We bear God\\'s image into creation as his vice-regents. God is the Creator who sustains, feeds, and delights in what he has made (Ps. 104; Job 38-41). To bear his image is to do the same — to sustain, protect, and take genuine pleasure in the flourishing of the non-human world.",
    ],
  },
  "Land & Sabbath": {
    heading: "The Theology of Land: Sabbath, Jubilee, and the Groaning Soil",
    color: GOLD,
    verse: "For six years you are to sow your fields and harvest the crops, but during the seventh year let the land lie unplowed and unused.",
    verseRef: "Exodus 23:10-11",
    paragraphs: [
      "The Old Testament has a robust theology of land that modern Christians rarely engage. The land of Canaan was not merely territory — it was a participant in Israel\\'s covenant relationship with God. The land could be defiled by Israel\\'s sin (Lev. 18:25, 28). It could vomit out unfaithful inhabitants. And it required its own Sabbath rest.",
      "The Sabbatical Year (Lev. 25:1-7) commanded that every seventh year the land would lie fallow — no plowing, no harvesting, no pruning. What grew of itself was to be left for the poor, the stranger, and the wild animals. The land was not merely an economic resource. It was a participant in Israel\\'s covenant rhythms, a fellow worshipper given the gift of rest alongside Israel\\'s own weekly Sabbath.",
      "The Year of Jubilee (Lev. 25:8-55), every fiftieth year, took this further: land returned to its original family allocations, debts were cancelled, slaves were freed. The entire economic-ecological order was reset. Walter Brueggemann argues that the Jubilee is God\\'s protest against the absolutizing of economic claims over the land. The land is never ultimately a human possession: \\'The land must not be sold permanently, because the land is mine and you reside in my land as foreigners and strangers\\' (Lev. 25:23).",
      "The prophets connected Israel\\'s exile directly to the neglect of the Sabbatical Year. Second Chronicles 36:21 says the land \\'rested\\' during the seventy years of Babylonian exile, \\'to fulfill the word of the Lord spoken by Jeremiah\\' — the land got the Sabbaths it was owed. Land stewardship was not optional for Israel; it was bound up with their covenant faithfulness. And when they failed, the land suffered, and so did they.",
      "For Christians today, this OT theology of land challenges several assumptions: that land is simply private property to be used however we wish; that ecological rest is economically irrational rather than spiritually commanded; and that creation care is a modern secular concern rather than rooted in ancient Scripture. The Sabbath was always bigger than one day — it was a whole philosophy of enough.",
    ],
  },
  "Psalms & Praise": {
    heading: "Creation as Choir: The Psalms as Nature Poetry",
    color: TEAL,
    verse: "The heavens declare the glory of God; the skies proclaim the work of his hands.",
    verseRef: "Psalm 19:1",
    paragraphs: [
      "The Psalter is the richest nature poetry in the ancient world, and it emerges directly from the theology of creation. The heavens speak (Ps. 19). The sea roars in praise (Ps. 98:7). The mountains skip like rams (Ps. 114:4). The trees of the field sing for joy (Ps. 96:12). Snow and hail, sea creatures and flying birds, fruit trees and cedars all join a great cosmic choir of praise to their Creator (Ps. 148).",
      "Richard Bauckham argues in Bible and Ecology that this is not mere poetic metaphor. The Psalms witness to a creation that has its own relationship with God, its own voice before its Creator, independent of humanity. Creation praises God not merely through its beauty delighting human observers, but in its very existence, its own creaturely being. When we destroy a species, we silence a voice in that choir. The choir loses a part it can never recover.",
      "Psalm 104 is the great creation psalm — a meditation on God\\'s ongoing providential care for every creature. God waters the mountains (v. 13), makes grass grow for livestock and plants for humans (v. 14), gives the young lions their prey (v. 21), and makes the stork its home in the juniper trees (v. 17). Every creature has its place in God\\'s providential economy. God\\'s care is not limited to humanity; it extends to every bird, beast, and creeping thing.",
      "Job 38-41 is perhaps the most astonishing ecological passage in Scripture. When Job demands an answer from God in his suffering, God answers with creation: Where were you when I laid the foundation of the earth? Can you bind the Pleiades or loose Orion\\'s belt? Do you know when the mountain goat gives birth? Have you comprehended the expanse of the earth? God\\'s answer is a tour of the wild — creatures that have no economic value to humanity but are deeply cared for by God. The ostrich, the horse, the hawk, the crocodile. Job is humbled not by an argument but by the sheer scale and otherness of the non-human world that God loves.",
      "The Psalms form us as creation-carers. When we pray them, we join the choir of creation. When we sing Psalm 148, we are not commanding nature to praise — we are recognizing and joining a praise that is already happening. Christian worship has always been an ecological act: we gather as creatures, among creatures, to praise the Creator of all creatures.",
    ],
  },
  "New Creation": {
    heading: "Groaning and Glory: Romans 8 and the Hope of New Creation",
    color: PURPLE,
    verse: "The creation waits in eager expectation for the children of God to be revealed... the whole creation has been groaning as in the pains of childbirth right up to the present time.",
    verseRef: "Romans 8:19, 22",
    paragraphs: [
      "Romans 8:19-22 is the most theologically dense passage in the New Testament concerning creation\\'s fate. Paul says four remarkable things: creation is waiting (apokaradokia — craning its neck in eager longing), creation was subjected to frustration not by its own choice but because of Adam\\'s sin, creation is enslaved to decay and has not yet entered the freedom it was made for, and creation will be liberated in connection with the revelation of the children of God.",
      "This is extraordinary. Paul does not say creation will be discarded when Christ returns. He says it will be liberated. The trajectory of redemption is not escape from the physical world but the transformation of it. The resurrection of Jesus is the first fruit of this — not a spirit rising from a corpse but a body transformed, glorified, bearing the wounds of history in transfigured form. N.T. Wright argues that the resurrection means matter matters to God. Physical creation is not a temporary scaffolding but the very substance of the renewed world.",
      "The groaning of creation is Paul\\'s ecological diagnosis of the present age. The floods, the extinctions, the polluted rivers, the eroding topsoil — these are not incidental background noise. They are the groaning of a creation under the curse of sin, longing for the Day when the sons and daughters of God will be revealed as the faithful stewards they were made to be. Our creation care now is a sign and foretaste of that Day.",
      "Revelation 21-22 completes the picture. The final vision of Scripture is not disembodied souls in a cloudless heaven. It is a city — the New Jerusalem — coming down to a renewed earth. The tree of life (from Eden) is there. The river of life runs through the city. All nations walk by its light. Creation is not abandoned; it is completed. The garden becomes a city-garden; the original mandate to till and keep reaches its eschatological fulfillment in a world where nothing will be cursed anymore (Rev. 22:3).",
      "This eschatology has direct practical implications. If the earth has an eternal future, it is not disposable. If God intends to renew creation rather than replace it, then our present care of creation is not wasted effort — it is an investment in a world with a future. We do not know exactly what continuity there will be between the present creation and the new creation, but the direction of Scripture is clear: God loves what he made, redeems what he loves, and brings to glory what he redeems.",
    ],
  },
  "Practice": {
    heading: "Ecology as Worship: Practical Creation Care",
    color: BLUE,
    verse: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
    verseRef: "Colossians 3:23",
    paragraphs: [
      "Creation care is not merely a theological position — it is a set of daily practices. The question is not whether we will affect creation (we always do) but whether we will affect it faithfully. Wendell Berry, America\\'s great Christian agrarian writer, insists that creation care begins with the particular: this field, this watershed, this neighborhood, this piece of ground entrusted to your care. Abstract environmental concern without local embodiment is sentimentality.",
      "Individual practices flow from theology, not merely from efficiency or economics. We reduce food waste because food is a gift from a generous God, not a commodity to discard. We eat with attention to how our food was grown because the land it came from is God\\'s land. We choose to walk or bike not primarily because of carbon footprints but because creation is worth noticing — and we notice it better at human pace. We plant gardens because humans were made to be gardeners.",
      "Church communities can be laboratories of creation care. Native plant gardens on church grounds support pollinators and local wildlife while reducing maintenance. Church-sponsored gleaning programs connect food waste prevention with care for the poor (both creation-care commands in Leviticus 19:9-10). Energy efficiency in church buildings is faithful stewardship of resources entrusted to the community. Churches that pray for creation in corporate worship form people who see their ecological choices as acts of worship.",
      "Advocacy matters too, though it must be pursued with wisdom and charity. Christians can support environmental policies from a biblical rather than partisan framework — grounding creation care in God\\'s ownership, human vocation, and love for the poor who are most harmed by ecological degradation. The evangelical Lausanne movement\\'s Cape Town Commitment (2010) called creation care \\'a gospel issue\\' — not a peripheral concern but central to biblical discipleship.",
      "The spiritual danger is both despair and indifference. Despair says the damage is too great and the system too powerful for individual faithfulness to matter. Indifference says it\\'s not my problem. Both are forms of unfaith. The biblical alternative is faithful presence — doing the good that is ours to do, in the place that is ours to tend, trusting that God will bring to completion what we begin in faithfulness. We plant trees under whose shade we will never sit, because God is at work in history bringing forth a new creation, and our small acts of tending are caught up in that great work.",
    ],
  },
  "Videos": {
    heading: "Learn More: Video Resources on Christian Creation Care",
    color: GREEN,
    verse: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
    verseRef: "Micah 6:8",
    paragraphs: [],
  },
};

const VIDEOS = [
  {
    videoId: "oo6-Y8pDR2E",
    title: "The Bible Project: Sabbath — Rest as Resistance",
  },
  {
    videoId: "GmFyqa64s3E",
    title: "Heaven and Earth — What Does the Bible Say About Creation\\'s Future?",
  },
  {
    videoId: "IJ-FekWUZzE",
    title: "Christian Creation Care: A Biblical Foundation",
  },
];

const QUICK_FACTS = [
  { label: "Genesis 2:15", desc: "The first human vocation: to till and keep the garden" },
  { label: "Psalm 24:1", desc: "\"The earth is the Lord\\'s\" — the foundation of all stewardship" },
  { label: "Leviticus 25:4", desc: "Sabbath for the land — rest is built into creation\\'s rhythm" },
  { label: "Romans 8:21", desc: "Creation itself will be liberated into the glory of God\\'s children" },
  { label: "Revelation 11:18", desc: "God will destroy those who destroy the earth" },
  { label: "Colossians 1:20", desc: "God reconciles to himself all things — in heaven and on earth" },
];

export default function ChristianCreationCareGuide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Genesis Mandate");
  const [openFact, setOpenFact] = useState<number | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const section = SECTIONS[activeTab];

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      {/* ── Hero ── */}
      <div
        style={{
          background: `linear-gradient(135deg, #071a0e 0%, #07070F 60%, #0d0d1f 100%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🌿</div>
        <h1
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 900,
            color: TEXT,
            marginBottom: "1rem",
            lineHeight: 1.15,
          }}
        >
          Christian Creation Care
        </h1>
        <p
          style={{
            color: MUTED,
            maxWidth: 640,
            margin: "0 auto 1.5rem",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          The earth belongs to God. We are called to till and keep it &mdash; not merely to use it. Creation care
          is not a political position; it is a response to Genesis, the Psalms, and the hope of new creation.
        </p>
        <div
          style={{
            display: "inline-block",
            background: `${GREEN}22`,
            border: `1px solid ${GREEN}`,
            borderRadius: 8,
            padding: "0.6rem 1.2rem",
            color: "#a0d4b3",
            fontSize: "0.9rem",
            fontStyle: "italic",
          }}
        >
          &ldquo;The earth is the Lord&rsquo;s, and everything in it.&rdquo; &mdash; Psalm 24:1
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>

        {/* ── Quick Reference ── */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
            Key Scriptures
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.75rem" }}>
            {QUICK_FACTS.map((fact, i) => (
              <button
                key={fact.label}
                onClick={() => setOpenFact(openFact === i ? null : i)}
                style={{
                  background: CARD,
                  border: `1px solid ${openFact === i ? GREEN : BORDER}`,
                  borderRadius: 10,
                  padding: "0.85rem 1rem",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
              >
                <div style={{ fontWeight: 700, color: GREEN, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{fact.label}</div>
                {openFact === i && (
                  <div style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6 }}>{fact.desc}</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tabs ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.75rem",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 20,
                border: `1px solid ${activeTab === tab ? section.color : BORDER}`,
                background: activeTab === tab ? `${section.color}22` : CARD,
                color: activeTab === tab ? section.color : MUTED,
                fontWeight: activeTab === tab ? 700 : 400,
                cursor: "pointer",
                fontSize: "0.85rem",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Section Content ── */}
        {activeTab !== "Videos" ? (
          <div>
            {/* Section Header */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${section.color}`,
                borderRadius: "0 12px 12px 0",
                padding: "1.5rem",
                marginBottom: "1.75rem",
              }}
            >
              <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", fontWeight: 800, color: TEXT, marginBottom: "0.75rem" }}>
                {section.heading}
              </h2>
              <blockquote
                style={{
                  borderLeft: `3px solid ${section.color}`,
                  paddingLeft: "1rem",
                  margin: 0,
                  color: MUTED,
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                }}
              >
                &ldquo;{section.verse}&rdquo;
                <footer style={{ marginTop: "0.4rem", color: section.color, fontStyle: "normal", fontWeight: 600, fontSize: "0.85rem" }}>
                  &mdash; {section.verseRef}
                </footer>
              </blockquote>
            </div>

            {/* Paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "1.25rem 1.5rem",
                    color: TEXT,
                    lineHeight: 1.8,
                    fontSize: "0.97rem",
                    margin: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        ) : (
          /* ── Videos Tab ── */
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: "0 12px 12px 0",
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: TEXT, marginBottom: "0.5rem" }}>
                {section.heading}
              </h2>
              <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>
                These videos offer biblical, theological, and practical perspectives on Christian creation care.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.85rem 1rem" }}>
                    <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.95rem", margin: 0 }}>{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Inline Videos (non-video tabs) ── */}
        {activeTab === "New Creation" && (
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ color: MUTED, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
              Featured Video
            </h3>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="oo6-Y8pDR2E" title="The Bible Project: Sabbath — Rest as Resistance" />
              <div style={{ padding: "0.85rem 1rem" }}>
                <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}>
                  The Bible Project on Sabbath &mdash; and why rest is built into the fabric of creation.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Practice" && (
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ color: MUTED, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
              Featured Video
            </h3>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="IJ-FekWUZzE" title="Christian Creation Care: A Biblical Foundation" />
              <div style={{ padding: "0.85rem 1rem" }}>
                <p style={{ color: MUTED, fontSize: "0.88rem", margin: 0 }}>
                  A biblical case for why creation care flows from the heart of the Christian faith.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Closing Encouragement ── */}
        <div
          style={{
            marginTop: "3rem",
            background: `linear-gradient(135deg, #071a0e, #070f1a)`,
            border: `1px solid ${GREEN}`,
            borderRadius: 14,
            padding: "2rem 1.75rem",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🌱</div>
          <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.75rem" }}>
            Begin Where You Are
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.75, maxWidth: 580, margin: "0 auto 1rem", fontSize: "0.95rem" }}>
            Creation care does not require a grand strategy or a policy platform. It begins with attention &mdash;
            noticing the particular piece of earth you inhabit, the birds in your neighborhood, the water in your
            watershed. It begins with gratitude, which is the root of all faithful stewardship.
          </p>
          <p style={{ color: TEXT, lineHeight: 1.75, maxWidth: 580, margin: "0 auto", fontStyle: "italic", fontSize: "0.9rem" }}>
            &ldquo;The whole earth is full of his glory.&rdquo; &mdash; Isaiah 6:3
          </p>
        </div>
      </div>
    </div>
  );
}
