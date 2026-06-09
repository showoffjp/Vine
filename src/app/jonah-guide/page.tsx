"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useCallback, useEffect } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", RED = "#EF4444";
const ACCENT = BLUE;

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "running", label: "Running from God" },
  { id: "fish", label: "In the Fish" },
  { id: "nineveh", label: "Nineveh Repents" },
  { id: "anger", label: "Jonah's Anger" },
  { id: "jesus", label: "Sign of Jonah" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

type JonahTab = "overview" | "running" | "fish" | "nineveh" | "anger" | "jesus" | "themes" | "journal" | "videos";

const RUNNING_SECTIONS = [
  {
    color: RED,
    title: "The Command and the Flight — Jonah 1:1–3",
    body: "'Now the word of the LORD came to Jonah the son of Amittai: Arise, go to Nineveh, that great city, and call out against it, for their evil has come up before me.' But Jonah rose to flee to Tarshish from the presence of the LORD. He went down to Joppa and found a ship going to Tarshish. So he paid the fare and went down into it, to go with them to Tarshish, away from the presence of the LORD.' Nineveh was the capital of Assyria — Israel's most feared and hated enemy. To go there and preach was not just dangerous; it was theologically intolerable to Jonah. He knew God might forgive them (4:2). He didn't want that.",
  },
  {
    color: GOLD,
    title: "The Storm and the Pagan Sailors",
    body: "God hurls a great storm at the ship. Remarkably, the pagan sailors respond with more theological integrity than Jonah: they pray, they cast lots to find who is responsible, they are reluctant to throw Jonah overboard, and when they finally do (at Jonah's own request), they cry out to the LORD, offer a sacrifice, and make vows (1:14–16). In a book full of irony, the first irony is that the unbelieving sailors act more righteously than the prophet of God. Jonah, meanwhile, is sleeping below deck — the most striking possible image of spiritual avoidance.",
  },
  {
    color: TEAL,
    title: "Why Jonah Ran — The Scandal at the Heart of the Book",
    body: "We don't learn why Jonah ran until chapter 4: 'O LORD, is not this what I said when I was yet in my country? That is why I made haste to flee to Tarshish; for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster' (4:2). Jonah quotes Exodus 34:6–7 — the foundational declaration of God's character. He is not fleeing because he fears Nineveh. He is fleeing because he fears God might forgive them. His theology is impeccable. His compassion is absent.",
  },
  {
    color: PURPLE,
    title: "Going Down, Down, Down",
    body: "The book's narrative marks Jonah's flight with a repeated verb: he went down to Joppa (1:3), down into the ship (1:3), down to the inner part of the ship (1:5), down into the fish (1:17), and eventually to the roots of the mountains (2:6). The spiritual geography of flight from God is descent. This is not primarily about geography; it is about the movement of the soul. Contrast this with the command: 'Arise, go.' Obedience lifts; flight sinks.",
  },
];

const FISH_SECTIONS = [
  {
    color: BLUE,
    title: "Appointed by God — Jonah 1:17",
    body: "The LORD appointed a great fish to swallow Jonah. The word 'appointed' appears four times in Jonah (1:17; 4:6, 7, 8) — for the fish, the plant, the worm, and the east wind. Everything in creation responds to God's direction. The fish is not a punishment but a preservation; it is God refusing to let Jonah drown. The belly of the fish is terrible, but it is the mercy of God. Jonah is not dead; he is being held.",
  },
  {
    color: GOLD,
    title: "The Prayer from the Fish — Jonah 2",
    body: "Jonah's prayer from inside the fish is a psalm of lament and thanksgiving composed almost entirely of quotations from the Psalms. 'Out of the belly of Sheol I cried, and you heard my voice' (2:2). 'The waters closed in over me to take my life; the deep surrounded me; weeds were wrapped about my head at the roots of the mountains' (2:5–6). Then the turn: 'Yet I will again look upon your holy temple' (2:4). 'Salvation belongs to the LORD!' (2:9). The prayer is theologically rich — and also ironic: Jonah prays beautifully about God's saving grace without yet extending any such grace to Nineveh.",
  },
  {
    color: TEAL,
    title: "Salvation Belongs to the LORD — Jonah 2:9",
    body: "'Those who pay regard to vain idols forsake their hope of steadfast love. But I with the voice of thanksgiving will sacrifice to you; what I have vowed I will pay. Salvation belongs to the LORD!' This is the climax of the psalm — and one of the great confessions of faith in the OT. But the context is dripping with irony: Jonah declares that idolaters forsake God's steadfast love (hesed) — while he himself is withholding hesed from Nineveh. He confesses that salvation belongs to the LORD — but will rage when the LORD decides to save Nineveh. Jonah's prayer is theologically correct and personally incomplete.",
  },
  {
    color: GREEN,
    title: "Vomited Onto Dry Land — Jonah 2:10",
    body: "'And the LORD spoke to the fish, and it vomited Jonah out upon the dry land.' The language is deliberately undignified. The prophet who refused God's commission is deposited back at the starting line, covered in the evidence of his resistance. The word of the LORD comes to him a second time: 'Arise, go to Nineveh, that great city, and call out against it the message that I tell you' (3:2). The commission is identical to chapter 1. God does not revise his purposes to accommodate our avoidance.",
  },
];

const NINEVEH_SECTIONS = [
  {
    color: GREEN,
    title: "The Shortest Sermon — Jonah 3:4",
    body: "'Jonah began to go into the city, going a day's journey. And he called out, Yet forty days, and Nineveh shall be overthrown!' Eight Hebrew words. No theology, no invitation to repent, no explanation. Jonah delivers the minimum possible message. Perhaps he hoped they would ignore it. What happens next is the greatest revival in the Bible: the people of Nineveh believed God. They called for a fast. They put on sackcloth, from the greatest of them to the least.",
  },
  {
    color: TEAL,
    title: "The King's Decree — Jonah 3:7–9",
    body: "'By the decree of the king and his nobles: Let neither man nor beast, herd nor flock, taste anything. Let them not feed or drink water, but let man and beast be covered with sackcloth, and let them call out mightily to God. Let everyone turn from his evil way and from the violence that is in his hands. Who knows? God may turn and relent and turn from his fierce anger, so that we do not perish.' The king's 'Who knows?' parallels Joel 2:14. It is faith in the face of uncertainty — not presuming on God's grace but hoping for it. The Ninevites repent more comprehensively than Israel ever did.",
  },
  {
    color: GOLD,
    title: "God Relents — Jonah 3:10",
    body: "'When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it.' This is the verse that explains why Jonah ran. God's mercy is extended to the most violent pagan empire Jonah knew. The book does not minimize Assyrian cruelty — it is mentioned explicitly (3:8, 'the violence that is in his hands'). God's forgiveness does not require the violence to have been small. The scope of divine mercy is the scandal of the book.",
  },
  {
    color: PURPLE,
    title: "Nineveh as Mirror",
    body: "The Ninevites' response to Jonah's minimal message makes them a mirror held up to Israel. Throughout the OT, Israel received extensive revelation, covenant, law, and prophets — and repeatedly failed to repent. Nineveh, with eight Hebrew words from an unwilling prophet, believed God and turned from their evil. Jesus will make the same comparison explicit: 'The men of Nineveh will rise up at the judgment with this generation and condemn it, for they repented at the preaching of Jonah, and behold, something greater than Jonah is here' (Matthew 12:41).",
  },
];

const ANGER_SECTIONS = [
  {
    color: RED,
    title: "Jonah's Rage — Jonah 4:1–4",
    body: "'But it displeased Jonah exceedingly, and he was angry. And he prayed to the LORD and said, O LORD, is not this what I said when I was yet in my country? That is why I made haste to flee to Tarshish; for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster. Therefore now, O LORD, please take away my life from me, for it is better for me to die than to live.' Jonah is so angry that Nineveh was spared that he asks to die. His theology is correct — he quotes Exodus 34:6-7 accurately. But he finds God's mercy infuriating when it extends beyond the boundaries he has drawn.",
  },
  {
    color: GOLD,
    title: "The Plant, the Worm, and the East Wind — Jonah 4:6–8",
    body: "God appoints a plant to shade Jonah in his booth outside Nineveh. Jonah is exceedingly glad about the plant. Then God appoints a worm to attack the plant, which withers. Then a scorching east wind and blazing sun. Jonah faints and again asks to die: 'It is better for me to die than to live.' God asks again: 'Do you do well to be angry for the plant?' And Jonah says: 'Yes, I do well to be angry, angry enough to die.' The intensity is deliberate. Jonah's grief for a plant he did not make and cannot keep alive is proportionally greater than his concern for 120,000 people.",
  },
  {
    color: TEAL,
    title: "The Final Question — Jonah 4:10–11",
    body: "'You pity the plant, for which you did not labor, nor did you make it grow, which came into being in a night and perished in a night. And should I not pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?' The book ends here. No resolution. No record of Jonah's response. The question hangs in the air — directed at every reader: Should I not be concerned about the people you have written off? The book refuses to let us close it comfortably.",
  },
  {
    color: BLUE,
    title: "The Uncomfortable Ending",
    body: "Jonah is one of very few OT books that ends with a question rather than a resolution. It is a parable designed to produce discomfort. The readers in ancient Israel would have identified with Jonah — and the book subverts that identification. The question in 4:11 is directed at us: Who are our Ninevites? Who are the people we believe God should judge rather than forgive? Whose repentance would make us angry rather than glad? The book is an invitation to expand our mercy to the size of God's — and a warning about what happens when we don't.",
  },
];

const JESUS_SECTIONS = [
  {
    color: BLUE,
    title: "The Sign of Jonah — Matthew 12:39–41",
    body: "'An evil and adulterous generation seeks for a sign, but no sign will be given to it except the sign of the prophet Jonah. For just as Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth. The men of Nineveh will rise up at the judgment with this generation and condemn it, for they repented at the preaching of Jonah, and behold, something greater than Jonah is here.' Jesus twice invokes Jonah — once as a type of his own death and resurrection, and once to indict religious people who are less responsive than pagans.",
  },
  {
    color: GOLD,
    title: "Jonah as a Type of Christ",
    body: "Jesus identifies the three days in the fish with his time in the tomb. The typological connection runs deeper: Jonah's sleep in the storm (1:5) parallels Jesus sleeping in the boat (Mark 4:38). Jonah is thrown overboard to calm the storm; Jesus calms the storm himself. Jonah emerges from the fish into a ministry that saves a city; Jesus rises from the dead into a ministry that saves the world. The parallels are deliberate. But Jesus is careful to say something greater is here — he does not merely repeat Jonah's story; he is the thing Jonah's story pointed to.",
  },
  {
    color: TEAL,
    title: "Jonah and the Mission of the Church",
    body: "The book of Jonah has been central to Christian reflection on mission since the early church. If God's mercy extends to Nineveh — Israel's worst enemy — then no people group, no nation, no individual is beyond the reach of his concern. Acts 1:8 follows the Jonah logic: Jerusalem, Judea, Samaria (the half-pagan neighbors), and the ends of the earth. The church, like Jonah, is constantly being pushed beyond the boundaries of its comfort zone. And, like Jonah, it often resists. The question of 4:11 is permanently the mission question.",
  },
];

const THEMES = [
  {
    color: BLUE,
    title: "Running from God",
    body: "Jonah's flight is not unique. It is among the most recognizable experiences in the spiritual life: the clear calling you resist, the distance you try to put between yourself and what you know you ought to do. The book does not moralize; it shows. And it shows that God pursues, the sea obeys, even the fish cooperates in the divine purposes of retrieval.",
  },
  {
    color: RED,
    title: "The Width of Divine Mercy",
    body: "The book's central theological claim is offensive to anyone who has drawn neat boundaries around who God should and should not forgive. God cares about Nineveh. God asks Jonah: Should I not be concerned? The question is not answered. It is left open for every reader to wrestle with.",
  },
  {
    color: GOLD,
    title: "Religious Correctness Without Compassion",
    body: "Jonah knows his theology. He quotes Scripture accurately. He prays eloquently. He is impeccably orthodox. And he is spiritually small — unable to extend to others what God has extended to him. The book warns that theological correctness can coexist with moral failure, that knowing about grace does not automatically produce gracious people.",
  },
  {
    color: TEAL,
    title: "Creation Obeys God",
    body: "The storm, the fish, the plant, the worm, the wind — all respond to God's word. The only thing in the book that consistently resists God is the prophet. Creation is a chorus of divine sovereignty; Jonah is the dissonant note. His resistance cannot ultimately frustrate God's purposes, but it can make the journey much harder.",
  },
  {
    color: GREEN,
    title: "Second Chances",
    body: "The word of the LORD came to Jonah a second time (3:1). God does not abandon his commission or his commissioner. The failure of chapter 1 is not the end of the story. The second call is identical to the first. This is a recurring biblical pattern: God calls again when we have failed to answer the first time. The question is whether we will answer differently.",
  },
  {
    color: PURPLE,
    title: "The Unanswered Question",
    body: "Jonah is one of the few biblical books that ends without resolution. We do not know what Jonah decides. The question 'Should I not be concerned about Nineveh?' is left for the reader to answer. That is the book's final act of pastoral wisdom: it refuses to let us observe from a distance. We must place ourselves in Jonah's position and answer the question for ourselves.",
  },
];

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "Who is your Nineveh — the person or group you would rather see judged than forgiven? What would it mean to pray for them?",
  "Jonah ran from God rather than face what God was asking him to do. Where in your life are you running? What would it look like to turn around?",
  "The sailors and the Ninevites both respond to God with more faith than the prophet. When have you seen surprising faith outside the expected places?",
  "Jonah prayed beautifully about God's grace (chapter 2) while refusing to extend it (chapter 4). Where might your theology be outrunning your practice?",
  "God ends Jonah with a question, not an answer. What question is God asking you right now that you have not yet fully faced?",
];

