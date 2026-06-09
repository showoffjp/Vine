"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";
const ACCENT = TEAL;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "dayofthelord", label: "Day of the LORD" },
  { id: "seekgod", label: "Seek the LORD" },
  { id: "remnant", label: "The Humble Remnant" },
  { id: "zeph317", label: "Zephaniah 3:17" },
  { id: "restoration", label: "Restoration" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type ZephTab = "overview" | "dayofthelord" | "seekgod" | "remnant" | "zeph317" | "restoration" | "themes" | "journal" | "videos";

const DAYOFTHELORD_SECTIONS = [
  {
    color: RED,
    title: "The Great Day of the LORD — Zephaniah 1:14–16",
    body: "'The great day of the LORD is near, near and hastening fast; the sound of the day of the LORD is bitter; the mighty man cries aloud there. A day of wrath is that day, a day of distress and anguish, a day of ruin and devastation, a day of darkness and gloom, a day of clouds and thick darkness, a day of trumpet blast and battle cry against the fortified cities and against the lofty battlements.' This passage was the source for the medieval Latin hymn Dies Irae (Day of Wrath), which shaped centuries of Christian reflection on judgment and has been set to music by Verdi, Mozart, and others. Zephaniah's language is unsparing: near, bitter, wrath, distress, anguish, ruin, darkness.",
  },
  {
    color: GOLD,
    title: "Sweeping Everything Away — Zephaniah 1:2–3",
    body: "'I will utterly sweep away everything from the face of the earth, declares the LORD. I will sweep away man and beast; I will sweep away the birds of the heavens and the fish of the sea, and the rubble with the wicked. I will cut off mankind from the face of the earth, declares the LORD.' The opening verses echo creation in reverse: birds, fish, animals, humanity — the order of Genesis undone by the Day of the LORD. The covenant people who have gone after Baal (1:4), who dress in foreign attire (1:8), who fill their master's house with violence and fraud (1:9) face the complete reversal of the created order they have corrupted.",
  },
  {
    color: TEAL,
    title: "The Silent Idol — Zephaniah 1:12",
    body: "'At that time I will search Jerusalem with lamps, and I will punish the men who are complacent, who say in their hearts, The LORD will not do good, nor will he do ill.' The word translated 'complacent' is the same word used for wine that has thickened on its lees — settled, stagnant, neither fermenting nor flowing. The charge against this group is not flagrant idolatry but functional deism: they believe God does nothing, neither rewards nor punishes. They are indifferent. Zephaniah's word for them is the one Dante would have reserved for lukewarm: 'The LORD will not do good, nor will he do ill' is the creed of the complacent.",
  },
];

const SEEKGOD_SECTIONS = [
  {
    color: GREEN,
    title: "Seek the LORD — Zephaniah 2:3",
    body: "'Seek the LORD, all you humble of the land, who do his just commands; seek righteousness, seek humility; perhaps you may be hidden on the day of the anger of the LORD.' This is one of the key pastoral invitations in the Minor Prophets. Seek him — not just righteousness or humility as abstract qualities, but God himself. The humility in view is not self-deprecation but the anawim — the poor and lowly who know their total dependence on God. The 'perhaps' is theologically significant: it does not guarantee a comfortable outcome but holds open the possibility of shelter. The Day of the LORD is not inevitable doom for those who seek God.",
  },
  {
    color: TEAL,
    title: "Before the Day — The Urgency of Seeking",
    body: "'Before the decree takes effect — before the day passes away like chaff — before there comes upon you the burning anger of the LORD, before there comes upon you the day of the anger of the LORD, seek the LORD, all you humble of the land' (2:2–3). The repetition of 'before' is urgent: time is short. The decree is already drawn up; it has not yet taken effect. There is a window. The invitation of the prophets is always made in this window — before the consequences of unfaithfulness have fully arrived. The urgency is not scare-tactic but pastoral love.",
  },
];

const REMNANT_BODY = `Running through the Day of the LORD oracles in Zephaniah is a consistent thread: not everyone will be swept away. There will be a remnant — a people who are poor and humble and trust in the name of the LORD.

Chapter 3:11–13 describes this remnant with unusual specificity:

'On that day you shall not be put to shame because of the deeds by which you have rebelled against me; for then I will remove from your midst your proudly exultant ones, and you shall no longer be haughty in my holy mountain. But I will leave in your midst a people humble and lowly. They shall seek refuge in the name of the LORD, those who are left in Israel; they shall do no injustice and speak no lies, nor shall there be found in their mouth a deceitful tongue. For they shall graze and lie down, and none shall make them afraid.'

Three defining characteristics of the remnant:

1. **Humble and lowly** (anawim again). Not the prestigious, not the powerful, not the confidently religious. The ones who know they have nothing of their own to offer. The poor in spirit. The people who seek refuge rather than standing in their own strength.

2. **They seek refuge in the name of the LORD.** Not in political alliances (the nations Judah was courting in Zephaniah's time). Not in religious performance. In the name — in the character and person of God himself.

3. **No injustice, no lies, no deceit.** The moral simplicity of the remnant: they simply tell the truth and act fairly. The contrast with the proudly exultant ones who have been removed is total.

This vision of the remnant — small, humble, honest, trusting, unafraid — appears throughout the prophetic tradition (Isaiah 6:13, Micah 2:12, Jeremiah 23:3, Ezekiel 11:13) and is taken up in Jesus's Beatitudes (Matthew 5:3–10): blessed are the poor in spirit, the meek, the merciful, the pure in heart. The remnant of Zephaniah is the community of the Beatitudes.`;

const ZEPH317_BODY = `Zephaniah 3:17 is one of the most astonishing verses in the Bible — and one of the least known by comparison with its merit:

'The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.'

Four movements:

**1. The LORD your God is in your midst.** The first affirmation is about presence: God is not absent, not distant, not preoccupied with other matters. He is in the midst — inside the community, not watching from outside. The God who comes to judge (1:12, searching Jerusalem with lamps) is also the God who comes to inhabit.

**2. A mighty one who will save.** The word gibbor — warrior, mighty one — is combined with the act of salvation. This is the God who fights for his people, who defeats their enemies, who rescues the remnant. The same power that sweeps away the wicked in chapter 1 is turned toward saving the humble remnant in chapter 3.

**3. He will rejoice over you with gladness; he will quiet you by his love.** The word translated 'rejoice' (sus or gil) is exuberant, active joy — dancing, leaping, exulting. This is not God calmly approving of his people; it is God actively delighted in them. 'He will quiet you by his love' is the still center of the verse: the love of God as the ground of rest, the calming of anxiety, the stillness that comes when you know you are held. The Hebrew is striking: rests in his love, is silent over you in his love — as if even God falls silent before the depth of what he feels.

**4. He will exult over you with loud singing.** The same joy now expressed in sound — God singing over his people. The Creator who spoke creation into being sings over his redeemed. The image has no parallel in the ancient world: no other god in the ancient Near East is described as singing over his worshipers. The direction of this verse is completely reversed from what we expect: it is God who sings over us, not we who sing over God.

This verse has been used in worship songs, in healing prayers, in pastoral counseling with people who cannot believe anyone could love them. Its pastoral power is inexhaustible: for anyone who fears they are unloved, unseen, or too broken to be wanted — Zephaniah 3:17 is the answer.`;

const RESTORATION_SECTIONS = [
  {
    color: GREEN,
    title: "Bringing Home the Scattered — Zephaniah 3:19–20",
    body: "'Behold, at that time I will deal with all your oppressors. And I will save the lame and gather the outcast, and I will change their shame into praise and renown in all the earth. At that time I will bring you in, at the time when I gather you together; for I will make you renowned and praised among all the peoples of the earth, when I restore your fortunes before your eyes, says the LORD.' The final vision of Zephaniah is gathering — specifically, the gathering of the lame and the outcast, those who were most vulnerable and most forgotten. Their shame will become renown. The last will be first. This is consistent with the entire trajectory of the book: the humble and lowly are the ones God restores.",
  },
  {
    color: TEAL,
    title: "On That Day — The Hinge of History",
    body: "The phrase 'on that day' appears seven times in Zephaniah — more than in any similarly short book. It signals the turning point of history: the Day of the LORD when judgment is completed and restoration begins. The movement of the book is: universal sweep of judgment (ch 1) → invitation to seek God (2:1–3) → oracles against nations (2:4–15) → indictment of Jerusalem (3:1–7) → the remnant and the Day of the LORD as restoration (3:8–20). The structure insists: the same Day that brings judgment brings renewal. The two are not alternatives but phases.",
  },
  {
    color: GOLD,
    title: "The Singing God — What This Means for Worship",
    body: "Zephaniah 3:17 reverses the direction of worship. Usually we think of worship as something we bring to God: our songs, our prayers, our offerings. Zephaniah says the worship actually begins from God's side — God rejoices over his people, God sings over his people. Our worship is a response to a prior worship: we sing because we are already being sung over. This does not diminish human worship; it transforms it. We sing in response to the One who first sang over us. Christian worship is participation in a divine joy that was already happening.",
  },
];

const THEMES = [
  {
    color: TEAL,
    title: "Zephaniah 3:17 — God's Love Song",
    body: "No other verse in the Bible describes God singing over his people with joy. This verse is the pastoral heart of the book: God is not reluctantly tolerating his people. He is actively, exuberantly delighted in them — rejoicing, quieting, exulting. It is a direct address to everyone who wonders whether God really loves them.",
  },
  {
    color: RED,
    title: "Complacency as Sin",
    body: "Zephaniah 1:12 targets those who say 'God will neither do good nor do ill.' Functional deism — the belief that God is real but irrelevant — is treated as seriously as active idolatry. The stagnant wine metaphor names a spiritual condition that many Christians recognize: going through religious motions without expecting anything from God.",
  },
  {
    color: GOLD,
    title: "The Anawim — The Humble and Poor",
    body: "Zephaniah's 'humble and lowly' (3:12) are the anawim — those who have no pretense, no self-sufficiency, no claim but their dependence on God. They are the recipients of God's care throughout the prophets and the Psalms, and they are the people Jesus calls blessed in the Beatitudes. Zephaniah stands in this tradition: God is near to the broken who seek him.",
  },
  {
    color: GREEN,
    title: "Seek Righteousness, Seek Humility",
    body: "Zephaniah 2:3's call is not primarily ethical but relational: seek the LORD. Righteousness and humility are the posture of seeking, not the goal. They describe what it looks like to approach God rather than what you are trying to achieve. The invitation is to the person, not to the project.",
  },
  {
    color: BLUE,
    title: "The Day of the LORD — Judgment and Renewal Together",
    body: "Zephaniah resists the temptation to make the Day of the LORD only one thing: only judgment or only blessing. It is both — for different people and ultimately as phases of the same divine action. The same day that sweeps away the proud opens the space for the humble remnant to flourish.",
  },
  {
    color: PURPLE,
    title: "Gathering the Lame and the Outcast",
    body: "The final image of Zephaniah is not a triumphant army but the gathering of the lame and scattered — those who were left behind, those who seemed most disqualified. Their shame becomes renown. This is the consistent surprise of the prophetic vision: God's restoration is specifically for those the world has written off.",
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "Zephaniah 3:17 says God will quiet you by his love. What anxiety or restlessness in you most needs that kind of quieting right now?",
  "Zephaniah 1:12 targets people who say 'God will neither do good nor do ill.' Where might you have slipped into functional deism — going through religious motions without expecting God to act?",
  "The humble remnant of Zephaniah 3:12 trusts in the name of the LORD rather than in their own resources. What are you trusting in that is not God?",
  "Zephaniah 2:3 says 'seek righteousness, seek humility' — the posture of approaching God. What would it look like to seek God more actively this week?",
  "Zephaniah 3:17 says God will exult over you with loud singing. If you actually believed that about yourself, what would change?",
];

export default function ZephaniahGuidePage() {
  const [tab, setTab] = usePersistedState<ZephTab>("vine_zephaniah_tab", "overview");
  const [openDay, setOpenDay] = useState<string | null>(null);
  const [openSeek, setOpenSeek] = useState<string | null>(null);
  const [openRestoration, setOpenRestoration] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_zephaniah_journal");
      if (raw) setEntries(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim() && !prayer.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      verse: verse.trim(),
      reflection: reflection.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_zephaniah_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_zephaniah_journal", JSON.stringify(updated));
  }, [entries]);

  const inputStyle = {
    width: "100%", background: BG, border: `1px solid ${BORDER}`,
    borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 15,
    outline: "none", boxSizing: "border-box" as const,
  };
  const labelStyle = { display: "block", color: MUTED, fontSize: 13, marginBottom: 6, fontWeight: 600 };

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

          {/* Hero */}
          <div style={{ background: `linear-gradient(135deg, #001515 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
                <span style={{ color: MUTED, fontSize: 14 }}>3 Chapters · ~630 BC</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Book of Zephaniah
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
                Cosmic judgment and then — astonishingly — God singing over his people: <em style={{ color: TEXT }}>"He will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing."</em>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as ZephTab)}
                  style={{ padding: "16px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", color: tab === t.id ? ACCENT : MUTED, borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Zephaniah moves from the most sweeping language of judgment in the Minor Prophets (creation undone, the great Day of Wrath) to one of the most breathtakingly tender descriptions of God's love anywhere in Scripture. The journey is the point.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Author", value: "Zephaniah" },
                    { label: "Date", value: "~630 BC" },
                    { label: "Context", value: "Reign of Josiah; before the reforms" },
                    { label: "Chapters", value: "3" },
                    { label: "Key Theme", value: "Judgment on pride, love for the humble" },
                    { label: "Key Verse", value: "Zephaniah 3:17" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>The Climax — Zephaniah 3:17</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: 8 }}>
                      "The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Zephaniah 3:17 (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Zeph 1:2–3", desc: "I will sweep away everything — creation reversed" },
                      { ref: "Zeph 1:12", desc: "The complacent who say God does nothing — stagnant wine on its lees" },
                      { ref: "Zeph 1:14–16", desc: "The great Day of the LORD — the source of Dies Irae" },
                      { ref: "Zeph 2:2–3", desc: "Seek the LORD before the day passes away — invitation before judgment" },
                      { ref: "Zeph 3:11–13", desc: "The humble remnant — poor and lowly, trusting in the LORD's name" },
                      { ref: "Zeph 3:17", desc: "God in your midst — rejoicing over you, quieting by love, singing" },
                      { ref: "Zeph 3:19–20", desc: "Gathering the lame and outcast — shame into renown" },
                    ].map(p => (
                      <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 80, paddingTop: 2 }}>{p.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{p.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* DAY OF THE LORD */}
            {tab === "dayofthelord" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Day of the LORD</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Zephaniah announces the Day of the LORD in language that influenced medieval Christian imagery of final judgment. The sweeping scope and the specific charges against complacency set up the book's extraordinary pivot to love.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {DAYOFTHELORD_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenDay(openDay === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openDay === s.title ? "−" : "+"}</span>
                      </button>
                      {openDay === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEEK GOD */}
            {tab === "seekgod" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Seek the LORD</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Between the announcement of judgment (chapter 1) and the oracles against nations (2:4–3:7), Zephaniah pauses to extend an urgent invitation: seek the LORD before the Day arrives. The invitation is addressed specifically to the humble.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {SEEKGOD_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenSeek(openSeek === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openSeek === s.title ? "−" : "+"}</span>
                      </button>
                      {openSeek === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* REMNANT */}
            {tab === "remnant" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Humble Remnant</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>{"Zephaniah's vision of the remnant is one of the most precise portraits of the people God is building in any prophetic book — humble, honest, trusting, unafraid. Jesus's Beatitudes read like a NT commentary on this passage."}</p>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                  {REMNANT_BODY.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, marginBottom: i < REMNANT_BODY.split('\n\n').length - 1 ? 16 : 0 }}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* ZEPH 3:17 */}
            {tab === "zeph317" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Zephaniah 3:17 — God Singing Over His People</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>This verse has no parallel in ancient Near Eastern literature. No other god is described as singing over his worshipers with joy. Its four movements are each worth sitting with separately.</p>
                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginBottom: 28 }}>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.9, marginBottom: 8 }}>
                      "The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Zephaniah 3:17 (ESV)</cite>
                  </blockquote>
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                  {ZEPH317_BODY.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, marginBottom: i < ZEPH317_BODY.split('\n\n').length - 1 ? 16 : 0 }}>{para}</p>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
                  {[
                    { phrase: "In your midst", color: TEAL, note: "God is not watching from a distance. He is inside the community — present, inhabiting, not absent." },
                    { phrase: "Rejoice with gladness", color: GREEN, note: "Active, exuberant delight. God is not reluctantly tolerating his people. He is overjoyed by them." },
                    { phrase: "Quiet by his love", color: BLUE, note: "The still center: God's love as the ground of rest. Anxiety stilled. The Hebrew suggests God falls silent before the depth of what he feels." },
                    { phrase: "Exult with singing", color: GOLD, note: "God sings over his people. The direction is reversed: we don't sing over God; God sings over us. Our worship is response to a prior divine joy." },
                  ].map(item => (
                    <div key={item.phrase} style={{ background: CARD, border: `1px solid ${item.color}33`, borderRadius: 12, padding: "18px 20px" }}>
                      <div style={{ color: item.color, fontWeight: 700, fontSize: 14, marginBottom: 8, fontStyle: "italic" }}>{item.phrase}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RESTORATION */}
            {tab === "restoration" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Restoration</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>The final chapter of Zephaniah moves from Zeph 3:17 to the gathering of the scattered, the transformation of shame into renown, and the final word of the book: God restoring his people before their eyes.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {RESTORATION_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenRestoration(openRestoration === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openRestoration === s.title ? "−" : "+"}</span>
                      </button>
                      {openRestoration === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 24 }}>Major Themes</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
                  {THEMES.map(t => (
                    <div key={t.title} style={{ background: CARD, border: `1px solid ${t.color}33`, borderRadius: 12, padding: "20px 22px" }}>
                      <button onClick={() => setOpenTheme(openTheme === t.title ? null : t.title)}
                        style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <h3 style={{ color: t.color, fontWeight: 700, margin: 0, fontSize: 15 }}>{t.title}</h3>
                          <span style={{ color: MUTED, fontSize: 18 }}>{openTheme === t.title ? "−" : "+"}</span>
                        </div>
                      </button>
                      {openTheme === t.title && (
                        <p style={{ color: MUTED, lineHeight: 1.7, fontSize: 14, marginTop: 10, marginBottom: 0 }}>{t.body}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* JOURNAL */}
            {tab === "journal" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Study Journal</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Zephaniah offers some of the most powerful pastoral content in the Minor Prophets. Use this space to receive and respond to what it says about God and you.</p>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Reflection Prompts</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {PROMPTS.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                        <span style={{ color: ACCENT, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 20 }}>New Entry</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Verse or passage</label>
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Zephaniah 3:17" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Reflection</label>
                      <textarea value={reflection} onChange={e => setReflection(e.target.value)} placeholder="What does this passage stir in you?" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <div>
                      <label style={labelStyle}>Prayer</label>
                      <textarea value={prayer} onChange={e => setPrayer(e.target.value)} placeholder="Respond to God in prayer..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <button onClick={saveEntry}
                      style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px", fontWeight: 700, cursor: "pointer", fontSize: 15, alignSelf: "flex-start" }}>
                      {saved ? "Saved!" : "Save Entry"}
                    </button>
                  </div>
                </div>
                {entries.length > 0 && (
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Your Entries</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {entries.map(e => (
                        <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                            <div>
                              <div style={{ fontWeight: 700, color: ACCENT, fontSize: 14 }}>{e.verse || "No verse"}</div>
                              <div style={{ color: MUTED, fontSize: 12 }}>{e.date}</div>
                            </div>
                            <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>
                          </div>
                          {e.reflection && <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}><strong>Reflection:</strong> {e.reflection}</p>}
                          {e.prayer && <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}><strong>Prayer:</strong> {e.prayer}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VIDEOS */}
            {tab === "videos" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Video Teaching</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Explore Zephaniah's vision of the Day of the LORD, the humble remnant, and the extraordinary declaration of God's love in 3:17.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                  <div>
                    <VideoEmbed videoId="oFCfKTxJMZs" title="The Book of Zephaniah" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Book of Zephaniah — BibleProject overview</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="HPGShSFOLnE" title="Malachi (companion prophet)" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Malachi — the last prophet, also addressing cynicism and weariness</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="feBP_oLtN5E" title="The Prophets" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Understanding the OT prophetic tradition</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="g_igCcVS6gY" title="Shalom — Word Study" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Shalom — the peace and wholeness God brings to his people</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
