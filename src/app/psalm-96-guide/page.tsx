"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const THEMES = [
  {
    id: "newsong",
    color: GOLD,
    title: "The New Song of All the Earth",
    body:
      "Psalm 96 opens with a triple call: &ldquo;Oh sing to the LORD a new song; sing to the LORD, all the earth! Sing to the LORD, bless his name.&rdquo; A &ldquo;new song&rdquo; in the Psalter marks fresh experience of God&rsquo;s saving work &mdash; praise that bursts the bounds of old, worn-out words because God has done something new. What is striking here is the audience: not just Israel but &ldquo;all the earth.&rdquo; The whole world is summoned into the choir. This new song recurs across Scripture, from the psalms (Psalm 33:3; 98:1; 149:1) to the songs of heaven in Revelation, where the redeemed of every tribe and tongue sing a new song to the Lamb (Revelation 5:9; 14:3). The new song is the soundtrack of redemption, sung by an ever-widening company.",
    refs: "Psalm 96:1&ndash;2; Psalm 33:3; Psalm 98:1; Revelation 5:9; Revelation 14:3",
  },
  {
    id: "nations",
    color: TEAL,
    title: "Declare His Glory Among the Nations",
    body:
      "The heart of the psalm, and its key verse, is missionary: &ldquo;Declare his glory among the nations, his marvelous works among all the peoples!&rdquo; Praise is not meant to stay inside the walls of the temple or the borders of Israel. The worshiper is sent outward as a herald, telling the nations who the LORD is and what he has done. This is one of the great missionary texts of the Old Testament, anticipating the Great Commission of Matthew 28:19, where the risen Christ sends his people to &ldquo;make disciples of all nations.&rdquo; Worship and witness belong together: those who truly see God&rsquo;s glory cannot keep it to themselves but proclaim it among the peoples.",
    refs: "Psalm 96:3; Isaiah 12:4; Matthew 28:18&ndash;20; Acts 1:8",
  },
  {
    id: "idols",
    color: PURPLE,
    title: "The Polemic Against Worthless Idols",
    body:
      "&ldquo;For great is the LORD, and greatly to be praised; he is to be feared above all gods. For all the gods of the peoples are worthless idols, but the LORD made the heavens.&rdquo; The Hebrew word translated &ldquo;worthless idols&rdquo; is elilim &mdash; literally &ldquo;nothings,&rdquo; a deliberate wordplay against elohim (&ldquo;gods&rdquo;). The gods of the nations are non-entities, empty and powerless. The contrast is decisive: idols make nothing, but the LORD made the heavens. The whole structure of false worship collapses before the Creator. This polemic is not arrogance; it is liberation &mdash; the nations are being called away from nothings to the living God who actually made the world they live in.",
    refs: "Psalm 96:4&ndash;5; Isaiah 44:9&ndash;20; Jeremiah 10:11&ndash;16; 1 Corinthians 8:4&ndash;6",
  },
  {
    id: "ascribe",
    color: ROSE,
    title: "Ascribe to the LORD Glory and Strength",
    body:
      "The psalm summons the peoples to a worshipful response: &ldquo;Ascribe to the LORD, O families of the peoples, ascribe to the LORD glory and strength! Ascribe to the LORD the glory due his name; bring an offering, and come into his courts! Worship the LORD in the splendor of holiness.&rdquo; To &ldquo;ascribe&rdquo; is to give God the recognition that is truly his &mdash; not adding to him but acknowledging what is already so. The families of the peoples are invited to bring offerings and enter his courts, to worship &ldquo;in the splendor of holiness.&rdquo; True worship is both reverent and beautiful, fitting to the holiness of the God who is worshiped.",
    refs: "Psalm 96:7&ndash;9; Psalm 29:1&ndash;2; Romans 12:1; Hebrews 12:28",
  },
  {
    id: "judge",
    color: GREEN,
    title: "Judgment as Good News for a World Set Right",
    body:
      "The psalm climaxes with creation itself rejoicing: &ldquo;Let the heavens be glad, and let the earth rejoice; let the sea roar&hellip; let the field exult&hellip; then shall all the trees of the forest sing for joy before the LORD, for he comes, for he comes to judge the earth.&rdquo; In modern ears &ldquo;judgment&rdquo; sounds like a threat, but here it is cause for the whole cosmos to celebrate. The reason: &ldquo;He will judge the world in righteousness, and the peoples in his faithfulness.&rdquo; When the true King comes to judge, every wrong is righted, every oppression overturned, every injustice answered. Judgment is the world finally set right. Creation longs for it because it longs to be liberated (Romans 8:19&ndash;21). The coming of the Judge is the hope of the groaning world.",
    refs: "Psalm 96:10&ndash;13; Romans 8:19&ndash;21; Acts 17:31; Revelation 19:11",
  },
];

