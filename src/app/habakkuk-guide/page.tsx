"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";
const ACCENT = PURPLE;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "complaint", label: "The Complaint" },
  { id: "answer", label: "God's Answer" },
  { id: "faith", label: "The Righteous Live by Faith" },
  { id: "prayer", label: "Habakkuk 3" },
  { id: "figtree", label: "Though the Fig Tree..." },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type HabTab = "overview" | "complaint" | "answer" | "faith" | "prayer" | "figtree" | "themes" | "journal" | "videos";

const COMPLAINT_SECTIONS = [
  {
    color: RED,
    title: "How Long, O LORD? — Habakkuk 1:2–4",
    body: "'O LORD, how long shall I cry for help, and you will not hear? Or cry to you Violence! and you will not save? Why do you make me see iniquity, and why do you idly look at wrong? Destruction and violence are before me; strife and contention arise. So the law is paralyzed, and justice never goes forth. For the wicked surround the righteous; so justice goes forth perverted.' Habakkuk opens with a direct complaint to God. He does not begin with a message to the people. He begins with a protest to God about the people — specifically, about the corruption, violence, and injustice he sees in Judah that God seems to be doing nothing about.",
  },
  {
    color: GOLD,
    title: "What Kind of Prayer Is This?",
    body: "Habakkuk's opening prayer belongs to the tradition of lament — the honest, sometimes anguished speech directed to God about what is wrong in the world. The Psalms are full of it (Ps 22, 88, 13, 73). Job does it extensively. Jeremiah's confessions are in this mode. Lament is not faithlessness; it is a form of trust. You only complain to someone you believe can do something. Habakkuk's protest to God is itself a theological statement: God is the one responsible for justice, and his apparent silence is the problem that must be named.",
  },
  {
    color: TEAL,
    title: "The Unique Structure of the Book",
    body: "Habakkuk is unlike most other prophetic books. Most prophets deliver messages from God to the people. Habakkuk is a dialogue between the prophet and God. The book has three sections: (1) Chapters 1–2: A complaint and response exchange between Habakkuk and God. (2) Chapter 3: A psalm — a prayer-song of Habakkuk that begins with trembling and ends with extraordinary faith. The prophet argues, receives an answer, receives a harder answer, and arrives at trust through genuine intellectual and spiritual struggle. It is the most honest account of how faith survives catastrophe in the Minor Prophets.",
  },
  {
    color: BLUE,
    title: "The Watchman Posture — Habakkuk 2:1",
    body: "'I will take my stand at my watchpost and station myself on the tower, and look out to see what he will say to me, and what I will answer concerning my complaint.' After his complaint, Habakkuk does something remarkable: he waits. He stations himself at the watchtower of prayer, expecting God to answer, prepared to hear what God says. This is the prophetic posture: bring your honest protest, then wait for the divine response. Lament and listening belong together. The complaint does not close the conversation; it opens it.",
  },
];

const ANSWER_SECTIONS = [
  {
    color: GOLD,
    title: "God's First Answer — Babylon Is Coming — Habakkuk 1:5–6",
    body: "'Look among the nations, and see; wonder and be astounded. For I am doing a work in your days that you would not believe if told. For behold, I am raising up the Chaldeans, that bitter and hasty nation, who march through the breadth of the earth, to seize dwellings not their own.' God's answer to Habakkuk's complaint about Judah's injustice is: I am doing something about it — I am raising up Babylon to judge Judah. This is not the answer Habakkuk wanted. It is also theologically staggering: God uses a pagan empire — more violent and more wicked than Judah — as an instrument of his purposes.",
  },
  {
    color: RED,
    title: "Habakkuk's Second Complaint — Habakkuk 1:12–13",
    body: "'Are you not from everlasting, O LORD my God, my Holy One? We shall not die. O LORD, you have ordained them as a judgment, and you, O Rock, have established them for reproof. You who are of purer eyes than to see evil and cannot look at wrong, why do you idly look at traitors and remain silent when the wicked swallows up the man more righteous than he?' This second complaint is even bolder than the first. Habakkuk accepts that God is using Babylon but cannot understand how the Holy God can use an instrument more wicked than what it is punishing. He frames his complaint in the language of God's own character: you are too holy to watch injustice — so why are you watching this injustice?",
  },
  {
    color: TEAL,
    title: "God's Second Answer — The Woes on Babylon — Habakkuk 2:2–20",
    body: "God tells Habakkuk to write the vision plainly on tablets so that a runner can read it: the vision awaits its appointed time; it will surely come (2:3). Then come five woes against Babylon — against greed, violence, exploitation, drunkenness used to expose others, and idolatry. The Babylonians who are being used as God's instrument will themselves be judged for their own crimes. The sequence is not random; it is a declaration that no empire is exempt from God's moral accounting. 'For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea' (2:14).",
  },
  {
    color: PURPLE,
    title: "The LORD Is in His Holy Temple — Habakkuk 2:20",
    body: "'But the LORD is in his holy temple; let all the earth keep silence before him.' This verse closes God's answer to Habakkuk — and it is one of the most important sentences in the book. After two chapters of honest complaint and divine response, the answer to injustice, violence, and the apparent triumph of evil is not full explanation. It is the call to silence before a sovereign God. The LORD is not absent. The temple is not empty. The appropriate response to what cannot yet be understood is reverent, expectant silence — not the silence of resignation but of trust.",
  },
];

