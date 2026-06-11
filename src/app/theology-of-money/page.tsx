"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GOLD = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type TMEntry = { id: string; date: string; conviction: string; step: string; trust: string };

const theology = [
  { title: "Jesus Talked About Money More Than Heaven or Hell — and Why That Matters", verse: "Matt 6:19-21", text: "Approximately 11 of 39 parables deal with money and possessions. Luke's Gospel has the strongest concentration of wealth-and-poverty material in the Synoptics. The Sermon on the Mount addresses money directly (Matt 6:19-24, 6:33). Jesus's statement that you cannot serve both God and money is not an aside — it is a foundational claim about the spiritual nature of money. Money is one of the primary competitors for the human heart's allegiance, which is why Jesus returns to it so often." },
  { title: "Mammon — What Jesus Meant by the Alternative Master", verse: "Matt 6:24", text: "No one can serve two masters; you cannot serve both God and mammon. Mammon is not simply money — it is the spirit of money, the trust-system that money creates. Wealth builds a rival security system: I am safe because I have resources. The gospel directly challenges this: my security is in God, not in what I have accumulated. The rich young ruler is the case study of a person whose security is in his possessions (Mark 10:17-22) — he goes away sad because what Jesus asks costs him the very thing his identity rests on." },
  { title: "Enough — the Theology of Contentment and the Sin of Covetousness", verse: "Phil 4:11-12", text: "I have learned to be content in whatever state I am. Contentment is learned, not given. The tenth commandment (do not covet) is the only commandment that addresses the interior life exclusively. Covetousness is structural to consumer culture — the economy runs on it. What it means to have enough is therefore a radical question. The person who, in a consumer society, is genuinely satisfied is a powerful witness. The prosperity gospel is the theological opposite of this: it promises more as the sign of God's favor rather than contentment as the fruit of faith." },
  { title: "The Tithe and Beyond — What Christian Giving Actually Looks Like", verse: "2 Cor 9:6-7", text: "The tithe is the floor, not the ceiling. The New Testament generosity ethic is more demanding than the Old Testament tithe. 2 Cor 8-9 describes cheerful giving according to what one has, and beyond what one has — the Macedonian churches gave out of extreme poverty. The first-century church actually practiced sharing with anyone who had need (Acts 2:44-45). The American evangelical average giving of approximately 2.5% falls far short of this standard, suggesting that many believers have never seriously engaged the New Testament's teaching on money." },
  { title: "Wealth as Stewardship — the Parable of the Talents and Radical Generosity", verse: "Matt 25:14-30", text: "In the parable of the talents, to each servant is given according to their ability. The servant who buries his talent out of fear is condemned. Wealth entrusted to us is a stewardship — we will give account for what we did with it. Faithful stewardship looks like not merely preserving but multiplying for kingdom purposes. The theology of generosity is joyful participation in God's work rather than reluctant compliance with a percentage requirement. Generosity transforms the giver, not merely the recipient (Luke 21:1-4)." },
];

const voices = [
  { name: "Randy Alcorn", role: "Money, Possessions, and Eternity", quote: "Money is the most quantifiable indicator of what we actually value. Where we spend it, where we give it, and where we hoard it is a precise map of the heart. Giving breaks the power of money over us and realigns the heart with heaven — which is why Jesus connected treasure and heart in the same sentence.", bio: "Alcorn writes from a conviction that eternal perspective transforms financial decisions. His work is the most comprehensive evangelical treatment of money and possessions, covering everything from the theology of stewardship to practical giving strategies. He famously gives away all royalties from his books." },
  { name: "Richard Foster", role: "Freedom of Simplicity", quote: "Simplicity is a liberation, not a diminishment. The person who is free from the compulsion to acquire and consume has recovered a freedom that consumer culture cannot understand. Consumer culture is not a neutral backdrop to Christian life — it is the primary spiritual opponent of the simple, undivided heart that Jesus calls us to.", bio: "Foster's Celebration of Discipline introduced a generation of evangelicals to the classic spiritual disciplines, including simplicity. Freedom of Simplicity develops the theology and practice of simplicity at greater length, arguing that it is not asceticism for its own sake but the clearing of spiritual space for what actually matters." },
  { name: "Craig Blomberg", role: "Neither Poverty nor Riches", quote: "The biblical theology of wealth resists both the prosperity gospel and the poverty gospel. Wealth is neither inherently virtuous nor inherently sinful. It is always a stewardship with moral weight — and the moral weight increases with the amount entrusted.", bio: "Blomberg's Neither Poverty nor Riches is the most rigorous biblical-theological survey of the Bible's teaching on wealth and poverty. He traces the theme from creation through the wisdom literature, the prophets, the Gospels, and the epistles, demonstrating that the Bible holds a nuanced position that neither celebrates wealth nor condemns it." },
];