const VERSE_SECTIONS = [
  {
    id: "v1",
    ref: "Psalm 96:1&ndash;3",
    color: GOLD,
    summary: "Sing a new song and declare his glory among the nations",
    body:
      "&ldquo;Oh sing to the LORD a new song; sing to the LORD, all the earth! Sing to the LORD, bless his name; tell of his salvation from day to day. Declare his glory among the nations, his marvelous works among all the peoples!&rdquo; The psalm opens with a global call to praise. Three times &ldquo;sing to the LORD&rdquo; rings out, and the singers are &ldquo;all the earth.&rdquo; Praise overflows into proclamation: tell of his salvation day after day, declare his glory among the nations. This is worship that becomes mission, the redeemed community herald to the world.",
  },
  {
    id: "v4",
    ref: "Psalm 96:4&ndash;6",
    color: PURPLE,
    summary: "Worthless idols versus the Maker of the heavens",
    body:
      "&ldquo;For great is the LORD, and greatly to be praised; he is to be feared above all gods. For all the gods of the peoples are worthless idols, but the LORD made the heavens. Splendor and majesty are before him; strength and beauty are in his sanctuary.&rdquo; The reason for global praise is the LORD&rsquo;s incomparable greatness. The gods of the nations are &ldquo;nothings&rdquo; (elilim) &mdash; they made nothing and can save no one. The LORD made the heavens, and splendor, majesty, strength, and beauty surround him in his sanctuary.",
  },
  {
    id: "v7",
    ref: "Psalm 96:7&ndash;9",
    color: ROSE,
    summary: "Ascribe glory, bring an offering, worship in holiness",
    body:
      "&ldquo;Ascribe to the LORD, O families of the peoples, ascribe to the LORD glory and strength! Ascribe to the LORD the glory due his name; bring an offering, and come into his courts! Worship the LORD in the splendor of holiness; tremble before him, all the earth!&rdquo; The nations are not merely told about God; they are invited in. The &ldquo;families of the peoples&rdquo; are called to give God his rightful glory, bring offerings, enter his courts, and worship in holy beauty. The proper response to the true God is reverent, awed worship.",
  },
  {
    id: "v10",
    ref: "Psalm 96:10&ndash;13",
    color: GREEN,
    summary: "The LORD reigns and comes to judge in righteousness",
    body:
      "&ldquo;Say among the nations, &lsquo;The LORD reigns!&rsquo;&hellip; Let the heavens be glad, and let the earth rejoice; let the sea roar&hellip; let the field exult&hellip; then shall all the trees of the forest sing for joy before the LORD, for he comes, for he comes to judge the earth. He will judge the world in righteousness, and the peoples in his faithfulness.&rdquo; The proclamation reaches its climax: the LORD reigns. All creation &mdash; heavens, earth, sea, fields, trees &mdash; is summoned to rejoice because the King is coming to judge, to set the whole world right in righteousness and faithfulness.",
  },
];