export default function JonahGuidePage() {
  const [tab, setTab] = usePersistedState<JonahTab>("vine_jonah_tab", "overview");
  const [openRunning, setOpenRunning] = useState<string | null>(null);
  const [openFish, setOpenFish] = useState<string | null>(null);
  const [openNineveh, setOpenNineveh] = useState<string | null>(null);
  const [openAnger, setOpenAnger] = useState<string | null>(null);
  const [openJesus, setOpenJesus] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);
  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_jonah_journal");
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
    localStorage.setItem("vine_jonah_journal", JSON.stringify(updated));
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_jonah_journal", JSON.stringify(updated));
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
          <div style={{ background: `linear-gradient(135deg, #00101a 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>MINOR PROPHETS</span>
                <span style={{ color: MUTED, fontSize: 14 }}>4 Chapters · ~760 BC</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Book of Jonah
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 680, lineHeight: 1.7, margin: 0 }}>
                A prophet who ran, a fish that waited, a city that repented — and a God who asks the question no one wants to answer: <em style={{ color: TEXT }}>"Should I not be concerned about Nineveh?"</em>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto" }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id as JonahTab)}
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Jonah is the most unusual prophetic book in the Bible. It is almost entirely narrative — four chapters following a prophet who doesn't want to do what he's called to do. It is also one of the funniest and most devastating books about religious hypocrisy ever written.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 32 }}>
                  {[
                    { label: "Author", value: "Unknown (about Jonah)" },
                    { label: "Time Period", value: "~760 BC" },
                    { label: "Setting", value: "Joppa, the sea, Nineveh" },
                    { label: "Chapters", value: "4" },
                    { label: "Theme", value: "Mercy, mission, running from God" },
                    { label: "Key Verse", value: "Jonah 4:11" },
                  ].map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}33`, borderRadius: 12, padding: 28, marginBottom: 24 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>The Final Question</h3>
                  <blockquote style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20, margin: 0 }}>
                    <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                      "And should I not pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?"
                    </p>
                    <cite style={{ color: MUTED, fontSize: 13 }}>— Jonah 4:11 (ESV) — the last line of the book</cite>
                  </blockquote>
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Key Passages</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { ref: "Jonah 1:1–3", desc: "The command to go to Nineveh and Jonah's flight to Tarshish" },
                      { ref: "Jonah 1:14–16", desc: "The sailors cry out to the LORD and offer sacrifice" },
                      { ref: "Jonah 2:2–9", desc: "Jonah's psalm from inside the fish; 'Salvation belongs to the LORD'" },
                      { ref: "Jonah 3:4–5", desc: "Eight words; Nineveh believes God and repents" },
                      { ref: "Jonah 3:9–10", desc: "'Who knows? God may relent.' God relents." },
                      { ref: "Jonah 4:2", desc: "Jonah's complaint — he ran because he knew God would forgive" },
                      { ref: "Jonah 4:10–11", desc: "The plant comparison and God's final question" },
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

            {/* RUNNING */}
            {tab === "running" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Running from God</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Jonah's flight is one of Scripture's most recognizable portraits of spiritual avoidance. He knows exactly what God wants. He runs in the opposite direction. The narrative tracks the geography of disobedience with merciless precision.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {RUNNING_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenRunning(openRunning === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openRunning === s.title ? "−" : "+"}</span>
                      </button>
                      {openRunning === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FISH */}
            {tab === "fish" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>In the Fish</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Three days and three nights in the belly of a great fish. The psalm Jonah prays is one of the most beautiful prayers in the Bible — and one of the most theologically ironic. He has learned that salvation belongs to God; he has not yet learned that it belongs to Nineveh too.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {FISH_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenFish(openFish === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openFish === s.title ? "−" : "+"}</span>
                      </button>
                      {openFish === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NINEVEH */}
            {tab === "nineveh" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Nineveh Repents</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Chapter 3 records the most extraordinary revival in the Bible — 120,000 people turning to God in response to the most minimal sermon ever preached. The irony is that Jonah seems to have been trying to fail, and he succeeded beyond all measure.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {NINEVEH_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenNineveh(openNineveh === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openNineveh === s.title ? "−" : "+"}</span>
                      </button>
                      {openNineveh === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ANGER */}
            {tab === "anger" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>{"Jonah's Anger"}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Chapter 4 is the theological heart of the book. Jonah's rage at God's mercy, God's gentle but relentless questioning, and the book's final unanswered question — these four short verses contain as much moral and theological weight as any passage in the prophets.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {ANGER_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenAnger(openAnger === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openAnger === s.title ? "−" : "+"}</span>
                      </button>
                      {openAnger === s.title && (
                        <div style={{ padding: "0 20px 20px 42px", color: MUTED, lineHeight: 1.8, fontSize: 14 }}>{s.body}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* JESUS */}
            {tab === "jesus" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Sign of Jonah</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Jesus references Jonah twice in the Gospels. Both references are significant: one typological (Jonah in the fish as a type of the resurrection), one prophetic (the Ninevites as a judgment against those who refuse to repent despite greater revelation).</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {JESUS_SECTIONS.map(s => (
                    <div key={s.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <button onClick={() => setOpenJesus(openJesus === s.title ? null : s.title)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: TEXT, fontSize: 15 }}>{s.title}</span>
                        </div>
                        <span style={{ color: MUTED, fontSize: 18 }}>{openJesus === s.title ? "−" : "+"}</span>
                      </button>
                      {openJesus === s.title && (
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>Jonah asks uncomfortable questions. Use this space to sit with them honestly.</p>

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
                      <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="e.g., Jonah 4:11" style={inputStyle} />
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
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>Explore Jonah's story, its theological depths, and what it means for mission and mercy today.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
                  <div>
                    <VideoEmbed videoId="dLIabZc0O4c" title="The Book of Jonah" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>The Book of Jonah — BibleProject overview</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="SCkyWH4sS4s" title="The Book of Amos (justice context)" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Amos — the justice context surrounding the Minor Prophets</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="feBP_oLtN5E" title="The Prophets" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Understanding the OT prophetic tradition</p>
                  </div>
                  <div>
                    <VideoEmbed videoId="pEqIeHMdvUM" title="The Book of Micah" />
                    <p style={{ color: MUTED, fontSize: 13, marginTop: 8 }}>Micah — a companion prophet on mercy and walking humbly</p>
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
