"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ROSE = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

type MPEntry = { id: string; date: string; topic: string; discovery: string; question: string };

const theology = [
  { title: "Marriage Is Not About Your Happiness — the Sanctification Frame", verse: "Eph 5:25-28", text: "Gary Thomas's central thesis in Sacred Marriage is that God designed marriage primarily to make you holy, not happy. Happiness is a byproduct of holiness. The couple who enters marriage expecting it to be primarily a fulfillment vehicle will be disillusioned within the first year. The couple who enters expecting it to be a formation crucible will be equipped for what marriage actually is. This reframe changes everything in premarital counseling: instead of asking whether your partner makes you happy, you ask whether this relationship is producing holiness. The hard moments in marriage are not failures of the institution — they are the institution working as designed." },
  { title: "The Leave and Cleave Imperative — What Genesis 2:24 Actually Requires", verse: "Gen 2:24", text: "Genesis 2:24 instructs a man to leave his father and mother and cleave to his wife, and the two shall become one flesh. The word leave (azab in Hebrew) is a strong word — it means to abandon or forsake. Cleave (dabaq) means to cling with intensity. The leaving is as important as the cleaving, and most premarital counseling under-addresses it. The practical significance is enormous: in-law triangulation, financial enmeshment with parents, and the failure to form a new primary loyalty are among the leading causes of early marital breakdown. Premarital work must address the leaving as explicitly as the joining." },
  { title: "The Five Love Languages and the Theology of Knowing Your Spouse", verse: "1 Pet 4:8", text: "Gary Chapman's framework is not directly biblical, but it is theologically compatible with the scriptural call to love one another well. The basic concept is that people give and receive love in different primary ways: words of affirmation, acts of service, receiving gifts, quality time, and physical touch. The spiritual significance is that love must be translated, not merely intended. What feels like love to you may not feel like love to your partner. Knowing your spouse's primary love language is an act of servanthood — it requires you to move beyond your own instincts about how love is expressed and toward what your partner actually needs." },
  { title: "Sexual Theology for the Engaged Couple — Preparing for Oneness", verse: "1 Cor 7:3-5", text: "Paul writes in 1 Corinthians 7:3-5 that the husband and wife each owe the other sexual fulfillment, and neither should deprive the other except by mutual agreement. The Church's historic unhelpfulness about sex has left married Christians unprepared. Song of Solomon celebrates erotic love within covenant without embarrassment. What premarital sex does to the formation of trust and desire within marriage is well-documented. The wedding night realistically is rarely what cultural expectations produce. Preparing well for physical intimacy — with honest conversation, realistic expectations, and a theology that affirms rather than merely tolerates sexuality within marriage — is a spiritual act, not merely a practical one." },
  { title: "The Conflict That Will Come — Preparing for What No One Tells You", verse: "Prov 15:1", text: "The first year of marriage is statistically the most conflict-intensive. Every couple fights — the question is whether they fight well or destructively. John Gottman's research identified four patterns he calls the four horsemen of the apocalypse: contempt, criticism, defensiveness, and stonewalling. These four patterns are the strongest predictors of marital dissolution. What healthy conflict looks like — pursuing understanding rather than winning, taking breaks before flooding, returning to repair — can be learned and practiced. The couple who establishes those patterns before marriage rather than after is significantly better equipped for what is coming." },
];

const voices = [
  { name: "Gary Thomas", role: "Sacred Marriage", quote: "What if God designed marriage to make us holy more than to make us happy? What if God intentionally allows the challenges of marriage to call us to spiritual formation? This does not make marriage less wonderful — it makes it more purposeful, more intentional, and ultimately more satisfying than a relationship built only on mutual comfort could ever be.", bio: "Sacred Marriage reframes the entire institution. Thomas argues that the friction of marriage — the places where two sinners living together inevitably clash — is the precise mechanism by which God forms us. Marriage is a spiritual discipline designed to reveal the self and produce Christlikeness. This framing has changed how tens of thousands of couples have approached their preparation and their early years." },
  { name: "John Gottman", role: "The Seven Principles for Making Marriage Work", quote: "Happy marriages are based on a deep friendship. By this I mean a mutual respect for and enjoyment of each other's company. These couples tend to know each other intimately — they are well-versed in each other's likes, dislikes, personality quirks, hopes, and dreams. They have an abiding regard for each other and express this fondness not just in the big ways but in little ways day to day.", bio: "Gottman's decades of research at the Love Lab have identified with remarkable precision what separates marriages that flourish from those that dissolve. His findings are largely compatible with Christian values: friendship, mutual knowledge, expressed affection, and the capacity to repair after conflict. The Seven Principles is one of the most evidence-based books a premarital couple can read alongside their theological formation." },
  { name: "Kathy Keller", role: "The Meaning of Marriage (with Tim Keller)", quote: "The gospel changes both what we expect from marriage and what we give in it. The person who knows they are fully loved by God does not need their spouse to complete them — which means they are free to serve rather than consume. The cross tells us that love is not a feeling but a commitment to the other's good, even at cost to yourself. This is the love that makes marriage work.", bio: "The Meaning of Marriage, written jointly by Tim and Kathy Keller, is the most theologically rigorous popular-level treatment of Christian marriage available. Kathy's sections on the role of women and the practical navigation of marital difficulty are especially valuable. Their central thesis is that the gospel does not merely inform marriage — it transforms the kind of person capable of sustaining it." },
];