const FAITH_BODY = `Habakkuk 2:4 is one of the most significant verses in the entire Bible — not because of its prominence in its original context, but because of what Paul does with it.

'Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith.'

The immediate contrast is between the arrogant Babylonian (whose soul is puffed up) and the righteous person (who lives by faith/faithfulness). In context, Habakkuk is saying: the empire that swaggers through the earth is not the measure of life — the one who trusts God through catastrophe is. Faithfulness to God when everything around you is collapsing is the form of life that corresponds to reality.

But Paul quotes this verse three times in contexts that give it extraordinary weight:

1. **Romans 1:17** — 'For in it the righteousness of God is revealed from faith for faith, as it is written, "The righteous shall live by faith."' Paul uses Habakkuk 2:4 as the scriptural warrant for his entire doctrine of justification. The righteousness that saves is received by faith, not earned by works.

2. **Galatians 3:11** — 'Now it is evident that no one is justified before God by the law, for "The righteous shall live by faith."' Paul contrasts Torah-obedience with faith as the basis of right standing before God. The Habakkuk text becomes the positive statement of what justification is.

3. **Hebrews 10:37–38** — The author quotes a modified version of Habakkuk 2:3–4 to encourage believers facing persecution: 'For yet a little while, and the coming one will come and will not delay; but my righteous one shall live by faith.'

The verse that Habakkuk wrote about surviving the Babylonian crisis becomes, in Paul's hands, the foundational statement of how sinners are made right with God through trust in Christ. The continuity is genuine: in both cases, what gives life in the face of overwhelming power is not works, not military strength, not institutional religion — but the faith that holds onto God when everything else is collapsing.`;

const PRAYER_SECTIONS = [
  {
    color: PURPLE,
    title: "A Prayer of Habakkuk — Habakkuk 3:1–2",
    body: "'A prayer of Habakkuk the prophet, according to Shigionoth. O LORD, I have heard the report of you, and your work, O LORD, do I fear. In the midst of the years revive it; in the midst of the years make it known; in wrath remember mercy.' Chapter 3 is a psalm — it has a musical heading, a selah, and a closing performance note. Habakkuk's complaint has become a prayer. He has processed the divine answers and arrived at a place of deep, trembling reverence. He has heard about what God has done in history (Exodus, wilderness). He asks: do it again. 'In wrath remember mercy' is one of the great short prayers of the Bible.",
  },
  {
    color: GOLD,
    title: "The Theophany — God Coming in Storm — Habakkuk 3:3–15",
    body: "Habakkuk then describes a vision of God coming in judgment — God from Teman, the Holy One from Mount Paran (Sinai language). The description is cosmic and terrifying: plague goes before him, pestilence follows, mountains writhe, the deep raises its hands, sun and moon stand still. The imagery draws heavily on the Exodus: God's appearance at Sinai, the crossing of the sea, the defeat of Egypt. Habakkuk is assuring himself (and us) that the God who acted in history to save Israel can act again. The vision of God's power in the past is the anchor for trust in the present.",
  },
  {
    color: TEAL,
    title: "I Heard and My Body Trembled — Habakkuk 3:16",
    body: "'I hear, and my body trembles; my lips quiver at the sound; rottenness enters into my bones; my legs tremble beneath me. Yet I will quietly wait for the day of trouble to come upon people who invade us.' This verse is one of the most physically honest statements in prophetic literature. Habakkuk does not arrive at confident trust without passing through bodily terror. The vision of what is coming — the Babylonian invasion — makes him physically shake. Trust is not the absence of fear; it is 'yet I will quietly wait' on the other side of fear. Faith that costs nothing is not what the Bible commends.",
  },
];

