"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Loneliness Was the First Thing God Called Not Good",
    verse: "Genesis 2:18",
    text: "It is not good for the man to be alone. God said this in a perfect world, before sin. Loneliness is not a moral failure. It is not a consequence of insufficient faith. It is the human condition responding to how we were made — for connection, for community, for belonging. When loneliness is chronic and unmet, it is a real and serious suffering that God names as the first not-good.",
  },
  {
    title: "The Church Has Not Always Been the Answer It Should Be",
    verse: "1 Corinthians 12:25-26",
    text: "There should be no division in the body, but that its parts should have equal concern for each other. If one part suffers, every part suffers with it. The single adult Christian who sits alone at the coffee hour, who has no one to call in a crisis, who watches families stream to Sunday lunches while they drive home alone — is a body-of-Christ failure, not a personal failure. The church is called to equal concern. Many churches have not practiced it.",
  },
  {
    title: "Jesus Was Single and He Knew Loneliness",
    verse: "Isaiah 53:3",
    text: "He was despised and rejected by mankind, a man of suffering, and familiar with pain. Like one from whom people hide their faces he was despised, and we held him in low esteem. Jesus was unmarried. He experienced abandonment — the disciples fled, Peter denied him. His loneliness in Gethsemane was real. The companion you bring your loneliness to is one who has known the experience himself.",
  },
  {
    title: "Singleness Is Not a Waiting Room",
    verse: "1 Corinthians 7:7",
    text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Paul describes both singleness and marriage as gifts from God — not as first choice and second choice. The single Christian who has not found marriage has not missed their life. They are living their life. The loneliness they experience is real suffering — it does not mean they are in the wrong chapter.",
  },
  {
    title: "The Communion of Saints Is Your Family",
    verse: "Mark 3:34-35",
    text: "Looking at those seated in a circle around him, Jesus said, 'Here are my mother and my brothers! Whoever does God's will is my brother and sister and mother.' Jesus redefined family around covenant community rather than biology or marriage. The church is meant to be a family — not a collection of biological families attending services in parallel. When it becomes that, it fails single Christians specifically.",
  },
];

const voices = [
  {
    id: 1,
    name: "Wesley Hill",
    role: "Author, Spiritual Friendship; celibate gay Christian",
    quote: "Friendship is not the consolation prize for people who couldn't get married. It is a form of love that the New Testament treats as essential and exalted. We have impoverished ourselves by treating it as less.",
    bio: "Wesley Hill is a New Testament scholar who writes about celibacy, friendship, and the church as a community where single people are genuinely embedded in relationships of love and commitment.",
  },
  {
    id: 2,
    name: "Sam Allberry",
    role: "Author, 7 Myths About Singleness",
    quote: "The church's failure is not that it doesn't have enough programs for single people. It's that it doesn't genuinely include single people in the life of the church in the way that biological families include each other.",
    bio: "Sam Allberry is a single pastor and theologian who has written and spoken extensively about the church's structural failure to integrate single Christians into genuine community and what it would take to change.",
  },
  {
    id: 3,
    name: "Lore Ferguson Wilbert",
    role: "Author, Handle with Care",
    quote: "The loneliest people I know are not the ones without a spouse. They're the ones whose pain has no witness. The antidote to loneliness is not marriage. It's presence.",
    bio: "Lore Ferguson Wilbert writes honestly about embodiment, loneliness, desire, and the kind of presence that genuinely meets human need.",
  },
  {
    id: 4,
    name: "Rosaria Butterfield",
    role: "Author, The Gospel Comes with a House Key",
    quote: "The first task of a church that wants to meet loneliness is to open its homes. Not its programs. Its homes.",
    bio: "Rosaria Butterfield advocates for radical, ordinary hospitality as the church's primary response to loneliness — arguing that programs and events cannot substitute for the intimacy of shared meals and shared life.",
  },
];

