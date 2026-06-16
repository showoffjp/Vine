"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const ROSE = "#E11D48";

type Tab = "overview" | "themes" | "verse" | "application";

export default function Isaiah28GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "xKLNXmIuxoM", title: "Isaiah 28 -- The Cornerstone in Zion" },
    { videoId: "Xt3PpRDCIaQ", title: "Woe to Ephraim -- Pride and Its Consequences" },
    { videoId: "hIGaA_0QEUE", title: "The Precious Cornerstone -- Isaiah 28:16 in the New Testament" },
    { videoId: "8yIODO3QnMQ", title: "The Covenant with Death -- Isaiah 28 Commentary" },
  ];

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg, #0d0d1a 0%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 44px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GREEN}18`, border: `1px solid ${GREEN}40`, borderRadius: 24, padding: "4px 18px", fontSize: 13, color: GREEN, fontWeight: 700, marginBottom: 18, letterSpacing: "0.04em" }}>
            ISAIAH 28
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
            The Proud Crown and the Precious Cornerstone
          </h1>
          <p style={{ color: MUTED, fontSize: 17, maxWidth: 640, margin: "0 auto 28px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 28 pronounces woe on the drunken pride of Ephraim and the faithless leaders of Jerusalem who have made a covenant with death. Into that darkness God lays a cornerstone in Zion &mdash; a tested, precious, sure foundation &mdash; and closes with the parable of the farmer, showing that God&rsquo;s wisdom governs even the ordinary rhythms of work and harvest." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { label: "Crown of Pride", color: ROSE },
              { label: "Covenant with Death", color: GOLD },
              { label: "Precious Cornerstone", color: GREEN },
              { label: "Line upon Line", color: PURPLE },
              { label: "Parable of the Farmer", color: TEAL },
            ].map((badge) => (
              <span key={badge.label} style={{ background: `${badge.color}18`, border: `1px solid ${badge.color}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: badge.color, fontWeight: 700 }}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key verse banner */}
      <div style={{ background: `${GREEN}12`, borderTop: `1px solid ${GREEN}30`, borderBottom: `1px solid ${GREEN}30`, padding: "20px 20px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 18, fontStyle: "italic", color: TEXT, margin: 0, lineHeight: 1.65 }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;Behold, I am laying in Zion a stone, a tested stone, a precious cornerstone, a sure foundation: whoever believes will not be in haste.&rdquo; &mdash; Isaiah 28:16" }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px 0" }}>
        <div style={{ display: "flex", gap: 4, background: CARD, borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, marginBottom: 36 }}>
          {tabs.map((t) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "11px 8px",
                borderRadius: 9,
                border: "none",
                background: activeTab === t.id ? GREEN : "transparent",
                color: activeTab === t.id ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Context card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>HISTORICAL AND LITERARY CONTEXT</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, margin: "0 0 14px" }}>Woe, Cornerstone, and the Farmer&rsquo;s Wisdom</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 28 opens a new section of the book (chapters 28&ndash;33), a series of six &ldquo;woe&rdquo; oracles addressed to the leaders of Judah and Jerusalem. The historical setting is the late eighth century BC, when the northern kingdom of Israel (Ephraim) has already fallen to Assyria (722 BC) or is about to fall, and the southern kingdom of Judah under King Hezekiah is tempted to seek protection through an alliance with Egypt rather than through trust in the LORD. Isaiah warns Judah by pointing first to the ruin of her northern neighbor." }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter divides into three movements: the woe against Ephraim&rsquo;s drunken pride (vv.1&ndash;13), the woe against Jerusalem&rsquo;s faithless covenant with death (vv.14&ndash;22), and the parable of the farmer that closes the chapter with a meditation on God&rsquo;s instructing wisdom (vv.23&ndash;29). At the chapter&rsquo;s center stands the great promise of verse 16 &mdash; a cornerstone in Zion whose fulfillment the New Testament explicitly identifies with Jesus Christ (Romans 9:33; 1 Peter 2:6)." }}
              />
            </div>

            {/* Two-column grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: ROSE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>VERSES 1-13</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>Woe to the Proud Crown</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The chapter opens with a vivid woe against the drunkards of Ephraim, whose glorious crown has become a fading flower. Priest and prophet reel with wine and stagger in vision. The section closes with the famous &ldquo;line upon line, precept upon precept&rdquo; passage &mdash; a judgment in which God will speak to his people through the foreign lips of the Assyrian invader, because they refused to hear his word." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>VERSES 14-29</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, margin: "0 0 10px" }}>The Cornerstone and the Farmer</h3>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Against the scoffers of Jerusalem who have made a &ldquo;covenant with death,&rdquo; God announces the laying of the cornerstone in Zion. The scornful covenant will not stand when the overwhelming scourge passes through. The chapter ends with a beautiful parable: the farmer knows when to plow, when to plant, and when to thresh &mdash; because his God instructs him. Divine wisdom governs ordinary work." }}
                />
              </div>
            </div>

            {/* Key memory verses */}
            <div style={{ background: `${PURPLE}12`, border: `1px solid ${PURPLE}35`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 16 }}>KEY MEMORY VERSES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${ROSE}` }}>
                  <div style={{ color: ROSE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 28:1</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Ah, the proud crown of the drunkards of Ephraim, and the fading flower of its glorious beauty, which is on the head of the rich valley of those overcome with wine!&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${GREEN}` }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 28:5-6</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;In that day the LORD of hosts will be a crown of glory, and a diadem of beauty, to the remnant of his people, and a spirit of justice to him who sits in judgment, and strength to those who turn back the battle at the gate.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${GOLD}` }}>
                  <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 28:16</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;Behold, I am laying in Zion a stone, a tested stone, a precious cornerstone, a sure foundation: whoever believes will not be in haste.&rdquo;" }}
                  />
                </div>
                <div style={{ background: BG, borderRadius: 10, padding: 18, borderLeft: `3px solid ${PURPLE}` }}>
                  <div style={{ color: PURPLE, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Isaiah 28:29</div>
                  <p style={{ color: TEXT, fontSize: 15, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: "&ldquo;This also comes from the LORD of hosts; he is wonderful in counsel and excellent in wisdom.&rdquo;" }}
                  />
                </div>
              </div>
            </div>

            {/* Chapter structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 14 }}>STRUCTURE OF THE CHAPTER</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { ref: "vv. 1-4", title: "Woe to the Drunkards of Ephraim", color: ROSE, summary: "The proud crown of Ephraim -- a fading flower like a fig before summer -- is trampled underfoot" },
                  { ref: "vv. 5-6", title: "The LORD as Crown of Glory", color: GREEN, summary: "In that day the LORD of hosts himself becomes the crown of glory and diadem of beauty to the remnant" },
                  { ref: "vv. 7-13", title: "Priest and Prophet Stagger -- Line upon Line", color: GOLD, summary: "The leaders of Judah also reel with wine; God will speak through strange lips; precept upon precept is judgment, not instruction" },
                  { ref: "vv. 14-22", title: "Covenant with Death Annulled -- The Cornerstone", color: PURPLE, summary: "The scoffers have made a covenant with death; God lays the precious cornerstone in Zion; the scornful covenant will not stand" },
                  { ref: "vv. 23-29", title: "The Parable of the Farmer", color: TEAL, summary: "God&rsquo;s instructing wisdom governs the farmer&rsquo;s work -- he plants, threshes, and harvests in season; this also comes from the LORD of hosts" },
                ].map((s) => (
                  <div key={s.ref} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ minWidth: 72, color: s.color, fontWeight: 800, fontSize: 13, paddingTop: 1 }}>{s.ref}</div>
                    <div>
                      <div style={{ color: s.color, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{s.title}</div>
                      <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: s.summary }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Testament connection */}
            <div style={{ background: `${BLUE}10`, border: `1px solid ${BLUE}30`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ color: BLUE, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>NEW TESTAMENT FULFILLMENT</div>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Isaiah 28:16 and Jesus Christ</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 28:16 is one of the most explicitly quoted Old Testament texts in the New Testament&rsquo;s presentation of Jesus. Paul cites it in Romans 9:33 as fulfilled in Christ: &ldquo;As it is written, &lsquo;Behold, I am laying in Zion a stone of stumbling, and a rock of offense; and whoever believes in him will not be put to shame.&rsquo;&rdquo; Peter does the same in 1 Peter 2:6, applying the cornerstone directly to Jesus: &ldquo;For it stands in Scripture: &lsquo;Behold, I am laying in Zion a stone, a cornerstone chosen and precious, and whoever believes in him will not be put to shame.&rsquo;&rdquo;" }}
              />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Both apostles read Isaiah&rsquo;s cornerstone as the fulfillment of Israel&rsquo;s hope in a person &mdash; not a program or a political strategy but the God-man Jesus, the tested stone whom God himself lays as the sure foundation of Zion. The promise that &ldquo;whoever believes will not be in haste&rdquo; becomes, in the New Testament, &ldquo;whoever believes in him will not be put to shame.&rdquo; The one who trusts the cornerstone does not panic, does not scramble, does not fall. The foundation holds." }}
              />
            </div>

            {/* Context of the woe oracles */}
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}30`, borderRadius: 14, padding: 24 }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>THE STRANGE WORK OF GOD</div>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "One of the most arresting phrases in Isaiah 28 is verse 21: God will do his work &mdash; &ldquo;his strange work&rdquo; &mdash; and perform his task &mdash; &ldquo;his foreign task.&rdquo; The judgment that falls on his own people through the Assyrian invasion is &ldquo;strange&rdquo; and &ldquo;foreign&rdquo; to God because his essential character is mercy and salvation. Judgment is the alien work of a God whose deepest desire is to bless. This theological note prepares us to understand both God&rsquo;s wrath and God&rsquo;s redemption rightly: the cornerstone he lays in Zion is the expression of his proper, characteristic work; the overwhelming scourge that falls on those who make covenants with death is the strange, alien work that sin makes necessary. The two belong together; neither can be understood without the other." }}
              />
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Key Themes in Isaiah 28</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 28 moves through four interlocking theological themes: the destructive power of pride and spiritual self-indulgence among leaders, the surprising grace of God who becomes himself the crown of glory to the remnant, the precious tested cornerstone as the only sure foundation, and the instructing wisdom of God expressed in the ordinary rhythms of farming and life." }}
              />
            </div>

            {[
              {
                color: ROSE,
                title: "The Crown of Pride -- Spiritual Self-Indulgence in Leadership",
                icon: "PRIDE AND ITS RUIN",
                body1: "The chapter opens with a striking visual metaphor: the leaders of Ephraim wear a crown of pride, but it is already a &ldquo;fading flower.&rdquo; The language is that of a garland worn at a banquet &mdash; beautiful but perishable, glorious for a season, destined to wither and be trampled. The drunkards of Ephraim have mistaken their prosperity for permanence. The rich valley of their territory was indeed glorious &mdash; the hill country of Samaria was celebrated for its fertility and beauty. But beauty without moral grounding becomes intoxicating in the worst sense.",
                body2: "The sin Isaiah names is not merely literal drunkenness, though that is part of it. It is the deeper intoxication of power, comfort, and self-sufficiency that causes leaders to stagger in their judgments and to reel in their prophetic vision (v.7). Priest and prophet reel together. The very people responsible for mediating between God and his people are themselves undone by excess and self-indulgence. The woe is therefore not only a political judgment on Ephraim but a warning to every generation of spiritual leaders who confuse their position of influence for a personal crown rather than a servant responsibility.",
              },
              {
                color: GREEN,
                title: "The LORD as Crown of Glory to the Remnant",
                icon: "GRACE TO THE REMNANT",
                body1: "Against the fading crown of the drunkards, Isaiah sets a stunning reversal in verses 5 and 6: &ldquo;In that day the LORD of hosts will be a crown of glory, and a diadem of beauty, to the remnant of his people.&rdquo; The contrast is total. The crown of the drunkards is beautiful but perishable, worn by the proud but destined to be trampled. The crown of glory that is the LORD himself is given not to the prominent and powerful but to &ldquo;the remnant.&rdquo;",
                body2: "The remnant theology is one of Isaiah&rsquo;s most important contributions to the prophetic tradition. The remnant is not defined by ethnic ancestry or political standing but by trust in the LORD and fidelity to his covenant. The remnant will experience something the proud majority never can: the LORD himself as their crown, their diadem, their justice, and their strength. The very thing Ephraim sought through alliances and self-assertion &mdash; security, beauty, justice, and victory in battle &mdash; is given freely and permanently to those who turn from pride to dependence on God. This is the grace that follows the woe.",
              },
              {
                color: GOLD,
                title: "Line upon Line -- The Judgment of Unintelligibility",
                icon: "WORD REFUSED, WORD GIVEN IN JUDGMENT",
                body1: "Verses 9-13 contain one of the most misunderstood passages in the book. The &ldquo;line upon line, precept upon precept&rdquo; formula has often been taken as a description of proper Bible study &mdash; careful, incremental, building truth on truth. But in its original context, it is a judgment, not a pedagogy. The scoffers mock Isaiah&rsquo;s teaching as childish repetition: &ldquo;To whom will he teach knowledge, and to whom will he explain the message? Those who are weaned from milk, those taken from the breast? For it is precept upon precept, line upon line, here a little, there a little.&rdquo; They are mocking the prophet&rsquo;s style as elementary and tedious.",
                body2: "God&rsquo;s response is devastating: since they refused his clear and restful word, he will speak to them in a language they cannot understand &mdash; through &ldquo;men of strange lips&rdquo; (the Assyrians). The very form they mocked will be the form of their judgment: the incomprehensible babble of a foreign conqueror. What could have been rest and refreshment (v.12: &ldquo;This is rest; give rest to the weary; and this is repose&rdquo;) becomes instead the disorienting noise of invasion. The refusal of God&rsquo;s word does not leave a vacuum; it produces a different, harsher word &mdash; the word of judgment spoken in a foreign tongue.",
              },
              {
                color: PURPLE,
                title: "The Covenant with Death Annulled",
                icon: "FALSE SECURITY EXPOSED",
                body1: "The leaders of Jerusalem have made what Isaiah calls &ldquo;a covenant with death&rdquo; and an &ldquo;agreement with Sheol.&rdquo; This is almost certainly a reference to the Egyptian alliance that Hezekiah&rsquo;s administration was pursuing &mdash; the political strategy of buying protection from the Assyrian threat through dependence on Egypt. Isaiah sees through the political strategy to its theological character: it is a covenant with the powers of death rather than a covenant with the living God.",
                body2: "The leaders believe their alliance will mean that &ldquo;when the overwhelming scourge passes through it will not come to us.&rdquo; They have made falsehood their refuge and lies their hiding place. God&rsquo;s response is to announce the annulment of the covenant: &ldquo;your covenant with death will be annulled, and your agreement with Sheol will not stand.&rdquo; Every human attempt to purchase security from the power of death apart from God will ultimately fail. Death does not honor contracts made with those who refuse to honor God. The only covenant that stands against death is the one anchored in the precious cornerstone &mdash; the sure foundation that the living God himself lays in Zion.",
              },
              {
                color: TEAL,
                title: "The Precious Tested Cornerstone",
                icon: "CHRIST THE SURE FOUNDATION",
                body1: "Isaiah 28:16 is the theological heart of the chapter and one of the most important verses in all of prophetic literature: &ldquo;Behold, I am laying in Zion a stone, a tested stone, a precious cornerstone, a sure foundation: whoever believes will not be in haste.&rdquo; The cornerstone in ancient building was the stone that set the angle and alignment of the entire structure; every other stone was measured against it. To lay such a stone in Zion was to announce the establishment of an indestructible foundation for God&rsquo;s dwelling with his people.",
                body2: "The four descriptions of the stone are precise and cumulative. It is &ldquo;tested&rdquo; &mdash; proven, tried, verified. It is &ldquo;precious&rdquo; &mdash; valuable, chosen, of great worth. It is a &ldquo;cornerstone&rdquo; &mdash; the foundational, angle-setting stone of the whole structure. It is a &ldquo;sure foundation&rdquo; &mdash; established, immovable, reliable. And the promise to those who build on it is this: they will &ldquo;not be in haste&rdquo; &mdash; they will not panic, not scramble, not be put to shame when the storm comes. Paul and Peter both read this as fulfilled in Jesus Christ (Romans 9:33; 1 Peter 2:6). The tested stone is the one who went through the ultimate test &mdash; death itself &mdash; and proved the indestructibility of the divine life. He is the sure foundation because no storm has moved him.",
              },
              {
                color: BLUE,
                title: "The Parable of the Farmer -- God&rsquo;s Instructing Wisdom",
                icon: "WISDOM IN ORDINARY WORK",
                body1: "The final section of Isaiah 28 is one of the most unexpected turns in all of prophetic literature. After the crushing words about Ephraim&rsquo;s pride, Jerusalem&rsquo;s covenant with death, and God&rsquo;s strange judgment, the prophet closes with a question: &ldquo;Does a farmer continually plow? Does he continually open and harrow his ground?&rdquo; The answer is of course not. The farmer plows at the right time, plants different crops in their appropriate places, threshes with different implements depending on what he has harvested &mdash; dill is not threshed with a threshing sledge; cummin is beaten with a rod. The farmer uses varieties of grain and plants them in their proper portions.",
                body2: "The theological point is profound: the farmer knows all this not because he invented it but because &ldquo;his God instructs him and teaches him.&rdquo; The ordinary wisdom that governs successful farming &mdash; knowing when to plow, what to plant where, how to thresh different crops &mdash; is itself a gift of divine instruction. God teaches through the creation. His wisdom is not restricted to the prophetic oracle or the cultic ceremony; it is embedded in the grain and the soil and the seasons. The same God whose strange work is the overwhelming scourge of judgment is also the teacher who instructs the farmer in the art of harvest. His wisdom governs both the extraordinary disruptions of history and the ordinary rhythms of daily work.",
              },
            ].map((theme, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${theme.color}30`, borderRadius: 14, padding: 26, marginBottom: 16 }}>
                <div style={{ color: theme.color, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 8 }}>{theme.icon}</div>
                <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 19, margin: "0 0 14px" }}>{theme.title}</h3>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: theme.body1 }}
                />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body2 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Verse by Verse: Isaiah 28</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "A passage-by-passage study of Isaiah 28, tracing key words, theological movements, historical background, and the chapter&rsquo;s profound connections to the rest of Scripture and to the New Testament." }}
              />
            </div>

            {[
              {
                ref: "Verses 1-4",
                color: ROSE,
                heading: "Woe to the Proud Crown of the Drunkards of Ephraim",
                verses: [
                  {
                    v: "vv.1-2",
                    text: "\"Ah, the proud crown of the drunkards of Ephraim, and the fading flower of its glorious beauty, which is on the head of the rich valley of those overcome with wine! Behold, the LORD has one who is mighty and strong; like a storm of hail, a destroying tempest, like a storm of mighty, overflowing waters, he casts down to the earth with his hand.\"",
                    note: "The &ldquo;proud crown&rdquo; is a garland worn at a symposium or drinking party &mdash; a flower wreath that signals festivity and celebration. The city of Samaria, capital of Ephraim, sat on a hill surrounded by the fertile valleys of the region, like a garland on a head. But it is already &ldquo;fading&rdquo; &mdash; the beauty is temporary, the glory is perishable. Against this fading garland, the LORD sends his own representative: a figure of devastating, storm-like power. The Assyrian army under Tiglath-Pileser III and later Sargon II would indeed come like a storm of hail. The proud crown would be trampled."
                  },
                  {
                    v: "vv.3-4",
                    text: "\"The proud crown of the drunkards of Ephraim will be trodden underfoot; and the fading flower of its glorious beauty, which is on the head of the rich valley, will be like a first-ripe fig before the summer: when someone sees it, he swallows it as soon as it is in his hand.\"",
                    note: "The repetition of &ldquo;proud crown&rdquo; and &ldquo;fading flower&rdquo; from verse 1 signals that Isaiah is constructing a literary frame. The fig simile in verse 4 is precisely observed: a ripe fig in spring, before the main summer harvest, was a rare and coveted delicacy. When you see it, you eat it immediately &mdash; it does not wait. The Assyrian conquest of Samaria (722 BC) was swift and complete. The city fell in three years of siege and was not merely defeated but depopulated &mdash; its people carried into exile."
                  },
                ],
              },
              {
                ref: "Verses 5-6",
                color: GREEN,
                heading: "The LORD of Hosts as Crown of Glory to the Remnant",
                verses: [
                  {
                    v: "vv.5-6",
                    text: "\"In that day the LORD of hosts will be a crown of glory, and a diadem of beauty, to the remnant of his people, and a spirit of justice to him who sits in judgment, and strength to those who turn back the battle at the gate.\"",
                    note: "These two verses are among the most grace-saturated in the entire chapter. Everything that the drunkards of Ephraim tried to be for themselves &mdash; glorious, beautiful, powerful &mdash; will be given by God himself to the remnant. The LORD becomes the crown, not just the giver of crowns. His title here is &ldquo;LORD of hosts&rdquo; &mdash; the God of armies, the commander of heaven&rsquo;s forces. The specific gifts he gives to the remnant are precisely the gifts that Ephraim&rsquo;s drunken leaders failed to supply: justice in the courts and strength in battle. Where human leadership corrupted by excess fails, God himself steps in as leader and provider."
                  },
                ],
              },
              {
                ref: "Verses 7-13",
                color: GOLD,
                heading: "Priest and Prophet Stagger -- Line upon Line as Judgment",
                verses: [
                  {
                    v: "vv.7-8",
                    text: "\"These also reel with wine and stagger with strong drink; the priest and the prophet reel with strong drink, they are swallowed by wine, they stagger with strong drink, they reel in vision, they stumble in giving judgment. For all tables are full of filthy vomit, with no space remaining.\"",
                    note: "Isaiah now turns from Ephraim to the spiritual leaders of Judah &mdash; the very people who should be pointing away from Ephraim&rsquo;s example. &ldquo;These also&rdquo; is devastating: the same indictment that fell on the northern kingdom now falls on Judah&rsquo;s priests and prophets. The repetition in verses 7-8 (&ldquo;reel&rdquo; and &ldquo;stagger&rdquo; appear multiple times) mimics the lurching movement of the drunk. These are not metaphors for theological confusion; they are indictments of literal intoxication that has produced spiritual incapacity. The banquet tables covered in vomit are the emblem of a worship system turned to self-indulgence."
                  },
                  {
                    v: "vv.9-10",
                    text: "\"To whom will he teach knowledge, and to whom will he explain the message? Those who are weaned from milk, those taken from the breast? For it is precept upon precept, precept upon precept, line upon line, line upon line, here a little, there a little.\"",
                    note: "Verses 9 and 10 record the scoffers&rsquo; mockery of Isaiah himself. They quote his teaching style back at him with contempt: he treats them like infants newly weaned, repeating elementary syllables over and over. The Hebrew of verse 10 is phonetically childish &mdash; tzav la-tzav, tzav la-tzav, qav la-qav, qav la-qav &mdash; like the repetitive syllables taught to small children. The leaders despise what they perceive as the simplicity and repetitiveness of Isaiah&rsquo;s prophetic word. They want sophisticated political analysis, not elementary moral repetition."
                  },
                  {
                    v: "vv.11-13",
                    text: "\"For by people of strange lips and with a foreign tongue the LORD will speak to this people, to whom he has said, &lsquo;This is rest; give rest to the weary; and this is repose&rsquo; -- yet they would not hear. And the word of the LORD will be to them precept upon precept, precept upon precept, line upon line, line upon line, here a little, there a little, that they may go, and fall backward, and be broken, and snared, and taken.\"",
                    note: "The judgment perfectly fits the crime. They mocked God&rsquo;s word as childish repetition; now God will speak to them in a language they cannot understand at all &mdash; the Assyrian tongue. What they received as rest and repose (verse 12 quotes what God had actually been saying: &ldquo;This is rest; give rest to the weary&rdquo;) they rejected. Now the same &ldquo;line upon line&rdquo; formula they mocked will be the description of their judgment: they will fall backward, be broken, snared, and taken. Paul cites verse 11 in 1 Corinthians 14:21 as background for his discussion of tongues: the gift of tongues, like the Assyrian speech, can be a sign of judgment to unbelievers rather than a sign of blessing."
                  },
                ],
              },
              {
                ref: "Verses 14-22",
                color: PURPLE,
                heading: "The Covenant with Death and the Precious Cornerstone",
                verses: [
                  {
                    v: "vv.14-15",
                    text: "\"Therefore hear the word of the LORD, you scoffers, who rule this people in Jerusalem! Because you have said, &lsquo;We have made a covenant with death, and with Sheol we have an agreement, when the overwhelming scourge passes through it will not come to us, for we have made lies our refuge, and in falsehood we have taken shelter&rsquo;.\"",
                    note: "Isaiah now addresses the political leadership of Jerusalem directly as &ldquo;scoffers.&rdquo; The &ldquo;covenant with death&rdquo; is most likely the Egyptian alliance &mdash; Egypt being associated with death in the biblical imagination as the place of bondage, and the alliance being characterized as the purchase of protection from the Assyrian &ldquo;scourge&rdquo; (shote &mdash; a whip or lash). The leaders believe their diplomatic cleverness has insulated them. Isaiah strips away the pretension: what they call strategic refuge is &ldquo;lies&rdquo; and &ldquo;falsehood.&rdquo; There is a terrible irony in &ldquo;a covenant with death&rdquo; &mdash; those who seek to escape death by allying with its power are precisely those who will be consumed by it."
                  },
                  {
                    v: "v.16",
                    text: "\"Therefore thus says the Lord GOD: &lsquo;Behold, I am laying in Zion a stone, a tested stone, a precious cornerstone, a sure foundation: whoever believes will not be in haste.&rsquo;\"",
                    note: "The great promise. The &ldquo;therefore&rdquo; is adversative: over against the covenant with death, God announces his own building project. He does not merely counter the Egyptian alliance with a better political strategy; he announces a different kind of foundation entirely. The four adjectives for the stone are theologically loaded: &ldquo;tested&rdquo; (bochan &mdash; proven through testing); &ldquo;precious&rdquo; (yaqar &mdash; rare, valuable, of great worth); &ldquo;cornerstone&rdquo; (pinnat &mdash; the corner-stone that determines the angle and alignment of all that is built from it); &ldquo;sure foundation&rdquo; (musad musad &mdash; a foundation that is founded, established, set). Paul cites this verse in Romans 9:33 combined with Isaiah 8:14, and Peter cites it in 1 Peter 2:6 as referring explicitly to Jesus Christ."
                  },
                  {
                    v: "vv.17-22",
                    text: "\"And I will make justice the line, and righteousness the plumb line; and hail will sweep away the refuge of lies, and waters will overwhelm the shelter. Then your covenant with death will be annulled, and your agreement with Sheol will not stand; when the overwhelming scourge passes through, you will be beaten down by it.\"",
                    note: "The building metaphors continue. The tools of good construction &mdash; the measuring line (qav) and the plumb line (mishqelet) &mdash; are here justice and righteousness. Against the shoddy construction of the covenant with death, God builds with the only materials that last. The &ldquo;hail&rdquo; and &ldquo;waters&rdquo; that overthrow the refuge of lies recall the images of the Assyrian storm in verse 2. Verse 21 identifies this judgment as God&rsquo;s &ldquo;strange work&rdquo; and &ldquo;foreign task&rdquo; &mdash; alien to his nature because his essential character is salvation and mercy, not destruction. The warning of verse 22 is urgent: do not scoff, lest your bonds be made stronger. The destruction is already determined by the Lord GOD of hosts upon the whole land."
                  },
                ],
              },
              {
                ref: "Verses 23-29",
                color: TEAL,
                heading: "The Parable of the Farmer and God&rsquo;s Instructing Wisdom",
                verses: [
                  {
                    v: "vv.23-26",
                    text: "\"Give ear, and hear my voice; give attention, and hear my speech. Does he who plows for sowing plow continually? Does he continually open and harrow his ground? When he has leveled its surface, does he not scatter dill, sow cummin, and put in wheat in rows and barley in its proper place, and emmer as the border? For he is rightly instructed; his God teaches him.\"",
                    note: "The opening &ldquo;Give ear, and hear my voice&rdquo; signals a shift in mode: from oracle to parable. The rhetorical questions about farming assume that the listener knows the answer: of course a farmer does not plow indefinitely. He plows, then plants; he works in seasons. The detail about different crops planted in different ways (dill scattered, cummin sown, wheat in rows, barley and emmer at the edge) reflects genuine agricultural observation &mdash; each crop has its appropriate planting method. The crucial theological claim comes in verse 26: the farmer knows this &ldquo;because his God instructs him.&rdquo; The practical wisdom of good farming is itself a form of divine revelation."
                  },
                  {
                    v: "vv.27-29",
                    text: "\"Dill is not threshed with a threshing sledge, nor is a cart wheel rolled over cummin, but dill is beaten out with a stick, and cummin with a rod. Does one crush grain for bread? No, he does not thresh it forever; when he drives his cart wheel over it with his horses, he does not crush it. This also comes from the LORD of hosts; he is wonderful in counsel and excellent in wisdom.\"",
                    note: "The parable extends to the threshing floor: different crops require different threshing methods. Delicate spices like dill and cummin require a gentle rod, not a crushing sledge. Even grain for bread &mdash; threshed with a cart wheel &mdash; is not crushed to a paste; the threshing is sufficient but not excessive. The theological application is left implicit but unmistakable: God&rsquo;s dealings with his people are like the farmer&rsquo;s dealings with his crops. His discipline is appropriate to what he is working with. His judgment is calibrated, not indiscriminate. And it all &mdash; &ldquo;this also&rdquo; &mdash; comes from the LORD of hosts, who is &ldquo;wonderful in counsel and excellent in wisdom.&rdquo; The God who sends the Assyrian storm is the same God who teaches the farmer to use a rod rather than a sledge on the cummin."
                  },
                ],
              },
            ].map((section, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${section.color}30`, borderRadius: 14, padding: 26, marginBottom: 20 }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ color: section.color, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 6 }}>{section.ref}</div>
                  <h3 style={{ color: section.color, fontWeight: 800, fontSize: 20, margin: 0 }}>{section.heading}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {section.verses.map((verse, j) => (
                    <div key={j} style={{ background: BG, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: section.color, fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{verse.v}</div>
                      <p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 10px", borderLeft: `2px solid ${section.color}50`, paddingLeft: 12 }}
                        dangerouslySetInnerHTML={{ __html: verse.text }}
                      />
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: verse.note }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 8px" }}>Living Isaiah 28 Today</h2>
              <p style={{ color: MUTED, fontSize: 15, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 28 speaks with remarkable precision to our moment. Its warnings about pride and self-indulgence in spiritual leadership, its exposure of the strategies we use to purchase security apart from God, its announcement of the only sure foundation, and its vision of divine wisdom governing ordinary life &mdash; all of these address the deepest conditions of the Christian life." }}
              />
            </div>

            {[
              {
                color: ROSE,
                number: "01",
                title: "Guard Against the Intoxication of Spiritual Pride",
                verses: "Isaiah 28:1-8",
                body1: "The drunkards of Ephraim and the reeling priests and prophets of Judah were not destroyed by obvious vices alone. They were destroyed by a subtler intoxication: the belief that their position, their prosperity, and their privilege guaranteed their permanence. The crown of pride is not necessarily a crown of arrogance; it may simply be the comfortable assumption that the glorious present will continue indefinitely &mdash; that the fading flower will not fade, that the rich valley will always be rich.",
                body2: "This intoxication is available to every person in spiritual leadership and to every church community that has known seasons of blessing. The antidote is not to deny the blessing but to refuse to locate your security in it. Isaiah contrasts the fading garland of Ephraim&rsquo;s pride with the LORD himself as crown of glory to the remnant. The remnant does not wear a garland; they are crowned by the presence of God. The difference between the two is exactly the difference between a glory you possess and a glory that possesses you &mdash; between a pride that you wear and a God who wears you.",
                practice: "Ask honestly: where in your spiritual life have you begun to mistake the gifts of God for guarantees? Where is comfort producing complacency? Where is past blessing replacing present dependence? Bring these to God in specific, honest confession. Ask him to be your crown rather than your crown being the evidence of his blessing on you.",
              },
              {
                color: GREEN,
                number: "02",
                title: "Receive the Gifts Only God Can Give the Remnant",
                verses: "Isaiah 28:5-6",
                body1: "Verses 5 and 6 describe the gifts the LORD gives to the remnant that the proud majority cannot access: a crown of glory, a diadem of beauty, a spirit of justice, and strength in battle. These are precisely the gifts that the drunken leaders failed to provide their people. They had crowns but not glory; they had position but not justice; they had armies but not strength in the battle that mattered. The remnant receives what the powerful could not supply because the remnant has given up on supplying it themselves.",
                body2: "The practical meaning of this for Christian life is substantial. There are certain gifts &mdash; real beauty, real justice, real strength, real wisdom &mdash; that are only available to those who have stopped trying to manufacture them through self-assertion and self-sufficiency. The person who genuinely prays &ldquo;I cannot be just by my own effort &mdash; I need God to give me a spirit of justice&rdquo; is in a far better position than the person who assumes justice is a skill to be developed independently. The remnant theology is a theology of active dependence: trusting God to be and to give what no human effort can produce.",
                practice: "Identify one specific quality that Isaiah names in verses 5-6 that you most need in this season: a crown of glory (a sense of being truly beloved and significant before God), a spirit of justice (clarity and fairness in judgment), or strength in battle (endurance in spiritual conflict). Pray specifically for that gift as something only God can give, not something you can manufacture.",
              },
              {
                color: GOLD,
                number: "03",
                title: "Receive God&rsquo;s Word as Rest, Not Repetition",
                verses: "Isaiah 28:9-13",
                body1: "The scoffers of Jerusalem rejected Isaiah&rsquo;s word as tedious repetition &mdash; elementary, childish, fit only for infants. But what God was actually offering them through the prophet was rest: &ldquo;This is rest; give rest to the weary; and this is repose&rdquo; (v.12). The word of God, faithfully preached and received, is not intellectual stimulation for the sophisticated; it is rest for the weary. Those who dismiss it as too simple miss precisely the gift it carries.",
                body2: "Every generation of Christians faces the temptation to treat God&rsquo;s word as too elementary &mdash; to want something more sophisticated, more dramatic, more immediately relevant than the patient reading and re-reading of Scripture. The judgment of verses 13-14 falls on exactly this attitude: those who refuse the rest offered in God&rsquo;s plain word will fall backward, be broken, snared, and taken. The alternatives to God&rsquo;s word are not superior options; they are sophisticated forms of the covenant with death. Only the tested word of the tested cornerstone holds in the storm.",
                practice: "Examine your relationship with Scripture. Is there a sense in which you have been treating it as too elementary &mdash; preferring podcasts, conferences, or social media analysis over the patient daily reading of the text? Commit this week to one hour of unhurried reading in a single book of the Bible &mdash; not for information, but for the rest that God promises to give through his word to those who receive it.",
              },
              {
                color: PURPLE,
                number: "04",
                title: "Build on the Cornerstone, Not on Covenants with Death",
                verses: "Isaiah 28:14-18",
                body1: "The covenant with death is any strategy for securing your life, your future, or your community by aligning with the powers that ultimately threaten it. In Isaiah&rsquo;s day it was the Egyptian alliance. In our day it may be financial security, social approval, political alignment, or institutional reputation. The common thread is this: we trust in something other than God to protect us from the thing we most fear. We make &ldquo;lies our refuge&rdquo; and &ldquo;in falsehood we take shelter.&rdquo; The lies are not always conscious; often they are the quiet assumptions that have accumulated without examination.",
                body2: "Against every covenant with death, Isaiah 28:16 announces a better foundation: the tested, precious, sure cornerstone that God himself lays in Zion. Jesus is this cornerstone (Romans 9:33; 1 Peter 2:6). He has been tested by the ultimate threat &mdash; death itself &mdash; and has proved indestructible. Those who build their lives on him will not be put to shame when the overwhelming scourge passes through. The question is not whether storms come; it is whether your foundation will hold when they do. Every covenant with death will be annulled; only the cornerstone endures.",
                practice: "Identify one specific area of your life where you have made a &ldquo;covenant with death&rdquo; &mdash; where you are relying on something other than God for security, identity, or protection. Name it specifically. Then bring it to the cornerstone in prayer: confess the false refuge, release the false covenant, and ask God to rebuild that area of your life on the only sure foundation.",
              },
              {
                color: TEAL,
                number: "05",
                title: "Find God&rsquo;s Wisdom in Ordinary Work",
                verses: "Isaiah 28:23-29",
                body1: "The parable of the farmer is a gift to all who wonder whether God is present in the unglamorous routines of daily work. The farmer plows, plants, threshes, and harvests &mdash; not because he invented these practices but because &ldquo;his God instructs him.&rdquo; The wisdom to know when to plow and when to plant, which crop goes where, how to thresh without crushing what is precious &mdash; all of this is a form of divine teaching, embedded in the creation and received by those who work attentively within it.",
                body2: "The theological implication is that no work done faithfully and attentively in alignment with the grain of creation is beneath God&rsquo;s wisdom or outside God&rsquo;s instruction. The farmer who cultivates well is not just a skilled technician; he is a student of God&rsquo;s wisdom, reading the lesson that God has written into the soil and the seed. The same is true for the engineer, the teacher, the parent, the nurse, the tradesperson. Every domain of faithful work has its own form of the &ldquo;dill and the cummin&rdquo; question &mdash; the question of what this particular task requires, done with this particular care, in this particular season. And the one who asks that question attentively is being instructed by God.",
                practice: "This week, approach your ordinary work as a student of divine wisdom. Ask of your specific work: what does this task actually require? What is the equivalent of &ldquo;dill beaten with a rod rather than a threshing sledge&rdquo; in what I am doing? Where am I being too heavy-handed? Where am I being too casual? Bring these questions to God and to the work itself, and listen for what the work and the creation teach you.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}30`, borderRadius: 14, padding: 26, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${item.color}18`, border: `2px solid ${item.color}50`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{item.number}</div>
                  <div>
                    <div style={{ color: item.color, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 4 }}>{item.verses}</div>
                    <h3 style={{ color: item.color, fontWeight: 800, fontSize: 18, margin: 0 }}>{item.title}</h3>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 12px" }}
                  dangerouslySetInnerHTML={{ __html: item.body1 }}
                />
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}
                  dangerouslySetInnerHTML={{ __html: item.body2 }}
                />
                <div style={{ background: `${item.color}10`, border: `1px solid ${item.color}25`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 12, letterSpacing: "0.07em", marginBottom: 6 }}>PRACTICE</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.practice }}
                  />
                </div>
              </div>
            ))}

            {/* Closing summary */}
            <div style={{ background: `${GREEN}12`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 26, marginBottom: 20 }}>
              <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>SUMMARY</div>
              <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>Isaiah 28 as a Word for Our Moment</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 28 was written for a generation of leaders who had mistaken their position for permanence, their prosperity for security, and their political cleverness for wisdom. They had rejected the rest that God&rsquo;s plain word offered and had chosen instead the sophisticated option of the covenant with death. But at the center of this devastating chapter, the LORD announces his own building project: a tested, precious, sure cornerstone that no storm can dislodge and no covenant with death can outlast. That cornerstone is Jesus Christ, and those who build on him will not be put to shame. This is Isaiah 28&rsquo;s enduring word to every generation that lives in the gap between the fading flowers of human achievement and the sure foundation of God&rsquo;s promise." }}
              />
            </div>
          </div>
        )}

        {/* Videos section -- always visible below tabs */}
        <div style={{ marginTop: 48, marginBottom: 60 }}>
          <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: 16, marginBottom: 28 }}>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, margin: "0 0 6px" }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Video teachings on Isaiah 28 &mdash; the cornerstone, the covenant with death, and the parable of the farmer." }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0, lineHeight: 1.5 }}>Isaiah 28 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div style={{ background: `linear-gradient(135deg, ${GREEN}18 0%, ${PURPLE}12 100%)`, border: `1px solid ${GREEN}30`, borderRadius: 16, padding: 36, marginBottom: 60, textAlign: "center" }}>
          <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.08em", marginBottom: 12 }}>GO DEEPER</div>
          <h2 style={{ color: TEXT, fontWeight: 900, fontSize: 26, margin: "0 0 14px", lineHeight: 1.2 }}>Continue Your Study of Isaiah</h2>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 540, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 28 belongs to the great woe-oracle section of chapters 28&ndash;33. Study the surrounding chapters to understand the full theological arc from Ephraim&rsquo;s ruin to God&rsquo;s redemptive purposes." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {[
              { label: "Isaiah 27 Guide", href: "/isaiah-27-guide", color: ROSE },
              { label: "Isaiah 40 Guide", href: "/isaiah-40-guide", color: GOLD },
              { label: "Isaiah 53 Guide", href: "/isaiah-53-guide", color: TEAL },
              { label: "Full Isaiah Guide", href: "/christian-book-of-isaiah-guide", color: PURPLE },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ background: `${link.color}18`, border: `1px solid ${link.color}40`, borderRadius: 10, padding: "10px 20px", fontSize: 14, color: link.color, fontWeight: 700, textDecoration: "none", display: "inline-block" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
