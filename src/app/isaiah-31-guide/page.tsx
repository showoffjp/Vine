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
const ROSE = "#E11D48";

type Tab = "overview" | "themes" | "verse" | "application";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

export default function Isaiah31GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "krxcqH522uo", title: "Isaiah 31 - Woe to Those Who Go Down to Egypt" },
    { videoId: "nQWFzMvCfLE", title: "Trust in God, Not in Horses and Chariots" },
    { videoId: "ccNvwDPguNU", title: "The Lion and the Birds - Isaiah's Images of God" },
    { videoId: "j9phNEaPrv8", title: "Returning to the LORD - Isaiah 31 and the Call to Repentance" },
  ];

  const themes = [
    {
      color: ROSE,
      label: "Woe to Egypt-Trust",
      summary: "The oracle opens with a direct indictment of those who &ldquo;go down to Egypt for help&rdquo; rather than looking to the Holy One of Israel. Egypt represents the perennial human temptation to seek security in visible, countable power &mdash; horses, chariots, and the military strength of a great empire. Isaiah names this not merely as a strategic miscalculation but as a spiritual failure: it reveals where ultimate trust actually lies.",
    },
    {
      color: GOLD,
      label: "Egypt Is Man, Not God",
      summary: "Verse 3 delivers the decisive theological judgment: &ldquo;The Egyptians are man, and not God, and their horses are flesh, and not spirit.&rdquo; This is the pivot point of the whole oracle. The problem with trusting Egypt is not simply that Egypt is unreliable &mdash; it is that Egypt belongs to the category of &ldquo;man&rdquo; and &ldquo;flesh,&rdquo; while God belongs to the category of &ldquo;spirit.&rdquo; When the LORD stretches out his hand, both the helper and the one helped will fall together.",
    },
    {
      color: GREEN,
      label: "The LORD as Lion and Hovering Birds",
      summary: "In verses 4 and 5 Isaiah uses two vivid animal images to describe God&rsquo;s protective action. As a lion growls over its prey and is undeterred by the shepherds called to drive it away, so the LORD of hosts will come down to fight for Mount Zion. And like birds hovering protectively over a nest, the LORD of hosts will protect and deliver Jerusalem. The images are both fierce and tender &mdash; unstoppable power combined with maternal protectiveness.",
    },
    {
      color: PURPLE,
      label: "The Call to Return",
      summary: "Verse 6 interrupts the oracle with a direct appeal: &ldquo;Turn to him from whom people have deeply revolted, O children of Israel.&rdquo; The word &ldquo;deeply&rdquo; is significant &mdash; this is not a superficial drift but a thoroughgoing defection. Yet the call is urgent and open. The past depth of revolt does not close the door to return. This is the consistent prophetic pattern: judgment announced, but the door of repentance held open.",
    },
    {
      color: TEAL,
      label: "The Casting Away of Idols",
      summary: "In the eschatological vision of verses 7 through 9, the day of the LORD&rsquo;s deliverance is also the day of idol-abandonment: &ldquo;In that day everyone shall cast away his idols of silver and his idols of gold.&rdquo; The defeat of Assyria by &ldquo;a sword, not of man&rdquo; is paired with the people&rsquo;s voluntary rejection of their false gods. Deliverance and repentance belong together. The one who rescues is also the one to whom allegiance is now owed.",
    },
    {
      color: BLUE,
      label: "Assyria Defeated by a Sword Not of Man",
      summary: "The oracle closes with the announcement that Assyria &mdash; the very power that Jerusalem feared &mdash; will be destroyed not by human military strategy but by divine intervention. The sword that strikes Assyria&rsquo;s young men is &ldquo;not of man.&rdquo; This is deliberate: the same trust in military power that Isaiah condemns in Israel is precisely what will not save Assyria. God&rsquo;s power operates outside the calculus of armies and alliances.",
    },
  ];

  const versePassages = [
    {
      ref: "Isaiah 31:1-3",
      color: ROSE,
      title: "Woe to Those Who Go Down to Egypt",
      content: "&ldquo;Woe to those who go down to Egypt for help and rely on horses, who trust in chariots because they are many and in horsemen because they are very strong, but do not look to the Holy One of Israel or consult the LORD!&rdquo; (v.1). The oracle begins with a woe &mdash; a formal prophetic lament over someone who is already in mortal danger without knowing it. The specific sin is political: Jerusalem has sought military alliance with Egypt. But Isaiah frames it as religious failure: they &ldquo;do not look to the Holy One of Israel.&rdquo; Looking (sha&rsquo;ah) and consulting (darash) are the verbs of worship and prayer. To not look to God is to have your eyes fixed elsewhere. The devastating conclusion comes in verse 3: the Egyptians are &ldquo;man, and not God&rdquo; &mdash; flesh, not spirit. When God acts, both the weak and their strong ally fall together. The logic is inexorable: if you trust in something that belongs to the category of &ldquo;man,&rdquo; you will share in its collapse when God overthrows it.",
    },
    {
      ref: "Isaiah 31:4-5",
      color: GREEN,
      title: "The Lion and the Hovering Birds",
      content: "The tone shifts in verse 4. Where verses 1 through 3 pronounced woe on those who trusted Egypt, verses 4 and 5 announce what the LORD himself will do. The first image is startling: God is compared to a lion growling over its prey, unperturbed by the noise of the shepherds trying to drive it away. The LORD of hosts will &ldquo;come down to fight on Mount Zion and on its hill.&rdquo; This is divine sovereignty expressed as ferocious tenacity &mdash; God will not be deterred from protecting Jerusalem by any amount of human noise or opposition. The second image in verse 5 is equally striking: &ldquo;Like birds hovering, so the LORD of hosts will protect Jerusalem; he will protect and deliver it; he will spare and rescue it.&rdquo; The hovering bird may evoke the image of a mother bird over her nest (cf. Deuteronomy 32:11, where the same image describes God&rsquo;s care for Israel in the wilderness). Four verbs pile up in verse 5 &mdash; protect, deliver, spare, rescue &mdash; expressing the completeness and urgency of God&rsquo;s intention to save.",
    },
    {
      ref: "Isaiah 31:6",
      color: PURPLE,
      title: "Turn to Him",
      content: "A single verse stands at the center of the chapter: &ldquo;Turn to him from whom people have deeply revolted, O children of Israel.&rdquo; The Hebrew word for &ldquo;turn&rdquo; (shub) is the great word of prophetic repentance &mdash; it means to reverse direction, to return. What is striking here is the word &ldquo;deeply&rdquo; (he&rsquo;emiqu) &mdash; this revolt has gone deep. They have not merely drifted; they have thoroughly defected from the LORD. And yet the call comes: return. The depth of the revolt does not disqualify from return &mdash; if anything, it makes the call more urgent. This verse is the pastoral heart of the oracle. The political and military analysis of chapters 30 and 31 serves this single purpose: to create the conditions in which people recognize that they have gone the wrong way and to make turning back seem not only possible but urgent.",
    },
    {
      ref: "Isaiah 31:7-9",
      color: GOLD,
      title: "Idols Cast Away, Assyria Defeated",
      content: "The final movement of the chapter pictures the day when the LORD&rsquo;s deliverance will be complete. In verse 7, on &ldquo;that day&rdquo; &mdash; the eschatological day of the LORD&rsquo;s action &mdash; everyone will throw away their idols of silver and gold. The idols that they had made with their own hands and worshiped in defiance of the LORD will be abandoned. This is not depicted as loss but as liberation. Verse 8 announces the destruction of Assyria: &ldquo;Assyria shall fall by a sword, not of man; and a sword, not of man, shall devour him.&rdquo; The repetition is deliberate. The sword that destroys the great military empire is not held by any human warrior. This is entirely the LORD&rsquo;s doing. The young men of Assyria will be put to forced labor, their officers will flee in terror, and their rock will pass away. Verse 9 closes with the declaration: &ldquo;declares the LORD, whose fire is in Zion, and whose furnace is in Jerusalem.&rdquo; God&rsquo;s presence in Zion is both judgment and protection.",
    },
  ];

  const applications = [
    {
      color: ROSE,
      title: "The Idols We Trust Instead of God",
      body: "Every generation has its Egypt &mdash; the visible, countable power that seems more reliable than an invisible God. For ancient Judah it was horses and chariots. For us it might be financial reserves, political influence, medical technology, institutional reputation, or personal competence. Isaiah&rsquo;s word is not that these things are evil in themselves &mdash; horses are not sinful &mdash; but that trusting in them instead of God is a fundamental spiritual failure. The diagnostic question Isaiah forces is: what do you actually look to when you feel threatened? Where do you turn when the pressure comes? The answer reveals where your functional trust lies, regardless of your stated beliefs.",
    },
    {
      color: GOLD,
      title: "Egypt Is Man, Not God",
      body: "The logic of verse 3 is worth sitting with: the problem with trusting Egypt is that Egypt belongs to the category of &ldquo;man&rdquo; and &ldquo;flesh,&rdquo; while God belongs to the category of &ldquo;spirit.&rdquo; This is not a comparison of two roughly equal options where God is slightly better. It is a categorical difference. Everything in the category of &ldquo;man&rdquo; &mdash; including you and your resources and your plans &mdash; is finite, mortal, and subject to collapse. Only God belongs to the category of the eternal and indestructible. To trust in what is &ldquo;man&rdquo; is to build on sand. The question is not whether sand will hold &mdash; it is when it will shift.",
    },
    {
      color: GREEN,
      title: "God&rsquo;s Protection as Hovering Bird",
      body: "The image of God hovering protectively over Jerusalem like a bird over its nest (v.5) is one of the most tender in Isaiah. God is not a distant power who might be persuaded to intervene; he is the one who hovers, who watches, who is already present over those in his care. The four verbs of verse 5 &mdash; protect, deliver, spare, rescue &mdash; express a comprehensive and active protection. This is the God who can be trusted because he is already there. The Christian application is direct: the God who hovers over Jerusalem is the same God who sends his Spirit to dwell with his people (John 14:17), who neither sleeps nor slumbers in watching over those he loves (Psalm 121:4).",
    },
    {
      color: PURPLE,
      title: "Returning When We Have Drifted",
      body: "The call of verse 6 &mdash; &ldquo;Turn to him from whom people have deeply revolted&rdquo; &mdash; speaks directly to the experience of spiritual drift. The word &ldquo;deeply&rdquo; is important. This is not a slight cooling of devotion; it is a thoroughgoing defection. And yet the call comes. No depth of revolt puts a person beyond the reach of return. The same prophetic pattern appears throughout Scripture: the deeper the diagnosis, the more urgent the call. What is required is not the achievement of a certain level of worthiness before returning &mdash; it is simply turning. Shub: reverse direction. The direction you were walking has been the wrong one. Turn around. The door is open.",
    },
    {
      color: TEAL,
      title: "Casting Away the Idols",
      body: "Isaiah&rsquo;s vision of the day of the LORD includes the people voluntarily casting away their silver and gold idols (v.7). This is not merely an ancient practice with no contemporary relevance. An idol is anything that functions as a substitute for God &mdash; that occupies the place in your life that God alone should fill. It might be a relationship you have made ultimate, a career that has become your identity, a political cause that has become your salvation, a level of comfort that you guard more fiercely than your faith. The day of the LORD&rsquo;s deliverance is the day when these things can finally be released &mdash; not because they are all evil in themselves but because they were always too small to bear the weight of ultimacy.",
    },
    {
      color: BLUE,
      title: "The Sword Not of Man",
      body: "The defeat of Assyria by &ldquo;a sword, not of man&rdquo; (v.8) carries a profound message for those who feel outmatched. The thing you fear most &mdash; the empire, the diagnosis, the opposition, the circumstance that seems insurmountable &mdash; is not ultimately undone by your cleverness or strength. God operates outside the calculus of human military and strategic power. This is not an excuse for passivity; it is an invitation to a different kind of confidence. You do not have to be powerful enough to defeat the thing that threatens you. You have to trust the one who can destroy it with a sword not made by human hands.",
    },
  ];

  function toggleAccordion(i: number) {
    setOpenAccordion(prev => (prev === i ? null : i));
  }

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, #0e0e1e 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${ROSE}18`, border: `1px solid ${ROSE}40`, borderRadius: 8, padding: "4px 14px", marginBottom: 18 }}>
            <span style={{ color: ROSE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Bible Study Guide</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: TEXT }}>
            Isaiah 31
          </h1>
          <p style={{ fontSize: 18, color: MUTED, maxWidth: 600, margin: "0 auto 24px", lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: "A woe oracle against Egypt-trust, the ferocity of God&rsquo;s protection, and the urgent call to return to the LORD of hosts." }}
          />
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ background: `${GREEN}18`, border: `1px solid ${GREEN}40`, color: GREEN, borderRadius: 20, padding: "4px 14px", fontSize: 13, fontWeight: 600 }}>9 Verses</span>
            <span style={{ background: `${PURPLE}18`, border: `1px solid ${PURPLE}40`, color: PURPLE, borderRadius: 20, padding: "4px 14px", fontSize: 13, fontWeight: 600 }}>Woe Oracle</span>
            <span style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}40`, color: GOLD, borderRadius: 20, padding: "4px 14px", fontSize: 13, fontWeight: 600 }}>Major Prophets</span>
          </div>
        </div>
      </section>

      {/* Tab Bar */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px", display: "flex", gap: 0, overflowX: "auto" }}>
          {TABS.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === t.id ? `3px solid ${GREEN}` : "3px solid transparent",
                color: activeTab === t.id ? GREEN : MUTED,
                fontWeight: activeTab === t.id ? 700 : 500,
                fontSize: 14,
                padding: "16px 22px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 32, marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 16 }}>About This Chapter</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 31 is a short but concentrated woe oracle &mdash; only nine verses &mdash; directed against Jerusalem&rsquo;s pro-Egypt faction. Judah, facing the Assyrian threat under Sennacherib, had sought alliance with Egypt. Against this policy, Isaiah pronounces a devastating theological verdict: Egypt is &ldquo;man, not God&rdquo; and &ldquo;flesh, not spirit.&rdquo; Trusting in Egypt is not merely a strategic miscalculation; it is a failure of faith." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "The chapter pivots in verses 4 and 5 from woe to promise. Using two arresting images &mdash; a lion crouching over its prey and birds hovering protectively over a nest &mdash; Isaiah announces that the LORD himself will descend to fight for Jerusalem. The military alliance that Judah sought with Egypt is unnecessary; God is the only defense that matters." }}
              />
              <p style={{ color: TEXT, lineHeight: 1.85, fontSize: 15, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "Verse 6 delivers the pastoral heart of the chapter: a call to return to the LORD from whom the people have &ldquo;deeply revolted.&rdquo; The oracle closes with the eschatological vision of idols cast away and Assyria destroyed by &ldquo;a sword not of man&rdquo; &mdash; a deliberate irony that underscores the chapter&rsquo;s central message: human military power is no substitute for divine action." }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
              {[
                { label: "Author", value: "Isaiah son of Amoz", color: PURPLE },
                { label: "Period", value: "c. 735&ndash;700 BC", color: GOLD },
                { label: "Setting", value: "Jerusalem, Hezekiah&rsquo;s reign", color: TEAL },
                { label: "Historical Context", value: "Sennacherib&rsquo;s Assyrian threat", color: ROSE },
              ].map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{item.label}</div>
                  <div style={{ color: TEXT, fontWeight: 600, fontSize: 15 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Structure of the Chapter</h3>
              {[
                { ref: "vv. 1-3", label: "Woe Oracle Against Egypt-Trust", color: ROSE },
                { ref: "vv. 4-5", label: "The LORD Comes Down to Protect Jerusalem", color: GREEN },
                { ref: "v. 6", label: "Call to Return to the LORD", color: PURPLE },
                { ref: "vv. 7-9", label: "Idols Cast Away; Assyria Destroyed", color: GOLD },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ background: `${item.color}18`, border: `1px solid ${item.color}40`, borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, color: item.color, flexShrink: 0, marginTop: 2 }}>{item.ref}</div>
                  <div style={{ color: TEXT, fontSize: 14, fontWeight: 500, paddingTop: 4 }}>{item.label}</div>
                </div>
              ))}
            </div>

            <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>The Central Verse</h3>
              <blockquote style={{ margin: 0, padding: "16px 20px", borderLeft: `4px solid ${GREEN}`, background: `${GREEN}10`, borderRadius: "0 10px 10px 0" }}>
                <p style={{ color: TEXT, fontSize: 16, lineHeight: 1.75, margin: "0 0 10px", fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The Egyptians are man, and not God, and their horses are flesh, and not spirit. When the LORD stretches out his hand, the helper will stumble, and he who is helped will fall, and they will all perish together.&rdquo;" }}
                />
                <cite style={{ color: MUTED, fontSize: 13, fontStyle: "normal", fontWeight: 600 }}>Isaiah 31:3</cite>
              </blockquote>
            </div>
          </div>
        )}

        {/* KEY THEMES TAB */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Key Themes</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 31 concentrates several of Isaiah&rsquo;s recurring concerns into nine verses. Each theme below is developed more fully in the broader context of the book." }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {themes.map((theme, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${theme.color}30`, borderRadius: 14, overflow: "hidden" }}>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(i)}
                    style={{ width: "100%", background: "none", border: "none", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ color: theme.color, fontWeight: 700, fontSize: 16 }}>{theme.label}</span>
                    <span style={{ color: MUTED, fontSize: 20, fontWeight: 300, lineHeight: 1 }}>{openAccordion === i ? "-" : "+"}</span>
                  </button>
                  {openAccordion === i && (
                    <div style={{ padding: "0 24px 24px" }}>
                      <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: theme.summary }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginTop: 28 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Connections in Isaiah</h3>
              {[
                { ref: "Isaiah 30:1-7", note: "The companion oracle against Egypt-trust immediately preceding chapter 31, where Isaiah calls the help of Egypt &ldquo;worthless and empty&rdquo; (v.7)." },
                { ref: "Isaiah 37:36", note: "The fulfillment of the oracle: the angel of the LORD strikes down 185,000 Assyrian soldiers in a single night &mdash; the &ldquo;sword not of man&rdquo; in action." },
                { ref: "Isaiah 36-37", note: "The historical narrative of the Assyrian siege and Hezekiah&rsquo;s prayer, against which chapters 30-31 form the theological background." },
                { ref: "Isaiah 2:7-8", note: "Earlier in the book, Isaiah condemns the same sins: filling the land with silver and gold, horses and chariots, and idols of their own making." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: i < 3 ? `1px solid ${BORDER}` : "none" }}>
                  <div style={{ background: `${PURPLE}18`, color: PURPLE, padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700, flexShrink: 0, alignSelf: "flex-start", marginTop: 2 }}>{item.ref}</div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {activeTab === "verse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "A close reading of Isaiah 31 with attention to its language, imagery, and theological logic." }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {versePassages.map((passage, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${passage.color}30`, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ background: `${passage.color}10`, padding: "18px 24px", borderBottom: `1px solid ${passage.color}20`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 style={{ color: passage.color, fontWeight: 800, fontSize: 17, margin: 0 }}>{passage.title}</h3>
                    <span style={{ background: `${passage.color}20`, color: passage.color, borderRadius: 8, padding: "3px 12px", fontSize: 12, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{passage.ref}</span>
                  </div>
                  <div style={{ padding: "22px 24px" }}>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: passage.content }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: `${TEAL}08`, border: `1px solid ${TEAL}30`, borderRadius: 14, padding: 28, marginTop: 24 }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: 18, marginBottom: 16 }}>Hebrew Word Study</h3>
              {[
                { word: "sha'ah", def: "to look, to regard &mdash; the verb used in v.1 for consulting the LORD. To &ldquo;not look to the Holy One&rdquo; is to have one&rsquo;s eyes deliberately turned away from God toward a human alternative." },
                { word: "darash", def: "to seek, to inquire &mdash; the standard Hebrew word for seeking God in prayer and consultation. Its absence in v.1 signals that they are neither praying nor inquiring of God." },
                { word: "basar", def: "flesh &mdash; the category to which Egypt&rsquo;s horses belong (v.3). In Isaiah, &ldquo;flesh&rdquo; (basar) consistently denotes the finite, mortal, and perishable as opposed to the eternal and spiritual." },
                { word: "shub", def: "to turn, to return &mdash; the great word of prophetic repentance in v.6. Not merely regretting the past but actively reversing direction toward God." },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < 3 ? `1px solid ${BORDER}` : "none" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 6 }}>
                    <span style={{ color: TEAL, fontWeight: 700, fontSize: 15, fontStyle: "italic" }}>{item.word}</span>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: item.def }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 28 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Application</h2>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 31 confronts the perennial human temptation to trust in visible, countable power rather than the invisible God. The applications below draw out the chapter&rsquo;s theological logic for the contemporary reader." }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
              {applications.map((item, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${item.color}25`, borderRadius: 14, padding: 26 }}>
                  <h3 style={{ color: item.color, fontWeight: 800, fontSize: 17, marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.9, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: 18, marginBottom: 18 }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "What is your &ldquo;Egypt&rdquo; &mdash; the visible, countable resource or relationship you instinctively turn to when you feel threatened or uncertain?",
                  "Where in your life are you relying on something that belongs to the category of &ldquo;man and not God, flesh and not spirit&rdquo;?",
                  "What would it look like for you to &ldquo;look to the Holy One of Israel&rdquo; in a specific situation you are currently facing?",
                  "Is there an area of your life where you have &ldquo;deeply revolted&rdquo; from God &mdash; not merely drifted, but actively turned away? What would returning look like?",
                  "What are the idols of silver and gold in your life &mdash; the things you have invested with ultimate significance that you need to release?",
                  "How does the image of God hovering over Jerusalem like a protective bird (v.5) change the way you think about your current circumstances?",
                ].map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${PURPLE}20`, border: `1px solid ${PURPLE}40`, color: PURPLE, fontWeight: 700, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0, paddingTop: 4 }} dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}30`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>For Personal Prayer</h3>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 16 }}
                dangerouslySetInnerHTML={{ __html: "Isaiah 31 is one of the most diagnostic chapters in the Bible for identifying the sources of misplaced trust. Use it in prayer by reading it slowly, pausing after each verse, and asking God to show you the specific &ldquo;Egypt&rdquo; that you are trusting in this season of your life." }}
              />
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.85, marginBottom: 0 }}
                dangerouslySetInnerHTML={{ __html: "Pray verse 6 as a confession and commitment: &ldquo;LORD, I have deeply revolted from you in [specific area]. I am turning now. You are man and not God, flesh and not spirit [name the thing you have been trusting]. You alone are the Holy One of Israel. I look to you.&rdquo;" }}
              />
            </div>
          </div>
        )}

        {/* Videos Section - always visible below tabs */}
        <div style={{ marginTop: 48 }}>
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 40, marginBottom: 28 }}>
            <h2 style={{ color: GREEN, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Teaching Videos</h2>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: "Video teachings on Isaiah 31 and its surrounding context &mdash; exploring Egypt-trust, God&rsquo;s ferocious protection, and the call to return." }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 18px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>{item.title}</h4>
                  <p style={{ color: MUTED, fontSize: 13, margin: 0 }}>Isaiah 31 &mdash; The Vine Bible Study</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{ marginTop: 48, background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 32, textAlign: "center" }}>
          <h3 style={{ color: TEXT, fontWeight: 800, fontSize: 20, marginBottom: 10 }}>Continue Your Study</h3>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 31 is part of a longer sequence of oracles in Isaiah 28&ndash;33 often called the &ldquo;Book of Woes.&rdquo; Reading chapter 30 alongside chapter 31 deepens both." }}
          />
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ background: `${PURPLE}20`, color: PURPLE, borderRadius: 8, padding: "8px 18px", fontSize: 14, fontWeight: 700 }}>Isaiah 30 &mdash; Companion Oracle</span>
            <span style={{ background: `${GREEN}20`, color: GREEN, borderRadius: 8, padding: "8px 18px", fontSize: 14, fontWeight: 700 }}>Isaiah 36&ndash;37 &mdash; Historical Fulfillment</span>
          </div>
        </div>

      </div>
    </div>
  );
}