const APPLICATIONS = [
  {
    id: "a1",
    color: GOLD,
    title: "Let Your Worship Spill Over into Witness",
    body:
      "Psalm 96 will not let praise stay private. The same breath that sings to the LORD is told to &ldquo;declare his glory among the nations.&rdquo; If God has truly done marvelous works in your life, the natural overflow is to tell others &mdash; &ldquo;day to day,&rdquo; in ordinary conversations and across cultural lines. Ask yourself: who in your life has never heard you tell of God&rsquo;s salvation? Worship that never becomes witness has not yet caught the spirit of this psalm.",
  },
  {
    id: "a2",
    color: PURPLE,
    title: "Name the Idols as Nothings",
    body:
      "The psalm calls the gods of the peoples elilim &mdash; nothings. Our modern idols are subtler than carved images, but no less empty: money, status, control, image, comfort. They promise much and deliver nothing because they made nothing and can save no one. Naming our idols as the nothings they are is the first step to turning from them to the living God who made the heavens. What &ldquo;nothing&rdquo; have you been treating as everything?",
  },
  {
    id: "a3",
    color: ROSE,
    title: "Bring Your Whole Self into His Courts",
    body:
      "&ldquo;Ascribe to the LORD the glory due his name; bring an offering, and come into his courts.&rdquo; Worship in this psalm is not passive; it gives, it comes, it brings. We ascribe to God the glory that is already his and offer ourselves in response. Romans 12:1 calls this presenting our bodies as a living sacrifice. Worship &ldquo;in the splendor of holiness&rdquo; means coming reverently, beautifully, and wholly &mdash; not the leftovers of our attention but the offering of our lives.",
  },
  {
    id: "a4",
    color: GREEN,
    title: "Welcome the Coming Judge as Good News",
    body:
      "For a world weary of injustice, Psalm 96 reframes judgment as hope. The Judge is coming to set everything right &mdash; in righteousness and faithfulness. For those who trust him, his coming is not dread but joy, the answer to every prayer that cried &ldquo;how long?&rdquo; Let this shape how you face a broken world: not with cynicism or despair, but with the creation&rsquo;s own anticipation, joining the trees and seas that sing because the King is on his way.",
  },
];

const QUESTIONS = [
  "Psalm 96 calls for a &ldquo;new song.&rdquo; What new thing has God done in your life recently that calls for fresh praise rather than worn-out words?",
  "The key verse commands us to &ldquo;declare his glory among the nations.&rdquo; Who are the &ldquo;nations&rdquo; in your everyday world &mdash; the people and places where God&rsquo;s glory needs to be declared?",
  "The psalm calls the idols of the peoples &ldquo;worthless nothings.&rdquo; What modern idol have you been tempted to treat as if it could give you life?",
  "How does seeing that &ldquo;the LORD made the heavens&rdquo; while the idols made nothing change the way you assess what is worth worshiping?",
  "Psalm 96 pictures all creation rejoicing because the LORD comes to judge the earth. Why might judgment be good news, and how does that reframe your view of the world&rsquo;s injustices?",
  "What would it look like this week to let your worship of God overflow into witness about him?",
];

const PRAYER =
  "LORD our Maker, we sing to you a new song, for you alone are great and greatly to be praised. The gods of the peoples are nothings, but you made the heavens, and splendor and majesty are before you. Make us heralds of your glory among the nations, that all the peoples may hear of your marvelous works and your salvation. Turn us from every worthless idol to worship you in the splendor of holiness. And we lift our eyes with all creation &mdash; the heavens, the seas, the fields, and the trees &mdash; rejoicing that you are coming to judge the earth in righteousness and the peoples in your faithfulness. Come, Lord, and set your world right. In the name of Jesus, the coming King, we pray. Amen.";

const RELATED = [
  { label: "Psalm 95 Guide", href: "/psalm-95-guide" },
  { label: "Evangelism Guide", href: "/evangelism-guide" },
  { label: "Worship Theology", href: "/worship-theology-guide" },
  { label: "Eschatology Guide", href: "/eschatology-guide" },
];

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 96: Sing to the LORD a New Song" },
  { videoId: "OjJ7GkWCHvA", title: "Declare His Glory Among the Nations" },
  { videoId: "pHBzJ2dVXgk", title: "Worthless Idols and the Maker of Heaven" },
  { videoId: "3sO5FH2ybPY", title: "When Judgment Is Good News: Psalm 96" },
];