const practices = [
  { icon: "🗣️", title: "Premarital Counseling (Minimum 6 Sessions)", text: "Structured premarital counseling with a trained pastor or licensed counselor covering conflict resolution, finances, family of origin, sexuality, and faith integration. Six sessions is a minimum — eight to twelve is better. The evidence is clear that couples who complete substantive premarital counseling have significantly lower divorce rates. This is not optional preparation for a Christian wedding; it is the primary preparation." },
  { icon: "🌳", title: "Family-of-Origin Mapping", text: "Each partner maps their family system: how conflict was handled, how affection was expressed, how money was managed, what the emotional climate of the home was, what was spoken and unspoken. Most of what couples bring into marriage they received rather than chose. Understanding what you are carrying from your family system is the first step to choosing whether to carry it forward or set it down." },
  { icon: "💰", title: "Financial Transparency and Planning", text: "Full financial disclosure before the wedding: income, debts, credit scores, savings, and financial instincts. A joint budget is built. Financial values are discussed: what is money for, how do we decide on a major purchase, what does generosity look like in our household. Financial conflict is one of the top three causes of marital breakdown; it is also one of the most preventable if addressed honestly before the wedding rather than after." },
  { icon: "📅", title: "Weekly Check-In Rhythm (Pre-Wedding)", text: "Establishing a weekly intentional check-in before the wedding — fifteen to thirty minutes of structured conversation about how each person is doing emotionally, what they need, and what they are grateful for — builds the communication habit before it is desperately needed. Like any skill, communication is easier to establish in calm than in crisis. Begin the practice before the ceremony, not after." },
  { icon: "🏠", title: "Defining the Spiritual Leadership Structure", text: "The couple explicitly discusses and agrees upon the spiritual leadership structure of their future household: who leads family devotions, how decisions are made, how faith is practiced as a unit, and what role the church will play in their shared life. Leaving this undefined means it will be determined by default rather than by intention — usually during the first conflict." },
];

const scriptures = [
  { verse: "Gen 2:24", text: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh." },
  { verse: "Eph 5:25-28", text: "Husbands, love your wives, just as Christ loved the church and gave himself up for her to make her holy... husbands ought to love their wives as their own bodies." },
  { verse: "1 Cor 7:3-5", text: "The husband should fulfill his marital duty to his wife, and likewise the wife to her husband... Do not deprive each other except perhaps by mutual consent and for a time." },
  { verse: "Prov 18:22", text: "He who finds a wife finds what is good and receives favor from the LORD." },
  { verse: "Matt 19:6", text: "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate." },
  { verse: "Col 3:18-19", text: "Wives, submit yourselves to your husbands, as is fitting in the Lord. Husbands, love your wives and do not be harsh with them." },
];

const videos = [
  { id: "FBWKxYBzqwc", title: "Christian Marriage Preparation — What You Must Know" },
  { id: "Yx5n4-PJJvk", title: "The Meaning of Marriage — Tim and Kathy Keller" },
  { id: "bNVpCZI4Jy0", title: "Gottman Method — Building a Lasting Marriage" },
  { id: "lNi2G5f4Jy4", title: "Sacred Marriage — Gary Thomas on Holiness and Marriage" },
];

export default function ChristianMarriagePrepPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<MPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_marriageprep_entries") ?? "[]"); } catch { return []; }
  });
  const [jTopic, setJTopic] = useState("");
  const [jDiscovery, setJDiscovery] = useState("");
  const [jQuestion, setJQuestion] = useState("");

  useEffect(() => { localStorage.setItem("vine_marriageprep_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jTopic.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), topic: jTopic, discovery: jDiscovery, question: jQuestion }, ...prev]);
    setJTopic(""); setJDiscovery(""); setJQuestion("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Marriage &amp; Family</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Christian Marriage Preparation</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>What every couple needs to know before the wedding — the theology of covenant marriage, voices that will shape your preparation, and practices that build a strong foundation.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? ROSE : BORDER}`, background: tab === t.id ? ROSE + "22" : "transparent", color: tab === t.id ? ROSE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: ROSE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: ROSE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${ROSE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: ROSE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Preparation</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to think through your premarital journey honestly and prayerfully.</p>
            {[
              { label: "Topic — a topic you are working through in your preparation", val: jTopic, set: setJTopic },
              { label: "Discovery — something you discovered about yourself or your partner", val: jDiscovery, set: setJDiscovery },
              { label: "Question — a question you are bringing to premarital counseling", val: jQuestion, set: setJQuestion },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: ROSE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: ROSE }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ROSE, fontWeight: 600 }}>Topic:</span> {e.topic}</p>
                      {e.discovery && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: ROSE, fontWeight: 600 }}>Discovery:</span> {e.discovery}</p>}
                      {e.question && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: ROSE, fontWeight: 600 }}>Question:</span> {e.question}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: ROSE }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
