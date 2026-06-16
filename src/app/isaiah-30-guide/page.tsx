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
const TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Isaiah30GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "8YqGqNVWFB8", title: "Isaiah 30 -- Woe to the Rebellious Children" },
    { videoId: "0JnCXBZNBVU", title: "Returning and Rest -- Isaiah 30:15" },
    { videoId: "Fc2nB6vXjqw", title: "The Lord Waits to Be Gracious -- Isaiah 30:18" },
    { videoId: "pE4bP1RQFUA", title: "Isaiah 30 -- Restoration and the Voice of God" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "key-themes", label: "Key Themes" },
    { id: "verse-by-verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0f0f22 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.08em", marginBottom: 20 }}>
            ISAIAH 30
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 18, color: TEXT }}>
            Woe to the Rebellious Children &mdash; and the God Who Waits to Be Gracious
          </h1>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75, maxWidth: 660, margin: "0 auto 28px" }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 30 is one of the great woe oracles of the Old Testament &mdash; a searing indictment of a people who plan without God and seek Egypt&rsquo;s shadow instead of the Lord&rsquo;s shelter. Yet at its center stands one of the most luminous promises in all of Scripture: &ldquo;In returning and rest you shall be saved; in quietness and in trust shall be your strength.&rdquo; And at its heart is the staggering verse 18: the LORD <em>waits</em> to be gracious to you." }}
          />
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: `${GREEN}15`, border: `1px solid ${GREEN}35`, borderRadius: 8, padding: "6px 16px", fontSize: 13, color: GREEN, fontWeight: 600 }}>Isaiah 30:1-33</div>
            <div style={{ background: `${PURPLE}15`, border: `1px solid ${PURPLE}35`, borderRadius: 8, padding: "6px 16px", fontSize: 13, color: PURPLE, fontWeight: 600 }}>Woe Oracle + Restoration</div>
            <div style={{ background: `${TEAL}15`, border: `1px solid ${TEAL}35`, borderRadius: 8, padding: "6px 16px", fontSize: 13, color: TEAL, fontWeight: 600 }}>8th Century BC</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", padding: "0 20px" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "16px 20px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${GOLD}` : "2px solid transparent",
                color: activeTab === tab.id ? GOLD : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 400,
                fontSize: 14,
                cursor: "pointer",
                transition: "color 0.15s",
                letterSpacing: "0.01em",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Context card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: 32, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 16, marginTop: 0 }}>
                Historical Context
              </h2>
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 16, marginTop: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 30 was written during the reign of King Hezekiah of Judah (circa 705&ndash;701 BC), during the rising threat of the Assyrian empire under Sennacherib. Judah faced an existential crisis: the Assyrian war machine was devouring nations. The political instinct of the court was to form an alliance with Egypt &mdash; the great military power to the south &mdash; hoping that Egypt&rsquo;s armies could check Assyria." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 16, marginTop: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah&rsquo;s oracles against this strategy (Isaiah 28&ndash;33) form a sustained prophetic argument: the Egyptian alliance is not just politically foolish, it is a theological defection. To run to Egypt for safety is to declare, in practice, that Egypt is more reliable than God. The question behind all of Isaiah 30 is not &ldquo;which policy is wiser?&rdquo; but &ldquo;who is your Lord?&rdquo;" }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginTop: 0, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter moves through three movements: (1) the indictment of rebellious planning (vv.1&ndash;17), (2) the promise of God&rsquo;s gracious waiting and future restoration (vv.18&ndash;26), and (3) the announcement of judgment on Assyria (vv.27&ndash;33). The heart of the chapter is the famous verse 15 and the luminous verse 18, which together create the chapter&rsquo;s theological center of gravity." }}
              />
            </div>

            {/* The Two Poles */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
              <div style={{ background: CARD, border: `1px solid ${ROSE}30`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: ROSE, fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", marginBottom: 14 }}>THE INDICTMENT</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, marginTop: 0, marginBottom: 12 }}>Seeking Egypt&rsquo;s Shadow</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, marginTop: 0, marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: "The people carry out plans but not God&rsquo;s plans, make alliances but not in the Spirit (v.1). They go to Egypt for strength and shelter &mdash; to Pharaoh&rsquo;s protection, to Egypt&rsquo;s shadow. Isaiah&rsquo;s verdict is devastating: &ldquo;Egypt&rsquo;s help is worthless and empty; therefore I have called her Rahab who sits still&rdquo; (v.7)." }}
                />
              </div>
              <div style={{ background: CARD, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 24 }}>
                <div style={{ color: GREEN, fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", marginBottom: 14 }}>THE PROMISE</div>
                <h3 style={{ color: TEXT, fontWeight: 700, fontSize: 17, marginTop: 0, marginBottom: 12 }}>God Waits to Be Gracious</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, marginTop: 0, marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: "Despite the rebellion, God waits to be gracious (v.18). He will not remain hidden; a Teacher will appear (v.20). The ears shall hear a word behind them: &ldquo;This is the way, walk in it&rdquo; (v.21). The era of restoration will come when idols are cast away and rain falls on the mountains." }}
                />
              </div>
            </div>

            {/* Key Verse callout */}
            <div style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}35`, borderRadius: 16, padding: 32, marginBottom: 28, textAlign: "center" }}>
              <div style={{ color: GOLD, fontWeight: 800, fontSize: 12, letterSpacing: "0.12em", marginBottom: 14 }}>ISAIAH 30:15</div>
              <blockquote style={{ margin: "0 0 12px", padding: 0, fontStyle: "italic", fontSize: "clamp(17px, 2.5vw, 21px)", color: TEXT, lineHeight: 1.7, fontWeight: 500 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;In returning and rest you shall be saved; in quietness and in trust shall be your strength.&rdquo;" }}
              />
              <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>Isaiah 30:15 (ESV)</p>
            </div>

            {/* V.18 callout */}
            <div style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}35`, borderRadius: 16, padding: 32, marginBottom: 28, textAlign: "center" }}>
              <div style={{ color: TEAL, fontWeight: 800, fontSize: 12, letterSpacing: "0.12em", marginBottom: 14 }}>ISAIAH 30:18</div>
              <blockquote style={{ margin: "0 0 12px", padding: 0, fontStyle: "italic", fontSize: "clamp(17px, 2.5vw, 21px)", color: TEXT, lineHeight: 1.7, fontWeight: 500 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Therefore the LORD <em>waits</em> to be gracious to you, and therefore he exalts himself to show mercy to you. For the LORD is a God of justice; blessed are all those who wait for him.&rdquo;" }}
              />
              <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>Isaiah 30:18 (ESV)</p>
            </div>

            {/* Structure overview */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: 20, marginTop: 0, marginBottom: 20 }}>Chapter Structure</h2>
              {[
                { ref: "vv. 1-5", label: "First Woe: Plans Without God", color: ROSE, desc: "Woe to the rebellious children who carry out a plan but not mine, who go down to Egypt without asking for my direction, to take refuge in Pharaoh's protection." },
                { ref: "vv. 6-7", label: "Oracle on the Beasts of the Negeb", color: GOLD, desc: "The oracle against those who carry their riches on donkey-back through dangerous desert to Egypt -- whose help is worthless and empty." },
                { ref: "vv. 8-11", label: "Write It on a Tablet", color: PURPLE, desc: "God commands Isaiah to inscribe the oracle permanently: a rebellious people who tell the prophets to speak smooth things and stop prophesying truth." },
                { ref: "vv. 12-17", label: "Consequence of Rejection", color: ROSE, desc: "Because they have rejected this word -- sudden ruin like a collapsing wall. Salvation lay in returning and rest; strength in quietness and trust -- but they refused." },
                { ref: "vv. 18-26", label: "God Waits to Be Gracious", color: GREEN, desc: "The LORD waits to be gracious. A Teacher will not hide. The guiding voice will come. Idols will be cast away. Rain will fall, streams will flow, light will multiply." },
                { ref: "vv. 27-33", label: "Judgment on Assyria", color: TEAL, desc: "The name of the LORD comes from afar, burning with anger. Topheth -- the place of burning -- has been prepared for the king of Assyria." },
              ].map((s) => (
                <div key={s.ref} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 18 }}>
                  <div style={{ background: `${s.color}15`, border: `1px solid ${s.color}35`, borderRadius: 8, padding: "4px 12px", fontSize: 12, fontWeight: 700, color: s.color, whiteSpace: "nowrap", marginTop: 2 }}>{s.ref}</div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.label}</div>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "key-themes" && (
          <div>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginTop: 0, marginBottom: 8 }}>Key Themes in Isaiah 30</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 30 holds together two theological movements: the seriousness of human rebellion and the breathtaking grace of a God who waits rather than abandons." }}
              />
            </div>

            {[
              {
                color: ROSE,
                title: "Rebellious Planning Without God",
                ref: "Isaiah 30:1-2",
                summary: "The sin Isaiah describes is not atheism but practical independence: they believe in God while acting as if God is unreliable.",
                body1: "Verse 1 names the precise nature of the sin: &ldquo;they carry out a plan, but not mine, and they make an alliance, but not of my Spirit.&rdquo; This is not the sin of the pagan who has never known God. This is the sin of the covenant people who know God but, under pressure, route around him. They act as if God is not practically available when things get serious.",
                body2: "The language of &ldquo;rebellious children&rdquo; (v.1, 9) is the language of the covenant. These are children who know their Father and still go to Pharaoh for protection. The tragedy is not ignorance but preference &mdash; Egypt seems more reliable in a crisis than the God who parted the Red Sea.",
              },
              {
                color: GOLD,
                title: "Egypt as Shadow and Shame",
                ref: "Isaiah 30:5-7",
                summary: "The oracle on Egypt is devastating: she is called Rahab who sits still -- a boast without bite, a noise without power.",
                body1: "The word translated &ldquo;shadow&rdquo; in verse 2 (&ldquo;to take refuge in Pharaoh&rsquo;s shadow&rdquo;) picks up the great theme of divine shelter in the Psalms &mdash; God as the shade at your right hand (Psalm 121:5). To seek Pharaoh&rsquo;s shadow is to transfer to an idol the trust that belongs to God alone.",
                body2: "Isaiah&rsquo;s nickname for Egypt &mdash; &ldquo;Rahab who sits still&rdquo; (v.7) &mdash; is deliberate irony. Rahab was the name of a mythological chaos monster, a symbol of great, threatening power. But this &ldquo;Rahab&rdquo; sits still, does nothing, delivers nothing. The thing you risked everything to secure is a decoration, not a defence.",
              },
              {
                color: PURPLE,
                title: "Refusing to Hear the Holy One",
                ref: "Isaiah 30:9-11",
                summary: "The deepest indictment in the chapter is not the Egyptian alliance but the demand that the prophets stop speaking truth.",
                body1: "Verses 10&ndash;11 describe a people who say to the seers, &ldquo;Do not see,&rdquo; and to the prophets, &ldquo;Do not prophesy to us what is right; speak to us smooth things, prophesy illusions.&rdquo; The problem is not that they have no access to God&rsquo;s word. The problem is that they have decided in advance not to receive it if it is uncomfortable.",
                body2: "The phrase &ldquo;let us hear no more about the Holy One of Israel&rdquo; (v.11) is the theological core of the rebellion. They want a religion without holiness &mdash; a God who blesses without confronting, who comforts without calling. This is the temptation of every generation: to curate a version of God that does not disrupt the plans already made.",
              },
              {
                color: GREEN,
                title: "Returning and Rest as the Path of Salvation",
                ref: "Isaiah 30:15",
                summary: "The famous verse 15 is both the most beautiful and the most painful verse in the chapter -- because the next line is: 'but you would not.'",
                body1: "In returning (shuvah) and rest (nachah) you shall be saved; in quietness (sheket) and in trust (bitachon) shall be your strength. This is a fourfold description of faith as a posture of the whole person: returning (turning back to God), resting (ceasing the frantic activity of self-rescue), quietness (silencing the noise of anxious planning), trust (committing to God&rsquo;s reliability).",
                body2: "The pathos of this verse is that it ends with Israel&rsquo;s refusal: &ldquo;But you would not.&rdquo; They preferred the noise and speed of chariot-races toward Egypt. Salvation was available in stillness; they chose motion. This is Isaiah&rsquo;s most concentrated statement of what faith looks like &mdash; and of how consistently it is refused.",
              },
              {
                color: TEAL,
                title: "The Lord Waits to Be Gracious",
                ref: "Isaiah 30:18",
                summary: "Verse 18 is the theological miracle of the chapter: after the entire indictment, God is not angry and withdrawing -- he is waiting.",
                body1: "The Hebrew verb translated &ldquo;waits&rdquo; (chakah) is a rich word. God waits the way a farmer waits for the harvest (James 5:7) &mdash; with anticipation, with patience, with readiness. He is not sulking after the rejection described in verses 1&ndash;17. He is positioned to show mercy the moment the people turn. His waiting is an act of grace, not of judgment.",
                body2: "The verse concludes with a beatitude: &ldquo;Blessed are all those who wait for him.&rdquo; The waiting is mutual. God waits to be gracious; the people are called to wait for God. The spiritual posture of waiting &mdash; trusting that God will act, refusing the shortcuts that Egypt represents &mdash; is the posture of blessedness.",
              },
              {
                color: GOLD,
                title: "The Guiding Voice and the Casting Away of Idols",
                ref: "Isaiah 30:20-22",
                summary: "The restoration era includes a promise of perpetual guidance: your ears shall hear a word behind you.",
                body1: "Verses 20&ndash;21 describe a future age of restored relationship: &ldquo;your Teacher will not hide himself anymore. Your eyes shall see your Teacher. And your ears shall hear a word behind you, saying, &lsquo;This is the way, walk in it.&rsquo;&rdquo; This is remarkable &mdash; the same people who told the prophets &ldquo;do not prophesy to us&rdquo; are now promised a Teacher who cannot be escaped.",
                body2: "Verse 22 describes the natural consequence of truly encountering God&rsquo;s presence: the idols will be defiled and cast away. The people will say to their silver-covered images and gold-plated idols, &ldquo;Be gone!&rdquo; They will throw them away like a menstrual cloth: &ldquo;Away with you!&rdquo; When the Teacher speaks and people truly hear, idols lose their power automatically.",
              },
            ].map((theme) => (
              <div key={theme.ref} style={{ background: CARD, border: `1px solid ${theme.color}25`, borderRadius: 16, padding: 28, marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                  <h3 style={{ color: theme.color, fontWeight: 800, fontSize: 19, margin: 0 }}>{theme.title}</h3>
                  <div style={{ background: `${theme.color}15`, border: `1px solid ${theme.color}35`, borderRadius: 8, padding: "3px 12px", fontSize: 12, fontWeight: 700, color: theme.color }}>{theme.ref}</div>
                </div>
                <p style={{ color: TEXT, fontWeight: 600, fontSize: 15, lineHeight: 1.7, marginBottom: 14, marginTop: 0, fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: theme.summary }}
                />
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, marginBottom: 12, marginTop: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body1 }}
                />
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, marginBottom: 0, marginTop: 0 }}
                  dangerouslySetInnerHTML={{ __html: theme.body2 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse-by-verse" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginTop: 0, marginBottom: 8 }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of Isaiah 30 moving through each section, with attention to the Hebrew, the historical context, and the theological weight of the text." }}
              />
            </div>

            {[
              {
                ref: "Isaiah 30:1-5",
                heading: "Woe to the Rebellious Children",
                color: ROSE,
                body: [
                  "The oracle opens with &ldquo;Woe!&rdquo; (hoy) &mdash; the funeral cry. Isaiah is not merely warning; he is mourning in advance. The children are called rebellious (sarar) &mdash; stubborn, persistently defiant, the same word used of the stubborn son in Deuteronomy 21:18. They are not strangers who do not know God but children who know and still rebel.",
                  "The double charge in verse 1 is sharp: they carry out a plan, but not mine; they make an alliance, but not of my Spirit. The failure is not that they planned or made alliances &mdash; planning and alliance-making are ordinary human activities. The failure is the omission: God was not consulted. They planned as if they had the information, the wisdom, and the power that only God has.",
                  "Verses 3&ndash;5 anticipate the result: Pharaoh&rsquo;s protection will become Judah&rsquo;s shame. Everyone who hoped in Egypt will be ashamed. The verb &ldquo;be ashamed&rdquo; (bosh) in the Old Testament almost always describes the experience of having trusted something that failed. Egypt will not be a foundation; it will be an embarrassment.",
                ],
              },
              {
                ref: "Isaiah 30:6-7",
                heading: "Oracle on the Beasts of the Negeb",
                color: GOLD,
                body: [
                  "This brief oracle describes the dangerous journey through the Negeb desert to Egypt with donkeys and camels loaded with treasure &mdash; tribute to secure Egypt&rsquo;s military alliance. The &ldquo;beasts of the Negeb&rdquo; are the wild and threatening creatures of the desert wilderness &mdash; lions, vipers, flying serpents.",
                  "The irony is fierce: they are passing through a land of danger and hardship, risking everything, carrying their wealth, to secure the help of a nation that God has already declared worthless. Egypt is called Rahab who sits still &mdash; a chaos monster who does nothing. The whole dangerous journey accomplishes nothing.",
                  "The theological point is simple but piercing: the lengths people will go to avoid depending on God. A dangerous desert journey with camels loaded with tribute is apparently preferable to the simplicity of asking the Lord. This is the human condition: elaborate, dangerous, expensive systems of self-rescue rather than the one thing needed.",
                ],
              },
              {
                ref: "Isaiah 30:8-11",
                heading: "Write It on a Tablet",
                color: PURPLE,
                body: [
                  "God commands Isaiah to inscribe this oracle &mdash; to write it on a tablet and engrave it in a book &mdash; so that it may serve as a witness for the time to come, &ldquo;forever and ever.&rdquo; The permanence of the written word is significant: what Isaiah is about to say is not for this moment only. It stands as a permanent indictment and a permanent invitation.",
                  "Verses 9&ndash;11 give the reason for the inscription: they are a rebellious people. And then the most devastating description: they say to the seers, &ldquo;Do not see,&rdquo; and to the prophets, &ldquo;Do not prophesy to us what is right; speak to us smooth things, prophesy illusions. Leave the way, turn aside from the path, let us hear no more about the Holy One of Israel.&rdquo;",
                  "This is the exact opposite of Isaiah&rsquo;s call in Isaiah 6, where he volunteered to speak. The people want the prophetic office without the prophetic word. They want spiritual authority to confirm their existing plans, not to challenge them. The phrase &ldquo;smooth things&rdquo; is a sharp contrast to the &ldquo;right things&rdquo; (mesharim &mdash; upright, straight) they refuse. They want pleasantness over truth.",
                ],
              },
              {
                ref: "Isaiah 30:12-17",
                heading: "Therefore Thus Says the Holy One of Israel",
                color: ROSE,
                body: [
                  "Verse 12 introduces the consequence with the judicial formula: &ldquo;Therefore thus says the Holy One of Israel.&rdquo; The rejection of God&rsquo;s word has consequences &mdash; not as arbitrary punishment but as the natural unfolding of the chosen path. They trusted in oppression and perverseness (the Egyptian alliance built on power rather than covenant); that is what will collapse.",
                  "The image in verses 13&ndash;14 is haunting: &ldquo;this iniquity shall be to you like a breach in a high wall, bulging out and about to collapse, whose breaking comes suddenly, in an instant; and its breaking is like that of a potter's vessel that is smashed so ruthlessly that among its fragments not a shard is found.&rdquo; The wall looks solid until the moment it doesn&rsquo;t. No piece remains useful.",
                  "And then comes the heartbreaking center of the whole chapter: verse 15 &mdash; &ldquo;In returning and rest you shall be saved; in quietness and in trust shall be your strength.&rdquo; This is not a hard command but an offered gift. The alternative to the wall-that-collapses was always available. And then the three most painful words in the oracle: &ldquo;But you would not.&rdquo; Verses 16&ndash;17 describe the consequence of preferring horses and chariots &mdash; exactly those things will be what defeats them.",
                ],
              },
              {
                ref: "Isaiah 30:18-26",
                heading: "The LORD Waits to Be Gracious",
                color: GREEN,
                body: [
                  "Verse 18 begins with &ldquo;therefore&rdquo; &mdash; a surprising pivot. The expected &ldquo;therefore&rdquo; after the indictment of verses 1&ndash;17 would be judgment. Instead it is grace: &ldquo;Therefore the LORD waits to be gracious to you, and therefore he exalts himself to show mercy to you. For the LORD is a God of justice; blessed are all those who wait for him.&rdquo;",
                  "The word &ldquo;waits&rdquo; (chakah) is the same word used in verse 18 of the people who wait for God. The waiting is mutual and simultaneous. God is not absent, not angry, not done. He is poised toward grace, inclined toward mercy, ready to show compassion the moment the people turn. The beatitude at the end of verse 18 (&ldquo;blessed are all those who wait for him&rdquo;) inverts the tragedy of verse 15: if they had only waited and rested, they would have found the God who was already waiting for them.",
                  "Verses 19&ndash;21 describe the coming era of restored relationship in terms of guidance: &ldquo;your Teacher will not hide himself anymore. Your eyes shall see your Teacher. And your ears shall hear a word behind you, saying, &lsquo;This is the way, walk in it,&rsquo; when you turn to the right or when you turn to the left.&rdquo; The voice of God as a guide on the path &mdash; specific, proximate, directional. This is not general religious feeling but the concrete guidance of a present Teacher.",
                  "Verses 22&ndash;26 expand the restoration picture: the idols will be cast away (the natural response to truly encountering the living God), rain will fall, seeds will be productive, streams of water will flow, the light of the moon will be as bright as the sun. The restoration is cosmic and ecological: a healed creation matching a healed relationship.",
                ],
              },
              {
                ref: "Isaiah 30:27-33",
                heading: "The Name of the LORD Comes from Afar",
                color: TEAL,
                body: [
                  "The final section turns from the restoration of Israel to the judgment of Assyria. The name of the LORD comes from afar &mdash; his anger is burning, his lips are full of indignation, his tongue is like a devouring fire. This is the theophany of the Divine Warrior, the God who acts in history to deliver his people by defeating their enemies.",
                  "Verses 29&ndash;30 describe the response of the delivered people: songs in the night, gladness of heart, going up with the flute to the mountain of the LORD. The judgment on Assyria becomes the occasion for Israel&rsquo;s festival. The rescue is not just political relief but theological vindication &mdash; the God who seemed absent or powerless is revealed as the one who controls the fate of empires.",
                  "Verse 33 closes with a sharp image: Topheth &mdash; the place in the Valley of Hinnom where the Assyrian armies will fall &mdash; has been prepared long ago, made ready for the king of Assyria. The breath of the LORD, like a stream of sulfur, will kindle it. The one before whom Judah was terrified has himself been appointed to a prepared destruction. The God who waits to be gracious also governs the nations.",
                ],
              },
            ].map((section) => (
              <div key={section.ref} style={{ background: CARD, border: `1px solid ${section.color}25`, borderRadius: 16, padding: 28, marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 19, margin: 0 }}>{section.heading}</h3>
                  <div style={{ background: `${section.color}15`, border: `1px solid ${section.color}35`, borderRadius: 8, padding: "4px 14px", fontSize: 13, fontWeight: 700, color: section.color }}>{section.ref}</div>
                </div>
                {section.body.map((para, idx) => (
                  <p key={idx} style={{ color: idx === 0 ? TEXT : MUTED, fontSize: 15, lineHeight: 1.85, marginTop: 0, marginBottom: idx < section.body.length - 1 ? 14 : 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 24, marginTop: 0, marginBottom: 8 }}>Application for Today</h2>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 30 is not an ancient political commentary. It is a mirror held up to the perennial human tendency to trust human systems rather than God, and a window into the character of a God who still waits to be gracious." }}
              />
            </div>

            {[
              {
                color: ROSE,
                icon: "I",
                title: "The Temptation to Trust Human Alliances Instead of God",
                ref: "Isaiah 30:1-3",
                body1: "The Egyptian alliance was not foolish by any ordinary political standard &mdash; Egypt was a military superpower, and Assyria was a genuine existential threat. The problem was not that the plan was irrational. The problem was that it bypassed God. They carried out a plan without consulting him, made an alliance without asking of his Spirit.",
                body2: "The contemporary equivalent is not always obvious. We rarely think of our strategic plans, financial portfolios, insurance policies, political alliances, or professional networks as &ldquo;going to Egypt.&rdquo; But the spiritual question Isaiah 30 forces on every reader is: when I face a genuine threat, where do I actually go? Who do I actually call? What do I actually trust? The test of real faith is not what we say in worship but what we do when things get serious.",
                body3: "The text does not say that Judah was wrong to care about Assyria or wrong to think about how to respond. It says they were wrong to plan without God &mdash; to route around him in the crisis. The discipline is not the elimination of strategy but the subordination of strategy to a genuine seeking of God&rsquo;s guidance: &ldquo;In all your ways acknowledge him, and he will make your paths straight&rdquo; (Proverbs 3:6).",
              },
              {
                color: GREEN,
                icon: "II",
                title: "The Power of Returning and Resting in God",
                ref: "Isaiah 30:15",
                body1: "Verse 15 is one of those verses that can split your life into before and after. &ldquo;In returning and rest you shall be saved; in quietness and in trust shall be your strength.&rdquo; What God is offering here is not weakness but a different kind of power &mdash; the power that comes from the human person properly positioned before God, resting in his sufficiency rather than straining under their own.",
                body2: "The four words &mdash; returning, rest, quietness, trust &mdash; are a programme of spiritual formation. Returning (shuvah) is repentance &mdash; turning away from Egypt and back to God. Rest (nachah) is the cessation of the frantic self-sufficient activity that Egypt represents. Quietness (sheket) is the silencing of the anxious internal noise. Trust (bitachon) is the settled confidence that God&rsquo;s word can be relied on. These are not passive states but active postures requiring genuine spiritual effort.",
                body3: "The terrible footnote is &ldquo;but you would not.&rdquo; This is the tragedy that Isaiah 30 refuses to resolve with a neat ending. God offered the most desirable thing &mdash; rest, salvation, strength, quiet &mdash; and it was refused because it required giving up the sense of control that the Egyptian alliance maintained. The question for every reader is: what is my &ldquo;Egypt&rdquo; that I prefer over the rest God offers?",
              },
              {
                color: TEAL,
                icon: "III",
                title: "The Beauty of Verse 18 -- The Lord Waits to Be Gracious",
                ref: "Isaiah 30:18",
                body1: "Verse 18 is one of the most theologically dense and emotionally arresting sentences in the Old Testament. After twenty consecutive verses of indictment &mdash; after describing a people who have rejected God&rsquo;s plans, sought Egypt&rsquo;s shadow, demanded smooth prophecy, and refused the offer of rest &mdash; God says: &ldquo;Therefore the LORD waits to be gracious to you.&rdquo;",
                body2: "The &ldquo;therefore&rdquo; is the miracle. By every logic of covenant consequence, the &ldquo;therefore&rdquo; after this catalogue should introduce judgment. Instead it introduces grace. The God of Isaiah 30 is not the God of score-keeping but the God of patient love &mdash; who watches the running-toward-Egypt and stays positioned toward the moment of return. He is not reluctant to forgive; he is waiting to forgive.",
                body3: "For the Christian reading this in the light of Jesus, verse 18 is almost too beautiful to contain. The God who waits to be gracious sent his Son precisely to those who had been running to their Egypts. The cross is the permanent enactment of this verse: God not counting our rebellion against us (2 Corinthians 5:19), waiting to be gracious, exalting himself to show mercy. If you have been running, the news from Isaiah 30:18 is that God is not further away than you left him. He is closer. He has been waiting.",
              },
              {
                color: PURPLE,
                icon: "IV",
                title: "Hearing God&rsquo;s Guiding Voice",
                ref: "Isaiah 30:20-21",
                body1: "The promise in verses 20&ndash;21 is extraordinary: &ldquo;your Teacher will not hide himself anymore. Your eyes shall see your Teacher. And your ears shall hear a word behind you, saying, &lsquo;This is the way, walk in it,&rsquo; when you turn to the right or when you turn to the left.&rdquo; The guidance is not general; it is specific, directional, proximate. Not just &ldquo;God is with you&rdquo; but &ldquo;go this way.&rdquo;",
                body2: "The image of the voice &ldquo;behind you&rdquo; is poignant. A shepherd walks behind the flock in the ancient Near Eastern tradition, guiding from the rear rather than the front. The voice comes when you are about to go wrong &mdash; when you are turning right or left &mdash; and redirects. This is the opposite of a God who announces the path in advance and then disappears. This is a God who stays proximate to the journey and corrects in real time.",
                body3: "The New Testament reads these verses christologically and pneumatologically. Jesus says &ldquo;I am the good shepherd&rdquo; (John 10:11) and &ldquo;my sheep hear my voice&rdquo; (John 10:27). The Spirit is poured out as the one who guides into all truth (John 16:13). Isaiah 30&rsquo;s promise of the proximate Teacher is fulfilled in the indwelling of the Holy Spirit &mdash; the voice behind you that says &ldquo;this is the way, walk in it&rdquo; in the concrete decisions of daily life.",
              },
            ].map((app) => (
              <div key={app.title} style={{ background: CARD, border: `1px solid ${app.color}25`, borderRadius: 16, padding: 28, marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${app.color}20`, border: `2px solid ${app.color}40`, display: "flex", alignItems: "center", justifyContent: "center", color: app.color, fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{app.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: app.color, fontWeight: 800, fontSize: 18, margin: "0 0 4px" }}
                      dangerouslySetInnerHTML={{ __html: app.title }}
                    />
                    <div style={{ color: MUTED, fontSize: 12, fontWeight: 600 }}>{app.ref}</div>
                  </div>
                </div>
                <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginTop: 0, marginBottom: 14 }}
                  dangerouslySetInnerHTML={{ __html: app.body1 }}
                />
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, marginTop: 0, marginBottom: 14 }}
                  dangerouslySetInnerHTML={{ __html: app.body2 }}
                />
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.85, marginTop: 0, marginBottom: 0 }}
                  dangerouslySetInnerHTML={{ __html: app.body3 }}
                />
              </div>
            ))}

            {/* Reflection questions */}
            <div style={{ background: `${GOLD}0A`, border: `1px solid ${GOLD}30`, borderRadius: 16, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, marginTop: 0, marginBottom: 18 }}>Reflection Questions</h3>
              {[
                "Where is your &ldquo;Egypt&rdquo; right now &mdash; the alliance, plan, or resource you are running to instead of God? What would it look like to bring that situation to God first?",
                "Isaiah 30:15 says salvation is in &ldquo;returning and rest.&rdquo; What would returning to God look like concretely in your current situation? What noise would need to stop?",
                "Verse 18 says God waits to be gracious. Do you believe this? What would change in your prayer life if you genuinely believed God was already positioned toward grace when you turned to him?",
                "The people said to the prophets, &ldquo;Speak smooth things to us.&rdquo; Where in your life are you seeking comfort that confirms your existing plans rather than genuine guidance that might challenge them?",
                "The promise of the guiding voice in verses 20&ndash;21 is that when you are about to go wrong, you will hear &ldquo;this is the way, walk in it.&rdquo; Have you had this experience? How do you cultivate the listening that makes this voice audible?",
              ].map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < 4 ? 16 : 0 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontWeight: 800, fontSize: 12, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                </div>
              ))}
            </div>

            {/* Prayer prompt */}
            <div style={{ background: `${GREEN}0A`, border: `1px solid ${GREEN}30`, borderRadius: 16, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginTop: 0, marginBottom: 14 }}>A Prayer from Isaiah 30</h3>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.9, marginTop: 0, marginBottom: 0, fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: "Lord, I confess the places where I have planned without you &mdash; where I have run to my Egypts rather than returning to you. You have spoken the way of returning and rest, and I have too often said &ldquo;but I would not.&rdquo; Forgive me for preferring the noise of my own strategies to the quietness of trust in you. I receive the staggering news of verse 18: that you wait to be gracious, that you exalt yourself to show mercy, that you are not further away than I left you but closer, waiting. I choose today to return and to rest. I ask to hear your voice behind me &mdash; &lsquo;this is the way, walk in it&rsquo; &mdash; in every turn and in every decision. I trust you. Amen." }}
              />
            </div>
          </div>
        )}

        {/* Videos section (always visible below tabs) */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ color: TEXT, fontWeight: 800, fontSize: 22, marginTop: 0, marginBottom: 8 }}>Teaching Videos</h2>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginTop: 0, marginBottom: 28 }}
            dangerouslySetInnerHTML={{ __html: "Video teachings on Isaiah 30 &mdash; exploring the woe oracle, the famous verse 15 on returning and rest, the beauty of verse 18, and the promise of God&rsquo;s guiding voice." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 20 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, marginTop: 0, marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, marginTop: 0, marginBottom: 0 }}>Isaiah 30 Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
