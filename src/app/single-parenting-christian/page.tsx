"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "God as Father to the Fatherless",
    verse: "Psalm 68:5",
    text: "God is 'a father to the fatherless, a defender of widows.' This promise speaks directly to single-parent households. You are not parenting alone — the God who holds the cosmos holds your children's futures and sees every sacrifice you make.",
  },
  {
    title: "Sufficient Grace for the Exhausted",
    verse: "2 Corinthians 12:9",
    text: "'My grace is sufficient for you, for my power is made perfect in weakness.' Single parenting reveals our limits daily. Yet the gospel insists that God's strength is deployed precisely in the moments when yours runs out — not as reward, but as gift.",
  },
  {
    title: "The Community of the Body",
    verse: "1 Corinthians 12:25–26",
    text: "The body of Christ is designed to 'have equal concern for each other' so that no member suffers alone. A single parent struggling in isolation is a failure of the whole body — and an opportunity for the church to become what it was made to be.",
  },
  {
    title: "Identity Beyond Role",
    verse: "Galatians 3:28",
    text: "In Christ, the divisions that define us in the world — married, single, divorced, widowed — do not define our worth before God. You are 'clothed with Christ,' not defined by your marital status or by your family configuration.",
  },
  {
    title: "Faithful Parenting and God's Sovereignty",
    verse: "Deuteronomy 6:6–7",
    text: "The call to pass on faith to children belongs to you — wherever you are. Teaching and modeling love for God is not suspended by hard circumstances. God receives the faithful, tired effort of a single parent and works through it.",
  },
];

const voices = [
  {
    id: 1,
    name: "Lisa Harper",
    role: "Adoptive Single Mother & Bible Teacher",
    quote: "God doesn't give us what we can handle. He gives us what he will handle through us.",
    bio: "Lisa Harper adopted a daughter from Haiti as a single woman and writes candidly about the gap between the family she imagined and the one she has. Her theology is grounded in God's faithfulness to parents who feel perpetually in over their heads.",
  },
  {
    id: 2,
    name: "Ron Deal",
    role: "Family Therapist & Stepfamily Expert",
    quote: "Single parents carry double the weight with half the resources — the church must become the village.",
    bio: "Ron Deal has worked with thousands of single-parent and blended families. He emphasizes that community is not optional for single parents — it is a theological necessity and a practical lifeline.",
  },
  {
    id: 3,
    name: "Lore Ferguson Wilbert",
    role: "Author & Theologian",
    quote: "Faithfulness in the ordinary — the packed lunches, the night terrors, the homework — is its own form of worship.",
    bio: "Lore writes about embodied life and ordinary faithfulness. She affirms that the relentless daily work of parenting alone is not less spiritual than mountaintop moments — it is where most of sanctification happens.",
  },
  {
    id: 4,
    name: "Tony Merida",
    role: "Pastor & Author, James 1:27",
    quote: "Pure religion cares for orphans and widows — and that includes the single parent down the street from your church.",
    bio: "Tony Merida has championed the church's responsibility to single-parent families through adoption, foster care, and practical support. He argues that James 1:27 demands the church be a family for those whose families are incomplete.",
  },
];

const practices = [
  {
    icon: "🙏",
    title: "Morning Anchor Prayer",
    text: "Before the household chaos begins, take two minutes in silence and speak one honest prayer: 'Lord, I cannot do today without you.' This is not performance — it is survival theology practiced daily.",
  },
  {
    icon: "📋",
    title: "Weekly Council with Your Children",
    text: "Hold a brief weekly family meeting — even with small children. Let them name something hard and something good from the week. This builds resilience, communication, and shared ownership of family life.",
  },
  {
    icon: "🤝",
    title: "Build Your Village Intentionally",
    text: "Identify three people who can be on-call for you: a neighbor, a church member, a friend. Ask specifically for what you need — pickup, a meal, an emergency contact. Naming the village makes it real.",
  },
  {
    icon: "📖",
    title: "Bedtime Scripture Ritual",
    text: "Choose one verse per week and speak it over your children at bedtime. This does not require theological training — just repetition. Faith is transmitted through the body and the voice, not only through perfect explanations.",
  },
  {
    icon: "✋",
    title: "Receive Help Without Shame",
    text: "Single parents often refuse help out of pride or exhaustion. Practice saying yes. When someone offers to bring dinner or watch children, accept it as grace — because it is. The body of Christ functions through giving and receiving.",
  },
  {
    icon: "📓",
    title: "End-of-Week Gratitude Reflection",
    text: "On Friday or Saturday, write down two things you did well this week as a parent. Not perfectly — well. God honors faithful effort. This counters the inner critic that names only failures.",
  },
];