const FIGTREE_BODY = `Habakkuk 3:17–19 is the climax of the book — and one of the most powerful statements of faith in the entire Bible. It is worth reading slowly:

'Though the fig tree does not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the LORD; I will take joy in the God of my salvation. GOD, the Lord, is my strength; he makes my feet like the deer's; he makes me tread on my high places.'

The inventory of disaster is total. In the ancient Near East, figs, grapes, olives, grain, flocks, and herds represented the entire agricultural economy — the complete basis of material life. Habakkuk is describing the scenario where every single source of physical security and provision has been destroyed. This is not poetic exaggeration; it describes precisely what a Babylonian invasion would do.

Into that total material devastation, Habakkuk says three things:

1. **Yet I will rejoice in the LORD.** Not 'I will try to look on the bright side.' Not 'I will maintain equanimity.' The word is rejoice — a positive, active, exultant orientation toward God that is not dependent on circumstances.

2. **I will take joy in the God of my salvation.** The basis of joy is God himself — specifically, God as savior. When all other grounds for joy are stripped away, what remains is God. This is not compensation theology ('God is my consolation prize'). It is the discovery that what we have in God is not one good thing among many but the source from which all other good things flow — and which remains when they are gone.

3. **GOD, the Lord, is my strength.** The word used — YHWH Adonai — is the full covenantal name. Habakkuk has passed through complaint, through divine encounter, through bodily trembling, and has arrived at this: God himself is the ground on which I stand. And on that ground, my feet are like a deer's on the heights — sure-footed precisely where others would stumble.

Habakkuk 3:17–19 has been a touchstone for believers in every form of catastrophe: illness, poverty, persecution, loss, depression, war. It does not deny the reality of disaster. It claims that God is greater than disaster — and that joy in God is a form of resistance to despair that the circumstances cannot ultimately extinguish.`;

