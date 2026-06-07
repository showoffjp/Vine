"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Loneliest Loneliness",
    verse: "Genesis 2:18",
    text: "It is not good for the man to be alone. God said this about a man in a perfect world, in the garden, before sin. The loneliness of marriage — where you sleep beside someone and still feel utterly alone — is in some ways more acute than the loneliness of singleness. Because you are supposed to be known. The ache is the gap between the promise of marriage and its daily reality.",
  },
  {
    title: "Intimacy Is Not Identical to Sex",
    verse: "1 Samuel 18:1",
    text: "After David had finished talking with Saul, Jonathan became one in spirit with David, and he loved him as himself. The Scripture's model for deep knowing — psyche, soul, interior life — is not reserved for marriage. But marriage was designed to be a primary place for this kind of knowing. When it is not, something real is missing. Naming that absence is not a betrayal of the spouse; it is the beginning of honest conversation.",
  },
  {
    title: "The Marriage You Have Is Worth Working On",
    verse: "1 Corinthians 13:7",
    text: "Love bears all things, believes all things, hopes all things, endures all things. The word Paul uses — hypomenei — means to remain under, to sustain, to stay. The love Paul describes is not passive resignation. It is active, costly, sustained commitment to a person and a covenant that is not currently what it could be. This is not an exhortation to martyrdom. It is an invitation to keep trying.",
  },
  {
    title: "Contempt Is the True Enemy of Marriage",
    verse: "Ephesians 4:29",
    text: "Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen. The research of John Gottman found that contempt — the sense that one's spouse is beneath them — is the single strongest predictor of divorce. Paul's instruction to build up is the antidote. This is not naive. It requires choosing words that serve connection rather than distance.",
  },
  {
    title: "God Is Present in the Distance",
    verse: "Psalm 34:18",
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit. The person who is lonely inside their marriage — who longs for genuine connection with the person they share a bed with — is brokenhearted in a specific and underacknowledged way. God is present in this specific loneliness as surely as in any other.",
  },
];

const voices = [
  {
    id: 1,
    name: "John & Julie Gottman",
    role: "Researchers and authors, Eight Dates",
    quote: "Loneliness in marriage comes from accumulated small moments of turning away rather than turning toward. Connection is also rebuilt in small moments.",
    bio: "John and Julie Gottman's decades of research on couples have identified the specific micro-behaviors that create and destroy intimacy — and what couples who feel lonely inside their marriage can actually do to change the pattern.",
  },
  {
    id: 2,
    name: "Paul David Tripp",
    role: "Author, What Did You Expect?",
    quote: "Every marriage is a relationship between two sinners. The loneliness you feel in your marriage is partly about your spouse's failures and partly about your own. The gospel applies to both.",
    bio: "Paul David Tripp writes with pastoral realism about marriage as it actually is — a relationship between two broken people who need grace — and what the gospel offers for marriages that have drifted into disconnection.",
  },
  {
    id: 3,
    name: "Lore Ferguson Wilbert",
    role: "Author, Handle with Care",
    quote: "The loneliest I have ever been was in a room full of people who supposedly loved me. Marriage can do that. It is a particular kind of pain.",
    bio: "Lore Ferguson Wilbert writes with unusual honesty about desire, loneliness, embodiment, and the gap between what relationships promise and what they deliver — including in marriage.",
  },
  {
    id: 4,
    name: "Gary Thomas",
    role: "Author, Sacred Marriage",
    quote: "If you want a marriage where you are never lonely, you may be expecting more from your spouse than any human being can deliver. But if you want a marriage that is less lonely than it is, that is within reach.",
    bio: "Gary Thomas's theology of marriage as sanctification rather than happiness is particularly useful for couples in lonely marriages — offering a framework that acknowledges the disappointment without endorsing resignation.",
  },
];