const scriptures = [
  { verse: "Psalm 68:5", text: "Father to the fatherless, defender of widows — this is God, whose dwelling is holy." },
  { verse: "Isaiah 40:11", text: "He tends his flock like a shepherd: He gathers the lambs in his arms and carries them close to his heart; he gently leads those that have young." },
  { verse: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness." },
  { verse: "Philippians 4:19", text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus." },
  { verse: "Lamentations 3:22–23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Proverbs 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
];

type SPEntry = { id: string; date: string; hard: string; gift: string; prayer: string };

export default function SingleParentingChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SPEntry[]>([]);
  const [hard, setHard] = useState("");
  const [gift, setGift] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_singleparentingchristj_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!hard.trim() && !gift.trim() && !prayer.trim()) return;
    const entry: SPEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      hard: hard.trim(),
      gift: gift.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_singleparentingchristj_entries", JSON.stringify(updated));
    setHard(""); setGift(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function deleteEntry(id: string) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_singleparentingchristj_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>👨‍👧‍👦</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: TEXT, marginBottom: "0.5rem" }}>
            Single Parenting & Christian Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
            For those raising children alone — carrying the weight, finding grace, and discovering
            that God provides what the family calendar cannot.
          </p>
        </div>

        {/* Crisis box */}
        <div style={{ background: "#1a0a0a", border: "1px solid #5a2020", borderRadius: 8, padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ color: "#f87171", fontWeight: "bold", margin: "0 0 0.5rem" }}>If you are in crisis:</p>
          <p style={{ color: MUTED, margin: 0, fontSize: "0.9rem" }}>
            988 Suicide & Crisis Lifeline — call or text <strong style={{ color: TEXT }}>988</strong> |{" "}
            <a href="https://www.singleparentadvocate.org" style={{ color: GREEN }}>singleparentadvocate.org</a> |{" "}
            <a href="https://www.focusonthefamily.com/parenting/single-parenting" style={{ color: GREEN }}>focusonthefamily.com</a> |{" "}
            Crisis Text Line: text <strong style={{ color: TEXT }}>HOME</strong> to <strong style={{ color: TEXT }}>741741</strong>
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: 6,
                border: `1px solid ${tab === t ? GREEN : BORDER}`,
                background: tab === t ? GREEN : CARD,
                color: TEXT,
                cursor: "pointer",
                fontSize: "0.875rem",
                textTransform: "capitalize",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Theology */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", fontWeight: "bold", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: 1 }}>{item.verse}</div>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Voices */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <h3 style={{ color: TEXT, fontSize: "1.1rem", margin: "0 0 0.25rem" }}>{v.name}</h3>
                <div style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic" }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {/* Practices */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ color: TEXT, fontSize: "1rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, margin: 0, lineHeight: 1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Scripture */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem" }}>
                <div style={{ color: GREEN, fontWeight: "bold", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {/* Journal */}
        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.25rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEXT, margin: "0 0 1rem" }}>Today&apos;s Reflection</h3>
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What felt hardest today as a parent?</label>
              <textarea
                value={hard}
                onChange={(e) => setHard(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>What is one gift — however small — in your family today?</label>
              <textarea
                value={gift}
                onChange={(e) => setGift(e.target.value)}
                rows={2}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <label style={{ color: MUTED, fontSize: "0.85rem" }}>A prayer for your children this week:</label>
              <textarea
                value={prayer}
                onChange={(e) => setPrayer(e.target.value)}
                rows={3}
                style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.5rem", marginTop: "0.25rem", marginBottom: "1rem", resize: "vertical", fontFamily: "Georgia, serif", boxSizing: "border-box" }}
              />
              <button
                onClick={saveEntry}
                style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 6, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}
              >
                {saved ? "Saved" : "Save Entry"}
              </button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {entries.map((e) => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ color: MUTED, fontSize: "0.8rem" }}>{e.date}</span>
                      <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                    </div>
                    {e.hard && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Hard: </span>{e.hard}</p>}
                    {e.gift && <p style={{ color: TEXT, margin: "0 0 0.5rem", fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Gift: </span>{e.gift}</p>}
                    {e.prayer && <p style={{ color: TEXT, margin: 0, fontSize: "0.9rem" }}><span style={{ color: MUTED }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Videos */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <VideoEmbed videoId="G5gLrHClpKQ" title="God's Grace for Single Parents" />
            <VideoEmbed videoId="NnGBhG03g4M" title="Finding Strength When You're Parenting Alone" />
            <VideoEmbed videoId="eBl7gT7gQ6e" title="The Church as Family for Single Parent Households" />
            <VideoEmbed videoId="mC-zw0zCCtg" title="Scripture and Prayer for the Exhausted Parent" />
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
