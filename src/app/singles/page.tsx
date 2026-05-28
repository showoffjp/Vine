"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const CHAPTERS = [
  {
    id: "identity",
    title: "Your Identity Is Not 'Single'",
    icon: "👤",
    color: "#10B981",
    content: "The church has often (unintentionally) communicated that marriage is the destination and singleness is the waiting room. But Paul describes singleness as a gift (1 Corinthians 7:7) and argues that it enables a particular kind of undivided devotion to God (7:32-35). Jesus himself was single. So was Paul. So were many of the greatest figures in Christian history.\n\nYour identity is not 'single' — it is 'beloved child of God, follower of Jesus, member of the body.' Singleness is a season or a calling; it is not a deficit. The church needs to recover this — both in what it teaches and in how it includes single people in full community life.",
    questions: ["What does God say about who I am — apart from my relationship status?", "Where have I absorbed the message that I am incomplete without a spouse?", "How am I being formed in this season that would be harder with the responsibilities of marriage?"],
    verse: "I say this for your own benefit, not to lay any restraint upon you, but to promote good order and to secure your undivided devotion to the Lord. — 1 Corinthians 7:35",
  },
  {
    id: "sexuality",
    title: "Sexuality, Desire & Purity",
    icon: "🔥",
    color: "#EF4444",
    content: "Sexual desire is not an enemy to be suppressed — it is a gift to be directed. The question is not 'How do I stop wanting?' but 'How do I faithfully steward desire in this season?' Paul's guidance in 1 Corinthians 7:1-9 is remarkably frank: sexual desire is normal, marriage is good, and those who cannot 'control themselves' should marry. But he also holds open the possibility of singleness with self-control as a gift.\n\nFor those committed to sexual fidelity outside of marriage, the path is not gritting your teeth through desire but filling your life with beauty, purpose, deep friendship, and physical activity — so that sexuality finds its proper place in a full life rather than becoming the consuming absence in an empty one.\n\nThis also includes honest conversation about pornography, masturbation, and romantic desire — topics the church often avoids, leaving Christians to struggle alone with shame. Community and accountability are essential.",
    questions: ["Am I processing my sexuality with anyone, or carrying it alone in shame?", "What disciplines help me steward desire well in this season?", "Am I using romantic fantasy as a substitute for real relationship — and is that serving me?"],
    verse: "Flee from sexual immorality. Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body. — 1 Corinthians 6:18",
  },
  {
    id: "loneliness",
    title: "The Gift and Burden of Solitude",
    icon: "🌙",
    color: "#3B82F6",
    content: "Loneliness and solitude are different experiences. Solitude is chosen aloneness that produces depth; loneliness is the unwanted experience of disconnection. Jesus experienced both — he regularly withdrew to pray in solitude (Luke 5:16), and he cried out 'My God, my God, why have you forsaken me?' in the most profound loneliness.\n\nMany single people experience genuine loneliness in a culture that has privatized life and broken down community structures. The church's response should be real community — not programs but genuine, inconvenient, showing-up friendship. And single people's response can be to pursue the kind of deep, intentional friendship that Scripture celebrates: David and Jonathan, Ruth and Naomi, Jesus and John.",
    questions: ["Do I have at least one person who knows my inner life well — not just my social life?", "Am I pursuing deep friendship with the same intentionality I might pursue dating?", "How can I use solitude as spiritual formation rather than just experiencing it as loneliness?"],
    verse: "A man of many companions may come to ruin, but there is a friend who sticks closer than a brother. — Proverbs 18:24",
  },
  {
    id: "dating",
    title: "Dating with Clarity",
    icon: "💑",
    color: "#F59E0B",
    content: "Modern Christian dating has inherited an awkward mix of secular dating culture and religious anxiety — leading to either no dating (paralyzed by purity culture's baggage) or all the ambiguity of secular dating without the commitment structure that makes it meaningful.\n\nSome principles that lead to health: Date with intention — not every date requires marriage potential, but you should have some sense of direction. Move toward clarity — ambiguous relationships serve neither party. Involve community — don't date in a vacuum; wise friends observing your relationship will see things you don't. Physical boundaries aren't just about sex — emotional enmeshment before commitment is equally costly.",
    questions: ["Am I pursuing clarity in my romantic relationships, or avoiding commitment in the name of 'waiting to see'?", "Who are the wise people in my life who can speak into my dating decisions?", "Am I dating with integrity toward the other person — being clear about where I am?"],
    verse: "Do not stir up or awaken love until it pleases. — Song of Solomon 2:7",
  },
  {
    id: "calling",
    title: "Called for This Season",
    icon: "🚀",
    color: PURPLE,
    content: "One of the gifts of singleness that Paul describes is the capacity to give oneself fully to God's mission without the legitimate pulls of a spouse and family (1 Cor 7:32-34). Many of the most significant movements in Christian history were led by single people whose freedom and focus made possible what married life would not have allowed.\n\nThis is not to say married people can't serve God fully — they absolutely can. But there is a particular freedom in singleness that is worth embracing rather than merely tolerating. If you are single, now is the time for things that marriage and family will make more difficult: extended mission trips, starting something from scratch, moving to a new city to serve a need, taking significant financial risks for kingdom causes.",
    questions: ["What does my current single season uniquely position me to do or be?", "Am I using my freedom for something meaningful, or filling it with distractions?", "Where do I sense God specifically calling me in this season?"],
    verse: "The unmarried person is anxious about the things of the Lord, how to please the Lord. — 1 Corinthians 7:32",
  },
];