const practices = [
  {
    icon: "🏠",
    title: "Ask for What You Need Specifically",
    text: "Most lonely single Christians wait for the community to notice and come to them. Instead: call someone and say, 'I'm having a hard week — can we have dinner Friday?' Asking specifically is not weakness; it is the courage to let someone else's presence be a gift.",
  },
  {
    icon: "📅",
    title: "Build Non-Optional Regular Rhythms",
    text: "A weekly dinner with one other person. A monthly walk with someone you trust. A bi-weekly small group that meets whether or not you feel like it. The antidote to loneliness is not waiting for spontaneous connection — it is scheduled commitment to regular presence.",
  },
  {
    icon: "🤲",
    title: "Invest in Friendship with Intention",
    text: "Friendship in adulthood requires intentional investment that people in couples sometimes do not notice they no longer need to make. Single Christians often need to be more intentional, not less, about building and maintaining friendships across different life stages and family configurations.",
  },
  {
    icon: "📣",
    title: "Name Your Experience to Your Pastor",
    text: "If your church does not see or address the loneliness of single adults, it may be because no one has named it clearly. Go to your pastor and say: 'I am lonely in this church. I need the church to be more than programs. I need to be embedded in people's lives.' This is a legitimate pastoral request.",
  },
  {
    icon: "✝️",
    title: "Receive Spiritual Direction",
    text: "A trained spiritual director meets with you regularly, listens to your experience of God and of life, and helps you notice what is happening spiritually. For the chronically lonely person, this is a form of genuine human presence and attention — and more than that, it is accompaniment in the life of faith.",
  },
  {
    icon: "🌱",
    title: "Invest in a Cause Beyond Yourself",
    text: "Chronic loneliness often turns inward. Volunteering, advocacy, service, and mentorship create natural communities of shared purpose and move the focus outward. These communities are not substitutes for friendship — but they are often the soil in which genuine friendship grows.",
  },
];

const scriptures = [
  { verse: "Genesis 2:18", text: "The Lord God said, 'It is not good for the man to be alone. I will make a helper suitable for him.'" },
  { verse: "Psalm 68:6", text: "God sets the lonely in families; he leads out the prisoners with singing." },
  { verse: "John 15:15", text: "I no longer call you servants, because a servant does not know his master's business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you." },
  { verse: "1 Corinthians 7:7", text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that." },
  { verse: "Hebrews 13:5", text: "Never will I leave you; never will I forsake you." },
  { verse: "Mark 3:34-35", text: "Looking at those seated in a circle around him, he said, 'Here are my mother and my brothers! Whoever does God's will is my brother and sister and mother.'" },
];

type CLEntry = { id: string; date: string; honest: string; one: string; prayer: string };

export default function ChronicLonelinessingleChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CLEntry[]>([]);
  const [honest, setHonest] = useState("");
  const [one, setOne] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_chroniclonelysinglechristj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!honest.trim()) return;
    const e: CLEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), honest, one, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_chroniclonelysinglechristj_entries", JSON.stringify(next));
    setHonest(""); setOne(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_chroniclonelysinglechristj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: GREEN, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Chronic Loneliness & the Single Christian</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For single Christians navigating chronic loneliness in a church that has often organized itself around biological families — and for the churches learning to become the community they were called to be.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>If you are in crisis</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://www.griefshare.org" style={{ color: "#fca5a5" }}>griefshare.org</a> · Text <strong>741741</strong>
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
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Honest account of this week's loneliness</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="When it was hardest, what triggered it, how it felt..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>One person I will reach toward this week</label>
                <textarea value={one} onChange={e => setOne(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Who, and what I will say or ask..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Speak honestly to God about what you need..." />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Your loneliness deserves a witness.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.honest && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>This week's loneliness</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.honest}</p></>}
                {e.one && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Reaching toward</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.one}</p></>}
                {e.prayer && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>7 Myths About Singleness — Sam Allberry</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Sam Allberry dismantling the myths the church has built around singleness — and what a genuinely welcoming community would look like.</p>
              <VideoEmbed videoId="LQNbUqVwVlo" title="7 Myths About Singleness Sam Allberry" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Spiritual Friendship — Wesley Hill</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Wesley Hill on recovering a robust Christian theology of friendship — and why it matters for single Christians who need genuine belonging.</p>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Spiritual Friendship Wesley Hill" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>The Gospel Comes with a House Key — Rosaria Butterfield</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Rosaria Butterfield on radical ordinary hospitality as the church's primary practice for meeting loneliness — especially for single Christians.</p>
              <VideoEmbed videoId="G5gLrHClpKQ" title="The Gospel Comes with a House Key Rosaria Butterfield" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Loneliness and the Church's Responsibility</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A theological and practical conversation about why the church has failed single Christians on loneliness — and what repair looks like.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Loneliness and the Church's Responsibility" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