const practices = [
  {
    icon: "🗣️",
    title: "Name the Loneliness to Your Spouse",
    text: "The conversation most lonely married people are not having is: 'I feel lonely in our marriage. I miss you. I want to be closer to you.' This conversation is vulnerable and risky. It is also the most likely to create change. Starting with 'I feel lonely' rather than 'you never...' changes the entire dynamic.",
  },
  {
    icon: "📅",
    title: "Schedule Non-Transactional Time",
    text: "Most couple interaction in busy marriages is transactional: logistics, children, finances, scheduling. Scheduled, protected time with no agenda except each other — a weekly date, a morning check-in, a no-phone dinner — creates the conditions in which genuine connection becomes possible.",
  },
  {
    icon: "🧭",
    title: "Seek Marriage Counseling Before Crisis",
    text: "Marriage counseling is most effective before contempt has fully set in. The couple that is lonely but still curious about each other, still reaching toward each other, still willing to work — is much more treatable than the couple that has given up. Do not wait for the crisis to seek help.",
  },
  {
    icon: "📖",
    title: "Ask Different Questions",
    text: "The Gottmans identify 'open-ended questions about interior life' as one of the primary tools for rebuilding knowledge of a spouse. What are you worried about these days? What has been giving you joy? What do you miss? What does God seem to be saying to you? These are different from logistical questions.",
  },
  {
    icon: "🤲",
    title: "Pray Together — Even Awkwardly",
    text: "Couples who pray together report significantly higher marital satisfaction, partly because prayer is inherently vulnerable. Even a two-sentence prayer at bedtime opens interior life in a way that conversation alone may not. The awkwardness of praying together is itself worth working through.",
  },
  {
    icon: "🔍",
    title: "Examine Your Own Contribution",
    text: "Loneliness in marriage is rarely entirely one spouse's creation. Without self-condemnation, examine what behaviors of yours may be creating distance: avoidance, criticism, sarcasm, distraction with screens or work. Change is most often possible where you have the most influence — which is yourself.",
  },
];

const scriptures = [
  { verse: "Ecclesiastes 4:9", text: "Two are better than one, because they have a good return for their labor." },
  { verse: "1 Corinthians 13:7", text: "Love bears all things, believes all things, hopes all things, endures all things." },
  { verse: "Proverbs 18:21", text: "The tongue has the power of life and death, and those who love it will eat its fruit." },
  { verse: "Ephesians 4:29", text: "Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen." },
  { verse: "Song of Solomon 3:4", text: "I found the one my heart loves. I held him and would not let him go." },
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
];

type LMCEntry = { id: string; date: string; honest: string; toward: string; prayer: string };

export default function LonelinessMarriedChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LMCEntry[]>([]);
  const [honest, setHonest] = useState("");
  const [toward, setToward] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_lonelinesmarriedchristj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!honest.trim()) return;
    const e: LMCEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), honest, toward, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_lonelinesmarriedchristj_entries", JSON.stringify(next));
    setHonest(""); setToward(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_lonelinesmarriedchristj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: GREEN, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Loneliness in Marriage</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For Christians who are lonely inside their marriage — navigating the gap between the promise of deep knowing and the reality of daily disconnection, and finding a path back toward each other.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://www.focusonthefamily.com/marriage" style={{ color: "#fca5a5" }}>focusonthefamily.com</a> · <a href="https://www.gottman.com" style={{ color: "#fca5a5" }}>gottman.com</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Honest account of the loneliness</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="When it is most acute, what creates it, what the distance feels like..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>One thing I will do to turn toward my spouse this week</label>
                <textarea value={toward} onChange={e => setToward(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="A question to ask, a conversation to have, a plan to make..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer for your marriage</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="For connection, for courage to reach out, for the marriage to become what it could be..." />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Naming the loneliness is the beginning of changing it.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.honest && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>The loneliness</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.honest}</p></>}
                {e.toward && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Turning toward</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.toward}</p></>}
                {e.prayer && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>What Did You Expect? — Paul David Tripp</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Paul David Tripp on the gap between what couples expect from marriage and what they find — and what the gospel offers for the disappointment.</p>
              <VideoEmbed videoId="kfcVPh2VDhQ" title="What Did You Expect Paul David Tripp" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Turning Toward — Gottman on Couples Connection</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>The Gottman research on the micro-behaviors that build and destroy marital intimacy — and what couples can specifically do to rebuild connection.</p>
              <VideoEmbed videoId="G5gLrHClpKQ" title="Turning Toward Gottman on Couples Connection" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Sacred Marriage — Gary Thomas</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Gary Thomas on marriage as a place of sanctification — and what it looks like to love a spouse toward whom connection has grown difficult.</p>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Sacred Marriage Gary Thomas" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Praying Together as a Couple</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Why praying together creates intimacy — and practical guidance for couples who have never prayed together or have let the practice fall away.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Praying Together as a Couple" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