const THEMES = [
  {
    color: PURPLE,
    title: "Honest Protest as Faith",
    body: "Habakkuk demonstrates that bringing your genuine questions and complaints to God is not faithlessness but a form of covenant relationship. God does not rebuke Habakkuk for his questions. He answers them. The permission structure of the biblical lament tradition is wide: you can say hard things to God if you are saying them to God.",
  },
  {
    color: GOLD,
    title: "The Righteous Live by Faith",
    body: "Habakkuk 2:4 became one of the most important texts in Christian theology through Paul's use of it in Romans, Galatians, and (implicitly) Hebrews. What gives life when everything is collapsing is not strength, performance, or achievement — but trust in a God who is faithful even when circumstances say otherwise.",
  },
  {
    color: RED,
    title: "God Uses Unlikely Instruments",
    body: "Babylon is more wicked than Judah. Yet God uses Babylon to judge Judah — and then judges Babylon for its violence. The apparent injustice of God using an evil empire becomes, in the book's resolution, a testimony to the comprehensiveness of divine sovereignty. Nothing escapes God's accounting.",
  },
  {
    color: TEAL,
    title: "Waiting on God",
    body: "'The vision awaits its appointed time; it hastens to the end — it will not lie. If it seems slow, wait for it; it will surely come; it will not delay' (2:3). The godly response to delayed justice is not despair but patient expectation. What God has promised will happen — on his timetable, not ours.",
  },
  {
    color: BLUE,
    title: "The Silence Before God",
    body: "'The LORD is in his holy temple; let all the earth keep silence before him' (2:20). After all the argument, all the complaint, all the divine explanation — there is silence. Not the silence of abandonment but of presence. Not the silence of having no more questions but of having encountered someone greater than the questions.",
  },
  {
    color: GREEN,
    title: "Joy as Defiance of Circumstances",
    body: "Habakkuk 3:17–19 is a declaration that joy in God is not contingent on material prosperity. This is not denial of pain; the list of losses in 3:17 is complete and specific. It is the discovery that what we have in God outlasts and outweighs what circumstances can take. The deer on the heights — sure-footed precisely in the difficult places.",
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "Habakkuk opens with 'How long, O LORD?' — a prayer that names real pain and real confusion. What question do you most need to bring honestly to God right now?",
  "God's answer to Habakkuk made things more confusing before it made them clearer. When have you received an answer to prayer that raised harder questions?",
  "Habakkuk 2:4 says the righteous live by faith — not by circumstances or outcomes. What area of your life most needs this kind of faith right now?",
  "Habakkuk 3:16 says 'my body trembles' — and then 'yet I will quietly wait.' What does faith look like when it is accompanied by real fear?",
  "Habakkuk 3:17–19 lists total material loss and then says 'yet I will rejoice.' What would it mean for you to claim that verse in your current circumstances?",
];

export default function HabakkukGuidePage() {
  const [tab, setTab] = usePersistedState<HabTab>("vine_habakkuk_tab", "overview");
  const [openComplaint, setOpenComplaint] = useState<string | null>(null);
  const [openAnswer, setOpenAnswer] = useState<string | null>(null);
  const [openPrayer, setOpenPrayer] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_habakkuk_journal");
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
    localStorage.setItem("vine_habakkuk_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_habakkuk_journal", JSON.stringify(updated));
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
          <div style={{ background: `linear-gradient(135deg, #0d0015 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
                <span style={{ color: MUTED, fontSize: 14 }}>3 Chapters · ~600 BC</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Book of Habakkuk
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
                The prophet who argues with God — and arrives at faith through the argument. <em style={{ color: TEXT }}>"Yet I will rejoice in the LORD; I will take joy in the God of my salvation."</em>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as HabTab)}
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Habakkuk is one of the most personally honest books in the Bible. It records a genuine argument between a prophet and God — and the journey from honest complaint to trembling, costly, exultant faith.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Author", value: "Habakkuk" },
                    { label: "Time Period", value: "~600 BC" },
                    { label: "Context", value: "Before the Babylonian invasion" },
                    { label: "Chapters", value: "3" },
                    { label: "Theme", value: "Faith through crisis and complaint" },
                    { label: "Key Verse", value: "Habakkuk 3:17–19" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>{"The Book's Climax — Habakkuk 3:17–19"}</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: 8 }}>
                      "Though the fig tree does not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the LORD; I will take joy in the God of my salvation. GOD, the Lord, is my strength; he makes my feet like the deer's; he makes me tread on my high places."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Habakkuk 3:17–19 (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Hab 1:2–4", desc: "First complaint: How long, O LORD? Justice never goes forth" },
                      { ref: "Hab 1:5–6", desc: "First answer: I am raising up Babylon against you" },
                      { ref: "Hab 1:12–13", desc: "Second complaint: How can you use an instrument more wicked?" },
                      { ref: "Hab 2:1", desc: "The watchman posture: I will stand and wait for his answer" },
                      { ref: "Hab 2:3", desc: "The vision awaits its time; wait for it — it will surely come" },
                      { ref: "Hab 2:4", desc: "The righteous shall live by his faith — quoted in Rom 1:17, Gal 3:11, Heb 10:38" },
                      { ref: "Hab 2:14", desc: "The earth will be filled with the knowledge of the glory of the LORD" },
                      { ref: "Hab 2:20", desc: "The LORD is in his holy temple; let all the earth keep silence" },
                      { ref: "Hab 3:16", desc: "My body trembles... yet I will quietly wait" },
                      { ref: "Hab 3:17–19", desc: "Though the fig tree does not blossom... yet I will rejoice" },
                    ].map(p => (
                      <div key={p.ref} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13, minWidth: 90, paddingTop: 2 }}>{p.ref}</span>
                        <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{p.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* COMPLAINT */}
            {tab === "complaint" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Complaint</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Most prophets carry messages from God to the people. Habakkuk begins by taking his complaint from the people directly to God. It is one of Scripture's clearest models of the lament tradition — honest, specific, and bold.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {COMPLAINT_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenComplaint(openComplaint === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openComplaint === s.title ? "−" : "+"}</span>
                      </button>
                      {openComplaint === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ANSWER */}
            {tab === "answer" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>{"God's Answer"}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>{"God's answer to Habakkuk makes things worse before they get better. The divine response is not a comfortable resolution — it is a revelation of sovereign purposes that exceeds human comprehension, demanding a trust that goes beyond explanation."}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {ANSWER_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenAnswer(openAnswer === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openAnswer === s.title ? "−" : "+"}</span>
                      </button>
                      {openAnswer === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAITH */}
            {tab === "faith" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Righteous Shall Live by Faith</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Three words in the Hebrew of Habakkuk 2:4 became the axis around which Paul built his theology of justification. Understanding how Paul uses this verse requires understanding what it meant in Habakkuk first.</p>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "...but the righteous shall live by his faith."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Habakkuk 2:4b (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                  {FAITH_BODY.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, marginBottom: i < FAITH_BODY.split('\n\n').length - 1 ? 16 : 0 }}>{para}</p>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
                  {[
                    { ref: "Romans 1:17", color: PURPLE, context: "The righteousness of God revealed in the gospel — received through faith from first to last" },
                    { ref: "Galatians 3:11", color: GOLD, context: "No one is justified by the law — the righteous live by faith, not by Torah-obedience" },
                    { ref: "Hebrews 10:38", color: TEAL, context: "My righteous one shall live by faith — encouragement to persevere through persecution" },
                  ].map(item => (
                    <div key={item.ref} style={{ background: CARD, border: `1px solid ${item.color}33`, borderRadius: 12, padding: "18px 20px" }}>
                      <div style={{ color: item.color, fontWeight: 800, marginBottom: 8 }}>{item.ref}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.context}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PRAYER */}
            {tab === "prayer" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Habakkuk 3 — The Great Prayer</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Chapter 3 is a psalm. Habakkuk has processed his complaint and the divine responses and has arrived at a place of trembling reverence and costly trust. The chapter moves from petitionary prayer through a vision of God in theophanic power and arrives at the declaration of 3:17–19.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {PRAYER_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenPrayer(openPrayer === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openPrayer === s.title ? "−" : "+"}</span>
                      </button>
                      {openPrayer === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FIG TREE */}
            {tab === "figtree" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Though the Fig Tree Does Not Blossom</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Habakkuk 3:17–19 is the summit of the book and one of the greatest statements of faith in all of Scripture. It has sustained believers in every form of catastrophe for 2,600 years.</p>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: 28, marginBottom: 28 }}>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.9, marginBottom: 8 }}>
                      "Though the fig tree does not blossom, nor fruit be on the vines, the produce of the olive fail and the fields yield no food, the flock be cut off from the fold and there be no herd in the stalls, yet I will rejoice in the LORD; I will take joy in the God of my salvation. GOD, the Lord, is my strength; he makes my feet like the deer's; he makes me tread on my high places."
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Habakkuk 3:17–19 (ESV)</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
                  {FIGTREE_BODY.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: MUTED, lineHeight: 1.8, fontSize: 14, marginBottom: i < FIGTREE_BODY.split('\n\n').length - 1 ? 16 : 0 }}>{para}</p>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
                  {[
                    { phrase: "Yet I will rejoice", color: PURPLE, note: "Active, exultant orientation toward God — not mood-dependent but choice-dependent" },
                    { phrase: "God of my salvation", color: GOLD, note: "Joy grounded in who God is, not in what God has given. What we have in God outlasts what we have from God." },
                    { phrase: "My strength", color: TEAL, note: "When material resources are gone, God himself is the source of life. The deer on the heights: sure-footed in the hard places." },
                  ].map(item => (
                    <div key={item.phrase} style={{ background: CARD, border: `1px solid ${item.color}33`, borderRadius: 12, padding: "18px 20px" }}>
                      <div style={{ color: item.color, fontWeight: 700, fontSize: 15, marginBottom: 8, fontStyle: "italic" }}>{item.phrase}</div>
                      <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.note}</p>
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Habakkuk is permission to bring your hardest questions to God. Use this space to do that honestly.</p>

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
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Habakkuk 3:17–19" style={inputStyle} />
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Explore Habakkuk's dialogue with God, the theology of the righteous living by faith, and the extraordinary declaration of 3:17–19.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                  <div>
                    <VideoEmbed videoId="OPMaRqGJPUU" title="The Book of Habakkuk" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Book of Habakkuk — BibleProject overview</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="g_igCcVS6gY" title="Faith — Word Study" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Faith (Emunah) — the word behind Habakkuk 2:4</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="feBP_oLtN5E" title="The Prophets" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Understanding the OT prophetic tradition</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="OPMaRqGJPUU" title="How to Read the Prophets" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>How to read prophetic literature in context</p>
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