export default function Psalm96Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const card: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 16,
    padding: "1.5rem",
  };
  const html = (s: string) => ({ dangerouslySetInnerHTML: { __html: s } });
  const accordionBtn = (isOpen: boolean, color: string): React.CSSProperties => ({
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.25rem",
    background: isOpen ? `${color}14` : "transparent",
    border: `1px solid ${isOpen ? color + "55" : BORDER}`,
    borderRadius: 12,
    cursor: "pointer",
    marginBottom: 8,
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.98rem",
    transition: "all .2s",
  });

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span
              aria-hidden="true"
              style={{ fontSize: "1.6rem", color: TEAL }}
              dangerouslySetInnerHTML={{ __html: "&#9788;" }}
            />
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: 2,
                color: TEAL,
                textTransform: "uppercase",
              }}
            >
              Book of Psalms &middot; Study Guide
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.9rem,4vw,2.9rem)", fontWeight: 900, lineHeight: 1.12, margin: "0 0 1rem" }}>
            Psalm 96: A New Song for All the Nations
          </h1>
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 680 }} {...html(
            "Psalm 96 is one of the great missionary texts of the Old Testament &mdash; a summons for &ldquo;all the earth&rdquo; to sing a new song, to declare God&rsquo;s glory among the nations, to turn from worthless idols to the Maker of the heavens, and to rejoice that the LORD comes to judge the earth and set it right. This guide explores its worldwide vision of worship and witness."
          )} />
          <div
            style={{
              marginTop: "1.5rem",
              background: `${TEAL}10`,
              border: `1px solid ${TEAL}33`,
              borderLeft: `3px solid ${TEAL}`,
              borderRadius: 12,
              padding: "1.1rem 1.3rem",
            }}
          >
            <div style={{ fontWeight: 800, color: TEAL, fontSize: "0.82rem", letterSpacing: 1, marginBottom: "0.4rem" }}>
              KEY VERSE &middot; PSALM 96:3
            </div>
            <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontStyle: "italic" }} {...html(
              "&ldquo;Declare his glory among the nations, his marvelous works among all the peoples!&rdquo;"
            )} />
          </div>
        </header>

        {/* Tab bar */}
        <nav style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: "0.82rem",
                background: tab === t ? TEAL : "transparent",
                color: tab === t ? "#04110f" : MUTED,
                border: `1px solid ${tab === t ? TEAL : BORDER}`,
                cursor: "pointer",
                transition: "all .18s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </nav>

        {/* Overview */}
        {tab === "overview" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.75rem", color: TEAL }}>Summary</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }} {...html(
                "Psalm 96 is a missionary psalm with a global horizon. It calls not only Israel but &ldquo;all the earth&rdquo; to sing a new song to the LORD and to declare his glory among the nations. The reason for this worldwide praise is the LORD&rsquo;s supremacy: the gods of the peoples are worthless nothings, but the LORD made the heavens. The psalm summons the families of the peoples to ascribe glory to God, bring offerings, and worship in the splendor of holiness. It climaxes with all creation rejoicing &mdash; heavens, earth, sea, fields, and trees &mdash; because the LORD reigns and is coming to judge the world in righteousness."
              )} />
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.75rem", color: PURPLE }}>Structure</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { r: "96:1&ndash;3", t: "A new song &mdash; sing and declare his glory among the nations", c: GOLD },
                  { r: "96:4&ndash;6", t: "The reason &mdash; worthless idols versus the Maker of the heavens", c: PURPLE },
                  { r: "96:7&ndash;9", t: "The summons &mdash; ascribe glory, bring offerings, worship in holiness", c: ROSE },
                  { r: "96:10&ndash;13", t: "The climax &mdash; the LORD reigns and comes to judge in righteousness", c: GREEN },
                ].map((s) => (
                  <div
                    key={s.r}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "baseline",
                      background: `${s.c}0A`,
                      border: `1px solid ${s.c}25`,
                      borderRadius: 10,
                      padding: "0.8rem 1rem",
                    }}
                  >
                    <span style={{ fontWeight: 800, color: s.c, fontSize: "0.85rem", whiteSpace: "nowrap" }} {...html(s.r)} />
                    <span style={{ color: MUTED, lineHeight: 1.6 }} {...html(s.t)} />
                  </div>
                ))}
              </div>
            </div>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.75rem", color: GOLD }}>Context</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 1rem" }} {...html(
                "Psalm 96 is largely paralleled in 1 Chronicles 16:23&ndash;33, part of the song sung when David brought the ark of the covenant up to Jerusalem. Its setting is therefore one of national celebration that bursts its banks into a vision for all the nations of the earth. The psalm is one of a cluster of &ldquo;enthronement&rdquo; psalms (93, 95&ndash;99) that proclaim &ldquo;the LORD reigns.&rdquo;"
              )} />
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }} {...html(
                "As a missionary text, &ldquo;declare his glory among the nations&rdquo; anticipates the Great Commission of Matthew 28:19. Its sharp contrast between worthless idols (elilim, &ldquo;nothings&rdquo;) and the LORD who made the heavens echoes through the prophets and into the New Testament. And its portrayal of judgment as a cause for all creation to rejoice &mdash; the world finally set right &mdash; looks ahead to the renewal of all things. The &ldquo;new song&rdquo; of Psalm 96 recurs across the Psalter and reaches its fullest note in Revelation 5:9 and 14:3, sung by the redeemed before the throne."
              )} />
            </div>
          </section>
        )}

        {/* Themes */}
        {tab === "themes" && (
          <section style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.5rem", color: TEAL }}>Key Themes</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem" }} {...html(
              "Five threads run through Psalm 96, from the new song of all the earth to judgment as the hope of a groaning world. Open each to explore the theme and its cross-references."
            )} />
            {THEMES.map((th) => {
              const isOpen = open === th.id;
              return (
                <div key={th.id}>
                  <button type="button" style={accordionBtn(isOpen, th.color)} onClick={() => toggle(th.id)}>
                    <span {...html(th.title)} />
                    <span style={{ color: th.color, fontSize: "1.2rem" }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${th.color}0A`,
                        border: `1px solid ${th.color}22`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.9rem" }} {...html(th.body)} />
                      <p style={{ color: th.color, fontSize: "0.85rem", fontWeight: 700, margin: 0 }} {...html("Cross-references: " + th.refs)} />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* Verse by Verse */}
        {tab === "verse" && (
          <section style={card}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.5rem", color: PURPLE }}>Verse by Verse</h2>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: "0 0 1.5rem" }} {...html(
              "Move through Psalm 96 section by section, following its movement from the new song to the rejoicing of all creation before the coming Judge. Open each passage for its text and explanation."
            )} />
            {VERSE_SECTIONS.map((v) => {
              const isOpen = open === v.id;
              return (
                <div key={v.id}>
                  <button type="button" style={accordionBtn(isOpen, v.color)} onClick={() => toggle(v.id)}>
                    <span style={{ display: "flex", flexDirection: "column", gap: "0.2rem", textAlign: "left" }}>
                      <span style={{ color: v.color, fontWeight: 800 }} {...html(v.ref)} />
                      <span style={{ color: MUTED, fontWeight: 500, fontSize: "0.85rem" }} {...html(v.summary)} />
                    </span>
                    <span style={{ color: v.color, fontSize: "1.2rem" }}>{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        background: `${v.color}0A`,
                        border: `1px solid ${v.color}22`,
                        borderRadius: 10,
                        padding: "1rem 1.25rem",
                        marginBottom: 8,
                      }}
                    >
                      <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }} {...html(v.body)} />
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        {/* Application */}
        {tab === "application" && (
          <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 1rem", color: GREEN }}>Living Psalm 96</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {APPLICATIONS.map((a) => (
                  <div
                    key={a.id}
                    style={{
                      background: `${a.color}08`,
                      border: `1px solid ${a.color}25`,
                      borderLeft: `3px solid ${a.color}`,
                      borderRadius: 12,
                      padding: "1.1rem 1.3rem",
                    }}
                  >
                    <h3 style={{ fontWeight: 800, color: a.color, margin: "0 0 0.5rem", fontSize: "1.05rem" }} {...html(a.title)} />
                    <p style={{ color: MUTED, lineHeight: 1.75, margin: 0 }} {...html(a.body)} />
                  </div>
                ))}
              </div>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 1rem", color: GOLD }}>Reflection Questions</h2>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {QUESTIONS.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.7 }} {...html(q)} />
                ))}
              </ol>
            </div>

            <div style={card}>
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 1rem", color: PURPLE }}>Video Teaching</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div key={v.videoId}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <p style={{ color: MUTED, fontSize: "0.85rem", margin: "0.5rem 0 0" }} {...html(v.title)} />
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: `${GREEN}0E`,
                border: `1px solid ${GREEN}33`,
                borderRadius: 16,
                padding: "1.5rem",
              }}
            >
              <h2 style={{ fontWeight: 900, fontSize: "1.3rem", margin: "0 0 0.75rem", color: GREEN }}>A Closing Prayer</h2>
              <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontStyle: "italic" }} {...html(PRAYER)} />
            </div>
          </section>
        )}

        {/* Related guides */}
        <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {RELATED.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: 999,
                fontSize: "0.82rem",
                fontWeight: 700,
                border: `1px solid ${BORDER}`,
                color: MUTED,
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