const practices = [
  "Giving audit: what percentage of income goes to the kingdom, and what does that number reveal about your actual values?",
  "Simplicity practice: a month of buying only what is necessary and redirecting the rest to giving",
  "Debt freedom plan: treating consumer debt as a spiritual issue as well as a financial one",
  "Generosity habit: building a specific giving practice into every month (recurring, not occasional)",
  "The thousand-year question: in 1000 years, what will matter about how I spent and gave my money?",
];

const scriptures = [
  { verse: "Matt 6:24", text: "No one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money." },
  { verse: "Luke 12:15", text: "Take care, and be on your guard against all covetousness, for one's life does not consist in the abundance of his possessions." },
  { verse: "1 Tim 6:17-19", text: "As for the rich in this present age, charge them not to be haughty, nor to set their hopes on the uncertainty of riches, but on God, who richly provides us with everything to enjoy." },
  { verse: "Prov 11:24-25", text: "One gives freely, yet grows all the richer; another withholds what he should give, and only suffers want. Whoever brings blessing will be enriched, and one who waters will himself be watered." },
  { verse: "2 Cor 9:7", text: "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver." },
  { verse: "Luke 16:13", text: "No servant can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money." },
];

const videos = [
  { id: "IMSdU0mFTPk", title: "What Does the Bible Really Say About Money?" },
  { id: "7KPxCxZwPnM", title: "Mammon — the Spiritual Power of Wealth" },
  { id: "kPRbp2x2AXQ", title: "Generous Living and the Theology of Enough" },
  { id: "TiXLFibj0GY", title: "Stewardship, Giving, and Eternal Perspective" },
];

export default function TheologyOfMoneyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_theomoney_entries") ?? "[]"); } catch { return []; }
  });
  const [jConviction, setJConviction] = useState("");
  const [jStep, setJStep] = useState("");
  const [jTrust, setJTrust] = useState("");

  useEffect(() => { localStorage.setItem("vine_theomoney_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jConviction.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), conviction: jConviction, step: jStep, trust: jTrust }, ...prev]);
    setJConviction(""); setJStep(""); setJTrust("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Faith &amp; Culture</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Theology of Money</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>What Jesus and the Bible teach about wealth, greed, and giving — why money is a spiritual issue, what the alternative master of mammon means, and what faithful stewardship actually looks like.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? GOLD : BORDER}`, background: tab === t.id ? GOLD + "22" : "transparent", color: tab === t.id ? GOLD : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: GOLD, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: GOLD, fontWeight: 700, fontSize: "1rem", marginTop: 2 }}>{i + 1}.</span>
                <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>{p}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: GOLD, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: GOLD, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Money and Your Faith</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to engage honestly and prayerfully with what God is doing in your finances.</p>
            {[
              { label: "Conviction — a conviction about money that God is working in you", val: jConviction, set: setJConviction },
              { label: "Step — a specific financial step you are taking", val: jStep, set: setJStep },
              { label: "Trust — what you are trusting God with in your finances", val: jTrust, set: setJTrust },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: GOLD, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: GOLD }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GOLD, fontWeight: 600 }}>Conviction:</span> {e.conviction}</p>
                      {e.step && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GOLD, fontWeight: 600 }}>Step:</span> {e.step}</p>}
                      {e.trust && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: GOLD, fontWeight: 600 }}>Trust:</span> {e.trust}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: GOLD }}>{v.title}</h3>
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
