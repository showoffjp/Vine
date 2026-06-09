"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

function useLocalStorage(key: string, init: string): [string, (v: string) => void] {
  const [val, setVal] = useState<string>(() => {
    if (typeof window === "undefined") return init;
    return localStorage.getItem(key) ?? init;
  });
  const setter = (v: string) => {
    setVal(v);
    if (typeof window !== "undefined") localStorage.setItem(key, v);
  };
  return [val, setter];
}

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "already-not-yet", label: "Already / Not Yet" },
  { id: "parables", label: "Kingdom Parables" },
  { id: "church-kingdom", label: "Church & Kingdom" },
  { id: "politics", label: "Politics & Kingdom" },
  { id: "shalom", label: "Shalom" },
  { id: "seeking", label: "Seeking the Kingdom" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

const KINGDOM_TEXTS = [
  {
    ref: "Mark 1:14-15",
    text: "The kingdom of God is at hand; repent and believe in the gospel.",
    note: "Jesus's opening proclamation: the Kingdom is arriving — respond with repentance and faith.",
  },
  {
    ref: "Matthew 6:33",
    text: "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
    note: "The Kingdom is the supreme priority of Christian life — everything else is secondary.",
  },
  {
    ref: "Luke 17:21",
    text: "The kingdom of God is in your midst.",
    note: "The Kingdom is present now — not geographically distant but arriving in the person and work of Jesus.",
  },
  {
    ref: "Romans 14:17",
    text: "For the kingdom of God is not a matter of eating and drinking but of righteousness and peace and joy in the Holy Spirit.",
    note: "The Kingdom's character: righteousness, peace, joy — the fruit of the Spirit's reign.",
  },
  {
    ref: "1 Corinthians 15:24-25",
    text: "Then comes the end, when he delivers the kingdom to God the Father after destroying every rule and every authority and power. For he must reign until he has put all his enemies under his feet.",
    note: "The Kingdom's consummation: Christ's reign continues until every enemy is defeated, then the Kingdom is handed to the Father.",
  },
];

const ALREADY_NOT_YET = [
  {
    dimension: "Already",
    examples: [
      "Jesus casts out demons — the Kingdom has arrived (Matthew 12:28)",
      "The Spirit is the down payment of the Kingdom (Ephesians 1:14)",
      "We have already been transferred into the Kingdom (Colossians 1:13)",
      "Resurrection has already begun in Christ (1 Corinthians 15:20)",
      "We are already a new creation (2 Corinthians 5:17)",
    ],
    color: GREEN,
  },
  {
    dimension: "Not Yet",
    examples: [
      "The Kingdom in its fullness awaits Christ's return (1 Corinthians 15:24)",
      "Suffering, death, and evil still continue (Romans 8:18-23)",
      "Our resurrection is still future (1 Corinthians 15:52)",
      "The new creation is still ahead (Revelation 21:1)",
      "All enemies are not yet fully subdued (Hebrews 10:13)",
    ],
    color: TEAL,
  },
];

const PARABLES = [
  {
    parable: "Mustard Seed (Matthew 13:31-32)",
    teaching: "The Kingdom begins invisibly small and grows to enormous size. Don't despise small beginnings — the Kingdom's present hiddenness is not its final state.",
    color: GREEN,
  },
  {
    parable: "Yeast (Matthew 13:33)",
    teaching: "The Kingdom works invisibly from within, permeating and transforming everything it touches. The Kingdom's growth is organic, not imposed from outside.",
    color: TEAL,
  },
  {
    parable: "Hidden Treasure (Matthew 13:44)",
    teaching: "The Kingdom is worth everything — whoever discovers it sells all they have to obtain it. The Kingdom demands radical reorientation of all values.",
    color: GOLD,
  },
  {
    parable: "Pearl of Great Price (Matthew 13:45-46)",
    teaching: "Even a expert searcher (the merchant) is surprised by the Kingdom's surpassing value. The Kingdom is not just good — it surpasses everything else.",
    color: PURPLE,
  },
  {
    parable: "Wheat and Tares (Matthew 13:24-30)",
    teaching: "The Kingdom presently coexists with evil — the sorting happens at harvest, not now. The church is not the pure Kingdom; purity comes at the end.",
    color: BLUE,
  },
  {
    parable: "Prodigal Son (Luke 15:11-32)",
    teaching: "The Kingdom is characterized by the Father's radical welcome of the returning rebel — and the older brother's resentment of that welcome reveals a failure to understand grace.",
    color: GOLD,
  },
];

const CHURCH_KINGDOM_VIEWS = [
  {
    view: "Church = Kingdom",
    desc: "The church is the Kingdom — wherever the church is present, the Kingdom is present. Roman Catholic ecclesiology tended in this direction historically.",
    color: BLUE,
  },
  {
    view: "Church Is Not the Kingdom",
    desc: "The church and the Kingdom are distinct. The Kingdom is God's reign over all of creation; the church is the community of those who acknowledge that reign. The church is called to serve the Kingdom but does not exhaust it.",
    color: GREEN,
  },
  {
    view: "Church Is the Sign of the Kingdom",
    desc: "The church is the community that announces, demonstrates, and is called to embody the Kingdom values — it is a sign and foretaste of the coming Kingdom, not the fullness of it.",
    color: TEAL,
  },
  {
    view: "Church Is the Instrument of the Kingdom",
    desc: "The church is the primary instrument through which God is advancing his Kingdom rule — through preaching, discipleship, mercy, and justice. It is servant, not master, of the Kingdom.",
    color: GOLD,
  },
];

const POLITICS_POINTS = [
  {
    title: "The Kingdom Is Political",
    desc: "Jesus's proclamation that God is King is inherently political — it relativizes all human claims to ultimate authority. 'Jesus is Lord' means Caesar is not. The Kingdom does not avoid politics; it reframes it.",
    color: GREEN,
  },
  {
    title: "The Kingdom Is Not a Political Party",
    desc: "No human political program fully embodies the Kingdom. Christians can find Kingdom values across political traditions, but the Kingdom radically transcends all of them. Party identification is a poor substitute for Kingdom allegiance.",
    color: TEAL,
  },
  {
    title: "The Constantine Question",
    desc: "When Constantine legalized Christianity (313 AD), the temptation arose to identify the Kingdom with the empire. Every generation faces this: the temptation to use political power to advance what should be advanced by the Spirit.",
    color: PURPLE,
  },
  {
    title: "Two Kingdoms vs. One Kingdom",
    desc: "Luther's two-kingdoms theology distinguished the spiritual kingdom (Christ's direct rule through the Word) from the earthly kingdom (civil government). Reformed thinkers (Kuyper) argued for one Kingdom with Christ as Lord of all spheres — leading to cultural engagement rather than two-sphere separation.",
    color: GOLD,
  },
  {
    title: "Prophetic Voice and Servant Spirit",
    desc: "The church speaks prophetically to political powers (as Elijah to Ahab, as John the Baptist to Herod) — challenging injustice, speaking truth to power. But it does so as a servant, not a power broker.",
    color: BLUE,
  },
];

const SHALOM_CONTENT = [
  {
    title: "What Is Shalom?",
    desc: "Shalom is the Hebrew word often translated 'peace' but meaning far more — wholeness, completeness, flourishing, right-relatedness in every dimension. It is the condition of the new creation: every relationship, system, and creature in its proper order under God's rule.",
    color: GREEN,
  },
  {
    title: "Shalom Is the Kingdom's Goal",
    desc: "Isaiah's vision of the Kingdom (chapters 11, 65) includes: no predators, the desert blooming, justice for the poor, and nations beating swords into ploughshares. This is shalom — the vision of the Kingdom's full arrival.",
    color: TEAL,
  },
  {
    title: "Shalom Is Already/Not Yet",
    desc: "Christ is our peace (Ephesians 2:14). He has reconciled us to God and to each other — this is present shalom. But the full shalom awaits the new creation — the groaning of Romans 8 is the world longing for full shalom.",
    color: PURPLE,
  },
  {
    title: "Working for Shalom",
    desc: "Jeremiah tells the exiles to 'seek the welfare (shalom) of the city' (Jeremiah 29:7). Kingdom citizens work for the partial realization of shalom now — justice, reconciliation, healing, creation care — as anticipations of the final shalom.",
    color: GOLD,
  },
];

const SEEKING_KINGDOM = [
  "Reorient your values: what do you most want? Does the Kingdom come before career, comfort, and security in your actual daily choices?",
  "Practice the disciplines of the Kingdom: prayer, fasting, generosity, hospitality, Sabbath — these are 'Kingdom practices' that form you into Kingdom citizens.",
  "Seek justice: the Kingdom confronts unjust systems, cares for the poor and vulnerable, and challenges oppression wherever it is found.",
  "Live counter-culturally: Kingdom citizens resist the values of the surrounding culture that contradict the Kingdom — consumerism, individualism, violence, nationalism.",
  "Serve your community: seek the shalom of your neighborhood, your city, your workplace — as an expression of Kingdom values and a sign of the coming order.",
  "Preach the gospel: the announcement that Jesus is King and invites repentance and faith is the most fundamental Kingdom act. The Kingdom arrives where the King is welcomed.",
];

const VIDEOS = [
  { videoId: "aqQwCpuNfKM", title: "The Kingdom of God Explained — The Bible Project" },
  { videoId: "K0VJyiEYAOU", title: "Already and Not Yet — N.T. Wright" },
  { videoId: "j5Xpf3-n-RY", title: "Seeking the Kingdom First — Tim Keller" },
  { videoId: "rXr_xFk8GCo", title: "Shalom: The Vision of the Kingdom" },
];

export default function KingdomOfGodGuidePage() {
  const [tab, setTab] = useLocalStorage("vine_king_tab", "overview");
  const [journal, setJournal] = useLocalStorage("vine_king_journal", "");

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>👑</div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>The Kingdom of God</h1>
          <p style={{ color: MUTED, maxWidth: 620, margin: "0 auto" }}>
            Jesus&apos;s most central theme — the Kingdom of God is both the heart of his teaching and the goal of history. What is it, how is it here, and how do we seek it?
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "0.5rem 1.1rem", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", background: tab === t.id ? GREEN : CARD, color: tab === t.id ? "#fff" : MUTED, transition: "all 0.2s" }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>What Is the Kingdom?</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The Kingdom of God is the reign of God — his sovereign rule over all things. It is not primarily a territory but a dynamic reality: wherever God&apos;s will is done and his authority is acknowledged, there the Kingdom is. Jesus came announcing that this Kingdom was arriving in and through him.</p>
            </div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Key Scriptures</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {KINGDOM_TEXTS.map(t => (
                <div key={t.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem" }}>
                  <div style={{ fontWeight: 700, color: GREEN, marginBottom: "0.25rem" }}>{t.ref}</div>
                  <p style={{ fontStyle: "italic", color: TEXT, margin: "0 0 0.25rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ALREADY / NOT YET */}
        {tab === "already-not-yet" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: TEAL }}>The Already / Not Yet Tension</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>The decisive insight of 20th-century NT scholarship (Oscar Cullmann, George Ladd) is that the Kingdom is both present and future — already inaugurated in Christ&apos;s first coming, but not yet consummated until his return. Christians live in the tension of this overlap.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {ALREADY_NOT_YET.map(d => (
                <div key={d.dimension} style={{ background: CARD, border: `1px solid ${d.color}40`, borderRadius: 12, padding: "1.25rem", borderTop: `4px solid ${d.color}` }}>
                  <div style={{ fontWeight: 700, color: d.color, marginBottom: "0.75rem", fontSize: "1.1rem" }}>{d.dimension}</div>
                  <ul style={{ color: MUTED, paddingLeft: "1.2rem", margin: 0, lineHeight: 1.8, fontSize: "0.9rem" }}>
                    {d.examples.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PARABLES */}
        {tab === "parables" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GOLD }}>Kingdom Parables</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Jesus taught about the Kingdom almost exclusively through parables. Each parable is a compressed worldview — it draws you in, then reverses your expectations. They are not illustrations of abstract truths; they are themselves the Kingdom&apos;s mode of arrival.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {PARABLES.map(p => (
                <div key={p.parable} style={{ background: CARD, border: `1px solid ${p.color}40`, borderRadius: 10, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <div style={{ fontWeight: 700, color: p.color, marginBottom: "0.4rem" }}>{p.parable}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.teaching}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHURCH & KINGDOM */}
        {tab === "church-kingdom" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>The Church and the Kingdom</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CHURCH_KINGDOM_VIEWS.map(v => (
                <div key={v.view} style={{ background: CARD, border: `1px solid ${v.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${v.color}` }}>
                  <div style={{ fontWeight: 700, color: v.color, marginBottom: "0.4rem" }}>{v.view}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* POLITICS */}
        {tab === "politics" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Kingdom and Politics</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {POLITICS_POINTS.map(p => (
                <div key={p.title} style={{ background: CARD, border: `1px solid ${p.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${p.color}` }}>
                  <div style={{ fontWeight: 700, color: p.color, marginBottom: "0.4rem" }}>{p.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SHALOM */}
        {tab === "shalom" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Shalom: The Kingdom&apos;s Vision</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {SHALOM_CONTENT.map(s => (
                <div key={s.title} style={{ background: CARD, border: `1px solid ${s.color}40`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${s.color}` }}>
                  <div style={{ fontWeight: 700, color: s.color, marginBottom: "0.4rem" }}>{s.title}</div>
                  <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SEEKING */}
        {tab === "seeking" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${GREEN}40`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem", borderLeft: `4px solid ${GREEN}` }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: GREEN }}>Seeking the Kingdom First</h2>
              <p style={{ color: MUTED, lineHeight: 1.7 }}>Jesus commands it clearly: &ldquo;Seek first the kingdom of God and his righteousness&rdquo; (Matthew 6:33). This is the orienting commitment of Christian life. Here are concrete ways to live it out:</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {SEEKING_KINGDOM.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ background: GREEN, color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</div>
                  <p style={{ color: TEXT, margin: 0, lineHeight: 1.7 }}>{s}</p>
                </div>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginTop: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, color: GREEN, marginBottom: "0.5rem" }}>Personal Reflection</h3>
              <textarea value={journal} onChange={e => setJournal(e.target.value)}
                placeholder="What would it look like to seek the Kingdom first in your specific life right now? What is competing with the Kingdom for first place?"
                style={{ width: "100%", minHeight: 160, background: BG, color: TEXT, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              <div style={{ color: MUTED, fontSize: "0.8rem", marginTop: "0.5rem" }}>Saved automatically.</div>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div>
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", color: TEXT }}>Video Teaching</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "1.25rem" }}>
              {VIDEOS.map(v => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