const PRACTICES = [
  { label: "Develop your 'family of choice'", desc: "Intentionally cultivate deep, committed friendships that function as family — share meals regularly, know each other's lives, commit to showing up." },
  { label: "Don't wait to live", desc: "Buy the house, travel, start the ministry — don't put life on hold waiting for marriage. The life you're living now is your actual life, not practice." },
  { label: "Process loneliness in community, not in silence", desc: "Tell someone when you're lonely. Shame about loneliness feeds it. Community is the answer — but only if you ask." },
  { label: "Invest in spiritual disciplines that go deep", desc: "Your undivided attention is one of singleness's greatest gifts. Use it. Extended prayer, fasting, study — invest in formation." },
  { label: "Find a church that includes you, not just 'singles ministry'", desc: "The best churches integrate single people into the full body — households, small groups, leadership — not in parallel tracks." },
  { label: "Get a spiritual director or mentor", desc: "Someone who knows your interior life and can help you navigate both the gifts and burdens of your season well." },
];

export default function SinglesPage() {
  const [activeTab, setActiveTab] = useState<"chapters" | "practices" | "journal">("chapters");
  const [selectedChapter, setSelectedChapter] = useState("identity");
  const [checkedPractices, setCheckedPractices] = useState<Set<string>>(() => {
    try { const s = localStorage.getItem("vine_singles_checked"); return s ? new Set(JSON.parse(s)) : new Set(); } catch { return new Set(); }
  });
  const [journalText, setJournalText] = useState(() => {
    try { return localStorage.getItem("vine_singles_journal") || ""; } catch { return ""; }
  });

  useEffect(() => { try { localStorage.setItem("vine_singles_checked", JSON.stringify([...checkedPractices])); } catch {} }, [checkedPractices]);
  useEffect(() => { try { localStorage.setItem("vine_singles_journal", journalText); } catch {} }, [journalText]);

  const chapter = CHAPTERS.find(c => c.id === selectedChapter)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✨</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>The Single Life</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Singleness is not the waiting room before the real life begins. It is a calling, a season, and a gift — with specific freedoms, specific challenges, and specific formation ahead.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "chapters" as const, label: "Topics", icon: "📖" },
            { id: "practices" as const, label: "Practices", icon: "✅" },
            { id: "journal" as const, label: "My Reflection", icon: "✍️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "chapters" && (
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 180 }}>
              {CHAPTERS.map(c => (
                <button key={c.id} onClick={() => setSelectedChapter(c.id)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${selectedChapter === c.id ? c.color : BORDER}`, background: selectedChapter === c.id ? `${c.color}18` : CARD, color: selectedChapter === c.id ? c.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer", textAlign: "left" }}>
                  {c.icon} {c.title.substring(0, 22)}{c.title.length > 22 ? "..." : ""}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ background: CARD, border: `1px solid ${chapter.color}40`, borderRadius: 14, padding: 26 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 32 }}>{chapter.icon}</span>
                  <h2 style={{ color: chapter.color, fontWeight: 900, fontSize: 20, margin: 0 }}>{chapter.title}</h2>
                </div>
                {chapter.content.split("\n\n").map((para, i) => (
                  <p key={i} style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
                ))}
                <div style={{ background: `${chapter.color}10`, border: `1px solid ${chapter.color}30`, borderRadius: 8, padding: 14, marginBottom: 18 }}>
                  <p style={{ color: chapter.color, fontSize: 13, fontStyle: "italic", margin: 0 }}>{chapter.verse}</p>
                </div>
                <h4 style={{ color: MUTED, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Reflection Questions</h4>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                  {chapter.questions.map((q, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                      <span style={{ color: chapter.color, fontWeight: 900, flexShrink: 0 }}>→</span>
                      <span style={{ color: TEXT, fontSize: 14 }}>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "practices" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <h3 style={{ color: GREEN, fontWeight: 900, fontSize: 20, marginBottom: 10 }}>Practices for This Season</h3>
              <p style={{ color: TEXT, lineHeight: 1.7, fontSize: 15 }}>Click to check off practices you're actively living out. Return to unchecked ones as aspirations for growth.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {PRACTICES.map((p, i) => {
                const checked = checkedPractices.has(String(i));
                return (
                  <div key={i} onClick={() => setCheckedPractices(prev => { const n = new Set(prev); n.has(String(i)) ? n.delete(String(i)) : n.add(String(i)); return n; })}
                    style={{ background: CARD, border: `1px solid ${checked ? GREEN + "40" : BORDER}`, borderRadius: 12, padding: 18, cursor: "pointer" }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 22, height: 22, borderRadius: 4, border: `2px solid ${checked ? GREEN : BORDER}`, background: checked ? GREEN : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        {checked && <span style={{ color: BG, fontSize: 12, fontWeight: 900 }}>✓</span>}
                      </div>
                      <div>
                        <div style={{ color: checked ? GREEN : TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{p.label}</div>
                        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontWeight: 800, marginBottom: 8 }}>Reflection Journal</h3>
              <p style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>What is God doing in you through this season? What are you grateful for? What are you wrestling with?</p>
              <textarea value={journalText} onChange={e => setJournalText(e.target.value)}
                placeholder={"What I'm grateful for about this season:\n\nWhat I'm struggling with:\n\nWhat God seems to be forming in me:\n\nWhat I sense I'm being called toward:\n\nA prayer for this season:"}
                style={{ width: "100%", minHeight: 280, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: 16, color: TEXT, fontSize: 14, lineHeight: 1.8, resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
